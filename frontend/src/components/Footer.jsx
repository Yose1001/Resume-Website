import React from 'react';

const s = {
  footer: {
    borderTop: '1px solid var(--border)',
    padding: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  left: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.08em',
  },
  right: {
    fontFamily: 'var(--font-display)',
    fontSize: '0.9rem',
    fontStyle: 'italic',
    color: 'var(--text-muted)',
  },
};

export default function Footer({ name }) {
  return (
    <footer style={s.footer}>
      <span style={s.left}>© {new Date().getFullYear()} {name} — Built with React & Node.js</span>
      <span style={s.right}>Designed with intention.</span>
    </footer>
  );
}