'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, Table2, Download, Printer, Plus, Trash2 } from 'lucide-react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { useTimetableStore } from '@/store/timetable-store'
import Link from 'next/link'

export function TimetablesContent() {
  const [viewMode, setViewMode] = useState<'table' | 'calendar'>('table')
  const { timetable, clearTimetable } =
    useTimetableStore()

  const handleDeleteTimetable = () => {
    clearTimetable()
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

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="space-y-6 pt-16">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Generated Timetables</h1>
          <p className="text-muted-foreground mt-1">View and manage all generated examination schedules</p>
        </div>
        <Link href="/dashboard/generator">
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg">
          <Plus className="w-4 h-4 mr-2" />
          Create Timetable
        </Button>
        </Link>
      </div>

      {/* View Mode Toggle */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-2">
        <button
          onClick={() => setViewMode('table')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${viewMode === 'table'
              ? 'bg-primary text-white'
              : 'text-muted-foreground hover:bg-slate-100'
            }`}
        >
          <Table2 className="w-4 h-4" />
          Table View
        </button>
        <button
          onClick={() => setViewMode('calendar')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${viewMode === 'calendar'
              ? 'bg-primary text-white'
              : 'text-muted-foreground hover:bg-slate-100'
            }`}
        >
          <Calendar className="w-4 h-4" />
          Calendar View
        </button>
      </div>

      {viewMode === 'table' ? (
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h3 className="font-bold text-foreground">All Timetables</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Courses</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Hall</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Date</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Time</th>
                </tr>
              </thead>
              <tbody>
                {timetable.map((table, i) => (
                  <tr key={i} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-foreground">
                      {table.course}
                    </td>

                    <td className="px-6 py-4 text-muted-foreground">
                      {table.hall}
                    </td>

                    <td className="px-6 py-4 text-muted-foreground">
                      {table.date}
                    </td>

                    <td className="px-6 py-4 text-muted-foreground">
                      {table.time}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs"
                          onClick={handleDownloadPDF}
                        >
                          <Download className="w-3 h-3 mr-1" />
                          PDF
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs"
                          onClick={handlePrint}
                        >
                          <Printer className="w-3 h-3 mr-1" />
                          Print
                        </Button>
                        <Button onClick={handleDeleteTimetable} size="sm" variant="outline" className="text-xs text-red-600 hover:text-red-700" title="Delete">
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
          <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">Calendar view coming soon</p>
          <p className="text-sm text-muted-foreground mt-2">Interactive calendar visualization will be available shortly</p>
        </div>
      )}
    </div>
  )
}
