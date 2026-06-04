'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'

export function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      // For demo purposes, accept any credentials
      if (email && password) {
        router.push('/dashboard')
      } else {
        setError('Please enter both email and password')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDemoAdmin = async () => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      router.push('/dashboard')
    } catch (err) {
      setError('Failed to login as demo admin')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h2>
        <p className="text-muted-foreground">Sign in to access the Hallmark dashboard</p>
      </div>

      {/* Glassmorphism Card */}
      <div className="bg-white/80 backdrop-blur-md border border-border/50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSignIn} className="space-y-5">
          {/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground pointer-events-none" />
              <Input
                id="email"
                type="email"
                placeholder="admin@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="pl-10 py-2.5"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-foreground">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground pointer-events-none" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className="pl-10 pr-10 py-2.5"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between py-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={isLoading}
                className="w-4 h-4 rounded border-border text-primary cursor-pointer"
              />
              <span className="text-sm text-muted-foreground">Remember me</span>
            </label>
            <Link href="#" className="text-sm text-primary hover:text-primary/80 font-medium transition-colors">
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <Button
            type="submit"
            disabled={isLoading || !email || !password}
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Signing in...</span>
              </div>
            ) : (
              'Sign In'
            )}
          </Button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-xs text-muted-foreground font-medium">OR</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        {/* Demo Admin Button */}
        <Button
          onClick={handleDemoAdmin}
          disabled={isLoading}
          variant="outline"
          className="w-full border-2 border-primary/20 text-primary hover:bg-primary/5 font-semibold py-2.5 rounded-lg transition-all duration-300"
        >
          {isLoading ? 'Loading...' : 'Continue as Demo Admin'}
        </Button>

        {/* Help Text */}
        <p className="text-xs text-muted-foreground text-center mt-6">
          Need access?{' '}
          <Link href="#" className="text-primary hover:text-primary/80 font-medium transition-colors">
            Contact system administrator
          </Link>
        </p>
      </div>

      {/* Mobile Branding */}
      <div className="lg:hidden mt-8 text-center">
        <div className="inline-flex items-center justify-center gap-2 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">H</span>
          </div>
          <span className="text-2xl font-bold text-foreground">Hallmark</span>
        </div>
        <p className="text-muted-foreground text-sm">Intelligent Exam Scheduling</p>
      </div>
    </div>
  )
}
