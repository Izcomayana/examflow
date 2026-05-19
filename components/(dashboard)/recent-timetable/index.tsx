'use client'

import { Eye, Edit, MoreVertical } from 'lucide-react'
import Link from 'next/link'

const timetables = [
  {
    id: 1,
    course: 'Data Structures',
    hall: 'Hall A',
    date: '2024-01-15',
    time: '09:00 AM',
    status: 'approved',
  },
  {
    id: 2,
    course: 'Web Development',
    hall: 'Hall B',
    date: '2024-01-16',
    time: '02:00 PM',
    status: 'generated',
  },
  {
    id: 3,
    course: 'Database Design',
    hall: 'Hall C',
    date: '2024-01-17',
    time: '10:00 AM',
    status: 'pending',
  },
  {
    id: 4,
    course: 'AI & Machine Learning',
    hall: 'Hall D',
    date: '2024-01-18',
    time: '01:00 PM',
    status: 'approved',
  },
  {
    id: 5,
    course: 'Cloud Computing',
    hall: 'Hall A',
    date: '2024-01-19',
    time: '11:00 AM',
    status: 'generated',
  },
]

const statusConfig = {
  approved: { bg: 'bg-secondary/10', text: 'text-secondary', label: 'Approved' },
  generated: { bg: 'bg-accent/10', text: 'text-accent', label: 'Generated' },
  pending: { bg: 'bg-orange-500/10', text: 'text-orange-600', label: 'Pending Review' },
}

export function RecentTimetables() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-foreground">Recent Generated Timetables</h3>
          <Link
            href="/dashboard/timetables"
            className="text-sm text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            View All
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Course
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Hall
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Time
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {timetables.map((timetable, index) => {
              const config = statusConfig[timetable.status as keyof typeof statusConfig]
              return (
                <tr
                  key={index}
                  className="border-b border-slate-200 hover:bg-slate-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4">
                    <span className="font-semibold text-foreground">{timetable.course}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-muted-foreground">{timetable.hall}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-muted-foreground">{timetable.date}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-muted-foreground">{timetable.time}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}>
                      {config.label}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors" title="View">
                        <Eye className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors" title="Edit">
                        <Edit className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
