import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { BLOG_POSTS } from '@/data/blogs';

const STATIC_ROUTES: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/activities/', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/combos/', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/packages/', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/kids-zone/', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/corporate/', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/blogs/', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/safety/', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/contact/', changeFrequency: 'monthly', priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = STATIC_ROUTES.map((route) => ({
    url: `${SITE_CONFIG.domain}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const guides = BLOG_POSTS.map((post) => ({
    url: `${SITE_CONFIG.domain}/blogs/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...pages, ...guides];
}
