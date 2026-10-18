'use client';

import React from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ThemeButton } from '@/components/common/ThemeButton';
import './CorporateClients.css';

const MARKS = [
  {
    code: 'AXS',
    name: 'Axis Bank',
    field: 'Banking & Financial Services',
    logo: '/images/corporate/clients/axis.png',
  },
  {
    code: 'GRT',
    name: 'Grant Thornton',
    field: 'Auditing & Advisory',
    logo: '/images/corporate/clients/grant-thornton.png',
  },
  {
    code: 'HPC',
    name: 'Hindustan Petroleum',
    field: 'Energy & Infrastructure',
    logo: '/images/corporate/clients/hpcl.png',
  },
] as const;

const ROSTER = [
  { code: 'TCS', name: 'Tata Consultancy Services', field: 'Technology' },
  { code: 'INF', name: 'Infosys', field: 'Technology' },
  { code: 'HDF', name: 'HDFC Bank', field: 'Banking' },
  { code: 'WIP', name: 'Wipro Technologies', field: 'Technology' },
  { code: 'DLT', name: 'Deloitte India', field: 'Advisory' },
  { code: 'MAH', name: 'Mahindra & Mahindra', field: 'Automotive' },
  { code: 'ZOM', name: 'Zomato', field: 'Consumer' },
] as const;

const BRIEF = [
  { code: '10+', label: 'Enterprise houses' },
  { code: '03', label: 'Marked partners' },
  { code: 'SHV', label: 'Hosted at Shivpuri' },
] as const;

export const CorporateClients: React.FC = () => {
  return (
    <section id="past-clients" className="corp-clients" aria-label="Past corporate clients">
      <div className="container">
        <div className="corp-clients-head">
          <SectionHeader
            align="left"
            tag="Thrill Factory Track Record"
            title="Past"
            highlightWord="Clients"
            description="Trusted by leading banks, Fortune 500 multinationals, and high-growth technology enterprises."
          />
        </div>

        <ul className="corp-clients-brief corp-clients-frame" aria-label="Client roster scope">
          {BRIEF.map((item) => (
            <li key={item.code}>
              <strong>{item.code}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="corp-clients-marks corp-clients-frame">
          {MARKS.map((client, index) => (
            <article key={client.code} className="corp-clients-mark">
              <p className="corp-clients-mark-meta">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{client.code}</strong>
              </p>
              <div className="corp-clients-logo">
                <Image src={client.logo} alt="" width={220} height={88} />
              </div>
              <h3>{client.name}</h3>
              <p>{client.field}</p>
            </article>
          ))}
        </div>

        <ul className="corp-clients-roster corp-clients-frame">
          {ROSTER.map((client, index) => (
            <li key={client.code}>
              <span className="corp-clients-roster-idx">
                {String(index + MARKS.length + 1).padStart(2, '0')}
              </span>
              <span className="corp-clients-roster-code">{client.code}</span>
              <span className="corp-clients-roster-name">{client.name}</span>
              <span className="corp-clients-roster-field">{client.field}</span>
            </li>
          ))}
        </ul>

        <div className="corp-clients-pass corp-clients-frame">
          <div className="corp-clients-pass-copy">
            <p className="corp-clients-kicker">
              <span className="corp-clients-node" aria-hidden="true" />
              Next on the roster
            </p>
            <h3>Put your team on the same Shivpuri brief.</h3>
          </div>
          <ThemeButton href="#corporate-form" variant="ghost" arrow>
            Request Offsite Proposal
          </ThemeButton>
        </div>
      </div>
    </section>
  );
};
