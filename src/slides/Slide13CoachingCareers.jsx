import { motion } from 'framer-motion'

export default function Slide13CoachingCareers() {
  return (
    <div className="slide-container slide-light" style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '5px', background: 'var(--sp-red)' }} />

      <div style={{ padding: '4rem 8rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '2rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>05 · Professional Development</p>
          <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--sp-charcoal)', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            Coaching & Early Careers
          </h2>
          <div className="accent-line" />
        </motion.div>

        <div style={{ display: 'flex', gap: '4rem', flex: 1, alignItems: 'center' }}>
          
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--sp-red)', marginBottom: '1.5rem' }}>Global Career Coaching</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--sp-gray)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Launched in 2020, our internal coaching program democratizes access to professional development, pairing employees with certified internal coaches to navigate career growth, leadership challenges, and transitions.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="pk-card" style={{ padding: '1.5rem', textAlign: 'left', borderBottom: 'none', borderLeft: '3px solid var(--sp-red)' }}>
                <h4 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--sp-charcoal)', marginBottom: '0.25rem', fontFamily: "'Playfair Display', serif" }}>4,091</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--sp-gray)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Participants Since Launch</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="pk-card" style={{ padding: '1.5rem', textAlign: 'left', borderBottom: 'none', borderLeft: '3px solid var(--sp-charcoal)' }}>
                <h4 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--sp-charcoal)', marginBottom: '0.25rem', fontFamily: "'Playfair Display', serif" }}>1,081</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--sp-gray)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Participants in 2024</p>
              </motion.div>
            </div>
          </div>

          <div style={{ width: '1px', background: 'var(--sp-light-gray)', height: '80%' }} />

          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--sp-red)', marginBottom: '1.5rem' }}>Early Careers Programs</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--sp-gray)', lineHeight: 1.6, marginBottom: '2rem' }}>
              We build our future leadership pipeline by investing heavily in emerging talent through structured internships and rotational programs across global regions.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { count: '333', text: 'Interns hired across four global regions in 2024' },
                { count: '4k+', text: 'International Coaching Week attendees' },
                { count: '10k+', text: 'Attendees reached through 38 early career events' },
                { count: '2', text: 'Core programs: Interns Innovation Challenge & Associate Development Program' },
                { count: '✓', text: 'Mentorship and structured rotations' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + (i * 0.1) }} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'white', padding: '1rem 1.5rem', borderRadius: '2px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--sp-red)', minWidth: '45px' }}>{item.count}</div>
                  <div style={{ width: '1px', height: '24px', background: 'var(--sp-light-gray)' }} />
                  <p style={{ fontSize: '1rem', color: 'var(--sp-charcoal)', fontWeight: 500 }}>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
