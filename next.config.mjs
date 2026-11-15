/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  productionBrowserSourceMaps: true,
  experimental: {
    inlineCss: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.shopify.com' },
    ],
  },
  trailingSlash: false,
  async redirects() {
    return [
      { source: '/collections/moderate-adventure', destination: '/activities', statusCode: 301 },
      { source: '/collections/entertainment-adventure', destination: '/activities', statusCode: 301 },
      { source: '/collections/vr-zone', destination: '/activities', statusCode: 301 },
      { source: '/collections/kids-zone', destination: '/kids-zone', statusCode: 301 },
      { source: '/collections/save-more', destination: '/combos', statusCode: 301 },
      { source: '/collections/rope-bungee-combo', destination: '/combos', statusCode: 301 },
      { source: '/pages/corporate', destination: '/corporate', statusCode: 301 },
      { source: '/products/:slug((?!bungee-jumping$|giant-swing$).*)', destination: '/activities', statusCode: 301 },
      { source: '/collections/:slug((?!extreme-adventure$|all-adventures$|all$).*)', destination: '/activities', statusCode: 301 },
      { source: '/pages/:slug((?!contact$).*)', destination: '/', statusCode: 301 },
    ];
  },
};

export default nextConfig;
