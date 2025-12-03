import { getRequestConfig } from 'next-intl/server';
import { siteConfig } from './src/config/site';

export default getRequestConfig(async ({ locale }) => {
  // Utiliser la locale par défaut si undefined
  const validLocale = locale || siteConfig.defaultLocale;
  
  // Valider que la locale est supportée
  if (!siteConfig.locales.includes(validLocale as any)) {
    throw new Error(`Unsupported locale: ${validLocale}`);
  }
  
  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default
  };
});

export const locales = siteConfig.locales;
export const defaultLocale = siteConfig.defaultLocale;

