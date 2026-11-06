import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/siteConfig';

const title = 'Kids Zone';
const description =
  'Padded soft play, electric rides, climbing, and supervised trampolines from ₹100, on the same Shivpuri day as the rest of the park.';
const url = `${SITE_CONFIG.domain}/kids-zone`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
};

export default function KidsZoneLayout({ children }: { children: React.ReactNode }) {
  return children;
}
