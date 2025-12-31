'use client';

import { useEffect } from "react";
import Head from "next/head";
import SchemaOrg from "./SchemaOrg";
import { pageTitles } from "@/data/pageTitles";
import { siteConfig } from "@/config/site";
import { pathnames } from "@/i18n/pathnames";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  schema?: any;
  locale?: string;
}

// Helper pour obtenir le pathname traduit
function getTranslatedPath(path: string, locale: string): string {
  if (path === '/' || path.startsWith('/blog')) {
    return path;
  }
  const translated = pathnames[path as keyof typeof pathnames]?.[locale as keyof typeof pathnames[string]];
  return translated || path;
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  schema,
  locale = 'en',
}: SEOHeadProps) {
  const robotsContent =
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  const canonicalPath = (() => {
    try {
      const url = canonical
        ? new URL(canonical, canonical.startsWith("http") ? undefined : "https://gigabonus.win")
        : new URL("https://gigabonus.win/");
      let path = url.pathname || "/";
      // Retirer le préfixe de locale si présent (toutes les langues supportées)
      const localeMatch = path.match(/^\/(en|fr|de|es|ru|it|br|pt|nl|lv|fi)(\/|$)/);
      if (localeMatch) {
        path = path.slice(localeMatch[0].length - 1) || "/";
      }
      if (path.length > 1 && path.endsWith("/")) {
        path = path.slice(0, -1);
      }
      return path || "/";
    } catch {
      return "/";
    }
  })();

  const mappedTitle = pageTitles[canonicalPath];
  const finalTitle = mappedTitle ?? title;
  const finalOgTitle = ogTitle || finalTitle;
  const finalTwitterTitle = twitterTitle || finalTitle;

  // Générer les URLs hreflang pour toutes les langues
  const hreflangUrls: Array<{ href: string; hreflang: string }> = [];
  const baseUrl = siteConfig.url;
  
  // Utiliser le pathname original (basé sur fr) pour trouver toutes les traductions
  // Si le path actuel est traduit, on doit trouver le path original
  let originalPath = canonicalPath;
  
  // Si le path actuel n'est pas dans pathnames, chercher s'il est une traduction
  if (!pathnames[canonicalPath as keyof typeof pathnames]) {
    // Chercher le path original
    for (const [original, translations] of Object.entries(pathnames)) {
      if (Object.values(translations).includes(canonicalPath)) {
        originalPath = original;
        break;
      }
    }
  }
  
  // Générer les hreflang avec les URLs traduites
  siteConfig.locales.forEach((loc) => {
    const translatedPath = getTranslatedPath(originalPath, loc);
    hreflangUrls.push({
      href: `${baseUrl}/${loc}${translatedPath}`,
      hreflang: loc,
    });
  });

  // Update document.title client-side for App Router compatibility
  useEffect(() => {
    document.title = finalTitle;
  }, [finalTitle]);

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsContent} />

      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={twitterDescription || description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      <link rel="canonical" href={canonical} />
      
      {/* Balises hreflang pour toutes les langues */}
      {hreflangUrls.map(({ href, hreflang }) => (
        <link key={hreflang} rel="alternate" hrefLang={hreflang} href={href} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en${getTranslatedPath(originalPath, 'en')}`} />

      {schema && <SchemaOrg schema={schema} />}
    </Head>
  );
}


