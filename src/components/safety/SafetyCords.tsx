import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { MEDICAL_RESTRICTIONS } from '@/data/safetyRules';
import './SafetyCords.css';

const BRACKETS = [
  {
    code: 'A',
    range: '40–65 KG',
    note: 'Calibrated 12-strand dynamic core with high deceleration elasticity.',
  },
  {
    code: 'B',
    range: '66–85 KG',
    note: 'Medium-density oscillation cord for a balanced rebound curve.',
  },
  {
    code: 'C',
    range: '86–110 KG',
    note: 'High-tensile multi-weave cord with a reinforced nylon sheath.',
  },
] as const;

export const SafetyCords: React.FC = () => {
  return (
    <section id="medical" className="safe-cord" aria-label="Cord specifications and medical rules">
      <div className="container">
        <div className="safe-cord-head">
          <SectionHeader
            align="left"
            tag="Cord engineering"
            title="Weight"
            highlightWord="Brackets"
            description="Each cord is imported from specialist makers in New Zealand and matched to the jumper’s weight class before the platform."
          />
        </div>

        <div className="safe-cord-marks safe-cord-frame">
          {BRACKETS.map((item) => (
            <article key={item.code}>
              <p className="safe-cord-meta">
                <span>Bracket</span>
                <strong>{item.code}</strong>
              </p>
              <h3>{item.range}</h3>
              <p>{item.note}</p>
            </article>
          ))}
        </div>

        <div className="safe-cord-medical">
          <p className="safe-cord-kicker">
            <span className="safe-cord-node" aria-hidden="true" />
            Medical screen
          </p>
          <h3>These conditions sit out the jump.</h3>
          <ul className="safe-cord-list safe-cord-frame">
            {MEDICAL_RESTRICTIONS.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
