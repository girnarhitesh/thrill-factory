'use client';

import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { ActivitiesCatalog } from '@/components/activities/ActivitiesCatalog';
import { openBookingFrame } from '@/components/common/BookingFrame';

export default function CollectionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ActivitiesCatalog onBook={() => openBookingFrame()} />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
