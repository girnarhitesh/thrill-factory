'use client';

import React, { useMemo, useState } from 'react';
import { ALL_PACKAGES, PackageCombo } from '@/data/packages';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ComboCard } from '@/components/home/ComboCard';
import { ThemeButton } from '@/components/common/ThemeButton';
import './CombosCatalog.css';

type ComboLaneId = 'all' | 'gravity' | 'indoor';

const INDOOR_COMBO_IDS = new Set([
  'archery-box-cricket-bowling-combo-rishikesh',
  'archery-box-cricket-bowling-gun-shooting-combo-rishikesh',
]);

const LANES: Array<{
  id: ComboLaneId;
  code: string;
  tag: string;
  title: string;
  highlight: string;
  description: string;
}> = [
  {
    id: 'all',
    code: 'ALL',
    tag: 'Full Menu',
    title: 'All',
    highlight: 'Combos',
    description: 'Every official bundle on the Shivpuri strip — gravity drops and indoor skill packs — listed so you can jump to the lane you came for.',
  },
  {
    id: 'gravity',
    code: 'XTR',
    tag: 'High Adrenaline',
    title: 'Extreme',
    highlight: 'Gravity',
    description: 'Bungee, reverse catapult, SCAD, giant swing, and rope drops bundled versus single tickets.',
  },
  {
    id: 'indoor',
    code: 'IND',
    tag: 'On Ground',
    title: 'Indoor',
    highlight: 'Skill',
    description: 'Archery, box cricket, bowling, and gun shooting — lighter packs for families and groups.',
  },
];

const isIndoorCombo = (combo: PackageCombo) => INDOOR_COMBO_IDS.has(combo.id);

interface CombosCatalogProps {
  onBook: (title: string) => void;
  onDetails: (combo: PackageCombo) => void;
}

export const CombosCatalog: React.FC<CombosCatalogProps> = ({ onBook, onDetails }) => {
  const [activeLane, setActiveLane] = useState<ComboLaneId>('all');

  const gravityCombos = useMemo(
    () => ALL_PACKAGES.filter((combo) => !isIndoorCombo(combo)),
    []
  );
  const indoorCombos = useMemo(
    () => ALL_PACKAGES.filter((combo) => isIndoorCombo(combo)),
    []
  );

  const visibleLanes = useMemo(() => {
    const gravity = {
      ...LANES[1],
      items: gravityCombos,
    };
    const indoor = {
      ...LANES[2],
      items: indoorCombos,
    };

    if (activeLane === 'gravity') return [gravity];
    if (activeLane === 'indoor') return [indoor];
    return [gravity, indoor];
  }, [activeLane, gravityCombos, indoorCombos]);

  const jumpToLane = (id: ComboLaneId) => {
    setActiveLane(id);
    window.requestAnimationFrame(() => {
      const catalog = document.getElementById('combos-catalog');
      catalog?.scrollIntoView({ block: 'start' });
    });
  };

  return (
    <section className="combos-page" aria-label="All thrill combos">
      <div className="combos-hero">
        <div className="combos-hero-bg" aria-hidden="true">
          <img src="/images/giant-swing.jpg" alt="" />
        </div>
        <div className="combos-hero-overlay" aria-hidden="true" />
        <span className="combos-hero-slash" aria-hidden="true" />

        <div className="container combos-hero-copy">
          <SectionHeader
            align="left"
            tag="The Shivpuri Thrill Factory"
            title="Save More with"
            highlightWord="Combos"
            description="Extreme packs and indoor game packs, listed by lane, so a full day costs less than buying each ticket alone."
          />

          <div className="combos-hero-strip">
            <span className="combos-stamp">
              <span className="combos-node" aria-hidden="true" />
              Save more
            </span>
            <p>Official bundles save up to ₹5,000 versus buying each ride on its own.</p>
            <ThemeButton href="/activities" size="sm" variant="ghost" tone="on-dark" arrow>
              View Rides
            </ThemeButton>
          </div>
        </div>
      </div>

      <nav className="combos-nav" aria-label="Combo lanes">
        <div className="container combos-nav-row">
          {LANES.map((lane, index) => {
            const count =
              lane.id === 'all'
                ? ALL_PACKAGES.length
                : lane.id === 'gravity'
                  ? gravityCombos.length
                  : indoorCombos.length;

            return (
              <button
                key={lane.id}
                type="button"
                className={`combos-tab${activeLane === lane.id ? ' is-on' : ''}`}
                onClick={() => jumpToLane(lane.id)}
                aria-current={activeLane === lane.id ? 'true' : undefined}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {lane.title}
                <em>{String(count).padStart(2, '0')}</em>
              </button>
            );
          })}
        </div>
      </nav>

      <div id="combos-catalog">
        {visibleLanes.map((lane, laneIndex) => (
          <div
            key={lane.id}
            id={`lane-${lane.id}`}
            className={`combos-lane${laneIndex % 2 === 1 || lane.id === 'indoor' ? ' is-alt' : ''}`}
          >
            <div className="container">
              <div className="combos-lane-head">
                <SectionHeader
                  align="left"
                  tag={`${lane.code} · ${lane.tag}`}
                  title={lane.title}
                  highlightWord={lane.highlight}
                  description={lane.description}
                />
              </div>

              <div className="combos-grid">
                {lane.items.map((combo) => (
                  <ComboCard
                    key={combo.id}
                    combo={combo}
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
        <div className="combos-pass">
          <div className="combos-pass-copy">
            <span className="combos-stamp">
              <span className="combos-node" aria-hidden="true" />
              Groups of 8+
            </span>
            <h3>Need a college or corporate combo day?</h3>
            <p>
              Shivpuri coordinators lock custom combo pricing, catering, and exclusive jump slots around one group window.
            </p>
          </div>
          <ThemeButton variant="ghost" arrow onClick={() => onBook('Custom Group Booking (8+ Persons)')}>
            Enquire Group Rates
          </ThemeButton>
        </div>
      </div>
    </section>
  );
};
