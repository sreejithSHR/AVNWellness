import { NextResponse } from 'next/server';
import { getContent, saveContent } from '../../_lib/db';
import { requireAuth } from '../../_lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    return NextResponse.json(await getContent());
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    requireAuth(req);
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const body = await req.json().catch(() => ({}));
    return NextResponse.json(await saveContent(body));
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
