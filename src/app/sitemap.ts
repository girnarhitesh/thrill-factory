import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/blogs';
import { SITE_CONFIG } from '@/constants/siteConfig';

const STATIC_ROUTES: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/activities/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/combos/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/blogs/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/packages/', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/kids-zone/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/corporate/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/safety/', priority: 0.6, changeFrequency: 'monthly' },
];

const publishedDate = (value: string) => {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_CONFIG.domain}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const guides: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_CONFIG.domain}/blogs/${post.slug}/`,
    lastModified: publishedDate(post.date) ?? now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...pages, ...guides];
}
