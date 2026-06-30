import '../scss/style.scss';

const TOKEN_KEY = 'avn_admin_token';
const $ = (s) => document.querySelector(s);
const token = () => localStorage.getItem(TOKEN_KEY);

async function api(method, path, body, isForm) {
  const headers = {};
  if (token()) headers.Authorization = 'Bearer ' + token();
  if (!isForm && body) headers['Content-Type'] = 'application/json';
  const res = await fetch('/api' + path, {
    method,
    headers,
    body: isForm ? body : body ? JSON.stringify(body) : undefined,
  });
  if (res.status === 401) {
    localStorage.removeItem(TOKEN_KEY);
    showLogin();
    throw new Error('Session expired — please sign in again.');
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

// dot-path helpers
const getPath = (o, p) => p.split('.').reduce((a, k) => (a == null ? a : a[k]), o);
function setPath(o, p, v) {
  const keys = p.split('.');
  let cur = o;
  keys.slice(0, -1).forEach((k) => (cur = cur[k] = cur[k] || {}));
  cur[keys[keys.length - 1]] = v;
}

// ---------- Content editor ----------
const FIELDS = [
  { group: 'Hero Section', items: [
    { key: 'hero.badge', label: 'Badge text' },
    { key: 'hero.title1', label: 'Headline line 1' },
    { key: 'hero.title2', label: 'Headline line 2' },
    { key: 'hero.title3', label: 'Headline line 3 (gold)' },
    { key: 'hero.subtitle', label: 'Subtitle', type: 'textarea' },
    { key: 'hero.quote', label: 'Quote card text', type: 'textarea' },
    { key: 'hero.image', label: 'Hero image', type: 'image' },
  ]},
  { group: 'Stats', items: [
    { key: 'stats.years', label: 'Years of experience' },
    { key: 'stats.sessions', label: 'Guided sessions' },
    { key: 'stats.countries', label: 'Countries' },
  ]},
  { group: 'Free Session Video', items: [
    { key: 'video.youtube', label: 'YouTube video URL' },
  ]},
  { group: 'Contact Details', items: [
    { key: 'contact.phone', label: 'Phone' },
    { key: 'contact.email', label: 'Email' },
    { key: 'contact.location', label: 'Location' },
  ]},
];

let content = {};

function renderContent() {
  const wrap = $('#contentFields');
  wrap.innerHTML = '';
  FIELDS.forEach((g) => {
    const col = document.createElement('div');
    col.className = 'col-lg-6';
    let inner = `<div class="card rounded-4 shadow-sm border h-100"><div class="card-body p-4">
      <h3 class="h6 fw-bold mb-3 text-primary">${g.group}</h3>`;
    g.items.forEach((f) => {
      const val = getPath(content, f.key) ?? '';
      const id = 'f_' + f.key.replace(/\./g, '_');
      if (f.type === 'image') {
        inner += `<div class="mb-3">
          <label class="form-label small">${f.label}</label>
          <div class="d-flex align-items-center gap-3">
            <img id="${id}_preview" src="${val}" alt="" style="width:84px;height:84px;object-fit:cover;border-radius:12px;border:1px solid #ddd;background:#f5f5f5;">
            <div class="flex-grow-1">
              <input type="file" accept="image/*" class="form-control form-control-sm" data-img="${f.key}" data-preview="${id}_preview">
              <input type="hidden" data-field="${f.key}" id="${id}" value="${escapeAttr(val)}">
              <small class="text-muted">JPG/PNG, up to 6MB.</small>
            </div>
          </div></div>`;
      } else if (f.type === 'textarea') {
        inner += `<div class="mb-3"><label class="form-label small">${f.label}</label>
          <textarea class="form-control" rows="2" data-field="${f.key}">${escapeHtml(val)}</textarea></div>`;
      } else {
        inner += `<div class="mb-3"><label class="form-label small">${f.label}</label>
          <input class="form-control" data-field="${f.key}" value="${escapeAttr(val)}"></div>`;
      }
    });
    inner += `</div></div>`;
    col.innerHTML = inner;
    wrap.appendChild(col);
  });

  // image upload handlers
  wrap.querySelectorAll('input[type=file][data-img]').forEach((inp) => {
    inp.addEventListener('change', async () => {
      const file = inp.files[0];
      if (!file) return;
      const fd = new FormData();
      fd.append('image', file);
      try {
        const { url } = await api('POST', '/upload', fd, true);
        const key = inp.dataset.img;
        wrap.querySelector(`[data-field="${key}"]`).value = url;
        document.getElementById(inp.dataset.preview).src = url;
      } catch (e) {
        alert('Upload failed: ' + e.message);
      }
    });
  });
}

async function saveContent() {
  const patch = {};
  document.querySelectorAll('#contentFields [data-field]').forEach((el) => setPath(patch, el.dataset.field, el.value));
  try {
    content = await api('PUT', '/content', patch);
    const ok = $('#contentSaved');
    ok.classList.remove('d-none');
    setTimeout(() => ok.classList.add('d-none'), 2500);
  } catch (e) {
    alert('Save failed: ' + e.message);
  }
}

// ---------- Enquiries ----------
async function loadEnquiries() {
  const tbody = $('#enqRows');
  try {
    const rows = await api('GET', '/enquiries');
    $('#enqCount').textContent = rows.length;
    $('#enqCount').classList.toggle('d-none', rows.length === 0);
    if (!rows.length) {
      tbody.innerHTML = '<tr><td colspan="6" class="text-center text-muted py-5">No enquiries yet.</td></tr>';
      return;
    }
    tbody.innerHTML = rows.map(rowHtml).join('');
    tbody.querySelectorAll('[data-done]').forEach((b) =>
      b.addEventListener('click', async () => {
        await api('PATCH', '/enquiries/' + b.dataset.done, { status: b.dataset.status === 'new' ? 'contacted' : 'new' });
        loadEnquiries();
      }));
    tbody.querySelectorAll('[data-del]').forEach((b) =>
      b.addEventListener('click', async () => {
        if (!confirm('Delete this enquiry?')) return;
        await api('DELETE', '/enquiries/' + b.dataset.del);
        loadEnquiries();
      }));
  } catch (e) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center text-danger py-5">${escapeHtml(e.message)}</td></tr>`;
  }
}

function rowHtml(r) {
  const date = new Date(r.created_at).toLocaleString();
  const contact = [r.phone, r.email].filter(Boolean).join('<br>');
  const pc = [r.program, r.concern].filter(Boolean).join(' / ') || '—';
  const isNew = r.status === 'new';
  return `<tr>
    <td class="small text-muted">${escapeHtml(date)}</td>
    <td><div class="fw-semibold">${escapeHtml(r.name)}</div><small class="text-muted">${escapeHtml(r.profession || '')}</small></td>
    <td class="small">${contact || '—'}</td>
    <td class="small">${escapeHtml(pc)}${r.message ? `<div class="text-muted">${escapeHtml(r.message)}</div>` : ''}</td>
    <td><span class="badge ${isNew ? 'bg-warning' : 'bg-success'}">${isNew ? 'New' : 'Contacted'}</span></td>
    <td class="text-nowrap">
      <button class="btn btn-sm btn-light" data-done="${r.id}" data-status="${r.status}" title="Toggle status">✓</button>
      <button class="btn btn-sm btn-light text-danger" data-del="${r.id}" title="Delete">✕</button>
    </td>
  </tr>`;
}

// ---------- helpers ----------
function escapeHtml(s) { return String(s ?? '').replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c])); }
function escapeAttr(s) { return String(s ?? '').replace(/"/g, '&quot;'); }

// ---------- views ----------
function showLogin() {
  $('#loginView').classList.remove('d-none');
  $('#dashView').classList.add('d-none');
}
async function showDash() {
  $('#loginView').classList.add('d-none');
  $('#dashView').classList.remove('d-none');
  try {
    content = await api('GET', '/content');
    renderContent();
  } catch (e) { /* ignore */ }
  loadEnquiries();
}

// ---------- events ----------
$('#loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const err = $('#loginError');
  err.classList.add('d-none');
  try {
    const { token: t } = await api('POST', '/login', { username: $('#username').value, password: $('#password').value });
    localStorage.setItem(TOKEN_KEY, t);
    showDash();
  } catch (ex) {
    err.textContent = ex.message;
    err.classList.remove('d-none');
  }
});
$('#logoutBtn').addEventListener('click', () => { localStorage.removeItem(TOKEN_KEY); showLogin(); });
$('#saveContent').addEventListener('click', saveContent);
$('#saveContent2').addEventListener('click', saveContent);
document.querySelectorAll('[data-tab]').forEach((b) =>
  b.addEventListener('click', () => {
    document.querySelectorAll('[data-tab]').forEach((x) => x.classList.remove('active'));
    b.classList.add('active');
    $('#tab-content').classList.toggle('d-none', b.dataset.tab !== 'content');
    $('#tab-enquiries').classList.toggle('d-none', b.dataset.tab !== 'enquiries');
  }));

// boot
if (token()) showDash(); else showLogin();
