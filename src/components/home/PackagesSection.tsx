'use client';

import React, { useState } from 'react';
import { FEATURED_PACKAGES, PackageCombo } from '@/data/packages';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ComboDetailsModal } from '@/components/common/ComboDetailsModal';
import { ComboCard } from '@/components/home/ComboCard';
import { ThemeButton } from '@/components/common/ThemeButton';
import './PackagesSection.css';

interface PackagesSectionProps {
  onBook: (packageName: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onBook }) => {
  const [selectedComboForDetails, setSelectedComboForDetails] = useState<PackageCombo | null>(null);

  return (
    <section id="combos" className="section section-alt bg-architectural-grid">
      <div className="container">
        <SectionHeader
          tag="Save More Combos"
          title="Save More with"
          highlightWord="Thrill Combos"
          description="Bundle your favorite extreme gravity rides and signature jumps at The Shivpuri Thrill Factory to save big compared to individual tickets."
        />

        <div className="packages-grid-4">
          {FEATURED_PACKAGES.map((pkg) => (
            <ComboCard
              key={pkg.id}
              combo={pkg}
              onBook={onBook}
              onDetails={setSelectedComboForDetails}
            />
          ))}
        </div>

        <div className="packages-action-footer">
          <ThemeButton href="/combos" variant="ghost" arrow>
            View All Combos
          </ThemeButton>
        </div>
      </div>

      <ComboDetailsModal
        isOpen={!!selectedComboForDetails}
        combo={selectedComboForDetails}
        onClose={() => setSelectedComboForDetails(null)}
        onBook={(title) => onBook(title)}
      />
    </section>
  );
};
