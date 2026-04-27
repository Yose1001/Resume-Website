import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    padding: '1.25rem 2rem',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    transition: 'background 0.3s, border-bottom 0.3s',
  },
  navScrolled: {
    background: 'rgba(8,8,8,0.92)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid #252525',
  },
  logo: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.1rem',
    fontWeight: 300,
    letterSpacing: '0.05em',
    color: 'var(--text-primary)',
  },
  links: { display: 'flex', gap: '2rem', listStyle: 'none' },
  link: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--text-secondary)',
    transition: 'color 0.2s',
    cursor: 'pointer',
    background: 'none', border: 'none', padding: 0,
  },
};

export default function Navbar({ name }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
      <span style={styles.logo}>{name}</span>
      <ul style={styles.links}>
        {navLinks.map((l) => (
          <li key={l.label}>
            <a href={l.href} style={styles.link}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}