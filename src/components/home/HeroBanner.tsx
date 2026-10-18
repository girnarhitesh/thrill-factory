'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';
import { ThemeButton } from '@/components/common/ThemeButton';
import './HeroBanner.css';

const HERO_BACKGROUNDS = [
  '/images/HeroBackground.jpg',
  '/images/HeroBackground4.webp',
  '/images/HeroBackground2.webp',
  '/images/HeroBackground3.webp',
] as const;

const SLIDE_INTERVAL_MS = 3000;

const HERO_STATS = [
  { end: 165, suffix: ' FT', label: 'Freefall Drop' },
  { end: 180, suffix: ' FT', label: 'Reverse Catapult' },
  { end: 50000, suffix: '+', label: 'Successful Jumps' },
  { end: 4.9, decimals: 1, suffix: '', label: 'Google Rated', logo: 'google' },
] as const;

const GoogleGLogo = () => (
  <svg className="glass-stat-google google-g-live" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

const copyContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
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

interface HeroBannerProps {
  onOpenBooking: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenBooking }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_BACKGROUNDS.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [activeIndex]);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section className="hero-adventure-banner">
      <div className="hero-banner-bg" aria-hidden="true">
        {HERO_BACKGROUNDS.map((src, index) => (
          <motion.img
            key={src}
            src={src}
            alt=""
            className="hero-banner-slide"
            initial={false}
            animate={{ opacity: index === activeIndex ? 1 : 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        ))}
      </div>
      <div className="hero-banner-overlay" />

      <div className="container hero-banner-container">
        <motion.div
          className="hero-banner-copy"
          variants={copyContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div className="hero-adventure-badge" variants={copyItem}>
            <span className="hero-badge-pulse" />
            <span>India’s Premier 165 FT Bungee · Shivpuri, Rishikesh</span>
          </motion.div>

          <motion.h1 className="hero-adventure-title" variants={copyItem}>
            <span className="hero-title-kicker">The Ultimate</span>
            <span className="hero-title-highlight">Extreme Adventure</span>
          </motion.h1>

          <motion.p className="hero-adventure-subtitle" variants={copyItem}>
            India’s highest 165 FT fixed platform leap and 180 FT reverse rocket
            over the scenic Shivpuri river valley.
          </motion.p>

          <motion.div className="hero-adventure-ctas" variants={copyItem}>
            <ThemeButton variant="solid" tone="on-dark" arrow onClick={onOpenBooking}>
              Book Your Jump
            </ThemeButton>

            <ThemeButton
              variant="ghost"
              tone="on-dark"
              href="#instagram-reels"
              className="hero-cta-reels"
            >
              Watch Reels
            </ThemeButton>
          </motion.div>

          <motion.div className="hero-floating-stats" variants={copyItem}>
            {HERO_STATS.map((stat, index) => (
              <div className="hero-glass-stat" key={stat.label}>
                <div className="glass-stat-value">
                  <AnimatedCounter
                    end={stat.end}
                    suffix={stat.suffix}
                    decimals={'decimals' in stat ? stat.decimals : 0}
                    duration={4}
                    delay={0.2 + index * 0.08}
                  />
                  {'logo' in stat && stat.logo === 'google' ? <GoogleGLogo /> : null}
                </div>
                <div className="glass-stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div className="hero-footer-controls" variants={copyItem}>
            <div className="hero-slide-dots" role="tablist" aria-label="Hero backgrounds">
              {HERO_BACKGROUNDS.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  role="tab"
                  aria-label={`Show background ${index + 1}`}
                  aria-selected={index === activeIndex}
                  className={`hero-slide-dot${index === activeIndex ? ' is-active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            <a
              href="#activities"
              className="hero-scroll-indicator"
              aria-label="Scroll to explore activities"
            >
              <span className="hero-scroll-text">Explore rides</span>
              <span className="hero-scroll-chevron">
                <ChevronDown size={16} />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
