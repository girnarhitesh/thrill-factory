'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { BookingModal } from '@/components/common/BookingModal';
import { ActivityDetailsModal } from '@/components/common/ActivityDetailsModal';
import { ActivitiesCatalog } from '@/components/activities/ActivitiesCatalog';
import { Activity } from '@/types';

export default function ActivitiesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedActivityForBooking, setSelectedActivityForBooking] = useState(
    'Bungee Jumping in Rishikesh'
  );
  const [selectedActivityForDetails, setSelectedActivityForDetails] = useState<Activity | null>(
    null
  );

  const handleBook = (title: string) => {
    setSelectedActivityForBooking(title);
    setIsBookingOpen(true);
  };

  return (
    <>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main>
        <ActivitiesCatalog onBook={handleBook} onDetails={setSelectedActivityForDetails} />
      </main>

      <Footer />
      <WhatsAppFloating />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedItem={selectedActivityForBooking}
      />

      <ActivityDetailsModal
        isOpen={!!selectedActivityForDetails}
        activity={selectedActivityForDetails}
        onClose={() => setSelectedActivityForDetails(null)}
        onBook={(title) => handleBook(title)}
      />
    </>
  );
}
