import { NextRequest, NextResponse } from 'next/server';
import { detectCountryFromIP } from '@/lib/geo-utils';

/**
 * API route pour détecter le pays de l'utilisateur depuis son IP
 * Retourne le code pays ISO 2 lettres (ex: 'FR', 'DE', 'ES')
 */
export async function GET(request: NextRequest) {
  try {
    console.log('[Geo API] Headers received:', {
      'x-forwarded-for': request.headers.get('x-forwarded-for'),
      'x-vercel-forwarded-for': request.headers.get('x-vercel-forwarded-for'),
      'x-real-ip': request.headers.get('x-real-ip'),
      'cf-connecting-ip': request.headers.get('cf-connecting-ip'),
    });
    
    const countryCode = await detectCountryFromIP(request);
    
    console.log('[Geo API] Country detected:', countryCode);
    
    return NextResponse.json({
      countryCode: countryCode,
      success: !!countryCode
    });
  } catch (error) {
    console.error('[Geo API] Error:', error);
    return NextResponse.json(
      {
        countryCode: null,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
