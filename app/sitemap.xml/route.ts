import { NextResponse } from 'next/server';
import { siteConfig, type Locale } from '@/config/site';
import { getTranslatedPathname } from '@/i18n/pathnames';

// FORCER le rendu statique et empêcher toute injection de scripts
export const dynamic = 'force-static';
export const runtime = 'edge';

// Routes principales avec priorités élevées
const mainRoutes = [
  { path: '', priority: 1.0, changeFreq: 'daily' as const },
  { path: '/blog', priority: 0.9, changeFreq: 'daily' as const },
  { path: '/about', priority: 0.8, changeFreq: 'monthly' as const },
];

// Pages guides et outils (priorité haute)
const guideRoutes = [
  { path: '/top-casinos-crypto', priority: 0.9, changeFreq: 'weekly' as const },
  { path: '/casinos-sans-kyc', priority: 0.9, changeFreq: 'weekly' as const },
  { path: '/bonus-cashback', priority: 0.9, changeFreq: 'weekly' as const },
  { path: '/bonus-sans-wager', priority: 0.9, changeFreq: 'weekly' as const },
  { path: '/bonus-sans-depot', priority: 0.9, changeFreq: 'daily' as const },
  { path: '/top-slots-2026', priority: 0.9, changeFreq: 'weekly' as const },
  { path: '/astuces-casino', priority: 0.85, changeFreq: 'monthly' as const },
  { path: '/meilleurs-bookmakers', priority: 0.85, changeFreq: 'weekly' as const },
  { path: '/depot', priority: 0.85, changeFreq: 'monthly' as const },
  { path: '/calculateur-roulette', priority: 0.8, changeFreq: 'monthly' as const },
  { path: '/calculateur-cotes-sportives', priority: 0.8, changeFreq: 'monthly' as const },
  { path: '/install', priority: 0.7, changeFreq: 'monthly' as const },
];

// Pages casinos (priorité haute)
const casinoRoutes = [
  '/spinstar',
  '/kingschance',
  '/hunnyplay',
  '/luckytrunk',
  '/megawin',
  '/europefortune',
  '/cleobetra',
  '/spindinasty',
  '/i24slots',
  '/magicalspin',
  '/playregal',
  '/vegasplus',
  '/winmachance',
  '/uniquecasino',
  '/cazinostars',
  '/atlantisslots',
  '/casinointense',
  '/luckytreasure',
  '/bonrush',
  '/betify',
  '/rockstar',
  '/slotrush',
  '/spinaura',
  '/hotloot',
  '/roibets',
  '/aphrodite',
  '/madcasino',
  '/kingdom',
  '/hispin',
  '/machance',
  '/slotsandcasino',
  '/31bets',
  '/orionsbet',
  '/jumbabet',
  '/bigdollar',
  '/slotsofvegas',
  '/7kcasino',
  '/spinnycasino',
  '/lunarspins',
  '/freespinza',
  '/onlyspins',
  '/librabet',
];

// Pages méthodes de dépôt (priorité moyenne)
const depositRoutes = [
  '/depot/carte',
  '/depot/crypto',
  '/depot/neosurf',
  '/depot/cashlib',
  '/depot/paysafecard',
  '/depot/virement',
  '/depot/skrill',
  '/depot/neteller',
  '/depot/jetonbank',
  '/depot/mifinity',
];

// Pages blog avis (priorité haute)
const blogRoutes = [
  '/blog/avis-spinstar-2026',
  '/blog/avis-hunnyplay-2026',
  '/blog/avis-luckytrunk-2026',
  '/blog/avis-spinaura-2026',
  '/blog/avis-slotrush-2026',
  '/blog/avis-hotloot-2026',
  '/blog/avis-roibets-2026',
  '/blog/avis-megawin-2026',
  '/blog/avis-rxcasino-2026',
  '/blog/avis-cleobetra-2026',
  '/blog/avis-rockstar-2026',
  '/blog/avis-kingschance-2026',
  '/blog/avis-i24slots-2026',
  '/blog/avis-europefortune-2026',
  '/blog/avis-spindinasty-2026',
  '/blog/avis-magicalspin-2026',
  '/blog/avis-playregal-2026',
  '/blog/avis-vegasplus-2026',
  '/blog/avis-machance-2026',
  '/blog/avis-uniquecasino-2026',
  '/blog/avis-cazinostars-2026',
  '/blog/avis-atlantisslots-2026',
  '/blog/avis-casinointense-2026',
  '/blog/avis-luckytreasure-2026',
  '/blog/avis-bonrush-2026',
  '/blog/avis-betify-2026',
];

// Fonction pour échapper les caractères XML
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Générer le sitemap XML pur (sans aucune injection)
function generateSitemapXML(): string {
  const baseUrl = siteConfig.url;
  const locales = siteConfig.locales;
  const now = new Date().toISOString();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Fonction helper pour créer une entrée sitemap
  const createSitemapEntry = (
    path: string,
    priority: number,
    changeFreq: string,
    translatePath: boolean = true
  ) => {
    locales.forEach((locale) => {
      const translatedPath = translatePath 
        ? getTranslatedPathname(path, locale as Locale)
        : path;
      
      const url = `${baseUrl}/${locale}${translatedPath}`;
      const escapedUrl = escapeXml(url);

      xml += '  <url>\n';
      xml += `    <loc>${escapedUrl}</loc>\n`;
      xml += `    <lastmod>${now}</lastmod>\n`;
      xml += `    <changefreq>${changeFreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;
      xml += '  </url>\n';
    });
  };

  // Routes principales
  mainRoutes.forEach(route => {
    createSitemapEntry(route.path, route.priority, route.changeFreq);
  });

  // Routes guides
  guideRoutes.forEach(route => {
    createSitemapEntry(route.path, route.priority, route.changeFreq);
  });

  // Pages casinos (ne pas traduire les paths)
  casinoRoutes.forEach(path => {
    createSitemapEntry(path, 0.85, 'weekly', false);
  });

  // Pages dépôt
  depositRoutes.forEach(path => {
    createSitemapEntry(path, 0.75, 'monthly');
  });

  // Pages blog
  blogRoutes.forEach(path => {
    createSitemapEntry(path, 0.9, 'weekly');
  });

  xml += '</urlset>';
  return xml;
}

// Route GET qui retourne le XML pur
export async function GET() {
  const xml = generateSitemapXML();

  // Retourner directement le XML avec les headers appropriés
  // AUCUN rendu React, AUCUNE injection de scripts
  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'X-Content-Type-Options': 'nosniff',
      // Empêcher toute injection de scripts
      'X-Frame-Options': 'DENY',
    },
  });
}

