import { motion } from 'framer-motion'

const values = [
  { title: 'Integrity', desc: 'Doing the right thing.' },
  { title: 'Discovery', desc: 'Curiosity and innovation.' },
  { title: 'Partnership', desc: 'Working together.' },
]

const programs = [
  { label: 'Ethical AI', text: 'AI ethics module in COBE training & Generative AI course.' },
  { label: 'ISO 45001', text: 'Occupational health and safety management system implemented.' },
  { label: 'Zero Incidents', text: 'Total reportable health & safety incidents across global offices in 2024.' },
]

export default function Slide11ValuesInnovation() {
  return (
    <div className="slide-container slide-light" style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '5px', background: 'var(--sp-red)' }} />

      <div style={{ padding: '4rem 8rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>04 · Work Culture</p>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: 'var(--sp-charcoal)', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            Values, Innovation & Safety
          </h2>
          <div className="accent-line" />
        </motion.div>

        <div style={{ flex: 1, display: 'flex', gap: '4rem' }}>
          {/* Values Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--sp-charcoal)', marginBottom: '2rem' }}>Core Values</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="value-card"
                >
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--sp-charcoal)', marginBottom: '0.5rem' }}>{v.title}</h4>
                  <p style={{ fontSize: '1.05rem', color: 'var(--sp-gray)', lineHeight: 1.5 }}>{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div style={{ width: '1px', background: 'var(--sp-light-gray)', height: '100%' }} />

          {/* Innovation & Safety Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--sp-charcoal)', marginBottom: '2rem' }}>Safety & Ethics</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {programs.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
                >
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'var(--sp-off-white)',
                    border: '1px solid var(--sp-light-gray)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    flexShrink: 0,
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                  }}>
                    <div style={{ width: '8px', height: '8px', background: 'var(--sp-red)', borderRadius: '50%' }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--sp-charcoal)', marginBottom: '0.25rem' }}>{p.label}</h4>
                    <p style={{ fontSize: '1rem', color: 'var(--sp-gray)', lineHeight: 1.5 }}>{p.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
