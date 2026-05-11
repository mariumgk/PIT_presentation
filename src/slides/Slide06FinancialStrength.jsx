import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import * as d3 from 'd3'
import { Landmark, TrendingUp, Building2 } from 'lucide-react'

const data = [
  { year: '2024', value: 14.0 },
  { year: '2025 (Est)', value: 15.0 },
]

export default function Slide06FinancialStrength() {
  const chartRef = useRef(null)

  useEffect(() => {
    if (!chartRef.current) return
    d3.select(chartRef.current).selectAll('*').remove()

    const margin = { top: 20, right: 30, bottom: 40, left: 60 }
    const width = 400 - margin.left - margin.right
    const height = 300 - margin.top - margin.bottom

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    const x = d3.scaleBand()
      .domain(data.map(d => d.year))
      .range([0, width])
      .padding(0.4)

    const y = d3.scaleLinear()
      .domain([0, 16])
      .range([height, 0])

    // Grid lines
    svg.append('g')
      .attr('class', 'grid')
      .call(d3.axisLeft(y).tickSize(-width).tickFormat('').ticks(4))
      .selectAll('line')
      .attr('stroke', 'rgba(255,255,255,0.1)')
      .attr('stroke-dasharray', '4,4')

    svg.select('.domain').remove()

    // X axis
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).tickSize(0))
      .call(g => g.select('.domain').attr('stroke', 'rgba(255,255,255,0.2)'))
      .selectAll('text')
      .attr('dy', '1em')
      .attr('fill', 'rgba(255,255,255,0.6)')
      .style('font-family', 'Inter')
      .style('font-size', '12px')
      .style('font-weight', '500')

    // Y axis
    svg.append('g')
      .call(d3.axisLeft(y).ticks(4).tickFormat(d => `$${d}B`))
      .call(g => g.select('.domain').remove())
      .selectAll('text')
      .attr('fill', 'rgba(255,255,255,0.6)')
      .style('font-family', 'Inter')
      .style('font-size', '12px')

    // Bars
    svg.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.year))
      .attr('width', x.bandwidth())
      .attr('y', height)
      .attr('height', 0)
      .attr('fill', (d, i) => i === 0 ? 'rgba(227,0,15,0.4)' : '#E3000F')
      .transition()
      .duration(1000)
      .delay((d, i) => i * 300 + 400)
      .ease(d3.easeCubicOut)
      .attr('y', d => y(d.value))
      .attr('height', d => height - y(d.value))

    // Labels
    svg.selectAll('.label')
      .data(data)
      .enter()
      .append('text')
      .attr('x', d => x(d.year) + x.bandwidth() / 2)
      .attr('y', height)
      .attr('text-anchor', 'middle')
      .attr('fill', 'white')
      .style('font-family', 'Inter')
      .style('font-weight', '700')
      .style('font-size', '14px')
      .text(d => `$${d.value}B+`)
      .transition()
      .duration(1000)
      .delay((d, i) => i * 300 + 400)
      .ease(d3.easeCubicOut)
      .attr('y', d => y(d.value) - 10)

  }, [])

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
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>02 · Company Overview</p>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '0.5rem', lineHeight: 1.1 }}>
            Financial Strength <br />& Impact
          </h2>
          <div className="accent-line" style={{ marginBottom: '2.5rem' }} />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            S&P Global's robust financial performance enables continuous investment in essential intelligence, advanced technology, and employee wellbeing.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { icon: <Landmark size={20} color="var(--sp-red)" />, text: 'Governments use its data for strategic economic planning' },
              { icon: <TrendingUp size={20} color="var(--sp-red)" />, text: 'Investors use ratings for confident investment decisions' },
              { icon: <Building2 size={20} color="var(--sp-red)" />, text: 'Companies use analytics to understand markets and mitigate risks' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + (i * 0.15) }} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {item.icon}
                </div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{item.text}</p>
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderTop: '3px solid var(--sp-red)',
            padding: '3rem',
            borderRadius: '2px',
            width: '100%',
            maxWidth: '500px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          }}
        >
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'white', marginBottom: '0.5rem', textAlign: 'center' }}>Global Revenue</h3>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginBottom: '2rem' }}>2024 vs 2025 Estimates</p>
          <div ref={chartRef} style={{ display: 'flex', justifyContent: 'center' }} />
        </motion.div>
      </div>
    </div>
  )
}
