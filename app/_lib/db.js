import { neon } from '@neondatabase/serverless';

// Disable Next's fetch cache for the Neon driver (it uses fetch under the hood), otherwise
// DB reads can be served stale.
export const sql = neon(process.env.DATABASE_URL, { fetchOptions: { cache: 'no-store' } });

// Content is a FLAT map of override keys -> string values.
//  - "t<n>"  : auto-detected text spans (from cmsEditable engine)
//  - "i<n>"  : auto-detected images
//  - "video.youtube" : the free-session video URL (applied to [data-cms-href])
// Anything not overridden falls back to the static markup, so defaults are minimal.
export const DEFAULT_CONTENT = {
  'video.youtube': 'https://www.youtube.com/watch?v=v7AYKMP6rOE',
  gallery: [
    '/assets/images/gallery-1.jpg', '/assets/images/gallery-2.jpg', '/assets/images/gallery-3.jpg',
    '/assets/images/gallery-4.jpg', '/assets/images/gallery-5.jpg', '/assets/images/gallery-6.jpg',
  ],
  programs: [
    { accent: 'green', icon: 'yoga', photo: '/plan1.png', name: 'AVN Professional Stress Reset Program™', tagline: 'Reduce Stress. Restore Balance. Build Lasting Resilience.', duration: '8 Weeks', time: '60 Min', schedule: '5 Days / Week',
      benefits: ['Reduce Stress & Anxiety', 'Calm Overthinking & Mental Overload', 'Restore Emotional Balance', 'Improve Sleep & Energy'], bestFor: 'Bankers, IT Professionals, Executives, Teachers, Doctors & Busy Professionals' },
    { accent: 'teal', icon: 'spine', photo: '/plan2.png', name: 'AVN Desk Work Recovery & Posture Wellness Program™', tagline: 'Relieve Pain. Restore Posture. Reclaim Comfortable Movement.', duration: '6 Weeks', time: '60 Min', schedule: '5 Days / Week',
      benefits: ['Relieve Neck, Shoulder & Back Pain', 'Improve Posture & Spinal Alignment', 'Reduce Stiffness & Sitting Fatigue', 'Ease Screen Strain & Eye Fatigue'], bestFor: 'IT & Remote Workers, Bank Employees, Teachers, Office & Desk Professionals' },
    { accent: 'blue', icon: 'moon', photo: '/plan3.png', name: 'AVN Sleep, Energy & Burnout Recovery Program™', tagline: 'Restore Deep Sleep. Renew Energy. Recover from Burnout.', duration: '8 Weeks', time: '60 Min', schedule: '5 Days / Week',
      benefits: ['Improve Sleep Quality', 'Restore Energy & Vitality', 'Recover From Burnout', 'Calm Nervous System'], bestFor: 'Doctors, Executives, Shift Workers, Entrepreneurs & Busy Professionals' },
    { accent: 'amber', icon: 'lotus', photo: '/plan4.png', name: 'AVN Complete Professional Wellness Transformation™', tagline: 'Transforming Stress, Energy, Focus and Wellbeing for Sustainable Professional Success.', duration: '12 Weeks', time: '60 Min', schedule: '5 Days / Week',
      benefits: ['Complete Health & Wellness Reset', 'Better Sleep, Energy & Posture', 'Emotional Balance & Stress Relief', 'Sustainable Lifestyle Transformation'], bestFor: 'Professionals Across All Sectors, Executives, Entrepreneurs & More' },
  ],
  pricing: [
    { accent: 'green', icon: 'yoga', badge: 'MOST POPULAR', name: 'AVN Professional Stress Reset Program™', tagline: 'Reduce Stress. Restore Balance. Build Lasting Resilience.', price: '1999', regular: '6999', save: '71', intl: '$25',
      features: ['Guided yoga for stress relief', 'Breathwork & meditation', 'Recorded practice videos', 'Wellness habit tracker', 'Expert guidance & support'] },
    { accent: 'teal', icon: 'spine', badge: '', name: 'AVN Desk Work Recovery & Posture Wellness Program™', tagline: 'Relieve Pain. Restore Posture. Reclaim Comfortable Movement.', price: '2799', regular: '9999', save: '72', intl: '$35',
      features: ['Spine mobility yoga', 'Neck & shoulder relief', 'Office stretch routine PDF', 'Postural correction training', 'Expert guidance & support'] },
    { accent: 'blue', icon: 'moon', badge: '', name: 'AVN Sleep, Energy & Burnout Recovery Program™', tagline: 'Restore Deep Sleep. Renew Energy. Recover from Burnout.', price: '2799', regular: '9999', save: '72', intl: '$35',
      features: ['Deep relaxation yoga', 'Guided sleep practices', 'Sleep recovery audio', 'Energy restoration routines', 'Expert guidance & support'] },
    { accent: 'amber', icon: 'lotus', badge: 'RECOMMENDED', name: 'AVN Complete Professional Wellness Transformation™', tagline: 'Transforming Stress, Energy, Focus & Wellbeing for Sustainable Professional Success.', price: '3999', regular: '14999', save: '73', intl: '$50',
      features: ['Complete practice video library', 'Guided meditation audio pack', 'Wellness journal & tracker', 'Professional wellness handbook', 'Priority support & 1:1 guidance (Optional)', 'Lifestyle, nutrition & mindset guidance'] },
  ],
  testimonials: [
    { stars: 5, name: 'Rahul Menon', role: 'Banking Professional, Manager, Kochi', age: '38', programTaken: 'Professional Stress Reset', healthIssues: 'Stress, Poor Sleep, Mental Fatigue', benefitsGained: 'Better sleep, Reduced stress, Emotional balance, Inner calm', avatar: '/assets/images/avatar/avatar-1.jpg' },
    { stars: 5, name: 'Anjali Sharma', role: 'IT Professional, Senior Software Engineer, Bengaluru', age: '34', programTaken: 'Desk Work Recovery & Posture Wellness', healthIssues: 'Neck & Back Pain, Poor Posture, Low Energy', benefitsGained: 'Pain relief, Improved posture, More energy, Better focus', avatar: '/assets/images/avatar/avatar-2.jpg' },
    { stars: 5, name: 'Dr. Vivek Nair', role: 'Healthcare Professional, Consultant, Chennai', age: '41', programTaken: 'Sleep, Energy & Burnout Recovery', healthIssues: 'Burnout, Poor Sleep, Low Energy', benefitsGained: 'Deep sleep, Steady energy, Less burnout, Positive mood', avatar: '/assets/images/avatar/avatar-3.jpg' },
    { stars: 5, name: 'Meera Krishnan', role: 'Educator, School Teacher, Trivandrum', age: '36', programTaken: 'Executive Focus & Emotional Balance', healthIssues: 'Anxiety, Mental Overload, Inconsistent Routine', benefitsGained: 'Daily consistency, Calmer mind, More patience', avatar: '/assets/images/avatar/avatar-4.jpg' },
    { stars: 5, name: 'Suresh Pillai', role: 'Entrepreneur, Business Owner, Dubai', age: '39', programTaken: 'Complete Professional Wellness Transformation', healthIssues: 'Irregular Routine, Stress, Low Stamina', benefitsGained: 'Better energy, Emotional balance, Work-life balance', avatar: '/assets/images/avatar/avatar-5.jpg' },
    { stars: 5, name: 'Priya Raghavan', role: 'Senior Manager, Corporate Professional, Singapore', age: '37', programTaken: 'Safe, Effective & Sustainable Wellness', healthIssues: 'Sedentary Lifestyle, Stiff Body', benefitsGained: 'Pain-free body, Better flexibility, Sustainable routine', avatar: '/assets/images/avatar/avatar-6.jpg' },
  ],
  faq: [
    { q: 'Is this program suitable for complete beginners?', a: 'Absolutely. All AVN wellness programs are thoughtfully designed to be beginner-friendly, practical and easy to follow — even if you have never practiced Yoga or Meditation before. Sessions are guided step-by-step, making them accessible for busy professionals of all ages and fitness levels.' },
    { q: 'Are the sessions conducted online or in person?', a: 'Most AVN wellness sessions are conducted online through live guided classes, allowing professionals worldwide to participate conveniently from home or office without disrupting busy schedules.' },
    { q: 'What if I cannot attend the live session?', a: 'Every session is made available through secure password-protected participant access, allowing you to practice within the next 23–24 hours after the live session — flexible for global time zones and demanding schedules.' },
    { q: 'How much time do I need daily?', a: 'Each program requires only 45 minutes per day, carefully structured to fit into the schedules of busy professionals while still creating meaningful and sustainable wellness results.' },
    { q: 'How do I know which program is right for me?', a: "If you are unsure which program best fits your needs, you may book a complimentary wellness consultation. We'll help you identify the most suitable program based on your lifestyle, stress levels, health concerns and wellness goals." },
    { q: 'Do I need flexibility or prior fitness experience to join?', a: 'Not at all. AVN programs focus on safe, sustainable and realistic practices rather than advanced postures or intense physical performance — the emphasis is on wellbeing, stress reduction, posture improvement, emotional balance and long-term health.' },
    { q: 'Will I receive personal guidance and support?', a: 'Yes. Participants receive guided instruction, structured support and wellness resources throughout the program. Selected programs also offer premium 1:1 guidance options for a more personalised wellness journey.' },
  ],
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
      // one-time: drop stale seeded programs (old /assets/images/program-*.jpg photos) so the
      // corrected defaults (plan1-4.png + updated schedule) take effect. Guarded so it runs once
      // and never wipes genuine admin edits (which won't reference the old photo paths).
      await sql`UPDATE site_content SET data = (data - 'programs')
        WHERE id = 1 AND data->'programs'->0->>'photo' LIKE '/assets/images/program-%'`;
    })().catch((e) => { initPromise = undefined; throw e; });
  }
  return initPromise;
}

export async function getContent() {
  await ensureInit();
  const r = await sql`SELECT data FROM site_content WHERE id = 1`;
  let data = (r[0] && r[0].data) || {};
  if (typeof data === 'string') {
    try { data = JSON.parse(data); } catch { data = {}; }
  }
  return deepMerge(DEFAULT_CONTENT, data);
}

export async function saveContent(patch) {
  await ensureInit();
  const merged = deepMerge(await getContent(), patch || {});
  const json = JSON.stringify(merged);
  await sql`INSERT INTO site_content (id, data, updated_at) VALUES (1, ${json}::jsonb, now())
            ON CONFLICT (id) DO UPDATE SET data = ${json}::jsonb, updated_at = now()`;
  return merged;
}
