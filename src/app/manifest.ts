import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/constants/siteConfig';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.brandName,
    short_name: SITE_CONFIG.shortName,
    description: SITE_CONFIG.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1c1c1c',
    icons: [
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/images/tf-favicon.png',
        sizes: '64x64',
        type: 'image/png',
      },
    ],
  };
}
