// src/pages/About.jsx
// Displays legal name, profile photo, short bio, and resume download link
import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Me</h1>

      <div style={styles.card}>
        {/* Profile photo - place your photo at public/profile.jpg */}
        <img
          src="/profile.png"
          alt="Alamdar Syed"
          style={styles.photo}
          onError={(e) => { e.target.style.display = 'none'; }}
        />

        <div style={styles.info}>
          <h2 style={styles.name}>Alamdar Syed</h2>
          <p style={styles.role}>Banking Operations Professional • Application Developer</p>

          <p style={styles.bio}>
            I am a Toronto-based professional with over 34 years of experience
            in banking operations, credit, risk analysis, AML compliance and
            payroll administration across the Middle East and Canada. In
            parallel, I design and build business applications — including
            CRM and Real Estate systems for MH Enterprises — using ASP.NET
            and MS SQL Server. I hold a Bachelor of Commerce (Honours) from
            Nipissing University (2025) and a B.Com from Karachi University
            (1989), and I am currently a CPA candidate.
          </p>

          {/* Resume download link - PDF must be at public/resume.pdf */}
          <a
            href="/resume.pdf"
            download
            style={styles.resumeBtn}
          >
            📄 Download My Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { paddingTop: '1rem' },
  heading: { fontSize: '2rem', color: '#1e3a8a', marginBottom: '1.5rem', textAlign: 'center' },
  card: {
    display: 'flex',
    gap: '2rem',
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  photo: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #2563eb',
  },
  info: { flex: 1, minWidth: '280px' },
  name: { color: '#1f2937', marginBottom: '0.25rem' },
  role: { color: '#2563eb', fontWeight: '600', marginBottom: '1rem' },
  bio: { color: '#4b5563', lineHeight: '1.7', marginBottom: '1.5rem' },
  resumeBtn: {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    borderRadius: '8px',
    fontWeight: '600',
  },
};

export default About;