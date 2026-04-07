import HowItWorks from "@/components/HowItWorks"
import CTASection from "@/components/CTASection"

export const metadata = { title: "How It Works | Simple Flow" }

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-orange-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">How Simple Flow works</h1>
          <p className="text-lg text-slate-300">From quote to activation in as little as 30 days. No salespeople, no surprises.</p>
        </div>
      </section>
      <HowItWorks />
      <CTASection />
    </>
  )
}
