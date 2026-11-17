'use client';

import React from 'react';
import { ALL_PACKAGES, sortCombosBySequence } from '@/data/packages';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ComboCard } from '@/components/home/ComboCard';
import { ThemeButton } from '@/components/common/ThemeButton';
import './PackagesSection.css';

interface PackagesSectionProps {
  onBook: (packageName: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onBook }) => {
  const packages = sortCombosBySequence(ALL_PACKAGES);

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
            <ComboCard key={pkg.id} combo={pkg} onBook={onBook} />
          ))}
        </div>

        <div className="packages-action-footer">
          <ThemeButton href="/combos" variant="ghost" arrow>
            View All Combos
          </ThemeButton>
        </div>
      </div>
    </section>
  );
};
