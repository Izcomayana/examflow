'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'

const stats = [
  {
    label: 'Total Courses',
    value: '127',
    trend: '+12%',
    positive: true,
    icon: '📚',
    gradient: 'from-blue-500/10 to-blue-600/10',
    accentColor: 'text-blue-600',
  },
  {
    label: 'Total Halls',
    value: '18',
    trend: '+2%',
    positive: true,
    icon: '🏫',
    gradient: 'from-purple-500/10 to-purple-600/10',
    accentColor: 'text-purple-600',
  },
  {
    label: 'Generated Schedules',
    value: '49',
    trend: '+8%',
    positive: true,
    icon: '📋',
    gradient: 'from-green-500/10 to-green-600/10',
    accentColor: 'text-green-600',
  },
  {
    label: 'Conflicts Prevented',
    value: '98%',
    trend: '+5%',
    positive: true,
    icon: '✅',
    gradient: 'from-emerald-500/10 to-emerald-600/10',
    accentColor: 'text-emerald-600',
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br ${stat.gradient} border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group backdrop-blur-sm`}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
            <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{stat.icon}</span>
          </div>

          {/* Value and Trend */}
          <div className="mb-4">
            <p className="text-4xl font-bold text-foreground mb-2">{stat.value}</p>
            <div className="flex items-center gap-1">
              {stat.positive ? (
                <TrendingUp className="w-4 h-4 text-secondary" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
              <span className={`text-sm font-semibold ${stat.positive ? 'text-secondary' : 'text-red-500'}`}>
                {stat.trend}
              </span>
              <span className="text-xs text-muted-foreground">vs last month</span>
            </div>
          </div>

          {/* Mini Chart Line */}
          <div className="h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent rounded-full"></div>
        </div>
      ))}
    </div>
  )
}
