'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-xl text-foreground">ExamFlow</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="#features" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Features
            </Link>
            <Link href="#how-it-works" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              How it Works
            </Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              About
            </Link>
          </div>

          {/* CTA Button */}
          <Button
            className="bg-primary hover:bg-primary/90 text-white font-medium px-6"
          >
            <Link href="/login">
              Login
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
