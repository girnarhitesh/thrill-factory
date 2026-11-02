import type { Metadata } from 'next';
import { legacySeoPage } from '@/data/legacySeo';
import { legacyMetadata } from '@/seo/legacyMetadata';

const page = legacySeoPage('/pages/contact');

export const metadata: Metadata = page ? legacyMetadata(page) : {};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
