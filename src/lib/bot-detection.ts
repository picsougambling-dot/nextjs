import { headers } from 'next/headers';

/**
 * Détecte si la requête provient d'un bot/crawler
 * Utilisé pour désactiver le disclaimer pour PageSpeed Insights, Googlebot, etc.
 * Note: Dans Next.js 15, headers() retourne une Promise
 */
export async function isBot(): Promise<boolean> {
  try {
    const headersList = await headers();
    const userAgent = headersList.get('user-agent')?.toLowerCase() || '';
    
    const botPatterns = [
      'googlebot',
      'google page speed',
      'lighthouse',
      'pagespeed',
      'gtmetrix',
      'pingdom',
      'bingbot',
      'slurp',
      'duckduckbot',
      'baiduspider',
      'yandexbot',
      'sogou',
      'exabot',
      'facebot',
      'ia_archiver',
      'ahrefsbot',
      'semrushbot',
      'dotbot',
      'mj12bot',
      'megaindex',
      'blexbot',
      'petalbot',
      'headless',
      'phantomjs',
      'selenium',
      'webdriver',
      'crawler',
      'spider',
      'bot',
      // Patterns spécifiques PageSpeed Insights
      'chrome-lighthouse',
      'page speed',
      'psi',
    ];
    
    return botPatterns.some(pattern => userAgent.includes(pattern));
  } catch (error) {
    // En cas d'erreur (ex: headers() appelé côté client), retourner false
    return false;
  }
}
