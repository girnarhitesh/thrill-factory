'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { BookingModal } from '@/components/common/BookingModal';
import { ActivityDetailsModal } from '@/components/common/ActivityDetailsModal';
import { KidsZoneCatalog } from '@/components/kids/KidsZoneCatalog';
import { Activity } from '@/types';

export default function KidsZonePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedKidActivity, setSelectedKidActivity] = useState('Soft Play Zone For Kids');
  const [selectedActivityForDetails, setSelectedActivityForDetails] = useState<Activity | null>(null);

  const handleBook = (name: string) => {
    setSelectedKidActivity(name);
    setIsBookingOpen(true);
  };

  return (
    <>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

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

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedItem={selectedKidActivity}
      />
    </>
  );
}
