const { Pool } = require('pg');

// Neon Postgres connection. Set DATABASE_URL in .env (it should include ?sslmode=require)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Editable homepage content. These keys map to [data-cms] / [data-cms-img] / [data-cms-href]
// attributes in src/index.html. Admins edit these; the public site loads them on page load.
const DEFAULT_CONTENT = {
  hero: {
    badge: 'Integrated Yogic Wellness',
    title1: 'Feel Better.',
    title2: 'Sleep Better.',
    title3: 'Perform Better.',
    subtitle: 'Evidence-Informed Yoga & Wellness Programs for Busy Professionals Worldwide.',
    image: './assets/images/hero-img.jpg',
    quote: "Wellness is not a luxury. It's a way of living with clarity, energy and balance.",
  },
  stats: {
    years: '15+',
    sessions: '5000+',
    countries: '25+',
  },
  video: {
    youtube: 'https://www.youtube.com/watch?v=v7AYKMP6rOE',
  },
  contact: {
    phone: '+91 82818 71980',
    email: 'info@avnwellness.com',
    location: 'Alappuzha, Kerala, India',
  },
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

async function init() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS site_content (
      id INT PRIMARY KEY,
      data JSONB NOT NULL,
      updated_at TIMESTAMPTZ DEFAULT now()
    )`);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS enquiries (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT,
      email TEXT,
      profession TEXT,
      concern TEXT,
      program TEXT,
      message TEXT,
      source TEXT,
      status TEXT DEFAULT 'new',
      created_at TIMESTAMPTZ DEFAULT now()
    )`);
  const r = await pool.query('SELECT data FROM site_content WHERE id = 1');
  if (!r.rows.length) {
    await pool.query('INSERT INTO site_content (id, data) VALUES (1, $1)', [DEFAULT_CONTENT]);
  }
}

async function getContent() {
  const r = await pool.query('SELECT data FROM site_content WHERE id = 1');
  const stored = r.rows[0] ? r.rows[0].data : {};
  // merge over defaults so newly added keys always have a value
  return deepMerge(DEFAULT_CONTENT, stored);
}

async function saveContent(patch) {
  const current = await getContent();
  const merged = deepMerge(current, patch);
  await pool.query(
    `INSERT INTO site_content (id, data, updated_at) VALUES (1, $1, now())
     ON CONFLICT (id) DO UPDATE SET data = $1, updated_at = now()`,
    [merged]
  );
  return merged;
}

module.exports = { pool, init, getContent, saveContent, DEFAULT_CONTENT };
