import { motion } from 'framer-motion'

const pkBenefits = [
  { value: '10%', label: 'Provident Fund', sub: 'Up to 10% of basic salary' },
  { value: '36x', label: 'Life Insurance', sub: 'Up to 36 times monthly base salary' },
  { value: '14', label: 'Annual Leave', sub: 'Days' },
  { value: '10', label: 'Casual Leave', sub: 'Days' },
  { value: '10', label: 'Sick Leave', sub: 'Days' },
  { value: '90', label: 'Leave Without Pay', sub: 'Up to 90 calendar days' },
  { value: '14', label: 'Annual Holidays', sub: 'Observed' },
  { value: 'Full', label: 'Medical Insurance', sub: 'Coverage provided' },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }
const item = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }

export default function Slide09PakistanBenefits() {
  return (
    <div className="slide-container slide-light" style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '5px', background: 'var(--sp-red)' }} />

      <div style={{ padding: '5rem 8rem', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>03 · Perks & Benefits</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: 'var(--sp-charcoal)', letterSpacing: '-0.02em' }}>
              Pakistan Local Benefits
            </h2>
            <div className="tag" style={{ background: 'white' }}>PK Region</div>
          </div>
          <div className="accent-line" />
        </motion.div>

        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} style={{ width: '30%' }}>
            <p style={{ fontSize: '1rem', color: 'var(--sp-gray)', lineHeight: 1.6, marginBottom: '2rem' }}>
              In addition to global programs, S&P Global offers localized benefits tailored to the specific needs, regulations, and market standards of our employees in Pakistan.
            </p>
            <div style={{ padding: '1.5rem', background: 'white', borderLeft: '3px solid var(--sp-red)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--sp-charcoal)', marginBottom: '0.5rem' }}>Comprehensive Healthcare</h4>
              <p style={{ fontSize: '1rem', color: 'var(--sp-gray)' }}>Full medical insurance coverage provided for employees and eligible dependents.</p>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{
              flex: 1,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
            }}
          >
            {pkBenefits.map((b, i) => (
              <motion.div key={i} variants={item} className="pk-card">
                <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--sp-red)', marginBottom: '0.25rem', fontFamily: "'Playfair Display', serif" }}>
                  {b.value}
                </h3>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--sp-charcoal)', marginBottom: '0.25rem' }}>{b.label}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--sp-gray)' }}>{b.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
