import { NextResponse } from 'next/server';
import { listVersions } from '../../_lib/db';
import { requireAuth } from '../../_lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req) {
  try {
    requireAuth(req);
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    return NextResponse.json(await listVersions());
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
