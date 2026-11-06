import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/siteConfig';

const title = 'Safety';
const description =
  'Safety runs every lane at Thrill Factory — extreme rides, aerial lines, ground games, and the kids zone — with a 100% record across 1 Lakh+ successful jumps.';
const url = `${SITE_CONFIG.domain}/safety`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
};

export default function SafetyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
