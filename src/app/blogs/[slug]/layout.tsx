import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/data/blogs';
import { LEGACY_SEO_PAGES, legacySeoPage } from '@/data/legacySeo';
import { legacyMetadata } from '@/seo/legacyMetadata';

type RouteParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  const slugs = new Set(BLOG_POSTS.map((post) => post.slug));
  for (const page of LEGACY_SEO_PAGES) {
    const parts = page.path.split('/').filter(Boolean);
    if (parts[0] === 'blogs' && parts.length === 2 && parts[1] !== 'news') slugs.add(parts[1]);
  }
  return [...slugs].map((slug) => ({ slug }));
}

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
