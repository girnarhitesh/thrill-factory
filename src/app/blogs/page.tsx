import type { Metadata } from 'next';
import BlogsIndex from '@/components/blogs/BlogsIndex';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { legacySeoPage } from '@/data/legacySeo';
import { legacyMetadata, withCanonical } from '@/seo/legacyMetadata';

const news = legacySeoPage('/blogs/news');
const canonical = `${SITE_CONFIG.domain}/blogs/news`;

export const metadata: Metadata = news
  ? withCanonical(legacyMetadata(news), canonical)
  : { alternates: { canonical } };

export default function Page() {
  return <BlogsIndex />;
}
