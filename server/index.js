require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { init, getContent, saveContent, pool } = require('./db');

const app = express();
app.use(cors());
app.use(express.json({ limit: '4mb' }));

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret';
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || 'admin123';

// --- Image uploads (stored on disk, served at /uploads) ---
const uploadDir = path.join(__dirname, 'uploads');
fs.mkdirSync(uploadDir, { recursive: true });
const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    const safe = file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, '-');
    cb(null, Date.now() + '-' + safe);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 6 * 1024 * 1024 },
  fileFilter: (req, file, cb) => cb(null, /^image\//.test(file.mimetype)),
});
app.use('/uploads', express.static(uploadDir));

// --- Auth middleware ---
function auth(req, res, next) {
  const token = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  try {
    jwt.verify(token, JWT_SECRET);
    next();
  } catch (e) {
    res.status(401).json({ error: 'Unauthorized' });
  }
}

// --- Auth ---
app.post('/api/login', (req, res) => {
  const { username, password } = req.body || {};
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const token = jwt.sign({ u: username }, JWT_SECRET, { expiresIn: '7d' });
    return res.json({ token });
  }
  res.status(401).json({ error: 'Invalid username or password' });
});

// --- Content (public read, admin write) ---
app.get('/api/content', async (req, res) => {
  try {
    res.json(await getContent());
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/content', auth, async (req, res) => {
  try {
    res.json(await saveContent(req.body || {}));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// --- Image upload (admin) ---
app.post('/api/upload', auth, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No image uploaded' });
  res.json({ url: '/uploads/' + req.file.filename });
});

// --- Enquiries ---
app.post('/api/enquiries', async (req, res) => {
  try {
    const { name, phone, email, profession, concern, program, message, source } = req.body || {};
    if (!name || !(phone || email)) {
      return res.status(400).json({ error: 'Name and a phone or email are required' });
    }
    await pool.query(
      `INSERT INTO enquiries (name, phone, email, profession, concern, program, message, source)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
      [name, phone, email, profession, concern, program, message, source || 'website']
    );
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/enquiries', auth, async (req, res) => {
  try {
    const r = await pool.query('SELECT * FROM enquiries ORDER BY created_at DESC');
    res.json(r.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.patch('/api/enquiries/:id', auth, async (req, res) => {
  try {
    await pool.query('UPDATE enquiries SET status = $1 WHERE id = $2', [req.body.status || 'new', req.params.id]);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/enquiries/:id', auth, async (req, res) => {
  try {
    await pool.query('DELETE FROM enquiries WHERE id = $1', [req.params.id]);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// --- Serve the built static site (run `npm run build` first) ---
const dist = path.join(__dirname, '..', 'dist');
if (fs.existsSync(dist)) {
  app.use(express.static(dist));
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api') || req.path.startsWith('/uploads')) return res.status(404).end();
    res.sendFile(path.join(dist, 'index.html'));
  });
}

init()
  .then(() => app.listen(PORT, () => console.log(`AVN server running on http://localhost:${PORT}`)))
  .catch((err) => {
    console.error('Database init failed:', err.message);
    console.error('Check DATABASE_URL in your .env file.');
    app.listen(PORT, () => console.log(`AVN server running on http://localhost:${PORT} (database NOT connected)`));
  });
