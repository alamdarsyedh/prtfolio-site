// src/pages/Contact.jsx
// Contact information panel + interactive form that redirects to Home on submit
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  // Form state - tracks all fields the user types
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  // Updates state when any form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handles form submission - for now just logs and redirects to Home
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    alert(`Thank you, ${formData.firstName}! Your message has been received.`);
    navigate('/'); // redirect to Home page
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Me</h1>

      <div style={styles.layout}>
        {/* Contact info panel */}
        <div style={styles.infoPanel}>
          <h2 style={styles.infoTitle}>Get in Touch</h2>
          <p style={styles.infoItem}><strong>📞 Phone:</strong> +1-647-898-4156</p>
          <p style={styles.infoItem}><strong>✉️ Email:</strong> alamdarhaasain@gmail.com</p>
          <p style={styles.infoItem}><strong>📍 Location:</strong> Toronto, Canada</p>
          <p style={styles.infoText}>
            I'm open to consulting opportunities in banking operations, compliance,
            payroll, and application development. Feel free to reach out anytime.
          </p>
        </div>

        {/* Contact form */}
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.row}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.row}>
            <input
              type="tel"
              name="phone"
              placeholder="Contact Number"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={styles.textarea}
          />

          <button type="submit" style={styles.submitBtn}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: { paddingTop: '1rem' },
  heading: { fontSize: '2rem', color: '#1e3a8a', marginBottom: '1.5rem', textAlign: 'center' },
  layout: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  infoPanel: {
    backgroundColor: '#1e3a8a',
    color: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
  },
  infoTitle: { fontSize: '1.4rem', marginBottom: '1.25rem' },
  infoItem: { marginBottom: '0.75rem', fontSize: '1rem' },
  infoText: { marginTop: '1.5rem', lineHeight: '1.7', color: '#cbd5e1', fontSize: '0.95rem' },
  form: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  row: { display: 'flex', gap: '1rem', flexWrap: 'wrap' },
  input: {
    flex: 1,
    minWidth: '140px',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    fontFamily: 'inherit',
  },
  textarea: {
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    resize: 'vertical',
  },
  submitBtn: {
    padding: '0.85rem',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
  },
};

export default Contact;