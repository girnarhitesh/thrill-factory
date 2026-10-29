'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { ActivityTabId, activitiesForTab } from '@/data/activities';
import { Activity } from '@/types';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ActivityCard } from '@/components/home/ActivityCard';
import { ThemeButton } from '@/components/common/ThemeButton';
import './ActivitiesCatalog.css';

type ActivityGroupId = ActivityTabId;

const GROUPS: Array<{
  id: ActivityGroupId;
  code: string;
  tag: string;
  title: string;
  highlight: string;
  description: string;
}> = [
  {
    id: 'extreme',
    code: 'XTR',
    tag: 'High Adrenaline',
    title: 'Extreme',
    highlight: 'Rides',
    description: 'Bungee, giant swing, freestyle, rope bungee, zip line, SCAD, and reverse bungee.',
  },
  {
    id: 'moderate',
    code: 'MOD',
    tag: 'Aerial Park',
    title: 'Moderate',
    highlight: 'Heights',
    description: 'Sky cycling, rope course, quick jump, and 360 cycle — high views, lighter drop.',
  },
  {
    id: 'entertainment',
    code: 'ENT',
    tag: 'On Ground',
    title: 'Entertainment',
    highlight: 'Arena',
    description: 'Climbing, archery, bowling, cricket, shooting, and lounge games after the leap.',
  },
  {
    id: 'kids',
    code: 'KID',
    tag: 'Family Deck',
    title: 'Kids',
    highlight: 'Zone',
    description: 'Soft play, trampoline, ball pool, and mini rides while the rest of the group jumps.',
  },
  {
    id: 'vr',
    code: 'VRZ',
    tag: 'Indoor Sim',
    title: 'VR',
    highlight: 'Lab',
    description: 'VR bungee, battlefield, arcade, and AI photobooth for indoor thrill.',
  },
];

interface ActivitiesCatalogProps {
  onBook: (title: string) => void;
  onDetails: (activity: Activity) => void;
}

export const ActivitiesCatalog: React.FC<ActivitiesCatalogProps> = ({ onBook, onDetails }) => {
  const [activeLane, setActiveLane] = useState<ActivityGroupId>('extreme');

  const grouped = useMemo(
    () =>
      GROUPS.map((group) => ({
        ...group,
        items: activitiesForTab(group.id),
      })),
    []
  );

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    const target = document.getElementById(hash);
    if (!target) return;
    window.requestAnimationFrame(() => {
      target.scrollIntoView({ block: 'start' });
    });
  }, []);

  useEffect(() => {
    const lanes = Array.from(document.querySelectorAll<HTMLElement>('.activities-lane'));
    if (!lanes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.id?.replace('lane-', '') as ActivityGroupId | undefined;
        if (id) setActiveLane(id);
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0.08, 0.25, 0.5] }
    );

    lanes.forEach((lane) => observer.observe(lane));
    return () => observer.disconnect();
  }, []);

  const jumpToLane = (id: ActivityGroupId) => {
    const lane = document.getElementById(`lane-${id}`);
    if (!lane) return;
    setActiveLane(id);
    window.history.replaceState(null, '', `#lane-${id}`);
    lane.scrollIntoView({ block: 'start' });
  };

  return (
    <section className="activities-page" aria-label="All adventure activities">
      <div className="activities-hero">
        <div className="activities-hero-bg" aria-hidden="true">
          <img src="/images/activities-header-image.webp" alt="" />
        </div>
        <div className="activities-hero-overlay" aria-hidden="true" />
        <span className="activities-hero-slash" aria-hidden="true" />

        <div className="container activities-hero-copy">
          <SectionHeader
            align="left"
            tag="The Shivpuri Thrill Factory"
            title="Adventures &"
            highlightWord="Attractions"
            description="Every ride on the Shivpuri strip — extreme drops, aerial park, entertainment arena, kids zone, and VR lab — listed by lane so you can jump to what you came for."
          />

          <div className="activities-combo">
            <span className="activities-combo-stamp">
              <span className="activities-combo-node" aria-hidden="true" />
              Save more
            </span>
            <p>Bundle jumps and save up to ₹2,000 versus single tickets.</p>
            <ThemeButton href="/combos" size="sm" variant="ghost" tone="on-dark" arrow>
              Explore Combos
            </ThemeButton>
          </div>
        </div>
      </div>

      <nav className="activities-nav" aria-label="Activity lanes">
        <div className="container activities-nav-row">
          {grouped.map((group, index) => (
            <button
              key={group.id}
              type="button"
              className={`activities-tab${activeLane === group.id ? ' is-on' : ''}`}
              onClick={() => jumpToLane(group.id)}
              aria-current={activeLane === group.id ? 'true' : undefined}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {group.title}
              <em>{String(group.items.length).padStart(2, '0')}</em>
            </button>
          ))}
        </div>
      </nav>

      {grouped.map((group, laneIndex) => (
        <div
          key={group.id}
          id={`lane-${group.id}`}
          className={`activities-lane${laneIndex % 2 === 0 ? ' is-alt' : ''}`}
        >
          <div className="container">
            <div className="activities-lane-head">
              <SectionHeader
                align="left"
                tag={`${group.code} · ${group.tag}`}
                title={group.title}
                highlightWord={group.highlight}
                description={group.description}
              />
            </div>

            <div className="activities-grid">
              {group.items.map((activity, index) => (
                <div key={activity.id} id={activity.id} className="activities-card-anchor">
                  <ActivityCard
                    activity={activity}
                    index={String(index + 1).padStart(2, '0')}
                    onBook={onBook}
                    onDetails={onDetails}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="container">
        <div className="activities-pass">
          <div className="activities-pass-copy">
            <span className="activities-combo-stamp">
              <span className="activities-combo-node" aria-hidden="true" />
              Groups & custom days
            </span>
            <h3>Need a custom pass for college, office, or family?</h3>
            <p>
              Shivpuri coordinators lock a mixed-lane schedule — extreme, kids, and entertainment — around one slot.
            </p>
          </div>
          <ThemeButton variant="ghost" arrow onClick={() => onBook('Custom Multi-Activity Pass')}>
            Enquire Custom Pass
          </ThemeButton>
        </div>
      </div>
    </section>
  );
};
