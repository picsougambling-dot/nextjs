import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { siteConfig } from './src/config/site';
import { routing } from './src/i18n/routing';

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
      const locale = countryToLocale[countryCode] || siteConfig.defaultLocale;
      
      if (locale && siteConfig.locales.includes(locale as any)) {
        console.log(`[IP Detection] ✓ IP ${clientIP} → Country ${countryCode} → Locale ${locale}`);
        return locale;
      } else {
        console.log(`[IP Detection] ✗ IP ${clientIP} → Country ${countryCode} → No matching locale in supported locales (fallback to Accept-Language)`);
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

// Créer le middleware next-intl avec détection personnalisée et pathnames traduits
const intlMiddleware = createMiddleware(routing);

// Redirection 301 permanente de www vers non-www (priorité absolue)
function handleWWWRedirect(request: NextRequest): NextResponse | null {
  const hostname = request.headers.get('host') || '';
  
  // Normaliser le hostname (enlever le port si présent et convertir en minuscule)
  const normalizedHost = hostname.split(':')[0].toLowerCase();
  
  // Vérifier si le hostname commence par www.
  if (normalizedHost.startsWith('www.')) {
    // Extraire le domaine sans www
    const domainWithoutWWW = normalizedHost.replace(/^www\./, '');
    
    // Vérifier qu'on ne redirige pas vers le même domaine (éviter les boucles)
    // Si le domaine de destination est le même que l'actuel (sans www), on redirige
    const pathWithQuery = `${request.nextUrl.pathname}${request.nextUrl.search}`;
    
    // Construire l'URL de redirection en utilisant request.nextUrl pour éviter les problèmes
    const url = request.nextUrl.clone();
    url.hostname = domainWithoutWWW;
    url.protocol = 'https:';
    url.port = '';
    
    const redirectUrl = url.toString();
    
    console.log(`[WWW Redirect] 301: ${hostname}${pathWithQuery} → ${redirectUrl}`);
    
    // Redirection 301 permanente
    return NextResponse.redirect(redirectUrl, 301);
  }
  
  return null;
}

// Redirection 301 permanente de gigabonus.fr vers gigabonus.win
// NOTE: Cette redirection ne fonctionnera que si gigabonus.fr est configuré comme domaine sur Vercel
// Si le domaine n'est pas configuré, Vercel retournera 404 avant que le middleware ne s'exécute
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
  
  // Domaine de destination (forcer HTTPS, non-www)
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
// PRIORITÉ : Redirection www (Vercel) > Redirection domaine > IP (pour filtrer les casinos par pays) > Accept-Language
export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // IMPORTANT: Laisser passer sitemap.xml et robots.txt sans traitement
  // Next.js les servira directement via app/sitemap.ts et app/robots.ts
  if (pathname === '/sitemap.xml' || pathname === '/robots.txt') {
    return NextResponse.next();
  }
  
  // NOTE: La redirection www → non-www est gérée par Vercel au niveau infrastructure
  // pour éviter les boucles de redirection. Si tu veux la gérer dans le middleware,
  // il faut désactiver la redirection www dans les paramètres Vercel.
  // 
  // ÉTAPE 1: Vérifier et gérer la redirection www vers non-www (désactivé - géré par Vercel)
  // Décommente les lignes suivantes si tu désactives la redirection www dans Vercel :
  /*
  const wwwRedirect = handleWWWRedirect(request);
  if (wwwRedirect) {
    return wwwRedirect;
  }
  */
  
  // ÉTAPE 2: Vérifier et gérer la redirection de domaine
  const domainRedirect = handleDomainRedirect(request);
  if (domainRedirect) {
    return domainRedirect;
  }
  
  // Si la route a déjà une locale, passer directement au middleware next-intl
  // Il ne devrait pas rediriger car la locale est déjà présente
  const hasLocale = siteConfig.locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (hasLocale) {
    // La locale est déjà dans l'URL, pas de redirection nécessaire
    return intlMiddleware(request);
  }

  // Pour la racine uniquement (pas de locale), PRIORISER la détection IP
  // ATTENTION: Il faut s'assurer qu'on ne boucle pas si detectLocaleFromIP échoue
  if (pathname === '/' || pathname === '') {
    try {
      const localeFromIP = await detectLocaleFromIP(request);
      
      if (localeFromIP && siteConfig.locales.includes(localeFromIP as any)) {
        // Rediriger vers la locale détectée via IP (priorité)
        // Utiliser nextUrl.clone() pour éviter les problèmes de construction d'URL
        const url = request.nextUrl.clone();
        url.pathname = `/${localeFromIP}`;
        console.log(`[Middleware] Redirecting / → /${localeFromIP} based on IP detection`);
        return NextResponse.redirect(url, 307); // 307 pour éviter le cache
      }
    } catch (error) {
      // En cas d'erreur, continuer avec Accept-Language
      console.warn('[Middleware] IP detection failed, using Accept-Language:', error);
    }
    
    // Si pas de détection IP ou erreur, utiliser Accept-Language (fallback)
    console.log('[Middleware] No IP detection, falling back to Accept-Language');
  }

  // Utiliser le middleware next-intl (détection Accept-Language comme fallback)
  // Il va gérer la redirection vers la locale par défaut ou détectée
  return intlMiddleware(request);
}

export const config = {
  // Matcher pour toutes les routes sauf les fichiers statiques, API et _next
  // IMPORTANT: Exclure explicitement sitemap.xml et robots.txt pour que Next.js les serve directement
  matcher: [
    // Exclure les fichiers statiques, API routes, fichiers Next.js internes, routes spéciales SEO
    '/((?!api|_next|_vercel|_not-found|sitemap\\.xml|robots\\.txt|.*\\..*).*)',
    // Inclure la racine pour la détection
    '/'
  ]
};

