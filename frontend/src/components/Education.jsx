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
  card: {
    padding: '2.5rem',
    border: '1px solid var(--border)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '1rem',
    maxWidth: '700px',
  },
  institution: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.8rem',
    fontWeight: 300,
    marginBottom: '0.25rem',
  },
  degree: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
  },
  field: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: 'var(--accent)',
    marginTop: '0.25rem',
    letterSpacing: '0.05em',
  },
  right: { textAlign: 'right' },
  period: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.1em',
    marginBottom: '0.5rem',
  },
  gpa: {
    fontFamily: 'var(--font-display)',
    fontSize: '2.5rem',
    fontWeight: 300,
    color: 'var(--accent)',
    lineHeight: 1,
  },
  gpaLabel: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.6rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.1em',
    marginTop: '0.2rem',
  },
};

export default function Education({ education }) {
  return (
    <section id="education" style={s.section}>
      <div style={s.inner}>
        <div style={s.header}>
          <p className="section-label">03 — Education</p>
          <h2 style={s.title}>การศึกษา</h2>
        </div>

        {education.map((edu, i) => (
          <div key={i} style={s.card}>
            <div>
              <div style={s.institution}>{edu.institution}</div>
              <div style={s.degree}>{edu.degree}</div>
              <div style={s.field}>{edu.field}</div>
            </div>
            <div style={s.right}>
              <div style={s.period}>{edu.period}</div>
              <div style={s.gpa}>{edu.gpa}</div>
              <div style={s.gpaLabel}>GPA</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}