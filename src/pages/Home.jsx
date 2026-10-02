// src/pages/Home.jsx
// Landing page with welcome message, mission statement, and CTA buttons
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to My Portfolio</h1>
      <p style={styles.subheading}>
        I'm <strong>Alamdar Syed</strong> — an experienced banking operations
        professional and application developer based in Toronto, Canada.
      </p>

      <section style={styles.missionBox}>
        <h2 style={styles.missionTitle}>Mission Statement</h2>
        <p style={styles.missionText}>
          To combine 34+ years of banking, credit, risk and operations
          experience with modern software development skills, delivering
          practical technology solutions that improve business efficiency
          and decision-making.
        </p>
      </section>

      <div style={styles.buttonGroup}>
        <Link to="/about" style={styles.primaryBtn}>About Me</Link>
        <Link to="/projects" style={styles.secondaryBtn}>View Projects</Link>
        <Link to="/contact" style={styles.secondaryBtn}>Contact Me</Link>
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', paddingTop: '2rem' },
  heading: { fontSize: '2.5rem', color: '#1e3a8a', marginBottom: '1rem' },
  subheading: { fontSize: '1.15rem', color: '#374151', marginBottom: '2rem' },
  missionBox: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    maxWidth: '720px',
    margin: '0 auto 2rem auto',
    textAlign: 'left',
  },
  missionTitle: { color: '#2563eb', marginBottom: '0.75rem' },
  missionText: { color: '#4b5563', lineHeight: '1.7' },
  buttonGroup: { display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' },
  primaryBtn: {
    padding: '0.75rem 1.75rem',
    backgroundColor: '#2563eb',
    color: '#fff',
    borderRadius: '8px',
    fontWeight: '600',
  },
  secondaryBtn: {
    padding: '0.75rem 1.75rem',
    backgroundColor: '#ffffff',
    color: '#2563eb',
    border: '2px solid #2563eb',
    borderRadius: '8px',
    fontWeight: '600',
  },
};

export default Home;