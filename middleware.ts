import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value; 
  console.log(token);
  const path = request.nextUrl.pathname;

  const isPublic = path === '/';

  if (isPublic && token) {
   
    return NextResponse.redirect(new URL('/home', request.url));
  }

  if (!isPublic && !token) {
   
    const loginUrl = new URL('/', request.url);
    return NextResponse.redirect(loginUrl);
  }

 
  return NextResponse.next();
}

export const config = {
    matcher: ['/home', '/home/(.*)'],
  };