'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, Table2, Download, Printer } from 'lucide-react'

const mockTimetables = [
  {
    id: 1,
    semester: '2024 Semester 1',
    courses: 45,
    createdDate: '2024-01-10',
    approvalStatus: 'approved',
  },
  {
    id: 2,
    semester: '2024 Semester 2',
    courses: 52,
    createdDate: '2024-02-05',
    approvalStatus: 'pending',
  },
  {
    id: 3,
    semester: '2023 Semester 2',
    courses: 48,
    createdDate: '2023-12-15',
    approvalStatus: 'approved',
  },
]

export function TimetablesContent() {
  const [viewMode, setViewMode] = useState<'table' | 'calendar'>('table')

  return (
    <div className="space-y-6 pt-18">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Generated Timetables</h1>
          <p className="text-muted-foreground mt-1">View and manage all generated examination schedules</p>
        </div>
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
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Semester</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Courses</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Created</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockTimetables.map((table, i) => (
                  <tr key={i} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-foreground">{table.semester}</td>
                    <td className="px-6 py-4 text-muted-foreground">{table.courses}</td>
                    <td className="px-6 py-4 text-muted-foreground">{table.createdDate}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${table.approvalStatus === 'approved'
                          ? 'bg-secondary/10 text-secondary'
                          : 'bg-orange-500/10 text-orange-600'
                        }`}>
                        {table.approvalStatus === 'approved' ? 'Approved' : 'Pending'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="text-xs">
                          <Download className="w-3 h-3 mr-1" />
                          PDF
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
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
