import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import './SafetyPolicy.css';

const RULES = [
  {
    code: 'WTH',
    title: 'Weather protocol',
    text: 'Heavy rain, gale-force wind, or lightning pauses jumps. The slot moves, or the booking is held as full credit.',
  },
  {
    code: 'REF',
    title: 'Jump refusal',
    text: 'Jump Masters will talk a hesitant guest through the deck. Once the harness is fitted on the platform, the slot is not refunded.',
  },
  {
    code: 'RSC',
    title: 'Free reschedule',
    text: 'Move the date any time up to 24 hours before the slot, on WhatsApp with the desk.',
  },
] as const;

export const SafetyPolicy: React.FC = () => {
  return (
    <section id="cancellation" className="safe-policy" aria-label="Booking and weather policies">
      <div className="container">
        <div id="terms" className="safe-policy-head">
          <SectionHeader
            align="left"
            tag="House rules"
            title="Booking &"
            highlightWord="Weather"
            description="How the desk handles weather holds, a change of mind on the deck, and moving a slot."
          />
        </div>

        <ol className="safe-policy-list safe-policy-frame">
          {RULES.map((rule, index) => (
            <li key={rule.code}>
              <span className="safe-policy-idx">{String(index + 1).padStart(2, '0')}</span>
              <span className="safe-policy-code">{rule.code}</span>
              <div>
                <h3>{rule.title}</h3>
                <p>{rule.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
