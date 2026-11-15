import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/blogs';
import { LEGACY_SEO_PAGES } from '@/data/legacySeo';
import { SITE_CONFIG } from '@/constants/siteConfig';

export const dynamic = 'force-static';

const SKIP = new Set(['/pages/test', '/pages/corporate']);

const EXTRA = ['/activities', '/combos', '/kids-zone', '/packages', '/safety', '/corporate'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const published = new Map(BLOG_POSTS.map((post) => [`/blogs/news/${post.slug}`, post.date]));
  const paths = new Set<string>();

  for (const page of LEGACY_SEO_PAGES) {
    if (SKIP.has(page.path)) continue;
    if (page.path.startsWith('/blogs/') && !page.path.startsWith('/blogs/news')) {
      paths.add(`/blogs/news/${page.path.split('/').pop()}`);
      continue;
    }
    paths.add(page.path);
  }

  for (const path of EXTRA) paths.add(path);

  return [...paths].map((path) => ({
    url: `${SITE_CONFIG.domain}${path === '/' ? '/' : path}`,
    lastModified: published.get(path) ? new Date(`${published.get(path)}T00:00:00.000Z`) : now,
    changeFrequency: path.startsWith('/blogs/news/') ? 'monthly' : 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
