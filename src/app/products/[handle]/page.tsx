import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LegacyDocument } from '@/components/seo/LegacyDocument';
import { ActivityDetailPage } from '@/components/activities/ActivityDetailPage';
import { ComboDetailPage } from '@/components/activities/ComboDetailPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { ALL_ADVENTURES_DATA } from '@/data/activities';
import { KIDS_ZONE_DATA } from '@/data/kidsZone';
import { ALL_PACKAGES } from '@/data/packages';
import { LEGACY_SEO_PAGES, legacySeoPage } from '@/data/legacySeo';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { absoluteSiteImage, faqSchema, legacyMetadata, productSchema } from '@/seo/legacyMetadata';

type RouteParams = { params: Promise<{ handle: string }> };

export const dynamicParams = false;

const activityForHandle = (handle: string) =>
  ALL_ADVENTURES_DATA.find((activity) => activity.slug === handle || activity.id === handle) ||
  KIDS_ZONE_DATA.find((activity) => activity.slug === handle || activity.id === handle);

const comboForHandle = (handle: string) => ALL_PACKAGES.find((combo) => combo.id === handle);

const freshMetadata = (title: string, description: string, canonical: string, image: string): Metadata => ({
  title: { absolute: `${title} | Thrill Factory` },
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: 'Thrill Factory',
    images: [{ url: absoluteSiteImage(image), alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [absoluteSiteImage(image)],
  },
});

export function generateStaticParams() {
  const handles = new Set<string>();
  LEGACY_SEO_PAGES.filter((page) => page.kind === 'product').forEach((page) => {
    const handle = page.path.split('/').pop();
    if (handle) handles.add(handle);
  });
  ALL_ADVENTURES_DATA.forEach((activity) => handles.add(activity.slug));
  KIDS_ZONE_DATA.forEach((activity) => handles.add(activity.slug));
  ALL_PACKAGES.forEach((combo) => handles.add(combo.id));
  return [...handles].map((handle) => ({ handle }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { handle } = await params;
  const page = legacySeoPage(`/products/${handle}`);
  if (page) return legacyMetadata(page);

  const activity = activityForHandle(handle);
  if (activity) {
    return freshMetadata(
      activity.title,
      activity.shortDesc.replace(/\s+/g, ' ').trim(),
      `${SITE_CONFIG.domain}/products/${activity.slug}`,
      activity.image,
    );
  }

  const combo = comboForHandle(handle);
  if (!combo) return {};
  return freshMetadata(
    combo.title,
    (combo.cardDesc || combo.subtitle).replace(/\s+/g, ' ').trim(),
    `${SITE_CONFIG.domain}/products/${combo.id}`,
    combo.image,
  );
}

export default async function ProductPage({ params }: RouteParams) {
  const { handle } = await params;
  const page = legacySeoPage(`/products/${handle}`);
  const activity = activityForHandle(handle);

  if (activity) {
    const schema = page ? productSchema(page) : {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: activity.title,
      description: activity.shortDesc,
      image: absoluteSiteImage(activity.image),
      brand: { '@type': 'Brand', name: 'Thrill Factory' },
      offers: activity.comingSoon
        ? undefined
        : {
            '@type': 'Offer',
            priceCurrency: 'INR',
            price: activity.price,
            availability: 'https://schema.org/InStock',
            url: `${SITE_CONFIG.domain}/products/${activity.slug}`,
          },
    };
    const faqs = page ? faqSchema(page) : null;

    return (
      <>
        <meta property="og:type" content="product" />
        {schema ? <JsonLd data={schema} /> : null}
        {faqs ? <JsonLd data={faqs} /> : null}
        <ActivityDetailPage activity={activity} heading={page?.h1 || activity.title} />
      </>
    );
  }

  const combo = comboForHandle(handle);
  if (combo) {
    const schema = page ? productSchema(page) : {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: combo.title,
      description: combo.cardDesc || combo.subtitle,
      image: absoluteSiteImage(combo.image),
      brand: { '@type': 'Brand', name: 'Thrill Factory' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: combo.price,
        availability: 'https://schema.org/InStock',
        url: `${SITE_CONFIG.domain}/products/${combo.id}`,
      },
    };

    const faqs = page ? faqSchema(page) : null;

    return (
      <>
        <meta property="og:type" content="product" />
        {schema ? <JsonLd data={schema} /> : null}
        {faqs ? <JsonLd data={faqs} /> : null}
        <ComboDetailPage combo={combo} heading={page?.h1 || combo.title} />
      </>
    );
  }

  if (!page) notFound();
  return <LegacyDocument page={page} />;
}
