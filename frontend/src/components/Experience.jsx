import React from 'react';

const s = {
  section: { padding: '6rem 2rem', borderTop: '1px solid var(--border)' },
  inner: { maxWidth: '1100px', margin: '0 auto' },
  header: { marginBottom: '4rem' },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 300,
    letterSpacing: '-0.02em',
  },
  timeline: { position: 'relative', paddingLeft: '1.5rem' },
  line: {
    position: 'absolute', left: 0, top: '8px', bottom: '8px',
    width: '1px',
    background: 'linear-gradient(to bottom, var(--accent), var(--border))',
  },
  item: {
    position: 'relative',
    paddingLeft: '2rem',
    paddingBottom: '3.5rem',
  },
  dot: {
    position: 'absolute',
    left: '-1.75rem',
    top: '8px',
    width: '7px', height: '7px',
    borderRadius: '50%',
    background: 'var(--accent)',
    boxShadow: '0 0 12px rgba(200,169,110,0.5)',
  },
  period: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    letterSpacing: '0.1em',
    color: 'var(--text-muted)',
    marginBottom: '0.4rem',
  },
  company: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.5rem',
    fontWeight: 400,
    color: 'var(--text-primary)',
    lineHeight: 1.2,
  },
  position: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    letterSpacing: '0.1em',
    color: 'var(--accent)',
    marginBottom: '0.75rem',
  },
  description: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    lineHeight: 1.8,
    maxWidth: '600px',
    marginBottom: '1rem',
  },
  highlights: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem' },
  highlight: {
    padding: '0.3rem 0.75rem',
    border: '1px solid var(--border)',
    fontSize: '0.7rem',
    fontFamily: 'var(--font-mono)',
    color: 'var(--text-muted)',
    borderRadius: '2px',
  },
};

export default function Experience({ experience }) {
  return (
    <section id="experience" style={s.section}>
      <div style={s.inner}>
        <div style={s.header}>
          <p className="section-label">01 — Experience</p>
          <h2 style={s.title}>ประวัติการทำงาน</h2>
        </div>

        <div style={s.timeline}>
          <div style={s.line} />
          {experience.map((job) => (
            <div key={job.id} style={s.item}>
              <div style={s.dot} />
              <div style={s.period}>{job.period}</div>
              <div style={s.company}>{job.company}</div>
              <div style={s.position}>{job.position}</div>
              <p style={s.description}>{job.description}</p>
              <div style={s.highlights}>
                {job.highlights.map((h, i) => (
                  <span key={i} style={s.highlight}>— {h}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}