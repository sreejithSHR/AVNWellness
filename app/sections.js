// Shared renderers for the data-driven sections (Programs, Pricing, Testimonials, FAQ).
// Used by BOTH the public site and the admin (so previews match exactly).

export const ACCENTS = { green: '#1F4A35', teal: '#0E8A8A', blue: '#21489B', amber: '#B07D1A' };
export const ICONS = {
  yoga: '<circle cx="12" cy="4.8" r="1.9"/><path d="M12 6.7v5.3"/><path d="M12 12l-4.5 5h9z"/><path d="M12 9c-2.4 -.6 -4.2 -2.6 -5 -5"/><path d="M12 9c2.4 -.6 4.2 -2.6 5 -5"/>',
  spine: '<path d="M12 3v18"/><path d="M9 6l3 -1l3 1"/><path d="M9 10l3 -1l3 1"/><path d="M9 14l3 -1l3 1"/><path d="M9 18l3 -1l3 1"/>',
  moon: '<path d="M18 4a7.5 7.5 0 0 0 -6 11.95a7.5 7.5 0 1 1 6 -11.95z"/><path d="M16.5 6.5l.4 1.1l1.1 .4l-1.1 .4l-.4 1.1l-.4 -1.1l-1.1 -.4l1.1 -.4z"/>',
  lotus: '<path d="M12 4c1.8 2.2 2.8 4.4 2.8 6.6a2.8 2.8 0 1 1 -5.6 0c0 -2.2 1 -4.4 2.8 -6.6z"/><path d="M7 7.5c.3 2.6 1.2 4.7 2.7 6.3"/><path d="M17 7.5c-.3 2.6 -1.2 4.7 -2.7 6.3"/><path d="M3.5 11c1 3.8 3.4 6.3 6.5 7.2"/><path d="M20.5 11c-1 3.8 -3.4 6.3 -6.5 7.2"/><path d="M4 18.5c2.4 1 5.1 1.5 8 1.5s5.6 -.5 8 -1.5"/>',
  heart: '<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/>',
  sparkles: '<path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"/>',
};
export const ICON_NAMES = Object.keys(ICONS);
export const ACCENT_NAMES = Object.keys(ACCENTS);

