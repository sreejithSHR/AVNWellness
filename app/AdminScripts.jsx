'use client';
import { useEffect } from 'react';
import { homepageHtml } from './homepageHtml';
import { collectEditable, applyOverrides } from './cmsEditable';

export default function AdminScripts() {
  useEffect(() => {
    const TOKEN_KEY = 'avn_admin_token';
    const $ = (s) => document.querySelector(s);
    const token = () => localStorage.getItem(TOKEN_KEY);
    if (!$('#loginForm')) return;

    // editor styling (injected once)
    if (!document.getElementById('ve-style')) {
      const st = document.createElement('style');
      st.id = 've-style';
      st.textContent = `
        #veCanvas .sticky-top{position:static!important;}
        #veCanvas .reveal{opacity:1!important;transform:none!important;}
        #veCanvas .cms-text:hover{outline:1px dashed rgba(31,74,53,.45);outline-offset:2px;cursor:text;border-radius:3px;}
        #veCanvas .cms-text:focus{outline:2px solid #C2A35A;outline-offset:2px;background:rgba(194,163,90,.12);border-radius:3px;}
        #veCanvas .ve-img{cursor:pointer;transition:outline .15s;}
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
    const escapeHtml = (s) => String(s ?? '').replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

    // ---------- Visual editor ----------
    let veItems = [], veInitial = {}, veVideoInitial = '';
    const veStatus = (txt) => { const e = $('#veStatus'); if (e) { e.textContent = txt; if (txt) setTimeout(() => { if (e.textContent === txt) e.textContent = ''; }, 3000); } };

    function initVisualEditor(overrides) {
      const canvas = $('#veCanvas');
      canvas.innerHTML = homepageHtml;
      veItems = collectEditable(canvas);
      applyOverrides(veItems, overrides);
      veInitial = {};
      veItems.forEach((it) => {
        veInitial[it.key] = it.type === 'text' ? it.el.textContent : it.el.getAttribute('src');
        if (it.type === 'text') {
          it.el.setAttribute('contenteditable', 'true');
          it.el.setAttribute('spellcheck', 'false');
        } else {
          it.el.classList.add('ve-img');
          it.el.title = 'Click to replace image';
          it.el.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); replaceImage(it); });
        }
      });
      $('#veVideo').value = overrides['video.youtube'] || '';
      veVideoInitial = $('#veVideo').value;
      // block navigation / popups inside the editing canvas
      canvas.addEventListener('click', (e) => {
        if (e.target.classList && e.target.classList.contains('ve-img')) return;
        const a = e.target.closest('a, button, [data-bs-toggle]');
        if (a) { e.preventDefault(); e.stopPropagation(); }
      }, true);
    }

    function replaceImage(it) {
      const input = document.createElement('input');
      input.type = 'file'; input.accept = 'image/*';
      input.onchange = async () => {
        const file = input.files[0]; if (!file) return;
        veStatus('Uploading…');
        const fd = new FormData(); fd.append('image', file);
        try { const { url } = await api('POST', '/upload', fd, true); it.el.setAttribute('src', url); veStatus('Image replaced — remember to Save'); }
        catch (e) { alert('Upload failed: ' + e.message); veStatus(''); }
      };
      input.click();
    }

    async function veSave() {
      const patch = {};
      veItems.forEach((it) => {
        const cur = it.type === 'text' ? it.el.textContent : it.el.getAttribute('src');
        if (cur !== veInitial[it.key]) patch[it.key] = cur;
      });
      const vid = $('#veVideo').value.trim();
      if (vid !== veVideoInitial) patch['video.youtube'] = vid;
      if (!Object.keys(patch).length) { veStatus('No changes to save'); return; }
      try {
        await api('PUT', '/content', patch);
        Object.keys(patch).forEach((k) => { if (k !== 'video.youtube') veInitial[k] = patch[k]; });
        veVideoInitial = vid;
        veStatus('Saved ✓ — now live on the site');
      } catch (e) { alert('Save failed: ' + e.message); }
    }

    // ---------- Enquiries ----------
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
          <button class="btn btn-sm btn-light" data-done="${r.id}" data-status="${r.status}">✓</button>
          <button class="btn btn-sm btn-light text-danger" data-del="${r.id}">✕</button>
        </td></tr>`;
    }
    async function loadEnquiries() {
      const tbody = $('#enqRows');
      try {
        const rows = await api('GET', '/enquiries');
        $('#enqCount').textContent = rows.length;
        $('#enqCount').classList.toggle('d-none', rows.length === 0);
        if (!rows.length) { tbody.innerHTML = '<tr><td colspan="6" class="text-center text-muted py-5">No enquiries yet.</td></tr>'; return; }
        tbody.innerHTML = rows.map(rowHtml).join('');
        tbody.querySelectorAll('[data-done]').forEach((b) => b.addEventListener('click', async () => {
          await api('PATCH', '/enquiries/' + b.dataset.done, { status: b.dataset.status === 'new' ? 'contacted' : 'new' }); loadEnquiries();
        }));
        tbody.querySelectorAll('[data-del]').forEach((b) => b.addEventListener('click', async () => {
          if (!confirm('Delete this enquiry?')) return; await api('DELETE', '/enquiries/' + b.dataset.del); loadEnquiries();
        }));
      } catch (e) { tbody.innerHTML = `<tr><td colspan="6" class="text-center text-danger py-5">${escapeHtml(e.message)}</td></tr>`; }
    }

    // ---------- views ----------
    function showLogin() { $('#loginView').classList.remove('d-none'); $('#dashView').classList.add('d-none'); }
    async function showDash() {
      $('#loginView').classList.add('d-none'); $('#dashView').classList.remove('d-none');
      try { initVisualEditor(await api('GET', '/content')); } catch (e) { initVisualEditor({}); }
      loadEnquiries();
    }

    // ---------- events ----------
    $('#loginForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const err = $('#loginError'); err.classList.add('d-none');
      try {
        const { token: t } = await api('POST', '/login', { username: $('#username').value, password: $('#password').value });
        localStorage.setItem(TOKEN_KEY, t); showDash();
      } catch (ex) { err.textContent = ex.message; err.classList.remove('d-none'); }
    });
    $('#logoutBtn').addEventListener('click', () => { localStorage.removeItem(TOKEN_KEY); showLogin(); });
    $('#veSave').addEventListener('click', veSave);
    document.querySelectorAll('[data-tab]').forEach((b) => b.addEventListener('click', () => {
      document.querySelectorAll('[data-tab]').forEach((x) => x.classList.remove('active'));
      b.classList.add('active');
      $('#tab-content').classList.toggle('d-none', b.dataset.tab !== 'content');
      $('#tab-enquiries').classList.toggle('d-none', b.dataset.tab !== 'enquiries');
    }));

    if (token()) showDash(); else showLogin();
  }, []);

  return null;
}
