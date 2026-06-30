import { NextResponse } from 'next/server';
import { signToken } from '../../_lib/auth';

export const runtime = 'nodejs';

export async function POST(req) {
  const { username, password } = await req.json().catch(() => ({}));
  if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
    return NextResponse.json({ token: signToken({ u: username }) });
  }
  return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
}
