import { NextResponse } from 'next/server';
import { sql, ensureInit } from '../../_lib/db';
import { requireAuth } from '../../_lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    requireAuth(req);
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const form = await req.formData();
    const file = form.get('image');
    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'No image uploaded' }, { status: 400 });
    }
    const buf = Buffer.from(await file.arrayBuffer());
    if (buf.length > 6 * 1024 * 1024) {
      return NextResponse.json({ error: 'Image too large (max 6MB)' }, { status: 400 });
    }
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    await ensureInit();
    await sql`INSERT INTO images (id, mime, data) VALUES (${id}, ${file.type || 'image/jpeg'}, ${buf.toString('base64')})`;
    return NextResponse.json({ url: '/api/images/' + id });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
