import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const adminPassword = process.env.ADMIN_PASSWORD || 'kalai2026';

    if (password === adminPassword) {
      const response = NextResponse.json({ success: true, message: 'Authentication successful.' });
      
      // Set secure HTTP-only cookie for admin session
      response.cookies.set({
        name: 'kalai_admin_token',
        value: 'authenticated_perumal_admin_session',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 86400 * 7, // 7 days
        path: '/',
      });

      return response;
    } else {
      return NextResponse.json({ error: 'Invalid admin passcode. Access denied.' }, { status: 401 });
    }
  } catch {
    return NextResponse.json({ error: 'Server error during authentication.' }, { status: 500 });
  }
}
