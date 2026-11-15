import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { LEGACY_SEO_PAGES, legacySeoPage } from '@/data/legacySeo';
import { legacyMetadata, withCanonical } from '@/seo/legacyMetadata';

type RouteParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  const slugs = new Set<string>();
  for (const page of LEGACY_SEO_PAGES) {
    const parts = page.path.split('/').filter(Boolean);
    if (parts[0] === 'blogs' && parts.length === 2 && parts[1] !== 'news') slugs.add(parts[1]);
  }
  return [...slugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const canonical = `${SITE_CONFIG.domain}/blogs/news/${slug}`;
  const page = legacySeoPage(`/blogs/${slug}`) || legacySeoPage(`/blogs/news/${slug}`);
  if (!page) return {};
  return withCanonical(legacyMetadata(page), canonical);
}

export default function BlogSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
