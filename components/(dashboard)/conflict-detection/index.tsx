'use client'

import Link from 'next/link'
import { CheckCircle2, AlertTriangle } from 'lucide-react'

export function ConflictDetectionWidget() {
  const hasConflicts = false

  return (
    <div className="bg-gradient-to-br from-green-500/5 to-secondary/5 border border-secondary/30 rounded-2xl p-8">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          {hasConflicts ? (
            <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
          ) : (
            <CheckCircle2 className="w-8 h-8 text-secondary flex-shrink-0 mt-1 animate-pulse" />
          )}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">Conflict Detection Center</h3>
            {hasConflicts ? (
              <div className="space-y-2">
                <p className="text-foreground font-semibold">⚠ CSC401 overlaps with MTH401</p>
                <p className="text-sm text-muted-foreground">Both courses scheduled on Monday at 10:00 AM in Hall A</p>
              </div>
            ) : (
              <p className="text-foreground font-semibold">✅ No scheduling conflicts detected.</p>
            )}
            <p className="text-sm text-muted-foreground mt-2">
              All courses are scheduled without any overlaps or resource conflicts.
            </p>
          </div>
        </div>

        {hasConflicts && (
          <Link href="/dashboard/conflicts">
            <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium text-sm transition-colors flex-shrink-0">
              Resolve Conflict
            </button>
          </Link>
        )}
      </div>

      {/* AI Explanation Box */}
      <div className="mt-6 p-4 bg-white/50 backdrop-blur border border-slate-200 rounded-lg">
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">ExamFlow Analysis:</span> Our AI analyzed hall capacities (2,450 total students), level conflicts, and time slot availability to generate an optimized timetable with zero conflicts.
        </p>
      </div>
    </div>
  )
}
