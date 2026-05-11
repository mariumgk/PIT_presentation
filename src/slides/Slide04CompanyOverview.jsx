import { motion } from 'framer-motion'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } } }
const item = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.6 } } }

const bullets = [
  'S&P Global provides financial information, analytics, and data services to businesses, governments, and investors worldwide.',
  'Company purpose: "Advancing Essential Intelligence" — helping the world make confident, data-driven decisions.',
  'Its research, ratings, and benchmarks are trusted by institutions across more than 160 countries.',
]

export default function Slide04CompanyOverview() {
  return (
    <div className="slide-container slide-dark" style={{ display: 'flex' }}>
      <div className="grid-overlay" />
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '5px', background: 'var(--sp-red)' }} />

      {/* Left: Brand panel */}
      <div style={{
        width: '42%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '5rem 4rem 5rem 8rem',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
        zIndex: 2,
      }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          <p className="section-label" style={{ marginBottom: '2rem' }}>02 · Company Overview</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{
            width: '120px',
            height: '120px',
            background: 'var(--sp-red)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem',
            borderRadius: '2px',
          }}
        >
          <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white', letterSpacing: '-0.05em' }}>S&P</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: 1.15 }}
        >
          S&P Global
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          <div style={{
            background: 'rgba(227,0,15,0.1)',
            border: '1px solid rgba(227,0,15,0.3)',
            padding: '0.6rem 1.2rem',
            borderRadius: '1px',
            marginBottom: '1.5rem',
          }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--sp-red)', fontWeight: 700, letterSpacing: '0.05em', fontStyle: 'italic' }}>
              "Advancing Essential Intelligence"
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {['NYSE: SPGI', 'Est. 1860', 'Global Leader'].map(t => (
              <div key={t} className="tag tag-dark">{t}</div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right: Details */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5rem 6rem 5rem 4rem',
        position: 'relative',
        zIndex: 2,
      }}>
        <motion.div variants={container} initial="hidden" animate="show">
          {bullets.map((b, i) => (
            <motion.div key={i} variants={item} style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', alignItems: 'flex-start' }}>
              <div style={{ width: '28px', height: '28px', background: 'rgba(227,0,15,0.1)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--sp-red)' }}>0{i + 1}</span>
              </div>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{b}</p>
            </motion.div>
          ))}

          <motion.div variants={item} style={{ marginTop: '1rem', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderLeft: '3px solid var(--sp-red)' }}>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
              S&P Global operates across five core divisions — Ratings, Market Intelligence, S&P Dow Jones Indices,
              Commodity Insights, and Mobility — providing an unparalleled breadth of financial intelligence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
