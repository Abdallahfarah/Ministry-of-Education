import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';

export default function ResultsTable({ results }) {
  if (!results) return null;

  return (
    <section className="results-card" aria-label="Examination Results">
      {/* Desktop & Tablet Table Header */}
      <div className="results-header" role="row">
        <div>TOTAL SCORE</div>
        <div>PASS MARK</div>
        <div>STATUS</div>
        <div>CERTIFICATE</div>
      </div>

      {/* Row content */}
      <div className="results-row">
        {/* Total Score Card */}
        <div className="result-card-item score-card-item">
          <div className="score-header-mobile">
            <span className="result-card-label">Total Score</span>
            <span className="score-value">{results.totalScore}%</span>
          </div>
          <div 
            className="progress-track"
            role="progressbar" 
            aria-valuenow={results.totalScore} 
            aria-valuemin="0" 
            aria-valuemax="100"
          >
            <div 
              className="progress-fill" 
              style={{ width: `${results.totalScore}%` }} 
            />
          </div>
        </div>

        {/* Pass Mark Card */}
        <div className="result-card-item">
          <span className="result-card-label">Pass Mark</span>
          <span className="pass-mark-value">{results.passMark}%</span>
        </div>

        {/* Status Card */}
        <div className="result-card-item">
          <span className="result-card-label">Status</span>
          <span className="status-badge">
            <span className="badge-check-circle" aria-hidden="true">
              <svg viewBox="0 0 16 16" width="13" height="13" fill="none">
                <circle cx="8" cy="8" r="8" fill="#15803D" />
                <path d="M4.5 8.2L6.8 10.5L11.5 5.8" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {results.status}
          </span>
        </div>

        {/* Certificate Card */}
        <div className="result-card-item">
          <span className="result-card-label">Certificate</span>
          <span className="status-badge verified">
            <span className="badge-check-circle" aria-hidden="true">
              <svg viewBox="0 0 16 16" width="13" height="13" fill="none">
                <circle cx="8" cy="8" r="8" fill="#15803D" />
                <path d="M4.5 8.2L6.8 10.5L11.5 5.8" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {results.certificate}
          </span>
        </div>
      </div>
    </section>
  );
}
