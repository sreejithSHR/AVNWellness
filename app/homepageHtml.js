export const homepageHtml = `
<style>
  .crisis-tile{transition:border-color .2s,box-shadow .2s;}
  .crisis-tile:hover{border-color:#C2A35A !important;box-shadow:0 10px 24px -14px rgba(31,74,53,.35);}
  @media (min-width:992px){.trust-cell + .trust-cell > div{border-left:1px solid rgba(255,255,255,.16);padding-left:1.4rem;}}
  /* Readability + heading weight pass */
  body{font-size:1.03rem;line-height:1.65;color:#2c2c2c;}
  h1,h2,h3,h4,h5,h6{font-weight:700;letter-spacing:-.01em;}
  h2{font-size:clamp(2rem,3.6vw,2.9rem);}
  .lead{font-size:1.15rem;line-height:1.6;}
  .text-muted{color:#565656 !important;}
  section p{line-height:1.65;}
  .program-photo{pointer-events:none;}
  /* Hero full-bleed image — soft left-edge blend into the cream background */
  .hero-top{position:relative;}
  .hero-img-bleed{position:absolute;top:0;right:0;height:100%;width:46%;}
  .hero-img-bleed > img{width:100%;height:100%;object-fit:cover;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 30%);mask-image:linear-gradient(to right,transparent 0,#000 30%);}
  .hero-quote-card{position:absolute;top:22%;right:1.5rem;max-width:240px;}
  @media (max-width:991.98px){.hero-img-bleed{display:none;}}
  /* Botanical leaf watermarks (ilai.svg) — subtle, edge-hugging */
  .hero-leaf{position:absolute;top:-60px;left:-70px;width:min(15vw,210px);height:auto;z-index:0;pointer-events:none;transform:rotate(40deg);opacity:.5;}
  .hero-leaf-b{position:absolute;bottom:-60px;left:-60px;width:min(12vw,170px);height:auto;z-index:0;pointer-events:none;transform:rotate(10deg);opacity:.5;}
  .ilai-decor{position:absolute;z-index:0;pointer-events:none;width:min(14vw,200px);height:auto;opacity:.45;}
  /* About band — full-bleed photo; on lg+ the section height follows the
     photo's own aspect ratio at full viewport width (1536:1024), no cropping */
  .about-band-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
  @media (min-width:768px){.about-pillar + .about-pillar{border-left:1px solid rgba(31,74,53,.18);}}
  @media (min-width:768px){.trust-mini + .trust-mini{border-left:1px solid rgba(0,0,0,.08);}}
  /* Why-section — balanced type + spacing */
  #why .col-lg-7 .row.g-4{--bs-gutter-y:1.5rem;}
  #why .col-lg-7 .row.g-4 h4{font-size:.98rem !important;}
  #why .col-lg-7 .row.g-4 p{font-size:.9rem !important;line-height:1.55;}
  #why .bg-primary h3{font-size:1.5rem !important;}
  #why .bg-primary > div > p{font-size:.92rem !important;line-height:1.55;}
  #why .bg-primary .row.g-2{font-size:.9rem !important;--bs-gutter-y:.6rem;}
  #why .trust-mini svg{width:30px;height:30px;}
  #why .trust-mini h5{font-size:14px !important;}
  #why .trust-mini p{font-size:12.5px !important;}
  @media (min-width:992px){#about{display:flex;align-items:center;aspect-ratio:1536/1024;}#about > .container{width:100%;}}
  .about-pillar h3{font-family:'Mulish',ui-sans-serif,system-ui,sans-serif;color:#000;}
  .about-pillar p{color:#101010;font-weight:600;}
  #about .text-uppercase{color:#14351f !important;}
  /* Lift text off the busy photo with a soft light glow (no overlay layer) */
  #about p,#about h2,#about h3,#about .text-uppercase{text-shadow:0 1px 2px rgba(255,255,255,.55),0 0 14px rgba(255,255,255,.4);}
  /* Who We Serve — value props + stat dividers */
  .serve-prop-ico{width:58px;height:58px;background:#E9F0EB;border-radius:50%;}
  @media(min-width:992px){.serve-prop + .serve-prop{border-left:1px solid rgba(31,74,53,.14);}}
  @media(min-width:992px){.serve-stat + .serve-stat > div{border-left:1px solid rgba(255,255,255,.16);padding-left:1rem;}}
  .serve-cat-ico{width:46px;height:46px;background:#E6EFE7;color:#1F4A35;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;}
  #serve .cat-card{border:0 !important;box-shadow:0 8px 22px -12px rgba(31,74,53,.22) !important;}
  /* Who We Serve — mobile: let the headline break span wrap, keep the pill within the viewport */
  @media(min-width:576px){#serve h2 .text-primary{white-space:nowrap;}}
  #serve .badge{white-space:normal;max-width:100%;}
  /* Navbar — keep logo + hamburger on one row on small phones (iPhone SE etc.) */
  @media(max-width:575.98px){.navbar .navbar-brand{margin-right:.5rem;}.navbar .navbar-brand img{height:40px !important;}}
  /* ===== Live Wellness Programs ===== */
  #live-programs{background:#FCFAF4;}
  #live-programs h2{color:#1F4A35;}
  #live-programs .lp-map{position:absolute;top:30px;left:50%;transform:translateX(-50%);width:min(90%,1120px);opacity:.09;z-index:0;pointer-events:none;}
  #live-programs .lp-pin{position:absolute;z-index:2;display:flex;align-items:flex-start;gap:.35rem;}
  #live-programs .lp-pin .lp-city{font-weight:700;color:#1F4A35;font-size:.92rem;line-height:1.1;}
  #live-programs .lp-pin .lp-time{color:#6b7280;font-size:.82rem;}
  #live-programs .lp-feat{background:#fff;border:1px solid #ece6d8;border-radius:.7rem;padding:.55rem .85rem;display:flex;align-items:center;gap:.55rem;}
  #live-programs .lp-feat svg{color:#1F4A35;flex-shrink:0;}
  #live-programs .lp-feat span{font-size:.8rem;font-weight:600;color:#3a3a3a;line-height:1.2;text-align:left;}
  #live-programs .lp-ist{display:inline-flex;align-items:center;gap:.55rem;background:#1F4A35;color:#fff;font-weight:700;border-radius:2rem;padding:.6rem 1.4rem;font-size:1rem;}
  #live-programs .lp-card{background:#fff;border:1px solid #ece6d8;border-radius:1.1rem;padding:2rem 1.15rem 1.2rem;height:100%;position:relative;box-shadow:0 12px 30px -20px rgba(31,74,53,.3);}
  #live-programs .lp-ico{width:74px;height:74px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;margin:0 auto;}
  #live-programs .lp-name{font-weight:700;font-size:1.16rem;margin:.85rem 0 .1rem;color:#1c1c1c;}
  #live-programs .lp-tag{color:#6b7280;font-size:.94rem;margin-bottom:.85rem;}
  #live-programs .lp-div{display:flex;align-items:center;gap:.5rem;margin:0 auto 1rem;max-width:160px;color:#9CB39F;}
  #live-programs .lp-div::before,#live-programs .lp-div::after{content:"";flex:1;height:1px;background:currentColor;opacity:.55;}
  #live-programs .lp-band{border-radius:.65rem;color:#fff;font-weight:700;padding:.7rem .9rem;display:flex;align-items:center;justify-content:center;gap:.55rem;font-size:1.02rem;}
  #live-programs .lp-stats{display:flex;margin-top:.95rem;}
  #live-programs .lp-stats > div{flex:1;display:flex;gap:.35rem;align-items:center;justify-content:center;padding:0 .15rem;}
  #live-programs .lp-stats > div + div{border-left:1px solid #eee;}
  #live-programs .lp-stats svg{color:#8a8a8a;flex-shrink:0;}
  #live-programs .lp-stats .k{font-size:.68rem;color:#8a8a8a;line-height:1.1;}
  #live-programs .lp-stats .v{font-size:.8rem;font-weight:700;color:#222;line-height:1.15;}
  #live-programs .lp-premium{position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:#B07D1A;color:#fff;font-size:.68rem;font-weight:700;letter-spacing:.13em;padding:.3rem 1rem;border-radius:.55rem;white-space:nowrap;}
  #live-programs .lp-access{background:#F7F3EA;border:1px solid #ece6d8;border-radius:1.1rem;}
  #live-programs .lp-mini{display:flex;align-items:center;gap:.6rem;}
  #live-programs .lp-mini-ic{width:42px;height:42px;border-radius:50%;background:#E9F0EB;color:#1F4A35;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  #live-programs .lp-mini b{display:block;font-size:.85rem;color:#222;line-height:1.15;}
  #live-programs .lp-mini small{color:#6b7280;font-size:.79rem;}
  #live-programs .lp-trust{background:#1F4A35;border-radius:1.1rem;}
  #live-programs .lp-trust .t{display:flex;align-items:center;gap:.65rem;justify-content:center;}
  #live-programs .lp-trust svg{color:#C2A35A;flex-shrink:0;}
  #live-programs .lp-trust .n{font-size:1.45rem;font-weight:800;color:#C2A35A;line-height:1;}
  #live-programs .lp-trust .l{font-size:.79rem;color:rgba(255,255,255,.8);line-height:1.15;}
  #live-programs .lp-trust .bt{font-size:.88rem;font-weight:700;color:#fff;line-height:1.15;}
  @media(min-width:1200px){#live-programs .lp-trust .lp-tcell + .lp-tcell{border-left:1px solid rgba(255,255,255,.14);}}
  #live-programs .lp-foot{display:inline-flex;align-items:center;gap:.5rem;background:#EBF1EC;color:#3a3a3a;border-radius:2rem;padding:.5rem 1.2rem;font-size:.9rem;}
  /* ===== Our Founders ===== */
  #founders{background:#FFFDF9;}
  #founders .fd-leaf{position:absolute;top:-6px;z-index:0;pointer-events:none;opacity:.5;width:min(24vw,280px);height:auto;}
  #founders .fd-rule{display:inline-block;width:54px;height:2px;background:#C9B26A;opacity:.6;}
  #founders .fd-title{color:#1F4A35;font-weight:800;letter-spacing:.05em;font-size:clamp(1.9rem,4vw,2.9rem);margin:0;}
  #founders .fd-card{background:#fff;border:1px solid #ece6d8;border-radius:1.2rem;box-shadow:0 14px 40px -24px rgba(31,74,53,.3);}
  #founders .fd-photo{width:180px;height:214px;border-radius:50%;object-fit:cover;object-position:center;flex-shrink:0;background:#FBF3EC;border:6px solid #FBF3EC;box-shadow:0 8px 22px -12px rgba(31,74,53,.35);}
  #founders .fd-prefix{color:#8a8a8a;font-size:1.02rem;line-height:1.1;}
  #founders .fd-name{color:#1F4A35;font-weight:800;font-size:1.68rem;margin:.05rem 0 .15rem;}
  #founders .fd-role{color:#BE8B2E;font-weight:700;font-size:1.02rem;margin-bottom:.55rem;}
  #founders .fd-tags{color:#6b7280;font-size:.85rem;margin-bottom:.7rem;}
  #founders .fd-bio{color:#4a4a4a;font-size:.91rem;line-height:1.6;margin-bottom:1rem;}
  #founders .fd-points{list-style:none;padding:0;margin:0 0 1.1rem;display:flex;flex-direction:column;gap:.6rem;}
  #founders .fd-points li{display:flex;align-items:center;gap:.65rem;font-size:.9rem;color:#2e2e2e;}
  #founders .fd-pico{width:34px;height:34px;border-radius:50%;border:1px solid #d7e0d8;color:#1F4A35;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  #founders .fd-btn{display:inline-flex;align-items:center;gap:.5rem;background:#1F4A35;color:#fff;font-weight:600;font-size:.92rem;border-radius:2rem;padding:.6rem 1.4rem;text-decoration:none;transition:background .2s;}
  #founders .fd-btn:hover{background:#173a29;color:#fff;}
  #founders .fd-qual{background:#fff;border:1px solid #ece6d8;border-radius:1.2rem;padding:2.4rem 1.4rem 1.4rem;height:100%;position:relative;box-shadow:0 14px 40px -26px rgba(31,74,53,.28);}
  #founders .fd-qual-head{position:absolute;top:-15px;left:50%;transform:translateX(-50%);background:#1F4A35;color:#fff;font-weight:600;font-size:.9rem;padding:.42rem 1.3rem;border-radius:2rem;white-space:nowrap;box-shadow:0 6px 16px -8px rgba(31,74,53,.5);max-width:94%;text-align:center;}
  #founders .fd-col-title{color:#1c1c1c;font-weight:700;font-size:.94rem;margin-bottom:.8rem;}
  #founders .fd-check{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.5rem;}
  #founders .fd-check li{display:flex;align-items:flex-start;gap:.5rem;font-size:.84rem;color:#3a3a3a;line-height:1.35;}
  #founders .fd-check svg{color:#1F4A35;flex-shrink:0;margin-top:1px;}
  #founders .fd-highlight{background:#F7F3EA;border:1px solid #ece6d8;border-radius:.8rem;padding:.9rem 1rem;margin-top:1.1rem;}
  #founders .fd-highlight h6{color:#1c1c1c;font-weight:700;font-size:.88rem;margin-bottom:.5rem;}
  #founders .fd-highlight ul{padding-left:1rem;margin:0;display:flex;flex-direction:column;gap:.32rem;}
  #founders .fd-highlight li{font-size:.81rem;color:#4a4a4a;line-height:1.35;}
  #founders .fd-divider{position:absolute;top:10px;bottom:10px;left:50%;transform:translateX(-50%);width:1px;padding:0;margin:0;background:#e2d9c2;z-index:1;}
  #founders .fd-lotus{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:60px;height:60px;padding:0;margin:0;border-radius:50%;background:#FFFDF9;border:1px solid #e2d9c2;box-shadow:0 6px 18px -10px rgba(31,74,53,.3);align-items:center;justify-content:center;z-index:3;}
  @media(min-width:992px){#founders .fd-col-l{padding-right:52px;}#founders .fd-col-r{padding-left:52px;}}
  #founders .fd-quote{background:#F7F3EA;border:1px solid #ece6d8;border-radius:1.2rem;padding:1.6rem 1.9rem;position:relative;overflow:hidden;}
  #founders .fd-qmark{font-family:Georgia,'Times New Roman',serif;font-size:3.4rem;line-height:.7;color:#C9B26A;flex-shrink:0;}
  #founders .fd-quote p{color:#3a3a3a;font-size:1rem;line-height:1.6;}
  #founders .fd-sign-img{width:auto;height:46px;max-width:100%;object-fit:contain;margin-bottom:.15rem;}
  #founders .fd-sign-sub{color:#1F4A35;font-weight:600;font-size:.92rem;}
  /* ===== Feedback / Success Stories ===== */
  #testimonials{background:#FBFAF5;}
  .fb-hero-img{width:100%;height:100%;min-height:200px;object-fit:cover;border-radius:1.2rem;}
  .fb-stat .fw-bold{font-size:.98rem;line-height:1.05;}
  .fb-stat small{font-size:.76rem;white-space:nowrap;}
  .fb-stat svg{width:20px;height:20px;}
  .fb-why{background:#fff;border:1px solid #ece6d8;border-radius:1rem;box-shadow:0 12px 34px -22px rgba(31,74,53,.3);}
  .fb-why-check{color:#1F4A35;flex-shrink:0;margin-top:1px;}
  .fb-card{background:#fff;border:1px solid #ece6d8;border-radius:1rem;padding:1.3rem;height:100%;box-shadow:0 12px 30px -20px rgba(31,74,53,.28);}
  .fb-avatar{width:66px;height:66px;border-radius:50%;object-fit:cover;flex-shrink:0;border:2px solid #E4C77E;padding:2px;background:#fff;}
  .fb-name{font-weight:700;font-size:1.06rem;color:#1c1c1c;margin-bottom:.12rem;}
  .fb-role{color:#6b7280;font-size:.82rem;line-height:1.28;}
  .fb-stars{display:inline-flex;gap:1px;color:#E0A82E;}
  .fb-age{display:inline-flex;align-items:center;gap:.3rem;color:#6b7280;font-size:.82rem;white-space:nowrap;}
  .fb-hr{border:0;border-top:1px solid #eceae2;opacity:1;margin:.85rem 0;}
  .fb-colb{border-right:1px solid #eceae2;}
  .fb-lbl{display:flex;align-items:center;gap:.4rem;font-weight:700;font-size:.85rem;color:#1F4A35;margin-bottom:.15rem;}
  .fb-lbl svg{color:#1F4A35;flex-shrink:0;}
  .fb-val{color:#555;font-size:.82rem;line-height:1.4;margin-bottom:.7rem;}
  .fb-val:last-child{margin-bottom:0;}
  .fb-bar{background:#FDFCF7;border:1px solid #ece6d8;border-radius:1rem;padding:1.3rem 1.1rem;position:relative;overflow:hidden;}
  .fb-bar-cell{padding:.35rem 1.3rem;}
  .fb-bar-ico{color:#1F4A35;flex-shrink:0;}
  .fb-bar-t{font-weight:700;font-size:.98rem;color:#1c1c1c;margin-bottom:.15rem;}
  .fb-bar-d{color:#6b7280;font-size:.82rem;line-height:1.35;margin:0;}
  .fb-bar-leaf{position:absolute;right:-14px;bottom:-16px;width:130px;height:auto;opacity:.5;pointer-events:none;}
  @media(min-width:768px){.fb-bar-cell + .fb-bar-cell{border-left:1px solid #e7e0d0;}}
  /* ===== Pricing (Invest in Your Wellbeing) ===== */
  #pricing{background:#FFFDF9;}
  #pricing .pr-cta{background:#F7F3EA;border:1px solid #ece6d8;border-radius:1.1rem;position:relative;overflow:hidden;padding:1.5rem 1.8rem;}
  #pricing .pr-cta-photos{display:inline-flex;flex-shrink:0;}
  #pricing .pr-cta-photos img{width:78px;height:78px;border-radius:50%;object-fit:cover;border:3px solid #fff;box-shadow:0 6px 16px -8px rgba(0,0,0,.3);background:#fff;}
  #pricing .pr-cta-photos img + img{margin-left:-34px;}
  #pricing .pr-cta h3{font-weight:800;font-size:1.28rem;color:#1c1c1c;margin-bottom:.2rem;}
  #pricing .pr-cta p{color:#4a4a4a;margin:0;font-size:.94rem;line-height:1.5;}
  #pricing .pr-cta-btn{background:#1F4A35;color:#fff;font-weight:700;border-radius:.6rem;padding:.85rem 1.6rem;display:inline-flex;align-items:center;gap:.6rem;text-decoration:none;white-space:nowrap;font-size:1.05rem;transition:background .2s;}
  #pricing .pr-cta-btn:hover{background:#173a29;color:#fff;}
  #pricing .pr-cta-leaf{position:absolute;right:-8px;bottom:-14px;width:120px;opacity:.5;pointer-events:none;}
  /* ===== Contact / Enquiry ===== */
  #consultation{position:relative;background:#FAF8F2;}
  #consultation .ct-bg{position:absolute;inset:0;background-size:cover;background-position:center;z-index:0;}
  #consultation .ct-overlay{position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(250,248,242,.82) 0%,rgba(250,248,242,.58) 34%,rgba(250,248,242,.15) 60%,rgba(250,248,242,0) 78%);}
  #consultation .ct-eyebrow{color:#1F4A35;font-weight:700;letter-spacing:.16em;font-size:.82rem;}
  #consultation .ct-title{font-weight:800;font-size:clamp(2rem,3.8vw,3.1rem);line-height:1.08;color:#1c1c1c;}
  #consultation .ct-title .g{color:#1F4A35;}
  #consultation .ct-lead{color:#2f2f2f;font-size:1.02rem;line-height:1.6;max-width:560px;}
  #consultation .ct-prop-ico{color:#1F4A35;}
  #consultation .ct-prop-t{font-weight:700;font-size:.9rem;color:#1c1c1c;}
  #consultation .ct-prop-d{color:#333;font-size:.78rem;line-height:1.3;}
  #consultation .ct-eyebrow,#consultation .ct-title,#consultation .ct-lead,#consultation .ct-prop-t,#consultation .ct-prop-d{text-shadow:0 1px 3px rgba(255,255,255,.85),0 0 14px rgba(250,248,242,.7);}
  #consultation .ct-prop-ico{filter:drop-shadow(0 1px 3px rgba(255,255,255,.8));}
  #consultation .ct-stats{background:rgba(31,74,53,.9);border-radius:1rem;color:#fff;padding:1.1rem 1rem;display:flex;}
  #consultation .ct-stats > div{flex:1;text-align:center;padding:0 .3rem;}
  #consultation .ct-stats > div + div{border-left:1px solid rgba(255,255,255,.2);}
  #consultation .ct-stats .n{font-weight:800;font-size:1.4rem;color:#fff;line-height:1;}
  #consultation .ct-stats .l{font-size:.75rem;color:rgba(255,255,255,.82);}
  #consultation .ct-stats svg{color:#C2A35A;}
  #consultation .ct-form-card{background:#fff;border-radius:1.4rem;box-shadow:0 30px 70px -30px rgba(31,74,53,.5);padding:2.6rem 1.9rem 1.9rem;margin-top:1rem;position:relative;}
  #consultation .ct-form-badge{position:absolute;top:-26px;left:50%;transform:translateX(-50%);width:52px;height:52px;border-radius:50%;background:#fff;border:1px solid #e6dcc4;display:flex;align-items:center;justify-content:center;color:#1F4A35;box-shadow:0 8px 20px -10px rgba(0,0,0,.25);}
  #consultation .ct-form-title{color:#1F4A35;font-weight:800;font-size:1.55rem;}
  #consultation .ct-label{font-size:.82rem;color:#4a4a4a;font-weight:500;margin-bottom:.3rem;}
  #consultation .ct-field{position:relative;}
  #consultation .ct-field > svg{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:#9aa39c;pointer-events:none;}
  #consultation .ct-field .form-control{padding-left:42px;height:48px;border-radius:.7rem;border:1px solid #e2e0d6;background:#fdfcf9;}
  #consultation .ct-select{height:52px;border-radius:.7rem;border:1px solid #e2e0d6;background:#fdfcf9;}
  #consultation .ct-confid{background:#EEF3EE;border-radius:.9rem;padding:1rem;display:flex;gap:.8rem;align-items:flex-start;}
  #consultation .ct-confid-ico{width:46px;height:46px;border-radius:50%;background:#dbe6dc;color:#1F4A35;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  #consultation .ct-submit{background:#1F4A35;color:#fff;font-weight:700;border-radius:2rem;padding:.9rem;width:100%;border:0;display:inline-flex;align-items:center;justify-content:center;gap:.6rem;font-size:1.05rem;transition:background .2s;}
  #consultation .ct-submit:hover{background:#173a29;}
  #consultation .ct-join-av img{width:30px;height:30px;border-radius:50%;object-fit:cover;border:2px solid #fff;}
  #consultation .ct-join-av img + img{margin-left:-10px;}
  #consultation .ct-featbar{background:#E8F0E8;position:relative;z-index:2;}
  #consultation .ct-feat-ico{width:44px;height:44px;border-radius:50%;border:1px solid #c5d3c6;color:#1F4A35;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  #consultation .ct-feat-t{font-weight:700;font-size:.9rem;color:#1c1c1c;}
  #consultation .ct-feat-d{color:#5a5a5a;font-size:.78rem;line-height:1.3;}
  #consultation .ct-contactbar{background:#1F4A35;color:#fff;position:relative;z-index:2;}
  #consultation .ct-contactbar a{color:#fff;text-decoration:none;}
  #consultation .ct-contactbar .ci{display:inline-flex;align-items:center;gap:.6rem;font-size:.95rem;}
  #consultation .ct-contactbar .ci svg{color:#C2A35A;flex-shrink:0;}
  #consultation .ct-social{width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,.12);display:inline-flex;align-items:center;justify-content:center;color:#fff;}
  /* ===== FAQ ===== */
  #faq .faq-eyebrow{color:#1F4A35;letter-spacing:.18em;font-size:.82rem;}
  #faq .faq-eyebrow-line{display:inline-block;width:36px;height:2px;background:#C2A35A;}
  #faq .faq-title{font-weight:800;font-size:clamp(2rem,4vw,3rem);line-height:1.05;color:#1c1c1c;}
  #faq .faq-title .g{color:#BE8B2E;}
  #faq .faq-hero-img{width:100%;height:100%;min-height:210px;max-height:260px;object-fit:cover;border-radius:1.2rem;}
  #faq .faq-card{background:#fff;border:1px solid #ece6d8;border-radius:1.2rem;overflow:hidden;box-shadow:0 16px 44px -28px rgba(31,74,53,.3);}
  #faq .faq-item + .faq-item{border-top:1px solid #eee;}
  #faq .faq-q{display:flex;align-items:center;gap:.85rem;width:100%;text-align:left;background:none;border:0;padding:1.25rem 1.5rem;cursor:pointer;}
  #faq .faq-q[aria-expanded="true"]{background:#FBFAF5;}
  #faq .faq-num{width:34px;height:34px;border-radius:50%;background:#F0ECDF;color:#1F4A35;font-weight:700;font-size:.95rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  #faq .faq-ic{color:#1F4A35;flex-shrink:0;display:inline-flex;}
  #faq .faq-qt{font-weight:700;color:#1c1c1c;font-size:1rem;line-height:1.35;}
  #faq .faq-chev{margin-left:auto;color:#9a9a9a;flex-shrink:0;display:inline-flex;transition:transform .25s;}
  #faq .faq-q[aria-expanded="true"] .faq-chev{transform:rotate(180deg);color:#1F4A35;}
  #faq .faq-a{color:#555;font-size:.92rem;line-height:1.65;padding:0 1.5rem 1.35rem 4.7rem;}
  @media(max-width:575.98px){
    #faq .faq-q{padding:1.1rem 1rem;gap:.7rem;}
    #faq .faq-qt{font-size:.95rem;}
    #faq .faq-a{padding:0 1rem 1.15rem 1rem;}
  }
  /* ===== Our Story ===== */
  #story{background:#FBFAF5;}
  #story .st-eyebrow{color:#3E7A57;font-weight:700;letter-spacing:.2em;font-size:.82rem;}
  #story .st-title{font-weight:800;color:#1a1a1a;font-size:clamp(2rem,4vw,3rem);line-height:1.08;}
  #story .st-title .u{color:#C2A35A;border-bottom:3px solid #C2A35A;padding-bottom:2px;}
  #story .st-card{background:#fff;border:1px solid #ece6d8;border-radius:1.1rem;box-shadow:0 14px 40px -26px rgba(31,74,53,.28);}
  #story .why-ico{width:58px;height:60px;border-radius:63% 37% 55% 45% / 55% 48% 52% 45%;display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0;position:relative;}
  #story .why-num{position:absolute;top:-6px;left:-6px;width:24px;height:24px;border-radius:50%;background:#fff;border:1px solid #e6dcc4;color:#6b6250;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;}
  #story .why-t{font-weight:700;color:#1a1a1a;font-size:1.05rem;line-height:1.25;}
  #story .why-d{color:#4a4a4a;font-size:.9rem;line-height:1.55;}
  #story .why-hi{font-weight:700;font-size:.9rem;line-height:1.5;}
  #story .st-info-t{font-weight:700;color:#1a1a1a;font-size:1rem;}
  #story .st-info-d{color:#5a5a5a;font-size:.84rem;line-height:1.5;}
  #story .st-mission-eyebrow{color:#C2A35A;font-weight:700;letter-spacing:.16em;font-size:.82rem;}
  #story .st-mission-t{font-weight:800;color:#1F4A35;font-size:clamp(1.6rem,2.6vw,2.1rem);line-height:1.15;}
  #story .st-mission-leaf{position:absolute;top:10px;right:-10px;width:130px;opacity:.5;pointer-events:none;}
  /* ===== Footer ===== */
  .ftr{background:#F7F5EF;}
  .ftr-desc{color:#5a5a5a;font-size:.9rem;line-height:1.6;}
  .ftr-contact a,.ftr-contact span{color:#4a4a4a;font-size:.9rem;text-decoration:none;display:inline-flex;align-items:center;gap:.55rem;}
  .ftr-contact a:hover{color:#1F4A35;}
  .ftr-contact svg{color:#1F4A35;flex-shrink:0;}
  .ftr-h{font-weight:700;color:#1c1c1c;font-size:1.05rem;display:flex;align-items:center;gap:.5rem;}
  .ftr-h svg{color:#9DBF9E;}
  .ftr-links{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.55rem;}
  .ftr-links a{color:#555;text-decoration:none;font-size:.9rem;display:inline-flex;align-items:center;gap:.5rem;}
  .ftr-links a:hover{color:#1F4A35;}
  .ftr-links svg{color:#C2A35A;flex-shrink:0;}
  .ftr-btn{background:#1F4A35;color:#fff;border-radius:2rem;padding:.6rem 1.3rem;font-weight:600;font-size:.88rem;text-decoration:none;display:inline-flex;align-items:center;gap:.5rem;transition:background .2s;}
  .ftr-btn:hover{background:#173a29;color:#fff;}
  .ftr-join{background:#fff;border:1px solid #ece6d8;border-radius:1rem;box-shadow:0 14px 34px -22px rgba(31,74,53,.28);padding:1.3rem;}
  .ftr-join-t{font-weight:700;color:#1c1c1c;font-size:1.02rem;line-height:1.2;}
  .ftr-flags{display:flex;flex-wrap:wrap;gap:.45rem;}
  .ftr-flag{width:30px;height:30px;border-radius:50%;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;font-size:1.15rem;line-height:1;background:#f1efe8;box-shadow:0 0 0 1px #e6dcc4;}
  .ftr-flag img{width:20px;height:20px;border-radius:50%;object-fit:cover;display:block;}
  .ftr-bottom{background:#1F4A35;color:rgba(255,255,255,.82);}
  .ftr-bottom a{color:#fff;text-decoration:none;}
  .ftr-social{width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,.12);display:inline-flex;align-items:center;justify-content:center;color:#fff;transition:background .2s;}
  .ftr-social:hover{background:rgba(255,255,255,.22);}
  /* Asset icons (lotus / spine / meditation) rendered as masks so they take the surrounding text colour */
  .ic-lotus,.ic-spine,.ic-meditation{display:inline-block;background-color:currentColor;vertical-align:middle;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:contain;mask-size:contain;}
  .ic-lotus{-webkit-mask-image:url('/lotus.svg');mask-image:url('/lotus.svg');}
  .ic-spine{-webkit-mask-image:url('/spine.svg');mask-image:url('/spine.svg');}
  .ic-meditation{-webkit-mask-image:url('/meditation.svg');mask-image:url('/meditation.svg');}
  @media(max-width:575.98px){.fb-colb{border-right:0;border-bottom:1px solid #eceae2;padding-bottom:.6rem;margin-bottom:.6rem;}}
  /* Watch Free Session section */
  #watch-session{color:#1c1c1c;}
  #watch-session .text-muted{color:#3a3a3a !important;}
  #watch-session .wf-mini,#watch-session .card li{color:#232323;font-weight:500;}
  .wf-mini + .wf-mini{border-left:1px solid rgba(31,74,53,.14);}
  @media(max-width:575.98px){.wf-mini + .wf-mini{border-left:0;}}
  .wf-help-cell + .wf-help-cell > div{border-left:1px solid rgba(255,255,255,.16);padding-left:1.1rem;}
  @media(max-width:991.98px){.wf-help-cell + .wf-help-cell > div{border-left:0;padding-left:0;}}
  .wf-play{width:150px;height:150px;border-radius:50%;background:#fff;border:5px solid #C2A35A;box-shadow:0 18px 40px -12px rgba(0,0,0,.35);text-decoration:none;transition:transform .2s ease;}
  .wf-play:hover{transform:scale(1.05);}
  .wf-photo{border-radius:1.25rem;overflow:hidden;box-shadow:0 24px 60px -20px rgba(0,0,0,.28);}
  .wf-photo>img{width:100%;height:100%;object-fit:cover;aspect-ratio:16/11;}
  @media(min-width:992px){.wf-play-wrap{position:absolute;top:50%;left:-6%;transform:translateY(-50%);z-index:3;}}
  @media(max-width:991.98px){.wf-play-wrap{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:3;}}
</style>
<!-- Reusable AVN ring mark (concentric arcs) -->
  <svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <symbol id="avn-rings" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-linecap="round">
      <path d="M 114.72 116.35 A 22 22 0 1 1 121.52 95.43" />
      <path d="M 119.63 126.53 A 33 33 0 1 1 132.94 97.99" />
      <path d="M 122.66 137.72 A 44 44 0 1 1 143.83 103.83" />
      <path d="M 123.68 149.64 A 55 55 0 1 1 153.48 112.84" />
      <path d="M 122.57 162.02 A 66 66 0 1 1 161.19 124.72" />
      <path d="M 119.28 174.55 A 77 77 0 1 1 166.35 139.08" />
    </symbol>
    <!-- Brand logo mark — brushed nested rings opening right, ink fading at the tips -->
    <linearGradient id="avn-ink" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#1B4230" />
      <stop offset=".6" stop-color="#1F4A35" />
      <stop offset=".85" stop-color="#567D6A" />
      <stop offset="1" stop-color="#AFC2B6" />
    </linearGradient>
    <symbol id="avn-brand-rings" viewBox="0 0 200 200" fill="none" stroke="url(#avn-ink)" stroke-linecap="round">
      <path stroke-width="4.2" d="M 119.23 105.51 A 20 20 0 1 1 112.31 84.24" />
      <path stroke-width="4.8" d="M 129.65 109.06 A 31 31 0 1 1 121.92 78.08" />
      <path stroke-width="5.4" d="M 139.71 113.68 A 42 42 0 1 1 132.64 73.57" />
      <path stroke-width="6.0" d="M 149.48 119.00 A 53 53 0 1 1 144.45 71.14" />
      <path stroke-width="6.6" d="M 158.91 125.00 A 64 64 0 1 1 157.02 70.94" />
      <path stroke-width="7.2" d="M 167.70 132.29 A 75 75 0 1 1 169.78 72.51" />
      <path stroke-width="7.8" d="M 176.63 139.04 A 86 86 0 1 1 182.24 74.85" />
    </symbol>
    <symbol id="avn-mandala" viewBox="0 0 600 600">
      <path d="M 276.8 4.9 Q 300.0 -8.0 323.2 4.9" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 323.2 4.9 Q 348.2 -4.2 369.1 12.2" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 369.1 12.2 Q 395.2 7.1 413.3 26.5" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 413.3 26.5 Q 439.8 25.6 454.7 47.6" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 454.7 47.6 Q 481.0 50.8 492.2 74.9" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 492.2 74.9 Q 517.8 82.2 525.1 107.8" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 525.1 107.8 Q 549.2 119.0 552.4 145.3" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 552.4 145.3 Q 574.4 160.2 573.5 186.7" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 573.5 186.7 Q 592.9 204.8 587.8 230.9" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 587.8 230.9 Q 604.2 251.8 595.1 276.8" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 595.1 276.8 Q 608.0 300.0 595.1 323.2" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 595.1 323.2 Q 604.2 348.2 587.8 369.1" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 587.8 369.1 Q 592.9 395.2 573.5 413.3" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 573.5 413.3 Q 574.4 439.8 552.4 454.7" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 552.4 454.7 Q 549.2 481.0 525.1 492.2" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 525.1 492.2 Q 517.8 517.8 492.2 525.1" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 492.2 525.1 Q 481.0 549.2 454.7 552.4" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 454.7 552.4 Q 439.8 574.4 413.3 573.5" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 413.3 573.5 Q 395.2 592.9 369.1 587.8" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 369.1 587.8 Q 348.2 604.2 323.2 595.1" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 323.2 595.1 Q 300.0 608.0 276.8 595.1" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 276.8 595.1 Q 251.8 604.2 230.9 587.8" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 230.9 587.8 Q 204.8 592.9 186.7 573.5" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 186.7 573.5 Q 160.2 574.4 145.3 552.4" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 145.3 552.4 Q 119.0 549.2 107.8 525.1" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 107.8 525.1 Q 82.2 517.8 74.9 492.2" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 74.9 492.2 Q 50.8 481.0 47.6 454.7" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 47.6 454.7 Q 25.6 439.8 26.5 413.3" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 26.5 413.3 Q 7.1 395.2 12.2 369.1" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 12.2 369.1 Q -4.2 348.2 4.9 323.2" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 4.9 323.2 Q -8.0 300.0 4.9 276.8" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 4.9 276.8 Q -4.2 251.8 12.2 230.9" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 12.2 230.9 Q 7.1 204.8 26.5 186.7" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 26.5 186.7 Q 25.6 160.2 47.6 145.3" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 47.6 145.3 Q 50.8 119.0 74.9 107.8" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 74.9 107.8 Q 82.2 82.2 107.8 74.9" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 107.8 74.9 Q 119.0 50.8 145.3 47.6" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 145.3 47.6 Q 160.2 25.6 186.7 26.5" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 186.7 26.5 Q 204.8 7.1 230.9 12.2" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 230.9 12.2 Q 251.8 -4.2 276.8 4.9" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <circle cx="300" cy="300" r="292" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 300.0 68.0 Q 262.0 39.0 300.0 10.0 Q 338.0 39.0 300.0 68.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 300.0 62.2 Q 274.2 37.8 300.0 13.5 Q 325.8 37.8 300.0 62.2 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 300.0 56.4 Q 286.3 36.7 300.0 17.0 Q 313.7 36.7 300.0 56.4 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="300.0" cy="19.0" r="3" fill="currentColor" stroke="none"/>
      <path d="M 464.0 136.0 Q 457.7 88.6 505.1 94.9 Q 511.4 142.3 464.0 136.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 468.1 131.9 Q 467.1 96.4 502.6 97.4 Q 503.6 132.9 468.1 131.9 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 472.3 127.7 Q 476.5 104.1 500.1 99.9 Q 495.9 123.5 472.3 127.7 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="498.7" cy="101.3" r="3" fill="currentColor" stroke="none"/>
      <path d="M 532.0 300.0 Q 561.0 262.0 590.0 300.0 Q 561.0 338.0 532.0 300.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 537.8 300.0 Q 562.2 274.2 586.5 300.0 Q 562.2 325.8 537.8 300.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 543.6 300.0 Q 563.3 286.3 583.0 300.0 Q 563.3 313.7 543.6 300.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="581.0" cy="300.0" r="3" fill="currentColor" stroke="none"/>
      <path d="M 464.0 464.0 Q 511.4 457.7 505.1 505.1 Q 457.7 511.4 464.0 464.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 468.1 468.1 Q 503.6 467.1 502.6 502.6 Q 467.1 503.6 468.1 468.1 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 472.3 472.3 Q 495.9 476.5 500.1 500.1 Q 476.5 495.9 472.3 472.3 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="498.7" cy="498.7" r="3" fill="currentColor" stroke="none"/>
      <path d="M 300.0 532.0 Q 338.0 561.0 300.0 590.0 Q 262.0 561.0 300.0 532.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 300.0 537.8 Q 325.8 562.2 300.0 586.5 Q 274.2 562.2 300.0 537.8 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 300.0 543.6 Q 313.7 563.3 300.0 583.0 Q 286.3 563.3 300.0 543.6 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="300.0" cy="581.0" r="3" fill="currentColor" stroke="none"/>
      <path d="M 136.0 464.0 Q 142.3 511.4 94.9 505.1 Q 88.6 457.7 136.0 464.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 131.9 468.1 Q 132.9 503.6 97.4 502.6 Q 96.4 467.1 131.9 468.1 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 127.7 472.3 Q 123.5 495.9 99.9 500.1 Q 104.1 476.5 127.7 472.3 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="101.3" cy="498.7" r="3" fill="currentColor" stroke="none"/>
      <path d="M 68.0 300.0 Q 39.0 338.0 10.0 300.0 Q 39.0 262.0 68.0 300.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 62.2 300.0 Q 37.8 325.8 13.5 300.0 Q 37.8 274.2 62.2 300.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 56.4 300.0 Q 36.7 313.7 17.0 300.0 Q 36.7 286.3 56.4 300.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="19.0" cy="300.0" r="3" fill="currentColor" stroke="none"/>
      <path d="M 136.0 136.0 Q 88.6 142.3 94.9 94.9 Q 142.3 88.6 136.0 136.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 131.9 131.9 Q 96.4 132.9 97.4 97.4 Q 132.9 96.4 131.9 131.9 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 127.7 127.7 Q 104.1 123.5 99.9 99.9 Q 123.5 104.1 127.7 127.7 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="101.3" cy="101.3" r="3" fill="currentColor" stroke="none"/>
      <path d="M 387.3 89.4 Q 375.1 63.8 401.8 54.2 Q 413.9 79.8 387.3 89.4 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 388.7 85.8 Q 381.6 65.6 400.9 56.4 Q 408.0 76.6 388.7 85.8 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 510.6 212.7 Q 520.2 186.1 545.8 198.2 Q 536.2 224.9 510.6 212.7 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 514.2 211.3 Q 523.4 192.0 543.6 199.1 Q 534.4 218.4 514.2 211.3 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 510.6 387.3 Q 536.2 375.1 545.8 401.8 Q 520.2 413.9 510.6 387.3 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 514.2 388.7 Q 534.4 381.6 543.6 400.9 Q 523.4 408.0 514.2 388.7 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 387.3 510.6 Q 413.9 520.2 401.8 545.8 Q 375.1 536.2 387.3 510.6 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 388.7 514.2 Q 408.0 523.4 400.9 543.6 Q 381.6 534.4 388.7 514.2 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 212.7 510.6 Q 224.9 536.2 198.2 545.8 Q 186.1 520.2 212.7 510.6 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 211.3 514.2 Q 218.4 534.4 199.1 543.6 Q 192.0 523.4 211.3 514.2 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 89.4 387.3 Q 79.8 413.9 54.2 401.8 Q 63.8 375.1 89.4 387.3 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 85.8 388.7 Q 76.6 408.0 56.4 400.9 Q 65.6 381.6 85.8 388.7 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 89.4 212.7 Q 63.8 224.9 54.2 198.2 Q 79.8 186.1 89.4 212.7 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 85.8 211.3 Q 65.6 218.4 56.4 199.1 Q 76.6 192.0 85.8 211.3 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 212.7 89.4 Q 186.1 79.8 198.2 54.2 Q 224.9 63.8 212.7 89.4 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 211.3 85.8 Q 192.0 76.6 199.1 56.4 Q 218.4 65.6 211.3 85.8 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="300" cy="300" r="224" fill="none" stroke="currentColor" stroke-width="1.2"/>
      <circle cx="300.0" cy="86.0" r="2" fill="currentColor" stroke="none"/>
      <circle cx="341.7" cy="90.1" r="2" fill="currentColor" stroke="none"/>
      <circle cx="381.9" cy="102.3" r="2" fill="currentColor" stroke="none"/>
      <circle cx="418.9" cy="122.1" r="2" fill="currentColor" stroke="none"/>
      <circle cx="451.3" cy="148.7" r="2" fill="currentColor" stroke="none"/>
      <circle cx="477.9" cy="181.1" r="2" fill="currentColor" stroke="none"/>
      <circle cx="497.7" cy="218.1" r="2" fill="currentColor" stroke="none"/>
      <circle cx="509.9" cy="258.3" r="2" fill="currentColor" stroke="none"/>
      <circle cx="514.0" cy="300.0" r="2" fill="currentColor" stroke="none"/>
      <circle cx="509.9" cy="341.7" r="2" fill="currentColor" stroke="none"/>
      <circle cx="497.7" cy="381.9" r="2" fill="currentColor" stroke="none"/>
      <circle cx="477.9" cy="418.9" r="2" fill="currentColor" stroke="none"/>
      <circle cx="451.3" cy="451.3" r="2" fill="currentColor" stroke="none"/>
      <circle cx="418.9" cy="477.9" r="2" fill="currentColor" stroke="none"/>
      <circle cx="381.9" cy="497.7" r="2" fill="currentColor" stroke="none"/>
      <circle cx="341.7" cy="509.9" r="2" fill="currentColor" stroke="none"/>
      <circle cx="300.0" cy="514.0" r="2" fill="currentColor" stroke="none"/>
      <circle cx="258.3" cy="509.9" r="2" fill="currentColor" stroke="none"/>
      <circle cx="218.1" cy="497.7" r="2" fill="currentColor" stroke="none"/>
      <circle cx="181.1" cy="477.9" r="2" fill="currentColor" stroke="none"/>
      <circle cx="148.7" cy="451.3" r="2" fill="currentColor" stroke="none"/>
      <circle cx="122.1" cy="418.9" r="2" fill="currentColor" stroke="none"/>
      <circle cx="102.3" cy="381.9" r="2" fill="currentColor" stroke="none"/>
      <circle cx="90.1" cy="341.7" r="2" fill="currentColor" stroke="none"/>
      <circle cx="86.0" cy="300.0" r="2" fill="currentColor" stroke="none"/>
      <circle cx="90.1" cy="258.3" r="2" fill="currentColor" stroke="none"/>
      <circle cx="102.3" cy="218.1" r="2" fill="currentColor" stroke="none"/>
      <circle cx="122.1" cy="181.1" r="2" fill="currentColor" stroke="none"/>
      <circle cx="148.7" cy="148.7" r="2" fill="currentColor" stroke="none"/>
      <circle cx="181.1" cy="122.1" r="2" fill="currentColor" stroke="none"/>
      <circle cx="218.1" cy="102.3" r="2" fill="currentColor" stroke="none"/>
      <circle cx="258.3" cy="90.1" r="2" fill="currentColor" stroke="none"/>
      <circle cx="300" cy="300" r="206" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 300.0 178.0 Q 270.0 138.0 300.0 98.0 Q 330.0 138.0 300.0 178.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 300.0 170.0 Q 279.6 136.4 300.0 102.8 Q 320.4 136.4 300.0 170.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 300.0 162.0 Q 289.2 134.8 300.0 107.6 Q 310.8 134.8 300.0 162.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="300.0" cy="107.0" r="3" fill="currentColor" stroke="none"/>
      <path d="M 386.3 213.7 Q 393.3 164.2 442.8 157.2 Q 435.8 206.7 386.3 213.7 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 391.9 208.1 Q 401.3 169.9 439.4 160.6 Q 430.1 198.7 391.9 208.1 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 397.6 202.4 Q 409.2 175.5 436.0 164.0 Q 424.5 190.8 397.6 202.4 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="436.5" cy="163.5" r="3" fill="currentColor" stroke="none"/>
      <path d="M 422.0 300.0 Q 462.0 270.0 502.0 300.0 Q 462.0 330.0 422.0 300.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 430.0 300.0 Q 463.6 279.6 497.2 300.0 Q 463.6 320.4 430.0 300.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 438.0 300.0 Q 465.2 289.2 492.4 300.0 Q 465.2 310.8 438.0 300.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="493.0" cy="300.0" r="3" fill="currentColor" stroke="none"/>
      <path d="M 386.3 386.3 Q 435.8 393.3 442.8 442.8 Q 393.3 435.8 386.3 386.3 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 391.9 391.9 Q 430.1 401.3 439.4 439.4 Q 401.3 430.1 391.9 391.9 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 397.6 397.6 Q 424.5 409.2 436.0 436.0 Q 409.2 424.5 397.6 397.6 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="436.5" cy="436.5" r="3" fill="currentColor" stroke="none"/>
      <path d="M 300.0 422.0 Q 330.0 462.0 300.0 502.0 Q 270.0 462.0 300.0 422.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 300.0 430.0 Q 320.4 463.6 300.0 497.2 Q 279.6 463.6 300.0 430.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 300.0 438.0 Q 310.8 465.2 300.0 492.4 Q 289.2 465.2 300.0 438.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="300.0" cy="493.0" r="3" fill="currentColor" stroke="none"/>
      <path d="M 213.7 386.3 Q 206.7 435.8 157.2 442.8 Q 164.2 393.3 213.7 386.3 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 208.1 391.9 Q 198.7 430.1 160.6 439.4 Q 169.9 401.3 208.1 391.9 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 202.4 397.6 Q 190.8 424.5 164.0 436.0 Q 175.5 409.2 202.4 397.6 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="163.5" cy="436.5" r="3" fill="currentColor" stroke="none"/>
      <path d="M 178.0 300.0 Q 138.0 330.0 98.0 300.0 Q 138.0 270.0 178.0 300.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 170.0 300.0 Q 136.4 320.4 102.8 300.0 Q 136.4 279.6 170.0 300.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 162.0 300.0 Q 134.8 310.8 107.6 300.0 Q 134.8 289.2 162.0 300.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="107.0" cy="300.0" r="3" fill="currentColor" stroke="none"/>
      <path d="M 213.7 213.7 Q 164.2 206.7 157.2 157.2 Q 206.7 164.2 213.7 213.7 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 208.1 208.1 Q 169.9 198.7 160.6 160.6 Q 198.7 169.9 208.1 208.1 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 202.4 202.4 Q 175.5 190.8 164.0 164.0 Q 190.8 175.5 202.4 202.4 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="163.5" cy="163.5" r="3" fill="currentColor" stroke="none"/>
      <path d="M 345.9 189.1 Q 339.9 161.8 363.5 146.6 Q 369.5 174.0 345.9 189.1 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 347.7 184.9 Q 345.0 162.9 362.5 149.2 Q 365.1 171.2 347.7 184.9 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 410.9 254.1 Q 426.0 230.5 453.4 236.5 Q 438.2 260.1 410.9 254.1 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 415.1 252.3 Q 428.8 234.9 450.8 237.5 Q 437.1 255.0 415.1 252.3 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 410.9 345.9 Q 438.2 339.9 453.4 363.5 Q 426.0 369.5 410.9 345.9 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 415.1 347.7 Q 437.1 345.0 450.8 362.5 Q 428.8 365.1 415.1 347.7 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 345.9 410.9 Q 369.5 426.0 363.5 453.4 Q 339.9 438.2 345.9 410.9 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 347.7 415.1 Q 365.1 428.8 362.5 450.8 Q 345.0 437.1 347.7 415.1 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 254.1 410.9 Q 260.1 438.2 236.5 453.4 Q 230.5 426.0 254.1 410.9 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 252.3 415.1 Q 255.0 437.1 237.5 450.8 Q 234.9 428.8 252.3 415.1 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 189.1 345.9 Q 174.0 369.5 146.6 363.5 Q 161.8 339.9 189.1 345.9 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 184.9 347.7 Q 171.2 365.1 149.2 362.5 Q 162.9 345.0 184.9 347.7 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 189.1 254.1 Q 161.8 260.1 146.6 236.5 Q 174.0 230.5 189.1 254.1 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 184.9 252.3 Q 162.9 255.0 149.2 237.5 Q 171.2 234.9 184.9 252.3 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 254.1 189.1 Q 230.5 174.0 236.5 146.6 Q 260.1 161.8 254.1 189.1 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 252.3 184.9 Q 234.9 171.2 237.5 149.2 Q 255.0 162.9 252.3 184.9 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="300" cy="300" r="116" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 284.9 185.0 Q 300.0 177.0 315.1 185.0" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 315.1 185.0 Q 331.8 181.2 344.4 192.8" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 344.4 192.8 Q 361.5 193.5 370.6 208.0" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 370.6 208.0 Q 387.0 213.0 392.0 229.4" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 392.0 229.4 Q 406.5 238.5 407.2 255.6" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 407.2 255.6 Q 418.8 268.2 415.0 284.9" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 415.0 284.9 Q 423.0 300.0 415.0 315.1" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 415.0 315.1 Q 418.8 331.8 407.2 344.4" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 407.2 344.4 Q 406.5 361.5 392.0 370.6" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 392.0 370.6 Q 387.0 387.0 370.6 392.0" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 370.6 392.0 Q 361.5 406.5 344.4 407.2" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 344.4 407.2 Q 331.8 418.8 315.1 415.0" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 315.1 415.0 Q 300.0 423.0 284.9 415.0" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 284.9 415.0 Q 268.2 418.8 255.6 407.2" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 255.6 407.2 Q 238.5 406.5 229.4 392.0" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 229.4 392.0 Q 213.0 387.0 208.0 370.6" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 208.0 370.6 Q 193.5 361.5 192.8 344.4" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 192.8 344.4 Q 181.2 331.8 185.0 315.1" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 185.0 315.1 Q 177.0 300.0 185.0 284.9" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 185.0 284.9 Q 181.2 268.2 192.8 255.6" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 192.8 255.6 Q 193.5 238.5 208.0 229.4" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 208.0 229.4 Q 213.0 213.0 229.4 208.0" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 229.4 208.0 Q 238.5 193.5 255.6 192.8" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 255.6 192.8 Q 268.2 181.2 284.9 185.0" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M 300.0 234.0 Q 290.0 212.0 300.0 190.0 Q 310.0 212.0 300.0 234.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 300.0 229.6 Q 293.2 211.1 300.0 192.6 Q 306.8 211.1 300.0 229.6 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 325.3 239.0 Q 324.4 214.9 342.1 198.4 Q 342.9 222.5 325.3 239.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 326.9 235.0 Q 327.7 215.3 341.1 200.8 Q 340.3 220.5 326.9 235.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 346.7 253.3 Q 355.2 230.7 377.8 222.2 Q 369.3 244.8 346.7 253.3 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 349.8 250.2 Q 358.0 232.3 375.9 224.1 Q 367.7 242.0 349.8 250.2 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 361.0 274.7 Q 377.5 257.1 401.6 257.9 Q 385.1 275.6 361.0 274.7 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 365.0 273.1 Q 379.5 259.7 399.2 258.9 Q 384.7 272.3 365.0 273.1 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 366.0 300.0 Q 388.0 290.0 410.0 300.0 Q 388.0 310.0 366.0 300.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 370.4 300.0 Q 388.9 293.2 407.4 300.0 Q 388.9 306.8 370.4 300.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 361.0 325.3 Q 385.1 324.4 401.6 342.1 Q 377.5 342.9 361.0 325.3 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 365.0 326.9 Q 384.7 327.7 399.2 341.1 Q 379.5 340.3 365.0 326.9 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 346.7 346.7 Q 369.3 355.2 377.8 377.8 Q 355.2 369.3 346.7 346.7 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 349.8 349.8 Q 367.7 358.0 375.9 375.9 Q 358.0 367.7 349.8 349.8 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 325.3 361.0 Q 342.9 377.5 342.1 401.6 Q 324.4 385.1 325.3 361.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 326.9 365.0 Q 340.3 379.5 341.1 399.2 Q 327.7 384.7 326.9 365.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 300.0 366.0 Q 310.0 388.0 300.0 410.0 Q 290.0 388.0 300.0 366.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 300.0 370.4 Q 306.8 388.9 300.0 407.4 Q 293.2 388.9 300.0 370.4 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 274.7 361.0 Q 275.6 385.1 257.9 401.6 Q 257.1 377.5 274.7 361.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 273.1 365.0 Q 272.3 384.7 258.9 399.2 Q 259.7 379.5 273.1 365.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 253.3 346.7 Q 244.8 369.3 222.2 377.8 Q 230.7 355.2 253.3 346.7 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 250.2 349.8 Q 242.0 367.7 224.1 375.9 Q 232.3 358.0 250.2 349.8 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 239.0 325.3 Q 222.5 342.9 198.4 342.1 Q 214.9 324.4 239.0 325.3 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 235.0 326.9 Q 220.5 340.3 200.8 341.1 Q 215.3 327.7 235.0 326.9 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 234.0 300.0 Q 212.0 310.0 190.0 300.0 Q 212.0 290.0 234.0 300.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 229.6 300.0 Q 211.1 306.8 192.6 300.0 Q 211.1 293.2 229.6 300.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 239.0 274.7 Q 214.9 275.6 198.4 257.9 Q 222.5 257.1 239.0 274.7 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 235.0 273.1 Q 215.3 272.3 200.8 258.9 Q 220.5 259.7 235.0 273.1 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 253.3 253.3 Q 230.7 244.8 222.2 222.2 Q 244.8 230.7 253.3 253.3 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 250.2 250.2 Q 232.3 242.0 224.1 224.1 Q 242.0 232.3 250.2 250.2 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 274.7 239.0 Q 257.1 222.5 257.9 198.4 Q 275.6 214.9 274.7 239.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M 273.1 235.0 Q 259.7 220.5 258.9 200.8 Q 272.3 215.3 273.1 235.0 Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="300" cy="300" r="60" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="300.0" cy="246.0" r="1.8" fill="currentColor" stroke="none"/>
      <circle cx="320.7" cy="250.1" r="1.8" fill="currentColor" stroke="none"/>
      <circle cx="338.2" cy="261.8" r="1.8" fill="currentColor" stroke="none"/>
      <circle cx="349.9" cy="279.3" r="1.8" fill="currentColor" stroke="none"/>
      <circle cx="354.0" cy="300.0" r="1.8" fill="currentColor" stroke="none"/>
      <circle cx="349.9" cy="320.7" r="1.8" fill="currentColor" stroke="none"/>
      <circle cx="338.2" cy="338.2" r="1.8" fill="currentColor" stroke="none"/>
      <circle cx="320.7" cy="349.9" r="1.8" fill="currentColor" stroke="none"/>
      <circle cx="300.0" cy="354.0" r="1.8" fill="currentColor" stroke="none"/>
      <circle cx="279.3" cy="349.9" r="1.8" fill="currentColor" stroke="none"/>
      <circle cx="261.8" cy="338.2" r="1.8" fill="currentColor" stroke="none"/>
      <circle cx="250.1" cy="320.7" r="1.8" fill="currentColor" stroke="none"/>
      <circle cx="246.0" cy="300.0" r="1.8" fill="currentColor" stroke="none"/>
      <circle cx="250.1" cy="279.3" r="1.8" fill="currentColor" stroke="none"/>
      <circle cx="261.8" cy="261.8" r="1.8" fill="currentColor" stroke="none"/>
      <circle cx="279.3" cy="250.1" r="1.8" fill="currentColor" stroke="none"/>
      <circle cx="300" cy="300" r="48" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <circle cx="300" cy="300" r="40" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <text x="300" y="322" text-anchor="middle" font-family="Noto Sans Devanagari, Mangal, serif" font-size="58" fill="currentColor" stroke="none">&#x0950;</text>
    </symbol>
  </svg>

  <!-- Navbar Start -->
  <nav class="navbar navbar-expand-xl bg-cream shadow-sm sticky-top py-3">
    <div class="container">
      <a class="navbar-brand d-inline-flex align-items-center lh-1 me-xl-3" href="index.html">
        <img src="/avn-removebg-preview.png" alt="Ayur Vidya Nikethan — Centre for Integrated Wellness" style="height:52px;width:auto;">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-2">
          <li class="nav-item"><a href="#programs" class="nav-link d-inline-flex align-items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21c.5 -4.5 2.5 -8 7 -10"/><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/></svg>
              Programs</a></li>
          <li class="nav-item"><a href="#testimonials" class="nav-link d-inline-flex align-items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg>
              Success Stories</a></li>
          <li class="nav-item"><a href="#about" class="nav-link d-inline-flex align-items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg>
              About</a></li>
          <li class="nav-item"><a href="#consultation" class="nav-link d-inline-flex align-items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/></svg>
              Contact</a></li>
        </ul>
        <div class="d-flex gap-3 align-items-center ms-lg-4">
          <a href="#consultation" class="btn btn-primary btn-bordered-gold navbar-cta d-inline-flex align-items-center gap-3 px-4 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-month text-gold flex-shrink-0">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
              <path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" />
              <path d="M7 14h.013" /><path d="M10.01 14h.005" /><path d="M13.01 14h.005" /><path d="M16.015 14h.005" />
              <path d="M13.015 17h.005" /><path d="M7.01 17h.005" /><path d="M10.01 17h.005" />
            </svg>
            <span class="navbar-cta-label fw-bold text-start text-uppercase lh-sm">Book Your Free<br>Wellness Strategy Session</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right text-gold flex-shrink-0">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Start -->
  <section class="bg-cream position-relative overflow-hidden" id="hero">
    <div class="leaf-bg d-none d-md-block"></div>
    <img src="/ilai-leaves.svg" class="hero-leaf d-none d-md-block" alt="" aria-hidden="true">
    <img src="/ilai-leaves.svg" class="hero-leaf-b d-none d-md-block" alt="" aria-hidden="true">

    <!-- Top: text (left) + full-bleed image (right) -->
    <div class="hero-top pt-lg-5 pt-5 pb-lg-5 pb-4">
      <div class="container position-relative" style="z-index:2;">
        <div class="row">
          <div class="col-lg-6">
            <span class="badge bg-white text-primary px-4 py-2 fw-normal border border-2 rounded-pill d-inline-flex align-items-center gap-2 mw-100 text-wrap text-start lh-sm mb-4" style="border-color: rgba(194,163,90,.5)!important;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gold"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 21c.5 -4.5 2.5 -8 7 -10"/><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/></svg>
              <span data-cms="hero.badge">Integrated Yogic Wellness for High-Responsibility Living</span></span>

            <h1 class="fw-bold mb-3 lh-1" style="font-size: clamp(2.2rem, 4.2vw, 3.6rem);">
              <span data-cms="hero.title1">Feel Better.</span><br>
              <span data-cms="hero.title2">Sleep Better.</span><br>
              <span class="text-gold" data-cms="hero.title3">Perform Better.</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5F8570" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="ms-1" style="vertical-align:baseline;"><path d="M5 21c.5 -4.5 2.5 -8 7 -10"/><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/></svg>
            </h1>

            <p class="fw-normal mb-3" style="max-width: 480px; font-size:1.08rem;" data-cms="hero.subtitle">Evidence-Informed Yoga &amp; Wellness Programs for Busy Professionals Worldwide.</p>

            <div class="row g-2 mb-4" style="max-width: 560px;">
              <div class="col-6 col-md-4"><div class="d-flex align-items-center gap-2"><span class="text-primary flex-shrink-0"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg></span><span class="fw-medium" style="font-size:.95rem;">Reduce Stress</span></div></div>
              <div class="col-6 col-md-4"><div class="d-flex align-items-center gap-2"><span class="text-primary flex-shrink-0"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg></span><span class="fw-medium" style="font-size:.95rem;">Sleep Better</span></div></div>
              <div class="col-6 col-md-4"><div class="d-flex align-items-center gap-2"><span class="text-primary flex-shrink-0"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg></span><span class="fw-medium" style="font-size:.95rem;">Restore Energy</span></div></div>
              <div class="col-6 col-md-4"><div class="d-flex align-items-center gap-2"><span class="text-primary flex-shrink-0"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg></span><span class="fw-medium" style="font-size:.95rem;">Eliminate Neck &amp; Back Pain</span></div></div>
              <div class="col-6 col-md-4"><div class="d-flex align-items-center gap-2"><span class="text-primary flex-shrink-0"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg></span><span class="fw-medium" style="font-size:.95rem;">Live Online</span></div></div>
              <div class="col-6 col-md-4"><div class="d-flex align-items-center gap-2"><span class="text-primary flex-shrink-0"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg></span><span class="fw-medium" style="font-size:.95rem;">Personal Guidance</span></div></div>
            </div>

            <div class="d-flex flex-column flex-sm-row gap-3 mb-3">
              <a href="#consultation" class="btn btn-primary btn-bordered-gold rounded-pill d-inline-flex align-items-center justify-content-center gap-2 px-4 py-2 lh-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg>
                <span class="fw-semibold">Book Your Complimentary <br class="d-none d-sm-block">Wellness Strategy Session</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gold flex-shrink-0"><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></svg>
              </a>
              <a href="https://www.youtube.com/watch?v=v7AYKMP6rOE" data-cms-href="video.youtube" class="btn bg-white border shadow-sm rounded-pill glightbox d-inline-flex align-items-center justify-content-center gap-2 px-4 py-2 lh-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" class="text-primary flex-shrink-0"><circle cx="12" cy="12" r="9"/><path d="M10 9l5 3l-5 3z" fill="currentColor" stroke="none"/></svg>
                <span class="fw-semibold text-primary">Watch Free <br class="d-none d-sm-block">Wellness Session</span>
              </a>
            </div>

            <div class="d-flex flex-wrap align-items-center column-gap-3 row-gap-2 small text-muted">
              <span class="d-inline-flex align-items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/><path d="M9 12l2 2l4 -4"/></svg><span class="fw-semibold text-dark">Trusted by Professionals</span></span>
              <span class="d-inline-flex align-items-center gap-2"><span class="text-gold">&bull;</span> Evidence-Informed</span>
              <span class="d-inline-flex align-items-center gap-2"><span class="text-gold">&bull;</span> Globally Accessible</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Full-bleed image (desktop) -->
      <div class="hero-img-bleed d-none d-lg-block">
        <img src="/assets/images/hero-img.jpg" alt="Professional practising guided meditation" data-cms-img="hero.image">
        <div class="hero-quote-card bg-white shadow-lg rounded-4 p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gold mb-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"/><path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"/></svg>
          <p class="mb-0 fw-semibold lh-sm" data-cms="hero.quote">Wellness is not a luxury. It's a way of living with clarity, energy and balance.</p>
          <span class="d-block mt-3" style="width:34px;height:3px;background:#C2A35A;border-radius:2px;"></span>
        </div>
      </div>

      <!-- Mobile image -->
      <div class="container d-lg-none mt-6">
        <img src="/assets/images/hero-img.jpg" alt="Professional practising guided meditation" class="img-fluid rounded-5 shadow-lg w-100" style="aspect-ratio:4/3.2;object-fit:cover;">
      </div>
    </div>

    <!-- Stats band -->
    <div class="container position-relative pb-lg-6 pb-5" style="z-index:2;">
      <div class="bg-white rounded-5 shadow-sm border p-lg-4 p-3">
        <div class="row gx-4 gy-4 text-center text-md-start">
          <div class="col-lg-3 col-md-6 stat-cell">
            <div class="d-flex flex-column flex-md-row align-items-center gap-3 justify-content-md-start">
              <span class="stat-icon flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"/><path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889"/><path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889"/></svg></span>
              <div class="lh-sm"><h3 class="fw-bold mb-0 text-primary" data-cms="stats.years">15+</h3><span class="fw-semibold d-block small">Years of Experience</span><small class="text-muted">Delivering Wellness Excellence</small></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 stat-cell">
            <div class="d-flex flex-column flex-md-row align-items-center gap-3 justify-content-md-start">
              <span class="stat-icon flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0"/><path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z"/><path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196"/><path d="M15 9l-3 5.196"/><path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 1 -.25"/></svg></span>
              <div class="lh-sm"><h3 class="fw-bold mb-0 fs-5 text-primary">Luxury Maldives</h3><span class="fw-semibold d-block small">Wellness Expert</span><small class="text-muted">5-Star Resort Experience</small></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 stat-cell">
            <div class="d-flex flex-column flex-md-row align-items-center gap-3 justify-content-md-start">
              <span class="stat-icon flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/></svg></span>
              <div class="lh-sm"><h3 class="fw-bold mb-0 text-primary" data-cms="stats.sessions">5000+</h3><span class="fw-semibold d-block small">Guided Wellness Sessions</span><small class="text-muted">Transforming Lives Worldwide</small></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 stat-cell">
            <div class="d-flex flex-column flex-md-row align-items-center gap-3 justify-content-md-start">
              <span class="stat-icon flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/></svg></span>
              <div class="lh-sm"><h3 class="fw-bold mb-0 fs-5 text-primary">Global Online</h3><span class="fw-semibold d-block small">Programs</span><small class="text-muted">Trusted by Professionals Worldwide</small></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Hero End -->

  <!-- Trust / Problem Section Start -->
  <section class="bg-cream position-relative overflow-hidden" id="crisis">
    <img src="/ilai-leaves.svg" class="ilai-decor d-none d-md-block" style="top:-40px;left:-60px;transform:rotate(40deg);" alt="" aria-hidden="true">

    <div class="hero-top pt-lg-6 pt-5 pb-lg-5 pb-4">
      <div class="container position-relative" style="z-index:2;">
        <div class="row">
          <div class="col-lg-7">
            <span class="badge bg-white text-primary px-4 py-2 fw-normal border border-2 rounded-pill d-inline-flex align-items-center gap-2 mw-100 text-wrap text-start lh-sm mb-3" style="border-color: rgba(194,163,90,.5)!important;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gold"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 21c.5 -4.5 2.5 -8 7 -10"/><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/></svg>
              <span>Integrated Yogic Wellness for High-Responsibility Living</span></span>

            <h2 class="fw-bold mb-2 lh-1" style="font-size:clamp(2rem,3.6vw,3rem);">Does This Sound<br>Like <span class="text-gold">You?</span></h2>

            <p class="text-muted mb-3" style="max-width:520px;">Modern life creates silent strain. If any of these feel familiar, your body and mind are asking for a better way.</p>

            <div class="row g-2">
              <div class="col-6 col-md-3">
                <div class="crisis-tile card h-100 border rounded-4 p-2 text-center d-flex flex-column align-items-center justify-content-center gap-1 bg-white" style="min-height:104px;">
                  <span class="d-inline-flex align-items-center justify-content-center rounded-circle text-primary flex-shrink-0" style="width:44px;height:44px;background:#E9F0EB;"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="14" r="5"/><path d="M10.2 13.5h.01"/><path d="M13.8 13.5h.01"/><path d="M10.5 17c.9 -.8 2.1 -.8 3 0"/><path d="M12 4.5v2"/><path d="M7.5 5.8l1.1 1.6"/><path d="M16.5 5.8l-1.1 1.6"/></svg></span>
                  <span class="small fw-semibold">Constant Stress</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="crisis-tile card h-100 border rounded-4 p-2 text-center d-flex flex-column align-items-center justify-content-center gap-1 bg-white" style="min-height:104px;">
                  <span class="d-inline-flex align-items-center justify-content-center rounded-circle text-primary flex-shrink-0" style="width:44px;height:44px;background:#E9F0EB;"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8"/><path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8"/><path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5"/><path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0"/><path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5"/><path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10"/></svg></span>
                  <span class="small fw-semibold">Mental Fatigue</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="crisis-tile card h-100 border rounded-4 p-2 text-center d-flex flex-column align-items-center justify-content-center gap-1 bg-white" style="min-height:104px;">
                  <span class="d-inline-flex align-items-center justify-content-center rounded-circle text-primary flex-shrink-0" style="width:44px;height:44px;background:#E9F0EB;"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="7" r="3"/><path d="M5.5 21v-1a5.5 5.5 0 0 1 11 0v1"/><path d="M17.5 9.5l2 -1.2"/><path d="M18.2 12.4l2.3 -.2"/><path d="M17.8 15.2l2.2 .7"/></svg></span>
                  <span class="small fw-semibold">Neck Pain</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="crisis-tile card h-100 border rounded-4 p-2 text-center d-flex flex-column align-items-center justify-content-center gap-1 bg-white" style="min-height:104px;">
                  <span class="d-inline-flex align-items-center justify-content-center rounded-circle text-primary flex-shrink-0" style="width:44px;height:44px;background:#E9F0EB;"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 6a6.5 6.5 0 1 0 7.7 9.2a7.5 7.5 0 0 1 -7.7 -9.2z"/><path d="M15.5 4h3l-3 3.5h3"/><path d="M19.3 10h2.2l-2.2 2.6h2.2"/></svg></span>
                  <span class="small fw-semibold">Poor Sleep</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="crisis-tile card h-100 border rounded-4 p-2 text-center d-flex flex-column align-items-center justify-content-center gap-1 bg-white" style="min-height:104px;">
                  <span class="d-inline-flex align-items-center justify-content-center rounded-circle text-primary flex-shrink-0" style="width:44px;height:44px;background:#E9F0EB;"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 7v5l3 3"/></svg></span>
                  <span class="small fw-semibold">No Time For Yourself</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="crisis-tile card h-100 border rounded-4 p-2 text-center d-flex flex-column align-items-center justify-content-center gap-1 bg-white" style="min-height:104px;">
                  <span class="d-inline-flex align-items-center justify-content-center rounded-circle text-primary flex-shrink-0" style="width:44px;height:44px;background:#E9F0EB;"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7.5a1.5 1.5 0 0 1 1.5 -1.5h3a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1 -1.5 1.5h-3a1.5 1.5 0 0 1 -1.5 -1.5z"/><path d="M10.5 4.5h3"/><path d="M11 16h2"/><path d="M11 13.5h2"/></svg></span>
                  <span class="small fw-semibold">Low Energy</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="crisis-tile card h-100 border rounded-4 p-2 text-center d-flex flex-column align-items-center justify-content-center gap-1 bg-white" style="min-height:104px;">
                  <span class="d-inline-flex align-items-center justify-content-center rounded-circle text-primary flex-shrink-0" style="width:44px;height:44px;background:#E9F0EB;"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="2.5"/><path d="M12 2.8v1.4"/><path d="M8.6 3.8l.9 1.3"/><path d="M15.4 3.8l-.9 1.3"/><path d="M7 20l1.8 -5.5h6.4l1.8 5.5"/><path d="M4.5 20h15"/></svg></span>
                  <span class="small fw-semibold">Burnout</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="crisis-tile card h-100 border rounded-4 p-2 text-center d-flex flex-column align-items-center justify-content-center gap-1 bg-white" style="min-height:104px;">
                  <span class="d-inline-flex align-items-center justify-content-center rounded-circle text-primary flex-shrink-0" style="width:44px;height:44px;background:#E9F0EB;"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20l10 0"/><path d="M6 6l6 -1l6 1"/><path d="M12 3l0 17"/><path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0"/><path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0"/></svg></span>
                  <span class="small fw-semibold">Poor Work-Life Balance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Full-bleed image (desktop) -->
      <div class="hero-img-bleed d-none d-lg-block">
        <img src="/assets/images/crisis-img.jpg" alt="Stressed professional at desk">
        <div class="hero-quote-card bg-white shadow-lg rounded-4 p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gold mb-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"/><path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"/></svg>
          <p class="mb-0 fw-semibold lh-sm">Wellness is not a luxury. It's a way of living with clarity, energy and balance.</p>
          <span class="d-block mt-3" style="width:34px;height:3px;background:#C2A35A;border-radius:2px;"></span>
        </div>
      </div>

      <!-- Mobile image -->
      <div class="container d-lg-none mt-6">
        <img src="/assets/images/crisis-img.jpg" alt="Stressed professional at desk" class="img-fluid rounded-5 shadow-lg w-100" style="aspect-ratio:4/3.2;object-fit:cover;">
      </div>
    </div>

    <!-- Callout -->
    <div class="container position-relative pb-lg-5 pb-4" style="z-index:2;">
      <div class="card border-0 shadow-sm rounded-5 bg-light bg-opacity-50 p-lg-3 p-3">
        <div class="row align-items-center g-3">
          <div class="col-lg-7 d-flex align-items-center gap-4">
            <span class="rounded-circle flex-shrink-0 d-none d-sm-flex align-items-center justify-content-center" style="width:76px;height:76px;background:#1F4A35;box-shadow:0 0 0 5px rgba(31,74,53,.15);">
              <img src="/lotus.svg" alt="" style="width:48px;height:48px;" aria-hidden="true">
            </span>
            <div>
              <h3 class="h5 fw-bold mb-1">If you answered YES to two or more…<br><span class="text-gold">AVN was designed for professionals like you.</span></h3>
              <p class="small text-muted mb-0">Evidence-informed. Personalized. Practical. Sustainable.</p>
            </div>
          </div>
          <div class="col-lg-5 text-lg-end">
            <a href="#consultation" class="btn btn-primary btn-bordered-gold px-4 py-2 d-inline-flex align-items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gold flex-shrink-0"><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/></svg>
              <span class="fw-bold text-uppercase text-start lh-sm" style="font-size:.8rem;letter-spacing:.045em;">Book My Complimentary<br>20-Minute Session</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gold flex-shrink-0"><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></svg>
            </a>
            <div class="small text-muted mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="me-1"><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"/><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M8 11v-4a4 4 0 1 1 8 0v4"/></svg>No obligation. 100% confidential.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Trust strip -->
    <div class="bg-primary position-relative py-4" style="z-index:2;">
      <div class="container">
        <div class="row gy-4 gx-lg-4 align-items-center">
          <div class="col-6 col-md-4 col-lg trust-cell">
            <div class="d-flex align-items-center gap-3">
              <span class="text-gold flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/><path d="M9 12l2 2l4 -4"/></svg></span>
              <div class="lh-sm"><div class="h4 fw-bold mb-0 text-white">15+</div><small class="text-white text-opacity-75">Years of International Experience</small></div>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg trust-cell">
            <div class="d-flex align-items-center gap-3">
              <span class="text-gold flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0"/><path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z"/><path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196"/><path d="M15 9l-3 5.196"/><path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 1 -.25"/></svg></span>
              <div class="lh-sm text-white"><span class="fw-semibold d-block small">Luxury Maldives</span><small class="text-white text-opacity-75">Wellness Expert</small></div>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg trust-cell">
            <div class="d-flex align-items-center gap-3">
              <span class="text-gold flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/></svg></span>
              <div class="lh-sm"><div class="h4 fw-bold mb-0 text-white">5000+</div><small class="text-white text-opacity-75">Guided Wellness Sessions</small></div>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg trust-cell">
            <div class="d-flex align-items-center gap-3">
              <span class="text-gold flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg></span>
              <div class="lh-sm text-white"><span class="fw-semibold d-block small">5-Star Resort</span><small class="text-white text-opacity-75">Experience</small></div>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg trust-cell">
            <div class="d-flex align-items-center gap-3">
              <span class="text-gold flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/></svg></span>
              <div class="lh-sm text-white"><span class="fw-semibold d-block small">Global Online Programs</span><small class="text-white text-opacity-75">Trusted by Professionals Worldwide</small></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Trust / Problem Section End -->

  <!-- About Band Start -->
  <section class="position-relative overflow-hidden bg-cream" id="about">
    <img src="/about.png" alt="" class="about-band-bg d-none d-lg-block" aria-hidden="true">
    <div class="container position-relative py-lg-10 pt-8 pb-6" style="z-index:2;">
      <div class="row">
        <div class="col-lg-7 col-xl-6">
          <span class="text-primary text-uppercase small fw-bold d-block mb-2" style="letter-spacing:.18rem;">About AVN</span>
          <h2 class="fw-bold mb-3 lh-sm" style="font-size:clamp(2rem,3.6vw,3rem);"><span class="text-dark">Built With Purpose,</span><br><span class="text-primary">Guided By Experience</span></h2>
          <p class="mb-0 fw-semibold" style="max-width:560px;font-size:1.05rem;color:#0b0b0b;">AVN was founded with a simple but powerful mission — to help professionals break free from stress, pain, fatigue and burnout, and build sustainable wellbeing through authentic yogic wisdom and modern science.</p>
        </div>
      </div>
      <div class="row mt-6">
        <div class="col-lg-7">
          <div class="row gy-4">
            <div class="col-6 col-md-3 about-pillar text-center">
              <span class="text-primary d-inline-flex mb-2"><span class="ic-lotus" style="width:44px;height:44px;"></span></span>
              <h3 class="h6 fw-bold mb-1">Ancient Wisdom</h3>
              <p class="small mb-0">Rooted in Yoga Philosophy</p>
            </div>
            <div class="col-6 col-md-3 about-pillar text-center">
              <span class="text-primary d-inline-flex mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12v.01"/><path d="M19.071 4.929c-1.562 -1.562 -6 .337 -9.9 4.243c-3.905 3.905 -5.804 8.337 -4.242 9.9c1.562 1.561 6 -.338 9.9 -4.244c3.905 -3.905 5.804 -8.337 4.242 -9.9"/><path d="M4.929 4.929c-1.562 1.562 .337 6 4.243 9.9c3.905 3.905 8.337 5.804 9.9 4.242c1.561 -1.562 -.338 -6 -4.244 -9.9c-3.905 -3.905 -8.337 -5.804 -9.9 -4.242"/></svg></span>
              <h3 class="h6 fw-bold mb-1">Modern Approach</h3>
              <p class="small mb-0">Structured, Practical &amp; Evidence-Informed</p>
            </div>
            <div class="col-6 col-md-3 about-pillar text-center">
              <span class="text-primary d-inline-flex mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"/><path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M17 10h2a2 2 0 0 1 2 2v1"/><path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M3 13v-1a2 2 0 0 1 2 -2h2"/></svg></span>
              <h3 class="h6 fw-bold mb-1">Human-Centered</h3>
              <p class="small mb-0">Real People. Real Transformations.</p>
            </div>
            <div class="col-6 col-md-3 about-pillar text-center">
              <span class="text-primary d-inline-flex mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/></svg></span>
              <h3 class="h6 fw-bold mb-1">Global Impact</h3>
              <p class="small mb-0">Supporting Professionals Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile / tablet: photo stacked below the content at its natural aspect -->
    <img src="/about.png" alt="Practitioner meditating at sunrise overlooking a misty valley" class="d-lg-none w-100 h-auto">
  </section>
  <!-- About Band End -->

  <!-- Why Choose AVN Start -->
  <section class="py-lg-8 py-6 position-relative bg-light bg-opacity-25 overflow-hidden" id="why">
    <div class="container position-relative">
      <div class="row g-0 bg-white border rounded-5 shadow-sm overflow-hidden">
        <!-- Left: 6 benefit points -->
        <div class="col-lg-7 p-lg-4 p-4 position-relative">
          <span class="position-absolute d-none d-lg-block" style="left:50%;top:92px;height:175px;width:1px;background:rgba(31,74,53,.12);pointer-events:none;" aria-hidden="true"></span>
          <img src="/lotus.svg" class="position-absolute d-none d-lg-block" style="width:56px;height:auto;top:180px;left:50%;transform:translate(-50%,-50%);opacity:.38;pointer-events:none;" alt="" aria-hidden="true">
          <span class="text-uppercase fw-bold d-block mb-2" style="letter-spacing:.14rem;font-size:1rem;color:#1b1b1b;">Why Professionals Choose AVN</span>
          <span class="d-block mb-5" style="width:44px;height:3px;background:#C2A35A;border-radius:2px;"></span>
          <div class="row g-4">
            <div class="col-md-6">
              <div class="d-flex gap-3">
                <span class="d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0 text-white" style="width:42px;height:42px;background:#1F4A35;box-shadow:0 0 0 2px rgba(194,163,90,.7);"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h3.5"/><path d="M19 16l-2 3h4l-2 3"/></svg></span>
                <div><h4 class="fw-bold text-dark mb-1" style="font-family:'Mulish',ui-sans-serif,system-ui,sans-serif;font-size:.95rem;">Personalised Guidance &amp; Support</h4><p class="text-muted mb-0" style="font-size:.9rem;">Structured support &amp; premium 1:1 guidance options.</p></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex gap-3">
                <span class="d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0 text-white" style="width:42px;height:42px;background:#1F4A35;box-shadow:0 0 0 2px rgba(194,163,90,.7);"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49"/><path d="M7.76 16.25a6 6 0 0 1 0 -8.49"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 19.07a10 10 0 0 1 0 -14.14"/></svg></span>
                <div><h4 class="fw-bold text-dark mb-1" style="font-family:'Mulish',ui-sans-serif,system-ui,sans-serif;font-size:.95rem;">Live Online Interactive Sessions</h4><p class="text-muted mb-0" style="font-size:.9rem;">Guided live online classes with real-time correction.</p></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex gap-3">
                <span class="d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0 text-white" style="width:42px;height:42px;background:#1F4A35;box-shadow:0 0 0 2px rgba(194,163,90,.7);"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg></span>
                <div><h4 class="fw-bold text-dark mb-1" style="font-family:'Mulish',ui-sans-serif,system-ui,sans-serif;font-size:.95rem;">Flexible Scheduling For Busy Professionals</h4><p class="text-muted mb-0" style="font-size:.9rem;">Designed around demanding professional routines.</p></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex gap-3">
                <span class="d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0 text-white" style="width:42px;height:42px;background:#1F4A35;box-shadow:0 0 0 2px rgba(194,163,90,.7);"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/><path d="M9 12l2 2l4 -4"/></svg></span>
                <div><h4 class="fw-bold text-dark mb-1" style="font-family:'Mulish',ui-sans-serif,system-ui,sans-serif;font-size:.95rem;">Safe, Structured &amp; Sustainable Wellness Methods</h4><p class="text-muted mb-0" style="font-size:.9rem;">Practical methods for real-life, long-term well-being.</p></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex gap-3">
                <span class="d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0 text-white" style="width:42px;height:42px;background:#1F4A35;box-shadow:0 0 0 2px rgba(194,163,90,.7);"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c1.5 3 4 4.5 4 8a4 4 0 1 1 -8 0c0 -3.5 2.5 -5 4 -8"/><path d="M9 21h6"/><path d="M10 18h4"/></svg></span>
                <div><h4 class="fw-bold text-dark mb-1" style="font-family:'Mulish',ui-sans-serif,system-ui,sans-serif;font-size:.95rem;">Practical Approaches For Real-Life Application</h4><p class="text-muted mb-0" style="font-size:.9rem;">Easy to integrate methods for a healthier professional life.</p></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex gap-3">
                <span class="d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0 text-white" style="width:42px;height:42px;background:#1F4A35;box-shadow:0 0 0 2px rgba(194,163,90,.7);"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/></svg></span>
                <div><h4 class="fw-bold text-dark mb-1" style="font-family:'Mulish',ui-sans-serif,system-ui,sans-serif;font-size:.95rem;">Globally Accessible Wellness Support</h4><p class="text-muted mb-0" style="font-size:.9rem;">Join from anywhere in the world, anytime.</p></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: green complimentary practice box -->
        <div class="col-lg-5">
          <div class="bg-primary text-white p-lg-4 p-4 h-100 position-relative overflow-hidden">
            <img src="/floral-2.svg" class="position-absolute" style="width:170px;height:auto;right:-35px;top:50%;transform:translateY(-50%);opacity:.12;pointer-events:none;" alt="" aria-hidden="true">
            <div class="position-relative">
              <span class="badge bg-white text-gold rounded-pill px-3 py-2 fw-bold text-uppercase mb-3" style="letter-spacing:.08em;font-size:.72rem;">Experience AVN Wellness</span>
              <h3 class="fw-bold mb-2 lh-sm text-white" style="font-size:1.45rem;">Begin Your Journey With<br>A <span class="text-gold">Complimentary</span> Guided Practice</h3>
              <p class="text-white text-opacity-75 mb-2" style="font-size:.85rem;">Not sure where to begin? Experience the calming and restorative approach of Ayur Vidya Nikethan (AVN) through a carefully guided <span class="fw-semibold text-white">45-minute complimentary wellness session</span>, designed specifically for busy professionals seeking calmness, flexibility, stress relief, and inner balance.</p>
              <h4 class="text-gold fw-bold mb-2" style="font-size:.92rem;">What You&rsquo;ll Experience</h4>
              <div class="row g-2 mb-3" style="font-size:.84rem;">
                <div class="col-sm-6 d-flex gap-2 align-items-start"><span class="text-gold flex-shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg></span><span>Gentle Guided Yoga</span></div>
                <div class="col-sm-6 d-flex gap-2 align-items-start"><span class="text-gold flex-shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg></span><span>Mental Calmness &amp; Emotional Reset</span></div>
                <div class="col-sm-6 d-flex gap-2 align-items-start"><span class="text-gold flex-shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg></span><span>Breath Awareness &amp; Relaxation</span></div>
                <div class="col-sm-6 d-flex gap-2 align-items-start"><span class="text-gold flex-shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg></span><span>Beginner-Friendly Guidance</span></div>
                <div class="col-sm-6 d-flex gap-2 align-items-start"><span class="text-gold flex-shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg></span><span>Stress Relief Practices</span></div>
              </div>
              <div class="text-center"><a href="https://www.youtube.com/watch?v=v7AYKMP6rOE" data-cms-href="video.youtube" class="btn bg-white text-primary fw-bold rounded-pill px-4 py-2 glightbox d-inline-flex align-items-center gap-2 text-uppercase" style="font-size:.8rem;letter-spacing:.04em;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/><path d="M7 14h.013"/><path d="M10.01 14h.005"/><path d="M13.01 14h.005"/><path d="M16.015 14h.005"/><path d="M13.015 17h.005"/><path d="M7.01 17h.005"/><path d="M10.01 17h.005"/></svg>
                Watch Free Session Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gold"><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></svg></a></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust row -->
      <div class="row g-3 mt-3 mx-0 py-2 bg-white border rounded-4 shadow-sm text-center text-md-start">
        <div class="col-md-3 col-6 trust-mini">
          <div class="d-flex flex-column flex-md-row align-items-center gap-3">
            <span class="text-gold flex-shrink-0"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/><path d="M9 12l2 2l4 -4"/></svg></span>
            <div><h5 class="fw-bold mb-0" style="font-size:14px;font-family:'Mulish',ui-sans-serif,system-ui,sans-serif;">100% Free Access</h5><p class="text-muted mb-0" style="font-size:12px;">No hidden charges. No obligations.</p></div>
          </div>
        </div>
        <div class="col-md-3 col-6 trust-mini">
          <div class="d-flex flex-column flex-md-row align-items-center gap-3">
            <span class="text-gold flex-shrink-0"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"/><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M8 11v-4a4 4 0 1 1 8 0v4"/></svg></span>
            <div><h5 class="fw-bold mb-0" style="font-size:14px;font-family:'Mulish',ui-sans-serif,system-ui,sans-serif;">Secure &amp; Confidential</h5><p class="text-muted mb-0" style="font-size:12px;">Your privacy is our priority.</p></div>
          </div>
        </div>
        <div class="col-md-3 col-6 trust-mini">
          <div class="d-flex flex-column flex-md-row align-items-center gap-3">
            <span class="text-gold flex-shrink-0"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg></span>
            <div><h5 class="fw-bold mb-0" style="font-size:14px;font-family:'Mulish',ui-sans-serif,system-ui,sans-serif;">Takes Less Than 1 Minute</h5><p class="text-muted mb-0" style="font-size:12px;">Instant access. No sign-up required.</p></div>
          </div>
        </div>
        <div class="col-md-3 col-6 trust-mini">
          <div class="d-flex flex-column flex-md-row align-items-center gap-3">
            <span class="text-gold flex-shrink-0"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/></svg></span>
            <div><h5 class="fw-bold mb-0" style="font-size:14px;font-family:'Mulish',ui-sans-serif,system-ui,sans-serif;">Designed For Busy Professionals Like You</h5></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Why Choose AVN End -->

  <!-- Story Start -->
  <section class="py-lg-9 py-8 position-relative overflow-hidden" id="story">
    <div class="container position-relative">
      <!-- Header -->
      <div class="row text-center">
        <div class="col-lg-9 mx-auto mb-6">
          <span class="st-eyebrow text-uppercase d-inline-block mb-3">Our Story</span>
          <h2 class="st-title mb-3">The <span class="u">Why</span> Behind AVN</h2>
          <p class="mb-0 mx-auto text-muted" style="max-width: 680px;font-size:1.05rem;">Every system we teach is born from real challenges, deep observation, and a desire to create lasting transformation in the lives of modern professionals.</p>
        </div>
      </div>

      <!-- 4 Why cards -->
      <div class="row g-4 mb-6">
        <div class="col-lg-3 col-md-6">
          <div class="st-card h-100 p-4 d-flex flex-column">
            <div class="d-flex align-items-center gap-3 mb-3">
              <span class="why-ico" style="background:#1F4A35;"><span class="why-num">01</span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg></span>
              <h3 class="why-t mb-0">Why Did AVN Begin?</h3>
            </div>
            <p class="why-d">We saw brilliant professionals struggling silently — stressed minds, tired bodies, and constant pressure.</p>
            <p class="why-hi mb-0 mt-auto pt-3 border-top" style="color:#1F4A35;">AVN began as a mission to bring real, lasting wellness into their lives.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="st-card h-100 p-4 d-flex flex-column">
            <div class="d-flex align-items-center gap-3 mb-3">
              <span class="why-ico" style="background:#D07C1E;"><span class="why-num">02</span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2"/><path d="M7 10v4"/></svg></span>
              <h3 class="why-t mb-0">Why Do Professionals Burn Out?</h3>
            </div>
            <p class="why-d">Long hours, high pressure, digital overload, poor posture, lack of movement, and zero recovery — this is the real burnout formula.</p>
            <p class="why-hi mb-0 mt-auto pt-3 border-top" style="color:#D07C1E;">It drains energy, focus, relationships and joy.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="st-card h-100 p-4 d-flex flex-column">
            <div class="d-flex align-items-center gap-3 mb-3">
              <span class="why-ico" style="background:#0E8A8A;"><span class="why-num">03</span><span class="ic-meditation" style="width:28px;height:28px;"></span></span>
              <h3 class="why-t mb-0">Why Is Ordinary Yoga Not Enough?</h3>
            </div>
            <p class="why-d">Generic yoga classes are not designed for real-life stress, modern lifestyle, or professional challenges.</p>
            <p class="why-hi mb-0 mt-auto pt-3 border-top" style="color:#0E8A8A;">Professionals need structured systems, not random practices.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="st-card h-100 p-4 d-flex flex-column">
            <div class="d-flex align-items-center gap-3 mb-3">
              <span class="why-ico" style="background:#3E7A57;"><span class="why-num">04</span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg></span>
              <h3 class="why-t mb-0">Why Did We Create These Systems?</h3>
            </div>
            <p class="why-d">We created result-oriented yogic wellness programs that address the real root problems of professionals.</p>
            <p class="why-hi mb-0 mt-auto pt-3 border-top" style="color:#1F4A35;">Structured. Practical. Evidence-Informed. Transformative.</p>
          </div>
        </div>
      </div>

      <!-- Info band: serve / vision / approach / reach + image -->
      <div class="st-card rounded-4 p-lg-5 p-4 mb-6">
        <div class="row g-4 align-items-center">
          <div class="col-lg-9">
            <div class="row g-4">
              <div class="col-6 col-lg-3">
                <span class="mb-2 d-inline-block" style="color:#1F4A35;"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/></svg></span>
                <h4 class="st-info-t mb-1">Who We Serve</h4>
                <p class="st-info-d mb-0">High-responsibility professionals, doctors, executives, educators, entrepreneurs, IT professionals, and families worldwide.</p>
              </div>
              <div class="col-6 col-lg-3">
                <span class="mb-2 d-inline-block" style="color:#1F4A35;"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/></svg></span>
                <h4 class="st-info-t mb-1">Our Vision</h4>
                <p class="st-info-d mb-0">To become a global leader in holistic wellness education, creating a healthier, calmer and more conscious world one professional at a time.</p>
              </div>
              <div class="col-6 col-lg-3">
                <span class="mb-2 d-inline-block" style="color:#1F4A35;"><span class="ic-meditation" style="width:30px;height:30px;"></span></span>
                <h4 class="st-info-t mb-1">Our Approach</h4>
                <p class="st-info-d mb-0">An integrated blend of Yoga, Meditation, Wellness Education, Counselling, Applied Psychology, Nutrition &amp; Lifestyle Guidance.</p>
              </div>
              <div class="col-6 col-lg-3">
                <span class="mb-2 d-inline-block" style="color:#1F4A35;"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 19l18 0"/><path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"/></svg></span>
                <h4 class="st-info-t mb-1">Our Reach</h4>
                <p class="st-info-d mb-0">80–90% of our sessions are online, making wellness accessible anytime, anywhere in the world.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="position-relative rounded-4 overflow-hidden shadow-sm h-100" style="min-height:190px;">
              <img src="/assets/images/story-reach.jpg" alt="Wellness anytime, anywhere" class="w-100 h-100" style="object-fit:cover;position:absolute;inset:0;">
              <span class="position-absolute bottom-0 start-0 w-100 p-3 text-white fw-semibold small" style="background:linear-gradient(0deg,rgba(0,0,0,.75),transparent);">Wellness Anytime, Anywhere.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Mission block -->
      <div class="row g-4 g-lg-5 align-items-center mb-6 position-relative">
        <img src="/floral-2-sage.svg" class="st-mission-leaf d-none d-lg-block" alt="" aria-hidden="true">
        <div class="col-lg-5">
          <img src="/assets/images/story-mission.jpg" alt="AVN mission" class="img-fluid rounded-4 shadow-lg w-100" style="aspect-ratio:4/3;object-fit:cover;">
        </div>
        <div class="col-lg-7 position-relative" style="z-index:1;">
          <span class="st-mission-eyebrow text-uppercase d-block mb-2">Our Mission</span>
          <h3 class="st-mission-t mb-3">To Empower Professionals To Live Healthier, Calmer &amp; More Balanced Lives.</h3>
          <p class="text-muted mb-4" style="max-width:620px;">At AVN, wellness is not separate from life — it becomes the foundation that supports clarity, resilience, performance, emotional balance, and long-term wellbeing.</p>
          <div class="row g-2 text-center" style="max-width:620px;">
            <div class="col"><span class="text-primary d-inline-block mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/></svg></span><div class="small fw-semibold">Clarity</div></div>
            <div class="col"><span class="text-primary d-inline-block mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/></svg></span><div class="small fw-semibold">Resilience</div></div>
            <div class="col"><span class="text-primary d-inline-block mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6 -6l4 4l8 -8"/><path d="M14 7l7 0l0 7"/></svg></span><div class="small fw-semibold">Performance</div></div>
            <div class="col"><span class="text-primary d-inline-block mb-1"><span class="ic-lotus" style="width:26px;height:26px;"></span></span><div class="small fw-semibold">Balance</div></div>
            <div class="col"><span class="text-primary d-inline-block mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 10l.01 0"/><path d="M15 10l.01 0"/><path d="M9.5 15a3.5 3.5 0 0 0 5 0"/></svg></span><div class="small fw-semibold">Wellbeing</div></div>
          </div>
        </div>
      </div>

      <!-- Stats band -->
      <div class="bg-primary text-white rounded-5 shadow-sm p-lg-6 p-5 mb-6">
        <div class="row gy-4 align-items-center text-center text-lg-start">
          <div class="col-6 col-lg-2"><div class="d-flex flex-column flex-lg-row align-items-center gap-2"><span class="text-gold flex-shrink-0"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"/><path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889"/><path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889"/></svg></span><div class="lh-sm"><div class="h4 fw-bold text-gold mb-0">18+</div><small class="text-white text-opacity-75">Years of Experience</small></div></div></div>
          <div class="col-6 col-lg-2"><div class="d-flex flex-column flex-lg-row align-items-center gap-2"><span class="text-gold flex-shrink-0"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/></svg></span><div class="lh-sm"><div class="h4 fw-bold text-gold mb-0">5000+</div><small class="text-white text-opacity-75">Professionals Transformed</small></div></div></div>
          <div class="col-6 col-lg-2"><div class="d-flex flex-column flex-lg-row align-items-center gap-2"><span class="text-gold flex-shrink-0"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/></svg></span><div class="lh-sm"><div class="h4 fw-bold text-gold mb-0">25+</div><small class="text-white text-opacity-75">Countries Reached</small></div></div></div>
          <div class="col-6 col-lg-2"><div class="d-flex flex-column flex-lg-row align-items-center gap-2"><span class="text-gold flex-shrink-0"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg></span><div class="lh-sm"><div class="h4 fw-bold text-gold mb-0">4</div><small class="text-white text-opacity-75">Signature Wellness Programs</small></div></div></div>
          <div class="col-lg-4"><p class="fst-italic mb-0 small text-white text-opacity-75">&ldquo;True wellness is not about having time, it&rsquo;s about creating better energy, every day.&rdquo;</p></div>
        </div>
      </div>

      <!-- CTA strip -->
      <div class="card border-0 shadow-sm rounded-5 bg-cream p-lg-4 p-4">
        <div class="row align-items-center g-3">
          <div class="col-lg-8">
            <div class="d-flex align-items-center gap-3 justify-content-center justify-content-lg-start text-center text-lg-start">
              <span class="flex-shrink-0 d-inline-flex align-items-center justify-content-center" style="width:52px;height:52px;border-radius:50%;background:#E9F0EB;color:#1F4A35;"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21c.5 -4.5 2.5 -8 7 -10"/><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/></svg></span>
              <div><h4 class="fw-bold mb-0">Your Wellbeing Is Your Greatest Asset.</h4><p class="text-muted mb-0">Let Us Help You Build It Together.</p></div>
            </div>
          </div>
          <div class="col-lg-4 text-center text-lg-end">
            <a href="#consultation" class="btn btn-primary btn-bordered-gold d-inline-flex align-items-center gap-2 px-4 py-2">Book Your Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></svg></a>
            <div class="small text-muted mt-2">No obligation. 100% confidential.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Story End -->



  <!-- Watch Free Session Start -->
  <section class="py-lg-11 py-8 bg-cream position-relative overflow-hidden" id="watch-session">
    <img src="/ilai-leaves.svg" class="ilai-decor d-none d-md-block" style="top:-40px;right:-60px;transform:scaleX(-1) rotate(40deg);opacity:.4;" alt="" aria-hidden="true">
    <div class="container position-relative">

      <!-- Top: text + video -->
      <div class="row align-items-center gy-5">
        <div class="col-lg-6">
          <span class="text-primary text-uppercase fw-bold d-inline-flex align-items-center gap-2 mb-3" style="letter-spacing:.16rem;font-size:.9rem;">A Gift To Your Well-Being
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gold"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 21c.5 -4.5 2.5 -8 7 -10"/><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/></svg></span>
          <h2 class="fw-bold mb-3 lh-1" style="font-size:clamp(2rem,3.6vw,3rem);">Watch 45 Minutes of<br><span class="text-gold">Premium Wellness Session</span><br><span class="text-primary">&ndash; Absolutely Free!</span></h2>
          <p class="text-muted mb-4" style="max-width:500px;">Take time for yourself and experience a expert-guided wellness session designed to <strong class="text-dark">refresh your body, calm your mind</strong> and uplift your life.</p>
          <div class="row g-0 text-center" style="max-width:520px;">
            <div class="col-3 wf-mini px-2">
              <span class="text-primary d-inline-flex mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><path d="M8 21l2 -6h4l2 6"/><path d="M9 12h6"/></svg></span>
              <div class="small fw-semibold lh-sm">Expert Guided Session</div>
            </div>
            <div class="col-3 wf-mini px-2">
              <span class="text-primary d-inline-flex mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></span>
              <div class="small fw-semibold lh-sm">45 Minutes Access</div>
            </div>
            <div class="col-3 wf-mini px-2">
              <span class="text-primary d-inline-flex mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9l5 3l-5 3z" fill="currentColor" stroke="none"/></svg></span>
              <div class="small fw-semibold lh-sm">Recorded Session</div>
            </div>
            <div class="col-3 wf-mini px-2">
              <span class="text-primary d-inline-flex mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21c.5 -4.5 2.5 -8 7 -10"/><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/></svg></span>
              <div class="small fw-semibold lh-sm">For Busy Professionals</div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="position-relative">
            <div class="wf-photo">
              <img src="/45-min-free.png" alt="Professional watching a guided wellness session on a laptop">
            </div>
            <div class="wf-play-wrap">
              <a href="https://www.youtube.com/watch?v=v7AYKMP6rOE" data-cms-href="video.youtube" class="glightbox wf-play d-flex flex-column align-items-center justify-content-center text-center">
                <span class="d-inline-flex align-items-center justify-content-center rounded-circle mb-1" style="width:46px;height:46px;background:#1F4A35;"><svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11 -7z"/></svg></span>
                <span class="fw-bold text-primary" style="font-size:.72rem;letter-spacing:.03em;">CLICK TO PLAY</span>
                <span class="text-gold fw-bold" style="font-size:.6rem;letter-spacing:.02em;">45-MINUTE FREE<br>SESSION</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Help band -->
      <div class="bg-primary text-white rounded-4 p-lg-4 p-4 mt-6 position-relative overflow-hidden">
        <h3 class="text-gold fw-bold text-center mb-4" style="font-size:1.3rem;">This Free Session Will Help You:</h3>
        <div class="row gy-4 align-items-start text-center">
          <div class="col-6 col-lg wf-help-cell">
            <div class="px-2"><span class="text-gold d-inline-flex mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8"/><path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8"/><path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5"/><path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0"/><path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5"/><path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10"/></svg></span><div class="small fw-semibold lh-sm">Reduce Stress &amp; Mental Fatigue</div></div>
          </div>
          <div class="col-6 col-lg wf-help-cell">
            <div class="px-2"><span class="text-gold d-inline-flex mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 3l-9 12h7l-1 6l9 -12h-7z"/></svg></span><div class="small fw-semibold lh-sm">Improve Energy &amp; Focus</div></div>
          </div>
          <div class="col-6 col-lg wf-help-cell">
            <div class="px-2"><span class="text-gold d-inline-flex mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4.5" r="2"/><path d="M12 7v6"/><path d="M9 21l3 -8l3 8"/><path d="M6 10l6 2l6 -2"/></svg></span><div class="small fw-semibold lh-sm">Relieve Body Tension</div></div>
          </div>
          <div class="col-6 col-lg wf-help-cell">
            <div class="px-2"><span class="text-gold d-inline-flex mb-2"><span class="ic-lotus" style="width:30px;height:30px;"></span></span><div class="small fw-semibold lh-sm">Experience Deep Relaxation</div></div>
          </div>
          <div class="col-6 col-lg wf-help-cell">
            <div class="px-2"><span class="text-gold d-inline-flex mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M17 4l.5 1.5l1.5 .5l-1.5 .5l-.5 1.5l-.5 -1.5l-1.5 -.5l1.5 -.5z"/><path d="M20 8l.4 1l1 .4l-1 .4l-.4 1l-.4 -1l-1 -.4l1 -.4z"/></svg></span><div class="small fw-semibold lh-sm">Take The First Step Towards A Better You</div></div>
          </div>
        </div>
      </div>

      <!-- CTA row -->
      <div class="row align-items-stretch gy-4 mt-3">
        <div class="col-lg-3 col-md-6">
          <div class="card border-0 shadow-sm rounded-4 bg-light bg-opacity-50 h-100 p-4">
            <div class="d-flex align-items-center gap-3 mb-3">
              <span class="text-gold flex-shrink-0"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/><path d="M9 12l2 2l4 -4"/></svg></span>
              <h4 class="h6 fw-bold mb-0">100% Free Access</h4>
            </div>
            <ul class="list-unstyled mb-0 small d-flex flex-column gap-2">
              <li class="d-flex align-items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F4A35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg>No hidden charges</li>
              <li class="d-flex align-items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F4A35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg>No obligations</li>
              <li class="d-flex align-items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F4A35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg>Just your time for yourself</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="h-100 d-flex flex-column justify-content-center align-items-center text-center">
            <a href="https://www.youtube.com/watch?v=v7AYKMP6rOE" data-cms-href="video.youtube" class="glightbox btn btn-primary btn-bordered-gold w-100 rounded-4 d-inline-flex align-items-center justify-content-center gap-3 px-4 py-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg>
              <span class="text-start lh-sm"><span class="fw-bold text-uppercase d-block" style="font-size:1.15rem;letter-spacing:.02em;">Click To Watch 45 Minutes Free</span><span class="text-gold d-block" style="font-size:.9rem;">Start Your Wellness Journey Now</span></span>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gold flex-shrink-0"><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></svg>
            </a>
            <div class="small text-muted mt-3 d-inline-flex align-items-center gap-2 flex-wrap justify-content-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gold"><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"/><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M8 11v-4a4 4 0 1 1 8 0v4"/></svg>
              <span>Secure Access <span class="text-gold">&bull;</span> Instant Access <span class="text-gold">&bull;</span> No Registration Required</span>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card border-0 shadow-sm rounded-4 bg-light bg-opacity-50 h-100 p-4">
            <div class="d-flex align-items-center gap-3 mb-3">
              <span class="text-gold flex-shrink-0"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M17 4l.5 1.5l1.5 .5l-1.5 .5l-.5 1.5l-.5 -1.5l-1.5 -.5l1.5 -.5z"/></svg></span>
              <h4 class="h6 fw-bold mb-0">Designed For Busy Professionals</h4>
            </div>
            <ul class="list-unstyled mb-0 small d-flex flex-column gap-2">
              <li class="d-flex align-items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F4A35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg>Short on time</li>
              <li class="d-flex align-items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F4A35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg>Big on responsibilities</li>
              <li class="d-flex align-items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F4A35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg>We understand you</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Quote band -->
      <div class="card border-0 shadow-sm rounded-4 bg-light bg-opacity-50 mt-4 p-4 position-relative overflow-hidden">
        <img src="/ilai-leaves.svg" class="position-absolute d-none d-sm-block" style="width:120px;height:auto;right:24px;top:50%;transform:translateY(-50%) scaleX(-1);opacity:.5;pointer-events:none;" alt="" aria-hidden="true">
        <div class="d-flex align-items-start gap-3 position-relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="#1F4A35" stroke="none" class="flex-shrink-0"><path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"/><path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"/></svg>
          <div>
            <p class="fw-bold mb-1" style="color:#1b1b1b;">Wellness is not a luxury, it's a necessity.</p>
            <p class="text-muted mb-0">Let this 45 minutes be the beginning of a healthier, calmer, and more focused you.</p>
          </div>
        </div>
      </div>

    </div>
  </section>
  <!-- Watch Free Session End -->

  <!-- Programs Start -->
  <section class="py-lg-9 py-7 position-relative overflow-hidden" id="programs">
    <img src="/ilai-sage.svg" class="position-absolute d-none d-lg-block" style="width:150px;height:auto;top:-10px;left:-30px;opacity:.5;transform:rotate(12deg);pointer-events:none;z-index:0;" alt="" aria-hidden="true">
    <img src="/floral-2-sage.svg" class="position-absolute d-none d-lg-block" style="width:110px;height:auto;top:-20px;right:-20px;opacity:.5;transform:scaleX(-1) rotate(6deg);pointer-events:none;z-index:0;" alt="" aria-hidden="true">
    <div class="container position-relative">
      <div class="row text-center">
        <div class="col-lg-9 mx-auto mb-5">
          <h2 class="fw-bold mb-2 d-flex align-items-center justify-content-center gap-2 gap-md-4" style="font-size:clamp(2rem,4vw,3rem);">
            <svg class="d-none d-md-inline-block flex-shrink-0" width="64" height="30" viewBox="0 0 66 30" fill="#9DB79A" aria-hidden="true" style="transform:scaleX(-1);"><path d="M2 27 C 22 24 44 16 64 4" fill="none" stroke="#9DB79A" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="14" cy="24" rx="2.6" ry="5.6" transform="rotate(-38 14 24)"/><ellipse cx="24" cy="20" rx="2.8" ry="6" transform="rotate(-42 24 20)"/><ellipse cx="34" cy="16" rx="3" ry="6.4" transform="rotate(-45 34 16)"/><ellipse cx="45" cy="11" rx="3" ry="6.4" transform="rotate(-48 45 11)"/><ellipse cx="55" cy="7" rx="2.8" ry="6" transform="rotate(-50 55 7)"/><ellipse cx="19" cy="27" rx="2.4" ry="5" transform="rotate(15 19 27)"/><ellipse cx="29" cy="23" rx="2.6" ry="5.4" transform="rotate(13 29 23)"/><ellipse cx="40" cy="18" rx="2.6" ry="5.4" transform="rotate(11 40 18)"/><ellipse cx="50" cy="13" rx="2.4" ry="5" transform="rotate(9 50 13)"/></svg>
            <span>Our 4 Signature <span class="text-primary">Programs</span></span>
            <svg class="d-none d-md-inline-block flex-shrink-0" width="64" height="30" viewBox="0 0 66 30" fill="#9DB79A" aria-hidden="true"><path d="M2 27 C 22 24 44 16 64 4" fill="none" stroke="#9DB79A" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="14" cy="24" rx="2.6" ry="5.6" transform="rotate(-38 14 24)"/><ellipse cx="24" cy="20" rx="2.8" ry="6" transform="rotate(-42 24 20)"/><ellipse cx="34" cy="16" rx="3" ry="6.4" transform="rotate(-45 34 16)"/><ellipse cx="45" cy="11" rx="3" ry="6.4" transform="rotate(-48 45 11)"/><ellipse cx="55" cy="7" rx="2.8" ry="6" transform="rotate(-50 55 7)"/><ellipse cx="19" cy="27" rx="2.4" ry="5" transform="rotate(15 19 27)"/><ellipse cx="29" cy="23" rx="2.6" ry="5.4" transform="rotate(13 29 23)"/><ellipse cx="40" cy="18" rx="2.6" ry="5.4" transform="rotate(11 40 18)"/><ellipse cx="50" cy="13" rx="2.4" ry="5" transform="rotate(9 50 13)"/></svg>
          </h2>
          <p class="mb-0 d-flex flex-wrap justify-content-center gap-2 gap-md-3 fw-semibold">
            <span>Evidence-Informed</span><span class="text-gold">&bull;</span><span>Expert Guided</span><span class="text-gold">&bull;</span><span>Real Transformation</span>
          </p>
        </div>
      </div>
      <div class="row g-4" id="programsGrid" data-cms-skip>
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 rounded-5 shadow-sm card-lift" style="border-top:4px solid #1F4A35;">
            <div class="card-body p-5 d-flex flex-column">
              <span class="icon-shape icon-lg rounded-circle text-white mb-4" style="background:#1F4A35; box-shadow:0 0 0 4px #1F4A3533;"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M4 17l5 1l.75 -1.5"/><path d="M15 21l-2 -7.5"/><path d="M5 12l5 -1.5l5 -1.5l5 1.5"/></svg></span>
              <h3 class="h6 fw-bold mb-2" style="min-height:3rem;">AVN Professional Stress Reset Program&trade;</h3>
              <p class="small text-muted mb-4">Reduce Stress. Restore Balance. Build Lasting Resilience.</p>
              <div class="d-flex justify-content-between text-center rounded-3 p-3 mb-4" style="background:#1F4A3512;"><div><span style="color:#1F4A35;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg></span><div class="text-muted" style="font-size:10px;">Duration</div><div class="fw-bold" style="font-size:12px;">8 Weeks</div></div><div class="border-start border-end px-2"><span style="color:#1F4A35;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg></span><div class="text-muted" style="font-size:10px;">Time / Day</div><div class="fw-bold" style="font-size:12px;">60 Min</div></div><div><span style="color:#1F4A35;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg></span><div class="text-muted" style="font-size:10px;">Schedule</div><div class="fw-bold" style="font-size:12px;">5 Days/Wk</div></div></div>
              <h4 class="text-uppercase fw-bold mb-3" style="color:#1F4A35; font-size:12px; letter-spacing:.06rem;">Key Benefits</h4>
              <ul class="list-unstyled d-flex flex-column gap-2 small mb-4"><li class="d-flex gap-2"><span style="color:#1F4A35;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Reduce Stress &amp; Anxiety</span></li><li class="d-flex gap-2"><span style="color:#1F4A35;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Calm Overthinking &amp; Mental Overload</span></li><li class="d-flex gap-2"><span style="color:#1F4A35;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Restore Emotional Balance</span></li><li class="d-flex gap-2"><span style="color:#1F4A35;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Improve Sleep &amp; Energy</span></li></ul>
              <div class="mt-auto">
                <span class="badge rounded-pill text-white mb-2 d-inline-flex align-items-center gap-1" style="background:#1F4A35;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg> Best For</span>
                <p class="text-muted mb-0" style="font-size:12px;">Bankers, IT Professionals, Executives, Teachers, Doctors &amp; Busy Professionals</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 rounded-5 shadow-sm card-lift" style="border-top:4px solid #0E8A8A;">
            <div class="card-body p-5 d-flex flex-column">
              <span class="icon-shape icon-lg rounded-circle text-white mb-4" style="background:#0E8A8A; box-shadow:0 0 0 4px #0E8A8A33;"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M9 6l3 -1l3 1"/><path d="M9 10l3 -1l3 1"/><path d="M9 14l3 -1l3 1"/><path d="M9 18l3 -1l3 1"/></svg></span>
              <h3 class="h6 fw-bold mb-2" style="min-height:3rem;">AVN Desk Work Recovery &amp; Posture Wellness Program&trade;</h3>
              <p class="small text-muted mb-4">Relieve Pain. Restore Posture. Reclaim Comfortable Movement.</p>
              <div class="d-flex justify-content-between text-center rounded-3 p-3 mb-4" style="background:#0E8A8A12;"><div><span style="color:#0E8A8A;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg></span><div class="text-muted" style="font-size:10px;">Duration</div><div class="fw-bold" style="font-size:12px;">6 Weeks</div></div><div class="border-start border-end px-2"><span style="color:#0E8A8A;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg></span><div class="text-muted" style="font-size:10px;">Time / Day</div><div class="fw-bold" style="font-size:12px;">60 Min</div></div><div><span style="color:#0E8A8A;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg></span><div class="text-muted" style="font-size:10px;">Schedule</div><div class="fw-bold" style="font-size:12px;">5 Days/Wk</div></div></div>
              <h4 class="text-uppercase fw-bold mb-3" style="color:#0E8A8A; font-size:12px; letter-spacing:.06rem;">Key Benefits</h4>
              <ul class="list-unstyled d-flex flex-column gap-2 small mb-4"><li class="d-flex gap-2"><span style="color:#0E8A8A;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Relieve Neck, Shoulder &amp; Back Pain</span></li><li class="d-flex gap-2"><span style="color:#0E8A8A;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Improve Posture &amp; Spinal Alignment</span></li><li class="d-flex gap-2"><span style="color:#0E8A8A;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Reduce Stiffness &amp; Sitting Fatigue</span></li><li class="d-flex gap-2"><span style="color:#0E8A8A;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Ease Screen Strain &amp; Eye Fatigue</span></li></ul>
              <div class="mt-auto">
                <span class="badge rounded-pill text-white mb-2 d-inline-flex align-items-center gap-1" style="background:#0E8A8A;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg> Best For</span>
                <p class="text-muted mb-0" style="font-size:12px;">IT &amp; Remote Workers, Bank Employees, Teachers, Office &amp; Desk Professionals</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 rounded-5 shadow-sm card-lift" style="border-top:4px solid #21489B;">
            <div class="card-body p-5 d-flex flex-column">
              <span class="icon-shape icon-lg rounded-circle text-white mb-4" style="background:#21489B; box-shadow:0 0 0 4px #21489B33;"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/><path d="M17 4a2 2 0 0 0 1.5 1.5a2 2 0 0 0 -1.5 1.5a2 2 0 0 0 -1.5 -1.5a2 2 0 0 0 1.5 -1.5"/></svg></span>
              <h3 class="h6 fw-bold mb-2" style="min-height:3rem;">AVN Sleep, Energy &amp; Burnout Recovery Program&trade;</h3>
              <p class="small text-muted mb-4">Restore Deep Sleep. Renew Energy. Recover from Burnout.</p>
              <div class="d-flex justify-content-between text-center rounded-3 p-3 mb-4" style="background:#21489B12;"><div><span style="color:#21489B;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg></span><div class="text-muted" style="font-size:10px;">Duration</div><div class="fw-bold" style="font-size:12px;">8 Weeks</div></div><div class="border-start border-end px-2"><span style="color:#21489B;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg></span><div class="text-muted" style="font-size:10px;">Time / Day</div><div class="fw-bold" style="font-size:12px;">60 Min</div></div><div><span style="color:#21489B;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg></span><div class="text-muted" style="font-size:10px;">Schedule</div><div class="fw-bold" style="font-size:12px;">5 Days/Wk</div></div></div>
              <h4 class="text-uppercase fw-bold mb-3" style="color:#21489B; font-size:12px; letter-spacing:.06rem;">Key Benefits</h4>
              <ul class="list-unstyled d-flex flex-column gap-2 small mb-4"><li class="d-flex gap-2"><span style="color:#21489B;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Improve Sleep Quality</span></li><li class="d-flex gap-2"><span style="color:#21489B;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Restore Energy &amp; Vitality</span></li><li class="d-flex gap-2"><span style="color:#21489B;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Recover From Burnout</span></li><li class="d-flex gap-2"><span style="color:#21489B;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Calm Nervous System</span></li></ul>
              <div class="mt-auto">
                <span class="badge rounded-pill text-white mb-2 d-inline-flex align-items-center gap-1" style="background:#21489B;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg> Best For</span>
                <p class="text-muted mb-0" style="font-size:12px;">Doctors, Executives, Shift Workers, Entrepreneurs &amp; Busy Professionals</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 rounded-5 shadow-sm card-lift" style="border-top:4px solid #B07D1A;">
            <div class="card-body p-5 d-flex flex-column">
              <span class="icon-shape icon-lg rounded-circle text-white mb-4" style="background:#B07D1A; box-shadow:0 0 0 4px #B07D1A33;"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c3.5 0 6 -2.5 6 -6c0 -2 -1 -4 -3 -5.5c0 4 -3 5.5 -3 5.5s-3 -1.5 -3 -5.5c-2 1.5 -3 3.5 -3 5.5c0 3.5 2.5 6 6 6z"/><path d="M3 15c2 1 3.5 2.5 4 4"/><path d="M21 15c-2 1 -3.5 2.5 -4 4"/></svg></span>
              <h3 class="h6 fw-bold mb-2" style="min-height:3rem;">AVN Complete Professional Wellness Transformation&trade;</h3>
              <p class="small text-muted mb-4">Transforming Stress, Energy, Focus and Wellbeing for Sustainable Professional Success.</p>
              <div class="d-flex justify-content-between text-center rounded-3 p-3 mb-4" style="background:#B07D1A12;"><div><span style="color:#B07D1A;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg></span><div class="text-muted" style="font-size:10px;">Duration</div><div class="fw-bold" style="font-size:12px;">12 Weeks</div></div><div class="border-start border-end px-2"><span style="color:#B07D1A;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg></span><div class="text-muted" style="font-size:10px;">Time / Day</div><div class="fw-bold" style="font-size:12px;">60 Min</div></div><div><span style="color:#B07D1A;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg></span><div class="text-muted" style="font-size:10px;">Schedule</div><div class="fw-bold" style="font-size:12px;">5 Days/Wk</div></div></div>
              <h4 class="text-uppercase fw-bold mb-3" style="color:#B07D1A; font-size:12px; letter-spacing:.06rem;">Key Benefits</h4>
              <ul class="list-unstyled d-flex flex-column gap-2 small mb-4"><li class="d-flex gap-2"><span style="color:#B07D1A;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Complete Health &amp; Wellness Reset</span></li><li class="d-flex gap-2"><span style="color:#B07D1A;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Better Sleep, Energy &amp; Posture</span></li><li class="d-flex gap-2"><span style="color:#B07D1A;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Emotional Balance &amp; Stress Relief</span></li><li class="d-flex gap-2"><span style="color:#B07D1A;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Sustainable Lifestyle Transformation</span></li></ul>
              <div class="mt-auto">
                <span class="badge rounded-pill text-white mb-2 d-inline-flex align-items-center gap-1" style="background:#B07D1A;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg> Best For</span>
                <p class="text-muted mb-0" style="font-size:12px;">Professionals Across All Sectors, Executives, Entrepreneurs &amp; More</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card rounded-5 shadow-sm border mt-6">
        <div class="card-body p-lg-6 p-4">
          <div class="row g-4 align-items-start justify-content-center">
          <div class="col-lg col-md-4 col-6">
            <div class="d-flex flex-column flex-sm-row align-items-center align-items-sm-start text-center text-sm-start gap-3">
              <span class="icon-shape icon-md rounded-circle icon-chip flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/><path d="M9 12l2 2l4 -4"/></svg></span>
              <div><h5 class="fw-bold mb-1" style="font-size:14px;">Science-Backed Approach</h5><p class="text-muted mb-0" style="font-size:12px;">Evidence-informed yogic wellness systems.</p></div>
            </div>
          </div>
          <div class="col-lg col-md-4 col-6">
            <div class="d-flex flex-column flex-sm-row align-items-center align-items-sm-start text-center text-sm-start gap-3">
              <span class="icon-shape icon-md rounded-circle icon-chip flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/></svg></span>
              <div><h5 class="fw-bold mb-1" style="font-size:14px;">Expert Guided Programs</h5><p class="text-muted mb-0" style="font-size:12px;">Structured by experienced wellness professionals.</p></div>
            </div>
          </div>
          <div class="col-lg col-md-4 col-6">
            <div class="d-flex flex-column flex-sm-row align-items-center align-items-sm-start text-center text-sm-start gap-3">
              <span class="icon-shape icon-md rounded-circle icon-chip flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/></svg></span>
              <div><h5 class="fw-bold mb-1" style="font-size:14px;">Flexible &amp; Accessible</h5><p class="text-muted mb-0" style="font-size:12px;">Live sessions with 23&ndash;24 hrs recorded access.</p></div>
            </div>
          </div>
          <div class="col-lg col-md-4 col-6">
            <div class="d-flex flex-column flex-sm-row align-items-center align-items-sm-start text-center text-sm-start gap-3">
              <span class="icon-shape icon-md rounded-circle icon-chip flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"/><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M8 11v-4a4 4 0 1 1 8 0v4"/></svg></span>
              <div><h5 class="fw-bold mb-1" style="font-size:14px;">Secure &amp; Private Access</h5><p class="text-muted mb-0" style="font-size:12px;">Password-protected viewing for participants only.</p></div>
            </div>
          </div>
          <div class="col-lg col-md-4 col-6">
            <div class="d-flex flex-column flex-sm-row align-items-center align-items-sm-start text-center text-sm-start gap-3">
              <span class="icon-shape icon-md rounded-circle icon-chip flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6 -6l4 4l8 -8"/><path d="M14 7l7 0l0 7"/></svg></span>
              <div><h5 class="fw-bold mb-1" style="font-size:14px;">Real Results That Last</h5><p class="text-muted mb-0" style="font-size:12px;">Transform your health, mind, energy &amp; life.</p></div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-6">
        <span class="d-inline-flex align-items-center gap-2 small text-muted">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gold"><path d="M5 21c.5 -4.5 2.5 -8 7 -10"/><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/></svg>
          <span><strong class="text-dark">Trusted by Professionals Worldwide</strong> <span class="text-gold">&bull;</span> Transforming Lives Through Yogic Wellness</span>
        </span>
      </div>
    </div>
  </section>
  <!-- Programs End -->

  <!-- Who We Serve Start -->
  <section class="py-lg-9 py-7 position-relative overflow-hidden" id="serve">
    <img src="/world-dots.svg" class="position-absolute d-none d-lg-block" style="width:min(30vw,360px);height:auto;top:64px;right:-30px;opacity:.22;z-index:0;pointer-events:none;" alt="" aria-hidden="true">
    <img src="/ilai-sage.svg" class="position-absolute d-none d-md-block" style="width:130px;height:auto;top:-24px;left:-34px;opacity:.5;transform:rotate(14deg);z-index:0;pointer-events:none;" alt="" aria-hidden="true">
    <img src="/ilai-sage.svg" class="position-absolute d-none d-md-block" style="width:110px;height:auto;top:-30px;right:-30px;opacity:.5;transform:scaleX(-1) rotate(14deg);z-index:0;pointer-events:none;" alt="" aria-hidden="true">
    <div class="container position-relative">
      <!-- Header -->
      <div class="row">
        <div class="col-lg-8 mb-4">
          <span class="text-primary text-uppercase fw-bold d-inline-block mb-2" style="letter-spacing:.16rem;font-size:.95rem;">Who We Serve</span>
          <h2 class="fw-bold mb-2">Wellness Designed For<br><span class="text-primary">High-Responsibility Lives</span></h2>
          <p class="text-muted mb-0">We partner with busy professionals across the world to reduce stress, restore energy, improve focus and create lasting wellbeing.</p>
        </div>
      </div>

      <!-- 4 value props -->
      <div class="row gy-3 mb-3 text-center">
        <div class="col-6 col-lg-3 serve-prop">
          <span class="serve-prop-ico d-inline-flex align-items-center justify-content-center text-primary mb-2"><span class="ic-meditation" style="width:30px;height:30px;"></span></span>
          <h4 class="h6 fw-bold mb-1">Science Backed</h4>
          <p class="text-muted mb-0" style="font-size:.86rem;">Evidence-based yogic wellness programs</p>
        </div>
        <div class="col-6 col-lg-3 serve-prop">
          <span class="serve-prop-ico d-inline-flex align-items-center justify-content-center text-primary mb-2"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg></span>
          <h4 class="h6 fw-bold mb-1">Human-Centered</h4>
          <p class="text-muted mb-0" style="font-size:.86rem;">Personalized guidance for real life</p>
        </div>
        <div class="col-6 col-lg-3 serve-prop">
          <span class="serve-prop-ico d-inline-flex align-items-center justify-content-center text-primary mb-2"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/></svg></span>
          <h4 class="h6 fw-bold mb-1">Sustainable Results</h4>
          <p class="text-muted mb-0" style="font-size:.86rem;">Not quick fixes, real transformation</p>
        </div>
        <div class="col-6 col-lg-3 serve-prop">
          <span class="serve-prop-ico d-inline-flex align-items-center justify-content-center text-primary mb-2"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/></svg></span>
          <h4 class="h6 fw-bold mb-1">Global Community</h4>
          <p class="text-muted mb-0" style="font-size:.86rem;">Professionals from 25+ countries</p>
        </div>
      </div>

      <div class="text-center mb-4">
        <span class="badge bg-light text-dark rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2 border"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="text-gold"><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/></svg>Also available for Students &bull; Families &bull; Personal Wellness</span>
      </div>

      <!-- 8 profession cards -->
      <div class="row g-3 mb-6">
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 rounded-4 p-3 card-lift cat-card flex-row gap-3">
            <span class="serve-cat-ico flex-shrink-0 align-self-start"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l18 0"/><path d="M3 10l18 0"/><path d="M5 6l7 -3l7 3"/><path d="M4 10l0 11"/><path d="M20 10l0 11"/><path d="M8 14l0 3"/><path d="M12 14l0 3"/><path d="M16 14l0 3"/></svg></span>
            <div class="d-flex flex-column">
              <h4 class="h6 fw-bold mb-1">Banking &amp; Finance</h4>
              <p class="text-muted mb-2" style="font-size:.86rem;">Stress resilience, focus &amp; performance under pressure</p>
              <a href="#programs" class="text-primary fw-semibold text-decoration-none small mt-auto d-inline-flex align-items-center gap-1">Explore Programs <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></svg></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 rounded-4 p-3 card-lift cat-card flex-row gap-3">
            <span class="serve-cat-ico flex-shrink-0 align-self-start"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 19l18 0"/><path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"/></svg></span>
            <div class="d-flex flex-column">
              <h4 class="h6 fw-bold mb-1">IT &amp; Corporate</h4>
              <p class="text-muted mb-2" style="font-size:.86rem;">Ergonomics, eye care, posture &amp; mental clarity</p>
              <a href="#programs" class="text-primary fw-semibold text-decoration-none small mt-auto d-inline-flex align-items-center gap-1">Explore Programs <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></svg></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 rounded-4 p-3 card-lift cat-card flex-row gap-3">
            <span class="serve-cat-ico flex-shrink-0 align-self-start"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1"/><path d="M8 15a6 6 0 1 0 12 0v-3"/><path d="M11 3v2"/><path d="M6 3v2"/><path d="M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/></svg></span>
            <div class="d-flex flex-column">
              <h4 class="h6 fw-bold mb-1">Doctors &amp; Healthcare</h4>
              <p class="text-muted mb-2" style="font-size:.86rem;">Reduce burnout, improve sleep &amp; restore energy</p>
              <a href="#programs" class="text-primary fw-semibold text-decoration-none small mt-auto d-inline-flex align-items-center gap-1">Explore Programs <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></svg></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 rounded-4 p-3 card-lift cat-card flex-row gap-3">
            <span class="serve-cat-ico flex-shrink-0 align-self-start"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"/><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"/></svg></span>
            <div class="d-flex flex-column">
              <h4 class="h6 fw-bold mb-1">Teachers &amp; Educators</h4>
              <p class="text-muted mb-2" style="font-size:.86rem;">Emotional balance, patience &amp; sustainable energy</p>
              <a href="#programs" class="text-primary fw-semibold text-decoration-none small mt-auto d-inline-flex align-items-center gap-1">Explore Programs <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></svg></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 rounded-4 p-3 card-lift cat-card flex-row gap-3">
            <span class="serve-cat-ico flex-shrink-0 align-self-start"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 10l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385"/><path d="M6 9l4 4"/><path d="M13 10l-4 -4"/><path d="M3 21h7"/><path d="M6.793 15.793l-3.586 -3.586a1 1 0 0 1 0 -1.414l2.293 -2.293l.5 .5l3 -3l-.5 -.5l2.293 -2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-2.293 2.293l-.5 -.5l-3 3l.5 .5l-2.293 2.293a1 1 0 0 1 -1.414 0z"/></svg></span>
            <div class="d-flex flex-column">
              <h4 class="h6 fw-bold mb-1">Lawyers &amp; Legal</h4>
              <p class="text-muted mb-2" style="font-size:.86rem;">Calm mind, better focus &amp; stress management</p>
              <a href="#programs" class="text-primary fw-semibold text-decoration-none small mt-auto d-inline-flex align-items-center gap-1">Explore Programs <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></svg></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 rounded-4 p-3 card-lift cat-card flex-row gap-3">
            <span class="serve-cat-ico flex-shrink-0 align-self-start"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 9l5 0"/><path d="M8 12l5 0"/><path d="M8 15l5 0"/><path d="M3 21l18 0"/><path d="M4 21v-15a3 3 0 0 1 3 -3h7a3 3 0 0 1 3 3v15"/><path d="M17 9h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2"/></svg></span>
            <div class="d-flex flex-column">
              <h4 class="h6 fw-bold mb-1">Government Professionals</h4>
              <p class="text-muted mb-2" style="font-size:.86rem;">Work-life balance, vitality &amp; mental wellbeing</p>
              <a href="#programs" class="text-primary fw-semibold text-decoration-none small mt-auto d-inline-flex align-items-center gap-1">Explore Programs <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></svg></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 rounded-4 p-3 card-lift cat-card flex-row gap-3">
            <span class="serve-cat-ico flex-shrink-0 align-self-start"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"/><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"/><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg></span>
            <div class="d-flex flex-column">
              <h4 class="h6 fw-bold mb-1">Entrepreneurs &amp; Owners</h4>
              <p class="text-muted mb-2" style="font-size:.86rem;">Clarity, resilience, &amp; peak decision-making</p>
              <a href="#programs" class="text-primary fw-semibold text-decoration-none small mt-auto d-inline-flex align-items-center gap-1">Explore Programs <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></svg></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 rounded-4 p-3 card-lift cat-card flex-row gap-3">
            <span class="serve-cat-ico flex-shrink-0 align-self-start"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"/><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"/><path d="M12 12l0 .01"/><path d="M3 13a20 20 0 0 0 18 0"/></svg></span>
            <div class="d-flex flex-column">
              <h4 class="h6 fw-bold mb-1">Executives &amp; Leaders</h4>
              <p class="text-muted mb-2" style="font-size:.86rem;">Leadership wellness, emotional strength &amp; performance</p>
              <a href="#programs" class="text-primary fw-semibold text-decoration-none small mt-auto d-inline-flex align-items-center gap-1">Explore Programs <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></svg></a>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats CTA band -->
      <div class="bg-primary text-white rounded-5 shadow-sm p-lg-5 p-4">
        <div class="row gy-4 align-items-center text-center text-lg-start">
          <div class="col-6 col-lg serve-stat"><div class="d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-3">
            <span class="text-gold flex-shrink-0"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"/><path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889"/><path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889"/></svg></span>
            <div class="lh-sm"><div class="h4 fw-bold text-gold mb-0">18+</div><small class="text-white text-opacity-75">Years of Experience</small></div></div></div>
          <div class="col-6 col-lg serve-stat"><div class="d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-3">
            <span class="text-gold flex-shrink-0"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/></svg></span>
            <div class="lh-sm"><div class="h4 fw-bold text-gold mb-0">5000+</div><small class="text-white text-opacity-75">Professionals Transformed</small></div></div></div>
          <div class="col-6 col-lg serve-stat"><div class="d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-3">
            <span class="text-gold flex-shrink-0"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/></svg></span>
            <div class="lh-sm"><div class="h4 fw-bold text-gold mb-0">25+</div><small class="text-white text-opacity-75">Countries Reached</small></div></div></div>
          <div class="col-6 col-lg serve-stat"><div class="d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-3">
            <span class="text-gold flex-shrink-0"><span class="ic-lotus" style="width:34px;height:34px;"></span></span>
            <div class="lh-sm"><div class="h4 fw-bold text-gold mb-0">4</div><small class="text-white text-opacity-75">Signature Wellness Programs</small></div></div></div>
          <div class="col-12 col-lg-auto text-center"><a href="#consultation" class="btn text-primary fw-semibold rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2" style="background:#C2A35A;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg>Book Your Free Consultation<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></svg></a><div class="small text-white text-opacity-75 mt-2">No obligation. 100% confidential.</div></div>
        </div>
      </div>

      <div class="text-center mt-4">
        <span class="d-inline-flex align-items-center gap-2 small text-muted"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gold"><path d="M5 21c.5 -4.5 2.5 -8 7 -10"/><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/></svg>Empowering professionals worldwide through integrated yogic wellness.</span>
      </div>
    </div>
  </section>
  <!-- Who We Serve End -->



  <!-- Live Wellness Programs Start -->
  <section class="py-lg-9 py-7 position-relative overflow-hidden" id="live-programs">
    <img src="/world-dots.svg" class="lp-map d-none d-md-block" alt="" aria-hidden="true">
    <!-- Location pins over the world map -->
    <div class="lp-pin d-none d-xl-flex" style="top:96px;left:1.5%;"><svg width="22" height="22" viewBox="0 0 24 24" fill="#C2A35A" stroke="none"><path d="M12 2a7 7 0 0 0 -7 7c0 3.5 4.5 9 6.3 11.1a.9 .9 0 0 0 1.4 0c1.8 -2.1 6.3 -7.6 6.3 -11.1a7 7 0 0 0 -7 -7z"/><circle cx="12" cy="9" r="2.4" fill="#fff"/></svg><div><div class="lp-city">London</div><div class="lp-time">12:30 PM</div></div></div>
    <div class="lp-pin d-none d-xl-flex" style="top:178px;left:1.5%;"><svg width="22" height="22" viewBox="0 0 24 24" fill="#C2A35A" stroke="none"><path d="M12 2a7 7 0 0 0 -7 7c0 3.5 4.5 9 6.3 11.1a.9 .9 0 0 0 1.4 0c1.8 -2.1 6.3 -7.6 6.3 -11.1a7 7 0 0 0 -7 -7z"/><circle cx="12" cy="9" r="2.4" fill="#fff"/></svg><div><div class="lp-city">New York</div><div class="lp-time">7:30 AM</div></div></div>
    <div class="lp-pin d-none d-xl-flex" style="top:96px;right:1.5%;"><svg width="22" height="22" viewBox="0 0 24 24" fill="#C2A35A" stroke="none"><path d="M12 2a7 7 0 0 0 -7 7c0 3.5 4.5 9 6.3 11.1a.9 .9 0 0 0 1.4 0c1.8 -2.1 6.3 -7.6 6.3 -11.1a7 7 0 0 0 -7 -7z"/><circle cx="12" cy="9" r="2.4" fill="#fff"/></svg><div><div class="lp-city">Dubai</div><div class="lp-time">3:30 PM</div></div></div>
    <div class="lp-pin d-none d-xl-flex" style="top:178px;right:1.5%;"><svg width="22" height="22" viewBox="0 0 24 24" fill="#C2A35A" stroke="none"><path d="M12 2a7 7 0 0 0 -7 7c0 3.5 4.5 9 6.3 11.1a.9 .9 0 0 0 1.4 0c1.8 -2.1 6.3 -7.6 6.3 -11.1a7 7 0 0 0 -7 -7z"/><circle cx="12" cy="9" r="2.4" fill="#fff"/></svg><div><div class="lp-city">Sydney</div><div class="lp-time">9:30 PM</div></div></div>

    <div class="container position-relative" style="z-index:1;">
      <!-- Header -->
      <div class="text-center mb-4">
        <h2 class="fw-bold mb-3" style="font-size:clamp(1.85rem,3.4vw,2.85rem);line-height:1.18;">Live Wellness Programs.<br>Designed for Professionals. <span style="color:#BE8B2E;">Accessible Worldwide.</span></h2>
        <div class="d-inline-flex flex-wrap justify-content-center align-items-center gap-2 gap-md-3 text-muted" style="font-size:1.02rem;">
          <span class="d-inline-flex align-items-center gap-2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C9A7E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21c.5 -4.5 2.5 -8 7 -10"/><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/></svg>Focused 60-minute live sessions</span>
          <span class="text-gold fw-bold">&bull;</span><span>Global accessibility</span>
          <span class="text-gold fw-bold">&bull;</span><span>Real transformation</span>
        </div>
      </div>

      <!-- 4 assurance badges -->
      <div class="d-flex flex-wrap justify-content-center gap-2 gap-md-3 mb-4">
        <div class="lp-feat"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/></svg><span>Designed for<br>Global Professionals</span></div>
        <div class="lp-feat"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg><span>Live Guidance in<br>Your Time Zone</span></div>
        <div class="lp-feat"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"/><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M8 11v-4a4 4 0 1 1 8 0v4"/></svg><span>Secure Access for<br>23&ndash;24 Hours</span></div>
        <div class="lp-feat"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/></svg><span>Trusted by 5000+<br>Professionals</span></div>
      </div>

      <!-- IST pill -->
      <div class="text-center mb-5">
        <span class="lp-ist"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg>All Timings in IST (Indian Standard Time)</span>
      </div>

      <!-- 4 program cards -->
      <div class="row g-3 g-lg-4 mb-4">
        <div class="col-12 col-md-6 col-xl-3">
          <div class="lp-card text-center">
            <div class="lp-ico" style="background:#1F4A35;"><span class="ic-meditation" style="width:40px;height:40px;"></span></div>
            <div class="lp-name">Stress Reset<span style="white-space:nowrap;">&trade;</span></div>
            <div class="lp-tag">Calm the Mind.</div>
            <div class="lp-div"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21c.5 -4.5 2.5 -8 7 -10"/><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/></svg></div>
            <div class="lp-band" style="background:#1F4A35;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg>6:00 &ndash; 7:00 PM IST</div>
            <div class="lp-stats">
              <div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg><div class="text-start"><div class="k">Duration</div><div class="v">8 Weeks</div></div></div>
              <div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg><div class="text-start"><div class="k">Session</div><div class="v">60 Min</div></div></div>
              <div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/><path d="M8 15l2 2l4 -4"/></svg><div class="text-start"><div class="k">Schedule</div><div class="v">5 Days / Week</div></div></div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-3">
          <div class="lp-card text-center">
            <div class="lp-ico" style="background:#0E8A8A;"><span class="ic-spine" style="width:42px;height:42px;"></span></div>
            <div class="lp-name">Desk Work Recovery<span style="white-space:nowrap;">&trade;</span></div>
            <div class="lp-tag">Correct Posture.</div>
            <div class="lp-div"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21c.5 -4.5 2.5 -8 7 -10"/><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/></svg></div>
            <div class="lp-band" style="background:#0E8A8A;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg>7:45 &ndash; 8:45 PM IST</div>
            <div class="lp-stats">
              <div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg><div class="text-start"><div class="k">Duration</div><div class="v">6 Weeks</div></div></div>
              <div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg><div class="text-start"><div class="k">Session</div><div class="v">60 Min</div></div></div>
              <div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/><path d="M8 15l2 2l4 -4"/></svg><div class="text-start"><div class="k">Schedule</div><div class="v">5 Days / Week</div></div></div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-3">
          <div class="lp-card text-center">
            <div class="lp-ico" style="background:#21489B;"><svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M18 4a7.5 7.5 0 0 0 -6 11.95a7.5 7.5 0 1 1 6 -11.95z"/><path d="M16.5 6.5l.4 1.1l1.1 .4l-1.1 .4l-.4 1.1l-.4 -1.1l-1.1 -.4l1.1 -.4z"/></svg></div>
            <div class="lp-name">Sleep &amp; Burnout Recovery<span style="white-space:nowrap;">&trade;</span></div>
            <div class="lp-tag">Sleep Deeply.</div>
            <div class="lp-div"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21c.5 -4.5 2.5 -8 7 -10"/><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/></svg></div>
            <div class="lp-band" style="background:#21489B;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg>9:30 &ndash; 10:30 PM IST</div>
            <div class="lp-stats">
              <div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg><div class="text-start"><div class="k">Duration</div><div class="v">8 Weeks</div></div></div>
              <div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg><div class="text-start"><div class="k">Session</div><div class="v">60 Min</div></div></div>
              <div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/><path d="M8 15l2 2l4 -4"/></svg><div class="text-start"><div class="k">Schedule</div><div class="v">5 Days / Week</div></div></div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-3">
          <div class="lp-card text-center" style="border:1.5px solid #E4C77E;">
            <span class="lp-premium">PREMIUM PROGRAM</span>
            <div class="lp-ico" style="background:#B07D1A;"><span class="ic-lotus" style="width:42px;height:42px;"></span></div>
            <div class="lp-name">Complete Transformation<span style="white-space:nowrap;">&trade;</span></div>
            <div class="lp-tag">Transform Your Life.</div>
            <div class="lp-div"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21c.5 -4.5 2.5 -8 7 -10"/><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/></svg></div>
            <div class="lp-band" style="background:#B07D1A;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg>11:15 PM &ndash; 12:15 AM IST</div>
            <div class="lp-stats">
              <div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg><div class="text-start"><div class="k">Duration</div><div class="v">12 Weeks</div></div></div>
              <div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg><div class="text-start"><div class="k">Session</div><div class="v">60 Min</div></div></div>
              <div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/><path d="M8 15l2 2l4 -4"/></svg><div class="text-start"><div class="k">Schedule</div><div class="v">5 Days / Week</div></div></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Flexible global access band -->
      <div class="lp-access p-4 p-lg-4 mb-4">
        <div class="row align-items-center g-4">
          <div class="col-lg-5">
            <div class="d-flex align-items-start gap-3">
              <span class="flex-shrink-0 d-inline-flex align-items-center justify-content-center" style="width:58px;height:58px;border-radius:50%;background:#E9F0EB;color:#1F4A35;"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h9"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 3.5 8"/><path d="M15 17a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"/><path d="M16.5 16v-1.5a1.5 1.5 0 0 1 3 0v1.5"/></svg></span>
              <div>
                <h3 class="h6 fw-bold mb-1" style="color:#1c1c1c;">Flexible Global Access &mdash; Secure Participant-Only Recordings</h3>
                <p class="text-muted mb-0" style="font-size:.88rem;">Every live session is securely available to participants for the next 23&ndash;24 hours via private password-protected access, then automatically removed.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="row g-3">
              <div class="col-6 col-lg-3"><div class="lp-mini"><span class="lp-mini-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16l13 -8z"/></svg></span><div><b>Watch Anytime</b><small>Next 23&ndash;24 Hours</small></div></div></div>
              <div class="col-6 col-lg-3"><div class="lp-mini"><span class="lp-mini-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"/><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M8 11v-4a4 4 0 1 1 8 0v4"/></svg></span><div><b>Password Protected</b><small>Access</small></div></div></div>
              <div class="col-6 col-lg-3"><div class="lp-mini"><span class="lp-mini-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/></svg></span><div><b>For All Time Zones</b><small>&amp; Busy Schedules</small></div></div></div>
              <div class="col-6 col-lg-3"><div class="lp-mini"><span class="lp-mini-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/><path d="M9 12l2 2l4 -4"/></svg></span><div><b>100% Secure</b><small>&amp; Private</small></div></div></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust stats band -->
      <div class="lp-trust p-4 mb-4">
        <div class="row gy-4 align-items-center">
          <div class="col-6 col-md-4 col-xl lp-tcell"><div class="t"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/></svg><div class="text-start"><div class="n">5000+</div><div class="l">Professionals Worldwide</div></div></div></div>
          <div class="col-6 col-md-4 col-xl lp-tcell"><div class="t"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/></svg><div class="text-start"><div class="n">25+</div><div class="l">Countries</div></div></div></div>
          <div class="col-6 col-md-4 col-xl lp-tcell"><div class="t"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><div class="text-start"><div class="n">18+</div><div class="l">Years of Expertise</div></div></div></div>
          <div class="col-6 col-md-4 col-xl lp-tcell"><div class="t"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M10 9h4"/><path d="M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6"/></svg><div class="text-start"><div class="bt">Science-Backed</div><div class="l">Wellness Systems</div></div></div></div>
          <div class="col-6 col-md-4 col-xl lp-tcell"><div class="t"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M9 13l6 0"/><path d="M9 17l6 0"/></svg><div class="text-start"><div class="bt">Evidence-Informed</div><div class="l">Practices</div></div></div></div>
          <div class="col-6 col-md-4 col-xl lp-tcell"><div class="t"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg><div class="text-start"><div class="bt">Results-Driven</div><div class="l">Real Transformation</div></div></div></div>
        </div>
      </div>

      <!-- Footer line -->
      <div class="text-center">
        <span class="lp-foot"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gold"><path d="M5 21c.5 -4.5 2.5 -8 7 -10"/><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/></svg>Empowering professionals worldwide through integrated yogic wellness.</span>
      </div>
    </div>
  </section>
  <!-- Live Wellness Programs End -->



  <!-- Our Founders Start -->
  <section class="py-lg-9 py-7 position-relative overflow-hidden" id="founders">
    <img src="/ilai-leaves.svg" class="fd-leaf d-none d-md-block" style="left:-24px;" alt="" aria-hidden="true">
    <img src="/ilai-leaves.svg" class="fd-leaf d-none d-md-block" style="right:-24px;transform:scaleX(-1);" alt="" aria-hidden="true">
    <div class="container position-relative" style="z-index:1;">
      <!-- Header -->
      <div class="text-center mb-5">
        <div class="mb-2"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C2A35A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c0 -6 -2 -9 -6 -11c4 0 6 2 6 5c0 -4 2 -6 6 -6c-2 4 -4 6 -6 6"/><path d="M12 21v-9"/></svg></div>
        <div class="d-flex align-items-center justify-content-center gap-3">
          <span class="fd-rule"></span>
          <h2 class="fd-title">OUR FOUNDERS</h2>
          <span class="fd-rule"></span>
        </div>
        <p class="text-muted mt-2 mb-0" style="font-size:1.05rem;">Experienced. Compassionate. Committed to Your Transformation.</p>
      </div>

      <!-- Founder profile cards -->
      <div class="row g-4 mb-4">
        <!-- Lijoy Raj -->
        <div class="col-lg-6">
          <div class="fd-card p-4 h-100">
            <div class="d-flex flex-column flex-sm-row gap-4">
              <img src="/member-1.png" alt="Yogacharya Lijoy Raj C.R." class="fd-photo mx-auto mx-sm-0">
              <div class="flex-fill text-center text-sm-start">
                <div class="fd-prefix">Yogacharya</div>
                <h3 class="fd-name">Lijoy Raj C.R.</h3>
                <div class="fd-role">Founder &amp; Chief Wellness Architect</div>
                <div class="fd-tags">Yoga Expert &bull; Meditation Specialist &bull; Author &bull; International Faculty</div>
                <p class="fd-bio">With over 18+ years of experience in Yoga &amp; Wellness, Yogacharya Lijoy Raj C.R. has dedicated his life to making authentic yogic practices practical, accessible and transformative for modern professionals worldwide.</p>
                <ul class="fd-points text-start">
                  <li><span class="fd-pico"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"/><path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889"/><path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889"/></svg></span>18+ Years of Expertise</li>
                  <li><span class="fd-pico"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4.8" r="1.9"/><path d="M12 6.7v5.3"/><path d="M12 12l-4.5 5h9z"/><path d="M12 9c-2.4 -.6 -4.2 -2.6 -5 -5"/><path d="M12 9c2.4 -.6 4.2 -2.6 5 -5"/></svg></span>Developer of Trancared Yantra Meditation</li>
                  <li><span class="fd-pico"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/></svg></span>Author of &ldquo;Boudhdhika Valarcha Yogayiloode&rdquo;</li>
                  <li><span class="fd-pico"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l18 0"/><path d="M9 8l1 0"/><path d="M9 12l1 0"/><path d="M9 16l1 0"/><path d="M14 8l1 0"/><path d="M14 12l1 0"/><path d="M14 16l1 0"/><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"/></svg></span>International Faculty &amp; Yoga Federation Member</li>
                </ul>
                <div class="text-center text-sm-start">
                  <a href="#" class="fd-btn"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg>More About Lijoy Raj C.R.</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Leema Prasad -->
        <div class="col-lg-6">
          <div class="fd-card p-4 h-100">
            <div class="d-flex flex-column flex-sm-row gap-4">
              <img src="/member-2.png" alt="Mrs. Leema Prasad" class="fd-photo mx-auto mx-sm-0">
              <div class="flex-fill text-center text-sm-start">
                <div class="fd-prefix">Mrs.</div>
                <h3 class="fd-name">Leema Prasad</h3>
                <div class="fd-role">Mind &amp; Wellness Strategist</div>
                <div class="fd-tags">Counselling Psychologist &bull; Yoga Therapist &bull; Educator</div>
                <p class="fd-bio">Leema Prasad brings together psychology and yoga therapy to support emotional wellbeing, mental clarity and lifestyle balance for professionals and families.</p>
                <ul class="fd-points text-start">
                  <li><span class="fd-pico"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"/><path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889"/><path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889"/></svg></span>15+ Years in Psychology &amp; Counselling</li>
                  <li><span class="fd-pico"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/></svg></span>Expert in Emotional Wellness &amp; Stress Care</li>
                  <li><span class="fd-pico"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4.8" r="1.9"/><path d="M12 6.7v5.3"/><path d="M12 12l-4.5 5h9z"/><path d="M12 9c-2.4 -.6 -4.2 -2.6 -5 -5"/><path d="M12 9c2.4 -.6 4.2 -2.6 5 -5"/></svg></span>Yoga Therapist for Mental Wellbeing</li>
                  <li><span class="fd-pico"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M6 6l6 -1l6 1"/><path d="M3 12l3 -6l3 6a3 3 0 0 1 -6 0"/><path d="M15 12l3 -6l3 6a3 3 0 0 1 -6 0"/></svg></span>Trainer in Holistic Lifestyle Balance</li>
                </ul>
                <div class="text-center text-sm-start">
                  <a href="#" class="fd-btn"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg>More About Leema Prasad</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Qualifications panels -->
      <div class="position-relative mb-4">
        <div class="row g-4">
        <!-- Lijoy qualifications -->
        <div class="col-lg-6 fd-col-l">
          <div class="fd-qual">
            <span class="fd-qual-head">Lijoy Raj C.R. &ndash; Qualifications &amp; Expertise</span>
            <div class="row g-4">
              <div class="col-md-6">
                <h5 class="fd-col-title">Academic &amp; Professional Qualifications</h5>
                <ul class="fd-check">
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>PhD in Yoga &amp; Naturopathy (PhD Y&amp;N)</span></li>
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>MD in Alternative Medicine (MD A.M)</span></li>
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>Fellow of Royal Health Society (F.R.H.S)</span></li>
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>Fellow of World Society of Integrated Medicine, USA (FWSIM &ndash; U.S.A)</span></li>
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>TTC &amp; Advanced TTC in Yoga</span></li>
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>PG Diploma in Stress Management</span></li>
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>PG Diploma in Diet &amp; Nutrition</span></li>
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>Diploma in Meditation Therapy</span></li>
                </ul>
              </div>
              <div class="col-md-6">
                <h5 class="fd-col-title">Special Areas of Expertise</h5>
                <ul class="fd-check">
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>Stress Management through Yoga</span></li>
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>Lifestyle &amp; Wellness Transformation</span></li>
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>Meditation &amp; Mind-Body Healing</span></li>
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>Therapeutic Yoga Practices</span></li>
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>Holistic Health Guidance</span></li>
                </ul>
                <div class="fd-highlight">
                  <h6>Professional Highlights</h6>
                  <ul>
                    <li>18+ Years of Expertise in Yoga &amp; Wellness</li>
                    <li>Developer of Trancared Yantra Meditation</li>
                    <li>Author of &ldquo;Boudhdhika Valarcha Yogayiloode&rdquo;</li>
                    <li>Registered Faculty &ndash; International Yoga Federation</li>
                    <li>Faculty at Prestigious International Groups &amp; Five-Star Resorts Worldwide</li>
                    <li>Former Senior Hatha Yoga Teacher &ndash; ISYVC, Trivandrum</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Leema qualifications -->
        <div class="col-lg-6 fd-col-r">
          <div class="fd-qual">
            <span class="fd-qual-head">Leema Prasad &ndash; Qualifications &amp; Expertise</span>
            <div class="row g-4">
              <div class="col-md-6">
                <h5 class="fd-col-title">Academic &amp; Professional Qualifications</h5>
                <ul class="fd-check">
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>MSc Psychiatric Nursing</span></li>
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>MSc Applied Psychology (Industrial &amp; Organizational Psychology Specialization)</span></li>
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>PG Diploma in Yoga Therapy</span></li>
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>PG Diploma in Guidance &amp; Counselling</span></li>
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>Yoga Instructor Course (YIC)</span></li>
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>Advanced Yoga Course</span></li>
                </ul>
              </div>
              <div class="col-md-6">
                <h5 class="fd-col-title">Special Areas of Expertise</h5>
                <ul class="fd-check">
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>Emotional Wellness &amp; Stress Care</span></li>
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>Counselling &amp; Behavioural Guidance</span></li>
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>Yoga Therapy for Mental Wellbeing</span></li>
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>Family Wellness &amp; Lifestyle Balance</span></li>
                  <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg><span>Workplace Mental Health &amp; Resilience</span></li>
                </ul>
                <div class="fd-highlight">
                  <h6>Professional Roles &amp; Experience</h6>
                  <ul>
                    <li>Assistant Professor &ndash; CAPE College of Nursing</li>
                    <li>Counselling Psychologist &amp; Wellness Educator</li>
                    <li>Yoga Therapist for Emotional &amp; Mental Wellbeing</li>
                    <li>Trainer in Holistic Wellness &amp; Lifestyle Balance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <!-- Center lotus emblem on divider line -->
        <div class="fd-divider d-none d-lg-block"></div>
        <div class="fd-lotus d-none d-lg-flex"><img src="/lotus.svg" alt="" aria-hidden="true" style="width:32px;height:32px;"></div>
      </div>

      <!-- Founders quote band -->
      <div class="fd-quote">
        <div class="row align-items-center g-3">
          <div class="col-lg-8">
            <div class="d-flex gap-3">
              <span class="fd-qmark">&ldquo;</span>
              <p class="mb-0">We believe wellness is not a luxury &mdash; it is the foundation of a powerful, peaceful and purposeful life. We are here to guide you, support you, and walk with you on your transformation journey.</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="d-flex align-items-center justify-content-lg-end gap-3">
              <div class="text-lg-end">
                <img src="/member-name.png" alt="Lijoy Raj C.R. & Leema Prasad" class="fd-sign-img">
                <div class="fd-sign-sub">Founders, Ayur Vidya Nikethan (AVN)</div>
              </div>
              <img src="/ilai.svg" alt="" aria-hidden="true" style="width:52px;height:auto;opacity:.85;" class="flex-shrink-0 d-none d-sm-block">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Our Founders End -->



  <!-- Feedback / Success Stories Start -->
  <section class="py-lg-9 py-7 position-relative overflow-hidden" id="testimonials">
    <div class="container position-relative">
      <!-- Header: image + heading/stats + why card -->
      <div class="row g-4 align-items-stretch mb-5">
        <div class="col-lg-3 col-md-4 d-none d-md-block">
          <img src="/about.png" alt="AVN wellness" class="fb-hero-img" style="height:100%;min-height:200px;">
        </div>
        <div class="col-lg-5 col-md-8 text-center d-flex flex-column justify-content-center">
          <span class="text-uppercase fw-bold d-block mb-2" style="letter-spacing:.14rem;font-size:.82rem;color:#4a5a4e;">Real People. Real Transformation.</span>
          <h2 class="fw-bold mb-3" style="color:#1F4A35;font-size:clamp(1.5rem,2.5vw,2.15rem);line-height:1.18;">Wellness That Fits Your Life.<br>Results That Stay With You.</h2>
          <div class="d-flex flex-wrap flex-lg-nowrap gap-3 gap-lg-3 justify-content-center">
            <div class="fb-stat d-flex align-items-center gap-2"><span class="text-primary flex-shrink-0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/></svg></span><div class="lh-1 text-start"><div class="fw-bold">5000+</div><small class="text-muted">Lives Transformed</small></div></div>
            <div class="fb-stat d-flex align-items-center gap-2"><span class="text-primary flex-shrink-0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/></svg></span><div class="lh-1 text-start"><div class="fw-bold">Science-Backed</div><small class="text-muted">Approach</small></div></div>
            <div class="fb-stat d-flex align-items-center gap-2"><span class="text-primary flex-shrink-0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/></svg></span><div class="lh-1 text-start"><div class="fw-bold">25+</div><small class="text-muted">Countries</small></div></div>
            <div class="fb-stat d-flex align-items-center gap-2"><span class="text-primary flex-shrink-0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/></svg></span><div class="lh-1 text-start"><div class="fw-bold">Trusted by</div><small class="text-muted">Professionals</small></div></div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="fb-why p-4">
            <h3 class="h6 fw-bold mb-3 d-flex align-items-start gap-2"><svg width="30" height="30" viewBox="0 0 24 24" class="flex-shrink-0"><path fill="#1F4A35" d="M12 2.5l7.5 3.2v5.1c0 4.7 -3.1 8 -7.5 9.7c-4.4 -1.7 -7.5 -5 -7.5 -9.7v-5.1z"/><path d="M8.5 12l2.4 2.4l4.6 -4.8" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Why AVN Programs<br>Are Worth It</span></h3>
            <ul class="list-unstyled d-flex flex-column gap-2 mb-0" style="font-size:.9rem;">
              <li class="d-flex gap-2"><span class="fb-why-check"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg></span>Expert-designed by 18+ years of experience</li>
              <li class="d-flex gap-2"><span class="fb-why-check"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg></span>Science-backed yogic wellness systems</li>
              <li class="d-flex gap-2"><span class="fb-why-check"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg></span>Practical, proven &amp; results-driven</li>
              <li class="d-flex gap-2"><span class="fb-why-check"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg></span>Structured for busy professionals</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 6 testimonial cards -->
      <div class="row g-4" id="testimonialsGrid" data-cms-skip>
        <!-- 1 Rahul Menon -->
        <div class="col-xl-4 col-md-6">
          <div class="fb-card">
            <div class="d-flex gap-3">
              <img src="/assets/images/avatar/avatar-1.jpg" alt="Rahul Menon" class="fb-avatar">
              <div class="flex-fill d-flex justify-content-between gap-2">
                <div><div class="fb-name">Rahul Menon</div><div class="fb-role">Banking Professional</div><div class="fb-role">Manager, Kochi</div></div>
                <div class="d-flex flex-column align-items-end justify-content-between flex-shrink-0">
                  <span class="fb-stars"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg></span>
                  <span class="fb-age"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg>Age 38</span>
                </div>
              </div>
            </div>
            <hr class="fb-hr">
            <div class="row g-0">
              <div class="col-sm-6 fb-colb pe-sm-3">
                <div class="fb-lbl"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"/><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"/></svg>Program Taken</div>
                <p class="fb-val">Professional Stress Reset</p>
                <div class="fb-lbl"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/></svg>Health Issues</div>
                <p class="fb-val">Stress, Poor Sleep, Mental Fatigue</p>
              </div>
              <div class="col-sm-6 ps-sm-3">
                <div class="fb-lbl"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg>Benefits Gained</div>
                <p class="fb-val">Better sleep, Reduced stress, Emotional balance, Inner calm</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 2 Anjali Sharma -->
        <div class="col-xl-4 col-md-6">
          <div class="fb-card">
            <div class="d-flex gap-3">
              <img src="/assets/images/avatar/avatar-2.jpg" alt="Anjali Sharma" class="fb-avatar">
              <div class="flex-fill d-flex justify-content-between gap-2">
                <div><div class="fb-name">Anjali Sharma</div><div class="fb-role">IT Professional</div><div class="fb-role">Senior Software Engineer, Bengaluru</div></div>
                <div class="d-flex flex-column align-items-end justify-content-between flex-shrink-0">
                  <span class="fb-stars"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg></span>
                  <span class="fb-age"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg>Age 34</span>
                </div>
              </div>
            </div>
            <hr class="fb-hr">
            <div class="row g-0">
              <div class="col-sm-6 fb-colb pe-sm-3">
                <div class="fb-lbl"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"/><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"/></svg>Program Taken</div>
                <p class="fb-val">Desk Work Recovery &amp; Posture Wellness</p>
                <div class="fb-lbl"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/></svg>Health Issues</div>
                <p class="fb-val">Neck &amp; Back Pain, Poor Posture, Low Energy</p>
              </div>
              <div class="col-sm-6 ps-sm-3">
                <div class="fb-lbl"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg>Benefits Gained</div>
                <p class="fb-val">Pain relief, Improved posture, More energy, Better focus</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 3 Dr. Vivek Nair -->
        <div class="col-xl-4 col-md-6">
          <div class="fb-card">
            <div class="d-flex gap-3">
              <img src="/assets/images/avatar/avatar-3.jpg" alt="Dr. Vivek Nair" class="fb-avatar">
              <div class="flex-fill d-flex justify-content-between gap-2">
                <div><div class="fb-name">Dr. Vivek Nair</div><div class="fb-role">Healthcare Professional</div><div class="fb-role">Consultant, Chennai</div></div>
                <div class="d-flex flex-column align-items-end justify-content-between flex-shrink-0">
                  <span class="fb-stars"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg></span>
                  <span class="fb-age"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg>Age 41</span>
                </div>
              </div>
            </div>
            <hr class="fb-hr">
            <div class="row g-0">
              <div class="col-sm-6 fb-colb pe-sm-3">
                <div class="fb-lbl"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"/><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"/></svg>Program Taken</div>
                <p class="fb-val">Sleep, Energy &amp; Burnout Recovery</p>
                <div class="fb-lbl"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/></svg>Health Issues</div>
                <p class="fb-val">Burnout, Poor Sleep, Low Energy</p>
              </div>
              <div class="col-sm-6 ps-sm-3">
                <div class="fb-lbl"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg>Benefits Gained</div>
                <p class="fb-val">Deep sleep, Steady energy, Less burnout, Positive mood</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 4 Meera Krishnan -->
        <div class="col-xl-4 col-md-6">
          <div class="fb-card">
            <div class="d-flex gap-3">
              <img src="/assets/images/avatar/avatar-4.jpg" alt="Meera Krishnan" class="fb-avatar">
              <div class="flex-fill d-flex justify-content-between gap-2">
                <div><div class="fb-name">Meera Krishnan</div><div class="fb-role">Educator</div><div class="fb-role">School Teacher, Trivandrum</div></div>
                <div class="d-flex flex-column align-items-end justify-content-between flex-shrink-0">
                  <span class="fb-stars"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg></span>
                  <span class="fb-age"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg>Age 36</span>
                </div>
              </div>
            </div>
            <hr class="fb-hr">
            <div class="row g-0">
              <div class="col-sm-6 fb-colb pe-sm-3">
                <div class="fb-lbl"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"/><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"/></svg>Program Taken</div>
                <p class="fb-val">Executive Focus &amp; Emotional Balance</p>
                <div class="fb-lbl"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/></svg>Health Issues</div>
                <p class="fb-val">Anxiety, Mental Overload, Inconsistent Routine</p>
              </div>
              <div class="col-sm-6 ps-sm-3">
                <div class="fb-lbl"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg>Benefits Gained</div>
                <p class="fb-val">Daily consistency, Calmer mind, More patience</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 5 Suresh Pillai -->
        <div class="col-xl-4 col-md-6">
          <div class="fb-card">
            <div class="d-flex gap-3">
              <img src="/assets/images/avatar/avatar-5.jpg" alt="Suresh Pillai" class="fb-avatar">
              <div class="flex-fill d-flex justify-content-between gap-2">
                <div><div class="fb-name">Suresh Pillai</div><div class="fb-role">Entrepreneur</div><div class="fb-role">Business Owner, Dubai</div></div>
                <div class="d-flex flex-column align-items-end justify-content-between flex-shrink-0">
                  <span class="fb-stars"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg></span>
                  <span class="fb-age"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg>Age 39</span>
                </div>
              </div>
            </div>
            <hr class="fb-hr">
            <div class="row g-0">
              <div class="col-sm-6 fb-colb pe-sm-3">
                <div class="fb-lbl"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"/><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"/></svg>Program Taken</div>
                <p class="fb-val">Complete Professional Wellness Transformation</p>
                <div class="fb-lbl"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/></svg>Health Issues</div>
                <p class="fb-val">Irregular Routine, Stress, Low Stamina</p>
              </div>
              <div class="col-sm-6 ps-sm-3">
                <div class="fb-lbl"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg>Benefits Gained</div>
                <p class="fb-val">Better energy, Emotional balance, Work-life balance</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 6 Priya Raghavan -->
        <div class="col-xl-4 col-md-6">
          <div class="fb-card">
            <div class="d-flex gap-3">
              <img src="/assets/images/avatar/avatar-6.jpg" alt="Priya Raghavan" class="fb-avatar">
              <div class="flex-fill d-flex justify-content-between gap-2">
                <div><div class="fb-name">Priya Raghavan</div><div class="fb-role">Senior Manager</div><div class="fb-role">Corporate Professional, Singapore</div></div>
                <div class="d-flex flex-column align-items-end justify-content-between flex-shrink-0">
                  <span class="fb-stars"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.093 -6.26l3.093 6.26l6.9 1l-5 4.867l1.179 6.873z"/></svg></span>
                  <span class="fb-age"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg>Age 37</span>
                </div>
              </div>
            </div>
            <hr class="fb-hr">
            <div class="row g-0">
              <div class="col-sm-6 fb-colb pe-sm-3">
                <div class="fb-lbl"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"/><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"/></svg>Program Taken</div>
                <p class="fb-val">Safe, Effective &amp; Sustainable Wellness</p>
                <div class="fb-lbl"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/></svg>Health Issues</div>
                <p class="fb-val">Sedentary Lifestyle, Stiff Body</p>
              </div>
              <div class="col-sm-6 ps-sm-3">
                <div class="fb-lbl"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg>Benefits Gained</div>
                <p class="fb-val">Pain-free body, Better flexibility, Sustainable routine</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom feature bar -->
      <div class="fb-bar mt-5">
        <div class="row g-3 g-md-0 align-items-center text-center text-md-start">
          <div class="col-md-3 col-6 fb-bar-cell"><div class="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-2 gap-md-3"><span class="fb-bar-ico"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0 -7 0"/><path d="M5.5 21v-2a4 4 0 0 1 4 -4h2"/><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M18 14.5v1"/><path d="M18 20.5v1"/><path d="M20.6 16l-.87 .5"/><path d="M16.27 18.5l-.87 .5"/><path d="M15.4 16l.87 .5"/><path d="M19.73 18.5l.87 .5"/></svg></span><div><h5 class="fb-bar-t">Expert Guidance</h5><p class="fb-bar-d">Learn from 18+ years of wellness expertise.</p></div></div></div>
          <div class="col-md-3 col-6 fb-bar-cell"><div class="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-2 gap-md-3"><span class="fb-bar-ico"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"/><path d="M7 20h10"/><path d="M9 16v4"/><path d="M15 16v4"/><path d="M10 8l3 2l-3 2z"/></svg></span><div><h5 class="fb-bar-t">Live + Recorded Support</h5><p class="fb-bar-d">Live sessions with 23&ndash;24 hr access to recordings.</p></div></div></div>
          <div class="col-md-3 col-6 fb-bar-cell"><div class="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-2 gap-md-3"><span class="fb-bar-ico"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/></svg></span><div><h5 class="fb-bar-t">Global Community</h5><p class="fb-bar-d">Join thousands of professionals on the same journey.</p></div></div></div>
          <div class="col-md-3 col-6 fb-bar-cell"><div class="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-2 gap-md-3"><span class="fb-bar-ico"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/><path d="M9 12l2 2l4 -4"/></svg></span><div><h5 class="fb-bar-t">Risk-Free Commitment</h5><p class="fb-bar-d">If you're unsure, start with a free consultation. No obligation.</p></div></div></div>
        </div>
        <img src="/ilai-sage.svg" class="fb-bar-leaf d-none d-md-block" alt="" aria-hidden="true">
      </div>
      <div class="text-center mt-5">
        <span class="d-inline-flex align-items-center gap-2 small text-muted"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/><path d="M9 12l2 2l4 -4"/></svg><strong class="text-dark">Trusted by 5000+ professionals across 25+ countries worldwide</strong></span>
      </div>
    </div>
  </section>
  <!-- Feedback / Success Stories End -->



  <!-- Pricing Start -->
  <section class="py-lg-9 py-7 position-relative overflow-hidden" id="pricing">
    <div class="container position-relative">
      <!-- Header -->
      <div class="row">
        <div class="col-lg-9 mx-auto text-center mb-5">
          <span class="text-uppercase fw-bold d-block mb-2" style="letter-spacing:.14rem;font-size:.82rem;color:#1F4A35;">Invest in Your Wellbeing</span>
          <h2 class="fw-bold mb-3" style="font-size:clamp(1.9rem,3.4vw,2.9rem);line-height:1.12;"><span style="color:#1c1c1c;">Simple, Transparent Pricing.</span><br><span style="color:#1F4A35;">Life-Changing Results.</span></h2>
          <p class="text-muted mb-4" style="font-size:1.05rem;">Structured programs. Expert guidance. Real transformation.</p>
          <div class="d-flex flex-wrap gap-3 gap-md-4 justify-content-center">
            <div class="fb-stat d-flex align-items-center gap-2"><span class="text-primary flex-shrink-0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/></svg></span><div class="lh-1 text-start"><div class="fw-bold">5000+</div><small class="text-muted">Lives Transformed</small></div></div>
            <div class="fb-stat d-flex align-items-center gap-2"><span class="text-primary flex-shrink-0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/></svg></span><div class="lh-1 text-start"><div class="fw-bold">Science-Backed</div><small class="text-muted">Approach</small></div></div>
            <div class="fb-stat d-flex align-items-center gap-2"><span class="text-primary flex-shrink-0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/></svg></span><div class="lh-1 text-start"><div class="fw-bold">25+</div><small class="text-muted">Countries</small></div></div>
            <div class="fb-stat d-flex align-items-center gap-2"><span class="text-primary flex-shrink-0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/></svg></span><div class="lh-1 text-start"><div class="fw-bold">Trusted by</div><small class="text-muted">Professionals</small></div></div>
          </div>
        </div>
      </div>

      <div class="row g-4" id="pricingGrid" data-cms-skip>
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 rounded-5 shadow-sm card-lift position-relative" style="border:2px solid #1F4A35;">
            <span class="badge rounded-pill text-white position-absolute top-0 start-50 translate-middle-x mt-n3 px-3 py-2 fw-semibold" style="background:#1F4A35; z-index:2; white-space:nowrap;">&starf; MOST POPULAR</span>
            <div class="card-body p-5 d-flex flex-column">
              <span class="icon-shape icon-lg rounded-circle text-white mb-3" style="background:#1F4A35; box-shadow:0 0 0 4px #1F4A3533;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M4 17l5 1l.75 -1.5"/><path d="M15 21l-2 -7.5"/><path d="M5 12l5 -1.5l5 -1.5l5 1.5"/></svg></span>
              <h3 class="h6 fw-bold mb-2" style="min-height:3rem;">AVN Professional Stress Reset Program&trade;</h3>
              <p class="text-muted mb-4" style="font-size:12px;">Reduce Stress. Restore Balance. Build Lasting Resilience.</p>
              <div class="rounded-3 text-center fw-bold text-uppercase py-2 mb-3" style="background:#1F4A3514; color:#1F4A35; font-size:11px; letter-spacing:.04rem;">Founding Member Launch Offer</div>
              <div class="text-center mb-3">
                <span class="fw-bold" style="font-size:2.4rem; color:#1F4A35; line-height:1;">&#8377;1999</span>
                <div class="small text-muted mt-1">Regular Price <s>&#8377;6999</s></div>
                <div class="d-flex justify-content-center gap-2 mt-2">
                  <span class="badge rounded-pill" style="background:#1F4A3522; color:#1F4A35;">SAVE 71%</span>
                  <span class="badge rounded-pill bg-danger bg-opacity-10 text-danger">&#9201; ENDS SOON</span>
                </div>
              </div>
              <ul class="list-unstyled d-flex flex-column gap-2 small mb-4"><li class="d-flex gap-2"><span style="color:#1F4A35;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Guided yoga for stress relief</span></li><li class="d-flex gap-2"><span style="color:#1F4A35;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Breathwork &amp; meditation</span></li><li class="d-flex gap-2"><span style="color:#1F4A35;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Recorded practice videos</span></li><li class="d-flex gap-2"><span style="color:#1F4A35;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Wellness habit tracker</span></li><li class="d-flex gap-2"><span style="color:#1F4A35;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Expert guidance &amp; support</span></li></ul>
              <div class="mt-auto">
                <a href="#consultation" class="btn w-100 text-white fw-semibold mb-2" style="background:#1F4A35;">Join Program</a>
                <p class="text-center text-muted mb-0" style="font-size:12px;">International &mdash; $25</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 rounded-5 shadow-sm card-lift position-relative" style="">
            
            <div class="card-body p-5 d-flex flex-column">
              <span class="icon-shape icon-lg rounded-circle text-white mb-3" style="background:#0E8A8A; box-shadow:0 0 0 4px #0E8A8A33;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M9 6l3 -1l3 1"/><path d="M9 10l3 -1l3 1"/><path d="M9 14l3 -1l3 1"/><path d="M9 18l3 -1l3 1"/></svg></span>
              <h3 class="h6 fw-bold mb-2" style="min-height:3rem;">AVN Desk Work Recovery &amp; Posture Wellness Program&trade;</h3>
              <p class="text-muted mb-4" style="font-size:12px;">Relieve Pain. Restore Posture. Reclaim Comfortable Movement.</p>
              <div class="rounded-3 text-center fw-bold text-uppercase py-2 mb-3" style="background:#0E8A8A14; color:#0E8A8A; font-size:11px; letter-spacing:.04rem;">Founding Member Launch Offer</div>
              <div class="text-center mb-3">
                <span class="fw-bold" style="font-size:2.4rem; color:#0E8A8A; line-height:1;">&#8377;2799</span>
                <div class="small text-muted mt-1">Regular Price <s>&#8377;9999</s></div>
                <div class="d-flex justify-content-center gap-2 mt-2">
                  <span class="badge rounded-pill" style="background:#0E8A8A22; color:#0E8A8A;">SAVE 72%</span>
                  <span class="badge rounded-pill bg-danger bg-opacity-10 text-danger">&#9201; ENDS SOON</span>
                </div>
              </div>
              <ul class="list-unstyled d-flex flex-column gap-2 small mb-4"><li class="d-flex gap-2"><span style="color:#0E8A8A;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Spine mobility yoga</span></li><li class="d-flex gap-2"><span style="color:#0E8A8A;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Neck &amp; shoulder relief</span></li><li class="d-flex gap-2"><span style="color:#0E8A8A;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Office stretch routine PDF</span></li><li class="d-flex gap-2"><span style="color:#0E8A8A;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Postural correction training</span></li><li class="d-flex gap-2"><span style="color:#0E8A8A;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Expert guidance &amp; support</span></li></ul>
              <div class="mt-auto">
                <a href="#consultation" class="btn w-100 text-white fw-semibold mb-2" style="background:#0E8A8A;">Join Program</a>
                <p class="text-center text-muted mb-0" style="font-size:12px;">International &mdash; $35</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 rounded-5 shadow-sm card-lift position-relative" style="">
            
            <div class="card-body p-5 d-flex flex-column">
              <span class="icon-shape icon-lg rounded-circle text-white mb-3" style="background:#21489B; box-shadow:0 0 0 4px #21489B33;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/><path d="M17 4a2 2 0 0 0 1.5 1.5a2 2 0 0 0 -1.5 1.5a2 2 0 0 0 -1.5 -1.5a2 2 0 0 0 1.5 -1.5"/></svg></span>
              <h3 class="h6 fw-bold mb-2" style="min-height:3rem;">AVN Sleep, Energy &amp; Burnout Recovery Program&trade;</h3>
              <p class="text-muted mb-4" style="font-size:12px;">Restore Deep Sleep. Renew Energy. Recover from Burnout.</p>
              <div class="rounded-3 text-center fw-bold text-uppercase py-2 mb-3" style="background:#21489B14; color:#21489B; font-size:11px; letter-spacing:.04rem;">Founding Member Launch Offer</div>
              <div class="text-center mb-3">
                <span class="fw-bold" style="font-size:2.4rem; color:#21489B; line-height:1;">&#8377;2799</span>
                <div class="small text-muted mt-1">Regular Price <s>&#8377;9999</s></div>
                <div class="d-flex justify-content-center gap-2 mt-2">
                  <span class="badge rounded-pill" style="background:#21489B22; color:#21489B;">SAVE 72%</span>
                  <span class="badge rounded-pill bg-danger bg-opacity-10 text-danger">&#9201; ENDS SOON</span>
                </div>
              </div>
              <ul class="list-unstyled d-flex flex-column gap-2 small mb-4"><li class="d-flex gap-2"><span style="color:#21489B;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Deep relaxation yoga</span></li><li class="d-flex gap-2"><span style="color:#21489B;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Guided sleep practices</span></li><li class="d-flex gap-2"><span style="color:#21489B;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Sleep recovery audio</span></li><li class="d-flex gap-2"><span style="color:#21489B;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Energy restoration routines</span></li><li class="d-flex gap-2"><span style="color:#21489B;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Expert guidance &amp; support</span></li></ul>
              <div class="mt-auto">
                <a href="#consultation" class="btn w-100 text-white fw-semibold mb-2" style="background:#21489B;">Join Program</a>
                <p class="text-center text-muted mb-0" style="font-size:12px;">International &mdash; $35</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 rounded-5 shadow-sm card-lift position-relative" style="border:2px solid #B07D1A;">
            <span class="badge rounded-pill text-white position-absolute top-0 start-50 translate-middle-x mt-n3 px-3 py-2 fw-semibold" style="background:#B07D1A; z-index:2; white-space:nowrap;">&starf; RECOMMENDED</span>
            <div class="card-body p-5 d-flex flex-column">
              <span class="icon-shape icon-lg rounded-circle text-white mb-3" style="background:#B07D1A; box-shadow:0 0 0 4px #B07D1A33;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c3.5 0 6 -2.5 6 -6c0 -2 -1 -4 -3 -5.5c0 4 -3 5.5 -3 5.5s-3 -1.5 -3 -5.5c-2 1.5 -3 3.5 -3 5.5c0 3.5 2.5 6 6 6z"/><path d="M3 15c2 1 3.5 2.5 4 4"/><path d="M21 15c-2 1 -3.5 2.5 -4 4"/></svg></span>
              <h3 class="h6 fw-bold mb-2" style="min-height:3rem;">AVN Complete Professional Wellness Transformation&trade;</h3>
              <p class="text-muted mb-4" style="font-size:12px;">Transforming Stress, Energy, Focus &amp; Wellbeing for Sustainable Professional Success.</p>
              <div class="rounded-3 text-center fw-bold text-uppercase py-2 mb-3" style="background:#B07D1A14; color:#B07D1A; font-size:11px; letter-spacing:.04rem;">Founding Member Launch Offer</div>
              <div class="text-center mb-3">
                <span class="fw-bold" style="font-size:2.4rem; color:#B07D1A; line-height:1;">&#8377;3999</span>
                <div class="small text-muted mt-1">Regular Price <s>&#8377;14999</s></div>
                <div class="d-flex justify-content-center gap-2 mt-2">
                  <span class="badge rounded-pill" style="background:#B07D1A22; color:#B07D1A;">SAVE 73%</span>
                  <span class="badge rounded-pill bg-danger bg-opacity-10 text-danger">&#9201; ENDS SOON</span>
                </div>
              </div>
              <ul class="list-unstyled d-flex flex-column gap-2 small mb-4"><li class="d-flex gap-2"><span style="color:#B07D1A;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Complete practice video library</span></li><li class="d-flex gap-2"><span style="color:#B07D1A;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Guided meditation audio pack</span></li><li class="d-flex gap-2"><span style="color:#B07D1A;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Wellness journal &amp; tracker</span></li><li class="d-flex gap-2"><span style="color:#B07D1A;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Professional wellness handbook</span></li><li class="d-flex gap-2"><span style="color:#B07D1A;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Priority support &amp; 1:1 guidance (Optional)</span></li><li class="d-flex gap-2"><span style="color:#B07D1A;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1"><path d="M5 12l5 5l10 -10"/></svg></span><span>Lifestyle, nutrition &amp; mindset guidance</span></li></ul>
              <div class="mt-auto">
                <a href="#consultation" class="btn w-100 text-white fw-semibold mb-2" style="background:#B07D1A;">Join Program</a>
                <p class="text-center text-muted mb-0" style="font-size:12px;">International &mdash; $50</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom feature bar -->
      <div class="fb-bar mt-5">
        <div class="row g-3 g-md-0 align-items-center text-center text-md-start">
          <div class="col-md-3 col-6 fb-bar-cell"><div class="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-2 gap-md-3"><span class="fb-bar-ico"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0 -7 0"/><path d="M5.5 21v-2a4 4 0 0 1 4 -4h2"/><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M18 14.5v1"/><path d="M18 20.5v1"/><path d="M20.6 16l-.87 .5"/><path d="M16.27 18.5l-.87 .5"/><path d="M15.4 16l.87 .5"/><path d="M19.73 18.5l.87 .5"/></svg></span><div><h5 class="fb-bar-t">Expert Guidance</h5><p class="fb-bar-d">Learn from 18+ years of wellness expertise.</p></div></div></div>
          <div class="col-md-3 col-6 fb-bar-cell"><div class="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-2 gap-md-3"><span class="fb-bar-ico"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"/><path d="M7 20h10"/><path d="M9 16v4"/><path d="M15 16v4"/><path d="M10 8l3 2l-3 2z"/></svg></span><div><h5 class="fb-bar-t">Live + Recorded Support</h5><p class="fb-bar-d">Live sessions with 23&ndash;24 hr access to recordings.</p></div></div></div>
          <div class="col-md-3 col-6 fb-bar-cell"><div class="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-2 gap-md-3"><span class="fb-bar-ico"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/></svg></span><div><h5 class="fb-bar-t">Global Community</h5><p class="fb-bar-d">Join thousands of professionals on the same journey.</p></div></div></div>
          <div class="col-md-3 col-6 fb-bar-cell"><div class="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-2 gap-md-3"><span class="fb-bar-ico"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/><path d="M9 12l2 2l4 -4"/></svg></span><div><h5 class="fb-bar-t">Risk-Free Commitment</h5><p class="fb-bar-d">If you're unsure, start with a free consultation. No obligation.</p></div></div></div>
        </div>
        <img src="/ilai-sage.svg" class="fb-bar-leaf d-none d-md-block" alt="" aria-hidden="true">
      </div>

      <!-- Consultation CTA bar -->
      <div class="pr-cta mt-4">
        <div class="row align-items-center g-3">
          <div class="col-lg-8">
            <div class="d-flex flex-column flex-sm-row align-items-center align-items-sm-center text-center text-sm-start gap-3">
              <span class="pr-cta-photos"><img src="/member-1.png" alt="Lijoy Raj C.R."><img src="/member-2.png" alt="Leema Prasad"></span>
              <div>
                <h3>Not sure which program is right for you?</h3>
                <p>Book your <strong>complimentary 20-minute wellness consultation</strong> and we'll guide you to the perfect program for your needs.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 text-center text-lg-end">
            <a href="#consultation" class="pr-cta-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg>Book My Free Consultation<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></svg></a>
            <div class="small text-muted mt-2">No obligation. 100% confidential.</div>
          </div>
        </div>
        <img src="/ilai-sage.svg" class="pr-cta-leaf d-none d-lg-block" alt="" aria-hidden="true">
      </div>

      <div class="text-center mt-6">
        <span class="d-inline-flex align-items-center gap-2 small text-muted">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/><path d="M9 12l2 2l4 -4"/></svg>
          Trusted by <strong class="text-dark">5000+ professionals</strong> across <strong class="text-dark">25+ countries</strong> worldwide
        </span>
      </div>
    </div>
  </section>
  <!-- Pricing End -->



  <!-- Contact / Enquiry Start -->
  <section id="consultation" class="position-relative overflow-hidden">
    <div class="ct-bg" style="background-image:url('/contact-bg.png');"></div>
    <div class="ct-overlay"></div>
    <div class="container position-relative py-lg-8 py-7" style="z-index:2;">
      <div class="row g-4 g-lg-5 align-items-center">
        <!-- LEFT -->
        <div class="col-lg-6">
          <span class="ct-eyebrow text-uppercase d-block mb-3">Book Free Wellness Consultation</span>
          <h2 class="ct-title mb-3">Start Your Wellness <span class="g d-block">Journey Today</span></h2>
          <div class="mb-3"><svg width="26" height="14" viewBox="0 0 40 14" fill="none"><path d="M2 7h12M26 7h12" stroke="#C2A35A" stroke-width="1.4" stroke-linecap="round"/><path d="M20 3c1.5 1.2 1.5 5.8 0 8c-1.5 -2.2 -1.5 -6.8 0 -8z" fill="#C2A35A"/></svg></div>
          <p class="ct-lead mb-4">Not sure which program fits your needs? Book a free wellness consultation and we&rsquo;ll help you identify the most suitable program based on your lifestyle, stress levels, health concerns and wellness goals.</p>
          <div class="row g-3 mb-4">
            <div class="col-6 col-md-3 text-center text-md-start"><span class="ct-prop-ico d-inline-block mb-1"><span class="ic-lotus" style="width:30px;height:30px;"></span></span><div class="ct-prop-t">Ancient Wisdom</div><div class="ct-prop-d">Rooted in Yoga Philosophy</div></div>
            <div class="col-6 col-md-3 text-center text-md-start"><span class="ct-prop-ico d-inline-block mb-1"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/></svg></span><div class="ct-prop-t">Modern Approach</div><div class="ct-prop-d">Structured, Practical &amp; Evidence-Informed</div></div>
            <div class="col-6 col-md-3 text-center text-md-start"><span class="ct-prop-ico d-inline-block mb-1"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a4 4 0 1 0 0 -8a4 4 0 0 0 0 8"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 5.5a3.5 3.5 0 0 1 0 7"/><path d="M21 21v-2a3.5 3.5 0 0 0 -3 -3.4"/></svg></span><div class="ct-prop-t">Human-Centered</div><div class="ct-prop-d">Real People. Real Transformations.</div></div>
            <div class="col-6 col-md-3 text-center text-md-start"><span class="ct-prop-ico d-inline-block mb-1"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/></svg></span><div class="ct-prop-t">Global Impact</div><div class="ct-prop-d">Supporting Professionals Worldwide</div></div>
          </div>
          <div class="ct-stats" style="max-width:440px;">
            <div><div class="mb-1"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/></svg></div><div class="n">5000+</div><div class="l">Lives Transformed</div></div>
            <div><div class="mb-1"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"/><path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889"/><path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889"/></svg></div><div class="n">20+</div><div class="l">Years of Experience</div></div>
            <div><div class="mb-1"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/></svg></div><div class="n">20+</div><div class="l">Countries Reached</div></div>
          </div>
        </div>
        <!-- RIGHT: form -->
        <div class="col-lg-6">
          <div class="ct-form-card">
            <span class="ct-form-badge"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/><path d="M11 15h1v3"/></svg></span>
            <h3 class="ct-form-title text-center mb-1">Send Your Enquiry</h3>
            <p class="text-center text-muted mb-2">Take the first step towards a healthier, happier you.</p>
            <div class="text-center mb-4"><svg width="26" height="14" viewBox="0 0 40 14" fill="none"><path d="M2 7h12M26 7h12" stroke="#C2A35A" stroke-width="1.4" stroke-linecap="round"/><path d="M20 3c1.5 1.2 1.5 5.8 0 8c-1.5 -2.2 -1.5 -6.8 0 -8z" fill="#C2A35A"/></svg></div>
            <form class="needs-validation" novalidate>
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="enqName" class="ct-label d-block">Full Name</label>
                  <div class="ct-field"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg><input id="enqName" type="text" class="form-control" placeholder="Your full name" required></div>
                </div>
                <div class="col-md-6">
                  <label for="enqPhone" class="ct-label d-block">Phone Number</label>
                  <div class="ct-field"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/></svg><input id="enqPhone" type="tel" class="form-control" placeholder="Your phone number" required></div>
                </div>
                <div class="col-md-6">
                  <label for="enqEmail" class="ct-label d-block">Email Address</label>
                  <div class="ct-field"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"/><path d="M3 7l9 6l9 -6"/></svg><input id="enqEmail" type="email" class="form-control" placeholder="Your email address"></div>
                </div>
                <div class="col-md-6">
                  <label for="enqProfession" class="ct-label d-block">Profession</label>
                  <div class="ct-field"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"/><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"/></svg><input id="enqProfession" type="text" class="form-control" placeholder="e.g. IT Professional"></div>
                </div>
                <div class="col-12">
                  <label for="enqConcern" class="ct-label d-block">Primary Wellness Concern</label>
                  <select id="enqConcern" class="form-select ct-select">
                    <option selected disabled value="">Select your main concern...</option>
                    <option>Stress &amp; Anxiety</option>
                    <option>Pain, Stiffness or Posture</option>
                    <option>Sleep, Fatigue or Burnout</option>
                    <option>Complete Wellness Transformation</option>
                  </select>
                </div>
                <div class="col-12">
                  <div class="ct-confid">
                    <span class="ct-confid-ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/><path d="M9 12l2 2l4 -4"/></svg></span>
                    <div><div class="fw-bold" style="color:#1F4A35;font-size:.95rem;">100% Confidential</div><div class="text-muted" style="font-size:.85rem;line-height:1.4;">Your information is safe with us. We respect your privacy and will never share your details.</div></div>
                  </div>
                </div>
                <div class="col-12">
                  <button class="ct-submit" type="submit">Submit Enquiry <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14l11 -11"/><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"/></svg></button>
                </div>
                <div class="col-12">
                  <div class="d-flex align-items-center gap-3 mt-1">
                    <span class="ct-join-av d-inline-flex flex-shrink-0"><img src="/assets/images/avatar/avatar-1.jpg" alt=""><img src="/assets/images/avatar/avatar-2.jpg" alt=""><img src="/assets/images/avatar/avatar-3.jpg" alt=""></span>
                    <span class="text-muted" style="font-size:.86rem;line-height:1.35;">Join thousands of professionals who have transformed their lives with AVN</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Bottom feature bar -->
    <div class="ct-featbar">
      <div class="container py-4">
        <div class="row g-3 text-center text-md-start">
          <div class="col-md-3 col-6"><div class="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-2 gap-md-3"><span class="ct-feat-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"/><path d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M7 16a3 3 0 0 1 6 0"/><path d="M15 10h3"/><path d="M15 13h2"/></svg></span><div><div class="ct-feat-t">Personalized Guidance</div><div class="ct-feat-d">Tailored to your unique needs</div></div></div></div>
          <div class="col-md-3 col-6"><div class="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-2 gap-md-3"><span class="ct-feat-ico"><span class="ic-lotus" style="width:24px;height:24px;"></span></span><div><div class="ct-feat-t">Expert Support</div><div class="ct-feat-d">Guided by experienced wellness professionals</div></div></div></div>
          <div class="col-md-3 col-6"><div class="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-2 gap-md-3"><span class="ct-feat-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 9 9"/><path d="M12 3v9l6.5 6.5"/><path d="M12 12l-6.5 6.5"/><circle cx="12" cy="12" r="2"/></svg></span><div><div class="ct-feat-t">Holistic Approach</div><div class="ct-feat-d">Body, mind &amp; lifestyle in perfect balance</div></div></div></div>
          <div class="col-md-3 col-6"><div class="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-2 gap-md-3"><span class="ct-feat-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/><path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 12v3"/></svg></span><div><div class="ct-feat-t">Confidential &amp; Safe</div><div class="ct-feat-d">Your privacy and well-being are our priority</div></div></div></div>
        </div>
      </div>
    </div>
    <!-- Contact footer bar -->
    <div class="ct-contactbar">
      <div class="container py-3">
        <div class="row g-3 align-items-center">
          <div class="col-lg-9">
            <div class="d-flex flex-column flex-md-row flex-wrap gap-3 gap-md-4 justify-content-center justify-content-lg-start">
              <a href="tel:+918281871980" class="ci"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/></svg>+91 82818 71980</a>
              <a href="mailto:academy@avnwellness.com" class="ci"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"/><path d="M3 7l9 6l9 -6"/></svg>academy@avnwellness.com</a>
              <span class="ci"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"/></svg>Alappuzha, Kerala, South India</span>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="d-flex align-items-center gap-2 justify-content-center justify-content-lg-end">
              <span class="me-1" style="font-size:.9rem;">Follow Us:</span>
              <a href="#" aria-label="Facebook" class="ct-social"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h2V5h-2c-1.7 0 -3 1.3 -3 3v2H9v3h2v6h3v-6h2l1 -3h-3V8c0 -.6 .4 -1 1 -1z"/></svg></a>
              <a href="#" aria-label="Instagram" class="ct-social"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3"/><path d="M16.5 7.5v.01"/></svg></a>
              <a href="#" aria-label="YouTube" class="ct-social"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 8.2a2.5 2.5 0 0 0 -1.7 -1.8C18.2 6 12 6 12 6s-6.2 0 -7.9 .4A2.5 2.5 0 0 0 2.4 8.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 3.8a2.5 2.5 0 0 0 1.7 1.8C5.8 18 12 18 12 18s6.2 0 7.9 -.4a2.5 2.5 0 0 0 1.7 -1.8A26 26 0 0 0 22 12a26 26 0 0 0 -.4 -3.8zM10 15V9l5 3z"/></svg></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Contact / Enquiry End -->



  <!-- FAQ Start -->
  <section class="py-lg-13 py-8 position-relative overflow-hidden" id="faq">
    <svg class="ring-decor d-none d-md-block" style="width:320px;height:320px;bottom:-110px;left:-100px;"><use href="#avn-rings" /></svg>
    <div class="container position-relative">
      <div class="row align-items-center g-4 mb-5">
        <div class="col-lg-7">
          <span class="faq-eyebrow d-inline-flex align-items-center gap-2 text-uppercase fw-bold mb-3">FAQ <span class="faq-eyebrow-line"></span></span>
          <h2 class="faq-title mb-3">Frequently Asked <span class="g">Questions</span></h2>
          <p class="text-muted mb-0" style="max-width:470px;">Everything busy professionals ask before beginning their wellness journey. Clear answers. Complete clarity.</p>
        </div>
        <div class="col-lg-5 d-none d-lg-block">
          <img src="/about.png" alt="AVN wellness" class="faq-hero-img">
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="faq-card" id="faqAccordion" data-cms-skip>
            <div class="accordion-item border rounded-4 mb-3 overflow-hidden">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#faq1">Is this program suitable for complete beginners?</button>
              </h2>
              <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body small text-muted">All AVN wellness programs are thoughtfully designed to be
                  beginner-friendly, practical and easy to follow — even if you have never practiced Yoga or Meditation
                  before. Sessions are guided step-by-step, making them accessible for busy professionals of all ages and
                  fitness levels.</div>
              </div>
            </div>
            <div class="accordion-item border rounded-4 mb-3 overflow-hidden">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#faq2">Are the sessions conducted online or in person?</button>
              </h2>
              <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body small text-muted">Most AVN wellness sessions are conducted online through live
                  guided classes, allowing professionals worldwide to participate conveniently from home or office
                  without disrupting busy schedules.</div>
              </div>
            </div>
            <div class="accordion-item border rounded-4 mb-3 overflow-hidden">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#faq3">What if I cannot attend the live session?</button>
              </h2>
              <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body small text-muted">Every session is made available through secure
                  password-protected participant access, allowing you to practice within the next 23–24 hours after the
                  live session — flexible for global time zones and demanding schedules.</div>
              </div>
            </div>
            <div class="accordion-item border rounded-4 mb-3 overflow-hidden">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#faq4">How much time do I need daily?</button>
              </h2>
              <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body small text-muted">Each program requires only 45 minutes per day, carefully
                  structured to fit into the schedules of busy professionals while still creating meaningful and
                  sustainable wellness results.</div>
              </div>
            </div>
            <div class="accordion-item border rounded-4 mb-3 overflow-hidden">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#faq5">How do I know which program is right for me?</button>
              </h2>
              <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body small text-muted">If you are unsure which program best fits your needs, you may
                  book a complimentary wellness consultation. We'll help you identify the most suitable program based on
                  your lifestyle, stress levels, health concerns and wellness goals.</div>
              </div>
            </div>
            <div class="accordion-item border rounded-4 mb-3 overflow-hidden">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#faq6">Do I need flexibility or prior fitness experience to join?</button>
              </h2>
              <div id="faq6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body small text-muted">Not at all. AVN programs focus on safe, sustainable and
                  realistic practices rather than advanced postures or intense physical performance — the emphasis is on
                  wellbeing, stress reduction, posture improvement, emotional balance and long-term health.</div>
              </div>
            </div>
            <div class="accordion-item border rounded-4 mb-3 overflow-hidden">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#faq7">Will I receive personal guidance and support?</button>
              </h2>
              <div id="faq7" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body small text-muted">Yes. Participants receive guided instruction, structured
                  support and wellness resources throughout the program. Selected programs also offer premium 1:1
                  guidance options for a more personalised wellness journey.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- FAQ End -->

  <!-- Footer Start -->
  <footer class="ftr position-relative overflow-hidden">
    <div class="container py-lg-6 py-5">
      <div class="row g-4 g-lg-5">
        <!-- Brand -->
        <div class="col-lg-3 col-md-6">
          <img src="/avn-removebg-preview.png" alt="Ayur Vidya Nikethan — Centre for Integrated Wellness" style="height:46px;width:auto;">
          <p class="ftr-desc mt-3 mb-3">Where Wellness Becomes A Way Of Life. Integrated yogic wellness for busy, high-responsibility professionals worldwide.</p>
          <div class="ftr-contact d-flex flex-column gap-2">
            <a href="mailto:info@avnwellness.com"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"/><path d="M3 7l9 6l9 -6"/></svg>info@avnwellness.com</a>
            <a href="tel:+918281871980"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/></svg>+91 82818 71980</a>
            <span><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"/></svg>Alappuzha, Kerala, India</span>
          </div>
        </div>
        <!-- Programs -->
        <div class="col-lg-3 col-md-6">
          <div class="ftr-h mb-3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21c.5 -4.5 2.5 -8 7 -10"/><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/></svg>Programs</div>
          <ul class="ftr-links mb-3">
            <li><a href="#programs"><svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11 -7z"/></svg>Professional Stress Reset&trade;</a></li>
            <li><a href="#programs"><svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11 -7z"/></svg>Desk Work Recovery&trade;</a></li>
            <li><a href="#programs"><svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11 -7z"/></svg>Sleep &amp; Burnout Recovery&trade;</a></li>
            <li><a href="#programs"><svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11 -7z"/></svg>Complete Transformation&trade;</a></li>
          </ul>
          <a href="#programs" class="ftr-btn">Explore All Programs <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></svg></a>
        </div>
        <!-- Quick Links -->
        <div class="col-lg-2 col-6">
          <div class="ftr-h mb-3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21c.5 -4.5 2.5 -8 7 -10"/><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/></svg>Quick Links</div>
          <ul class="ftr-links">
            <li><a href="#story"><svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11 -7z"/></svg>About AVN</a></li>
            <li><a href="#founders"><svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11 -7z"/></svg>Our Experts</a></li>
            <li><a href="#live-programs"><svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11 -7z"/></svg>Schedule</a></li>
            <li><a href="#pricing"><svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11 -7z"/></svg>Pricing</a></li>
          </ul>
        </div>
        <!-- Support -->
        <div class="col-lg-2 col-6">
          <div class="ftr-h mb-3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21c.5 -4.5 2.5 -8 7 -10"/><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/></svg>Support</div>
          <ul class="ftr-links">
            <li><a href="#faq"><svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11 -7z"/></svg>FAQ</a></li>
            <li><a href="#consultation"><svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11 -7z"/></svg>Free Consultation</a></li>
            <li><a href="#consultation"><svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11 -7z"/></svg>Contact Us</a></li>
            <li><a href="#serve"><svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11 -7z"/></svg>Why Choose AVN</a></li>
          </ul>
        </div>
        <!-- Join -->
        <div class="col-lg-2 col-md-12">
          <div class="ftr-join">
            <div class="d-flex align-items-center gap-2 mb-2">
              <span class="text-primary flex-shrink-0"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/></svg></span>
              <span class="ftr-join-t">Join 5000+ Professionals</span>
            </div>
            <p class="ftr-desc mb-3">Transforming their lives with science-backed yogic wellness.</p>
            <div class="ftr-flags mb-2">
              <span class="ftr-flag"><img src="https://flagcdn.com/in.svg" alt="India" width="20" height="20" loading="lazy"></span>
              <span class="ftr-flag"><img src="https://flagcdn.com/us.svg" alt="United States" width="20" height="20" loading="lazy"></span>
              <span class="ftr-flag"><img src="https://flagcdn.com/gb.svg" alt="United Kingdom" width="20" height="20" loading="lazy"></span>
              <span class="ftr-flag"><img src="https://flagcdn.com/ae.svg" alt="United Arab Emirates" width="20" height="20" loading="lazy"></span>
              <span class="ftr-flag"><img src="https://flagcdn.com/sg.svg" alt="Singapore" width="20" height="20" loading="lazy"></span>
              <span class="ftr-flag"><img src="https://flagcdn.com/au.svg" alt="Australia" width="20" height="20" loading="lazy"></span>
            </div>
            <div class="fw-bold" style="color:#1c1c1c;font-size:.92rem;">25+ Countries Worldwide</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bottom bar -->
    <div class="ftr-bottom">
      <div class="container py-3">
        <div class="row align-items-center g-2">
          <div class="col-md-4 text-center text-md-start"><small>&copy; 2026 Ayur Vidya Nikethan (AVN). All rights reserved.</small></div>
          <div class="col-md-4 text-center"><small class="text-white text-opacity-75">Where Wellness Becomes A Way Of Life.</small></div>
          <div class="col-md-4">
            <div class="d-flex align-items-center gap-2 justify-content-center justify-content-md-end">
              <a href="#" aria-label="Instagram" class="ftr-social"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3"/><path d="M16.5 7.5v.01"/></svg></a>
              <a href="#" aria-label="Facebook" class="ftr-social"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h2V5h-2c-1.7 0 -3 1.3 -3 3v2H9v3h2v6h3v-6h2l1 -3h-3V8c0 -.6 .4 -1 1 -1z"/></svg></a>
              <a href="#" aria-label="YouTube" class="ftr-social"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 8.2a2.5 2.5 0 0 0 -1.7 -1.8C18.2 6 12 6 12 6s-6.2 0 -7.9 .4A2.5 2.5 0 0 0 2.4 8.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 3.8a2.5 2.5 0 0 0 1.7 1.8C5.8 18 12 18 12 18s6.2 0 7.9 -.4a2.5 2.5 0 0 0 1.7 -1.8A26 26 0 0 0 22 12a26 26 0 0 0 -.4 -3.8zM10 15V9l5 3z"/></svg></a>
              <a href="#" aria-label="LinkedIn" class="ftr-social"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1 -3.88 0a1.94 1.94 0 0 1 3.88 0zM3.5 8.5h3v12h-3zM9 8.5h2.9v1.6h.04c.4 -.76 1.4 -1.56 2.86 -1.56c3.06 0 3.7 2 3.7 4.6v6.36h-3v-5.64c0 -1.34 -.02 -3.06 -1.87 -3.06c-1.87 0 -2.16 1.46 -2.16 2.96v5.74h-3z"/></svg></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer End -->

  <!-- Enquiry / Consultation popup -->
  <div class="modal fade" id="enquiryModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-5 border-0 shadow-lg">
        <div class="modal-body p-6">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <div>
              <span class="text-gold text-uppercase small fw-bold" style="letter-spacing:.12rem;">Free &amp; No
                Obligation</span>
              <h3 class="h4 fw-bold mb-0 mt-1" id="enquiryTitle">Book Your Free Consultation</h3>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <p id="enquiryProgramRow" class="small text-muted mb-4 d-none">Program: <strong class="text-primary"></strong></p>
          <p class="small text-muted mb-4">Share your details and our team will reach out to guide you to the right
            program.</p>

          <form id="enquiryForm">
            <input type="hidden" id="enquiryProgram">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label small">Name</label>
                <input name="name" class="form-control" placeholder="Your full name" required>
              </div>
              <div class="col-md-6">
                <label class="form-label small">Phone</label>
                <input name="phone" type="tel" class="form-control" placeholder="Phone number" required>
              </div>
              <div class="col-md-6">
                <label class="form-label small">Email</label>
                <input name="email" type="email" class="form-control" placeholder="name@example.com">
              </div>
              <div class="col-md-6">
                <label class="form-label small">Profession</label>
                <input name="profession" class="form-control" placeholder="e.g. IT Professional">
              </div>
              <div class="col-12">
                <label class="form-label small">Primary Wellness Concern</label>
                <select name="concern" class="form-select">
                  <option value="">Select your main concern…</option>
                  <option>Stress &amp; Anxiety</option>
                  <option>Pain, Stiffness or Posture</option>
                  <option>Sleep, Fatigue or Burnout</option>
                  <option>Complete Wellness Transformation</option>
                </select>
              </div>
              <div class="col-12">
                <label class="form-label small">Message (optional)</label>
                <textarea name="message" class="form-control" rows="2"
                  placeholder="Anything you'd like us to know"></textarea>
              </div>
            </div>
            <div id="enquiryMsg" class="small mt-3 text-muted"></div>
            <button type="submit" class="btn btn-primary btn-bordered-gold w-100 mt-4">Submit Enquiry</button>
          </form>

          <div id="enquirySuccess" class="text-center py-6 d-none">
            <span class="icon-shape icon-xl rounded-circle icon-chip icon-ring mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </span>
            <h4 class="fw-bold">Thank you!</h4>
            <p class="text-muted mb-4">Your enquiry has been received. Our wellness team will contact you shortly.</p>
            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Bootstrap JS -->
`;
