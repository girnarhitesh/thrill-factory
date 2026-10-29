import type { Metadata } from 'next';
import '@/styles/variables.css';
import '@/styles/globals.css';
import '@/styles/components.css';
import '@/components/common/Navbar.css';
import '@/components/common/Footer.css';
import '@/components/common/WhatsAppFloating.css';
import '@/components/home/HeroBanner.css';
import '@/components/home/ActivityCard.css';
import '@/components/home/PackagesSection.css';
import '@/components/home/QuickHighlights.css';
import '@/components/home/SafetyOverview.css';
import '@/components/home/LegacyMilestoneBanner.css';
import '@/components/home/ReviewsSection.css';
import '@/components/home/InstagramReelsSection.css';
import '@/components/home/LocationSection.css';
import '@/components/home/KidsZoneHighlight.css';
import '@/components/activities/ActivitiesCatalog.css';
import '@/components/combos/CombosCatalog.css';
import '@/components/kids/KidsZoneCatalog.css';
import '@/components/corporate/CorporateHero.css';
import '@/components/corporate/CorporateMix.css';
import '@/components/corporate/CorporateExplore.css';
import '@/components/common/ComboDetailsModal.css';
import '@/styles/animations.css';
import { ScrollRevealObserver } from '@/components/common/ScrollRevealObserver';
import { SITE_CONFIG } from '@/constants/siteConfig';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: `${SITE_CONFIG.tagline} | ${SITE_CONFIG.brandName}`,
  description: SITE_CONFIG.description,
  keywords: [
    'bungee jumping rishikesh',
    'shivpuri thrill factory',
    'bungee jumping price rishikesh',
    'reverse bungee rishikesh',
    'scad jump rishikesh',
    'giant swing rishikesh',
    'kids adventure zone rishikesh',
    'thrill factory shivpuri',
    'extreme sports uttarakhand',
  ],
  authors: [{ name: SITE_CONFIG.brandName }],
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/images/tf-favicon.png', sizes: '64x64', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: [
      { url: '/images/tf-favicon.png', sizes: '100x100', type: 'image/png' },
    ],
  },
  openGraph: {
    title: `${SITE_CONFIG.brandName} - Best Bungee Jumping in Rishikesh`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.brandName,
    images: [
      {
        url: '/images/tf-og-share.jpg',
        width: 1600,
        height: 900,
        alt: 'Bungee Jumping at The Shivpuri Thrill Factory Rishikesh',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.brandName} - Bungee Jumping Rishikesh`,
    description: SITE_CONFIG.description,
    images: ['/images/tf-og-share.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/tf-favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700;800;900&family=Barlow:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollRevealObserver />
        {children}
      </body>
    </html>
  );
}
