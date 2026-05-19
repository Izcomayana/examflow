'use client'

import { AlertTriangle, Clock, Users, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const conflictCards = [
  {
    type: 'Hall Conflict',
    icon: AlertTriangle,
    color: 'from-red-500/10 to-red-600/10',
    iconColor: 'text-red-600',
    description: 'Two courses scheduled in the same hall at overlapping times',
    count: 0,
  },
  {
    type: 'Time Conflict',
    icon: Clock,
    color: 'from-orange-500/10 to-orange-600/10',
    iconColor: 'text-orange-600',
    description: 'Exam timing overlaps causing scheduling conflicts',
    count: 0,
  },
  {
    type: 'Course Clash',
    icon: Users,
    color: 'from-yellow-500/10 to-yellow-600/10',
    iconColor: 'text-yellow-600',
    description: 'Students have multiple exams scheduled at the same time',
    count: 0,
  },
]

export function ConflictsContent() {
  const totalConflicts = conflictCards.reduce((sum, card) => sum + card.count, 0)

  return (
    <div className="space-y-6 pt-18">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Conflict Detection Center</h1>
        <p className="text-muted-foreground mt-1">Identify and resolve scheduling conflicts automatically</p>
      </div>

      {/* Status Card */}
      {totalConflicts === 0 ? (
        <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/30 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-10 h-10 text-secondary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">All Clear!</h3>
              <p className="text-foreground mb-2">No scheduling conflicts detected in the current timetable.</p>
              <p className="text-sm text-muted-foreground">
                All courses are scheduled without any overlaps or resource conflicts. Your timetable is ready for approval.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-red-500/10 to-red-600/5 border border-red-500/30 rounded-2xl p-8">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Conflicts Detected</h3>
                <p className="text-foreground mb-2">{totalConflicts} scheduling issue(s) found</p>
                <p className="text-sm text-muted-foreground">
                  Please resolve these conflicts before approving the timetable.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Conflict Types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {conflictCards.map((card, index) => {
          const Icon = card.icon
          return (
            <div
              key={index}
              className={`bg-gradient-to-br ${card.color} border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <Icon className={`w-8 h-8 ${card.iconColor}`} />
                <span className="text-3xl font-bold text-foreground">{card.count}</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">{card.type}</h3>
              <p className="text-sm text-muted-foreground mb-4">{card.description}</p>
              {card.count > 0 && (
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-white text-xs">
                  View Details
                </Button>
              )}
            </div>
          )
        })}
      </div>

      {/* Conflict Details Table */}
      {totalConflicts > 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h3 className="font-bold text-foreground">Detailed Conflicts</h3>
          </div>
          <div className="p-6 text-center">
            <p className="text-muted-foreground">No detailed conflict information available</p>
          </div>
        </div>
      )}
    </div>
  )
}
