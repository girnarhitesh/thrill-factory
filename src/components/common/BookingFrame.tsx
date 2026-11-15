'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/siteConfig';
import './BookingFrame.css';

const listeners = new Set<(open: boolean) => void>();

export function openBookingFrame() {
  listeners.forEach((listener) => listener(true));
}

export function BookingFrame() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const listener = (next: boolean) => {
      setOpen(next);
      if (next) setReady(false);
    };
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const reveal = window.setTimeout(() => setReady(true), 700);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(reveal);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="booking-frame"
      role="dialog"
      aria-modal="true"
      aria-label="Book your adventure"
      onClick={() => setOpen(false)}
    >
      <div className="booking-frame__panel" onClick={(event) => event.stopPropagation()}>
        <div className="booking-frame__bar">
          <p>Book your adventure</p>
          <button
            type="button"
            className="booking-frame__close"
            onClick={() => setOpen(false)}
            aria-label="Close booking"
          >
            <X size={18} />
          </button>
        </div>
        <div className="booking-frame__stage">
          <iframe
            className={`booking-frame__view${ready ? ' is-ready' : ''}`}
            src={SITE_CONFIG.bookingUrl}
            title="Book Thrill Factory"
          />
          {ready ? null : (
            <div className="booking-frame__loader" role="status" aria-live="polite">
              <span className="booking-frame__spinner" aria-hidden="true" />
              <p>Opening your booking</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
