import { NextRequest } from 'next/server';

/**
 * Détecte le code pays depuis l'IP du client
 * Utilise la même logique que le middleware pour la cohérence
 */
export async function detectCountryFromIP(request: NextRequest): Promise<string | null> {
  try {
    // Récupérer l'IP réelle (prend en compte les proxies/VPN)
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIP = request.headers.get('x-real-ip');
    let clientIP = forwardedFor?.split(',')[0]?.trim() || realIP || null;
    
    // Mode développement : utiliser une IP simulée depuis l'en-tête personnalisé
    if (process.env.NODE_ENV === 'development') {
      const testIP = request.headers.get('x-test-ip');
      if (testIP) {
        clientIP = testIP;
        console.log(`[Geo Utils] [DEV] Using test IP: ${clientIP}`);
      }
    }
    
    // Si pas d'IP disponible ou IP locale, on ne peut pas détecter via IP
    if (!clientIP || clientIP === '127.0.0.1' || clientIP.startsWith('192.168.') || clientIP.startsWith('10.') || clientIP.startsWith('172.')) {
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Geo Utils] Local IP detected (${clientIP}), skipping IP detection`);
      }
      return null;
    }

    console.log(`[Geo Utils] Detecting country for IP: ${clientIP}`);

    // Utiliser ipapi.co pour la géolocalisation (gratuit, 1000 req/jour)
    const response = await fetch(`https://ipapi.co/${clientIP}/country/`, {
      headers: {
        'User-Agent': 'GigaBonus-GeoUtils/1.0'
      },
      // Timeout pour éviter les attentes trop longues
      signal: AbortSignal.timeout(3000)
    });

    if (response.ok) {
      const countryCode = (await response.text()).trim().toUpperCase();
      
      if (countryCode && countryCode.length === 2) {
        console.log(`[Geo Utils] ✓ IP ${clientIP} → Country ${countryCode}`);
        return countryCode;
      } else {
        console.log(`[Geo Utils] ✗ IP ${clientIP} → Invalid country code: ${countryCode}`);
      }
    } else {
      console.warn(`[Geo Utils] ✗ Failed to fetch country for IP ${clientIP}: ${response.status}`);
    }
  } catch (error) {
    // En cas d'erreur (timeout, réseau, etc.)
    console.warn('[Geo Utils] ✗ Error:', error instanceof Error ? error.message : error);
  }
  
  return null;
}
