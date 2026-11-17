'use client';

import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { CombosCatalog } from '@/components/combos/CombosCatalog';
import { openBookingFrame } from '@/components/common/BookingFrame';

export default function CombosPage() {
  return (
    <>
      <Navbar />
      <main>
        <CombosCatalog onBook={() => openBookingFrame()} />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
