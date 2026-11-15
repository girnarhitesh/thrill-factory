import { notFound } from 'next/navigation';
import { LegacyDocument } from '@/components/seo/LegacyDocument';
import { legacySeoPage } from '@/data/legacySeo';

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const legacy = legacySeoPage(`/blogs/${slug}`);
  if (legacy?.path === `/blogs/${slug}`) return <LegacyDocument page={legacy} />;
  notFound();
}
