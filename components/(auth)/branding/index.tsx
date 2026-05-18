'use client'

import { CheckCircle2 } from 'lucide-react'

export function BrandingSection() {
  return (
    <div className="hidden lg:flex flex-1 flex-col justify-center items-center bg-gradient-to-br from-primary via-primary/95 to-accent relative overflow-hidden p-8">
      {/* Animated Background Blobs */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/3 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.8s' }}></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.1) 75%, rgba(255, 255, 255, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.1) 75%, rgba(255, 255, 255, 0.1) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-md">
        {/* Logo */}
        <div className="mb-8 inline-flex items-center justify-center gap-3">
          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center border border-white/30">
            <span className="text-2xl font-bold text-white">E</span>
          </div>
          <span className="text-3xl font-bold text-white">ExamFlow</span>
        </div>

        {/* Main Text */}
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Intelligent Exam Scheduling for Modern Institutions
        </h1>
        <p className="text-white/80 text-lg mb-12">
          Automate your exam scheduling, eliminate conflicts, and optimize resource allocation.
        </p>

        {/* Features */}
        <div className="space-y-4 py-8 border-y border-white/20">
          <div className="flex items-center gap-3 text-white/90">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-white" />
            <span className="font-medium">Smart Timetable Generation</span>
          </div>
          <div className="flex items-center gap-3 text-white/90">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-white" />
            <span className="font-medium">Conflict Prevention</span>
          </div>
          <div className="flex items-center gap-3 text-white/90">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-white" />
            <span className="font-medium">Administrative Control</span>
          </div>
        </div>

        {/* Floating Dashboard Preview */}
        <div className="mt-12 relative">
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 shadow-2xl">
            <div className="bg-white/5 rounded-lg p-3 space-y-2">
              <div className="h-2 bg-white/20 rounded w-2/3"></div>
              <div className="h-2 bg-white/20 rounded w-full"></div>
              <div className="h-2 bg-white/20 rounded w-4/5"></div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="h-8 bg-white/10 rounded"></div>
              <div className="h-8 bg-white/10 rounded"></div>
              <div className="h-8 bg-white/10 rounded"></div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl animate-pulse-subtle"></div>
        </div>
      </div>
    </div>
  )
}
