import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const locales = siteConfig.locales;
  const now = new Date();
  
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
    { path: '/top-slots-2025', priority: 0.9, changeFreq: 'weekly' as const },
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
    '/machance',
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
    '/blog/avis-spinstar-2025',
    '/blog/avis-hunnyplay-2025',
    '/blog/avis-luckytrunk-2025',
    '/blog/avis-spinaura-2025',
    '/blog/avis-slotrush-2025',
    '/blog/avis-hotloot-2025',
    '/blog/avis-roibets-2025',
    '/blog/avis-megawin-2025',
    '/blog/avis-rxcasino-2025',
    '/blog/avis-cleobetra-2025',
    '/blog/avis-rockstar-2025',
    '/blog/avis-kingschance-2025',
    '/blog/avis-i24slots-2025',
    '/blog/avis-europefortune-2025',
    '/blog/avis-spindinasty-2025',
    '/blog/avis-magicalspin-2025',
    '/blog/avis-playregal-2025',
    '/blog/avis-vegasplus-2025',
    '/blog/avis-machance-2025',
    '/blog/avis-uniquecasino-2025',
    '/blog/avis-cazinostars-2025',
    '/blog/avis-atlantisslots-2025',
    '/blog/avis-casinointense-2025',
    '/blog/avis-luckytreasure-2025',
    '/blog/avis-bonrush-2025',
    '/blog/avis-betify-2025',
  ];

  // Fonction helper pour créer une entrée sitemap multilingue
  const createSitemapEntry = (
    path: string,
    priority: number = 0.8,
    changeFreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly'
  ) => {
    // Créer une entrée pour chaque locale
    return locales.map((locale) => {
      const url = `${baseUrl}/${locale}${path}`;
      const alternates: Record<string, string> = {};
      
      // Ajouter les URLs alternatives pour toutes les langues
      locales.forEach((loc) => {
        alternates[loc] = `${baseUrl}/${loc}${path}`;
      });

      return {
        url,
        lastModified: now,
        changeFrequency: changeFreq,
        priority,
        alternates: {
          languages: alternates,
        },
      };
    });
  };

  // Combiner toutes les routes
  const allRoutes: MetadataRoute.Sitemap = [];
  
  mainRoutes.forEach(route => {
    allRoutes.push(...createSitemapEntry(route.path, route.priority, route.changeFreq));
  });
  
  guideRoutes.forEach(route => {
    allRoutes.push(...createSitemapEntry(route.path, route.priority, route.changeFreq));
  });
  
  casinoRoutes.forEach(path => {
    allRoutes.push(...createSitemapEntry(path, 0.85, 'weekly'));
  });
  
  depositRoutes.forEach(path => {
    allRoutes.push(...createSitemapEntry(path, 0.75, 'monthly'));
  });
  
  blogRoutes.forEach(path => {
    allRoutes.push(...createSitemapEntry(path, 0.9, 'weekly'));
  });

  return allRoutes;
}

