'use client';

import React, { useMemo, useState } from 'react';
import { KIDS_ZONE_DATA } from '@/data/kidsZone';
import { Activity } from '@/types';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ActivityCard } from '@/components/home/ActivityCard';
import { ThemeButton } from '@/components/common/ThemeButton';
import './KidsZoneCatalog.css';

type KidsLaneId = 'all' | 'play' | 'rides' | 'games';

const PLAY_IDS = new Set(['soft-play-zone', 'ball-pool', 'kids-trampoline']);
const RIDE_IDS = new Set(['hoverboard-ride', 'car-ride-kids', 'scooter-ride-kids']);
const GAME_IDS = new Set(['wall-climbing-child', 'indoor-arcade']);

const LANES: Array<{
  id: KidsLaneId;
  code: string;
  tag: string;
  title: string;
  highlight: string;
  description: string;
}> = [
  {
    id: 'all',
    code: 'ALL',
    tag: 'Family Deck',
    title: 'All',
    highlight: 'Play',
    description: 'Every kids session on the Shivpuri floor — soft play, mini rides, climbing, and arcade — listed so parents can jump to the bay they came for.',
  },
  {
    id: 'play',
    code: 'PLY',
    tag: 'Cushioned Park',
    title: 'Soft',
    highlight: 'Play',
    description: 'Soft play, ball pool, and trampoline — padded bays for younger explorers while the rest of the group jumps.',
  },
  {
    id: 'rides',
    code: 'RID',
    tag: 'Mini Circuit',
    title: 'Mini',
    highlight: 'Rides',
    description: 'Hoverboard, car ride, and scooter — supervised circuits with helmets, pads, and marshal briefings.',
  },
  {
    id: 'games',
    code: 'GAM',
    tag: 'Skill Floor',
    title: 'Climb &',
    highlight: 'Games',
    description: 'Child wall climbing and indoor arcade — focus, tokens, and a cooler bay for mixed-age families.',
  },
];

const SAFETY_NOTES = [
  {
    code: 'PAD',
    title: 'Cushioned bays',
    text: 'Soft play, ball pool, and tracks sit on high-density EVA foam.',
  },
  {
    code: 'STA',
    title: 'Full-time marshals',
    text: 'Attendants stay on hoverboard, trampoline, and play floors.',
  },
  {
    code: 'CAF',
    title: 'Parents café view',
    text: 'Watch the kids bay from the cafeteria overlooking the valley.',
  },
];

interface KidsZoneCatalogProps {
  onBook: (title: string) => void;
  onDetails: (activity: Activity) => void;
}

export const KidsZoneCatalog: React.FC<KidsZoneCatalogProps> = ({ onBook, onDetails }) => {
  const [activeLane, setActiveLane] = useState<KidsLaneId>('all');

  const playItems = useMemo(
    () => KIDS_ZONE_DATA.filter((item) => PLAY_IDS.has(item.id)),
    []
  );
  const rideItems = useMemo(
    () => KIDS_ZONE_DATA.filter((item) => RIDE_IDS.has(item.id)),
    []
  );
  const gameItems = useMemo(
    () => KIDS_ZONE_DATA.filter((item) => GAME_IDS.has(item.id)),
    []
  );

  const visibleLanes = useMemo(() => {
    const play = { ...LANES[1], items: playItems };
    const rides = { ...LANES[2], items: rideItems };
    const games = { ...LANES[3], items: gameItems };

    if (activeLane === 'play') return [play];
    if (activeLane === 'rides') return [rides];
    if (activeLane === 'games') return [games];
    return [play, rides, games];
  }, [activeLane, playItems, rideItems, gameItems]);

  const jumpToLane = (id: KidsLaneId) => {
    setActiveLane(id);
    window.requestAnimationFrame(() => {
      document.getElementById('kids-catalog')?.scrollIntoView({ block: 'start' });
    });
  };

  return (
    <section className="kids-page" aria-label="Kids zone activities">
      <div className="kids-hero">
        <div className="kids-hero-bg" aria-hidden="true">
          <img src="/images/soft-play-zone.jpg" alt="" />
        </div>
        <div className="kids-hero-overlay" aria-hidden="true" />
        <span className="kids-hero-slash" aria-hidden="true" />

        <div className="container kids-hero-copy">
          <SectionHeader
            align="left"
            tag="The Shivpuri Thrill Factory"
            title="Kids Zone &"
            highlightWord="Family Fun"
            description="Padded soft play, electric rides, climbing, and supervised trampolines from ₹100, on the same Shivpuri day as the rest of the park."
          />

          <div className="kids-hero-strip">
            <span className="kids-stamp">
              <span className="kids-node" aria-hidden="true" />
              Family deck
            </span>
            <p>Looking for the other lanes and combo packs on the same visit?</p>
            <ThemeButton href="/activities" size="sm" variant="ghost" tone="on-dark" arrow>
              View Adventures
            </ThemeButton>
          </div>
        </div>
      </div>

      <nav className="kids-nav" aria-label="Kids lanes">
        <div className="container kids-nav-row">
          {LANES.map((lane, index) => {
            const count =
              lane.id === 'all'
                ? KIDS_ZONE_DATA.length
                : lane.id === 'play'
                  ? playItems.length
                  : lane.id === 'rides'
                    ? rideItems.length
                    : gameItems.length;

            return (
              <button
                key={lane.id}
                type="button"
                className={`kids-tab${activeLane === lane.id ? ' is-on' : ''}`}
                onClick={() => jumpToLane(lane.id)}
                aria-current={activeLane === lane.id ? 'true' : undefined}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {lane.id === 'games' ? 'Games' : lane.title}
                <em>{String(count).padStart(2, '0')}</em>
              </button>
            );
          })}
        </div>
      </nav>

      <div id="kids-catalog">
        {visibleLanes.map((lane, laneIndex) => (
          <div
            key={lane.id}
            id={`lane-${lane.id}`}
            className={`kids-lane${laneIndex % 2 === 1 ? ' is-alt' : ''}`}
          >
            <div className="container">
              <div className="kids-lane-head">
                <SectionHeader
                  align="left"
                  tag={`${lane.code} · ${lane.tag}`}
                  title={lane.title}
                  highlightWord={lane.highlight}
                  description={lane.description}
                />
              </div>

              <div className="kids-grid">
                {lane.items.map((activity, index) => (
                  <ActivityCard
                    key={activity.id}
                    activity={activity}
                    index={String(index + 1).padStart(2, '0')}
                    onBook={onBook}
                    onDetails={onDetails}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container">
        <div className="kids-notes">
          {SAFETY_NOTES.map((note) => (
            <div key={note.code} className="kids-note">
              <span className="kids-stamp">
                <span className="kids-node" aria-hidden="true" />
                {note.code}
              </span>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
            </div>
          ))}
        </div>

        <div className="kids-pass">
          <div className="kids-pass-copy">
            <span className="kids-stamp">
              <span className="kids-node" aria-hidden="true" />
              Birthdays & groups
            </span>
            <h3>Need a kids pass for a birthday or family slot?</h3>
            <p>
              Shivpuri coordinators lock mixed play, ride, and arcade sessions around one window while parents watch from the café.
            </p>
          </div>
          <ThemeButton variant="ghost" arrow onClick={() => onBook('Kids Zone Family Pass')}>
            Enquire Kids Pass
          </ThemeButton>
        </div>
      </div>
    </section>
  );
};
