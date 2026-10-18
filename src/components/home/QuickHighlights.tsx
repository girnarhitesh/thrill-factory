'use client';

import React from 'react';
import { Compass, MessageCircle, ShieldCheck, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import './QuickHighlights.css';

const HIGHLIGHTS = [
  {
    index: '01',
    code: 'AS/NZS',
    icon: ShieldCheck,
    title: '100% Safety Record',
    desc: 'Dual redundant harness system and AS/NZS certified cords inspected daily before opening.',
  },
  {
    index: '02',
    code: '4K',
    icon: Video,
    title: 'Complimentary 4K Video',
    desc: 'High-definition multi-angle action camera & DSLR recording included with your jump.',
  },
  {
    index: '03',
    code: 'DIRECT',
    icon: MessageCircle,
    title: 'Direct WhatsApp Booking',
    desc: 'Instant slot verification with zero advance booking commission or waiting in lines.',
  },
  {
    index: '04',
    code: '25 MIN',
    icon: Compass,
    title: 'Prime Shivpuri Location',
    desc: 'Just 25 mins from Tapovan, Rishikesh with scenic canyon views and traveler cafe.',
  },
] as const;

const rail = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const cell = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const QuickHighlights: React.FC = () => {
  return (
    <section className="quick-highlights" aria-label="Why jumpers choose Thrill Factory">
      <div className="container">
        <div className="qh-head">
          <span className="qh-stamp">
            <span className="qh-stamp-node" aria-hidden="true" />
            The Briefing
          </span>
          <p className="qh-head-copy">Four things locked in before you step on the platform.</p>
        </div>

        <motion.div
          className="qh-rail"
          variants={rail}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article className="qh-cell" key={item.index} variants={cell}>
                <span className="qh-cell-fill" aria-hidden="true" />
                <div className="qh-cell-top">
                  <span className="qh-index">{item.index}</span>
                  <span className="qh-code">{item.code}</span>
                </div>
                <div className="qh-icon">
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <h3 className="qh-title">{item.title}</h3>
                <p className="qh-desc">{item.desc}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
