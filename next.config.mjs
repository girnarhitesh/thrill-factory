/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  experimental: {
    inlineCss: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.shopify.com' },
    ],
  },
  trailingSlash: false,
  async headers() {
    const immutable = [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }];
    return [
      { source: '/images/:path*', headers: immutable },
      { source: '/videos/:path*', headers: immutable },
      { source: '/fonts/:path*', headers: immutable },
      { source: '/_next/static/:path*', headers: immutable },
    ];
  },
};

export default nextConfig;
