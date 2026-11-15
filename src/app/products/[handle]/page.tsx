import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductSpotlight } from '@/components/seo/ProductSpotlight';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { ALL_ADVENTURES_DATA } from '@/data/activities';

const HANDLES = ['bungee-jumping', 'giant-swing'];

type RouteParams = { params: Promise<{ handle: string }> };

const activityFor = (handle: string) =>
  HANDLES.includes(handle)
    ? ALL_ADVENTURES_DATA.find((activity) => activity.slug === handle)
    : undefined;

export function generateStaticParams() {
  return HANDLES.map((handle) => ({ handle }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { handle } = await params;
  const activity = activityFor(handle);
  if (!activity) return {};
  const canonical = `${SITE_CONFIG.domain}/products/${handle}`;
  return {
    title: { absolute: activity.title },
    description: activity.fullDesc,
    alternates: { canonical },
    openGraph: {
      title: activity.title,
      description: activity.fullDesc,
      url: canonical,
      type: 'website',
    },
  };
}

export default async function ProductPage({ params }: RouteParams) {
  const { handle } = await params;
  const activity = activityFor(handle);
  if (!activity) notFound();
  return <ProductSpotlight activity={activity} />;
}
