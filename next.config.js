const withNextIntl = require('next-intl/plugin')('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Skip Next.js built-in lint during production builds (handled via ESLint CLI separately)
    ignoreDuringBuilds: true,
  },
  // Redirects 301 pour corriger les 404 et les anciennes URLs
  // Les redirects sont traités AVANT le middleware, donc ils sont prioritaires
  async redirects() {
    const redirects = [];
    
    // Problème identifié: URLs avec locale dupliquée (ex: /de/de/ au lieu de /de/)
    // Génération automatique des redirects pour corriger ces erreurs 404
    
    const locales = ['en', 'fr', 'de', 'es', 'ru', 'it', 'br', 'pt', 'nl', 'lv', 'fi'];
    
    // 1. Redirects pour les méthodes de dépôt avec locale dupliquée
    const depositMethods = {
      'carte': {
        en: '/deposit/card',
        fr: '/depot/carte',
        es: '/deposito/tarjeta',
        de: '/einzahlung/karte',
        ru: '/popolnenie/karta',
        it: '/deposito/carta',
        br: '/deposito/cartao',
        pt: '/deposito/cartao',
        nl: '/storten/kaart',
        lv: '/iemaksa/karte',
        fi: '/tallettaminen/kortti',
      },
      'crypto': {
        en: '/deposit/crypto',
        fr: '/depot/crypto',
        es: '/deposito/cripto',
        de: '/einzahlung/krypto',
        ru: '/popolnenie/kripto',
        it: '/deposito/cripto',
        br: '/deposito/cripto',
        pt: '/deposito/cripto',
        nl: '/storten/crypto',
        lv: '/iemaksa/kripto',
        fi: '/tallettaminen/krypto',
      },
      'cashlib': {
        en: '/deposit/cashlib',
        fr: '/depot/cashlib',
        es: '/deposito/cashlib',
        de: '/einzahlung/cashlib',
        ru: '/popolnenie/cashlib',
        it: '/deposito/cashlib',
        br: '/deposito/cashlib',
        pt: '/deposito/cashlib',
        nl: '/storten/cashlib',
        lv: '/iemaksa/cashlib',
        fi: '/tallettaminen/cashlib',
      },
      'neosurf': {
        en: '/deposit/neosurf',
        fr: '/depot/neosurf',
        es: '/deposito/neosurf',
        de: '/einzahlung/neosurf',
        ru: '/popolnenie/neosurf',
        it: '/deposito/neosurf',
        br: '/deposito/neosurf',
        pt: '/deposito/neosurf',
        nl: '/storten/neosurf',
        lv: '/iemaksa/neosurf',
        fi: '/tallettaminen/neosurf',
      },
      'paysafecard': {
        en: '/deposit/paysafecard',
        fr: '/depot/paysafecard',
        es: '/deposito/paysafecard',
        de: '/einzahlung/paysafecard',
        ru: '/popolnenie/paysafecard',
        it: '/deposito/paysafecard',
        br: '/deposito/paysafecard',
        pt: '/deposito/paysafecard',
        nl: '/storten/paysafecard',
        lv: '/iemaksa/paysafecard',
        fi: '/tallettaminen/paysafecard',
      },
    };
    
    // Générer les redirects pour les méthodes de dépôt
    Object.keys(depositMethods).forEach(method => {
      locales.forEach(locale => {
        redirects.push({
          source: `/${locale}/${locale}/depot/${method}`,
          destination: `/${locale}${depositMethods[method][locale]}`,
          permanent: true,
        });
      });
    });
    
    // 2. Redirects pour top-casinos-crypto avec locale dupliquée
    const topCryptoCasinos = {
      en: '/top-crypto-casinos',
      fr: '/top-casinos-crypto',
      es: '/mejores-casinos-cripto',
      de: '/top-krypto-casinos',
      ru: '/top-kripto-kazino',
      it: '/migliori-casino-cripto',
      br: '/melhores-cassinos-cripto',
      pt: '/melhores-casinos-cripto',
      nl: '/top-crypto-casinos',
      lv: '/top-kripto-kazino',
      fi: '/parhaat-kryptokasinot',
    };
    
    locales.forEach(locale => {
      redirects.push({
        source: `/${locale}/${locale}/top-casinos-crypto`,
        destination: `/${locale}${topCryptoCasinos[locale]}`,
        permanent: true,
      });
    });
    
    // 3. Redirects pour les articles de blog avec locale dupliquée
    const blogArticles = [
      'avis-playregal-2026',
      'avis-magicalspin-2026',
      'avis-vegasplus-2026',
      'avis-uniquecasino-2026',
      'avis-cazinostars-2026',
      'avis-atlantisslots-2026',
      'avis-casinointense-2026',
      'avis-bonrush-2026',
      'avis-betify-2026',
    ];
    
    blogArticles.forEach(article => {
      locales.forEach(locale => {
        redirects.push({
          source: `/${locale}/${locale}/blog/${article}`,
          destination: `/${locale}/blog/${article}`,
          permanent: true,
        });
      });
    });
    
    // 4. Redirects pour la page blog principale avec locale dupliquée
    locales.forEach(locale => {
      redirects.push({
        source: `/${locale}/${locale}/blog`,
        destination: `/${locale}/blog`,
        permanent: true,
      });
    });
    
    return redirects;
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [],
    // Cloudflare Pages nécessite unoptimized pour les images
    unoptimized: process.env.CF_PAGES === '1',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Optimisations pour le SEO
  compress: true,
  poweredByHeader: false,
  // Support des fichiers statiques
  trailingSlash: false,
  // Note: swcMinify est activé par défaut dans Next.js 15, plus besoin de le spécifier
  // Production source maps désactivés pour améliorer les performances
  productionBrowserSourceMaps: false,
  // Optimisations supplémentaires pour la performance
  // Note: optimizeCss nécessite critters, désactivé pour éviter les erreurs de build
  // experimental: {
  //   optimizeCss: true, // Optimisation CSS automatique (nécessite critters)
  // },
  // Headers de sécurité et performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
    ];
  },
  // Configuration pour les assets
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Output pour Cloudflare Pages (désactivé car next-on-pages gère ça)
  // output: process.env.CF_PAGES === '1' ? 'export' : undefined,
  // Optimisation des chunks
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          // React vendor chunk
          reactVendor: {
            name: 'react-vendor',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
            priority: 20,
          },
          // UI vendor chunk
          uiVendor: {
            name: 'ui-vendor',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](@radix-ui)[\\/]/,
            priority: 10,
          },
          // Lucide-react vendor chunk
          lucideVendor: {
            name: 'lucide-vendor',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
            priority: 15,
          },
        },
      };
    }
    return config;
  },
};

module.exports = withNextIntl(nextConfig);

