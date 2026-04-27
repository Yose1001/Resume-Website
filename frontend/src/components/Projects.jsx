import React from 'react';

const s = {
  section: { padding: '6rem 2rem', borderTop: '1px solid var(--border)', background: 'var(--surface)' },
  inner: { maxWidth: '1100px', margin: '0 auto' },
  header: { marginBottom: '4rem' },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 300,
    letterSpacing: '-0.02em',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1px',
    background: 'var(--border)',
    border: '1px solid var(--border)',
  },
  card: {
    background: 'var(--surface)',
    padding: '2rem',
    transition: 'background 0.2s',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  projectName: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.4rem',
    fontWeight: 400,
  },
  description: {
    color: 'var(--text-secondary)',
    fontSize: '0.875rem',
    lineHeight: 1.7,
    flex: 1,
  },
  techList: { display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto' },
  tech: {
    padding: '0.2rem 0.6rem',
    background: 'var(--accent-dim)',
    color: 'var(--accent)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.62rem',
    letterSpacing: '0.05em',
    borderRadius: '2px',
  },
  link: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.05em',
    marginTop: '0.5rem',
    display: 'block',
  },
};

export default function Projects({ projects }) {
  return (
    <section id="projects" style={s.section}>
      <div style={s.inner}>
        <div style={s.header}>
          <p className="section-label">04 — Projects</p>
          <h2 style={s.title}>ผลงานที่น่าสนใจ</h2>
        </div>

        <div style={s.grid}>
          {projects.map((p, i) => (
            <div
              key={i}
              style={s.card}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--surface)'}
            >
              <div style={s.projectName}>{p.name}</div>
              <p style={s.description}>{p.description}</p>
              <div style={s.techList}>
                {p.tech.map((t) => <span key={t} style={s.tech}>{t}</span>)}
              </div>
              <a href={`https://${p.link}`} target="_blank" rel="noreferrer" style={s.link}>
                ↗ {p.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}