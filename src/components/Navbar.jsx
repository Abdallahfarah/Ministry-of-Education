import React from 'react';
import { ShieldCheck, Landmark } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="portal-header">
      <div className="brand-section">
        <img
          src="/ministry-logo.png"
          alt="Ministry of Education Emblem"
          className="emblem-icon"
        />
        <div className="brand-titles">
          <h2>Ministry of Education</h2>
          <span>National Examination Result Page</span>
        </div>
      </div>
      <div className="header-right">
        <span className="official-badge">
          <ShieldCheck size={14} /> Official Verified Service
        </span>
      </div>
    </header>
  );
}
