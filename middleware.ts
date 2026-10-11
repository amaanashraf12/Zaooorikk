import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const country = request.geo?.country || 'US';
  const response = NextResponse.next();
  if (country === 'IN') {
    response.headers.set('x-display-currency', 'INR');
  } else {
    response.headers.set('x-display-currency', 'USD');
  }
  return response;
}

export const config = { matcher: '/' };
