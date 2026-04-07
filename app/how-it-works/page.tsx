import FullProcess from "@/components/FullProcess"
import CTASection from "@/components/CTASection"

export const metadata = { title: "How It Works | Simple Flow" }

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#32373c] to-[#1f2226] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">How Simple Flow works</h1>
          <p className="text-lg text-slate-300">From your free quote to flipping the switch — here&apos;s every step we handle for you.</p>
        </div>
      </section>

      <FullProcess />

      <CTASection />
    </>
  )
}
