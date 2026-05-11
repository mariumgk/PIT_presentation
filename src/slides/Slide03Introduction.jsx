import { motion } from 'framer-motion'

const points = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="13" stroke="#E3000F" strokeWidth="1.5"/>
        <path d="M9 14l3.5 3.5L19 10" stroke="#E3000F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heading: 'Beyond Salaries',
    body: 'Companies are no longer judged only by salaries. Work environment, employee wellbeing, learning opportunities, and work-life balance play a major role in attracting and retaining talented employees.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="7" width="22" height="16" rx="1.5" stroke="#E3000F" strokeWidth="1.5"/>
        <path d="M9 5v4M19 5v4" stroke="#E3000F" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 11h22" stroke="#E3000F" strokeWidth="1.5"/>
      </svg>
    ),
    heading: 'Focus on S&P Global',
    body: 'This presentation focuses on S&P Global, a leading global company known for data, analytics, and financial intelligence services.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L4 10v8l10 6 10-6V10L14 4z" stroke="#E3000F" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 4v14M4 10l10 6 10-6" stroke="#E3000F" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    heading: 'Purpose of Analysis',
    body: 'To analyze how S&P Global supports employees beyond salary through perks, benefits, work culture, professional development, and X-Factors.',
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } } }
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65 } } }

export default function Slide03Introduction() {
  return (
    <div className="slide-container slide-dark" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="grid-overlay" />
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '5px', background: 'var(--sp-red)' }} />

      <div style={{ position: 'relative', zIndex: 2, padding: '5rem 8rem' }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>01 · Introduction</p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-0.02em',
            marginBottom: '0.5rem',
          }}>Why Culture Matters</h2>
          <div className="accent-line" style={{ marginBottom: '3rem' }} />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
        >
          {points.map((p, i) => (
            <motion.div key={i} variants={item}>
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderTop: '3px solid var(--sp-red)',
                padding: '2rem 1.75rem',
                height: '100%',
              }}>
                <div style={{ marginBottom: '1.25rem' }}>{p.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>{p.heading}</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{p.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p style={{
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.3)',
            fontStyle: 'italic',
            maxWidth: '600px',
          }}>
            "The quality of a company's culture is now as important as the quality of its products."
          </p>
        </motion.div>
      </div>
    </div>
  )
}
