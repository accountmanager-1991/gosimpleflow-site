import CTASection from "@/components/CTASection"

export const metadata = { title: "About Simple Flow" }

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-orange-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Simple Flow</h1>
          <p className="text-lg text-slate-300">We believe going solar should be simple. So we made it simple.</p>
        </div>
      </section>
      <section className="py-20 max-w-3xl mx-auto px-4 prose prose-slate">
        <p className="text-lg text-slate-700 leading-relaxed">
          Simple Flow was founded to fix what&apos;s broken in the solar industry: pushy sales reps, slow installs, hidden fees, and confusing paperwork.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed mt-4">
          Our 100% virtual process means no one shows up at your door. Our average install timeline is 30 days — about a third of the industry standard. And we handle every permit, every utility form, and every inspection so you don&apos;t have to.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed mt-4">
          We service homeowners across New York, Pennsylvania, Maryland, New Jersey, Connecticut, Massachusetts, and California — and we&apos;re growing.
        </p>
      </section>
      <CTASection />
    </>
  )
}
