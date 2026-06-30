# AVN — Next.js app (site + admin + API, single process)

The whole thing now runs as **one Next.js app** — public site, admin panel, and the API (Neon
Postgres) together. No separate backend to start.

## 1. Configure environment (`.env`)

```
DATABASE_URL=postgresql://...neon.tech/neondb?sslmode=require   # your Neon string (already set)
ADMIN_USER=admin
ADMIN_PASS=your-strong-password
JWT_SECRET=any-long-random-string
```

Next.js loads `.env` automatically. Database tables (`site_content`, `enquiries`, `images`) are
created and seeded on the first request.

## 2. Run

```
npm run dev      # development  → http://localhost:3000
# or
npm run build && npm start      # production
```

That single server serves the homepage, `/admin`, and `/api/*`.

## 3. Admin panel — `/admin`

Open `http://localhost:3000/admin` and log in with `ADMIN_USER` / `ADMIN_PASS`.

- **Visual Editor** — a live, in-place editor showing the actual homepage. **Click any text** to
  edit it inline; **click any image** (hero, gallery, avatars, founders — all of them) to upload a
  replacement. There's also a field for the free-session video URL. Press **Save Changes** and it's
  live on the public site. Every section is editable — text and images are auto-detected, so nothing
  needs to be tagged by hand.
- **Enquiries** — every popup submission + consultation form, with name/contact/program/date.
  Toggle New ↔ Contacted, or delete.

### How the visual editing works (no manual tagging)

`app/cmsEditable.js` walks the rendered page, wraps every visible text node in a `<span>` and indexes
every `<img>`, assigning each a stable key (`t0, t1, …` / `i0, i1, …`). Because the public page and
the admin editor render the **same** homepage HTML, the keys line up. The admin saves only the keys
you changed (as a flat `{ key: value }` override map in Postgres); the public site re-derives the
same keys on load and applies your overrides. Anything you don't touch falls back to the original
markup. Uploaded images are stored in the `images` table and served from `/api/images/:id`.

## How it fits together

- `app/page.js` renders the homepage (`app/homepageHtml.js`); `app/SiteScripts.jsx` runs the
  client behaviour (GLightbox, scroll reveal, the enquiry popup, and CMS hydration from `/api/content`).
- `app/admin/page.js` + `app/AdminScripts.jsx` are the admin panel.
- `app/api/*` are the API routes; `app/_lib/db.js` talks to Neon via `@neondatabase/serverless`.
- **Images** are stored in Postgres (`images` table) and served from `/api/images/:id`, so uploads
  work even on serverless hosts (e.g. Vercel) — no disk needed.
- Editable elements in the HTML carry `data-cms` / `data-cms-img` / `data-cms-href`. To add more,
  tag the element and add the key in `app/_lib/db.js` (`DEFAULT_CONTENT`) + `app/AdminScripts.jsx` (`FIELDS`).

## Editing the design

The styles still live in `src/assets/scss/`. After changing SCSS, recompile the global stylesheet:

```
npm run css      # rebuilds app/site.css from src/assets/scss/style-next.scss
```

The page markup lives in `src/index.html` / `src/admin.html`. After editing those, regenerate the
embedded HTML modules:

```
node scripts/extract-html.js   # (the extractor used during setup; see below)
```

## API summary

| Method | Route | Auth | Purpose |
|--------|-------|------|---------|
| POST | `/api/login` | – | returns a JWT |
| GET / PUT | `/api/content` | PUT only | homepage content |
| POST | `/api/upload` | ✓ | image → `{ url: /api/images/:id }` |
| GET | `/api/images/:id` | – | serve stored image |
| POST | `/api/enquiries` | – | submit an enquiry |
| GET | `/api/enquiries` | ✓ | list enquiries |
| PATCH / DELETE | `/api/enquiries/:id` | ✓ | status / delete |

## Notes

- The old Vite static build still works via `npm run vite:dev` / `npm run vite:build`, and the
  Express server in `server/` is now legacy (unused) — safe to delete if you don't need it.
