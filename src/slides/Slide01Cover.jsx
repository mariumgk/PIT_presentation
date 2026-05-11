import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Slide01Cover() {
  return (
    <div className="slide-container slide-dark" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `url(${import.meta.env.BASE_URL}assets/bg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to right, rgba(15,15,15,0.95) 0%, rgba(15,15,15,0.7) 40%, transparent 100%)',
        zIndex: 0
      }} />

      <div className="grid-overlay" style={{ zIndex: 1 }} />

      {/* Left red vertical bar */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '5px',
        background: 'var(--sp-red)',
      }} />

      {/* Background geometric accent */}
      <div style={{
        position: 'absolute',
        right: '-5%',
        top: '-10%',
        width: '50vw',
        height: '120vh',
        background: 'linear-gradient(135deg, rgba(227,0,15,0.04) 0%, transparent 60%)',
        borderLeft: '1px solid rgba(227,0,15,0.08)',
        transform: 'skewX(-8deg)',
        pointerEvents: 'none',
      }} />

      {/* Corner watermark */}
      <div style={{
        position: 'absolute',
        right: '3rem',
        bottom: '4rem',
        opacity: 0.04,
        fontSize: '18rem',
        fontWeight: 900,
        letterSpacing: '-0.05em',
        lineHeight: 1,
        color: 'white',
        fontFamily: "'Playfair Display', serif",
        pointerEvents: 'none',
        userSelect: 'none',
      }}>S&P</div>

      {/* Main content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '6rem 8rem 4rem',
        position: 'relative',
        zIndex: 2,
      }}>
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <p className="section-label" style={{ marginBottom: '1rem' }}>CS-392 Project · Team Catalyst</p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>
              Members: Marium Imran, Momina Najeeb, Unaiza Babur, Wafa Abbas
            </p>
          </motion.div>

          <motion.div variants={item}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div className="accent-line-lg" />
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h1 className="display-heading" style={{
              fontSize: 'clamp(3rem, 5.5vw, 5.5rem)',
              color: 'white',
              marginBottom: '0.5rem',
              maxWidth: '800px',
            }}>
              Corporate Culture
            </h1>
            <h1 className="display-heading" style={{
              fontSize: 'clamp(3rem, 5.5vw, 5.5rem)',
              color: 'white',
              maxWidth: '800px',
            }}>
              &amp; Professional Perks
            </h1>
          </motion.div>

          <motion.div variants={item}>
            <div style={{
              marginTop: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
            }}>
              <div style={{ height: '1px', width: '60px', background: 'rgba(255,255,255,0.2)' }} />
              <img
                src={`${import.meta.env.BASE_URL}assets/sp-logo.png`}
                alt="S&P Global Logo"
                style={{ height: '40px', objectFit: 'contain' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <p style={{
                fontSize: '1.2rem',
                color: 'rgba(255,255,255,0.5)',
                fontWeight: 300,
                letterSpacing: '0.05em',
                display: 'none'
              }}>S&amp;P Global</p>
              <div style={{ height: '1px', width: '60px', background: 'rgba(255,255,255,0.2)' }} />
            </div>
          </motion.div>

          {/* Tags removed per user request */}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '1.25rem 8rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}>

        </p>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <div className="pulse-dot" />
          <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}>

          </p>
        </div>
      </div>
    </div>
  )
}
