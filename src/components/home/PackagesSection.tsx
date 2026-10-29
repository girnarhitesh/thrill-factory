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

const HOME_PACKAGE_ORDER = [
  'bungee-combo',
  'bungee-jump-and-giant-swing-combo',
  'bungee-jumping-combo-rishikesh',
  'thrill-activity-package-combo-in-rishikesh',
];

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onBook }) => {
  const [selectedComboForDetails, setSelectedComboForDetails] = useState<PackageCombo | null>(null);
  const packages = HOME_PACKAGE_ORDER.map((id) => FEATURED_PACKAGES.find((pkg) => pkg.id === id)).filter(
    (pkg): pkg is PackageCombo => Boolean(pkg)
  );

  return (
    <section id="combos" className="section section-alt bg-architectural-grid">
      <div className="container">
        <SectionHeader
          tag="Save More Combos"
          title="Save More with"
          highlightWord="Thrill Combos"
          description="Pair an extreme ride with a swing, a zip line, or a ground game, and pay less than booking each ticket alone."
        />

        <div className="packages-grid-4">
          {packages.map((pkg) => (
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
