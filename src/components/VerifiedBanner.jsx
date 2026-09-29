import React from 'react';
import { Check } from 'lucide-react';

export default function VerifiedBanner({ message }) {
  return (
    <section className="verified-banner" aria-label="Verification Status">
      <div className="verified-icon-wrapper" aria-hidden="true">
        <Check size={28} strokeWidth={3} />
      </div>
      <h1 className="verified-title">Certificate Verified</h1>
      <p className="verified-subtitle">
        {message || "This certificate has been successfully verified through the official Ministry of Education portal."}
      </p>
    </section>
  );
}
