// src/components/Logo.jsx
// Custom logo displayed in the navigation bar.
// Uses a network-globe image (personal brand), with "AS" text fallback.
import React, { useState } from 'react';

function Logo() {
  const [imgError, setImgError] = useState(false);

  // Fallback: "AS" badge if the image fails to load
  if (imgError) {
    return (
      <div style={styles.fallback} aria-label="Alamdar Syed logo">
        <span style={styles.fallbackText}>AS</span>
      </div>
    );
  }

  return (
    <img
      src="/logo.png"
      alt="Alamdar Syed logo"
      style={styles.logo}
      onError={() => setImgError(true)}
    />
  );
}

const styles = {
  logo: {
    height: '48px',
    width: '48px',
    objectFit: 'contain',
    display: 'block',
  },
  fallback: {
    width: '48px',
    height: '48px',
    backgroundColor: '#2563eb',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallbackText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: '1.25rem',
  },
};

export default Logo;