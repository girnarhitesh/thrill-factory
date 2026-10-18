'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { BookingModal } from '@/components/common/BookingModal';
import { SafetyProtocols } from '@/components/safety/SafetyProtocols';
import { SafetyCords } from '@/components/safety/SafetyCords';
import { SafetyPolicy } from '@/components/safety/SafetyPolicy';

export default function SafetyPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main>
        <SafetyProtocols />
        <SafetyCords />
        <SafetyPolicy />
      </main>

      <Footer />
      <WhatsAppFloating />

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};
