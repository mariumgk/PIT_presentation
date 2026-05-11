import { motion } from 'framer-motion'

export default function Slide15Conclusion() {
  return (
    <div className="slide-container slide-dark" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="grid-overlay" />
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '5px', background: 'var(--sp-red)' }} />

      <div style={{ padding: '5rem 8rem', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', zIndex: 2 }}>
        
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '1000px' }}>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '2rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>07 · Conclusion</p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '0.5rem', lineHeight: 1.1 }}>
              Supporting the <br />Whole Employee
            </h2>
            <div className="accent-line" />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} style={{ position: 'relative', paddingLeft: '3rem', marginTop: '1rem' }}>
            <span style={{ position: 'absolute', left: '-1rem', top: '-2rem', fontSize: '6rem', color: 'rgba(227,0,15,0.2)', fontFamily: "'Playfair Display', serif", lineHeight: 1 }}>"</span>
            <p style={{ fontSize: '1.4rem', color: 'white', lineHeight: 1.6, fontWeight: 300, fontStyle: 'italic', marginBottom: '2rem' }}>
              S&P Global attracts and retains talent through non-monetary benefits, positive culture, flexible work, wellness support, family-friendly policies, and professional development. <br/><br/>
              <strong>Key Insight:</strong> S&P Global's competitive advantage in talent retention lies in the integration of learning, purpose, wellness, and flexibility into a unified employee value proposition.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '40px', height: '2px', background: 'var(--sp-red)' }} />
              <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--sp-red)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Team Catalyst Analysis</p>
            </div>
          </motion.div>
        </div>

        {/* References Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{ 
            marginTop: 'auto', 
            paddingTop: '2rem', 
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
          }}
        >
          <div>
            <p className="section-label" style={{ marginBottom: '1rem', color: 'rgba(255,255,255,0.4)' }}>08 · References & Sources</p>
            <div style={{ display: 'flex', gap: '3rem' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>1. S&P Global Impact Report (2024)</li>
                <li style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>2. S&P Global Careers & Benefits Portal</li>
              </ul>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>3. Glassdoor Employee Reviews & Ratings</li>
                <li style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>4. CS-392 Project Requirements Documentation</li>
              </ul>
            </div>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'white', letterSpacing: '-0.05em', marginBottom: '0.2rem' }}>S&P GLOBAL</h1>
            <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>END OF PRESENTATION</p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
