'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { ComboDetailsModal } from '@/components/common/ComboDetailsModal';
import { CombosCatalog } from '@/components/combos/CombosCatalog';
import { openBookingFrame } from '@/components/common/BookingFrame';
import { PackageCombo } from '@/data/packages';

export default function CombosPage() {
  const [selectedComboForDetails, setSelectedComboForDetails] = useState<PackageCombo | null>(null);

  const handleBook = (_title: string) => {
    openBookingFrame();
  };

  return (
    <>
      <Navbar />

      <main>
        <CombosCatalog onBook={handleBook} onDetails={setSelectedComboForDetails} />
      </main>

      <Footer />
      <WhatsAppFloating />

      <ComboDetailsModal
        isOpen={!!selectedComboForDetails}
        combo={selectedComboForDetails}
        onClose={() => setSelectedComboForDetails(null)}
        onBook={(title) => handleBook(title)}
      />
    </>
  );
}
