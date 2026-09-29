import React from 'react';
import { Contact, User, UserCheck, Calendar } from 'lucide-react';

export default function CandidateCard({ candidate }) {
  if (!candidate) return null;

  const infoFields = [
    {
      id: 'full-name',
      label: 'Full Name',
      value: candidate.fullName,
      icon: <Contact size={20} />
    },
    {
      id: 'username',
      label: 'Username',
      value: candidate.username,
      icon: <User size={20} />
    },
    {
      id: 'gender',
      label: 'Gender',
      value: candidate.gender,
      icon: <UserCheck size={20} />
    },
    {
      id: 'exam-date',
      label: 'Exam Date',
      value: candidate.examDate,
      icon: <Calendar size={20} />
    }
  ];

  return (
    <article className="candidate-card" aria-label="Candidate Information">
      <div className="avatar-container">
        <div className="avatar-ring">
          <img
            src={candidate.avatar || "/prof.jpg"}
            alt={candidate.fullName}
            className="avatar-image"
            onError={(e) => {
              e.currentTarget.src = "/prof.jpg";
            }}
          />
        </div>
      </div>

      <div className="info-grid">
        {infoFields.map((field) => (
          <div key={field.id} className="info-tile">
            <div className="tile-icon-box" aria-hidden="true">
              {field.icon}
            </div>
            <div className="tile-content">
              <span className="tile-label">{field.label}</span>
              <span className="tile-value">{field.value}</span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
