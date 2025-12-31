import { pathnames } from '@/i18n/pathnames';

/**
 * Obtient l'URL canonique traduite pour une locale donnée
 * @param originalPath Le pathname original (basé sur fr, ex: '/astuces-casino')
 * @param locale La locale cible
 * @returns L'URL canonique complète avec le pathname traduit
 */
export function getTranslatedCanonical(originalPath: string, locale: string): string {
  const baseUrl = 'https://gigabonus.win';
  
  // Si c'est la racine ou une page blog, retourner tel quel
  if (originalPath === '/' || originalPath.startsWith('/blog')) {
    return `${baseUrl}/${locale}${originalPath}`;
  }

  // Obtenir le pathname traduit
  const translated = pathnames[originalPath as keyof typeof pathnames]?.[locale as keyof typeof pathnames[string]];
  const finalPath = translated || originalPath;
  
  return `${baseUrl}/${locale}${finalPath}`;
}

