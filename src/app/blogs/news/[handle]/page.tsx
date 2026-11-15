import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LegacyDocument } from '@/components/seo/LegacyDocument';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { LEGACY_SEO_PAGES, legacySeoPage } from '@/data/legacySeo';
import { legacyMetadata, withCanonical } from '@/seo/legacyMetadata';

type RouteParams = { params: Promise<{ handle: string }> };

export const dynamicParams = false;

const articleFor = (handle: string) =>
  legacySeoPage(`/blogs/news/${handle}`) || legacySeoPage(`/blogs/${handle}`);

export function generateStaticParams() {
  const handles = new Set<string>();
  for (const page of LEGACY_SEO_PAGES) {
    const parts = page.path.split('/').filter(Boolean);
    if (parts[0] !== 'blogs') continue;
    if (parts.length === 2 && parts[1] !== 'news') handles.add(parts[1]);
    if (parts[0] === 'blogs' && parts[1] === 'news' && parts[2]) handles.add(parts[2]);
  }
  return [...handles].map((handle) => ({ handle }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { handle } = await params;
  const page = articleFor(handle);
  if (!page) return {};
  return withCanonical(legacyMetadata(page), `${SITE_CONFIG.domain}/blogs/news/${handle}`);
}

export default async function NewsArticlePage({ params }: RouteParams) {
  const { handle } = await params;
  const page = articleFor(handle);
  if (!page) notFound();
  return <LegacyDocument page={{ ...page, path: `/blogs/news/${handle}`, canonical: `${SITE_CONFIG.domain}/blogs/news/${handle}` }} />;
}
