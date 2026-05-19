'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Zap, ArrowRight } from 'lucide-react'

export function ScheduleGeneratorCard() {
  return (
    <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border border-slate-200 rounded-3xl p-8 md:p-12 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 opacity-50"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Smart Exam Generator</h3>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Generate conflict-free exam schedules instantly using intelligent timetable optimization. Our AI analyzes all constraints and generates optimal schedules in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/dashboard/generator">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                Generate Schedule
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-primary/30 font-semibold w-full sm:w-auto">
              Review Existing
            </Button>
          </div>

          {/* Info Pills */}
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="bg-white/50 backdrop-blur border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-foreground">
              ⚡ Instant Generation
            </div>
            <div className="bg-white/50 backdrop-blur border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-foreground">
              🎯 100% Conflict-Free
            </div>
            <div className="bg-white/50 backdrop-blur border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-foreground">
              🤖 AI-Powered
            </div>
          </div>
        </div>

        {/* Right - Illustration / Timetable Preview */}
        <div className="hidden lg:block">
          <div className="bg-white/70 backdrop-blur border border-slate-200 rounded-2xl p-6 shadow-xl">
            {/* Sample Timetable */}
            <div className="space-y-3">
              <div className="h-2 bg-gradient-to-r from-primary to-accent rounded-full w-2/3"></div>
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-2 bg-primary/30 rounded w-2/3"></div>
                    </div>
                    <div className="text-xs font-semibold text-primary">✓</div>
                  </div>
                ))}
              </div>
              <div className="text-center text-xs text-muted-foreground pt-3 border-t border-slate-200">
                Generated in 2.3 seconds
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
