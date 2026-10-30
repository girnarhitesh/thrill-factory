'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { BookingModal } from '@/components/common/BookingModal';
import { SAFETY_STANDARDS, MEDICAL_RESTRICTIONS } from '@/data/safetyRules';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ShieldCheck, Check, AlertOctagon } from 'lucide-react';

export default function SafetyPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main style={{ paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-4xl)', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionHeader
            tag="Zero Compromise"
            title="Technical Safety &"
            highlightWord="Operating Protocols"
            description="Safety runs every lane at Thrill Factory — extreme rides, aerial lines, ground games, and the kids zone — with a 100% record across 1 Lakh+ successful jumps."
          />

          {/* Key Standards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-xl)',
              marginBottom: 'var(--space-4xl)',
            }}
          >
            {SAFETY_STANDARDS.map((rule) => (
              <div
                key={rule.id}
                className="card"
                style={{
                  padding: 'var(--space-2xl)',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-primary-light)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  <ShieldCheck size={26} />
                </div>

                <h3
                  style={{
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-text-primary)',
                    marginBottom: 'var(--space-xs)',
                  }}
                >
                  {rule.title}
                </h3>

                <p
                  style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.65,
                  }}
                >
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Specifications Table */}
          <div
            id="medical"
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-2xl)',
              marginBottom: 'var(--space-3xl)',
            }}
          >
            <h3 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-md)' }}>
              Bungee Cord Engineering & Specifications
            </h3>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xl)' }}>
              Each bungee cord is imported from specialized manufacturers in New Zealand and calibrated precisely to the individual’s weight class.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 'var(--space-lg)',
              }}
            >
              <div style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-lg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-primary)', textTransform: 'uppercase', fontWeight: 'bold' }}>Weight Bracket A</span>
                <h4 style={{ margin: '4px 0 8px 0', fontSize: 'var(--font-size-lg)', color: 'var(--color-text-primary)' }}>40 kg – 65 kg</h4>
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>Calibrated 12-strand dynamic core with high deceleration elasticity.</p>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-lg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-primary)', textTransform: 'uppercase', fontWeight: 'bold' }}>Weight Bracket B</span>
                <h4 style={{ margin: '4px 0 8px 0', fontSize: 'var(--font-size-lg)', color: 'var(--color-text-primary)' }}>66 kg – 85 kg</h4>
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>Medium-density heavy oscillation cord for balanced rebound curve.</p>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-lg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-primary)', textTransform: 'uppercase', fontWeight: 'bold' }}>Weight Bracket C</span>
                <h4 style={{ margin: '4px 0 8px 0', fontSize: 'var(--font-size-lg)', color: 'var(--color-text-primary)' }}>86 kg – 110 kg</h4>
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>High-tensile multi-weave cord with reinforced nylon safety sheath.</p>
              </div>
            </div>
          </div>

          {/* Medical Notice & Cancellation */}
          <div
            id="cancellation"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-2xl)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-md)' }}>
              <AlertOctagon size={24} color="var(--color-warning)" />
              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-text-primary)' }}>
                Booking & Weather Safety Policies
              </h3>
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              <li style={{ display: 'flex', gap: '8px' }}>
                <Check size={16} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Weather Protocol:</strong> If heavy rainfall, gale-force winds, or lightning occur in the valley, jumps are temporarily paused for safety. Rescheduling or 100% credit is offered.</span>
              </li>
              <li style={{ display: 'flex', gap: '8px' }}>
                <Check size={16} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Jump Refusal:</strong> If a participant changes their mind on the jump deck, our Jump Masters provide gentle encouragement. However, once fitted and on the platform, jump slots cannot be refunded.</span>
              </li>
              <li style={{ display: 'flex', gap: '8px' }}>
                <Check size={16} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Free Rescheduling:</strong> Change your booking date anytime up to 24 hours prior to your scheduled slot via WhatsApp.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloating />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
