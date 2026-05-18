'use client'

import { CheckCircle2, Zap, TrendingUp, Shield } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const benefits = [
  {
    icon: Zap,
    title: 'Save Time',
    description: 'Reduce scheduling time from days to just minutes with our intelligent algorithms.',
  },
  {
    icon: Shield,
    title: 'Reduce Human Error',
    description: 'Eliminate manual mistakes and ensure consistent, accurate scheduling every time.',
  },
  {
    icon: CheckCircle2,
    title: 'Conflict-Free Scheduling',
    description: 'Prevent overlapping exams, instructor conflicts, and room double-bookings.',
  },
  {
    icon: TrendingUp,
    title: 'Better Resource Allocation',
    description: 'Optimize hall usage and student distribution for maximum efficiency.',
  },
]

export default function WhyExamFlow() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })

  return (
    <section ref={ref} id="about" className="py-20 bg-gradient-to-b from-background to-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Benefits */}
          <div className="space-y-8">
            <div>
              <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance transition-all duration-700 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}>
                Why Choose ExamFlow?
              </h2>
              <p className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`} style={{ animationDelay: '0.1s' }}>
                Built specifically for educational institutions, ExamFlow delivers measurable improvements in scheduling efficiency and accuracy.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div 
                    key={index} 
                    className={`flex gap-4 transition-all duration-700 ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: isVisible ? `${0.2 + index * 0.1}s` : '0s' }}
                  >
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-1">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right - Illustration */}
          <div className={`relative transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-12 border border-border/50 min-h-96 flex flex-col justify-center">
              {/* Stats Showcase */}
              <div className="space-y-6">
                <div className={`bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`} style={{ animationDelay: isVisible ? '0.4s' : '0s' }}>
                  <p className="text-sm text-muted-foreground mb-2">Scheduling Time Reduction</p>
                  <div className="flex items-end gap-2">
                    <div className="flex-1">
                      <div className="text-3xl font-bold text-primary">70%</div>
                      <p className="text-xs text-muted-foreground mt-1">Less Time Needed</p>
                    </div>
                    <div className="h-20 bg-gradient-to-t from-primary/20 to-primary/40 rounded-lg w-16"></div>
                  </div>
                </div>

                <div className={`bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`} style={{ animationDelay: isVisible ? '0.5s' : '0s' }}>
                  <p className="text-sm text-muted-foreground mb-2">Error Prevention</p>
                  <div className="flex items-end gap-2">
                    <div className="flex-1">
                      <div className="text-3xl font-bold text-secondary">99.8%</div>
                      <p className="text-xs text-muted-foreground mt-1">Accuracy Rate</p>
                    </div>
                    <div className="h-20 bg-gradient-to-t from-secondary/20 to-secondary/40 rounded-lg w-16"></div>
                  </div>
                </div>

                <div className={`bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`} style={{ animationDelay: isVisible ? '0.6s' : '0s' }}>
                  <p className="text-sm text-muted-foreground mb-2">Resource Efficiency</p>
                  <div className="flex items-end gap-2">
                    <div className="flex-1">
                      <div className="text-3xl font-bold text-accent">85%</div>
                      <p className="text-xs text-muted-foreground mt-1">Utilization Rate</p>
                    </div>
                    <div className="h-20 bg-gradient-to-t from-accent/20 to-accent/40 rounded-lg w-16"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
