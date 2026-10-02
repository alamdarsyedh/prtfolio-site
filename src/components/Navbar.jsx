// src/components/Navbar.jsx
// Top navigation bar with custom logo and links to all 6 portfolio pages
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

function Navbar() {
  // Navigation menu items - keeps the JSX clean and easy to update
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Me' },
    { path: '/projects', label: 'Projects' },
    { path: '/education', label: 'Education' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>
        <Logo />
        <span style={styles.brandName}>Alamdar Syed</span>
      </div>
      <ul style={styles.menu}>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              style={({ isActive }) => ({
                ...styles.link,
                ...(isActive ? styles.activeLink : {}),
              })}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Inline styles for the navbar - keeps this component self-contained
const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem 2rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  brandName: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#1f2937',
  },
  menu: {
    display: 'flex',
    listStyle: 'none',
    gap: '0.5rem',
  },
  link: {
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    color: '#374151',
    fontWeight: '500',
    transition: 'background-color 0.2s, color 0.2s',
  },
  activeLink: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
  },
};

export default Navbar;