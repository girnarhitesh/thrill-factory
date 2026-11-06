import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, Outfit } from 'next/font/google';
import Script from 'next/script';
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
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { legacySeoPage } from '@/data/legacySeo';
import { siteSchema } from '@/seo/schema';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  adjustFontFallback: true,
  variable: '--font-outfit',
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  adjustFontFallback: true,
  variable: '--font-bebas',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#282828',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: `${SITE_CONFIG.tagline} | ${SITE_CONFIG.brandName}`,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.shortName,
  formatDetection: {
    telephone: false,
  },
  keywords: [
    'thrill factory rishikesh',
    'shivpuri adventure park',
    'adventure and entertainment destination',
    'bungee jumping rishikesh',
    'giant swing rishikesh',
    'zip line rishikesh',
    'kids zone rishikesh',
    'vr adventure rishikesh',
    'extreme sports uttarakhand',
  ],
  authors: [{ name: SITE_CONFIG.brandName }],
  verification: {
    google: 'YbyRR_SJ4sR170yXa4scY5aXwp17hd7ivGV98jf-Ku4',
  },
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
    title: `${SITE_CONFIG.tagline} | ${SITE_CONFIG.brandName}`,
    description: SITE_CONFIG.description,
    url: './',
    siteName: 'Thrill Factory',
    images: [
      {
        url: '/images/tf-og-share.jpg',
        width: 1600,
        height: 900,
        alt: 'The Shivpuri Thrill Factory, adventure and entertainment in Rishikesh',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.tagline} | ${SITE_CONFIG.brandName}`,
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
    <html lang="en" className={`${outfit.variable} ${bebas.variable}`}>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JERYX5N04Z" strategy="lazyOnload" />
        <Script id="ga4" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-JERYX5N04Z');`}
        </Script>
        <JsonLd data={siteSchema} />
        <ScrollRevealObserver />
        {children}
      </body>
    </html>
  );
}
