'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ThemeButton } from '@/components/common/ThemeButton';
import './CorporateMix.css';

type MixLane = 'all' | 'extreme' | 'indoor' | 'agility';

interface MixActivity {
  id: string;
  code: string;
  lane: Exclude<MixLane, 'all'>;
  title: string;
  category: string;
  spec: string;
  description: string;
  image: string;
  benefit: string;
}

const MIX: MixActivity[] = [
  {
    id: 'rafting',
    code: 'RFT',
    lane: 'extreme',
    title: 'Ganga White Water Rafting',
    category: 'Water',
    spec: 'Grade III–IV',
    description:
      'Squads hit Grade III & IV Ganges rapids with certified river guides, jackets, and rescue kayakers.',
    image: '/images/corporate/rafting.jpg',
    benefit: 'Synchronized coordination and collective grit under live current.',
  },
  {
    id: 'giant-swing',
    code: 'SWN',
    lane: 'extreme',
    title: 'Giant Canyon Swing',
    category: 'High Altitude',
    spec: '165 FT',
    description:
      'Tandem pendulum over the canyon cliff — dive together and accelerate as a pair.',
    image: '/images/corporate/giant-swing.jpg',
    benefit: 'Radical peer trust through a shared drop.',
  },
  {
    id: 'reverse-bungee',
    code: 'REV',
    lane: 'extreme',
    title: 'Reverse Bungee Rocket',
    category: 'Extreme Speed',
    spec: '180 FT · 3G',
    description:
      'Catapult duo teams 180 feet in under three seconds at forces reaching 3G.',
    image: '/images/corporate/reverse-bungee.jpg',
    benefit: 'Shatters workplace stress and resets team morale.',
  },
  {
    id: 'zipline',
    code: 'ZIP',
    lane: 'extreme',
    title: 'Canyon Flying Fox',
    category: 'Aerial Glide',
    spec: '60 KM/H',
    description:
      'Dual-cable zipline over forested valley and riverbed at up to 60 km/h.',
    image: '/images/corporate/zipline.jpg',
    benefit: 'Personal height-fear, faced in public and together.',
  },
  {
    id: 'bowling',
    code: 'BWL',
    lane: 'indoor',
    title: 'Indoor Bowling Tournament',
    category: 'Indoor Sports',
    spec: '4 Lanes',
    description:
      'Four-lane electronic alley with auto scoring — built for department vs department.',
    image: '/images/corporate/bowling.jpg',
    benefit: 'Friendly competition without the altitude.',
  },
  {
    id: 'vr-battlefield',
    code: 'VRT',
    lane: 'indoor',
    title: 'VR Tactical Battlefield',
    category: 'Virtual Reality',
    spec: 'Squad Sim',
    description:
      'Wireless multiplayer combat where squads must talk, plan, and clear missions live.',
    image: '/images/corporate/vr.jpg',
    benefit: 'Real-time strategy and spatial communication.',
  },
  {
    id: 'sky-cycling',
    code: 'SKY',
    lane: 'agility',
    title: 'Suspended Sky Cycling',
    category: 'Aerial Ropes',
    spec: '60 FT',
    description:
      'Pedal twin steel cables 60 feet up, with Himalayan views the whole way across.',
    image: '/images/corporate/sky-cycling.jpg',
    benefit: 'Calm focus, balance, and mental endurance.',
  },
  {
    id: 'wall-climbing',
    code: 'CLB',
    lane: 'agility',
    title: 'Competitive Wall Climbing',
    category: 'Bouldering',
    spec: 'Relay',
    description:
      'Multi-route towers with auto-belays and parallel speed lines for team relays.',
    image: '/images/corporate/wall-climbing.jpg',
    benefit: 'Agility plus loud, useful peer encouragement.',
  },
];

const LANES: Array<{ id: MixLane; code: string; label: string }> = [
  { id: 'all', code: 'MIX', label: 'Full Mix' },
  { id: 'extreme', code: 'XTR', label: 'Extreme' },
  { id: 'indoor', code: 'IND', label: 'Indoor' },
  { id: 'agility', code: 'AGL', label: 'Agility' },
];

export const CorporateMix: React.FC = () => {
  const [lane, setLane] = useState<MixLane>('all');

  const items = useMemo(
    () => (lane === 'all' ? MIX : MIX.filter((item) => item.lane === lane)),
    [lane]
  );

  const counts = useMemo(
    () => ({
      all: MIX.length,
      extreme: MIX.filter((item) => item.lane === 'extreme').length,
      indoor: MIX.filter((item) => item.lane === 'indoor').length,
      agility: MIX.filter((item) => item.lane === 'agility').length,
    }),
    []
  );

  return (
    <section id="corporate-activities" className="corp-mix" aria-label="Mix of Thrill Factory activities">
      <div className="container">
        <div className="corp-mix-head">
          <SectionHeader
            align="left"
            tag="Adventure Highlights"
            title="Mix of Thrill Factory"
            highlightWord="Activities"
            description="A balanced offsite board — adrenaline, indoor skill, and agility — so squads build confidence without running the same drill twice."
          />
        </div>

        <div className="corp-mix-lanes" role="tablist" aria-label="Activity mix lanes">
          {LANES.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={lane === item.id}
              className={`corp-mix-lane${lane === item.id ? ' is-on' : ''}`}
              onClick={() => setLane(item.id)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {item.label}
              <em>{String(counts[item.id]).padStart(2, '0')}</em>
            </button>
          ))}
        </div>

        <div className="corp-mix-grid">
          {items.map((item, index) => (
            <article key={item.id} className={`corp-mix-card corp-mix-card--${item.id}`}>
              <div className="corp-mix-media">
                <Image
                  src={item.image}
                  alt=""
                  width={640}
                  height={427}
                  className="corp-mix-img"
                />
                <span className="corp-mix-scrim" aria-hidden="true" />
                <span className="corp-mix-media-top">
                  <span className="corp-mix-idx">{String(index + 1).padStart(2, '0')}</span>
                  <span className="corp-mix-cat">{item.category}</span>
                </span>
                <span className="corp-mix-spec">{item.spec}</span>
              </div>

              <div className="corp-mix-body">
                <p className="corp-mix-code">
                  <span className="corp-mix-node" aria-hidden="true" />
                  {item.code}
                </p>
                <h3 className="corp-mix-title">{item.title}</h3>
                <p className="corp-mix-desc">{item.description}</p>
                <p className="corp-mix-value">
                  <strong>TBV</strong>
                  {item.benefit}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="corp-mix-pass">
          <div className="corp-mix-pass-copy">
            <span className="corp-mix-code">
              <span className="corp-mix-node" aria-hidden="true" />
              Build the day
            </span>
            <h3>Lock this mix into a custom offsite brief.</h3>
            <p>Tell us headcount and dates — we sequence outdoor, indoor, and agility into one Shivpuri program.</p>
          </div>
          <ThemeButton href="#corporate-form" variant="ghost" arrow>
            Request Offsite Proposal
          </ThemeButton>
        </div>
      </div>
    </section>
  );
};
