'use client';

import React, { useRef } from 'react';
import { Play } from 'lucide-react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';
import { ThemeButton } from '@/components/common/ThemeButton';
import './HeroBanner.css';

const HERO_VIDEO = '/images/HeroHomeVideo.mp4';
const HERO_POSTER = '/images/HeroBackground.jpg';

const HERO_STATS = [
  { end: 165, suffix: ' FT', label: 'Freefall Drop' },
  { end: 180, suffix: ' FT', label: 'Reverse Catapult' },
  { end: 50000, suffix: '+', label: 'Successful Jumps' },
  { end: 4.9, decimals: 1, suffix: '', label: 'Google Rated', logo: 'google' },
] as const;

const SCALE_LABELS = [
  { ft: '165 FT', top: '0%' },
  { ft: '120 FT', top: '27.3%' },
  { ft: '80 FT', top: '51.5%' },
  { ft: '40 FT', top: '75.8%' },
  { ft: '0 FT', top: '100%' },
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

const BUNGEE = {
  gravity: 3.2,
  restLength: 0.32,
  stiffness: 10.6,
  damping: 0.78,
  airDrag: 0.18,
  fadeOut: 0.45,
  fadeIn: 0.5,
  hold: 0.22,
  ampWindow: 1.15,
  ampThreshold: 0.055,
  settleTime: 0.4,
} as const;

const HeroBungeeJumper: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const progress = useMotionValue(reduceMotion ? 0.78 : 0);
  const rotate = useMotionValue(0);
  const stretch = useMotionValue(1);
  const opacity = useMotionValue(1);
  const top = useTransform(progress, (value) => `${value * 100}%`);

  const physics = useRef({
    y: 0,
    v: 0.03,
    clock: 0,
    phase: 'fall' as 'fall' | 'fadeOut' | 'fadeIn' | 'hold',
    fade: 1,
    yMax: 0,
    yMin: 1,
    sampleT: 0,
    stableT: 0,
    holdT: 0,
  });

  useAnimationFrame((_, delta) => {
    if (reduceMotion) {
      progress.set(0.78);
      rotate.set(0);
      stretch.set(1);
      opacity.set(1);
      return;
    }

    const state = physics.current;
    const dt = Math.min(delta / 1000, 0.033);

    if (state.phase === 'fadeOut') {
      state.fade = Math.max(0, state.fade - dt / BUNGEE.fadeOut);
      opacity.set(state.fade);
      if (state.fade <= 0) {
        state.y = 0;
        state.v = 0;
        state.clock = 0;
        state.fade = 0;
        state.yMax = 0;
        state.yMin = 1;
        state.sampleT = 0;
        state.stableT = 0;
        state.phase = 'fadeIn';
        progress.set(0);
        rotate.set(0);
        stretch.set(1);
      }
      return;
    }

    if (state.phase === 'fadeIn') {
      state.fade = Math.min(1, state.fade + dt / BUNGEE.fadeIn);
      opacity.set(state.fade);
      progress.set(0);
      rotate.set(0);
      stretch.set(1);
      if (state.fade >= 1) {
        state.fade = 1;
        state.holdT = 0;
        state.phase = 'hold';
      }
      return;
    }

    if (state.phase === 'hold') {
      state.holdT += dt;
      opacity.set(1);
      progress.set(0);
      rotate.set(0);
      stretch.set(1);
      if (state.holdT >= BUNGEE.hold) {
        state.v = 0.04;
        state.phase = 'fall';
      }
      return;
    }

    const steps = 2;
    const h = dt / steps;

    for (let i = 0; i < steps; i += 1) {
      let force = BUNGEE.gravity;

      if (state.y > BUNGEE.restLength) {
        const extension = state.y - BUNGEE.restLength;
        force += -BUNGEE.stiffness * extension - BUNGEE.damping * state.v;
      } else {
        force += -BUNGEE.airDrag * state.v;
      }

      state.v += force * h;
      state.y += state.v * h;

      if (state.y > 1) {
        state.y = 1;
        if (state.v > 0) state.v = 0;
      }

      if (state.y < 0) {
        state.y = 0;
        state.v = Math.max(Math.abs(state.v) * 0.2, 0.04);
      }
    }

    state.clock += dt;
    state.yMax = Math.max(state.yMax, state.y);
    state.yMin = Math.min(state.yMin, state.y);
    state.sampleT += dt;

    if (state.sampleT > BUNGEE.ampWindow) {
      const amplitude = state.yMax - state.yMin;
      const hanging = state.clock > 2.4 && state.y > 0.58 && Math.abs(state.v) < 0.22;
      if (amplitude < BUNGEE.ampThreshold && hanging) {
        state.stableT += state.sampleT;
      } else {
        state.stableT = 0;
      }
      state.yMax = state.y;
      state.yMin = state.y;
      state.sampleT = 0;

      if (state.stableT >= BUNGEE.settleTime) {
        state.phase = 'fadeOut';
        state.stableT = 0;
      }
    }

    const extension = Math.max(0, state.y - BUNGEE.restLength);
    const slack = Math.min(1, state.y / BUNGEE.restLength);
    const scaleY = state.y > BUNGEE.restLength ? 1 + extension * 0.24 : 0.95 + slack * 0.05;
    const tilt = Math.max(-12, Math.min(12, state.v * 5.2)) + Math.sin(state.clock * 2.8) * 0.9;

    progress.set(state.y);
    rotate.set(tilt);
    stretch.set(scaleY);
    opacity.set(1);
  });

  return (
    <span className="hero-altimeter-fall">
      <motion.span className="hero-altimeter-marker" style={{ top, opacity }}>
        <motion.img
          className="hero-altimeter-jumper"
          src="/images/bungee-jumping.png"
          alt=""
          style={{
            x: '-50%',
            rotate,
            scaleY: stretch,
            originX: 0.5,
            originY: 0,
          }}
        />
      </motion.span>
    </span>
  );
};

