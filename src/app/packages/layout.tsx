import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/siteConfig';

const title = 'Packages';
const description =
  'Pair an extreme ride with a swing, a zip line, or a ground game, and pay less than booking each ticket alone.';
const url = `${SITE_CONFIG.domain}/packages`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
};

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
