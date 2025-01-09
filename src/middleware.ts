import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const userSession = request.cookies.get('user')?.value;

  if (!userSession && request.nextUrl.pathname !== '/login') {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  if (userSession && request.nextUrl.pathname === '/login') {
    const url = request.nextUrl.clone();
    url.pathname = '/home';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/home', '/login'],
};
