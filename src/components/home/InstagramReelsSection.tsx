'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Instagram, Play, X } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ThemeButton } from '@/components/common/ThemeButton';
import './InstagramReelsSection.css';

const INSTAGRAM_URL = 'https://www.instagram.com/thrillfactoryatrishikesh';

interface ReelItem {
  id: string;
  code: string;
  title: string;
  tag: string;
  duration: string;
  videoUrl: string;
  posterUrl: string;
}

const OFFICIAL_REELS: ReelItem[] = [
  {
    id: 'reel-1',
    code: 'R01',
    title: 'Giant Swing Canyon Rush (165 FT)',
    tag: 'Extreme Freefall',
    duration: '00:42',
    videoUrl:
      'https://cdn.shopify.com/videos/c/vp/99f757a33274467c967e8db3418b9c05/99f757a33274467c967e8db3418b9c05.HD-720p-1.6Mbps-90811814.mp4',
    posterUrl: '/images/reels/reel-5-thumb.jpg',
  },
  {
    id: 'reel-2',
    code: 'R02',
    title: 'Zero Gravity Reverse Bungee Launch',
    tag: '3G Acceleration',
    duration: '00:15',
    videoUrl:
      'https://cdn.shopify.com/videos/c/vp/ce3b00fb8b9048058729a7db96e314f3/ce3b00fb8b9048058729a7db96e314f3.HD-720p-1.6Mbps-90811815.mp4',
    posterUrl: '/images/reels/reel-6-thumb.jpg',
  },
  {
    id: 'reel-3',
    code: 'R03',
    title: '165 FT Freefall Bungee Leap',
    tag: "India's Highest Tower",
    duration: '00:10',
    videoUrl:
      'https://cdn.shopify.com/videos/c/vp/b7c8b2487fa54d19b05a62d89bdc8949/b7c8b2487fa54d19b05a62d89bdc8949.HD-720p-1.6Mbps-90810988.mp4',
    posterUrl: '/images/reels/reel-3-thumb.jpg',
  },
  {
    id: 'reel-4',
    code: 'R04',
    title: 'Canyon Leap Over Ganga Valley',
    tag: 'Panoramic Flyover',
    duration: '00:21',
    videoUrl:
      'https://cdn.shopify.com/videos/c/vp/c1d342fd7a0c483d8a09d2527c22ce02/c1d342fd7a0c483d8a09d2527c22ce02.HD-720p-1.6Mbps-90810986.mp4',
    posterUrl: '/images/reels/reel-4-thumb.jpg',
  },
  {
    id: 'reel-5',
    code: 'R05',
    title: 'Tandem Giant Swing Dive',
    tag: 'Duo Adrenaline',
    duration: '00:12',
    videoUrl:
      'https://cdn.shopify.com/videos/c/vp/fb5995e7e0a8441fa43aa1409ce84c82/fb5995e7e0a8441fa43aa1409ce84c82.HD-720p-1.6Mbps-55607801.mp4',
    posterUrl: '/images/reels/reel-2-thumb.jpg',
  },
  {
    id: 'reel-6',
    code: 'R06',
    title: '180 FT Slingshot Rocket',
    tag: 'Sky Launch',
    duration: '00:14',
    videoUrl:
      'https://cdn.shopify.com/videos/c/vp/b8f1d3c7f3904680b4920eff59bacbeb/b8f1d3c7f3904680b4920eff59bacbeb.HD-720p-1.6Mbps-55607383.mp4',
    posterUrl: '/images/reels/reel-1-thumb.jpg',
  },
];

export const InstagramReelsSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<ReelItem | null>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const playReel = (reel: ReelItem) => {
    setHoveredId(reel.id);
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (!video) return;
      if (id === reel.id) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  };

  const pauseReel = (reel: ReelItem) => {
    setHoveredId((current) => (current === reel.id ? null : current));
    videoRefs.current[reel.id]?.pause();
  };

  useEffect(() => {
    if (!lightbox) return;
    Object.values(videoRefs.current).forEach((video) => video?.pause());

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null);
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <section id="instagram-reels" className="insta-section" aria-label="Official Instagram reels">
      <span className="insta-slash" aria-hidden="true" />

      <div className="container">
        <SectionHeader
          tag="Official Reels"
          title="Visit Our"
          highlightWord="Instagram"
          description="Extreme rides, giant swings, zip lines, VR, and the kids zone — the whole Shivpuri park, on film."
        />

        <div className="insta-handle">
          <div className="insta-handle-copy">
            <Instagram size={16} strokeWidth={1.75} />
            <span className="insta-handle-name">@thrillfactoryatrishikesh</span>
            {/* <span className="insta-handle-meta">{OFFICIAL_REELS.length} reels</span> */}
          </div>
          <ThemeButton
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="ghost"
            tone="on-dark"
            arrow
          >
            Follow us
          </ThemeButton>
        </div>

        <div className="insta-strip">
          {OFFICIAL_REELS.map((reel) => {
            const isLive = hoveredId === reel.id;
            return (
              <button
                key={reel.id}
                type="button"
                className={`insta-cell${isLive ? ' is-live' : ''}`}
                onMouseEnter={() => playReel(reel)}
                onMouseLeave={() => pauseReel(reel)}
                onFocus={() => playReel(reel)}
                onBlur={() => pauseReel(reel)}
                onClick={() => setLightbox(reel)}
                aria-label={`Watch reel: ${reel.title}`}
              >
                <video
                  ref={(node) => {
                    videoRefs.current[reel.id] = node;
                  }}
                  src={reel.videoUrl}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="insta-cell-video"
                  style={{ opacity: isLive ? 1 : 0 }}
                />
                <Image
                  src={reel.posterUrl}
                  alt=""
                  fill
                  sizes="(max-width: 720px) 50vw, (max-width: 1100px) 33vw, 16vw"
                  className="insta-cell-poster"
                  style={{ opacity: isLive ? 0 : 1, objectFit: 'contain' }}
                />
                <span className="insta-cell-idx">{reel.code}</span>
                <span className="insta-cell-dur">{reel.duration}</span>
                <span className="insta-cell-play" aria-hidden="true">
                  <Play size={14} fill="currentColor" strokeWidth={0} />
                </span>
                <span className="insta-cell-copy">
                  <span className="insta-cell-tag">{reel.tag}</span>
                  <span className="insta-cell-title">{reel.title}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {lightbox ? (
        <div
          className="insta-lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button
            type="button"
            className="insta-lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close reel"
          >
            <X size={20} strokeWidth={1.75} />
          </button>
          <div className="insta-lightbox-frame" onClick={(event) => event.stopPropagation()}>
            <video
              src={lightbox.videoUrl}
              autoPlay
              controls
              playsInline
              className="insta-lightbox-video"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
};
