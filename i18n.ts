import { getRequestConfig } from 'next-intl/server';
import { routing } from './src/i18n/routing';
import { siteConfig } from './src/config/site';

export default getRequestConfig(async ({ requestLocale }) => {
  // Utiliser la locale de la requête ou la locale par défaut
  let locale = await requestLocale;
  
  // Valider que la locale est supportée
  if (!locale || !siteConfig.locales.includes(locale as any)) {
    locale = siteConfig.defaultLocale;
  }
  
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    onError: (error: any) => {
      if (error?.code === 'MISSING_MESSAGE') return;
      console.error(error);
    },
    getMessageFallback: ({ key }: { key: string }) => key
  };
});

export const locales = siteConfig.locales;
export const defaultLocale = siteConfig.defaultLocale;

