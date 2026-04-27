import React, { useState } from 'react';

const s = {
  section: { padding: '6rem 2rem', borderTop: '1px solid var(--border)' },
  inner: { maxWidth: '1100px', margin: '0 auto' },
  layout: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '5rem',
    alignItems: 'start',
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 300,
    letterSpacing: '-0.02em',
    marginBottom: '1.25rem',
  },
  subtitle: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    lineHeight: 1.8,
  },
  infoList: { marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' },
  infoItem: {
    display: 'flex', flexDirection: 'column', gap: '0.15rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid var(--border)',
  },
  infoLabel: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.6rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
  },
  infoValue: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
  },
  form: { display: 'flex', flexDirection: 'column', gap: '1.25rem' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '0.4rem' },
  label: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.6rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
  },
  input: {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    padding: '0.75rem 1rem',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    width: '100%',
  },
  textarea: {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    padding: '0.75rem 1rem',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    outline: 'none',
    resize: 'vertical',
    minHeight: '130px',
    width: '100%',
    transition: 'border-color 0.2s',
  },
  btn: {
    padding: '0.85rem 2rem',
    background: 'var(--accent)',
    color: '#080808',
    border: 'none',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
    alignSelf: 'flex-start',
  },
  success: {
    padding: '1rem',
    border: '1px solid var(--accent)',
    color: 'var(--accent)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    letterSpacing: '0.05em',
    background: 'var(--accent-dim)',
  },
  error: {
    padding: '1rem',
    border: '1px solid #e06060',
    color: '#e06060',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    background: 'rgba(224,96,96,0.08)',
  },
};

export default function Contact({ personal }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errMsg, setErrMsg] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrMsg(data.error || 'เกิดข้อผิดพลาด');
      }
    } catch {
      setStatus('error');
      setErrMsg('ไม่สามารถเชื่อมต่อกับ Server ได้');
    }
  };

  return (
    <section id="contact" style={s.section}>
      <div style={s.inner}>
        <div style={s.layout}>
          <div>
            <p className="section-label">05 — Contact</p>
            <h2 style={s.title}>ติดต่อ</h2>
            <p style={s.subtitle}>
              พร้อมรับงานใหม่และโอกาสที่น่าสนใจ<br />
              ส่งข้อความมาได้เลย!
            </p>
            <div style={s.infoList}>
              {[
                { label: 'Email', value: personal.email },
                { label: 'Phone', value: personal.phone },
                { label: 'GitHub', value: personal.github },
                { label: 'LinkedIn', value: personal.linkedin },
              ].map((item) => (
                <div key={item.label} style={s.infoItem}>
                  <span style={s.infoLabel}>{item.label}</span>
                  <span style={s.infoValue}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <form style={s.form} onSubmit={handleSubmit}>
            <div style={s.inputGroup}>
              <label style={s.label}>ชื่อ</label>
              <input
                name="name" value={form.name} onChange={handleChange}
                style={s.input} required placeholder="กรอกชื่อของคุณ"
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
            <div style={s.inputGroup}>
              <label style={s.label}>Email</label>
              <input
                name="email" type="email" value={form.email} onChange={handleChange}
                style={s.input} required placeholder="your@email.com"
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
            <div style={s.inputGroup}>
              <label style={s.label}>ข้อความ</label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                style={s.textarea} required placeholder="บอกเล่าเรื่องราวของคุณ..."
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>

            {status === 'success' && (
              <div style={s.success}>✓ ส่งข้อความสำเร็จ! จะติดต่อกลับโดยเร็ว</div>
            )}
            {status === 'error' && (
              <div style={s.error}>⚠ {errMsg}</div>
            )}

            <button
              type="submit"
              style={s.btn}
              disabled={status === 'loading'}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              {status === 'loading' ? 'กำลังส่ง...' : 'ส่งข้อความ →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}