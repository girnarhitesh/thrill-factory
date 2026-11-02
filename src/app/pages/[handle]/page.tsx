import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ContactPage from '@/app/contact/page';
import CorporatePage from '@/app/corporate/page';
import { LegacyDocument } from '@/components/seo/LegacyDocument';
import { LEGACY_SEO_PAGES, legacySeoPage } from '@/data/legacySeo';
import { legacyMetadata } from '@/seo/legacyMetadata';

type RouteParams = { params: Promise<{ handle: string }> };

export function generateStaticParams() {
  return LEGACY_SEO_PAGES.filter((page) => page.path.startsWith('/pages/')).map((page) => ({
    handle: page.path.split('/').pop() || '',
  }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { handle } = await params;
  const page = legacySeoPage(`/pages/${handle}`);
  return page ? legacyMetadata(page) : {};
}

export default async function StaticPage({ params }: RouteParams) {
  const { handle } = await params;
  const page = legacySeoPage(`/pages/${handle}`);
  if (!page) notFound();
  if (handle === 'contact') return <ContactPage />;
  if (handle === 'corporate') return <CorporatePage />;
  return <LegacyDocument page={page} />;
}
