// Shared renderers for the data-driven sections (Programs, Pricing, Testimonials, FAQ).
// Used by BOTH the public site and the admin (so previews match exactly).

export const ACCENTS = { green: '#1F4A35', teal: '#0E8A8A', blue: '#21489B', amber: '#B07D1A' };
export const ICONS = {
  yoga: '<circle cx="12" cy="5" r="2"/><path d="M12 7v4.5"/><path d="M5 18c1 -3.6 3.5 -5.5 7 -5.5s6 1.9 7 5.5"/><path d="M5 18h14"/><path d="M8.5 11.8c-2 .8 -3.3 2 -4 3.7"/><path d="M15.5 11.8c2 .8 3.3 2 4 3.7"/>',
  spine: '<path d="M12 3v18"/><path d="M9 6l3 -1l3 1"/><path d="M9 10l3 -1l3 1"/><path d="M9 14l3 -1l3 1"/><path d="M9 18l3 -1l3 1"/>',
  moon: '<path d="M18 4a7.5 7.5 0 0 0 -6 11.95a7.5 7.5 0 1 1 6 -11.95z"/><path d="M16.5 6.5l.4 1.1l1.1 .4l-1.1 .4l-.4 1.1l-.4 -1.1l-1.1 -.4l1.1 -.4z"/>',
  lotus: '<path d="M12 21c3.5 0 6 -2.5 6 -6c0 -2 -1 -4 -3 -5.5c0 4 -3 5.5 -3 5.5s-3 -1.5 -3 -5.5c-2 1.5 -3 3.5 -3 5.5c0 3.5 2.5 6 6 6z"/><path d="M3 15c2 1 3.5 2.5 4 4"/><path d="M21 15c-2 1 -3.5 2.5 -4 4"/>',
  heart: '<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/>',
  sparkles: '<path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"/>',
};
export const ICON_NAMES = Object.keys(ICONS);
export const ACCENT_NAMES = Object.keys(ACCENTS);

