import { FAQS_DATA } from '@/data/faqs';
import { BlogPost } from '@/data/blogs';
import { SITE_CONFIG } from '@/constants/siteConfig';

const SITE = SITE_CONFIG.domain;
const PARK_ID = `${SITE}/#park`;
const WEBSITE_ID = `${SITE}/#website`;

const DAY_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['TouristAttraction', 'AmusementPark'],
      '@id': PARK_ID,
      name: SITE_CONFIG.brandName,
      alternateName: SITE_CONFIG.shortName,
      description: SITE_CONFIG.description,
      url: `${SITE}/`,
      image: `${SITE}/images/tf-og-share.jpg`,
      logo: `${SITE}/images/thrill-factory-logo.png`,
      telephone: SITE_CONFIG.phones[0].raw,
      email: SITE_CONFIG.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${SITE_CONFIG.location.landmark}, ${SITE_CONFIG.location.area}`,
        addressLocality: SITE_CONFIG.location.city,
        addressRegion: SITE_CONFIG.location.state,
        postalCode: SITE_CONFIG.location.pincode,
        addressCountry: 'IN',
      },
      hasMap: SITE_CONFIG.location.googleMapsUrl,
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: DAY_OF_WEEK,
        opens: '09:00',
        closes: '22:00',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.5',
        reviewCount: '3238',
        bestRating: '5',
        worstRating: '1',
      },
      contactPoint: SITE_CONFIG.phones.map((phone, index) => ({
        '@type': 'ContactPoint',
        telephone: phone.raw,
        contactType: index === 0 ? 'reservations' : 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      })),
      sameAs: ['https://www.instagram.com/thrillfactoryatrishikesh'],
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE}/`,
      name: SITE_CONFIG.brandName,
      description: SITE_CONFIG.description,
      inLanguage: 'en-IN',
      publisher: { '@id': PARK_ID },
    },
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS_DATA.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export const blogPostingSchema = (post: BlogPost) => {
  const published = new Date(post.date);
  const datePublished = Number.isNaN(published.getTime()) ? undefined : published.toISOString();

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE}${post.image}`,
    datePublished,
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.brandName,
      url: `${SITE}/`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.brandName,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE}/images/thrill-factory-logo.png`,
      },
    },
    mainEntityOfPage: `${SITE}/blogs/${post.slug}/`,
    isPartOf: { '@id': WEBSITE_ID },
  };
};