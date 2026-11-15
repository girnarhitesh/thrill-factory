import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/blogs';
import { LEGACY_SEO_PAGES } from '@/data/legacySeo';
import { SITE_CONFIG } from '@/constants/siteConfig';

export const dynamic = 'force-static';

const ROUTES = [
  '/',
  '/activities',
  '/combos',
  '/kids-zone',
  '/packages',
  '/safety',
  '/contact',
  '/corporate',
  '/blogs',
  '/products/bungee-jumping',
  '/products/giant-swing',
  '/collections/extreme-adventure',
  '/collections/all-adventures',
  '/collections/all',
  '/pages/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = ROUTES.map((path) => ({
    url: `${SITE_CONFIG.domain}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }));

  const guideSlugs = new Set(BLOG_POSTS.map((post) => post.slug));
  for (const page of LEGACY_SEO_PAGES) {
    const parts = page.path.split('/').filter(Boolean);
    if (parts[0] === 'blogs' && parts.length === 2 && parts[1] !== 'news') {
      guideSlugs.add(parts[1]);
    }
  }

  const guides: MetadataRoute.Sitemap = [...guideSlugs].map((slug) => ({
    url: `${SITE_CONFIG.domain}/blogs/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...pages, ...guides];
}