const E = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const acc = (a) => ACCENTS[a] || ACCENTS.green;
const ic = (name, w) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w || 26}" height="${w || 26}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ICONS.lotus}</svg>`;
// Use the supplied artwork (lotus / spine / yoga→meditation) as CSS masks so they inherit the icon colour.
const ASSET_IC = { lotus: 'ic-lotus', spine: 'ic-spine', yoga: 'ic-meditation' };
const iconImg = (name, w) => ASSET_IC[name]
  ? `<span class="${ASSET_IC[name]}" style="width:${w || 32}px;height:${w || 32}px;"></span>`
  : ic(name, w);
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
    const nm = E(c.name).replace(/(\S+™)/, '<span style="white-space:nowrap;">$1</span>');
    const iconHtml = iconImg(c.icon, 34);
    return `<div class="col-lg-3 col-md-6">
      <div class="card h-100 rounded-5 shadow-sm card-lift program-card position-relative overflow-hidden">
        <span style="position:absolute;top:0;left:0;right:0;height:3px;background:${a};z-index:5;"></span>
        ${c.photo ? `<img src="${E(c.photo)}" alt="${E(c.name)}" class="program-photo" style="position:absolute;top:3px;right:0;width:46%;height:162px;object-fit:cover;object-position:top center;-webkit-mask-image:linear-gradient(to left,#000 30%,transparent 85%);mask-image:linear-gradient(to left,#000 30%,transparent 85%);">` : ''}
        <div class="card-body p-4 d-flex flex-column position-relative">
          <div style="min-height:150px;max-width:58%;">
            <span class="icon-shape icon-lg rounded-circle text-white mb-2" style="background:${a};box-shadow:0 0 0 4px ${a}33;">${iconHtml}</span>
            <h3 class="fw-bold mb-0 lh-sm" style="font-size:1.02rem;color:${a};">${nm}</h3>
          </div>
          <p class="text-muted mb-3" style="font-size:.86rem;">${E(c.tagline)}</p>
          <div class="d-flex justify-content-between text-center rounded-3 p-2 mb-3" style="background:${a}12;">
            <div><span style="color:${a};">${CAL}</span><div class="text-muted" style="font-size:10.5px;">Duration</div><div class="fw-bold" style="font-size:12.5px;">${E(c.duration)}</div></div>
            <div class="border-start border-end px-2"><span style="color:${a};">${CLK}</span><div class="text-muted" style="font-size:10.5px;">Time / Day</div><div class="fw-bold" style="font-size:12.5px;">${E(c.time || '60 Min')}</div></div>
            <div><span style="color:${a};">${CAL}</span><div class="text-muted" style="font-size:10.5px;">Schedule</div><div class="fw-bold" style="font-size:12.5px;">${E(c.schedule || '5 Days / Week')}</div></div>
          </div>
          <h4 class="text-uppercase fw-bold mb-2" style="color:${a};font-size:12px;letter-spacing:.06rem;">Key Benefits</h4>
          <ul class="list-unstyled d-flex flex-column gap-2 mb-3" style="font-size:.86rem;">${benefits}</ul>
          <div class="mt-auto">
            <span class="badge rounded-pill text-white mb-2 d-inline-flex align-items-center gap-1" style="background:${a};font-size:12px;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg> Best For</span>
            <p class="text-muted mb-0" style="font-size:12.5px;">${E(c.bestFor)}</p>
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
    const cc = `<svg width="16" height="16" viewBox="0 0 24 24" class="flex-shrink-0 mt-1"><circle cx="12" cy="12" r="10" fill="${a}"/><path d="M8 12.4l2.6 2.6l5 -5.6" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    const feats = (c.features || []).map((f) => `<li class="d-flex gap-2 align-items-start">${cc}<span>${E(f)}</span></li>`).join('');
    return `<div class="col-lg-3 col-md-6">
      <div class="card h-100 rounded-4 shadow-sm card-lift position-relative" style="${border || 'border:1px solid #ece6d8 !important;'}">
        ${topbadge}
        <div class="card-body p-4 d-flex flex-column">
          <div class="d-flex align-items-center gap-3 mb-2">
            <span class="icon-shape icon-lg rounded-circle text-white flex-shrink-0" style="background:${a};box-shadow:0 0 0 4px ${a}22;">${iconImg(c.icon, 30)}</span>
            <h3 class="fw-bold mb-0" style="font-size:1.02rem;color:#1c1c1c;line-height:1.25;">${E(c.name)}</h3>
          </div>
          <p class="text-muted mb-3" style="font-size:12.5px;line-height:1.5;">${E(c.tagline)}</p>
          <div class="rounded-3 text-center fw-bold text-uppercase py-2 mb-3" style="background:${a}14;color:${a};font-size:11px;letter-spacing:.04rem;">Founding Member Launch Offer</div>
          <div class="text-center mb-3">
            <span class="fw-bold" style="font-size:2.4rem;color:${a};line-height:1;">&#8377;${E(c.price)}</span>
            <div class="small text-muted mt-1">Regular Price <s>&#8377;${E(c.regular)}</s></div>
            <div class="d-flex justify-content-center gap-2 mt-2">
              <span class="badge rounded-pill" style="background:#EFE1AE;color:#7a5f14;">SAVE ${E(c.save)}%</span>
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

