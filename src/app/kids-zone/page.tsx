'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { ActivityDetailsModal } from '@/components/common/ActivityDetailsModal';
import { KidsZoneCatalog } from '@/components/kids/KidsZoneCatalog';
import { openBookingFrame } from '@/components/common/BookingFrame';
import { Activity } from '@/types';

export default function KidsZonePage() {
  const [selectedActivityForDetails, setSelectedActivityForDetails] = useState<Activity | null>(null);

  const handleBook = (_title: string) => {
    openBookingFrame();
  };

  return (
    <>
      <Navbar />

      <main>
        <KidsZoneCatalog onBook={handleBook} onDetails={setSelectedActivityForDetails} />
      </main>

      <Footer />
      <WhatsAppFloating />

      <ActivityDetailsModal
        isOpen={!!selectedActivityForDetails}
        onClose={() => setSelectedActivityForDetails(null)}
        activity={selectedActivityForDetails}
        onBook={(title) => handleBook(title)}
      />

    </>
  );
}
