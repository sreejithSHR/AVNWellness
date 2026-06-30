import { sql, ensureInit } from '../../../_lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(_req, { params }) {
  try {
    await ensureInit();
    const r = await sql`SELECT mime, data FROM images WHERE id = ${params.id}`;
    if (!r.length) return new Response('Not found', { status: 404 });
    const buf = Buffer.from(r[0].data, 'base64');
    return new Response(buf, {
      headers: {
        'Content-Type': r[0].mime || 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (e) {
    return new Response('Error: ' + e.message, { status: 500 });
  }
}
