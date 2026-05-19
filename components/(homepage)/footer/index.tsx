'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <footer ref={ref} className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className={`col-span-1 md:col-span-1 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-xl">ExamFlow</span>
            </div>
            <p className="text-white/60 text-sm">
              Smart exam scheduling made simple.
            </p>
          </div>

          {/* Product */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.1s' }}>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-white/60 hover:text-white transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-white/60 hover:text-white transition-colors text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.2s' }}>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-white/60 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/60 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.3s' }}>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">© 2026 ExamFlow. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Twitter
            </Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              LinkedIn
            </Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
