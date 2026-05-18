'use client'

import { Zap, AlertTriangle, Building2, BookOpen, Download, BarChart3 } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const features = [
  {
    icon: Zap,
    title: 'Intelligent Timetable Generation',
    description: 'Automatically create structured schedules using advanced AI algorithms.',
  },
  {
    icon: AlertTriangle,
    title: 'Conflict Detection',
    description: 'Prevent overlapping examinations and resource conflicts automatically.',
  },
  {
    icon: Building2,
    title: 'Hall Optimization',
    description: 'Assign venues based on capacity and location optimization.',
  },
  {
    icon: BookOpen,
    title: 'Course Management',
    description: 'Manage all departments and courses in one centralized system.',
  },
  {
    icon: Download,
    title: 'Export Timetables',
    description: 'Download schedules as PDF and share with stakeholders.',
  },
  {
    icon: BarChart3,
    title: 'Administrative Dashboard',
    description: 'Monitor, review, and adjust schedules in real-time.',
  },
]

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section ref={ref} id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance transition-all duration-700 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            Powerful Features Built for Universities
          </h2>
          <p 
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            Everything you need to streamline exam scheduling and eliminate conflicts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`group bg-white border border-border rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: isVisible ? `${0.1 + index * 0.1}s` : '0s'
                }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
