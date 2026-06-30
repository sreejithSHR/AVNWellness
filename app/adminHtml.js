export const adminHtml = `
<!-- Login -->
  <div id="loginView" class="min-vh-100 d-flex align-items-center justify-content-center p-3">
    <div class="card rounded-5 shadow-sm border" style="max-width: 420px; width: 100%;">
      <div class="card-body p-6">
        <div class="d-flex align-items-center gap-2 mb-5">
          <span class="text-primary"><svg width="34" height="34" stroke-width="3.2" fill="none" stroke="currentColor"
              viewBox="0 0 200 200">
              <path d="M 114.72 116.35 A 22 22 0 1 1 121.52 95.43" />
              <path d="M 119.63 126.53 A 33 33 0 1 1 132.94 97.99" />
              <path d="M 122.66 137.72 A 44 44 0 1 1 143.83 103.83" />
              <path d="M 123.68 149.64 A 55 55 0 1 1 153.48 112.84" />
            </svg></span>
          <div class="lh-1">
            <h1 class="h5 fw-bold mb-0 text-primary">AVN Admin</h1>
            <small class="text-gold">Centre for Integrated Wellness</small>
          </div>
        </div>
        <form id="loginForm">
          <div class="mb-3">
            <label class="form-label small">Username</label>
            <input id="username" class="form-control" autocomplete="username" required>
          </div>
          <div class="mb-4">
            <label class="form-label small">Password</label>
            <input id="password" type="password" class="form-control" autocomplete="current-password" required>
          </div>
          <div id="loginError" class="text-danger small mb-3 d-none"></div>
          <button class="btn btn-primary w-100" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  </div>

  <!-- Dashboard -->
  <div id="dashView" class="d-none">
    <div id="adminBackdrop" class="admin-backdrop d-none"></div>
    <div class="d-flex">
      <aside id="adminSidebar" class="admin-sidebar bg-white border-end flex-shrink-0 d-flex flex-column">
        <div class="p-4 border-bottom d-flex align-items-center gap-2">
          <span class="text-primary"><svg width="28" height="28" stroke-width="3.2" fill="none" stroke="currentColor"
              viewBox="0 0 200 200">
              <path d="M 114.72 116.35 A 22 22 0 1 1 121.52 95.43" />
              <path d="M 122.66 137.72 A 44 44 0 1 1 143.83 103.83" />
              <path d="M 123.68 149.64 A 55 55 0 1 1 153.48 112.84" />
            </svg></span>
          <span class="fw-bold text-primary">AVN Admin</span>
        </div>
        <nav class="nav flex-column p-2 gap-1 flex-grow-1">
          <button class="nav-link text-start active" data-panel="editor">✏️ Visual Editor</button>
          <button class="nav-link text-start" data-panel="programs">📋 Programs</button>
          <button class="nav-link text-start" data-panel="pricing">💳 Pricing</button>
          <button class="nav-link text-start" data-panel="testimonials">⭐ Testimonials</button>
          <button class="nav-link text-start" data-panel="faq">❓ FAQ</button>
          <button class="nav-link text-start" data-panel="gallery">🖼️ Gallery</button>
          <button class="nav-link text-start" data-panel="enquiries">📨 Enquiries <span id="enqCount"
              class="badge bg-primary ms-1 d-none">0</span></button>
        </nav>
        <div class="p-2 border-top d-flex flex-column gap-2">
          <a href="/" target="_blank" class="btn btn-sm btn-light">View Site ↗</a>
          <button id="logoutBtn" class="btn btn-sm btn-outline-dark">Logout</button>
        </div>
      </aside>

      <main class="flex-grow-1 admin-main" style="min-width:0;">
        <button id="menuBtn" class="btn btn-light btn-sm d-lg-none mb-3">☰ Menu</button>

        <!-- Visual editor -->
        <div id="panel-editor">
          <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
            <div>
              <h2 class="h5 fw-bold mb-1">Visual Editor</h2>
              <p class="small text-muted mb-0">Click any <strong>text</strong> to edit it. Click any
                <strong>image</strong> to replace it. Then press Save.</p>
            </div>
            <div class="d-flex align-items-center gap-3">
              <span id="veStatus" class="small text-muted"></span>
              <button id="veSave" class="btn btn-primary">Save Changes</button>
            </div>
          </div>
          <div class="card rounded-3 border mb-3">
            <div class="card-body py-2 d-flex flex-wrap align-items-center gap-2">
              <label class="small fw-semibold mb-0">Free-session video URL:</label>
              <input id="veVideo" class="form-control form-control-sm" style="max-width: 460px;"
                placeholder="https://www.youtube.com/watch?v=...">
            </div>
          </div>
          <div id="veCanvas" class="border rounded-4 overflow-auto bg-white"
            style="position: relative; max-height: calc(100vh - 230px);"></div>
        </div>

        <!-- Structured section panels (filled by JS) -->
        <div id="panel-programs" class="d-none"></div>
        <div id="panel-pricing" class="d-none"></div>
        <div id="panel-testimonials" class="d-none"></div>
        <div id="panel-faq" class="d-none"></div>
        <div id="panel-gallery" class="d-none"></div>

        <!-- Enquiries -->
        <div id="panel-enquiries" class="d-none">
          <h2 class="h5 fw-bold mb-4">Enquiries &amp; Consultation Requests</h2>
          <div class="card rounded-4 shadow-sm border">
            <div class="table-responsive">
              <table class="table align-middle mb-0">
                <thead class="table-light">
                  <tr class="small text-uppercase">
                    <th>Date</th><th>Name</th><th>Contact</th><th>Program / Concern</th><th>Status</th><th></th>
                  </tr>
                </thead>
                <tbody id="enqRows">
                  <tr><td colspan="6" class="text-center text-muted py-5">Loading…</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
`;
