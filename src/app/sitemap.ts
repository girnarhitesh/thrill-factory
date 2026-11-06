import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/blogs';
import { LEGACY_SEO_PAGES } from '@/data/legacySeo';
import { SITE_CONFIG } from '@/constants/siteConfig';

export const dynamic = 'force-static';

const EXTRA_ROUTES = [
  '/activities/',
  '/combos/',
  '/kids-zone/',
  '/safety/',
  '/packages/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const legacyUrls = new Set(LEGACY_SEO_PAGES.map((page) => page.canonical));

  const legacy: MetadataRoute.Sitemap = LEGACY_SEO_PAGES.map((page) => ({
    url: page.canonical,
    lastModified: now,
    changeFrequency: page.kind === 'article' ? 'monthly' : 'weekly',
    priority: page.path === '/' ? 1 : page.kind === 'product' ? 0.8 : 0.7,
  }));

  const extras: MetadataRoute.Sitemap = EXTRA_ROUTES.filter(
    (path) => !legacyUrls.has(`${SITE_CONFIG.domain}${path.replace(/\/$/, '')}`) && !legacyUrls.has(`${SITE_CONFIG.domain}${path}`),
  ).map((path) => ({
    url: `${SITE_CONFIG.domain}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const guides: MetadataRoute.Sitemap = BLOG_POSTS.flatMap((post) => {
    const legacyPath = `/blogs/news/${post.slug}`;
    const directPath = `/blogs/${post.slug}`;
    if (LEGACY_SEO_PAGES.some((page) => page.path === legacyPath || page.path === directPath)) return [];
    return [
      {
        url: `${SITE_CONFIG.domain}${directPath}/`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      },
    ];
  });

  return [...legacy, ...extras, ...guides];
}
