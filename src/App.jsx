import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Slide01Cover from './slides/Slide01Cover'
import Slide02TOC from './slides/Slide02TOC'
import Slide03Introduction from './slides/Slide03Introduction'
import Slide04CompanyOverview from './slides/Slide04CompanyOverview'
import Slide05CompanyScale from './slides/Slide05CompanyScale'
import Slide06FinancialStrength from './slides/Slide06FinancialStrength'
import Slide07PerksOverview from './slides/Slide07PerksOverview'
import Slide08HealthFamily from './slides/Slide08HealthFamily'
import Slide09PakistanBenefits from './slides/Slide09PakistanBenefits'
import Slide10WorkCulture from './slides/Slide10WorkCulture'
import Slide11ValuesInnovation from './slides/Slide11ValuesInnovation'
import Slide12ProfDevelopment from './slides/Slide12ProfDevelopment'
import Slide13CoachingCareers from './slides/Slide13CoachingCareers'
import Slide14XFactors from './slides/Slide14XFactors'
import Slide15Conclusion from './slides/Slide15Conclusion'

const slides = [
  Slide01Cover,
  Slide02TOC,
  Slide03Introduction,
  Slide04CompanyOverview,
  Slide05CompanyScale,
  Slide06FinancialStrength,
  Slide07PerksOverview,
  Slide08HealthFamily,
  Slide09PakistanBenefits,
  Slide10WorkCulture,
  Slide11ValuesInnovation,
  Slide12ProfDevelopment,
  Slide13CoachingCareers,
  Slide14XFactors,
  Slide15Conclusion,
]

const TOTAL = slides.length

const variants = {
  enter: (dir) => ({
    y: dir > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (dir) => ({
    y: dir < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
}

export default function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)

  const goTo = useCallback((idx) => {
    if (isAnimating || idx < 0 || idx >= TOTAL) return
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }, [current, isAnimating])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next()
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev])

  // Mouse wheel (debounced)
  useEffect(() => {
    let timeout = null
    const handler = (e) => {
      if (timeout) return
      if (e.deltaY > 20) next()
      if (e.deltaY < -20) prev()
      timeout = setTimeout(() => { timeout = null }, 900)
    }
    window.addEventListener('wheel', handler, { passive: true })
    return () => window.removeEventListener('wheel', handler)
  }, [next, prev])

  const SlideComponent = slides[current]
  const pad = (n) => String(n).padStart(2, '0')
  const isDark = [0, 1, 2, 3, 5, 7, 9, 11, 13, 14].includes(current)

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', background: '#0d0d0d' }}>

      {/* Progress bar top */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: '2px', background: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          className="progress-bar"
          animate={{ width: `${((current + 1) / TOTAL) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* Top bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.25rem 2.5rem 0',
        pointerEvents: 'none',
      }}>
        <div className="sp-logo">
          S<span>&</span>P GLOBAL
        </div>
        <div style={{
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.2em',
          color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.35)',
        }}>
          {pad(current + 1)} / {pad(TOTAL)}
        </div>
      </div>

      {/* Slides */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
          style={{ position: 'absolute', inset: 0 }}
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation controls */}
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2.5rem',
        zIndex: 100,
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center',
      }}>
        <button className="nav-btn" onClick={prev} disabled={current === 0} aria-label="Previous slide">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3L3 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        <button className="nav-btn" onClick={next} disabled={current === TOTAL - 1} aria-label="Next slide">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 8H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Dot navigation */}
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        display: 'flex',
        gap: '6px',
        alignItems: 'center',
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? '20px' : '6px',
              height: '6px',
              borderRadius: '3px',
              border: 'none',
              background: i === current ? '#E3000F' : 'rgba(255,255,255,0.25)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  )
}
