'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import Link from 'next/link'

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-primary via-accent to-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 text-balance transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
          Ready to Simplify Exam Scheduling?
        </h2>
        <p className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto text-balance transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '0.1s' }}>
          Join universities worldwide who are using ExamFlow to automate their examination scheduling and eliminate conflicts.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
          <Link href="/login">
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-primary font-semibold text-base px-8"
            >
              Access Dashboard
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        <p className="text-white/80 text-sm mt-8">
          No credit card required. Get started in minutes.
        </p>
      </div>
    </section>
  )
}
