import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { siteConfig } from './src/config/site';

// Mapping pays -> locale
const countryToLocale: Record<string, string> = {
  'FR': 'fr',
  'BE': 'fr', // Belgique redirigée vers français
  'US': 'en',
  'GB': 'en',
  'UK': 'en', // Royaume-Uni (alias de GB)
  'CA': 'en',
  'AU': 'en',
  'NZ': 'en',
  'IE': 'en',
  'NL': 'nl', // Pays-Bas
  'FI': 'fi', // Finlande
  'LV': 'lv', // Lettonie
  'DE': 'de',
  'AT': 'de',
  'CH': 'de',
  'ES': 'es',
  'MX': 'es',
  'AR': 'es',
  'CO': 'es',
  'CL': 'es',
  'PE': 'es',
  'RU': 'ru',
  'BY': 'ru',
  'KZ': 'ru',
  'IT': 'it',
  'SM': 'it',
  'VA': 'it',
  'BR': 'br',
  'PT': 'pt',
};

// Fonction pour détecter la locale depuis l'IP (géolocalisation)
// PRIORITÉ : IP > Accept-Language (pour filtrer les casinos par pays)
async function detectLocaleFromIP(request: NextRequest): Promise<string | null> {
  try {
    // Récupérer l'IP réelle (prend en compte les proxies/VPN)
    // Les VPN/Proxies passent généralement l'IP via x-forwarded-for ou x-real-ip
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIP = request.headers.get('x-real-ip');
    let clientIP = forwardedFor?.split(',')[0]?.trim() || realIP || null;
    
    // Mode développement : utiliser une IP simulée depuis l'en-tête personnalisé
    // Pour tester avec un VPN, ajoutez un en-tête X-Test-IP dans votre navigateur
    // Exemple avec une extension comme "ModHeader" : X-Test-IP: 8.8.8.8 (US)
    if (process.env.NODE_ENV === 'development') {
      const testIP = request.headers.get('x-test-ip');
      if (testIP) {
        clientIP = testIP;
        console.log(`[IP Detection] [DEV] Using test IP: ${clientIP}`);
      }
    }
    
    // Si pas d'IP disponible ou IP locale, on ne peut pas détecter via IP
    if (!clientIP || clientIP === '127.0.0.1' || clientIP.startsWith('192.168.') || clientIP.startsWith('10.') || clientIP.startsWith('172.')) {
      // En local sans VPN/IP de test, on ne peut pas détecter via IP
      if (process.env.NODE_ENV === 'development') {
        console.log(`[IP Detection] Local IP detected (${clientIP}), skipping IP detection`);
      }
      return null;
    }

    console.log(`[IP Detection] Detecting locale for IP: ${clientIP}`);

    // Utiliser ipapi.co pour la géolocalisation (gratuit, 1000 req/jour)
    // Alternative: ipgeolocation.io, ip-api.com
    const response = await fetch(`https://ipapi.co/${clientIP}/country/`, {
      headers: {
        'User-Agent': 'GigaBonus-Middleware/1.0'
      },
      // Timeout pour éviter les attentes trop longues
      signal: AbortSignal.timeout(3000)
    });

    if (response.ok) {
      const countryCode = (await response.text()).trim().toUpperCase();
      const locale = countryToLocale[countryCode];
      
      if (locale && siteConfig.locales.includes(locale as any)) {
        console.log(`[IP Detection] ✓ IP ${clientIP} → Country ${countryCode} → Locale ${locale}`);
        return locale;
      } else {
        console.log(`[IP Detection] ✗ IP ${clientIP} → Country ${countryCode} → No matching locale (fallback to Accept-Language)`);
      }
    } else {
      console.warn(`[IP Detection] ✗ Failed to fetch country for IP ${clientIP}: ${response.status}`);
    }
  } catch (error) {
    // En cas d'erreur (timeout, réseau, etc.), on ignore et on utilise Accept-Language
    console.warn('[IP Detection] ✗ Error:', error instanceof Error ? error.message : error);
  }
  
  return null;
}

// Créer le middleware next-intl avec détection personnalisée
const intlMiddleware = createMiddleware({
  locales: siteConfig.locales,
  defaultLocale: siteConfig.defaultLocale,
  localePrefix: 'always',
  // Activer la détection automatique de la langue basée sur Accept-Language
  localeDetection: true,
});

// Redirection 301 permanente de gigabonus.fr vers gigabonus.win
function handleDomainRedirect(request: NextRequest): NextResponse | null {
  const hostname = request.headers.get('host') || '';
  
  // Normaliser le hostname (enlever le port si présent et convertir en minuscule)
  const normalizedHost = hostname.split(':')[0].toLowerCase();
  
  // Liste des domaines source à rediriger vers gigabonus.win
  const sourceDomains = [
    'gigabonus.fr',
    'www.gigabonus.fr',
  ];
  
  // Vérifier si le domaine actuel est dans la liste des domaines à rediriger
  const shouldRedirect = sourceDomains.some(domain => {
    return normalizedHost === domain.toLowerCase();
  });
  
  if (!shouldRedirect) {
    return null;
  }
  
  // Domaine de destination (forcer HTTPS)
  const destinationDomain = 'gigabonus.win';
  
  // Construire la nouvelle URL avec le domaine de destination
  // Conserver le chemin complet (pathname) et les paramètres de requête (searchParams)
  const url = request.nextUrl.clone();
  url.hostname = destinationDomain;
  url.protocol = 'https:';
  url.port = ''; // Supprimer le port pour utiliser le port par défaut (443 pour HTTPS)
  
  const redirectUrl = url.toString();
  
  console.log(`[Domain Redirect] 301: ${hostname}${request.nextUrl.pathname}${request.nextUrl.search} → ${redirectUrl}`);
  
  // Redirection 301 permanente
  return NextResponse.redirect(redirectUrl, 301);
}

// Middleware personnalisé qui combine détection IP + Accept-Language
// PRIORITÉ : Redirection domaine > IP (pour filtrer les casinos par pays) > Accept-Language
export default async function middleware(request: NextRequest) {
  // ÉTAPE 1: Vérifier et gérer la redirection de domaine (priorité absolue)
  const domainRedirect = handleDomainRedirect(request);
  if (domainRedirect) {
    return domainRedirect;
  }
  
  const { pathname } = request.nextUrl;
  
  // Si la route a déjà une locale, passer au middleware next-intl
  const hasLocale = siteConfig.locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (hasLocale) {
    return intlMiddleware(request);
  }

  // Pour la racine, PRIORISER la détection IP (pour filtrer les casinos par pays)
  if (pathname === '/') {
    const localeFromIP = await detectLocaleFromIP(request);
    
    if (localeFromIP) {
      // Rediriger vers la locale détectée via IP (priorité)
      console.log(`[Middleware] Redirecting to ${localeFromIP} based on IP detection`);
      return NextResponse.redirect(
        new URL(`/${localeFromIP}`, request.url)
      );
    }
    
    // Si pas de détection IP, utiliser Accept-Language (fallback)
    console.log('[Middleware] No IP detection, falling back to Accept-Language');
  }

  // Utiliser le middleware next-intl (détection Accept-Language comme fallback)
  return intlMiddleware(request);
}

export const config = {
  // Matcher pour toutes les routes sauf les fichiers statiques, API et _next
  matcher: [
    // Exclure les fichiers statiques, API routes, fichiers Next.js internes et routes spéciales
    '/((?!api|_next|_vercel|_not-found|.*\\..*).*)',
    // Inclure la racine pour la détection
    '/'
  ]
};