const bindHeroVideo = (node: HTMLVideoElement | null) => {
  if (!node) return;
  node.muted = true;
  node.defaultMuted = true;
  node.playsInline = true;
  node.loop = true;
  const play = () => {
    void node.play().catch(() => undefined);
  };
  play();
};

interface HeroBannerProps {
  onOpenBooking: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="hero-adventure-banner">
      <div className="hero-banner-bg" aria-hidden="true">
        <video
          ref={bindHeroVideo}
          className="hero-banner-video"
          src={HERO_VIDEO}
          poster={HERO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      </div>
      <div className="hero-banner-overlay" aria-hidden="true" />

      <div className="hero-stage">
        <div className="hero-window-wrap">
          <p className="hero-altimeter-giant" aria-hidden="true">
            165 FT
          </p>

          <div className="hero-window">
            <video
              ref={bindHeroVideo}
              className="hero-window-media"
              src={HERO_VIDEO}
              poster={HERO_POSTER}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
          </div>

          <div className="hero-altimeter-scale" aria-hidden="true">
            <span className="hero-altimeter-rail" />
            <span className="hero-altimeter-ticks" />
            {SCALE_LABELS.map((label) => (
              <span
                key={label.ft}
                className="hero-altimeter-label"
                style={{ top: label.top }}
              >
                {label.ft}
              </span>
            ))}
            <HeroBungeeJumper />
          </div>
        </div>

        <div className="hero-band">
          <div className="hero-band-head">
            <p className="hero-adventure-badge">
              <span className="hero-badge-line" aria-hidden="true" />
              <span>Adventure & Entertainment · Shivpuri, Rishikesh</span>
            </p>

            <h1 className="hero-adventure-title">
              <span className="hero-title-kicker">The India’s Only</span>
              <span className="hero-title-highlight">Adventure and Entertainment Destination</span>
            </h1>
          </div>

          {/* <div className="hero-band-copy">
            <p className="hero-adventure-subtitle">
              India’s highest 165 FT fixed platform leap and 180 FT reverse rocket
              over the scenic Shivpuri river valley.
            </p>

            <div className="hero-adventure-ctas">
              <ThemeButton
                className="hero-cta-book"
                variant="solid"
                tone="on-dark"
                arrow
                onClick={onOpenBooking}
              >
                Book Your Jump
              </ThemeButton>

              <a href="#instagram-reels" className="hero-cta-reels">
                <span className="hero-cta-play" aria-hidden="true">
                  <Play size={12} fill="currentColor" />
                </span>
                Watch Reels
              </a>
            </div>
          </div> */}

          <div className="hero-altimeter-stats">
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
          </div>
        </div>
      </div>
    </section>
  );
};
