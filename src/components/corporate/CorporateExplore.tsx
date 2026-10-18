'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ThemeButton } from '@/components/common/ThemeButton';
import './CorporateExplore.css';

const STOPS = [
  {
    id: 'beatles',
    code: 'BTL',
    title: 'Beatles Ashram',
    place: 'Chaurasi Kutia',
    tag: 'Heritage walk',
    when: 'Afternoon',
    drive: '45 MIN',
    stay: '90 MIN',
    effort: 'Easy',
    how: 'Walk the painted ashram after lunch — street art, river views, no kit.',
    desc: 'The 1968 retreat where The Beatles stayed. Forest meditation pods, graffiti walls, and Ganga vistas — a quiet contrast after the tower.',
    image: '/images/corporate/addons/beatles-ashram.jpg',
  },
  {
    id: 'gartang',
    code: 'GRT',
    title: 'Mini Gartang Gali',
    place: 'Cliff walkway',
    tag: 'Cliffside walk',
    when: 'Anytime',
    drive: '10 MIN',
    stay: '45 MIN',
    effort: 'Easy',
    how: 'Closest extra — a wooden cliff path for photos and a short leg-stretch.',
    desc: 'A hanging wooden walkway along the canyon wall with turquoise river below. Ten minutes from the park, no fitness bar.',
    image: '/images/corporate/addons/mini-gartang-gali.jpg',
  },
  {
    id: 'neer',
    code: 'NER',
    title: 'Neer Garh Falls',
    place: 'Plunge pools',
    tag: 'Nature dip',
    when: 'Morning',
    drive: '40 MIN',
    stay: '60 MIN',
    effort: 'Easy trek',
    how: 'Short limestone trail to emerald pools — cool-down for the whole squad.',
    desc: 'A gentle waterfall walk into natural plunge pools. Ideal between breakfast and the first jump, or as a recovery hour.',
    image: '/images/corporate/addons/neer-waterfall.jpg',
  },
  {
    id: 'bajrang',
    code: 'BJR',
    title: 'Bajrang Setu',
    place: 'Glass bridge',
    tag: 'Sky walk',
    when: 'Golden hour',
    drive: '35 MIN',
    stay: '40 MIN',
    effort: 'Easy',
    how: 'Walk the glass floor over the Ganga — one group photo, then back.',
    desc: 'A glass-floored suspension bridge high above the river. Short, spectacular, and easy to slot before dinner in town.',
    image: '/images/corporate/addons/bajrang-setu.png',
  },
  {
    id: 'kunjapuri',
    code: 'KUN',
    title: 'Kunjapuri Sunrise',
    place: 'Himalayan ridge',
    tag: 'Dawn trek',
    when: 'Pre-dawn',
    drive: '50 MIN',
    stay: '2 HR',
    effort: 'Gentle',
    how: 'Early convoy, stone steps, Chaukhamba on the horizon — worth the alarm.',
    desc: 'A pre-dawn viewpoint trek for snow peaks at first light. The one add-on that needs an early start and a packed van.',
    image: '/images/corporate/addons/kunjapuri-trek.jpg',
  },
  {
    id: 'cave',
    code: 'CAV',
    title: 'Vashistha Cave',
    place: 'Ganga bank',
    tag: 'Quiet sit',
    when: 'Dusk',
    drive: '20 MIN',
    stay: '40 MIN',
    effort: 'Easy',
    how: 'Sit by the river in the cave — a reset after reverse bungee.',
    desc: 'An ancient meditation cave on the sandy Ganga bank. No performance, just silence — the offsite’s decompression stop.',
    image: '/images/corporate/addons/arundhati-cave.jpg',
  },
] as const;

const ROTATE_MS = 5600;

export const CorporateExplore: React.FC = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const stop = STOPS[active];

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % STOPS.length);
    }, ROTATE_MS);
    return () => window.clearInterval(timer);
  }, [paused, active]);

  const goTo = useCallback((index: number) => {
    setActive(index);
    setPaused(true);
  }, []);

  return (
    <section
      id="rishikesh-addons"
      className={`corp-explore${paused ? ' is-paused' : ''}`}
      aria-label="Explore Rishikesh add-ons"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <div className="corp-explore-head">
          <SectionHeader
            align="left"
            tag="Beyond the venue"
            title="Explore Rishikesh"
            highlightWord="Add-ons"
            description="Easy extras from Shivpuri — short drives, short walks, no extra venue. Pick a stop, see how long it takes, slot it around the jumps."
          />
        </div>

        <div className="corp-explore-trail" role="tablist" aria-label="Rishikesh extra stops">
          {STOPS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === active}
              className={`corp-explore-stop${index === active ? ' is-on' : ''}`}
              onClick={() => goTo(index)}
            >
              <span className="corp-explore-stop-idx">{String(index + 1).padStart(2, '0')}</span>
              <span className="corp-explore-stop-copy">
                <strong>{item.code}</strong>
                <em>{item.title}</em>
              </span>
              <span className="corp-explore-stop-time">{item.drive}</span>
            </button>
          ))}
        </div>

        <div className="corp-explore-stage">
          <div className="corp-explore-media">
            {STOPS.map((item, index) => (
              <motion.img
                key={item.id}
                src={item.image}
                alt=""
                className={`corp-explore-img corp-explore-img--${item.id}${index === active ? ' is-on' : ''}`}
                initial={false}
                animate={{ opacity: index === active ? 1 : 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                aria-hidden={index !== active}
              />
            ))}
            <span className="corp-explore-scrim" aria-hidden="true" />
            <span className="corp-explore-slash" aria-hidden="true" />
            <span className="corp-explore-progress" key={active} aria-hidden="true" />
            <p className="corp-explore-media-meta">
              <span>{String(active + 1).padStart(2, '0')} / {String(STOPS.length).padStart(2, '0')}</span>
              <span>{stop.place}</span>
            </p>
          </div>

          <aside className="corp-explore-brief" aria-live="polite">
            <p className="corp-explore-kicker">
              <span className="corp-explore-node" aria-hidden="true" />
              {stop.code} · {stop.tag}
            </p>
            <h3 className="corp-explore-title">{stop.title}</h3>
            <p className="corp-explore-desc">{stop.desc}</p>

            <ul className="corp-explore-facts">
              <li>
                <span>When</span>
                <strong>{stop.when}</strong>
              </li>
              <li>
                <span>Drive</span>
                <strong>{stop.drive}</strong>
              </li>
              <li>
                <span>On site</span>
                <strong>{stop.stay}</strong>
              </li>
              <li>
                <span>Effort</span>
                <strong>{stop.effort}</strong>
              </li>
            </ul>

            <p className="corp-explore-how">
              <strong>Do it</strong>
              {stop.how}
            </p>

            <ThemeButton href="#corporate-form" variant="ghost" arrow>
              Add to offsite brief
            </ThemeButton>
          </aside>
        </div>
      </div>
    </section>
  );
};
