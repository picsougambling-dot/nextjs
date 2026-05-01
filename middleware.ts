import { NextRequest, NextResponse } from 'next/server';
import { siteConfig } from './src/config/site';

const LOCALES = siteConfig.locales as readonly string[];
const DEFAULT_LOCALE = siteConfig.defaultLocale;

const COUNTRY_TO_LOCALE: Record<string, string> = {
  FR: 'fr', BE: 'fr',
  US: 'en', GB: 'en', UK: 'en', CA: 'en', AU: 'en', NZ: 'en', IE: 'en',
  NL: 'nl', FI: 'fi', LV: 'lv',
  DE: 'de', AT: 'de', CH: 'de',
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es',
  RU: 'ru', BY: 'ru', KZ: 'ru',
  IT: 'it', SM: 'it', VA: 'it',
  BR: 'br', PT: 'pt',
};

function detectLocaleFromAcceptLanguage(header: string | null): string {
  if (!header) return DEFAULT_LOCALE;
  const langs = header.toLowerCase().split(',').map(s => s.split(';')[0].trim().slice(0, 2));
  for (const lang of langs) {
    if (LOCALES.includes(lang)) return lang;
  }
  return DEFAULT_LOCALE;
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = (request.headers.get('host') || '').split(':')[0].toLowerCase();

  // 301 gigabonus.fr → bonuscasinoelite.com (migration vers le nouveau site)
  if (hostname === 'gigabonus.fr' || hostname === 'www.gigabonus.fr') {
    return NextResponse.redirect('https://bonuscasinoelite.com', 301);
  }

  // URL already has a locale prefix → pass through
  const hasLocale = LOCALES.some(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  // Detect locale: Vercel geo header → Accept-Language → default
  const country = request.headers.get('x-vercel-ip-country')?.toUpperCase();
  const localeFromGeo = country ? COUNTRY_TO_LOCALE[country] : null;
  const locale = localeFromGeo || detectLocaleFromAcceptLanguage(request.headers.get('accept-language'));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|_not-found|sitemap\\.xml|robots\\.txt|.*\\..*).*)'],
};
