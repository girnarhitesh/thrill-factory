import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ContactPage from '@/app/contact/page';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { legacySeoPage } from '@/data/legacySeo';
import { legacyMetadata, withCanonical } from '@/seo/legacyMetadata';

type RouteParams = { params: Promise<{ handle: string }> };

export function generateStaticParams() {
  return [{ handle: 'contact' }];
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { handle } = await params;
  if (handle !== 'contact') return {};
  const page = legacySeoPage('/pages/contact');
  const canonical = `${SITE_CONFIG.domain}/pages/contact`;
  return page ? withCanonical(legacyMetadata(page), canonical) : { alternates: { canonical } };
}

export default async function StaticPage({ params }: RouteParams) {
  const { handle } = await params;
  if (handle === 'contact') return <ContactPage />;
  notFound();
}
