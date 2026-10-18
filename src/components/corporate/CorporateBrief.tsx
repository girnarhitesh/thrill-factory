'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ThemeButton } from '@/components/common/ThemeButton';
import { SITE_CONFIG } from '@/constants/siteConfig';
import './CorporateBrief.css';

const FACTS = [
  { code: '2 HR', label: 'Desk reply' },
  { code: 'WA', label: 'WhatsApp confirm' },
  { code: 'SHV', label: 'Shivpuri program' },
] as const;

const FORMATS = [
  'Corporate Team Offsite',
  'Leadership Strategy Retreat',
  'Annual Company Day Celebration',
  'Reward & Recognition (R&R) Trip',
  'Custom Group Adventure',
] as const;

const SIZES = [
  '10 - 25 Persons',
  '25 - 50 Persons',
  '50 - 100 Persons',
  '100 - 250+ Persons',
] as const;

const EMPTY = {
  companyName: '',
  contactPerson: '',
  email: '',
  phone: '',
  eventType: FORMATS[0],
  teamSize: SIZES[1],
  visitDate: '',
  requirements: '',
};

export const CorporateBrief: React.FC = () => {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const msg = `*Corporate Offsite Enquiry - Thrill Factory Shivpuri*\n\n🏢 *Company:* ${form.companyName || 'Not specified'}\n👤 *Contact:* ${form.contactPerson}\n📱 *Phone:* ${form.phone}\n✉️ *Email:* ${form.email}\n🎯 *Event Type:* ${form.eventType}\n👥 *Team Size:* ${form.teamSize}\n📅 *Target Date:* ${form.visitDate || 'Flexible'}\n📝 *Requirements:* ${form.requirements || 'Custom itinerary requested'}\n\nPlease share proposal and slot availability.`;
    const url = `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setSent(true);
  };

  return (
    <section id="corporate-form" className="corp-brief" aria-label="Plan your company offsite">
      <div className="container corp-brief-shell">
        <div className="corp-brief-head">
          <SectionHeader
            align="left"
            tag="Custom group proposals"
            title="Plan Your"
            highlightWord="Offsite"
            description="At Thrill Factory. Share headcount, dates, and the mix — the corporate desk replies within 2 business hours with an all-inclusive itinerary."
          />

          <ul className="corp-brief-facts">
            {FACTS.map((item, index) => (
              <li key={item.code}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item.code}</strong>
                <em>{item.label}</em>
              </li>
            ))}
          </ul>
        </div>

        <div className="corp-brief-panel corp-brief-frame">
          {sent ? (
            <div className="corp-brief-done">
              <p className="corp-brief-kicker">
                <span className="corp-brief-node" aria-hidden="true" />
                Brief sent
              </p>
              <h3>Corporate enquiry initiated</h3>
              <p>
                WhatsApp has your requirements. Coordinators will review logistics and send the proposal.
              </p>
              <ThemeButton
                variant="ghost"
                onClick={() => {
                  setSent(false);
                  setForm(EMPTY);
                }}
              >
                Send another brief
              </ThemeButton>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <div className="corp-brief-grid">
                <label className="corp-brief-field" htmlFor="companyName">
                  <span>Company</span>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    placeholder="Acme Tech Solutions"
                    value={form.companyName}
                    onChange={onChange}
                  />
                </label>

                <label className="corp-brief-field" htmlFor="contactPerson">
                  <span>Contact</span>
                  <input
                    id="contactPerson"
                    name="contactPerson"
                    type="text"
                    required
                    placeholder="Rohit Verma"
                    value={form.contactPerson}
                    onChange={onChange}
                  />
                </label>

                <label className="corp-brief-field" htmlFor="phone">
                  <span>WhatsApp</span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={onChange}
                  />
                </label>

                <label className="corp-brief-field" htmlFor="email">
                  <span>Email</span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="rohit@company.com"
                    value={form.email}
                    onChange={onChange}
                  />
                </label>

                <label className="corp-brief-field" htmlFor="eventType">
                  <span>Format</span>
                  <select id="eventType" name="eventType" value={form.eventType} onChange={onChange}>
                    {FORMATS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="corp-brief-field" htmlFor="teamSize">
                  <span>Group</span>
                  <select id="teamSize" name="teamSize" value={form.teamSize} onChange={onChange}>
                    {SIZES.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="corp-brief-field corp-brief-field--date" htmlFor="visitDate">
                  <span>Date</span>
                  <input
                    id="visitDate"
                    name="visitDate"
                    type="date"
                    value={form.visitDate}
                    onChange={onChange}
                  />
                </label>
              </div>

              <label className="corp-brief-field corp-brief-field--note" htmlFor="requirements">
                <span>Notes</span>
                <textarea
                  id="requirements"
                  name="requirements"
                  rows={2}
                  placeholder="Transport, meals, conference room, or a specific activity mix."
                  value={form.requirements}
                  onChange={onChange}
                />
              </label>

              <div className="corp-brief-submit">
                <ThemeButton type="submit" variant="ghost" arrow>
                  Schedule Now
                </ThemeButton>
                <p>Opens WhatsApp with this brief. A coordinator is assigned on confirm.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
