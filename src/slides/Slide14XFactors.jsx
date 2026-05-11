import { motion } from 'framer-motion'
import { MonitorPlay, Compass, GraduationCap, Building, Umbrella } from 'lucide-react'

const factors = [
  { icon: <MonitorPlay size={24} color="var(--sp-red)" />, title: 'EssentialTECH Program', desc: 'Mandatory technical upskilling ensuring all employees speak the language of modern data and AI.' },
  { icon: <Compass size={24} color="var(--sp-red)" />, title: 'Global Career Coaching', desc: 'Democratized coaching access, treating every employee as a future leader regardless of current title.' },
  { icon: <GraduationCap size={24} color="var(--sp-red)" />, title: 'Student Loan Matching', desc: 'Financial wellness initiative tackling one of the biggest burdens for early and mid-career talent.' },
  { icon: <Building size={24} color="var(--sp-red)" />, title: 'Work Your Way', desc: 'A mature hybrid model emphasizing flexibility and output over physical presence.' },
  { icon: <Umbrella size={24} color="var(--sp-red)" />, title: 'Recharge Time Off', desc: 'Unlimited flexible time off demonstrating ultimate trust in employee judgment and accountability.' },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }
const item = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.5 } } }

export default function Slide14XFactors() {
  return (
    <div className="slide-container slide-dark" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="grid-overlay" />
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '5px', background: 'var(--sp-red)' }} />

      <div style={{ padding: '4rem 8rem', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', zIndex: 2 }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '2.5rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>06 · The Differentiators</p>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            The X-Factors
          </h2>
          <div className="accent-line" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '900px',
            flex: 1,
            justifyContent: 'center'
          }}
        >
          {factors.map((f, i) => (
            <motion.div key={i} variants={item} className="xfactor-card">
              <div className="xfactor-icon">
                <span style={{ fontSize: '1.25rem' }}>{f.icon}</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '0.35rem' }}>{f.title}</h3>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
