/** @type {import('next').NextConfig} */
import fs from 'fs';

const legacySource = fs.readFileSync(new URL('./src/data/legacySeo.ts', import.meta.url), 'utf8');
const oldBlogRedirects = [...legacySource.matchAll(/"path": "\/blogs\/(?!news\/|news")([^"]+)"/g)].map((match) => ({
  source: `/blogs/${match[1]}`,
  destination: `/blogs/news/${match[1]}`,
  statusCode: 301,
}));

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
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      { source: '/contact', destination: '/pages/contact', statusCode: 301 },
      {
        source: '/products/indias-highest-bungee-120m',
        destination: '/products/indias-highest-bungee',
        statusCode: 301,
      },
      { source: '/pages/corporate', destination: '/corporate', statusCode: 301 },
      { source: '/blogs', destination: '/blogs/news', statusCode: 301 },
      {
        source: '/blogs/ziplining-in-uttarakhand-every-zipline-worth-doing-in-rishikesh',
        destination: '/blogs/news/ziplining-in-uttarakhand-2026-every-zipline-worth-doing',
        statusCode: 301,
      },
      ...oldBlogRedirects,
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [{ source: '/:path+/', destination: '/:path+' }],
    };
  },
};

export default nextConfig;