const FAQ_ICONS = [
  '<path d="M12 4c1.8 2.2 2.8 4.4 2.8 6.6a2.8 2.8 0 1 1 -5.6 0c0 -2.2 1 -4.4 2.8 -6.6z"/><path d="M7 7.5c.3 2.6 1.2 4.7 2.7 6.3"/><path d="M17 7.5c-.3 2.6 -1.2 4.7 -2.7 6.3"/><path d="M3.5 11c1 3.8 3.4 6.3 6.5 7.2"/><path d="M20.5 11c-1 3.8 -3.4 6.3 -6.5 7.2"/>',
  '<path d="M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"/><path d="M7 20h10"/><path d="M9 16v4"/><path d="M15 16v4"/><path d="M10 8l3 2l-3 2z"/>',
  '<path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -1.5a4.6 4.4 0 0 0 -2 8.4"/><path d="M12 13v9"/><path d="M9 19l3 3l3 -3"/>',
  '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/>',
  '<path d="M8 16l2 -6l6 -2l-2 6l-6 2"/><path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18z"/>',
  '<path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"/><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"/><path d="M12 12l0 .01"/><path d="M3 13a20 20 0 0 0 18 0"/>',
  '<circle cx="12" cy="4.8" r="1.9"/><path d="M12 6.7v5.3"/><path d="M12 12l-4.5 5h9z"/><path d="M12 9c-2.4 -.6 -4.2 -2.6 -5 -5"/><path d="M12 9c2.4 -.6 4.2 -2.6 5 -5"/>',
  '<path d="M4 14v-3a8 8 0 0 1 16 0v3"/><path d="M18 19a2 2 0 0 1 -2 2h-1.5"/><path d="M4 13m0 2a2 2 0 0 1 2 -2h1a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-1a2 2 0 0 1 -2 -2z"/><path d="M15 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a1 1 0 0 1 -1 -1z"/>',
];
export function renderFaq(list) {
  const CHEV = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6l6 -6"/></svg>';
  return (list || []).map((f, i) => {
    const icon = FAQ_ICONS[i % FAQ_ICONS.length];
    // First question uses the lotus artwork asset (rendered as a mask so it inherits the icon colour).
    const iconMarkup = i === 0
      ? '<span class="ic-lotus" style="width:24px;height:24px;"></span>'
      : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${icon}</svg>`;
    return `<div class="faq-item">
      <button class="faq-q" type="button" data-bs-toggle="collapse" data-bs-target="#faqItem${i}" aria-expanded="false" aria-controls="faqItem${i}">
        <span class="faq-num">${i + 1}</span>
        <span class="faq-ic">${iconMarkup}</span>
        <span class="faq-qt">${E(f.q)}</span>
        <span class="faq-chev">${CHEV}</span>
      </button>
      <div id="faqItem${i}" class="collapse"><div class="faq-a">${E(f.a)}</div></div>
    </div>`;
  }).join('');
}

const T_GRAD = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"/><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"/></svg>';
const T_HEART = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/></svg>';
const T_CHECKC = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 12l2 2l4 -4"/></svg>';
const T_USER = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg>';
// Gold star for the feedback cards (no text-warning class so the scoped .fb-stars gold colour applies).
const T_STAR = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg>';

export function renderTestimonials(list) {
  return (list || []).map((t) => {
    const n = Math.max(0, Math.min(5, parseInt(t.stars, 10) || 5));
    const stars = `<span class="fb-stars">${T_STAR.repeat(n)}</span>`;
    const avatar = t.avatar || '/assets/images/avatar/avatar-1.jpg';
    // Split the combined role ("Title, Position, City") onto two lines like the reference.
    const parts = String(t.role || '').split(',');
    const r1 = E((parts.shift() || '').trim());
    const r2 = E(parts.join(',').trim());
    return `<div class="col-xl-4 col-md-6">
      <div class="fb-card">
        <div class="d-flex gap-3">
          <img src="${E(avatar)}" alt="${E(t.name)}" class="fb-avatar">
          <div class="flex-fill d-flex justify-content-between gap-2">
            <div><div class="fb-name">${E(t.name)}</div><div class="fb-role">${r1}</div>${r2 ? `<div class="fb-role">${r2}</div>` : ''}</div>
            <div class="d-flex flex-column align-items-end justify-content-between flex-shrink-0">
              ${stars}
              ${t.age ? `<span class="fb-age">${T_USER} Age ${E(t.age)}</span>` : ''}
            </div>
          </div>
        </div>
        <hr class="fb-hr">
        <div class="row g-0">
          <div class="col-sm-6 fb-colb pe-sm-3">
            <div class="fb-lbl">${T_GRAD} Program Taken</div>
            <p class="fb-val">${E(t.programTaken)}</p>
            <div class="fb-lbl">${T_HEART} Health Issues</div>
            <p class="fb-val">${E(t.healthIssues)}</p>
          </div>
          <div class="col-sm-6 ps-sm-3">
            <div class="fb-lbl">${T_CHECKC} Benefits Gained</div>
            <p class="fb-val">${E(t.benefitsGained)}</p>
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
