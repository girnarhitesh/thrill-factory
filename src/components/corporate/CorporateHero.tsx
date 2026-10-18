'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';
import { ThemeButton } from '@/components/common/ThemeButton';
import { SITE_CONFIG } from '@/constants/siteConfig';
import './CorporateHero.css';

const SLIDES = [
  {
    src: '/images/corporate/rafting.jpg',
    code: 'RFT',
    label: 'Ganga White Water Rafting',
    note: 'Squads on Grade III–IV water',
  },
  {
    src: '/images/corporate/giant-swing.jpg',
    code: 'SWN',
    label: 'Giant Canyon Swing',
    note: 'Tandem drop over the valley',
  },
  {
    src: '/images/corporate/reverse-bungee.jpg',
    code: 'REV',
    label: 'Reverse Bungee Rocket',
    note: '180 FT launch in under 3s',
  },
  {
    src: '/images/corporate/zipline.jpg',
    code: 'ZIP',
    label: 'Canyon Flying Fox',
    note: 'Dual-cable glide at 60 km/h',
  },
] as const;

const SLIDE_MS = 4200;

const BRIEF = [
  { code: 'HST', end: 50, suffix: '+', prefix: '', label: 'Corporate offsites hosted', short: 'Offsites hosted' },
  { code: 'SAF', end: 100, suffix: '%', prefix: '', label: 'Certified safety record', short: 'Safety record' },
  { code: 'CAP', end: 300, suffix: '+', prefix: '10–', label: 'Team capacity on site', short: 'Team capacity' },
  { code: 'RDE', end: 15, suffix: '+', prefix: '', label: 'Team challenges & rides', short: 'Challenges & rides' },
] as const;

const copyContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.12 },
  },
};

const copyItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const CorporateHero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = SLIDES[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDES.length);
    }, SLIDE_MS);

    return () => window.clearInterval(timer);
  }, [activeIndex]);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section className="corp-hero" aria-label="Corporate retreats at Thrill Factory">
      <div className="corp-hero-bg" aria-hidden="true">
        {SLIDES.map((item, index) => (
          <motion.img
            key={item.src}
            src={item.src}
            alt=""
            className={`corp-hero-slide corp-hero-slide--${item.code.toLowerCase()}${index === activeIndex ? ' is-on' : ''}`}
            initial={false}
            animate={{ opacity: index === activeIndex ? 1 : 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        ))}
      </div>
      <div className="corp-hero-overlay" aria-hidden="true" />
      <span className="corp-hero-slash" aria-hidden="true" />
      <span className="corp-hero-progress" key={activeIndex} aria-hidden="true" />

      <div className="container corp-hero-shell">
        <motion.div
          className="corp-hero-copy"
          variants={copyContainer}
          initial="hidden"
          animate="show"
        >
          <motion.span className="corp-hero-stamp" variants={copyItem}>
            <span className="corp-hero-node" aria-hidden="true" />
            Corporate retreats · Team building
          </motion.span>

          <motion.h1 className="corp-hero-title" variants={copyItem}>
            <span>Beyond Meetings.</span>
            <span className="corp-hero-title-accent">Into Memories.</span>
          </motion.h1>

          <motion.p className="corp-hero-lead" variants={copyItem}>
            From world-class adventure challenges at Thrill Factory to the serene
            charm of Rishikesh — offsites that energize teams, build connections,
            and reset perspective.
          </motion.p>

          <motion.div className="corp-hero-reel" variants={copyItem}>
            <span className="corp-hero-reel-idx">
              {String(activeIndex + 1).padStart(2, '0')}
              <em>/ {String(SLIDES.length).padStart(2, '0')}</em>
            </span>
            <span className="corp-hero-reel-copy">
              <strong>{slide.code}</strong>
              {slide.label}
            </span>
            <div className="corp-hero-dots" role="tablist" aria-label="Offsite backgrounds">
              {SLIDES.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  role="tab"
                  aria-label={item.label}
                  aria-selected={index === activeIndex}
                  className={`corp-hero-dot${index === activeIndex ? ' is-on' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </motion.div>

          <motion.div className="corp-hero-ctas" variants={copyItem}>
            <ThemeButton href="#corporate-form" variant="solid" tone="on-dark" arrow>
              Request Offsite Proposal
            </ThemeButton>
            <ThemeButton href={`tel:${SITE_CONFIG.phones[0].raw}`} variant="ghost" tone="on-dark">
              Call Corporate Desk
            </ThemeButton>
          </motion.div>
        </motion.div>

        <motion.aside
          className="corp-hero-brief"
          variants={copyItem}
          initial="hidden"
          animate="show"
          aria-label="Offsite briefing"
        >
          <p className="corp-hero-brief-label">
            <span className="corp-hero-node" aria-hidden="true" />
            Offsite brief · Shivpuri
          </p>

          <ul className="corp-hero-brief-list">
            {BRIEF.map((stat, index) => (
              <li key={stat.code}>
                <span className="corp-hero-brief-idx">{String(index + 1).padStart(2, '0')}</span>
                <span className="corp-hero-brief-meta">
                  <span className="corp-hero-brief-code">{stat.code}</span>
                  <span className="corp-hero-brief-name">
                    <span className="corp-hero-brief-name-full">{stat.label}</span>
                    <span className="corp-hero-brief-name-short">{stat.short}</span>
                  </span>
                </span>
                <span className="corp-hero-brief-value">
                  {stat.prefix}
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={4} delay={0.25 + index * 0.1} />
                </span>
              </li>
            ))}
          </ul>

          <p className="corp-hero-brief-foot">{slide.note}</p>
        </motion.aside>
      </div>

      <a className="corp-hero-scroll" href="#corporate-activities" aria-label="Scroll to corporate activities">
        <span>See the program</span>
        <ChevronDown size={16} />
      </a>
    </section>
  );
};
