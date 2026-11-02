import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LegacyDocument } from '@/components/seo/LegacyDocument';
import { LEGACY_SEO_PAGES, legacySeoPage } from '@/data/legacySeo';
import { legacyMetadata } from '@/seo/legacyMetadata';

type RouteParams = { params: Promise<{ handle: string }> };

export function generateStaticParams() {
  return LEGACY_SEO_PAGES.filter((page) => page.kind === 'collection').map((page) => ({
    handle: page.path.split('/').pop() || '',
  }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { handle } = await params;
  const page = legacySeoPage(`/collections/${handle}`);
  return page ? legacyMetadata(page) : {};
}

export default async function CollectionPage({ params }: RouteParams) {
  const { handle } = await params;
  const page = legacySeoPage(`/collections/${handle}`);
  if (!page) notFound();
  return <LegacyDocument page={page} />;
}
