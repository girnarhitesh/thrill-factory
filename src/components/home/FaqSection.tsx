'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS_DATA } from '@/data/faqs';
import { SectionHeader } from '@/components/common/SectionHeader';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqSchema } from '@/seo/schema';
import './FaqSection.css';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  const toggleFaq = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faqs" className="faq-section" aria-label="Frequently asked questions">
      <JsonLd data={faqSchema} />
      <div className="container">
        <SectionHeader
          tag="Got Questions?"
          title="Frequently Asked"
          highlightWord="Questions"
          description="Heights, clothing, transport, age limits, and safety — locked in before you book."
        />

        <div className="faq-board">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openId === faq.id;
            const answerId = `${faq.id}-answer`;

            return (
              <article
                key={faq.id}
                className={`faq-item${isOpen ? ' is-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className="faq-idx">{String(index + 1).padStart(2, '0')}</span>
                  <span className="faq-question">{faq.question}</span>
                  <span className="faq-arrow" aria-hidden="true">
                    <ChevronDown size={16} strokeWidth={1.75} />
                  </span>
                </button>

                <div className="faq-answer" id={answerId} role="region">
                  <div className="faq-answer-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
