/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Skip Next.js built-in lint during production builds (handled via ESLint CLI separately)
    ignoreDuringBuilds: true,
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
          default: false,
          vendors: false,
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
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;