const E = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const acc = (a) => ACCENTS[a] || ACCENTS.green;
const ic = (name, w) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w || 26}" height="${w || 26}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ICONS.lotus}</svg>`;
const CHECK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg>';
const CAL = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg>';
const CLK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg>';
const STAR = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-star text-warning"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg>';
const QUOTE = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gold"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"/><path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"/></svg>';

export function renderPrograms(list) {
  return (list || []).map((c) => {
    const a = acc(c.accent);
    const cc = `<svg width="18" height="18" viewBox="0 0 24 24" class="flex-shrink-0"><circle cx="12" cy="12" r="10" fill="${a}"/><path d="M8 12.4l2.6 2.6l5 -5.6" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    const benefits = (c.benefits || []).map((b) => `<li class="d-flex gap-2 align-items-center">${cc}<span style="color:#1f1f1f;">${E(b)}</span></li>`).join('');
    return `<div class="col-lg-3 col-md-6">
      <div class="card h-100 rounded-5 shadow-sm card-lift program-card position-relative overflow-hidden" style="border-top:4px solid ${a};">
        ${c.photo ? `<img src="${E(c.photo)}" alt="${E(c.name)}" class="program-photo" style="position:absolute;top:0;right:0;width:46%;height:170px;object-fit:cover;object-position:top center;-webkit-mask-image:linear-gradient(to left,#000 30%,transparent 85%);mask-image:linear-gradient(to left,#000 30%,transparent 85%);">` : ''}
        <div class="card-body p-5 d-flex flex-column position-relative">
          <div style="min-height:176px;max-width:56%;">
            <span class="icon-shape icon-lg rounded-circle text-white mb-3" style="background:${a};box-shadow:0 0 0 4px ${a}33;">${ic(c.icon)}</span>
            <h3 class="fw-bold mb-0 lh-sm" style="font-size:1.15rem;color:${a};">${E(c.name)}</h3>
          </div>
          <p class="text-muted mb-4" style="font-size:.9rem;">${E(c.tagline)}</p>
          <div class="d-flex justify-content-between text-center rounded-3 p-3 mb-4" style="background:${a}12;">
            <div><span style="color:${a};">${CAL}</span><div class="text-muted" style="font-size:11px;">Duration</div><div class="fw-bold" style="font-size:13px;">${E(c.duration)}</div></div>
            <div class="border-start border-end px-2"><span style="color:${a};">${CLK}</span><div class="text-muted" style="font-size:11px;">Time / Day</div><div class="fw-bold" style="font-size:13px;">${E(c.time || '60 Min')}</div></div>
            <div><span style="color:${a};">${CAL}</span><div class="text-muted" style="font-size:11px;">Schedule</div><div class="fw-bold" style="font-size:13px;">${E(c.schedule || '5 Days/Wk')}</div></div>
          </div>
          <h4 class="text-uppercase fw-bold mb-3" style="color:${a};font-size:13px;letter-spacing:.06rem;">Key Benefits</h4>
          <ul class="list-unstyled d-flex flex-column gap-2 mb-4" style="font-size:.9rem;">${benefits}</ul>
          <div class="mt-auto">
            <span class="badge rounded-pill text-white mb-2 d-inline-flex align-items-center gap-1" style="background:${a};font-size:12px;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg> Best For</span>
            <p class="text-muted mb-0" style="font-size:13px;">${E(c.bestFor)}</p>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

export function renderPricing(list) {
  return (list || []).map((c) => {
    const a = acc(c.accent);
    const border = c.badge ? `border:2px solid ${a};` : '';
    const topbadge = c.badge ? `<span class="badge rounded-pill text-white position-absolute top-0 start-50 translate-middle-x mt-n3 px-3 py-2 fw-semibold" style="background:${a};z-index:2;white-space:nowrap;">&starf; ${E(c.badge)}</span>` : '';
    const feats = (c.features || []).map((f) => `<li class="d-flex gap-2"><span style="color:${a};">${CHECK.replace('16','15')}</span><span>${E(f)}</span></li>`).join('');
    return `<div class="col-lg-3 col-md-6">
      <div class="card h-100 rounded-5 shadow-sm card-lift position-relative" style="${border}">
        ${topbadge}
        <div class="card-body p-5 d-flex flex-column">
          <span class="icon-shape icon-lg rounded-circle text-white mb-3" style="background:${a};box-shadow:0 0 0 4px ${a}33;">${ic(c.icon)}</span>
          <h3 class="h6 fw-bold mb-2" style="min-height:3rem;">${E(c.name)}</h3>
          <p class="text-muted mb-4" style="font-size:12px;">${E(c.tagline)}</p>
          <div class="rounded-3 text-center fw-bold text-uppercase py-2 mb-3" style="background:${a}14;color:${a};font-size:11px;letter-spacing:.04rem;">Founding Member Launch Offer</div>
          <div class="text-center mb-3">
            <span class="fw-bold" style="font-size:2.4rem;color:${a};line-height:1;">&#8377;${E(c.price)}</span>
            <div class="small text-muted mt-1">Regular Price <s>&#8377;${E(c.regular)}</s></div>
            <div class="d-flex justify-content-center gap-2 mt-2">
              <span class="badge rounded-pill" style="background:${a}22;color:${a};">SAVE ${E(c.save)}%</span>
              <span class="badge rounded-pill bg-danger bg-opacity-10 text-danger">&#9201; ENDS SOON</span>
            </div>
          </div>
          <ul class="list-unstyled d-flex flex-column gap-2 small mb-4">${feats}</ul>
          <div class="mt-auto">
            <a href="#consultation" class="btn w-100 text-white fw-semibold mb-2" style="background:${a};">Join Program</a>
            <p class="text-center text-muted mb-0" style="font-size:12px;">International &mdash; ${E(c.intl)}</p>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

