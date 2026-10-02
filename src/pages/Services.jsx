// src/pages/Services.jsx
// Lists services offered with supporting icons/images
import React from 'react';

function Services() {
  // Services offered - each has an icon emoji and description
  const services = [
    {
      icon: '💼',
      title: 'Banking Operations Consulting',
      description:
        'Branch and back-office operations, process improvement, and compliance support built on 34+ years of experience.',
    },
    {
      icon: '🛡️',
      title: 'AML & Compliance',
      description:
        'Anti-Money Laundering program design, audits, and regulatory compliance support for financial institutions.',
    },
    {
      icon: '📊',
      title: 'Credit & Risk Analysis',
      description:
        'Credit assessment, risk modeling, and portfolio monitoring for lending decisions.',
    },
    {
      icon: '💰',
      title: 'Payroll Administration',
      description:
        'End-to-end payroll processing, compliance with federal/provincial legislation, and periodic audits.',
    },
    {
      icon: '💻',
      title: 'Custom Web Application Development',
      description:
        'Business applications built with ASP.NET, MS SQL Server, and React — including CRM and Real Estate systems.',
    },
    {
      icon: '🗄️',
      title: 'Database Design (MS SQL)',
      description:
        'Relational database design, optimization, and reporting for enterprise applications.',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Services I Offer</h1>

      <div style={styles.grid}>
        {services.map((service, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{service.icon}</div>
            <h2 style={styles.title}>{service.title}</h2>
            <p style={styles.text}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { paddingTop: '1rem' },
  heading: { fontSize: '2rem', color: '#1e3a8a', marginBottom: '1.5rem', textAlign: 'center' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '1.75rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    textAlign: 'center',
    transition: 'transform 0.2s',
  },
  icon: { fontSize: '2.5rem', marginBottom: '0.75rem' },
  title: { color: '#1f2937', fontSize: '1.1rem', marginBottom: '0.75rem' },
  text: { color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6' },
};

export default Services;