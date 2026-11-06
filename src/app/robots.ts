import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/constants/siteConfig';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin',
        '/cart',
        '/checkout',
        '/checkouts/',
        '/orders',
        '/account',
        '/search',
        '/collections/*sort_by*',
        '/collections/*+*',
        '/collections/*%2B*',
        '/collections/*%2b*',
        '/*/collections/*filter*&*filter*',
      ],
    },
    sitemap: `${SITE_CONFIG.domain}/sitemap.xml`,
    host: SITE_CONFIG.domain,
  };
}
