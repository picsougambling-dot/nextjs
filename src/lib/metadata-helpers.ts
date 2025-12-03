import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

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
  const canonicalUrl = `${baseUrl}/${locale}${canonicalPath}`;
  
  // Générer les URLs pour toutes les langues
  const languages: Record<string, string> = {};
  siteConfig.locales.forEach((loc) => {
    languages[loc] = `${baseUrl}/${loc}${canonicalPath}`;
  });

  return {
    title: metadata.title,
    description: metadata.description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: languages,
    },
    openGraph: {
      type: "website",
      locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : locale === 'de' ? 'de_DE' : locale === 'es' ? 'es_ES' : 'ru_RU',
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

