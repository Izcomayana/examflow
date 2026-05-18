import { LoginForm } from "@/components/(auth)/login-form"
import { BrandingSection } from "@/components/(auth)/branding"

export const metadata = {
  title: 'Sign In - ExamFlow',
  description: 'Sign in to your ExamFlow dashboard and manage exam schedules.',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <BrandingSection />

      {/* Right Side - Login Form */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-background via-white/50 to-background p-8">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>

      {/* Mobile - Fallback */}
      <div className="lg:hidden flex-1 flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
