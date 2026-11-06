import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/siteConfig';

const title = 'Activities';
const description =
  'Every lane on the Shivpuri strip — extreme drops, aerial park, entertainment arena, kids zone, and VR lab.';
const url = `${SITE_CONFIG.domain}/activities`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
};

export default function ActivitiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
