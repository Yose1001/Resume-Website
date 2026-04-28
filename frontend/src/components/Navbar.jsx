import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ name }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ปิด menu เมื่อกด link
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '1.25rem 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'background 0.3s, border-bottom 0.3s',
        ...(scrolled ? {
          background: 'rgba(8,8,8,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #252525',
        } : {}),
      }}>
        {/* Logo */}
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.1rem',
          fontWeight: 300,
          letterSpacing: '0.05em',
          color: 'var(--text-primary)',
        }}>
          {name}
        </span>

        {/* Desktop Links */}
        <ul style={{
          display: 'flex', gap: '2rem', listStyle: 'none',
          '@media (max-width: 768px)': { display: 'none' },
        }} className="nav-desktop">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button — Mobile Only */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'none', flexDirection: 'column',
            gap: '5px', padding: '4px',
          }}
          aria-label="Toggle menu"
        >
          <span style={{
            display: 'block', width: '22px', height: '1.5px',
            background: 'var(--text-primary)',
            transition: 'transform 0.3s, opacity 0.3s',
            transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '1.5px',
            background: 'var(--text-primary)',
            transition: 'opacity 0.3s',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '22px', height: '1.5px',
            background: 'var(--text-primary)',
            transition: 'transform 0.3s, opacity 0.3s',
            transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 99,
        background: 'rgba(8,8,8,0.97)',
        backdropFilter: 'blur(16px)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '2.5rem',
        transition: 'opacity 0.3s, transform 0.3s',
        opacity: menuOpen ? 1 : 0,
        transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
        pointerEvents: menuOpen ? 'all' : 'none',
      }}>
        {navLinks.map((l, i) => (
          <a
            key={l.label}
            href={l.href}
            onClick={handleLinkClick}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 8vw, 3rem)',
              fontWeight: 300,
              color: 'var(--text-primary)',
              letterSpacing: '0.05em',
              transition: 'color 0.2s',
              animationDelay: `${i * 0.05}s`,
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* CSS สำหรับ Mobile */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}