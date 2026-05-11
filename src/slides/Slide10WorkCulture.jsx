import { motion } from 'framer-motion'
import { Globe2, Handshake } from 'lucide-react'

export default function Slide10WorkCulture() {
  return (
    <div className="slide-container slide-dark" style={{ display: 'flex' }}>
      <div className="grid-overlay" />
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '5px', background: 'var(--sp-red)' }} />

      <div style={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5rem 4rem 5rem 8rem',
        position: 'relative',
        zIndex: 2,
      }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>04 · Work Culture</p>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '0.5rem', lineHeight: 1.1 }}>
            People First <br />Philosophy
          </h2>
          <div className="accent-line" style={{ marginBottom: '2.5rem' }} />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            S&P Global's culture is anchored in inclusion, innovation, integrity, and collaboration, creating an environment where everyone can thrive.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { icon: <Globe2 size={20} color="var(--sp-red)" />, title: 'People Resource Groups (PRGs)', desc: 'Adelante, APEX, BOLD, Empower, ParentsNet, Pride, Reach, VALOR, WINS.' },
              { icon: <Handshake size={20} color="var(--sp-red)" />, title: 'Culture Pillars', desc: 'Inclusion, Innovation, Integrity, Collaboration.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + (i * 0.15) }} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(227,0,15,0.1)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0, marginTop: '2px' }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'white', fontWeight: 700, marginBottom: '0.25rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div style={{
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 6rem 5rem 2rem',
        position: 'relative',
        zIndex: 2,
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{
            position: 'relative',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {/* Decorative outer rings */}
          <div style={{ position: 'absolute', inset: '-20px', borderRadius: '50%', border: '1px dashed rgba(255,255,255,0.05)', animation: 'spin 60s linear infinite' }} />
          <div style={{ position: 'absolute', inset: '10px', borderRadius: '50%', border: '2px solid rgba(227,0,15,0.2)' }} />
          
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
            <circle cx="175" cy="175" r="165" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
            <motion.circle
              cx="175"
              cy="175"
              r="165"
              fill="none"
              stroke="#E3000F"
              strokeWidth="4"
              strokeDasharray="1036"
              initial={{ strokeDashoffset: 1036 }}
              animate={{ strokeDashoffset: 1036 - (1036 * 0.86) }} // 4.3/5 = 86%
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            />
          </svg>

          <h3 style={{ fontSize: '4.5rem', fontWeight: 900, color: 'white', lineHeight: 1, marginBottom: '0.5rem', fontFamily: "'Playfair Display', serif" }}>
            4.3
          </h3>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: '1rem' }}>out of 5</p>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.4rem 1rem', borderRadius: '20px' }}>
            <p style={{ fontSize: '0.9rem', color: 'white', fontWeight: 700, letterSpacing: '0.05em' }}>GLASSDOOR DEI RATING</p>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}} />
    </div>
  )
}
