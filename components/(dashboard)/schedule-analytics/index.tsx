'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const scheduleData = [
  { day: 'Mon', exams: 18 },
  { day: 'Tue', exams: 22 },
  { day: 'Wed', exams: 19 },
  { day: 'Thu', exams: 25 },
  { day: 'Fri', exams: 21 },
]

const hallUtilizationData = [
  { name: 'Hall A', value: 40, color: '#1E40AF' },
  { name: 'Hall B', value: 30, color: '#4F46E5' },
  { name: 'Hall C', value: 20, color: '#10B981' },
  { name: 'Hall D', value: 10, color: '#F59E0B' },
]

export function ScheduleAnalytics() {
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
