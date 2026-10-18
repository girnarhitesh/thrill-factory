'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { BookingModal } from '@/components/common/BookingModal';
import { ComboDetailsModal } from '@/components/common/ComboDetailsModal';
import { CombosCatalog } from '@/components/combos/CombosCatalog';
import { PackageCombo } from '@/data/packages';

export default function CombosPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedCombo, setSelectedCombo] = useState('Thrill Combo 2.4');
  const [selectedComboForDetails, setSelectedComboForDetails] = useState<PackageCombo | null>(null);

  const handleBook = (title: string) => {
    setSelectedCombo(title);
    setIsBookingOpen(true);
  };

  return (
    <>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main>
        <CombosCatalog onBook={handleBook} onDetails={setSelectedComboForDetails} />
      </main>

      <Footer />
      <WhatsAppFloating />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedItem={selectedCombo}
      />

      <ComboDetailsModal
        isOpen={!!selectedComboForDetails}
        combo={selectedComboForDetails}
        onClose={() => setSelectedComboForDetails(null)}
        onBook={(title) => handleBook(title)}
      />
    </>
  );
}
