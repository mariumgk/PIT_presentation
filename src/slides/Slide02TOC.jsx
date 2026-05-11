import { motion } from 'framer-motion'

const sections = [
  { num: '01', title: 'Introduction', sub: 'Beyond compensation' },
  { num: '02', title: 'Company Overview', sub: 'Advancing Essential Intelligence' },
  { num: '03', title: 'Perks & Benefits', sub: 'Health, family & local benefits' },
  { num: '04', title: 'Work Culture', sub: 'People First philosophy' },
  { num: '05', title: 'Professional Development & Growth', sub: 'Learning as strategic investment' },
  { num: '06', title: 'The X-Factors', sub: 'Differentiating initiatives' },
  { num: '07', title: 'Conclusion', sub: 'Complete employee value proposition' },
  { num: '08', title: 'References', sub: 'Sources & citations' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
}
const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export default function Slide02TOC() {
  return (
    <div className="slide-container slide-dark" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="grid-overlay" />

      {/* Left accent */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '5px', background: 'var(--sp-red)' }} />

      <div style={{ position: 'relative', zIndex: 2, padding: '5rem 8rem 4rem' }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>Agenda</p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 800,
            color: 'white',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em',
          }}>Table of Contents</h2>
          <div className="accent-line" style={{ marginBottom: '2.5rem' }} />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0 4rem',
          }}
        >
          {sections.map((s) => (
            <motion.div key={s.num} variants={item}>
              <div className="toc-item">
                <span className="toc-num">{s.num}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'white', marginBottom: '0.2rem' }}>{s.title}</p>
                  <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em' }}>{s.sub}</p>
                </div>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.3, flexShrink: 0 }}>
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
