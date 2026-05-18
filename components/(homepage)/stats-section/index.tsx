'use client'

import { useEffect, useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const stats = [
  {
    label: 'Reduced Scheduling Time',
    value: 70,
    unit: '%',
    icon: '⚡',
  },
  {
    label: 'Conflict Detection',
    value: 100,
    unit: '%',
    icon: '✅',
  },
  {
    label: 'Automated Timetable Generation',
    value: 0,
    unit: '',
    suffix: 'Smart',
    icon: '🤖',
  },
  {
    label: 'Administrative Access',
    value: 0,
    unit: '',
    suffix: 'Secure',
    icon: '🔒',
  },
]

export default function StatsSection() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0])
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })

  useEffect(() => {
    if (!isVisible) return

    const targets = [70, 100, 0, 0]
    const durations = [2000, 2000, 0, 0]

    targets.forEach((target, index) => {
      if (target === 0) return

      const start = Date.now()
      const duration = durations[index]

      const timer = setInterval(() => {
        const elapsed = Date.now() - start
        const progress = Math.min(elapsed / duration, 1)
        const current = Math.floor(target * progress)

        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[index] = current
          return newCounts
        })

        if (progress === 1) clearInterval(timer)
      }, 30)

      return () => clearInterval(timer)
    })
  }, [isVisible])

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white border border-border rounded-xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: isVisible ? `${0.1 + index * 0.1}s` : '0s'
              }}
            >
              <div className={`text-4xl mb-4 inline-block ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? `${0.2 + index * 0.1}s` : '0s' }}>
                {stat.icon}
              </div>
              <div className="mb-3">
                {stat.value > 0 ? (
                  <p className="text-4xl font-bold text-primary">
                    {counts[index]}{stat.unit}
                  </p>
                ) : (
                  <p className="text-4xl font-bold text-accent">{stat.suffix}</p>
                )}
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
