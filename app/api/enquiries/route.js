import { NextResponse } from 'next/server';
import { sql, ensureInit } from '../../_lib/db';
import { requireAuth } from '../../_lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const b = (await req.json().catch(() => ({}))) || {};
    if (!b.name || !(b.phone || b.email)) {
      return NextResponse.json({ error: 'Name and a phone or email are required' }, { status: 400 });
    }
    await ensureInit();
    await sql`INSERT INTO enquiries (name, phone, email, profession, concern, program, message, source)
      VALUES (${b.name}, ${b.phone ?? null}, ${b.email ?? null}, ${b.profession ?? null},
              ${b.concern ?? null}, ${b.program ?? null}, ${b.message ?? null}, ${b.source ?? 'website'})`;
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    requireAuth(req);
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    await ensureInit();
    const rows = await sql`SELECT * FROM enquiries ORDER BY created_at DESC`;
    return NextResponse.json(rows);
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
