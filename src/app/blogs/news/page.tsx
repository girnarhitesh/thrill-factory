import type { Metadata } from 'next';
import BlogsIndex from '@/components/blogs/BlogsIndex';
import { legacySeoPage } from '@/data/legacySeo';
import { legacyMetadata } from '@/seo/legacyMetadata';

const news = legacySeoPage('/blogs/news');

export const metadata: Metadata = news ? legacyMetadata(news) : {};

export default function NewsIndexPage() {
  return <BlogsIndex />;
}
