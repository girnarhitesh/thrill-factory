'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { BookingModal } from '@/components/common/BookingModal';
import { HeroBanner } from '@/components/home/HeroBanner';
import { AdrenalineTicker } from '@/components/home/AdrenalineTicker';
import { QuickHighlights } from '@/components/home/QuickHighlights';
import { ActivitiesGrid } from '@/components/home/ActivitiesGrid';
import { PackagesSection } from '@/components/home/PackagesSection';
import { KidsZoneHighlight } from '@/components/home/KidsZoneHighlight';
import { SafetyOverview } from '@/components/home/SafetyOverview';
import { LegacyMilestoneBanner } from '@/components/home/LegacyMilestoneBanner';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { InstagramReelsSection } from '@/components/home/InstagramReelsSection';
import { LocationSection } from '@/components/home/LocationSection';
import { BookingCtaBanner } from '@/components/home/BookingCtaBanner';
import { FaqSection } from '@/components/home/FaqSection';

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedItemForBooking, setSelectedItemForBooking] = useState('Bungee Jumping (165 FT)');

  const handleOpenBooking = (itemTitle?: string) => {
    if (itemTitle) {
      setSelectedItemForBooking(itemTitle);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <>
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main>
        <HeroBanner onOpenBooking={() => handleOpenBooking()} />
        <AdrenalineTicker />
        <QuickHighlights />
        <ActivitiesGrid onBook={(title) => handleOpenBooking(title)} />
        <PackagesSection onBook={(title) => handleOpenBooking(title)} />
        <KidsZoneHighlight onBook={(title) => handleOpenBooking(title)} />
        <SafetyOverview />
        <LegacyMilestoneBanner />
        <ReviewsSection />
        <InstagramReelsSection />
        <LocationSection />
        <BookingCtaBanner onOpenBooking={() => handleOpenBooking()} />
        <FaqSection />
      </main>

      <Footer />

      <WhatsAppFloating />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedItem={selectedItemForBooking}
      />
    </>
  );
}
