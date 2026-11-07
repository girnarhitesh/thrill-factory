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

  useEffect(() => {
    const listener = (next: boolean) => setOpen(next);
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
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="booking-frame" role="dialog" aria-modal="true" aria-label="Book your adventure">
      <button
        type="button"
        className="booking-frame__close"
        onClick={() => setOpen(false)}
        aria-label="Close booking"
      >
        <X size={20} />
      </button>
      <iframe
        className="booking-frame__view"
        src={SITE_CONFIG.bookingUrl}
        title="Book Thrill Factory"
      />
    </div>
  );
}
