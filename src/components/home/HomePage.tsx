'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { HeroBanner } from '@/components/home/HeroBanner';
import { AdrenalineTicker } from '@/components/home/AdrenalineTicker';

const load = <T extends Record<string, React.ComponentType<never> | React.ComponentType<any>>, K extends keyof T>(
  loader: () => Promise<T>,
  name: K,
) => dynamic(() => loader().then((mod) => ({ default: mod[name] as React.ComponentType<any> })));

const ActivitiesGrid = load(() => import('@/components/home/ActivitiesGrid'), 'ActivitiesGrid');
const PackagesSection = load(() => import('@/components/home/PackagesSection'), 'PackagesSection');
const QuickHighlights = load(() => import('@/components/home/QuickHighlights'), 'QuickHighlights');
const KidsZoneHighlight = load(() => import('@/components/home/KidsZoneHighlight'), 'KidsZoneHighlight');
const SafetyOverview = load(() => import('@/components/home/SafetyOverview'), 'SafetyOverview');
const ReviewsSection = load(() => import('@/components/home/ReviewsSection'), 'ReviewsSection');
const InstagramReelsSection = load(() => import('@/components/home/InstagramReelsSection'), 'InstagramReelsSection');
const LocationSection = load(() => import('@/components/home/LocationSection'), 'LocationSection');
const BookingCtaBanner = load(() => import('@/components/home/BookingCtaBanner'), 'BookingCtaBanner');
const FaqSection = load(() => import('@/components/home/FaqSection'), 'FaqSection');

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroBanner onOpenBooking={() => undefined} />
        <AdrenalineTicker />
        <ActivitiesGrid onBook={() => undefined} />
        <PackagesSection onBook={() => undefined} />
        <QuickHighlights />
        <KidsZoneHighlight />
        <SafetyOverview />
        <ReviewsSection />
        <InstagramReelsSection />
        <LocationSection />
        <BookingCtaBanner />
        <FaqSection />
      </main>

      <Footer />

      <WhatsAppFloating />
    </>
  );
}
