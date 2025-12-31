import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { getPathname } from '@/i18n/routing';
import { pathnames } from '@/i18n/pathnames';

// Helper pour obtenir le pathname traduit
function getTranslatedPath(path: string, locale: string): string {
  // Si c'est la racine ou une page blog, retourner tel quel
  if (path === '/' || path.startsWith('/blog')) {
    return path;
  }

  // Chercher dans les pathnames traduits
  const translated = pathnames[path as keyof typeof pathnames]?.[locale as keyof typeof pathnames[string]];
  if (translated) {
    return translated;
  }

  // Si pas de traduction, retourner le pathname original
  return path;
}

export function generateMultilingualMetadata(
  locale: string,
  path: string,
  metadata: {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
  }
): Metadata {
  const baseUrl = siteConfig.url;
  const canonicalPath = metadata.canonical || path;
  
  // Obtenir le pathname traduit pour la locale actuelle
  const translatedPath = getTranslatedPath(canonicalPath, locale);
  const canonicalUrl = `${baseUrl}/${locale}${translatedPath}`;
  
  // Générer les URLs traduites pour toutes les langues (hreflang)
  const languages: Record<string, string> = {};
  siteConfig.locales.forEach((loc) => {
    const translatedPathForLocale = getTranslatedPath(canonicalPath, loc);
    languages[loc] = `${baseUrl}/${loc}${translatedPathForLocale}`;
  });

  // Mapping des locales pour OpenGraph
  const ogLocaleMap: Record<string, string> = {
    'fr': 'fr_FR',
    'en': 'en_US',
    'de': 'de_DE',
    'es': 'es_ES',
    'ru': 'ru_RU',
    'it': 'it_IT',
    'br': 'pt_BR',
    'pt': 'pt_PT',
    'nl': 'nl_NL',
    'lv': 'lv_LV',
    'fi': 'fi_FI',
  };

  return {
    title: metadata.title,
    description: metadata.description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: languages, // hreflang automatique
    },
    openGraph: {
      type: "website",
      locale: ogLocaleMap[locale] || locale,
      url: canonicalUrl,
      siteName: siteConfig.name,
      title: metadata.title,
      description: metadata.description,
      images: metadata.ogImage ? [
        {
          url: metadata.ogImage,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: metadata.ogImage ? [metadata.ogImage] : undefined,
    },
  };
}

