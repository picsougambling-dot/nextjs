import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;
  
  // Sitemap principal uniquement (les sitemaps par locale n'existent pas)
  const sitemaps = [
    `${baseUrl}/sitemap.xml`,
  ];
  
  return {
    rules: [
      {
        userAgent: '*',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/*.json$',
          '/*?*utm_*',
          '/*?*ref=*',
        ],
      },
      {
        userAgent: 'Googlebot',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
        ],
      },
      {
        userAgent: 'Bingbot',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
        ],
      },
    ],
    sitemap: sitemaps,
  };
}

