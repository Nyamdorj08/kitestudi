import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminPassword, getSessionToken, ADMIN_COOKIE_NAME } from 'src/lib/admin-auth';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (!verifyAdminPassword(password)) {
      return NextResponse.json({ message: 'Нууц үг буруу байна' }, { status: 401 });
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set(ADMIN_COOKIE_NAME, getSessionToken(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return res;
  } catch {
    return NextResponse.json({ message: 'Алдаа гарлаа' }, { status: 500 });
  }
}
