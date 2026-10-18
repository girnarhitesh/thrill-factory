'use client';

import React, { useEffect } from 'react';

const REVEAL_SELECTORS = [
  '.scroll-reveal',
  '[data-reveal]',
  '.section-header',
  '.quick-highlight-card',
  '.package-card',
  '.ride-card',
  '.journey-step-card',
  '.safety-rule-card',
  '.safety-protocol-board',
  '.safety-medical-box',
  '.legacy-banner-header',
  '.legacy-ledger',
  '.legacy-cert-strip',
  '.faq-board',
  '.location-anim-box',
  '.kids-highlight-card',
  '.kids-arena-copy',
  '.kids-arena-board',
  '.reviews-score',
  '.reviews-board',
  '.insta-handle',
  '.insta-strip',
  '.booking-cta-content',
  '.footer-mast',
  '.footer-board',
  '.activities-combo',
  '.activities-lane-head',
  '.activities-pass',
  '.combos-hero-strip',
  '.combos-lane-head',
  '.combos-pass',
  '.kids-hero-strip',
  '.kids-lane-head',
  '.kids-note',
  '.kids-pass',
  '.corp-mix-head',
  '.corp-mix-card',
  '.corp-mix-pass',
  '.corp-explore-head',
  '.corp-explore-trail',
  '.corp-explore-stage',
].join(', ');

export const ScrollRevealObserver: React.FC = () => {
  useEffect(() => {
    // 1. Scroll Progress Bar
    const progressBar = document.getElementById('scroll-progress-indicator');
    const updateProgress = () => {
      if (!progressBar) return;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    // 2. Proactive Intersection Observer:
    // With rootMargin: '0px 0px 60px 0px' and threshold: 0, the animation starts
    // 60px BEFORE the element reaches the bottom of the viewport.
    // This ensures that when the user scrolls down, the element is already
    // smoothly gliding in rather than abruptly popping inside the screen.
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px 60px 0px',
        threshold: 0,
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(REVEAL_SELECTORS);
      const viewportHeight = window.innerHeight;

      elements.forEach((el) => {
        if (el.classList.contains('is-revealed')) return;

        const rect = el.getBoundingClientRect();
        // Immediately reveal any element within or near the top of the viewport
        if (rect.top <= viewportHeight + 40) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });
    };

    observeElements();

    // Re-check after layout settles
    const timer = setTimeout(observeElements, 100);

    // 3. MutationObserver to handle dynamic tabs and filter changes
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener('scroll', updateProgress);
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div
      id="scroll-progress-indicator"
      className="scroll-progress-bar"
      aria-hidden="true"
      style={{ width: '0%' }}
    />
  );
};
