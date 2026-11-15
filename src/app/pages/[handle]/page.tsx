import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ContactPage from '@/app/contact/page';
import { LegacyDocument } from '@/components/seo/LegacyDocument';
import { LEGACY_SEO_PAGES, legacySeoPage } from '@/data/legacySeo';
import { legacyMetadata } from '@/seo/legacyMetadata';

const SKIPPED = new Set(['test', 'corporate']);

type RouteParams = { params: Promise<{ handle: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return LEGACY_SEO_PAGES.filter((page) => page.path.startsWith('/pages/'))
    .map((page) => page.path.split('/').pop() || '')
    .filter((handle) => handle && !SKIPPED.has(handle))
    .map((handle) => ({ handle }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { handle } = await params;
  if (SKIPPED.has(handle)) return {};
  const page = legacySeoPage(`/pages/${handle}`);
  return page ? legacyMetadata(page) : {};
}

export default async function StaticPage({ params }: RouteParams) {
  const { handle } = await params;
  if (SKIPPED.has(handle)) notFound();
  const page = legacySeoPage(`/pages/${handle}`);
  if (!page) notFound();
  if (handle === 'contact') return <ContactPage />;
  return <LegacyDocument page={page} />;
}
