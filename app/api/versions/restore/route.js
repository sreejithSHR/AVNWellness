import { NextResponse } from 'next/server';
import { restoreVersion } from '../../../_lib/db';
import { requireAuth } from '../../../_lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    requireAuth(req);
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { id } = await req.json().catch(() => ({}));
    if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });
    return NextResponse.json(await restoreVersion(id));
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
