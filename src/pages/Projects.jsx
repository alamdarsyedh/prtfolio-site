// src/pages/Projects.jsx
// Showcases 3 projects with image, description, and outcome
import React from 'react';

function Projects() {
  // Project list - each has an image path, title, description, and outcome
  const projects = [
    {
      title: 'MH Enterprises — CRM System',
      image: '/projects/crm.png',
      role: 'Application Developer',
      description:
        'A full Customer Relationship Management system built with ASP.NET and MS SQL Server for MH Enterprises. Handles customer records, order tracking, invoicing, and reporting dashboards.',
      outcome:
        'Streamlined daily operations and gave management real-time visibility into customer activity.',
    },
    {
      title: 'MH Enterprises — Real Estate Portal',
      image: '/projects/realestate.png',
      role: 'Application Developer',
      description:
        'A property listings and management application built with ASP.NET and MS SQL Server. Includes agent management, listing search, and client follow-up workflows.',
      outcome:
        'Centralized property data and reduced manual tracking errors for the sales team.',
    },
    {
      title: 'Personal Portfolio Website',
      image: '/projects/portfolio.png',
      role: 'Front-End Developer',
      description:
        'A six-page React portfolio site (this one!) built with React Router, reusable components, and a custom SVG logo. Deployed to the cloud with version control.',
      outcome:
        'Demonstrates modern React development, routing, and deployment best practices.',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My Projects</h1>

      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            {/* Project image - place images at public/projects/ */}
            <img
              src={project.image}
              alt={project.title}
              style={styles.image}
              onError={(e) => {
                e.target.style.backgroundColor = '#e5e7eb';
                e.target.style.display = 'block';
                e.target.removeAttribute('src');
              }}
            />
            <div style={styles.cardBody}>
              <h2 style={styles.title}>{project.title}</h2>
              <p style={styles.role}><strong>Role:</strong> {project.role}</p>
              <p style={styles.text}>{project.description}</p>
              <p style={styles.outcome}><strong>Outcome:</strong> {project.outcome}</p>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    backgroundColor: '#e5e7eb',
  },
  cardBody: { padding: '1.25rem' },
  title: { color: '#1f2937', fontSize: '1.2rem', marginBottom: '0.5rem' },
  role: { color: '#2563eb', fontSize: '0.9rem', marginBottom: '0.5rem' },
  text: { color: '#4b5563', fontSize: '0.95rem', marginBottom: '0.75rem', lineHeight: '1.6' },
  outcome: { color: '#059669', fontSize: '0.9rem', lineHeight: '1.5' },
};

export default Projects;