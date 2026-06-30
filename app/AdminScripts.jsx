'use client';
import { useEffect } from 'react';
import { homepageHtml } from './homepageHtml';
import { collectEditable, applyOverrides } from './cmsEditable';
import { applySections, ACCENT_NAMES, ICON_NAMES } from './sections';

export default function AdminScripts() {
  useEffect(() => {
    const TOKEN_KEY = 'avn_admin_token';
    const $ = (s) => document.querySelector(s);
    const token = () => localStorage.getItem(TOKEN_KEY);
    if (!$('#loginForm')) return;

    if (!document.getElementById('admin-style')) {
      const st = document.createElement('style');
      st.id = 'admin-style';
      st.textContent = `
        .admin-sidebar{width:232px;min-height:100vh;position:sticky;top:0;z-index:1040;}
        .admin-sidebar .nav-link{color:#444 !important;border-radius:.5rem;font-size:.92rem;}
        .admin-sidebar .nav-link.active,
        .admin-sidebar .nav-link.active:hover,
        .admin-sidebar .nav-link.active:focus{background:#1F4A35 !important;color:#fff !important;}
        .admin-sidebar .nav-link:hover:not(.active),
        .admin-sidebar .nav-link:focus:not(.active){background:#f0ece2;color:#1F4A35 !important;}
        .admin-main{padding:1.25rem 1.5rem;}
        .admin-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:1035;}
        @media(max-width:991.98px){
          .admin-sidebar{position:fixed;left:0;top:0;bottom:0;transform:translateX(-100%);transition:transform .2s;}
          .admin-sidebar.open{transform:none;}
          .admin-main{padding:1rem;}
        }
        #veCanvas .sticky-top{position:static!important;}
        #veCanvas .reveal{opacity:1!important;transform:none!important;}
        #veCanvas .cms-text:hover{outline:1px dashed rgba(31,74,53,.45);outline-offset:2px;cursor:text;border-radius:3px;}
        #veCanvas .cms-text:focus{outline:2px solid #C2A35A;outline-offset:2px;background:rgba(194,163,90,.12);border-radius:3px;}
        #veCanvas .ve-img{cursor:pointer;}
        #veCanvas .ve-img:hover{outline:3px dashed #C2A35A;outline-offset:3px;}`;
      document.head.appendChild(st);
    }

    async function api(method, path, body, isForm) {
      const headers = {};
      if (token()) headers.Authorization = 'Bearer ' + token();
      if (!isForm && body) headers['Content-Type'] = 'application/json';
      const res = await fetch('/api' + path, { method, headers, cache: 'no-store', body: isForm ? body : body ? JSON.stringify(body) : undefined });
      if (res.status === 401) { localStorage.removeItem(TOKEN_KEY); showLogin(); throw new Error('Session expired — please sign in again.'); }
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Request failed');
      return data;
    }
    const esc = (s) => String(s ?? '').replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
    const escA = (s) => String(s ?? '').replace(/"/g, '&quot;');
    async function uploadFile(file) { const fd = new FormData(); fd.append('image', file); const { url } = await api('POST', '/upload', fd, true); return url; }

    let content = {};

    // ---------------- Visual editor ----------------
    let veItems = [], veInitial = {}, veVideoInitial = '';
    const veStatus = (t) => { const e = $('#veStatus'); if (e) { e.textContent = t; if (t) setTimeout(() => { if (e.textContent === t) e.textContent = ''; }, 3000); } };

    function initVisualEditor() {
      const canvas = $('#veCanvas');
      canvas.innerHTML = homepageHtml;
      applySections(canvas, content);
      veItems = collectEditable(canvas);
      applyOverrides(veItems, content);
      veInitial = {};
      veItems.forEach((it) => {
        veInitial[it.key] = it.type === 'text' ? it.el.textContent : it.el.getAttribute('src');
        if (it.type === 'text') { it.el.setAttribute('contenteditable', 'true'); it.el.setAttribute('spellcheck', 'false'); }
        else { it.el.classList.add('ve-img'); it.el.title = 'Click to replace image'; it.el.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); replaceImage(it); }); }
      });
      $('#veVideo').value = content['video.youtube'] || '';
      veVideoInitial = $('#veVideo').value;
      canvas.addEventListener('click', (e) => {
        if (e.target.classList && e.target.classList.contains('ve-img')) return;
        const a = e.target.closest('a, button, [data-bs-toggle]');
        if (a) { e.preventDefault(); e.stopPropagation(); }
      }, true);
    }
    function replaceImage(it) {
      const input = document.createElement('input'); input.type = 'file'; input.accept = 'image/*';
      input.onchange = async () => { const f = input.files[0]; if (!f) return; veStatus('Uploading…'); try { it.el.setAttribute('src', await uploadFile(f)); veStatus('Image replaced — remember to Save'); } catch (e) { alert('Upload failed: ' + e.message); veStatus(''); } };
      input.click();
    }
    async function veSave() {
      const patch = {};
      veItems.forEach((it) => { const cur = it.type === 'text' ? it.el.textContent : it.el.getAttribute('src'); if (cur !== veInitial[it.key]) patch[it.key] = cur; });
      const vid = $('#veVideo').value.trim();
      if (vid !== veVideoInitial) patch['video.youtube'] = vid;
      if (!Object.keys(patch).length) { veStatus('No changes to save'); return; }
      try { await api('PUT', '/content', patch); Object.keys(patch).forEach((k) => { if (k !== 'video.youtube') veInitial[k] = patch[k]; }); veVideoInitial = vid; Object.assign(content, patch); veStatus('Saved ✓ — now live on the site'); }
      catch (e) { alert('Save failed: ' + e.message); }
    }

    // ---------------- Structured section editors ----------------
    const SCHEMAS = {
      programs: { title: 'Programs', fields: [
        { k: 'name', label: 'Name' }, { k: 'tagline', label: 'Tagline' },
        { k: 'accent', label: 'Accent colour', type: 'select', opts: ACCENT_NAMES },
        { k: 'icon', label: 'Icon', type: 'select', opts: ICON_NAMES },
        { k: 'duration', label: 'Duration' }, { k: 'time', label: 'Time / Day' }, { k: 'schedule', label: 'Schedule' },
        { k: 'benefits', label: 'Key Benefits (one per line)', type: 'lines' }, { k: 'bestFor', label: 'Best For', type: 'textarea' },
      ], blank: { accent: 'green', icon: 'yoga', name: 'New Program', tagline: 'Short tagline.', duration: '8 Weeks', time: '60 Min', schedule: '5 Days/Wk', benefits: ['Benefit one', 'Benefit two'], bestFor: 'Who this is for' } },
      pricing: { title: 'Pricing', fields: [
        { k: 'name', label: 'Name' }, { k: 'tagline', label: 'Tagline' },
        { k: 'accent', label: 'Accent colour', type: 'select', opts: ACCENT_NAMES },
        { k: 'icon', label: 'Icon', type: 'select', opts: ICON_NAMES },
        { k: 'badge', label: 'Top badge (e.g. MOST POPULAR / RECOMMENDED, blank for none)' },
        { k: 'price', label: 'Price (₹)' }, { k: 'regular', label: 'Regular price (₹)' }, { k: 'save', label: 'Save %' }, { k: 'intl', label: 'International price' },
        { k: 'features', label: 'Features (one per line)', type: 'lines' },
      ], blank: { accent: 'green', icon: 'yoga', badge: '', name: 'New Plan', tagline: '', price: '1999', regular: '6999', save: '71', intl: '$25', features: ['Feature one', 'Feature two'] } },
      testimonials: { title: 'Testimonials', fields: [
        { k: 'name', label: 'Name' }, { k: 'role', label: 'Role / Location' },
        { k: 'stars', label: 'Stars (1–5)' }, { k: 'quote', label: 'Quote', type: 'textarea' },
        { k: 'avatar', label: 'Photo', type: 'image' },
      ], blank: { stars: 5, name: 'New Name', role: 'Role, City', quote: '"A wonderful experience."', avatar: '/assets/images/avatar/avatar-1.jpg' } },
      faq: { title: 'FAQ', fields: [
        { k: 'q', label: 'Question' }, { k: 'a', label: 'Answer', type: 'textarea' },
      ], blank: { q: 'New question?', a: 'Answer goes here.' } },
    };

    function fieldInput(f, val) {
      if (f.type === 'select') return `<select class="form-select form-select-sm" data-f="${f.k}">${f.opts.map((o) => `<option ${o === val ? 'selected' : ''}>${o}</option>`).join('')}</select>`;
      if (f.type === 'textarea') return `<textarea class="form-control form-control-sm" data-f="${f.k}" rows="2">${esc(val)}</textarea>`;
      if (f.type === 'lines') return `<textarea class="form-control form-control-sm" data-f="${f.k}" data-lines rows="4">${esc((val || []).join('\n'))}</textarea>`;
      if (f.type === 'image') return `<div class="d-flex gap-2 align-items-center"><img src="${escA(val || '')}" class="rounded" style="width:48px;height:48px;object-fit:cover;border:1px solid #ddd;background:#f5f5f5;"><input type="file" accept="image/*" class="form-control form-control-sm" data-imgf="${f.k}"><input type="hidden" data-f="${f.k}" value="${escA(val || '')}"></div>`;
      return `<input class="form-control form-control-sm" data-f="${f.k}" value="${escA(val)}">`;
    }
    function itemCard(schema, item, idx) {
      const fields = schema.fields.map((f) => `<div class="mb-2"><label class="form-label small mb-1 fw-semibold">${f.label}</label>${fieldInput(f, item[f.k])}</div>`).join('');
      return `<div class="card border rounded-3 mb-3 section-item"><div class="card-body p-3">
        <div class="d-flex justify-content-between align-items-center mb-2"><span class="badge bg-light text-dark">#${idx + 1}</span>
        <button class="btn btn-sm btn-light text-danger" data-remove>✕ Remove</button></div>${fields}</div></div>`;
    }
    function wireItemUploads(scope) {
      scope.querySelectorAll('input[type=file][data-imgf]').forEach((inp) => {
        inp.addEventListener('change', async () => {
          const f = inp.files[0]; if (!f) return;
          try { const url = await uploadFile(f); const wrap = inp.closest('.d-flex'); wrap.querySelector('img').src = url; wrap.querySelector('[data-f]').value = url; } catch (e) { alert('Upload failed: ' + e.message); }
        });
      });
      scope.querySelectorAll('[data-remove]').forEach((b) => b.addEventListener('click', () => b.closest('.section-item').remove()));
    }
    function buildSectionPanel(name) {
      const schema = SCHEMAS[name];
      const panel = $('#panel-' + name);
      panel.innerHTML = `
        <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
          <div><h2 class="h5 fw-bold mb-1">${schema.title}</h2><p class="small text-muted mb-0">Add, edit or remove cards. Then Save.</p></div>
          <div class="d-flex gap-2 align-items-center"><span class="small text-muted" data-status></span>
            <button class="btn btn-light" data-add>+ Add</button><button class="btn btn-primary" data-save>Save</button></div>
        </div>
        <div data-list></div>`;
      const list = panel.querySelector('[data-list]');
      const render = () => { list.innerHTML = (content[name] || []).map((it, i) => itemCard(schema, it, i)).join(''); wireItemUploads(list); };
      render();
      panel.querySelector('[data-add]').addEventListener('click', () => {
        const card = document.createElement('div'); card.innerHTML = itemCard(schema, JSON.parse(JSON.stringify(schema.blank)), list.children.length);
        list.appendChild(card.firstElementChild); wireItemUploads(list); list.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
      panel.querySelector('[data-save]').addEventListener('click', async () => {
        const arr = [];
        list.querySelectorAll('.section-item').forEach((it) => {
          const obj = {};
          it.querySelectorAll('[data-f]').forEach((el) => { obj[el.dataset.f] = el.hasAttribute('data-lines') ? el.value.split('\n').map((x) => x.trim()).filter(Boolean) : el.value; });
          arr.push(obj);
        });
        const st = panel.querySelector('[data-status]'); st.textContent = 'Saving…';
        try { await api('PUT', '/content', { [name]: arr }); content[name] = arr; if ($('#veCanvas') && $('#veCanvas').innerHTML) applySections($('#veCanvas'), content); st.textContent = 'Saved ✓ — live on the site'; setTimeout(() => { st.textContent = ''; }, 3000); }
        catch (e) { st.textContent = ''; alert('Save failed: ' + e.message); }
      });
    }

    // Gallery (array of image URLs)
    function buildGalleryPanel() {
      const panel = $('#panel-gallery');
      panel.innerHTML = `
        <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
          <div><h2 class="h5 fw-bold mb-1">Gallery</h2><p class="small text-muted mb-0">Add or remove images. They open as a popup on the site.</p></div>
          <div class="d-flex gap-2 align-items-center"><span class="small text-muted" data-status></span>
            <button class="btn btn-light" data-add>+ Add image</button><button class="btn btn-primary" data-save>Save</button></div>
        </div>
        <div class="row g-3" data-list></div>`;
      const list = panel.querySelector('[data-list]');
      const itemHtml = (url) => `<div class="col-6 col-md-3 col-lg-2 gallery-edit-item"><div class="card border p-1 position-relative">
        <img src="${escA(url)}" style="width:100%;aspect-ratio:1;object-fit:cover;border-radius:6px;">
        <button class="btn btn-sm btn-light text-danger position-absolute top-0 end-0 m-1 py-0 px-2" data-remove>✕</button>
        <input type="hidden" data-f value="${escA(url)}"></div></div>`;
      const render = () => { list.innerHTML = (content.gallery || []).map(itemHtml).join(''); wireRemove(); };
      const wireRemove = () => list.querySelectorAll('[data-remove]').forEach((b) => b.addEventListener('click', () => b.closest('.gallery-edit-item').remove()));
      render();
      panel.querySelector('[data-add]').addEventListener('click', () => {
        const input = document.createElement('input'); input.type = 'file'; input.accept = 'image/*';
        input.onchange = async () => { const f = input.files[0]; if (!f) return; const st = panel.querySelector('[data-status]'); st.textContent = 'Uploading…'; try { const url = await uploadFile(f); const d = document.createElement('div'); d.innerHTML = itemHtml(url); list.appendChild(d.firstElementChild); wireRemove(); st.textContent = ''; } catch (e) { st.textContent = ''; alert('Upload failed: ' + e.message); } };
        input.click();
      });
      panel.querySelector('[data-save]').addEventListener('click', async () => {
        const arr = []; list.querySelectorAll('[data-f]').forEach((el) => arr.push(el.value));
        const st = panel.querySelector('[data-status]'); st.textContent = 'Saving…';
        try { await api('PUT', '/content', { gallery: arr }); content.gallery = arr; if ($('#veCanvas') && $('#veCanvas').innerHTML) applySections($('#veCanvas'), content); st.textContent = 'Saved ✓ — live on the site'; setTimeout(() => { st.textContent = ''; }, 3000); }
        catch (e) { st.textContent = ''; alert('Save failed: ' + e.message); }
      });
    }

    // ---------------- Enquiries ----------------
    function rowHtml(r) {
      const date = new Date(r.created_at).toLocaleString();
      const contact = [r.phone, r.email].filter(Boolean).join('<br>');
      const pc = [r.program, r.concern].filter(Boolean).join(' / ') || '—';
      const isNew = r.status === 'new';
      return `<tr>
        <td class="small text-muted">${esc(date)}</td>
        <td><div class="fw-semibold">${esc(r.name)}</div><small class="text-muted">${esc(r.profession || '')}</small></td>
        <td class="small">${contact || '—'}</td>
        <td class="small">${esc(pc)}${r.message ? `<div class="text-muted">${esc(r.message)}</div>` : ''}</td>
        <td><span class="badge ${isNew ? 'bg-warning' : 'bg-success'}">${isNew ? 'New' : 'Contacted'}</span></td>
        <td class="text-nowrap"><button class="btn btn-sm btn-light" data-done="${r.id}" data-status="${r.status}">✓</button>
        <button class="btn btn-sm btn-light text-danger" data-del="${r.id}">✕</button></td></tr>`;
    }
    async function loadEnquiries() {
      const tbody = $('#enqRows');
      try {
        const rows = await api('GET', '/enquiries');
        $('#enqCount').textContent = rows.length;
        $('#enqCount').classList.toggle('d-none', rows.length === 0);
        if (!rows.length) { tbody.innerHTML = '<tr><td colspan="6" class="text-center text-muted py-5">No enquiries yet.</td></tr>'; return; }
        tbody.innerHTML = rows.map(rowHtml).join('');
        tbody.querySelectorAll('[data-done]').forEach((b) => b.addEventListener('click', async () => { await api('PATCH', '/enquiries/' + b.dataset.done, { status: b.dataset.status === 'new' ? 'contacted' : 'new' }); loadEnquiries(); }));
        tbody.querySelectorAll('[data-del]').forEach((b) => b.addEventListener('click', async () => { if (!confirm('Delete this enquiry?')) return; await api('DELETE', '/enquiries/' + b.dataset.del); loadEnquiries(); }));
      } catch (e) { tbody.innerHTML = `<tr><td colspan="6" class="text-center text-danger py-5">${esc(e.message)}</td></tr>`; }
    }

    // ---------------- views / nav ----------------
    function showLogin() { $('#loginView').classList.remove('d-none'); $('#dashView').classList.add('d-none'); }
    function closeSidebar() { $('#adminSidebar').classList.remove('open'); $('#adminBackdrop').classList.add('d-none'); }
    async function showDash() {
      $('#loginView').classList.add('d-none'); $('#dashView').classList.remove('d-none');
      try { content = await api('GET', '/content'); } catch (e) { content = {}; }
      initVisualEditor();
      ['programs', 'pricing', 'testimonials', 'faq'].forEach(buildSectionPanel);
      buildGalleryPanel();
      loadEnquiries();
    }

    $('#loginForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const err = $('#loginError'); err.classList.add('d-none');
      try { const { token: t } = await api('POST', '/login', { username: $('#username').value, password: $('#password').value }); localStorage.setItem(TOKEN_KEY, t); showDash(); }
      catch (ex) { err.textContent = ex.message; err.classList.remove('d-none'); }
    });
    $('#logoutBtn').addEventListener('click', () => { localStorage.removeItem(TOKEN_KEY); showLogin(); });
    $('#veSave').addEventListener('click', veSave);
    $('#menuBtn').addEventListener('click', () => { $('#adminSidebar').classList.add('open'); $('#adminBackdrop').classList.remove('d-none'); });
    $('#adminBackdrop').addEventListener('click', closeSidebar);
    document.querySelectorAll('[data-panel]').forEach((b) => b.addEventListener('click', () => {
      document.querySelectorAll('[data-panel]').forEach((x) => x.classList.remove('active'));
      b.classList.add('active');
      ['editor', 'programs', 'pricing', 'testimonials', 'faq', 'gallery', 'enquiries'].forEach((p) => $('#panel-' + p).classList.toggle('d-none', p !== b.dataset.panel));
      closeSidebar();
    }));

    if (token()) showDash(); else showLogin();
  }, []);

  return null;
}
