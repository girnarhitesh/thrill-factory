'use client';

import React, { useEffect, useMemo, useState } from 'react';
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
          highlightWord="In Rishikesh"
          description="Extreme drops, aerial rides, ground games, a kids zone, and VR. One destination, every kind of day."
        />

        <div
          className="ag-tabs"
          role="tablist"
          aria-label="Activity categories"
          onKeyDown={(event) => {
            if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
            event.preventDefault();
            const index = TABS.findIndex((tab) => tab.id === activeTab);
            const direction = event.key === 'ArrowRight' ? 1 : -1;
            const next = TABS[(index + direction + TABS.length) % TABS.length];
            selectTab(next.id);
            document.getElementById(`ag-tab-${next.id}`)?.focus();
          }}
        >
          {TABS.map((tab) => {
            const selected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`ag-tab-${tab.id}`}
                type="button"
                role="tab"
                className={`ag-tab${selected ? ' is-active' : ''}`}
                aria-selected={selected}
                aria-controls="ag-panel"
                tabIndex={selected ? 0 : -1}
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
              <img
                src={tab.image}
                alt={`${tab.label} at Thrill Factory, Rishikesh`}
                width={640}
                height={360}
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

        <div id="ag-panel" role="tabpanel" aria-labelledby={`ag-tab-${activeTab}`} className="ag-grid">
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
