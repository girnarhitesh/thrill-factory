'use client';

import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ActivityCard } from '@/components/home/ActivityCard';
import { ThemeButton } from '@/components/common/ThemeButton';
import { openBookingFrame } from '@/components/common/BookingFrame';
import { Activity } from '@/types';

interface LegacyActivityLandingProps {
  tag?: string;
  title: string;
  highlightWord?: string;
  description: string;
  activities: Activity[];
}

export const LegacyActivityLanding: React.FC<LegacyActivityLandingProps> = ({
  tag,
  title,
  highlightWord,
  description,
  activities,
}) => {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="activities-lane"
          style={{ paddingTop: 'calc(var(--header-height) + 2.5rem)', paddingBottom: '3rem' }}
        >
          <div className="container">
            <div className="activities-lane-head">
              <SectionHeader
                align="left"
                headingLevel="h1"
                tag={tag}
                title={title}
                highlightWord={highlightWord}
                description={description}
              />
            </div>

            <div className="activities-grid">
              {activities.map((activity, index) => (
                <div key={activity.id} className="activities-card-anchor">
                  <ActivityCard
                    activity={activity}
                    index={String(index + 1).padStart(2, '0')}
                    onBook={() => openBookingFrame()}
                  />
                </div>
              ))}
            </div>

            <div className="packages-action-footer">
              <ThemeButton href="/collections" variant="ghost" arrow>
                View All Activities
              </ThemeButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
};
