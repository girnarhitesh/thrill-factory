'use client';

import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { KidsZoneCatalog } from '@/components/kids/KidsZoneCatalog';
import { openBookingFrame } from '@/components/common/BookingFrame';

export default function KidsZonePage() {
  return (
    <>
      <Navbar />
      <main>
        <KidsZoneCatalog onBook={() => openBookingFrame()} />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
