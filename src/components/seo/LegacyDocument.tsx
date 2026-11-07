'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { ThemeButton } from '@/components/common/ThemeButton';
import { openBookingFrame } from '@/components/common/BookingFrame';
import { JsonLd } from '@/components/seo/JsonLd';
import { BLOG_POSTS } from '@/data/blogs';
import { LegacySeoPage } from '@/data/legacySeo';
import { collectionItems, legacyImagePath, productSchema } from '@/seo/legacyMetadata';

const POLICY_COPY: Record<string, string[]> = {
  'terms-and-condition': [
    'These terms cover bookings and visits to The Shivpuri Thrill Factory in Rishikesh. By reserving a ticket or using this website, you agree to follow the park rules given at check-in.',
    'Tickets are for the named activity, date, and guest. Arrive in closed shoes, follow the briefing, and tell the crew about any medical condition before you take part. The park can refuse a jump when a safety limit is not met.',
  ],
  'privacy-policy': [
    'Thrill Factory uses the name, phone number, and message you send when you enquire or book, so the Shivpuri desk can confirm your slot.',
    'We do not sell that information. Call or WhatsApp the desk if you want a booking detail corrected or removed.',
  ],
  'return-and-refund': [
    'If the park closes an activity for weather or safety, the desk will move your booking to another time or refund the unused ticket.',
    'Contact the Shivpuri desk as soon as your plans change. Same-day no-shows are not refunded once the slot has been held.',
  ],
  'partial-payment-policy': [
    'A partial payment can hold an adventure slot at Thrill Factory. Pay the agreed amount up front, then clear the balance before you check in at Shivpuri.',
    'The desk confirms the remaining amount on WhatsApp or by phone. The activity starts only after the full ticket value is paid.',
  ],
  test: [
    'This address is kept so an older Thrill Factory link does not disappear. For bookings, prices, and directions, use the contact page or call the Shivpuri desk.',
  ],
  'about-us': [
    'The Shivpuri Thrill Factory is an adventure and entertainment park on the Badrinath highway in Rishikesh. Guests come for bungee jumping, giant swing, reverse bungee, SCAD jump, rope bungee, zip line, indoor games, VR, and a kids zone.',
    'The park is open every day. Book a single activity or a combo, then check in at the desk beside the Indian Oil pump in Shivpuri.',
  ],
};

export function LegacyDocument({ page }: { page: LegacySeoPage }) {
  const image = legacyImagePath(page);
  const handle = page.path.split('/').filter(Boolean).pop() || '';
  const post = BLOG_POSTS.find((item) => item.slug === handle);
  const items = page.kind === 'collection' ? collectionItems(page) : [];
  const policy = POLICY_COPY[handle];
  const schema = productSchema(page);

  return (
    <>
      {schema ? <JsonLd data={schema} /> : null}
      <Navbar />
      <main className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <h1 className="section-title">{page.h1}</h1>
        <p style={{ maxWidth: '42rem', margin: '1rem 0 1.5rem' }}>{page.description}</p>
        <Image
          src={image}
          alt={page.h1}
          width={960}
          height={540}
          sizes="(max-width: 768px) 100vw, 960px"
          style={{ width: '100%', height: 'auto', maxHeight: '28rem', objectFit: 'cover', marginBottom: '1.5rem' }}
        />
        {page.price != null ? (
          <p style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
            ₹{page.price.toLocaleString('en-IN')} per person
          </p>
        ) : null}
        {policy?.map((paragraph) => (
          <p key={paragraph} style={{ maxWidth: '42rem', marginBottom: '0.8rem' }}>
            {paragraph}
          </p>
        ))}
        {post?.content.map((block) => (
          <section key={block.heading} style={{ maxWidth: '42rem', marginBottom: '1.2rem' }}>
            <h2 className="section-title" style={{ fontSize: '1.6rem' }}>
              {block.heading}
            </h2>
            <p>{block.text}</p>
          </section>
        ))}
        {items.length > 0 ? (
          <ul style={{ display: 'grid', gap: '0.6rem', margin: '1rem 0 1.5rem' }}>
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  {item.title}
                  {item.price != null ? ` · ₹${item.price.toLocaleString('en-IN')}` : ''}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
        <ThemeButton onClick={openBookingFrame} arrow>
          Book this adventure
        </ThemeButton>
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
