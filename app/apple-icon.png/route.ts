import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  // Rediriger vers le fichier statique dans public/
  const baseUrl = request.nextUrl.origin;
  return NextResponse.redirect(new URL('/apple-icon.png', baseUrl), 301);
}

