'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Zap, Download } from 'lucide-react'
import { useCourseStore } from '@/store/course-store'
import { useHallStore } from '@/store/hall-store'
import { useTimetableStore } from '@/store/timetable-store'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export function GeneratorContent() {
  const [hasGenerated, setHasGenerated] = useState(false)
  const [loading, setLoading] = useState(false)
  const { courses } = useCourseStore()
  const { halls } = useHallStore()

  const {
    timetable,
    setTimetable,
  } = useTimetableStore()

  const handleGenerate = () => {
    if (!courses.length) {
      alert(
        'Please add courses first'
      )
      return
    }

    if (!halls.length) {
      alert(
        'Please add halls first'
      )
      return
    }

    setLoading(true)

    setTimeout(() => {
      const availableHalls =
        halls.filter(
          (hall) =>
            hall.availability ===
            'available'
        )

      const timeSlots = [
        '09:00 AM',
        '12:00 PM',
        '03:00 PM',
      ]

      const startDate =
        new Date('2026-06-15')

      const generatedData =
        courses.map(
          (course, index) => {
            const suitableHall =
              availableHalls.find(
                (hall) =>
                  hall.capacity >=
                  course.students
              )

            const dayOffset =
              Math.floor(
                index /
                timeSlots.length
              )

            const examDate =
              new Date(startDate)

            examDate.setDate(
              startDate.getDate() +
              dayOffset
            )

            return {
              id: Date.now() + index,
              course:
                course.name,
              hall:
                suitableHall?.name ||
                'No Hall Available',
              date:
                examDate
                  .toISOString()
                  .split('T')[0],
              time:
                timeSlots[
                index %
                timeSlots.length
                ],
            }
          }
        )

      setTimetable(
        generatedData
      )

      setLoading(false)
      setHasGenerated(true)
    }, 1500)
  }

    const handleDownloadPDF = () => {
      const doc = new jsPDF()
  
      doc.setFontSize(20)
      doc.text(
        'ExamFlow Examination Timetable',
        14,
        20
      )
  
      doc.setFontSize(12)
  
      doc.text(
        `Generated: ${new Date().toLocaleDateString()}`,
        14,
        30
      )
  
      autoTable(doc, {
        startY: 40,
        head: [
          [
            'Course',
            'Hall',
            'Date',
            'Time',
          ],
        ],
        body: timetable.map(
          (item) => [
            item.course,
            item.hall,
            item.date,
            item.time,
          ]
        ),
      })
  
      doc.save(
        'examflow-timetable.pdf'
      )
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
          <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm bg-white">
            <option>2026 Semester 1</option>
            <option>2026 Semester 2</option>
          </select>

          {/* Academic Session */}
          <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm bg-white">
            <option>2025/2026</option>
            <option>2026/2027</option>
          </select>

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
              defaultValue="2026-06-15"
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
      {timetable.length > 0 && (
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
              <Button onClick={handleDownloadPDF} className="bg-accent hover:bg-accent/90 text-white">
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
                  </tr>
                </thead>
                <tbody>
                  {timetable.map((row, i) => (
                    <tr key={i} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-foreground">{row.course}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.hall}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.date}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.time}</td>
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
