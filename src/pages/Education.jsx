// src/pages/Education.jsx
// Lists educational and professional qualifications with dates
import React from 'react';

function Education() {
  // Education entries - most recent first
  const educationList = [
    {
      degree: 'Bachelor of Commerce (Honours)',
      institution: 'Nipissing University',
      year: '2025',
      details: 'Completed with Honours.',
    },
    {
      degree: 'CPA Candidate (Registered)',
      institution: 'Chartered Professional Accountants',
      year: 'In Progress',
      details: 'Currently registered as a CPA candidate.',
    },
    {
      degree: 'Graduate Certificate — Payroll Management',
      institution: 'Canada',
      year: '2009',
      details: 'Specialized training in payroll administration and compliance.',
    },
    {
      degree: 'Bachelor of Commerce (B.Com)',
      institution: 'University of Karachi',
      year: '1989',
      details: 'Foundation degree in commerce and business.',
    },
    {
      degree: 'MCSE Certification & Professional Training',
      institution: 'Emirates Institute for Banking & Financial Studies',
      year: 'Various',
      details:
        'Anti-Money Laundering (Law & Regulations), Credit Metrics & Credit Risk Modeling, SWIFT Net.',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Education & Qualifications</h1>

      <div style={styles.timeline}>
        {educationList.map((item, index) => (
          <div key={index} style={styles.item}>
            <div style={styles.yearBadge}>{item.year}</div>
            <div style={styles.content}>
              <h2 style={styles.degree}>{item.degree}</h2>
              <p style={styles.institution}>{item.institution}</p>
              <p style={styles.details}>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { paddingTop: '1rem' },
  heading: { fontSize: '2rem', color: '#1e3a8a', marginBottom: '1.5rem', textAlign: 'center' },
  timeline: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  item: {
    display: 'flex',
    gap: '1rem',
    backgroundColor: '#ffffff',
    padding: '1.25rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  yearBadge: {
    backgroundColor: '#2563eb',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontWeight: '700',
    minWidth: '90px',
    textAlign: 'center',
  },
  content: { flex: 1, minWidth: '220px' },
  degree: { color: '#1f2937', fontSize: '1.15rem', marginBottom: '0.25rem' },
  institution: { color: '#2563eb', fontWeight: '600', marginBottom: '0.25rem' },
  details: { color: '#4b5563', fontSize: '0.95rem' },
};

export default Education;