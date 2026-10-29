'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ActivityTabId, activitiesForTab, ACTIVITY_TAB_ORDER } from '@/data/activities';
import { Activity } from '@/types';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ActivityDetailsModal } from '@/components/common/ActivityDetailsModal';
import { ThemeButton } from '@/components/common/ThemeButton';
import { ActivityCard } from '@/components/home/ActivityCard';
import './ActivitiesGrid.css';

interface ActivitiesGridProps {
  onBook: (activityTitle: string) => void;
}

const TABS: Array<{ id: ActivityTabId; label: string; image: string }> = [
  { id: 'extreme', label: 'Extreme adventure', image: '/images/activities/bungee-jumping.jpg' },
  { id: 'moderate', label: 'Moderate adventure', image: '/images/activities/sky-cycling.jpg' },
  { id: 'entertainment', label: 'Entertainment', image: '/images/activities/wall-climbing.jpg' },
  { id: 'kids', label: 'Kids adventure', image: '/images/activities/soft-play-zone-for-kids.jpg' },
  { id: 'vr', label: 'VR Zone', image: '/images/activities/vr-bungee.jpg' },
];

export const ActivitiesGrid: React.FC<ActivitiesGridProps> = ({ onBook }) => {
  const counts = useMemo(() => {
    const next: Record<string, number> = {};
    TABS.forEach((tab) => {
      next[tab.id] = ACTIVITY_TAB_ORDER[tab.id].length;
    });
    return next;
  }, []);

  const [activeTab, setActiveTab] = useState<ActivityTabId>('extreme');
  const [detailsActivity, setDetailsActivity] = useState<Activity | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (TABS.some((tab) => tab.id === hash)) {
      setActiveTab(hash as ActivityTabId);
    }
  }, []);

  const selectTab = (id: ActivityTabId) => {
    setActiveTab(id);
    window.history.replaceState(null, '', `#${id}`);
  };

  const visible = useMemo(() => activitiesForTab(activeTab), [activeTab]);

  return (
    <section id="activities" className="ag-section bg-architectural-grid">
      <div className="ag-container">
        <SectionHeader
          tag="The Full Park"
          title="World-Class Adventure"
          highlightWord="In Shivpuri"
          description="Extreme drops, aerial rides, ground games, a kids zone, and VR. One destination, every kind of day."
        />

        <div className="ag-tabs" role="tablist" aria-label="Activity categories">
          {TABS.map((tab) => {
            const pressed = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                className={`ag-tab${pressed ? ' is-active' : ''}`}
                aria-pressed={pressed}
                onClick={() => selectTab(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="ag-tab-count">{String(counts[tab.id] ?? 0).padStart(2, '0')}</span>
              </button>
            );
          })}
        </div>

        <div className="ag-lanes" aria-label="Activity categories">
          {TABS.map((tab) => (
            <Link
              key={tab.id}
              href={`/activities/#lane-${tab.id}`}
              className="ag-lane"
            >
              <Image
                src={tab.image}
                alt=""
                fill
                sizes="100vw"
                className="ag-lane-img"
              />
              <span className="ag-lane-scrim" aria-hidden="true" />
              <span className="ag-lane-copy">
                <span className="ag-lane-count">
                  {String(counts[tab.id] ?? 0).padStart(2, '0')}
                </span>
                <span className="ag-lane-label">{tab.label}</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="ag-grid">
          {visible.map((activity, index) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              index={String(index + 1).padStart(2, '0')}
              onBook={onBook}
              onDetails={setDetailsActivity}
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
        isOpen={!!detailsActivity}
        activity={detailsActivity}
        onClose={() => setDetailsActivity(null)}
        onBook={(title) => onBook(title)}
      />
    </section>
  );
};
