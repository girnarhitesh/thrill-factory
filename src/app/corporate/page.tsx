'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { BookingModal } from '@/components/common/BookingModal';
import { CorporateHero } from '@/components/corporate/CorporateHero';
import { CorporateMix } from '@/components/corporate/CorporateMix';
import { CorporateExplore } from '@/components/corporate/CorporateExplore';
import { CorporateWorkforce } from '@/components/corporate/CorporateWorkforce';
import { CorporateClients } from '@/components/corporate/CorporateClients';
import { CorporateBrief } from '@/components/corporate/CorporateBrief';

export default function CorporatePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const selectedActivity = 'Corporate Custom Offsite Package';

  return (
    <>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main style={{ backgroundColor: '#FFFFFF' }}>
        <CorporateHero />
        <CorporateMix />
        <CorporateExplore />
        <CorporateWorkforce />
        <CorporateClients />
        <CorporateBrief />
      </main>

      <Footer />
      <WhatsAppFloating />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedItem={selectedActivity}
      />
    </>
  );
}
