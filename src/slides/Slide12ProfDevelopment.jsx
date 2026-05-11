import { motion } from 'framer-motion'

const techSkills = ['AI & Generative AI', 'Agile', 'Cloud Computing', 'DevOps', 'Data Science', 'Cybersecurity', 'Automation']
const leadershipSkills = ['Leadership', 'Ethics & Compliance', 'DEI Learning']

export default function Slide12ProfDevelopment() {
  return (
    <div className="slide-container slide-dark" style={{ display: 'flex' }}>
      <div className="grid-overlay" />
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '5px', background: 'var(--sp-red)' }} />

      <div style={{
        width: '45%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5rem 4rem 5rem 8rem',
        position: 'relative',
        zIndex: 2,
      }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>05 · Professional Development</p>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '0.5rem', lineHeight: 1.1 }}>
            Learning as a <br />Strategic Investment
          </h2>
          <div className="accent-line" style={{ marginBottom: '2.5rem' }} />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            S&P Global views learning as a strategic investment. With initiatives like the <strong>Spark AI Academy</strong> (with Accenture) and the <strong>Spark Assist GenAI platform</strong>, there was 48% active employee usage by year-end. Microlearning platforms like Eskalera further enhance continuous learning.
          </p>
        </motion.div>
      </div>

      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5rem 6rem 5rem 2rem',
        position: 'relative',
        zIndex: 2,
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderTop: '3px solid var(--sp-red)',
            padding: '3rem',
            borderRadius: '2px',
          }}
        >
          <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>
            Essential Tech Capabilities
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
            {techSkills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.05) }}
                className="tag tag-dark"
                style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', border: '1px solid rgba(227,0,15,0.4)', color: 'white', background: 'rgba(227,0,15,0.1)' }}
              >
                {skill}
              </motion.div>
            ))}
          </div>

          <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>
            Core Business Skills
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {leadershipSkills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (i * 0.05) }}
                className="tag tag-dark"
                style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
