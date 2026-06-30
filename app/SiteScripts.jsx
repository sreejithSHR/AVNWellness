'use client';
import { useEffect } from 'react';
import 'glightbox/dist/css/glightbox.min.css';
import { collectEditable, applyOverrides } from './cmsEditable';
import { applySections } from './sections';

export default function SiteScripts() {
  useEffect(() => {
    let lightbox;
    let cancelled = false;

    (async () => {
      const bootstrap = await import('bootstrap');
      const GLightbox = (await import('glightbox')).default;
      if (cancelled) return;

      // ---- GLightbox (video popups) ----
      lightbox = GLightbox({ touchNavigation: true, loop: true, autoplayVideos: true });

      // ---- CMS: apply editable overrides to the whole page ----
      try {
        const root = document.getElementById('site-root') || document.body;
        const items = collectEditable(root);
        const res = await fetch('/api/content', { cache: 'no-store' });
        if (res.ok) {
          const c = await res.json();
          applySections(root, c); // data-driven sections (programs/pricing/testimonials/faq/gallery)
          applyOverrides(items, c);
          // special: free-session video URL on [data-cms-href]
          if (c['video.youtube']) {
            document.querySelectorAll('[data-cms-href="video.youtube"]').forEach((el) =>
              el.setAttribute('href', c['video.youtube']));
          }
          lightbox.reload();
        }
      } catch (e) {
        /* offline — keep static content */
      }

      // ---- Enquiry / consultation popup ----
      const modalEl = document.getElementById('enquiryModal');
      if (modalEl) {
        const modal = new bootstrap.Modal(modalEl);
        const form = document.getElementById('enquiryForm');
        const success = document.getElementById('enquirySuccess');
        const msg = document.getElementById('enquiryMsg');
        const progField = document.getElementById('enquiryProgram');
        const progRow = document.getElementById('enquiryProgramRow');
        const titleEl = document.getElementById('enquiryTitle');

        const open = (program) => {
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
        };

        document.querySelectorAll('a[href="#consultation"], [data-enquiry]').forEach((el) => {
          el.addEventListener('click', (e) => {
            e.preventDefault();
            const card = el.closest('.card');
            const program =
              el.dataset.program ||
              (card && card.querySelector('h3') ? card.querySelector('h3').textContent.trim() : '');
            open(program);
          });
        });

        const submit = async (payload, onDone) => {
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
        };

        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const f = (sel) => (form.querySelector(sel) || {}).value || '';
          msg.textContent = 'Sending…';
          msg.className = 'small mt-3 text-muted';
          submit(
            {
              name: f('[name=name]'), phone: f('[name=phone]'), email: f('[name=email]'),
              profession: f('[name=profession]'), concern: f('[name=concern]'),
              program: progField.value, message: f('[name=message]'), source: 'popup',
            },
            (ok, error) => {
              if (ok) {
                form.classList.add('d-none');
                success.classList.remove('d-none');
              } else {
                msg.textContent = error || 'Could not send. Please try again.';
                msg.className = 'small mt-3 text-danger';
              }
            }
          );
        });

        const sectionForm = document.querySelector('#consultation form');
        if (sectionForm) {
          sectionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const g = (id) => (document.getElementById(id) || {}).value || '';
            const btn = sectionForm.querySelector('[type="submit"]');
            const orig = btn ? btn.textContent : '';
            if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
            submit(
              {
                name: g('enqName'), phone: g('enqPhone'), email: g('enqEmail'),
                profession: g('enqProfession'), concern: g('enqConcern'), source: 'contact-form',
              },
              (ok, error) => {
                if (btn) { btn.disabled = false; btn.textContent = orig; }
                if (ok) { sectionForm.reset(); alert('Thank you! Your enquiry has been received.'); }
                else { alert(error || 'Could not send. Please try again.'); }
              }
            );
          });
        }
      }

      // ---- Scroll reveal ----
      if ('IntersectionObserver' in window) {
        document.body.classList.add('reveal-ready');
        const els = new Set();
        [
          'section .row.text-center > [class*="col-"]',
          '.row > [class*="col-"] > .card',
          'section .bg-primary.rounded-5',
          '[data-reveal]',
        ].forEach((sel) => document.querySelectorAll(sel).forEach((e) => els.add(e)));
        els.forEach((e) => e.classList.add('reveal'));
        document.querySelectorAll('.row').forEach((row) => {
          Array.from(row.children).forEach((col, idx) => {
            const t = col.querySelector(':scope > .card.reveal') || (col.classList.contains('reveal') ? col : null);
            if (t) t.style.transitionDelay = ((idx % 4) * 0.09).toFixed(2) + 's';
          });
        });
        const io = new IntersectionObserver(
          (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }),
          { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
        );
        els.forEach((e) => io.observe(e));
        setTimeout(() => els.forEach((e) => e.classList.add('in')), 4000);
      }

      // ---- Smooth scroll + active nav ----
      document.querySelectorAll('.nav-link[href^="#"]').forEach((link) => {
        link.addEventListener('click', function (e) {
          const target = document.querySelector(this.getAttribute('href'));
          if (target) { e.preventDefault(); window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' }); }
        });
      });
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link');
      window.addEventListener('scroll', () => {
        const pos = window.scrollY + 100;
        sections.forEach((sec) => {
          if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
            navLinks.forEach((l) => {
              l.classList.remove('active');
              if (l.getAttribute('href') === `#${sec.id}`) l.classList.add('active');
            });
          }
        });
      });
    })();

    return () => { cancelled = true; try { lightbox && lightbox.destroy(); } catch (e) {} };
  }, []);

  return null;
}
