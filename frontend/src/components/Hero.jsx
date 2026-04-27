import React from 'react';

const s = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '8rem 2rem 4rem',
    position: 'relative',
    overflow: 'hidden',
  },
  grid: {
    position: 'absolute', inset: 0, pointerEvents: 'none',
    backgroundImage: `
      linear-gradient(rgba(200,169,110,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(200,169,110,0.03) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
  },
  glow: {
    position: 'absolute', top: '-20%', right: '-10%',
    width: '600px', height: '600px', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  inner: { maxWidth: '1100px', margin: '0 auto', width: '100%', position: 'relative' },
  tag: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    animation: 'fadeUp 0.6s ease 0.1s forwards',
    opacity: 0,
  },
  dot: {
    width: '6px', height: '6px', borderRadius: '50%',
    background: 'var(--accent)',
    animation: 'pulse 2s ease infinite',
  },
  nameEn: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(3rem, 10vw, 7rem)',
    fontWeight: 300,
    lineHeight: 1.0,
    letterSpacing: '-0.02em',
    color: 'var(--text-primary)',
    animation: 'fadeUp 0.7s ease 0.2s forwards',
    opacity: 0,
  },
  nameTh: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
    fontWeight: 300,
    fontStyle: 'italic',
    color: 'var(--text-secondary)',
    marginTop: '0.25rem',
    animation: 'fadeUp 0.7s ease 0.3s forwards',
    opacity: 0,
  },
  divider: {
    width: '80px', height: '1px',
    background: 'linear-gradient(90deg, var(--accent), transparent)',
    margin: '2rem 0',
    animation: 'fadeUp 0.7s ease 0.4s forwards',
    opacity: 0,
  },
  summary: {
    maxWidth: '540px',
    fontSize: '1rem',
    lineHeight: 1.8,
    color: 'var(--text-secondary)',
    animation: 'fadeUp 0.7s ease 0.5s forwards',
    opacity: 0,
  },
  meta: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    marginTop: '2.5rem',
    animation: 'fadeUp 0.7s ease 0.6s forwards',
    opacity: 0,
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.05em',
  },
  metaIcon: { color: 'var(--accent)', fontSize: '0.9rem' },
  cta: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: '3rem',
    padding: '0.75rem 1.75rem',
    border: '1px solid var(--accent)',
    color: 'var(--accent)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    transition: 'background 0.2s, color 0.2s',
    animation: 'fadeUp 0.7s ease 0.7s forwards',
    opacity: 0,
    cursor: 'pointer',
  },
};

export default function Hero({ personal }) {
  return (
    <section style={s.hero}>
      <div style={s.grid} />
      <div style={s.glow} />
      <div style={s.inner}>
        <div style={s.tag}>
          <span style={s.dot} />
          Available for opportunities
        </div>

        <h1>
          <div style={s.nameEn}>{personal.nameEn}</div>
          <div style={s.nameTh}>{personal.name}</div>
        </h1>

        <div style={s.divider} />

        <p style={s.summary}>{personal.summary}</p>

        <div style={s.meta}>
          <span style={s.metaItem}><span style={s.metaIcon}>◈</span>{personal.title}</span>
          <span style={s.metaItem}><span style={s.metaIcon}>◈</span>{personal.location}</span>
          <span style={s.metaItem}><span style={s.metaIcon}>◈</span>{personal.email}</span>
        </div>

        <a
          href="#contact"
          style={s.cta}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#080808'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}
        >
          Get in touch →
        </a>
      </div>
    </section>
  );
}