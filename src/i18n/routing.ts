import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { siteConfig } from '@/config/site';
import { pathnames } from './pathnames';

export const routing = defineRouting({
  // Liste des locales supportées
  locales: siteConfig.locales,
  
  // Locale par défaut
  defaultLocale: siteConfig.defaultLocale,
  
  // Préfixe de locale toujours présent dans l'URL
  localePrefix: 'always',
  
  // Détection automatique de la langue
  localeDetection: true,
  
  // Pathnames traduits
  pathnames,
});

// Export pour compatibilité - créer la navigation avec le routing
export const { Link, redirect, usePathname, useRouter, getPathname } = 
  createNavigation(routing);


