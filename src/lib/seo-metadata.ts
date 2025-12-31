import { Metadata } from 'next';

export interface SEOConfig {
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

export function generateMetadata(config: SEOConfig): Metadata {
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    alternates: {
      canonical: config.canonical,
    },
    openGraph: {
      title: config.ogTitle || config.title,
      description: config.ogDescription || config.description,
      url: config.canonical,
      siteName: 'GigaBonus',
      type: 'website',
      images: config.ogImage ? [
        {
          url: config.ogImage,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: config.twitterTitle || config.title,
      description: config.twitterDescription || config.description,
      images: config.ogImage ? [config.ogImage] : undefined,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}