export function renderFaq(list) {
  return (list || []).map((f, i) => `
    <div class="accordion-item border rounded-4 mb-3 overflow-hidden">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faqItem${i}">${E(f.q)}</button>
      </h2>
      <div id="faqItem${i}" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body small text-muted">${E(f.a)}</div>
      </div>
    </div>`).join('');
}

const T_GRAD = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"/><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"/></svg>';
const T_HEART = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/></svg>';
const T_CHECKC = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 12l2 2l4 -4"/></svg>';
const T_USER = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg>';

export function renderTestimonials(list) {
  return (list || []).map((t) => {
    const stars = STAR.repeat(Math.max(0, Math.min(5, parseInt(t.stars, 10) || 5)));
    const avatar = t.avatar || '/assets/images/avatar/avatar-1.jpg';
    return `<div class="col-lg-4 col-md-6 col-12">
      <div class="card rounded-5 shadow-sm h-100 border">
        <div class="card-body p-5">
          <div class="d-flex align-items-start gap-3 mb-3">
            <img src="${E(avatar)}" alt="${E(t.name)}" class="rounded-circle flex-shrink-0 shadow-sm" style="width:64px;height:64px;object-fit:cover;">
            <div class="flex-grow-1 lh-sm">
              <div class="d-flex justify-content-between align-items-start gap-2">
                <h6 class="mb-1 fw-bold">${E(t.name)}</h6>
                <span class="d-flex flex-shrink-0">${stars}</span>
              </div>
              <small class="text-muted d-block">${E(t.role)}</small>
              ${t.age ? `<small class="text-muted d-inline-flex align-items-center gap-1 mt-1">${T_USER} Age ${E(t.age)}</small>` : ''}
            </div>
          </div>
          <div class="border-top pt-4 row g-3 small">
            <div class="col-7">
              <div class="fw-semibold d-flex gap-1 align-items-center mb-1" style="color:${ACCENTS.green};">${T_GRAD} Program Taken</div>
              <div class="text-muted mb-3">${E(t.programTaken)}</div>
              <div class="fw-semibold d-flex gap-1 align-items-center mb-1 text-gold">${T_HEART} Health Issues</div>
              <div class="text-muted">${E(t.healthIssues)}</div>
            </div>
            <div class="col-5">
              <div class="fw-semibold d-flex gap-1 align-items-center mb-1 text-primary">${T_CHECKC} Benefits Gained</div>
              <div class="text-muted">${E(t.benefitsGained)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

export const GALLERY_VISIBLE = 8; // 2 rows x 4 on desktop

export function renderGallery(list) {
  return (list || []).map((src, i) => `<div class="col-lg-3 col-md-4 col-6${i >= GALLERY_VISIBLE ? ' gallery-extra' : ''}">
      <a href="${E(src)}" class="glightbox gallery-img rounded-4 shadow-sm d-block" data-gallery="avn-gallery" style="aspect-ratio:1/1;" aria-label="Open image ${i + 1}">
        <img src="${E(src)}" alt="AVN wellness" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
      </a>
    </div>`).join('');
}

// Inject rendered sections into their containers, if both the container and data exist.
export function applySections(root, content) {
  if (!root || !content) return;
  const set = (id, html) => { const el = root.querySelector('#' + id); if (el && html != null) el.innerHTML = html; };
  if (content.programs) set('programsGrid', renderPrograms(content.programs));
  if (content.pricing) set('pricingGrid', renderPricing(content.pricing));
  if (content.testimonials) set('testimonialsGrid', renderTestimonials(content.testimonials));
  if (content.faq) set('faqAccordion', renderFaq(content.faq));
  if (content.gallery) {
    set('galleryGrid', renderGallery(content.gallery));
    const more = root.querySelector('#galleryMore');
    if (more) {
      more.innerHTML = content.gallery.length > GALLERY_VISIBLE
        ? `<button type="button" class="btn btn-outline-dark gallery-more-btn" data-shown="${GALLERY_VISIBLE}" data-total="${content.gallery.length}">View More (${content.gallery.length - GALLERY_VISIBLE})</button>`
        : '';
    }
  }
}
