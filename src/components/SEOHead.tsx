'use client';

import { useEffect } from "react";
import Head from "next/head";
import SchemaOrg from "./SchemaOrg";
import { pageTitles } from "@/data/pageTitles";

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
}: SEOHeadProps) {
  const robotsContent =
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  const canonicalPath = (() => {
    try {
      const url = canonical
        ? new URL(canonical, canonical.startsWith("http") ? undefined : "https://gigabonus.win")
        : new URL("https://gigabonus.win/");
      let path = url.pathname || "/";
      // Retirer le préfixe de locale si présent
      const localeMatch = path.match(/^\/(fr|en|de|es|ru)(\/|$)/);
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

      {schema && <SchemaOrg schema={schema} />}
    </Head>
  );
}


