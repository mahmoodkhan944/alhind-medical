'use client'

import { ScrollAnimation } from '../animations/ScrollAnimation'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function AnimatedCounter({ to, suffix = '', duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const increment = to / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [inView, to, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const STATS = [
  { value: 50000, suffix: '+', label: 'Happy Patients', color: '#0EA5E9' },
  { value: 500, suffix: '+', label: 'Expert Doctors', color: '#10B981' },
  { value: 50, suffix: '+', label: 'Partner Hospitals', color: '#06B6D4' },
  { value: 98, suffix: '%', label: 'Success Rate', color: '#14B8A6' },
]

export function StatsSection() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-3xl p-12 shadow-2xl shadow-medical-blue/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <ScrollAnimation key={stat.label} delay={i * 0.1} className="text-center">
                <div className="font-display text-5xl md:text-6xl font-bold mb-2" style={{ color: stat.color }}>
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-txt-secondary font-medium">{stat.label}</div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}