import Hero from "@/components/Hero"
import TrustBar from "@/components/TrustBar"
import Differentiators from "@/components/Differentiators"
import SavingsCalculator from "@/components/SavingsCalculator"
import HorizontalTimeline from "@/components/HorizontalTimeline"
import Testimonials from "@/components/Testimonials"
import CTASection from "@/components/CTASection"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Differentiators />
      <SavingsCalculator />
      <HorizontalTimeline />
      <Testimonials />
      <CTASection />
    </>
  )
}
