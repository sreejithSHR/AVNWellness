


import "./glight.js"
import * as bootstrap from "bootstrap";

// ---- CMS: load editable content from the admin/API (silently skips if no backend) ----
(async function () {
  try {
    const res = await fetch('/api/content');
    if (!res.ok) return;
    const c = await res.json();
    const get = (o, p) => p.split('.').reduce((a, k) => (a == null ? a : a[k]), o);
    document.querySelectorAll('[data-cms]').forEach((el) => {
      const v = get(c, el.dataset.cms);
      if (v != null && v !== '') el.textContent = v;
    });
    document.querySelectorAll('[data-cms-img]').forEach((el) => {
      const v = get(c, el.dataset.cmsImg);
      if (v) el.setAttribute('src', v);
    });
    document.querySelectorAll('[data-cms-href]').forEach((el) => {
      const v = get(c, el.dataset.cmsHref);
      if (v) el.setAttribute('href', v);
    });
  } catch (e) { /* offline / no backend — keep static content */ }
})();

// ---- Enquiry / consultation popup ----
(function () {
  const modalEl = document.getElementById('enquiryModal');
  if (!modalEl) return;
  const modal = new bootstrap.Modal(modalEl);
  const form = document.getElementById('enquiryForm');
  const success = document.getElementById('enquirySuccess');
  const msg = document.getElementById('enquiryMsg');
  const progField = document.getElementById('enquiryProgram');
  const progRow = document.getElementById('enquiryProgramRow');
  const titleEl = document.getElementById('enquiryTitle');

  function open(program) {
    form.reset();
    form.classList.remove('d-none');
    success.classList.add('d-none');
    msg.textContent = '';
    if (program) {
      progField.value = program;
      progRow.querySelector('strong').textContent = program;
      progRow.classList.remove('d-none');
      titleEl.textContent = 'Join ' + program.replace(/AVN\s+/i, '');
    } else {
      progField.value = '';
      progRow.classList.add('d-none');
      titleEl.textContent = 'Book Your Free Consultation';
    }
    modal.show();
  }

  // Any link to #consultation or [data-enquiry] opens the popup
  document.querySelectorAll('a[href="#consultation"], [data-enquiry]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const card = el.closest('.card');
      const program = el.dataset.program || (card && card.querySelector('h3') ? card.querySelector('h3').textContent.trim() : '');
      open(program);
    });
  });

  async function submit(formEl, payload, onDone) {
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      onDone(true);
    } catch (err) {
      onDone(false, err.message);
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = (sel) => (form.querySelector(sel) || {}).value || '';
    msg.textContent = 'Sending…';
    msg.className = 'small mt-3 text-muted';
    submit(form, {
      name: f('[name=name]'), phone: f('[name=phone]'), email: f('[name=email]'),
      profession: f('[name=profession]'), concern: f('[name=concern]'),
      program: progField.value, message: f('[name=message]'), source: 'popup',
    }, (ok, error) => {
      if (ok) {
        form.classList.add('d-none');
        success.classList.remove('d-none');
      } else {
        msg.textContent = error || 'Could not send. Please try again.';
        msg.className = 'small mt-3 text-danger';
      }
    });
  });

  // Wire the consultation-section form too (if present)
  const sectionForm = document.querySelector('#consultation form');
  if (sectionForm) {
    sectionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const g = (id) => (document.getElementById(id) || {}).value || '';
      const btn = sectionForm.querySelector('[type="submit"]');
      const orig = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      submit(sectionForm, {
        name: g('enqName'), phone: g('enqPhone'), email: g('enqEmail'),
        profession: g('enqProfession'), concern: g('enqConcern'), source: 'contact-form',
      }, (ok, error) => {
        if (btn) { btn.disabled = false; btn.textContent = orig; }
        if (ok) { sectionForm.reset(); alert('Thank you! Your enquiry has been received.'); }
        else { alert(error || 'Could not send. Please try again.'); }
      });
    });
  }
})();

// Scroll reveal animations
(function () {
  if (!('IntersectionObserver' in window)) return;
  document.body.classList.add('reveal-ready');

  const els = new Set();
  [
    'section .row.text-center > [class*="col-"]',
    '.row > [class*="col-"] > .card',
    'section .bg-primary.rounded-5',
    '[data-reveal]'
  ].forEach(sel => document.querySelectorAll(sel).forEach(e => els.add(e)));

  els.forEach(e => e.classList.add('reveal'));

  // Stagger cards within each row by column index
  document.querySelectorAll('.row').forEach(row => {
    Array.from(row.children).forEach((col, idx) => {
      const t = col.querySelector(':scope > .card.reveal') || (col.classList.contains('reveal') ? col : null);
      if (t) t.style.transitionDelay = ((idx % 4) * 0.09).toFixed(2) + 's';
    });
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });

  els.forEach(e => io.observe(e));

  // Safety: reveal everything after 4s in case something stalls
  setTimeout(() => els.forEach(e => e.classList.add('in')), 4000);
})();



  // Smooth Scroll
  document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // adjust for sticky navbar height
          behavior: "smooth"
        });
      }
    });
  });

  // Active link on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 100; // offset

    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sec.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
