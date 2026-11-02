import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/data/blogs';
import { legacySeoPage } from '@/data/legacySeo';
import { legacyMetadata } from '@/seo/legacyMetadata';

type RouteParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const page = legacySeoPage(`/blogs/${slug}`) || legacySeoPage(`/blogs/news/${slug}`);
  if (page) return legacyMetadata(page);
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: { absolute: post.title },
    description: post.excerpt,
  };
}

export default function BlogSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
