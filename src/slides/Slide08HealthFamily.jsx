import { motion } from 'framer-motion'

const list1 = [
  'Medical, dental, and vision plans',
  'Fitness and wellness reimbursements',
  'Annual wellbeing day',
  '24/7 mental health support',
  'TELUS Health wellbeing program',
  'Reproductive wellness',
  'Global Cancer Support Program',
]

const list2 = [
  'Parental leave',
  'Global Care Leave',
  'Sabbatical Leave',
  'Compassion Leave',
  'Paid sick leave',
  'Business travel insurance',
]

export default function Slide08HealthFamily() {
  return (
    <div className="slide-container slide-light" style={{ display: 'flex' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '5px', background: 'var(--sp-red)' }} />

      <div style={{
        width: '45%',
        background: 'var(--sp-off-white)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5rem 4rem 5rem 8rem',
      }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>03 · Perks & Benefits</p>
          <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--sp-charcoal)', letterSpacing: '-0.02em', marginBottom: '0.5rem', lineHeight: 1.1 }}>
            Health, Family <br />& Leave Programs
          </h2>
          <div className="accent-line" style={{ marginBottom: '2.5rem' }} />
          <p style={{ fontSize: '1rem', color: 'var(--sp-gray)', lineHeight: 1.6 }}>
            S&P Global recognizes that employee wellbeing extends beyond the office. Our comprehensive programs support physical health, mental wellbeing, and critical life events.
          </p>
        </motion.div>
      </div>

      <div style={{
        flex: 1,
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5rem 6rem 5rem 4rem',
        borderLeft: '1px solid var(--sp-light-gray)',
      }}>
        <div style={{ display: 'flex', gap: '3rem' }}>
          {/* Column 1 */}
          <div style={{ flex: 1 }}>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--sp-charcoal)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span style={{ color: 'var(--sp-red)' }}>+</span> Health & Wellbeing
            </motion.h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {list1.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}
                >
                  <div style={{ width: '6px', height: '6px', background: 'var(--sp-red)', borderRadius: '50%', marginTop: '6px' }} />
                  <p style={{ fontSize: '1.1rem', color: 'var(--sp-charcoal)', fontWeight: 500 }}>{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div style={{ flex: 1 }}>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--sp-charcoal)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span style={{ color: 'var(--sp-red)' }}>+</span> Leave & Family Support
            </motion.h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {list2.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}
                >
                  <div style={{ width: '6px', height: '6px', background: 'var(--sp-red)', borderRadius: '50%', marginTop: '6px' }} />
                  <p style={{ fontSize: '1.1rem', color: 'var(--sp-charcoal)', fontWeight: 500 }}>{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
