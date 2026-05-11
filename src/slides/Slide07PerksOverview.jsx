import { motion } from 'framer-motion'
import { HeartPulse, Palmtree, BookOpen, Target, PiggyBank, ShieldAlert, Home, Users, Sparkles } from 'lucide-react'

const benefits = [
  { icon: <HeartPulse size={24} color="var(--sp-red)" />, title: 'Health & Wellness', desc: 'Comprehensive medical, dental, and holistic wellbeing programs.' },
  { icon: <Palmtree size={24} color="var(--sp-red)" />, title: 'Flexible Downtime', desc: 'Generous time off to recharge and disconnect from work.' },
  { icon: <BookOpen size={24} color="var(--sp-red)" />, title: 'Continuous Learning', desc: 'Investments in employee upskilling and future-ready capabilities.' },
  { icon: <Target size={24} color="var(--sp-red)" />, title: 'Accelerate Your Career', desc: 'Global coaching resources and early career programs.' },
  { icon: <PiggyBank size={24} color="var(--sp-red)" />, title: 'Invest In Your Future', desc: 'Retirement matching, insurance, and financial planning support.' },
  { icon: <ShieldAlert size={24} color="var(--sp-red)" />, title: 'Expect the Unexpected', desc: 'Support for critical life events and emergencies.' },
  { icon: <Home size={24} color="var(--sp-red)" />, title: 'Work-Your Way', desc: 'Hybrid and flexible working arrangements.' },
  { icon: <Users size={24} color="var(--sp-red)" />, title: 'Family-Friendly Perks', desc: 'Support for parents, caregivers, and family planning.' },
  { icon: <Sparkles size={24} color="var(--sp-red)" />, title: 'Beyond the Basics', desc: 'Sabbaticals, compassion leave, and specialized support.' },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }
const item = { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }

export default function Slide07PerksOverview() {
  return (
    <div className="slide-container slide-dark" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="grid-overlay" />
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '5px', background: 'var(--sp-red)' }} />

      <div style={{ position: 'relative', zIndex: 2, padding: '4rem 8rem' }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>03 · Perks & Benefits</p>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Supporting the Whole Employee
          </h2>
          <div className="accent-line" style={{ margin: '0 auto' }} />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {benefits.map((b, i) => (
            <motion.div key={i} variants={item}>
              <div className="benefit-card" style={{ display: 'flex', gap: '1.25rem', height: '100%', alignItems: 'flex-start' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(227,0,15,0.1)',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0,
                }}>
                  {b.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: '0.4rem' }}>{b.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{b.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
