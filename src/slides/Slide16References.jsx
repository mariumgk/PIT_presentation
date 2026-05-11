import { motion } from 'framer-motion'

export default function Slide16References() {
  return (
    <div className="slide-container slide-dark" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="grid-overlay" />
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '5px', background: 'var(--sp-red)' }} />

      <div style={{ padding: '5rem 8rem', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', zIndex: 2, justifyContent: 'center', alignItems: 'center' }}>
        
        <div style={{ width: '100%', maxWidth: '1000px' }}>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>08 · References</p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '0.5rem', lineHeight: 1.1 }}>
              Sources & Methodology
            </h2>
            <div className="accent-line" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3, duration: 0.8 }} 
            style={{ 
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderTop: '3px solid var(--sp-red)',
              padding: '3rem',
              borderRadius: '2px',
              fontSize: '1.25rem',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            <p>
              This presentation draws upon a comprehensive set of resources to analyze S&P Global's corporate culture and benefits. Key corporate information and values were gathered from the official <a href="https://www.spglobal.com/en/who-we-are/about-sp-global" target="_blank" rel="noreferrer" style={{ color: 'var(--sp-red)', textDecoration: 'none', fontWeight: 500 }}>About S&P Global</a> page, alongside detailed insights into their <a href="https://www.spglobal.com/en/who-we-are/culture-engagement" target="_blank" rel="noreferrer" style={{ color: 'var(--sp-red)', textDecoration: 'none', fontWeight: 500 }}>Culture & Engagement</a> initiatives and <a href="https://www.spglobal.com/en/explore-s-p-global/careers/our-culture" target="_blank" rel="noreferrer" style={{ color: 'var(--sp-red)', textDecoration: 'none', fontWeight: 500 }}>Career Culture</a>. 
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              Regional specific offerings were analyzed using the <a href="https://spgbenefits.com/ourbenefits?country=Pakistan" target="_blank" rel="noreferrer" style={{ color: 'var(--sp-red)', textDecoration: 'none', fontWeight: 500 }}>Pakistan Benefits Portal</a>, while early career opportunities were outlined in the <a href="https://www.getsmartresume.com/article/sp-global-graduate-program" target="_blank" rel="noreferrer" style={{ color: 'var(--sp-red)', textDecoration: 'none', fontWeight: 500 }}>Graduate Program overview</a>. Furthermore, broader impact metrics were sourced from the <a href="https://www.spglobal.com/en/who-we-are/corporate-responsibility/impact-report" target="_blank" rel="noreferrer" style={{ color: 'var(--sp-red)', textDecoration: 'none', fontWeight: 500 }}>2024 Impact Report</a>. 
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              Finally, to ensure an objective perspective, employee sentiment and diversity ratings were verified through independent platforms such as <a href="https://www.glassdoor.com/Culture/S-and-P-Global-DEI-E1259396.htm" target="_blank" rel="noreferrer" style={{ color: 'var(--sp-red)', textDecoration: 'none', fontWeight: 500 }}>Glassdoor</a> and <a href="https://www.indeed.com/cmp/S&P-Global/reviews?ftopic=paybenefits" target="_blank" rel="noreferrer" style={{ color: 'var(--sp-red)', textDecoration: 'none', fontWeight: 500 }}>Indeed</a>.
            </p>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{ 
            marginTop: 'auto', 
            paddingTop: '2rem', 
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '40px', height: '2px', background: 'var(--sp-red)' }} />
            <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--sp-red)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Team Catalyst Analysis</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'white', letterSpacing: '-0.05em', marginBottom: '0.2rem' }}>S&P GLOBAL</h1>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>END OF PRESENTATION</p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
