'use client'

import { Monitor } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function DashboardPreview() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            Experience Smart Scheduling
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '0.1s' }}>
            A powerful dashboard designed for administrators to manage exam scheduling with ease.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className={`relative bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-2xl overflow-hidden border border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-500 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`} style={{ animationDelay: '0.2s' }}>
          {/* Header Bar */}
          <div className="bg-white border-b border-border px-8 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Monitor className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Exam Scheduling Dashboard</h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="text-sm text-muted-foreground">Live</span>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-8 space-y-8">
            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: 'Total Exams', value: '128', icon: '📚', color: 'from-primary' },
                { label: 'Scheduled', value: '128', icon: '✅', color: 'from-secondary' },
                { label: 'Conflicts', value: '0', icon: '⚠️', color: 'from-accent' },
                { label: 'Halls Used', value: '12', icon: '🏫', color: 'from-indigo-500' },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className={`bg-white border border-border rounded-lg p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: isVisible ? `${0.3 + i * 0.08}s` : '0s'
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                    <span className="text-2xl animate-float" style={{ animationDelay: `${i * 0.2}s` }}>{stat.icon}</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Timetable Preview */}
            <div className={`bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: isVisible ? '0.6s' : '0s' }}>
              <h4 className="text-lg font-bold text-foreground mb-4">Generated Timetable</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Course</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Time</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Hall</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Capacity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { course: 'Data Structures', date: 'Jan 15', time: '9:00 AM', hall: 'Hall A', capacity: '150/150' },
                      { course: 'Web Development', date: 'Jan 16', time: '2:00 PM', hall: 'Hall B', capacity: '100/120' },
                      { course: 'Database Design', date: 'Jan 17', time: '10:00 AM', hall: 'Hall C', capacity: '80/100' },
                      { course: 'AI & ML', date: 'Jan 18', time: '1:00 PM', hall: 'Hall D', capacity: '60/80' },
                    ].map((item, i) => (
                      <tr 
                        key={i} 
                        className={`border-b border-border/50 hover:bg-muted/30 transition-all duration-300 ${
                          isVisible ? 'animate-fade-in-up' : 'opacity-0'
                        }`}
                        style={{
                          animationDelay: isVisible ? `${0.7 + i * 0.08}s` : '0s'
                        }}
                      >
                        <td className="py-4 px-4 text-foreground font-medium">{item.course}</td>
                        <td className="py-4 px-4 text-muted-foreground">{item.date}</td>
                        <td className="py-4 px-4 text-muted-foreground">{item.time}</td>
                        <td className="py-4 px-4 text-muted-foreground">{item.hall}</td>
                        <td className="py-4 px-4">
                          <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                            {item.capacity}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Hall Allocation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`} style={{ animationDelay: isVisible ? '1s' : '0s' }}>
                <h4 className="text-lg font-bold text-foreground mb-4">Hall Allocation</h4>
                <div className="space-y-3">
                  {[
                    { hall: 'Hall A', usage: 95, students: 150 },
                    { hall: 'Hall B', usage: 85, students: 102 },
                    { hall: 'Hall C', usage: 78, students: 78 },
                  ].map((item, i) => (
                    <div key={i} style={{
                      animation: isVisible ? `fadeInUp 0.6s ease-out forwards` : 'none',
                      animationDelay: isVisible ? `${1.1 + i * 0.1}s` : '0s'
                    }}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-foreground">{item.hall}</span>
                        <span className="text-sm text-muted-foreground">{item.usage}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000"
                          style={{ 
                            width: isVisible ? `${item.usage}%` : '0%'
                          }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{item.students} students</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`} style={{ animationDelay: isVisible ? '1.1s' : '0s' }}>
                <h4 className="text-lg font-bold text-foreground mb-4">Conflict Detection</h4>
                <div className="space-y-3">
                  {[
                    { title: 'No Instructor Conflicts', desc: 'All instructors have adequate breaks' },
                    { title: 'No Room Conflicts', desc: 'All halls optimally allocated' },
                    { title: 'Student Schedule OK', desc: 'No overlapping exams for students' },
                  ].map((item, i) => (
                    <div 
                      key={i}
                      className={`flex items-center gap-3 p-3 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-all duration-300 ${
                        isVisible ? 'animate-fade-in-up' : 'opacity-0'
                      }`}
                      style={{
                        animationDelay: isVisible ? `${1.2 + i * 0.1}s` : '0s'
                      }}
                    >
                      <div className="w-3 h-3 bg-secondary rounded-full animate-pulse-subtle"></div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
