import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { legacySeoPage } from '@/data/legacySeo';
import { legacyMetadata, withCanonical } from '@/seo/legacyMetadata';

const page = legacySeoPage('/pages/contact');
const canonical = `${SITE_CONFIG.domain}/contact`;

export const metadata: Metadata = page
  ? withCanonical(legacyMetadata(page), canonical)
  : { alternates: { canonical } };

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
