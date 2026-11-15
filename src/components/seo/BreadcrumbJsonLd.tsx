'use client';

import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { JsonLd } from '@/components/seo/JsonLd';

export function BreadcrumbJsonLd() {
  const pathname = usePathname() || '/';
  const parts = pathname.split('/').filter(Boolean);
  const crumbs = [{ name: 'Home', path: '/' }];
  let built = '';

  parts.forEach((part) => {
    built += `/${part}`;
    crumbs.push({ name: part.replace(/-/g, ' '), path: built });
  });

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: `${SITE_CONFIG.domain}${crumb.path === '/' ? '/' : crumb.path}`,
        })),
      }}
    />
  );
}
