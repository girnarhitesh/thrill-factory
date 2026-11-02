import type { Metadata } from 'next';
import HomePage from '@/components/home/HomePage';
import { legacySeoPage } from '@/data/legacySeo';
import { legacyMetadata } from '@/seo/legacyMetadata';

const home = legacySeoPage('/');

export const metadata: Metadata = home ? legacyMetadata(home) : {};

export default function Page() {
  return <HomePage />;
}
