import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogArticle } from '@/components/blogs/BlogArticle';
import { LegacyDocument } from '@/components/seo/LegacyDocument';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { blogBySlug, blogImageSrc, BLOG_POSTS } from '@/data/blogs';
import { LEGACY_SEO_PAGES, legacySeoPage } from '@/data/legacySeo';
import { legacyMetadata, withCanonical } from '@/seo/legacyMetadata';

type RouteParams = { params: Promise<{ handle: string }> };

export const dynamicParams = false;

const articleFor = (handle: string) =>
  legacySeoPage(`/blogs/news/${handle}`) || legacySeoPage(`/blogs/${handle}`);

export function generateStaticParams() {
  const handles = new Set(BLOG_POSTS.map((post) => post.slug));
  for (const page of LEGACY_SEO_PAGES) {
    const parts = page.path.split('/').filter(Boolean);
    if (parts[0] !== 'blogs') continue;
    if (parts.length === 2 && parts[1] !== 'news') handles.add(parts[1]);
    if (parts[0] === 'blogs' && parts[1] === 'news' && parts[2]) handles.add(parts[2]);
  }
  return [...handles].map((handle) => ({ handle }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { handle } = await params;
  const post = blogBySlug(handle);
  const canonical = `${SITE_CONFIG.domain}/blogs/news/${handle}`;
  if (post) {
    const image = post.image ? blogImageSrc(post.image) : undefined;
    return {
      title: { absolute: post.seoTitle },
      description: post.description,
      alternates: { canonical },
      openGraph: {
        type: 'article',
        title: post.seoTitle,
        description: post.description,
        url: canonical,
        siteName: 'Thrill Factory',
        publishedTime: post.date,
        images: image ? [{ url: image, alt: post.title, width: post.imageWidth, height: post.imageHeight }] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.seoTitle,
        description: post.description,
        images: image ? [image] : undefined,
      },
    };
  }
  const page = articleFor(handle);
  if (!page) return {};
  return withCanonical(legacyMetadata(page), canonical);
}

export default async function NewsArticlePage({ params }: RouteParams) {
  const { handle } = await params;
  const post = blogBySlug(handle);
  if (post) return <BlogArticle post={post} />;
  const page = articleFor(handle);
  if (!page) notFound();
  return (
    <LegacyDocument
      page={{ ...page, path: `/blogs/news/${handle}`, canonical: `${SITE_CONFIG.domain}/blogs/news/${handle}` }}
    />
  );
}
