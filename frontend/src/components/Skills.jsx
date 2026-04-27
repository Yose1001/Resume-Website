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
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5px',
    background: 'var(--border)',
    border: '1px solid var(--border)',
  },
  group: {
    background: 'var(--surface)',
    padding: '2rem',
  },
  groupLabel: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.6rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    marginBottom: '1.25rem',
  },
  tags: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem' },
  tag: {
    padding: '0.4rem 0.9rem',
    background: 'var(--surface-2)',
    border: '1px solid var(--border)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.72rem',
    color: 'var(--text-secondary)',
    borderRadius: '2px',
    transition: 'border-color 0.2s, color 0.2s',
    cursor: 'default',
  },
};

const categoryLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  devops: 'DevOps & Cloud',
  tools: 'Tools',
};

export default function Skills({ skills }) {
  return (
    <section id="skills" style={s.section}>
      <div style={s.inner}>
        <div style={s.header}>
          <p className="section-label">02 — Skills</p>
          <h2 style={s.title}>ทักษะและเทคโนโลยี</h2>
        </div>

        <div style={s.grid}>
          {Object.entries(skills).map(([key, items]) => (
            <div key={key} style={s.group}>
              <div style={s.groupLabel}>{categoryLabels[key] || key}</div>
              <div style={s.tags}>
                {items.map((item) => (
                  <span
                    key={item}
                    style={s.tag}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--accent)';
                      e.currentTarget.style.color = 'var(--accent)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}