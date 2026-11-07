'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { ActivityDetailsModal } from '@/components/common/ActivityDetailsModal';
import { ActivitiesCatalog } from '@/components/activities/ActivitiesCatalog';
import { openBookingFrame } from '@/components/common/BookingFrame';
import { Activity } from '@/types';

export default function ActivitiesPage() {
  const [selectedActivityForDetails, setSelectedActivityForDetails] = useState<Activity | null>(
    null
  );

  const handleBook = (_title: string) => {
    openBookingFrame();
  };

  return (
    <>
      <Navbar />

      <main>
        <ActivitiesCatalog onBook={handleBook} onDetails={setSelectedActivityForDetails} />
      </main>

      <Footer />
      <WhatsAppFloating />

      <ActivityDetailsModal
        isOpen={!!selectedActivityForDetails}
        activity={selectedActivityForDetails}
        onClose={() => setSelectedActivityForDetails(null)}
        onBook={(title) => handleBook(title)}
      />
    </>
  );
}
