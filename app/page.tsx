import Navbar from '@/components/(homepage)/navbar'
import HeroSection from '@/components/(homepage)/hero-section'
import StatsSection from '@/components/(homepage)/stats-section'
import FeaturesSection from '@/components/(homepage)/features'
import HowItWorks from '@/components/(homepage)/how-it-works'
import DashboardPreview from '@/components/(homepage)/dashboard-preview'
import WhyExamFlow from '@/components/(homepage)/why-examflow'
import FAQSection from '@/components/(homepage)/faq'
import CTASection from '@/components/(homepage)/cta'
import Footer from '@/components/(homepage)/footer'

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorks />
      <DashboardPreview />
      <WhyExamFlow />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
