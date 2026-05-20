'use client'

import { useHallStore } from '@/store/hall-store'
import { useTimetableStore } from '@/store/timetable-store'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

export function ScheduleAnalytics() {
  const { timetable } =
    useTimetableStore()

  const { halls } =
    useHallStore()

  const groupedByDay: Record<
    string,
    number
  > = {}

  timetable.forEach((item) => {
    const day = new Date(
      item.date
    ).toLocaleDateString(
      'en-US',
      {
        weekday: 'short',
      }
    )

    groupedByDay[day] =
      (groupedByDay[day] || 0) + 1
  })

  const scheduleData =
    Object.entries(groupedByDay).map(
      ([day, exams]) => ({
        day,
        exams,
      })
    )

  const hallUtilizationData =
    halls.map((hall, index) => {
      const usage =
        timetable.filter(
          (item) =>
            item.hall === hall.name
        ).length

      return {
        name: hall.name,
        value: usage,
        color: [
          '#1E40AF',
          '#4F46E5',
          '#10B981',
          '#F59E0B',
          '#EF4444',
        ][index % 5],
      }
    })

  if (timetable.length === 0) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
        <BarChart className="w-14 h-14 text-muted-foreground mx-auto mb-4" />

        <h3 className="text-lg font-bold text-foreground mb-2">
          No Analytics Yet
        </h3>

        <p className="text-muted-foreground">
          Generate a timetable to
          view analytics and hall
          utilization reports.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Exam Schedule Distribution */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-lg font-bold text-foreground mb-6">Exam Schedule Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={scheduleData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="day" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
              }}
              cursor={{ fill: 'rgba(30, 64, 175, 0.1)' }}
            />
            <Bar dataKey="exams" fill="#1E40AF" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Hall Utilization */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-lg font-bold text-foreground mb-6">Hall Utilization</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={hallUtilizationData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {hallUtilizationData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-6 space-y-2">
          {hallUtilizationData.map((hall, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: hall.color }}></div>
                <span className="text-foreground font-medium">{hall.name}</span>
              </div>
              <span className="text-muted-foreground">{hall.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
