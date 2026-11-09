'use client';

import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { HeroBanner } from '@/components/home/HeroBanner';
import { AdrenalineTicker } from '@/components/home/AdrenalineTicker';
import { ActivitiesGrid } from '@/components/home/ActivitiesGrid';
import { PackagesSection } from '@/components/home/PackagesSection';
import { QuickHighlights } from '@/components/home/QuickHighlights';
import { KidsZoneHighlight } from '@/components/home/KidsZoneHighlight';
import { SafetyOverview } from '@/components/home/SafetyOverview';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { InstagramReelsSection } from '@/components/home/InstagramReelsSection';
import { LocationSection } from '@/components/home/LocationSection';
import { BookingCtaBanner } from '@/components/home/BookingCtaBanner';
import { FaqSection } from '@/components/home/FaqSection';

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
