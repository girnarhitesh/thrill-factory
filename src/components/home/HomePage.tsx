'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { BookingModal } from '@/components/common/BookingModal';
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
        <ActivitiesGrid onBook={(title: string) => handleOpenBooking(title)} />
        <PackagesSection onBook={(title: string) => handleOpenBooking(title)} />
        <QuickHighlights />
        <KidsZoneHighlight onBook={(title: string) => handleOpenBooking(title)} />
        <SafetyOverview />
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
