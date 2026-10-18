'use client';

import React, { useState } from 'react';
import { FEATURED_ACTIVITIES } from '@/data/activities';
import { Activity } from '@/types';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ActivityDetailsModal } from '@/components/common/ActivityDetailsModal';
import { ActivityCard } from '@/components/home/ActivityCard';
import { ThemeButton } from '@/components/common/ThemeButton';
import './PackagesSection.css';

interface ActivitiesGridProps {
  onBook: (activityTitle: string) => void;
}

export const ActivitiesGrid: React.FC<ActivitiesGridProps> = ({ onBook }) => {
  const [selectedActivityForDetails, setSelectedActivityForDetails] = useState<Activity | null>(null);

  return (
    <section id="activities" className="section bg-architectural-grid">
      <div className="container">
        <SectionHeader
          tag="Extreme Adrenaline"
          title="World-Class Adventure"
          highlightWord="In Shivpuri"
          description="Choose from individual high-altitude rides engineered to international safety standards. Every dive is supervised by veteran Jump Masters."
        />

        <div className="packages-grid-4">
          {FEATURED_ACTIVITIES.map((activity, index) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              index={String(index + 1).padStart(2, '0')}
              onBook={onBook}
              onDetails={setSelectedActivityForDetails}
            />
          ))}
        </div>

        <div className="packages-action-footer">
          <ThemeButton href="/activities" variant="ghost" arrow>
            View All Activities
          </ThemeButton>
        </div>
      </div>

      <ActivityDetailsModal
        isOpen={!!selectedActivityForDetails}
        activity={selectedActivityForDetails}
        onClose={() => setSelectedActivityForDetails(null)}
        onBook={(title) => onBook(title)}
      />
    </section>
  );
};
