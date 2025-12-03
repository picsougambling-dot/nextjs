import { NextRequest, NextResponse } from 'next/server';
import { detectCountryFromIP } from '@/lib/geo-utils';

/**
 * API route pour détecter le pays de l'utilisateur depuis son IP
 * Retourne le code pays ISO 2 lettres (ex: 'FR', 'DE', 'ES')
 */
export async function GET(request: NextRequest) {
  try {
    const countryCode = await detectCountryFromIP(request);
    
    return NextResponse.json({
      countryCode: countryCode,
      success: true
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
