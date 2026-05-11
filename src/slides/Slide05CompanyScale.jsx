import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

// CountUp hook
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime = null
    const animate = (time) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  return count
}

function KpiCard({ number, suffix, text, delay }) {
  const count = useCountUp(number, 1500)
  
  return (
    <motion.div variants={item} className="kpi-card">
      <h3 style={{ fontSize: '3rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem', fontFamily: "'Playfair Display', serif" }}>
        {count.toLocaleString()}{suffix}
      </h3>
      <div style={{ width: '30px', height: '2px', background: 'var(--sp-red)', marginBottom: '1rem' }} />
      <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, fontWeight: 500 }}>{text}</p>
    </motion.div>
  )
}

export default function Slide05CompanyScale() {
  return (
    <div className="slide-container slide-dark" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="grid-overlay" />
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '5px', background: 'var(--sp-red)' }} />

      <div style={{ position: 'relative', zIndex: 2, padding: '4rem 8rem' }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>02 · Company Overview</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            Scale & Impact
          </h2>
          <div className="accent-line" style={{ marginBottom: '3rem' }} />
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
          <KpiCard number={40000} suffix="+" text="Employees worldwide driving essential intelligence" />
          <KpiCard number={100} suffix="%" text="Of the Global Fortune 100 companies served" />
          <KpiCard number={80} suffix="%" text="Of the Fortune Global 500 companies served" />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }}>
          <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
            Core Business Areas
          </h3>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {['S&P Global Ratings', 'S&P Global Market Intelligence', 'S&P Dow Jones Indices', 'S&P Global Commodity Insights', 'S&P Global Mobility'].map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + (i * 0.1) }}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '2px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <div style={{ width: '4px', height: '4px', background: 'var(--sp-red)', borderRadius: '50%' }} />
                {area}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
