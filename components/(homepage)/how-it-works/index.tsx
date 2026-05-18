'use client'

import { Upload, Settings, Zap, CheckCircle } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const steps = [
  {
    number: '01',
    title: 'Upload Courses',
    description: 'Import your course data, student enrollments, and instructor details into the system.',
    icon: Upload,
  },
  {
    number: '02',
    title: 'Configure Halls',
    description: 'Set up examination halls with their capacities, locations, and availability.',
    icon: Settings,
  },
  {
    number: '03',
    title: 'Generate Timetable',
    description: 'Let AI create an optimized, conflict-free examination schedule in seconds.',
    icon: Zap,
  },
  {
    number: '04',
    title: 'Review & Publish',
    description: 'Review the schedule, make adjustments if needed, and publish to students.',
    icon: CheckCircle,
  },
]

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })

  return (
    <section ref={ref} id="how-it-works" className="py-20 bg-gradient-to-b from-background to-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            How It Works
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '0.1s' }}>
            Simple steps to create your perfect exam schedule.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line with Animation */}
          <div className={`hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary -translate-y-1/2 transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div 
                  key={index} 
                  className="relative"
                >
                  {/* Step Card */}
                  <div className={`bg-white border border-border rounded-xl p-8 text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: isVisible ? `${0.1 + index * 0.15}s` : '0s'
                  }}>
                    {/* Icon Circle */}
                    <div className="mb-6 flex justify-center">
                      <div className={`relative w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                        isVisible ? 'animate-scale-in' : 'opacity-0'
                      }`} style={{
                        animationDelay: isVisible ? `${0.2 + index * 0.15}s` : '0s'
                      }}>
                        <Icon className="w-8 h-8 text-white" />
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-foreground text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 transition-colors duration-300 hover:text-primary">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow - Hidden on mobile and last item */}
                  {index < steps.length - 1 && (
                    <div className={`hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10 transition-all duration-500 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`} style={{
                      transitionDelay: isVisible ? `${0.3 + index * 0.15}s` : '0s'
                    }}>
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-pulse-subtle">
                        <span className="text-white text-lg">→</span>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
