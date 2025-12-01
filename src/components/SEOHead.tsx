'use client';

import { useEffect } from "react";
import Head from "next/head";
import SchemaOrg from "./SchemaOrg";
import { pageTitles } from "@/data/pageTitles";
import { siteConfig } from "@/config/site";

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

  const canonicalUrl = (() => {
    if (!canonical) return siteConfig.url;
    if (canonical.startsWith("http")) return canonical;
    if (canonical.startsWith("/")) return `${siteConfig.url}${canonical}`;
    return `${siteConfig.url}/${canonical}`;
  })();

  const canonicalPath = (() => {
    try {
      const url = new URL(canonicalUrl);
      let path = url.pathname || "/";
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

  const resolveAssetUrl = (value?: string) => {
    if (!value) return undefined;
    if (value.startsWith("http")) return value;
    if (value.startsWith("/")) return `${siteConfig.url}${value}`;
    return `${siteConfig.url}/${value}`;
  };

  const finalOgImage = resolveAssetUrl(ogImage);

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
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      {finalOgImage && <meta property="og:image" content={finalOgImage} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={twitterDescription || description} />
      {finalOgImage && <meta name="twitter:image" content={finalOgImage} />}

      <link rel="canonical" href={canonicalUrl} />

      {schema && <SchemaOrg schema={schema} />}
    </Head>
  );
}


