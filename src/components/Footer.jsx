// src/components/Footer.jsx
// Simple footer shown at the bottom of every page
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <p>© {currentYear} Alamdar Syed. All rights reserved.</p>
      <p style={styles.sub}>Built with React • COMP229 Portfolio Assignment</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: 'auto',
    padding: '1.5rem',
    textAlign: 'center',
    backgroundColor: '#1f2937',
    color: '#e5e7eb',
    fontSize: '0.9rem',
  },
  sub: {
    marginTop: '0.25rem',
    fontSize: '0.8rem',
    color: '#9ca3af',
  },
};

export default Footer;