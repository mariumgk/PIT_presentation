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
              <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--sp-red)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Team Catalyst Analysis</p>
            </div>
          </motion.div>
        </div>



      </div>
    </div>
  )
}
