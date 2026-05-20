'use client'

import Link from 'next/link'
import { BookOpen, Building2, Calendar, Download, AlertTriangle, Settings, ChevronRight } from 'lucide-react'

const actions = [
  {
    title: 'Add New Course',
    description: 'Create a new course for examination',
    icon: BookOpen,
    href: '/dashboard/courses?openModal=true',
    color: 'from-blue-500/10 to-blue-600/10',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Add Hall',
    description: 'Register a new examination hall',
    icon: Building2,
    href: '/dashboard/halls?openModal=true',
    color: 'from-purple-500/10 to-purple-600/10',
    iconColor: 'text-purple-600',
  },
  {
    title: 'View Timetable',
    description: 'Check generated schedules',
    icon: Calendar,
    href: '/dashboard/timetables',
    color: 'from-green-500/10 to-green-600/10',
    iconColor: 'text-green-600',
  },
  {
    title: 'Detect Conflicts',
    description: 'Review scheduling conflicts',
    icon: AlertTriangle,
    href: '/dashboard/conflicts',
    color: 'from-red-500/10 to-red-600/10',
    iconColor: 'text-red-600',
  },
]

export function QuickActions() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {actions.map((action, index) => {
          const Icon = action.icon
          return (
            <Link
              key={index}
              href={action.href}
              className={`bg-gradient-to-br ${action.color} border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-white/50 backdrop-blur border border-slate-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${action.iconColor}`} />
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{action.title}</h3>
              <p className="text-sm text-muted-foreground">{action.description}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
