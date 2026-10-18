'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { SAFETY_STANDARDS } from '@/data/safetyRules';
import './SafetyProtocols.css';

const CODES = ['JMP', 'STD', 'HRN', 'CRD', 'MED', 'RSV'] as const;

const BRIEF = [
  { code: '100%', label: 'Safety record' },
  { code: '50K+', label: 'Jumps completed' },
  { code: 'AS/NZS', label: 'Operating code' },
] as const;

export const SafetyProtocols: React.FC = () => {
  const [active, setActive] = useState(0);
  const rule = SAFETY_STANDARDS[active];

  return (
    <section className="safe-proto" aria-label="Technical safety and operating protocols">
      <div className="container">
        <div className="safe-proto-head">
          <SectionHeader
            align="left"
            tag="Zero Compromise"
            title="Technical Safety"
            highlightWord="Protocols"
            description="Safety is the operating discipline at Thrill Factory. An impeccable record across 50,000+ completed jumps, held to AS/NZS 5848."
          />
        </div>

        <ul className="safe-proto-brief safe-proto-frame" aria-label="Safety record">
          {BRIEF.map((item) => (
            <li key={item.code}>
              <strong>{item.code}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="safe-proto-board">
          <div className="safe-proto-index safe-proto-frame" role="tablist" aria-label="Operating protocols">
            {SAFETY_STANDARDS.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={index === active}
                className={`safe-proto-mod${index === active ? ' is-on' : ''}`}
                onClick={() => setActive(index)}
              >
                <span className="safe-proto-idx">{String(index + 1).padStart(2, '0')}</span>
                <span className="safe-proto-copy">
                  <strong>{CODES[index]}</strong>
                  <em>{item.title}</em>
                </span>
              </button>
            ))}
          </div>

          <article className="safe-proto-dossier safe-proto-frame" aria-live="polite">
            <p className="safe-proto-kicker" key={`${rule.id}-kicker`}>
              <span className="safe-proto-node" aria-hidden="true" />
              {CODES[active]}
              <em>
                {String(active + 1).padStart(2, '0')} / {String(SAFETY_STANDARDS.length).padStart(2, '0')}
              </em>
            </p>
            <h3 key={rule.id}>{rule.title}</h3>
            <p className="safe-proto-desc">{rule.desc}</p>
          </article>
        </div>
      </div>
    </section>
  );
};
