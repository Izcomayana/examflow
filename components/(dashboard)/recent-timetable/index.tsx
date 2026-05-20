'use client'

import { Button } from '@/components/ui/button'
import { Download, Printer, } from 'lucide-react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { useTimetableStore } from '@/store/timetable-store'

export function RecentTimetables() {
  const { timetable } =
    useTimetableStore()

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
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
