'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Zap, Download } from 'lucide-react'

const generatedTableData = [
  { course: 'Data Structures', hall: 'Hall A', date: '2024-01-15', time: '09:00 AM', status: 'approved' },
  { course: 'Web Development', hall: 'Hall B', date: '2024-01-16', time: '02:00 PM', status: 'approved' },
  { course: 'Database Design', hall: 'Hall C', date: '2024-01-17', time: '10:00 AM', status: 'approved' },
  { course: 'AI & ML', hall: 'Hall D', date: '2024-01-18', time: '01:00 PM', status: 'approved' },
]

export function GeneratorContent() {
  const [hasGenerated, setHasGenerated] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleGenerate = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setHasGenerated(true)
    }, 2000)
  }

  return (
    <div className="space-y-6 mt-16">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Intelligent Schedule Generator</h1>
        <p className="text-muted-foreground mt-1">Configure your preferences and generate an optimized exam schedule</p>
      </div>

      {/* Configuration Panel */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-foreground mb-6">Configuration</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Semester */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Semester</label>
            <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm bg-white">
              <option>2024 Semester 1</option>
              <option>2024 Semester 2</option>
              <option>2023 Semester 1</option>
            </select>
          </div>

          {/* Academic Session */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Academic Session</label>
            <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm bg-white">
              <option>2023/2024</option>
              <option>2022/2023</option>
              <option>2021/2022</option>
            </select>
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Department (Optional)</label>
            <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm bg-white">
              <option>All Departments</option>
              <option>Computer Science</option>
              <option>Mathematics</option>
              <option>Physics</option>
            </select>
          </div>

          {/* Exam Duration */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Exam Duration (minutes)</label>
            <input
              type="number"
              defaultValue="120"
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
            />
          </div>

          {/* Available Days */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Available Days</label>
            <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm bg-white">
              <option>Mon - Fri (5 days)</option>
              <option>Mon - Sat (6 days)</option>
              <option>Mon - Sun (7 days)</option>
            </select>
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Start Date</label>
            <input
              type="date"
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
            />
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex gap-4">
          <Button
            onClick={handleGenerate}
            disabled={loading}
            className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Generating...
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 mr-2" />
                Generate Timetable
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Generated Table */}
      {hasGenerated && (
        <div className="space-y-6 animate-fade-in-up">
          {/* AI Explanation */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-6">
            <p className="text-sm text-foreground leading-relaxed">
              <span className="font-semibold">ExamFlow Analysis:</span> Our AI analyzed hall capacities (2,450 total students), level conflicts, and time slot availability to generate an optimized timetable with zero conflicts. The schedule prioritizes course leveling and minimizes student exam stacking.
            </p>
          </div>

          {/* Generated Schedule */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex items-center justify-between">
              <h3 className="text-lg font-bold text-foreground">Generated Timetable</h3>
              <Button className="bg-accent hover:bg-accent/90 text-white">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Course</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Hall</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Time</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {generatedTableData.map((row, i) => (
                    <tr key={i} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-foreground">{row.course}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.hall}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.date}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.time}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
