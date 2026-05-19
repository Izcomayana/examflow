'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle2, Calendar, Building2, BarChart3, Sparkles } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import Link from 'next/link'

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section ref={ref} id="home" className="relative min-h-screen pt-20 pb-12 overflow-hidden">
      {/* Animated Gradient Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className={`flex items-center gap-2 w-fit ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
              <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full border border-accent/30">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">AI-Powered Scheduling</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1
                className={`text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                style={{ animationDelay: '0.1s' }}
              >
                Smart Exam Scheduling Made Effortless
              </h1>
              <p
                className={`text-lg text-muted-foreground leading-relaxed text-balance transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                style={{ animationDelay: '0.2s' }}
              >
                ExamFlow uses intelligent scheduling optimization to generate organized, conflict-free examination timetables for universities and institutions in minutes, not weeks.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              style={{ animationDelay: '0.3s' }}
            >
              <Link href="/login">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  Generate Smarter Schedules
                </Button>
              </Link>

              <Link href="#features">
                <Button size="lg" variant="outline" className="border-2 border-primary/30 text-foreground hover:bg-primary/5 font-semibold text-base transition-all duration-300">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Feature List with Stagger */}
            <div className="space-y-3 pt-4">
              {[
                { icon: CheckCircle2, text: 'Conflict-Free Scheduling' },
                { icon: Calendar, text: 'Automated Timetables' },
                { icon: Building2, text: 'Smart Hall Allocation' },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                      }`}
                    style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
                  >
                    <Icon className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right - Dynamic Dashboard Mockup */}
          <div
            className={`relative transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
              {/* Dashboard Preview */}
              <div className="space-y-6">
                {/* Header with Animation */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Exam Timetable</h3>
                    <p className="text-sm text-muted-foreground">Semester 2024-S1</p>
                  </div>
                  <div className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-semibold animate-pulse-subtle">
                    100% Optimized
                  </div>
                </div>

                {/* Timetable Cards with Stagger */}
                <div className="space-y-3">
                  {[
                    { course: 'Data Structures', date: 'Jan 15', hall: 'Hall A', time: '9:00 AM' },
                    { course: 'Web Development', date: 'Jan 16', hall: 'Hall B', time: '2:00 PM' },
                    { course: 'Database Design', date: 'Jan 17', hall: 'Hall C', time: '10:00 AM' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/50 backdrop-blur border border-border/30 rounded-lg p-4 hover:bg-white/80 hover:shadow-md transition-all duration-300 cursor-pointer group/card"
                      style={{
                        animation: isVisible ? `fadeInUp 0.6s ease-out forwards` : 'none',
                        animationDelay: isVisible ? `${0.5 + i * 0.1}s` : '0s'
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-foreground text-sm group-hover/card:text-primary transition-colors">{item.course}</p>
                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">{item.time}</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>📅 {item.date}</span>
                        <span>🏫 {item.hall}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/30">
                  {[
                    { value: '128', label: 'Exams Scheduled', color: 'text-primary' },
                    { value: '0', label: 'Conflicts', color: 'text-secondary' },
                    { value: '12', label: 'Halls Used', color: 'text-accent' },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className="text-center py-3 hover:bg-white/30 rounded transition-colors"
                      style={{
                        animation: isVisible ? `scaleIn 0.6s ease-out forwards` : 'none',
                        animationDelay: isVisible ? `${0.7 + idx * 0.1}s` : '0s'
                      }}
                    >
                      <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10 group-hover:bg-accent/30 transition-colors duration-300"></div>
            </div>

            {/* Floating Badge with Animation */}
            <div
              className="absolute -bottom-4 -right-4 bg-white border-2 border-border rounded-full p-4 shadow-lg animate-float"
              style={{ animationDelay: '0.5s' }}
            >
              <BarChart3 className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
