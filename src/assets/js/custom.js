


import "./glight.js"

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
