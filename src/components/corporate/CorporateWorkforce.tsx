'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ThemeButton } from '@/components/common/ThemeButton';
import './CorporateWorkforce.css';

const CAPSULES = [
  {
    id: 'leadership',
    code: 'LDR',
    title: 'Leadership Development',
    icon: '/images/corporate/competencies/leadership.png',
    who: 'Emerging leaders',
    format: 'Squad pressure',
    span: '1–5 DAY',
    desc: 'Experiential scenarios requiring emerging leaders to steer cross-functional squads under real-time pressure.',
  },
  {
    id: 'creativity',
    code: 'CRT',
    title: 'Creativity',
    icon: '/images/corporate/competencies/creativity.png',
    who: 'Every level',
    format: 'Constraint drills',
    span: 'HALF DAY',
    desc: 'Outdoor constraint challenges that dismantle rigid thinking and spark out-of-the-box tactical solutions.',
  },
  {
    id: 'communication',
    code: 'COM',
    title: 'Communication',
    icon: '/images/corporate/competencies/communication.png',
    who: 'Field squads',
    format: 'Relay cues',
    span: '1 DAY',
    desc: 'Paddling and aerial relays where clear, concise, and noise-free verbal cues directly determine success.',
  },
  {
    id: 'listening',
    code: 'LIS',
    title: 'Listening Skills',
    icon: '/images/corporate/competencies/listening.png',
    who: 'Pairs & leads',
    format: 'Blind navigation',
    span: 'HALF DAY',
    desc: 'Blindfolded navigation courses and harness drills demanding acute focus and empathy between partners.',
  },
  {
    id: 'relationship',
    code: 'REL',
    title: 'Relationship Building',
    icon: '/images/corporate/competencies/relationship.png',
    who: 'Cross-function',
    format: 'Shared risk',
    span: '1–2 DAY',
    desc: 'Breaking down departmental silos by placing managers, engineers, and creatives in mutual vulnerability.',
  },
  {
    id: 'problem',
    code: 'PRB',
    title: 'Problem Solving',
    icon: '/images/corporate/competencies/problem-solving.png',
    who: 'Mixed squads',
    format: 'Timed rescue',
    span: '1 DAY',
    desc: 'Time-boxed rescue and obstacle simulations forcing squads to synthesize diverse perspectives fast.',
  },
  {
    id: 'decision',
    code: 'DEC',
    title: 'Decision Making',
    icon: '/images/corporate/competencies/decision-making.png',
    who: 'Leads & managers',
    format: 'Risk trade-offs',
    span: '1–3 DAY',
    desc: 'Navigating risks, calculating trade-offs, and committing decisively before high-altitude launches.',
  },
  {
    id: 'adaptability',
    code: 'ADP',
    title: 'Adaptability',
    icon: '/images/corporate/competencies/adaptability.png',
    who: 'Whole company',
    format: 'Live shifts',
    span: '1–5 DAY',
    desc: 'Unpredictable river currents and rapid scenario shifts cultivating psychological resilience.',
  },
] as const;

const BRIEF = [
  { code: '08', label: 'Skill capsules' },
  { code: '1D–WK', label: 'Program length' },
  { code: 'JR–SR', label: 'Junior to senior' },
] as const;

export const CorporateWorkforce: React.FC = () => {
  const [active, setActive] = useState(0);
  const capsule = CAPSULES[active];

  return (
    <section
      id="workforce-programs"
      className="corp-skill"
      aria-label="Corporate workforce development programs"
    >
      <div className="container">
        <div className="corp-skill-head">
          <SectionHeader
            align="left"
            tag="Experiential Learning Capsules"
            title="Workforce Development"
            highlightWord="Programs"
            description="Our Board of Advisors and Expert Trainers design experiential learning capsules that sharpen essential workplace skills — from junior executives to senior leaders. Programs range from 1-day to week-long immersive journeys."
          />
        </div>

        <ul className="corp-skill-brief corp-skill-frame" aria-label="Program scope">
          {BRIEF.map((item) => (
            <li key={item.code}>
              <strong>{item.code}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="corp-skill-board">
          <div className="corp-skill-index corp-skill-frame" role="tablist" aria-label="Workforce skill capsules">
            {CAPSULES.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={index === active}
                className={`corp-skill-mod${index === active ? ' is-on' : ''}`}
                onClick={() => setActive(index)}
              >
                <span className="corp-skill-mod-idx">{String(index + 1).padStart(2, '0')}</span>
                <Image
                  src={item.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="corp-skill-mod-icon"
                />
                <span className="corp-skill-mod-copy">
                  <strong>{item.code}</strong>
                  <em>{item.title}</em>
                </span>
              </button>
            ))}
          </div>

          <article className="corp-skill-dossier corp-skill-frame" aria-live="polite">
            <div className="corp-skill-plate" key={`${capsule.id}-plate`}>
              <span className="corp-skill-watermark" aria-hidden="true">
                {String(active + 1).padStart(2, '0')}
              </span>
              <Image
                src={capsule.icon}
                alt=""
                width={128}
                height={128}
                className="corp-skill-icon"
              />
            </div>

            <div className="corp-skill-copy" key={`${capsule.id}-copy`}>
              <p className="corp-skill-kicker">
                <span className="corp-skill-node" aria-hidden="true" />
                {capsule.code}
                <em>
                  {String(active + 1).padStart(2, '0')} / {String(CAPSULES.length).padStart(2, '0')}
                </em>
              </p>
              <h3 className="corp-skill-title">{capsule.title}</h3>
              <p className="corp-skill-desc">{capsule.desc}</p>

              <ul className="corp-skill-facts">
                <li>
                  <span>Who</span>
                  <strong>{capsule.who}</strong>
                </li>
                <li>
                  <span>Drill</span>
                  <strong>{capsule.format}</strong>
                </li>
                <li>
                  <span>Span</span>
                  <strong>{capsule.span}</strong>
                </li>
              </ul>

              <ThemeButton href="#corporate-form" variant="ghost" arrow>
                Add to offsite brief
              </ThemeButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
