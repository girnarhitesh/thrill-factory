import type { Metadata } from 'next';
import { ALL_ADVENTURES_DATA, type ActivityTabId } from '@/data/activities';
import { ALL_PACKAGES } from '@/data/packages';
import { BLOG_POSTS } from '@/data/blogs';
import { LegacySeoPage } from '@/data/legacySeo';
import { SITE_CONFIG } from '@/constants/siteConfig';

const COLLECTION_IMAGE: Record<string, string> = {
  'extreme-adventure': '/images/activities/bungee-jumping.jpg',
  'moderate-adventure': '/images/activities/sky-cycling.jpg',
  'entertainment-adventure': '/images/activities/wall-climbing.jpg',
  'kids-zone': '/images/activities/soft-play-zone-for-kids.jpg',
  'vr-zone': '/images/activities/vr-bungee.jpg',
  'rope-bungee-combo': '/images/activities/rope-bungee.jpg',
  'save-more': '/images/tf-og-share.jpg',
  'all-adventures': '/images/tf-og-share.jpg',
  all: '/images/tf-og-share.jpg',
};

export const legacyImagePath = (page: LegacySeoPage) => {
  const handle = page.path.split('/').filter(Boolean).pop() || '';
  const activity = ALL_ADVENTURES_DATA.find((item) => item.slug === handle || item.id === handle);
  if (activity?.image) return activity.image;
  const combo = ALL_PACKAGES.find((item) => item.id === handle);
  if (combo?.image) return combo.image;
  const post = BLOG_POSTS.find((item) => item.slug === handle);
  if (post?.image) return post.image;
  return COLLECTION_IMAGE[handle] || '/images/tf-og-share.jpg';
};

export const absoluteSiteImage = (path: string) =>
  path.startsWith('http') ? path : `${SITE_CONFIG.domain}${path}`;

export const legacyMetadata = (page: LegacySeoPage): Metadata => {
  const image = absoluteSiteImage(legacyImagePath(page));

  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: page.canonical },
    openGraph: {
      type: page.ogType === 'article' ? 'article' : 'website',
      title: page.ogTitle,
      description: page.ogDescription,
      url: page.canonical,
      siteName: 'Thrill Factory',
      images: [{ url: image, alt: page.h1 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.ogTitle,
      description: page.ogDescription,
      images: [image],
    },
  };
};

export const productSchema = (page: LegacySeoPage) => {
  if (page.kind !== 'product' || page.price == null) return null;
  const image = absoluteSiteImage(legacyImagePath(page));
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: page.h1,
    description: page.description,
    image,
    brand: { '@type': 'Brand', name: 'Thrill Factory' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: page.price,
      availability: 'https://schema.org/InStock',
      url: page.canonical,
    },
  };
};

const COLLECTION_TAB: Record<string, ActivityTabId | 'all' | 'combos' | 'rope'> = {
  'extreme-adventure': 'extreme',
  'moderate-adventure': 'moderate',
  'entertainment-adventure': 'entertainment',
  'kids-zone': 'kids',
  'vr-zone': 'vr',
  'all-adventures': 'all',
  all: 'all',
  'save-more': 'combos',
  'rope-bungee-combo': 'rope',
};

export const collectionItems = (page: LegacySeoPage) => {
  const handle = page.path.split('/').filter(Boolean).pop() || '';
  const lane = COLLECTION_TAB[handle];
  if (lane === 'combos' || lane === 'rope') {
    const combos = lane === 'rope'
      ? ALL_PACKAGES.filter((combo) => /rope/i.test(`${combo.title} ${combo.subtitle} ${combo.activitiesIncluded.join(' ')}`))
      : ALL_PACKAGES;
    return combos.map((combo) => ({ href: `/products/${combo.id}`, title: combo.title, price: combo.price }));
  }
  const activities =
    !lane || lane === 'all'
      ? ALL_ADVENTURES_DATA
      : ALL_ADVENTURES_DATA.filter((activity) => activity.category === lane);
  return activities.map((activity) => ({
    href: `/products/${activity.slug}`,
    title: activity.title,
    price: activity.comingSoon ? null : activity.price,
  }));
};
