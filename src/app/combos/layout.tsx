import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/siteConfig';

const title = 'Thrill Combos';
const description =
  'Extreme packs and indoor game packs, listed by lane, so a full day costs less than buying each ticket alone.';
const url = `${SITE_CONFIG.domain}/combos`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
};

export default function CombosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
