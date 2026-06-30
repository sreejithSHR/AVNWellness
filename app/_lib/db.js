import { neon } from '@neondatabase/serverless';

export const sql = neon(process.env.DATABASE_URL);

// Content is a FLAT map of override keys -> string values.
//  - "t<n>"  : auto-detected text spans (from cmsEditable engine)
//  - "i<n>"  : auto-detected images
//  - "video.youtube" : the free-session video URL (applied to [data-cms-href])
// Anything not overridden falls back to the static markup, so defaults are minimal.
export const DEFAULT_CONTENT = {
  'video.youtube': 'https://www.youtube.com/watch?v=v7AYKMP6rOE',
};

function deepMerge(base, override) {
  const out = Array.isArray(base) ? [...base] : { ...base };
  for (const k of Object.keys(override || {})) {
    if (override[k] && typeof override[k] === 'object' && !Array.isArray(override[k]) && typeof base[k] === 'object') {
      out[k] = deepMerge(base[k] || {}, override[k]);
    } else {
      out[k] = override[k];
    }
  }
  return out;
}

let initPromise;
export function ensureInit() {
  if (!initPromise) {
    initPromise = (async () => {
      await sql`CREATE TABLE IF NOT EXISTS site_content (id INT PRIMARY KEY, data JSONB NOT NULL, updated_at TIMESTAMPTZ DEFAULT now())`;
      await sql`CREATE TABLE IF NOT EXISTS enquiries (
        id SERIAL PRIMARY KEY, name TEXT NOT NULL, phone TEXT, email TEXT, profession TEXT,
        concern TEXT, program TEXT, message TEXT, source TEXT, status TEXT DEFAULT 'new',
        created_at TIMESTAMPTZ DEFAULT now())`;
      await sql`CREATE TABLE IF NOT EXISTS images (id TEXT PRIMARY KEY, mime TEXT, data TEXT, created_at TIMESTAMPTZ DEFAULT now())`;
      const r = await sql`SELECT data FROM site_content WHERE id = 1`;
      if (!r.length) await sql`INSERT INTO site_content (id, data) VALUES (1, ${JSON.stringify(DEFAULT_CONTENT)}::jsonb)`;
      // drop legacy nested keys from the earlier form-based model
      await sql`UPDATE site_content SET data = (data - 'hero' - 'stats' - 'contact') WHERE id = 1`;
    })().catch((e) => { initPromise = undefined; throw e; });
  }
  return initPromise;
}

export async function getContent() {
  await ensureInit();
  const r = await sql`SELECT data FROM site_content WHERE id = 1`;
  return deepMerge(DEFAULT_CONTENT, (r[0] && r[0].data) || {});
}

export async function saveContent(patch) {
  await ensureInit();
  const merged = deepMerge(await getContent(), patch || {});
  const json = JSON.stringify(merged);
  await sql`INSERT INTO site_content (id, data, updated_at) VALUES (1, ${json}::jsonb, now())
            ON CONFLICT (id) DO UPDATE SET data = ${json}::jsonb, updated_at = now()`;
  return merged;
}
