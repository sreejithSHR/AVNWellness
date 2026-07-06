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
        .admin-sidebar .nav-link.active,.admin-sidebar .nav-link.active:hover,.admin-sidebar .nav-link.active:focus{background:#1F4A35 !important;color:#fff !important;}
        .admin-sidebar .nav-link:hover:not(.active),.admin-sidebar .nav-link:focus:not(.active){background:#f0ece2;color:#1F4A35 !important;}
        .admin-main{padding:1.25rem 1.5rem;}
        .admin-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:1035;}
        @media(max-width:991.98px){.admin-sidebar{position:fixed;left:0;top:0;bottom:0;transform:translateX(-100%);transition:transform .2s;}.admin-sidebar.open{transform:none;}.admin-main{padding:1rem;}}
        #veCanvas .sticky-top{position:static!important;}
        #veCanvas .reveal{opacity:1!important;transform:none!important;}
        #veCanvas #galleryGrid .gallery-extra{display:block!important;}
        #veCanvas .cms-text:hover{outline:1px dashed rgba(31,74,53,.45);outline-offset:2px;cursor:text;border-radius:3px;}
        #veCanvas .cms-text:focus{outline:2px solid #C2A35A;outline-offset:2px;background:rgba(194,163,90,.12);border-radius:3px;}
        #veCanvas .ve-img{cursor:pointer;}
        #veCanvas .ve-img:hover{outline:3px dashed #C2A35A;outline-offset:3px;}
        #veCanvas .ve-img-btn{position:absolute;z-index:36;margin:8px;border:none;border-radius:8px;padding:4px 9px;background:rgba(255,255,255,.95);color:#1F4A35;font-size:12px;font-weight:600;box-shadow:0 2px 8px rgba(0,0,0,.32);cursor:pointer;opacity:.9;transition:opacity .15s,background .15s;white-space:nowrap;}
        #veCanvas .ve-img-btn:hover{opacity:1;background:#C2A35A;color:#fff;}
        #veCanvas .ve-bg{outline-offset:-3px;}
        #veCanvas .ve-bg:hover{outline:3px dashed #C2A35A;}
        #veCanvas .ve-bg-btn{position:absolute;top:12px;left:12px;z-index:35;border:none;border-radius:8px;padding:7px 13px;background:#fff;color:#1F4A35;font-size:13px;font-weight:600;box-shadow:0 3px 12px rgba(0,0,0,.3);cursor:pointer;opacity:0;transition:opacity .15s;}
        #veCanvas .ve-bg:hover>.ve-bg-btn{opacity:1;}
        #veCanvas .ve-card-wrap{position:relative;}
        #veCanvas .ve-card-ctrl{position:absolute;top:10px;right:10px;z-index:30;display:flex;gap:5px;opacity:0;transition:opacity .15s;}
        #veCanvas .ve-card-wrap:hover>.ve-card-ctrl{opacity:1;}
        #veCanvas .ve-card-ctrl button{border:none;border-radius:8px;width:34px;height:34px;background:#fff;box-shadow:0 3px 12px rgba(0,0,0,.28);cursor:pointer;font-size:15px;line-height:1;}
        #veCanvas .ve-card-ctrl .ve-del{color:#c0392b;}
        #veCanvas .ve-add-wrap{width:100%;flex:0 0 100%;}
        #veCanvas .ve-add-wrap .ve-add{border-style:dashed;}
        .ve-modal-backdrop{position:fixed;inset:0;background:rgba(15,30,25,.55);z-index:3000;display:flex;align-items:flex-start;justify-content:center;padding:3vh 1rem;overflow:auto;}
        .ve-modal{background:#fff;border-radius:16px;max-width:560px;width:100%;padding:1.5rem;box-shadow:0 20px 60px rgba(0,0,0,.35);}`;
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

    // Field schemas (also used by the in-canvas card modal)
    const SCHEMAS = {
      programs: { title: 'Program', fields: [
        { k: 'name', label: 'Name' }, { k: 'tagline', label: 'Tagline' }, { k: 'photo', label: 'Photo', type: 'image' },
        { k: 'accent', label: 'Accent colour', type: 'select', opts: ACCENT_NAMES }, { k: 'icon', label: 'Icon', type: 'select', opts: ICON_NAMES },
        { k: 'duration', label: 'Duration' }, { k: 'time', label: 'Time / Day' }, { k: 'schedule', label: 'Schedule' },
        { k: 'benefits', label: 'Key Benefits (one per line)', type: 'lines' }, { k: 'bestFor', label: 'Best For', type: 'textarea' },
      ], blank: { accent: 'green', icon: 'yoga', photo: '/assets/images/program-1.jpg', name: 'New Program', tagline: 'Short tagline.', duration: '8 Weeks', time: '60 Min', schedule: '5 Days/Wk', benefits: ['Benefit one', 'Benefit two'], bestFor: 'Who this is for' } },
      pricing: { title: 'Pricing plan', fields: [
        { k: 'name', label: 'Name' }, { k: 'tagline', label: 'Tagline' },
        { k: 'accent', label: 'Accent colour', type: 'select', opts: ACCENT_NAMES }, { k: 'icon', label: 'Icon', type: 'select', opts: ICON_NAMES },
        { k: 'badge', label: 'Top badge (MOST POPULAR / RECOMMENDED, blank for none)' },
        { k: 'price', label: 'Price (₹)' }, { k: 'regular', label: 'Regular price (₹)' }, { k: 'save', label: 'Save %' }, { k: 'intl', label: 'International price' },
        { k: 'features', label: 'Features (one per line)', type: 'lines' },
      ], blank: { accent: 'green', icon: 'yoga', badge: '', name: 'New Plan', tagline: '', price: '1999', regular: '6999', save: '71', intl: '$25', features: ['Feature one', 'Feature two'] } },
      testimonials: { title: 'Testimonial', fields: [
        { k: 'name', label: 'Name' }, { k: 'role', label: 'Role / Location' }, { k: 'age', label: 'Age' }, { k: 'stars', label: 'Stars (1–5)' },
        { k: 'programTaken', label: 'Program Taken' }, { k: 'healthIssues', label: 'Health Issues' }, { k: 'benefitsGained', label: 'Benefits Gained' },
        { k: 'avatar', label: 'Photo', type: 'image' },
      ], blank: { stars: 5, name: 'New Name', role: 'Role, City', age: '35', programTaken: 'Professional Stress Reset', healthIssues: 'Stress, Poor Sleep', benefitsGained: 'Better sleep, Calmer mind', avatar: '/assets/images/avatar/avatar-1.jpg' } },
      faq: { title: 'FAQ', fields: [{ k: 'q', label: 'Question' }, { k: 'a', label: 'Answer', type: 'textarea' }], blank: { q: 'New question?', a: 'Answer goes here.' } },
    };
    const LABELS = { programs: 'Program', pricing: 'Plan', testimonials: 'Testimonial', faq: 'FAQ', gallery: 'Image' };
    const GRIDS = [['programsGrid', 'programs'], ['pricingGrid', 'pricing'], ['testimonialsGrid', 'testimonials'], ['faqAccordion', 'faq'], ['galleryGrid', 'gallery']];

    function fieldInput(f, val) {
      if (f.type === 'select') return `<select class="form-select form-select-sm" data-f="${f.k}">${f.opts.map((o) => `<option ${o === val ? 'selected' : ''}>${o}</option>`).join('')}</select>`;
      if (f.type === 'textarea') return `<textarea class="form-control form-control-sm" data-f="${f.k}" rows="2">${esc(val)}</textarea>`;
      if (f.type === 'lines') return `<textarea class="form-control form-control-sm" data-f="${f.k}" data-lines rows="4">${esc((val || []).join('\n'))}</textarea>`;
      if (f.type === 'image') return `<div class="d-flex gap-2 align-items-center"><img src="${escA(val || '')}" class="rounded" style="width:48px;height:48px;object-fit:cover;border:1px solid #ddd;background:#f5f5f5;"><input type="file" accept="image/*" class="form-control form-control-sm" data-imgf="${f.k}"><input type="hidden" data-f="${f.k}" value="${escA(val || '')}"></div>`;
      return `<input class="form-control form-control-sm" data-f="${f.k}" value="${escA(val)}">`;
    }
    function wireModalUploads(scope) {
      scope.querySelectorAll('input[type=file][data-imgf]').forEach((inp) => inp.addEventListener('change', async () => {
        const f = inp.files[0]; if (!f) return;
        try { const url = await uploadFile(f); const wrap = inp.closest('.d-flex'); wrap.querySelector('img').src = url; wrap.querySelector('[data-f]').value = url; } catch (e) { alert('Upload failed: ' + e.message); }
      }));
    }

    let content = {};
    let dirtyStructured = false;

    // ---------------- Visual editor ----------------
    let veItems = [], veInitial = {}, veVideoInitial = '';
    const veStatus = (t, keep) => { const e = $('#veStatus'); if (e) { e.textContent = t; if (t && !keep) setTimeout(() => { if (e.textContent === t) e.textContent = ''; }, 3000); } };
    function markDirty() { dirtyStructured = true; $('#veDiscard').classList.remove('d-none'); veStatus('Unsaved changes', true); }
    function clearDirty() { dirtyStructured = false; $('#veDiscard').classList.add('d-none'); }

    function initVisualEditor() {
      const canvas = $('#veCanvas');
      canvas.innerHTML = homepageHtml;
      applySections(canvas, content);
      veItems = collectEditable(canvas);
      applyOverrides(veItems, content);
      veInitial = {};
      veItems.forEach((it) => {
        if (it.type === 'text') { veInitial[it.key] = it.el.textContent; it.el.setAttribute('contenteditable', 'true'); it.el.setAttribute('spellcheck', 'false'); }
        else if (it.type === 'img') { veInitial[it.key] = it.el.getAttribute('src'); addImgControl(it); }
        else if (it.type === 'bg') { veInitial[it.key] = it.el.getAttribute('data-cms-bg'); addBgControl(it); }
      });
      $('#veVideo').value = content['video.youtube'] || '';
      veVideoInitial = $('#veVideo').value;
      decorateStructured(canvas);
      if (!canvas.dataset.blocker) {
        canvas.dataset.blocker = '1';
        canvas.addEventListener('click', (e) => {
          if (e.target.closest('.ve-card-ctrl, .ve-add-wrap, .cms-text, .ve-bg-btn, .ve-img-btn')) return;
          if (e.target.classList && e.target.classList.contains('ve-img')) return;
          const a = e.target.closest('a, button, [data-bs-toggle]');
          if (a) { e.preventDefault(); e.stopPropagation(); }
        }, true);
      }
    }
    function replaceImage(it) {
      const input = document.createElement('input'); input.type = 'file'; input.accept = 'image/*';
      input.onchange = async () => { const f = input.files[0]; if (!f) return; veStatus('Uploading…', true); try { it.el.setAttribute('src', await uploadFile(f)); veStatus('Image replaced — remember to Save'); } catch (e) { alert('Upload failed: ' + e.message); veStatus(''); } };
      input.click();
    }
    function addImgControl(it) {
      const img = it.el;
      img.classList.add('ve-img');
      img.title = 'Click to replace image';
      img.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); replaceImage(it); });
      const parent = img.parentElement;
      if (!parent) return;
      if (getComputedStyle(parent).position === 'static') parent.style.position = 'relative';
      const btn = document.createElement('button');
      btn.type = 'button'; btn.className = 've-img-btn'; btn.textContent = '🖼 Change';
      btn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); replaceImage(it); });
      parent.appendChild(btn);
      const place = () => { btn.style.top = img.offsetTop + 'px'; btn.style.left = img.offsetLeft + 'px'; };
      place();
      if (!img.complete) img.addEventListener('load', place, { once: true });
      setTimeout(place, 300);
    }
    function addBgControl(it) {
      it.el.classList.add('ve-bg');
      if (getComputedStyle(it.el).position === 'static') it.el.style.position = 'relative';
      const btn = document.createElement('button');
      btn.type = 'button'; btn.className = 've-bg-btn'; btn.textContent = '🖼 Change background';
      it.el.appendChild(btn);
      btn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); replaceBg(it); });
    }
    function replaceBg(it) {
      const input = document.createElement('input'); input.type = 'file'; input.accept = 'image/*';
      input.onchange = async () => { const f = input.files[0]; if (!f) return; veStatus('Uploading…', true); try { const url = await uploadFile(f); it.el.style.backgroundImage = `url("${url}")`; it.el.setAttribute('data-cms-bg', url); veStatus('Background replaced — remember to Save'); } catch (e) { alert('Upload failed: ' + e.message); veStatus(''); } };
      input.click();
    }

    function reRenderSections() {
      const canvas = $('#veCanvas');
      applySections(canvas, content);
      decorateStructured(canvas);
    }

    function decorateStructured(canvas) {
      GRIDS.forEach(([gid, section]) => {
        const grid = canvas.querySelector('#' + gid);
        if (!grid) return;
        const cards = Array.from(grid.children).filter((c) => !c.classList.contains('ve-add-wrap'));
        cards.forEach((card, idx) => {
          card.classList.add('ve-card-wrap');
          const ctrl = document.createElement('div');
          ctrl.className = 've-card-ctrl';
          const editIcon = section === 'gallery' ? '🖼' : '✎';
          ctrl.innerHTML = `<button class="ve-edit" title="Edit">${editIcon}</button><button class="ve-del" title="Delete">🗑</button>`;
          card.appendChild(ctrl);
          ctrl.querySelector('.ve-edit').addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); section === 'gallery' ? replaceGallery(idx) : openCardModal(section, idx); });
          ctrl.querySelector('.ve-del').addEventListener('click', (e) => {
            e.preventDefault(); e.stopPropagation();
            if (confirm('Delete this ' + LABELS[section].toLowerCase() + '?')) { content[section].splice(idx, 1); markDirty(); reRenderSections(); }
          });
        });
        const addWrap = document.createElement('div');
        addWrap.className = 've-add-wrap text-center mt-3';
        addWrap.innerHTML = `<button class="btn btn-outline-dark btn-sm ve-add">+ Add ${LABELS[section]}</button>`;
        grid.appendChild(addWrap);
        addWrap.querySelector('.ve-add').addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); section === 'gallery' ? addGallery() : addCard(section); });
      });
    }

    function addCard(section) {
      content[section] = content[section] || [];
      content[section].push(JSON.parse(JSON.stringify(SCHEMAS[section].blank)));
      markDirty(); reRenderSections();
      openCardModal(section, content[section].length - 1);
    }
    function addGallery() {
      const input = document.createElement('input'); input.type = 'file'; input.accept = 'image/*';
      input.onchange = async () => { const f = input.files[0]; if (!f) return; veStatus('Uploading…', true); try { const url = await uploadFile(f); content.gallery = content.gallery || []; content.gallery.push(url); markDirty(); reRenderSections(); veStatus(''); } catch (e) { alert('Upload failed: ' + e.message); } };
      input.click();
    }
    function replaceGallery(idx) {
      const input = document.createElement('input'); input.type = 'file'; input.accept = 'image/*';
      input.onchange = async () => { const f = input.files[0]; if (!f) return; try { content.gallery[idx] = await uploadFile(f); markDirty(); reRenderSections(); } catch (e) { alert('Upload failed: ' + e.message); } };
      input.click();
    }

    function openCardModal(section, idx) {
      const schema = SCHEMAS[section];
      const item = content[section][idx] || {};
      const overlay = document.createElement('div');
      overlay.className = 've-modal-backdrop';
      const fields = schema.fields.map((f) => `<div class="mb-2"><label class="form-label small mb-1 fw-semibold">${f.label}</label>${fieldInput(f, item[f.k])}</div>`).join('');
      overlay.innerHTML = `<div class="ve-modal">
        <div class="d-flex justify-content-between align-items-center mb-3"><h3 class="h6 fw-bold mb-0">Edit ${schema.title}</h3><button class="btn-close ve-x"></button></div>
        <div>${fields}</div>
        <div class="d-flex justify-content-end gap-2 mt-3"><button class="btn btn-light ve-cancel">Cancel</button><button class="btn btn-primary ve-apply">Apply</button></div></div>`;
      document.body.appendChild(overlay);
      wireModalUploads(overlay);
      const close = () => overlay.remove();
      overlay.querySelector('.ve-x').addEventListener('click', close);
      overlay.querySelector('.ve-cancel').addEventListener('click', close);
      overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
      overlay.querySelector('.ve-apply').addEventListener('click', () => {
        const obj = {};
        overlay.querySelectorAll('[data-f]').forEach((el) => { obj[el.dataset.f] = el.hasAttribute('data-lines') ? el.value.split('\n').map((x) => x.trim()).filter(Boolean) : el.value; });
        content[section][idx] = obj;
        markDirty(); reRenderSections(); close();
      });
    }

    const curVal = (it) => it.type === 'text' ? it.el.textContent : it.type === 'img' ? it.el.getAttribute('src') : it.el.getAttribute('data-cms-bg');
    async function veSave() {
      const patch = {};
      veItems.forEach((it) => { const cur = curVal(it); if (cur !== veInitial[it.key]) patch[it.key] = cur; });
      const vid = $('#veVideo').value.trim();
      if (vid !== veVideoInitial) patch['video.youtube'] = vid;
      if (dirtyStructured) ['programs', 'pricing', 'testimonials', 'faq', 'gallery'].forEach((k) => { if (content[k]) patch[k] = content[k]; });
      if (!Object.keys(patch).length) { veStatus('No changes to save'); return; }
      veStatus('Saving…', true);
      try {
        const saved = await api('PUT', '/content', patch);
        veItems.forEach((it) => { veInitial[it.key] = curVal(it); });
        veVideoInitial = vid; content = saved; clearDirty();
        veStatus('Saved ✓ — now live on the site');
      } catch (e) { alert('Save failed: ' + e.message); veStatus(''); }
    }

    async function veDiscard() {
      if (!confirm('Discard unsaved changes?')) return;
      try { content = await api('GET', '/content'); } catch (e) { }
      clearDirty(); initVisualEditor(); veStatus('Changes discarded');
    }

    async function openHistory() {
      let versions;
      try { versions = await api('GET', '/versions'); } catch (e) { alert(e.message); return; }
      const overlay = document.createElement('div'); overlay.className = 've-modal-backdrop';
      const rows = versions.map((v, i) => `<div class="d-flex justify-content-between align-items-center border-bottom py-2 gap-2">
        <div><div class="small fw-semibold">${esc(new Date(v.created_at).toLocaleString())}</div><div class="text-muted" style="font-size:12px;">${esc(v.label || 'Edit')}${i === 0 ? ' · current' : ''}</div></div>
        <button class="btn btn-sm ${i === 0 ? 'btn-light' : 'btn-outline-dark'}" data-restore="${v.id}" ${i === 0 ? 'disabled' : ''}>${i === 0 ? 'Current' : 'Restore'}</button></div>`).join('');
      overlay.innerHTML = `<div class="ve-modal"><div class="d-flex justify-content-between align-items-center mb-2"><h3 class="h6 fw-bold mb-0">⟲ Version History</h3><button class="btn-close ve-x"></button></div>
        <p class="small text-muted">Restore a previous saved version — it becomes live and is itself saved as a new version, so you can always undo.</p>
        <div>${rows || '<p class="text-muted small">No versions yet — save an edit first.</p>'}</div></div>`;
      document.body.appendChild(overlay);
      const close = () => overlay.remove();
      overlay.querySelector('.ve-x').addEventListener('click', close);
      overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
      overlay.querySelectorAll('[data-restore]').forEach((b) => b.addEventListener('click', async () => {
        if (!confirm('Restore this version? Any unsaved edits will be lost.')) return;
        try { content = await api('POST', '/versions/restore', { id: Number(b.dataset.restore) }); clearDirty(); initVisualEditor(); veStatus('Version restored ✓'); close(); }
        catch (e) { alert('Restore failed: ' + e.message); }
      }));
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
    $('#veDiscard').addEventListener('click', veDiscard);
    $('#veHistory').addEventListener('click', openHistory);
    $('#menuBtn').addEventListener('click', () => { $('#adminSidebar').classList.add('open'); $('#adminBackdrop').classList.remove('d-none'); });
    $('#adminBackdrop').addEventListener('click', closeSidebar);
    document.querySelectorAll('[data-panel]').forEach((b) => b.addEventListener('click', () => {
      document.querySelectorAll('[data-panel]').forEach((x) => x.classList.remove('active'));
      b.classList.add('active');
      ['editor', 'enquiries'].forEach((p) => $('#panel-' + p).classList.toggle('d-none', p !== b.dataset.panel));
      closeSidebar();
    }));

    if (token()) showDash(); else showLogin();
  }, []);

  return null;
}
