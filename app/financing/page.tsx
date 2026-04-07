import CTASection from "@/components/CTASection"

export const metadata = { title: "Solar Financing Options | Simple Flow" }

const OPTIONS = [
  { name: "Cash Purchase", best: "Best long-term ROI", body: "Buy your system outright. Highest 25-year savings, full ownership of incentives, fastest payback." },
  { name: "Solar Loan", best: "Most popular", body: "$0 down. Fixed monthly payment usually lower than your current electric bill. You own the system." },
  { name: "Lease", best: "No maintenance", body: "$0 down. We own and maintain the system; you pay a fixed monthly fee for the power." },
  { name: "PPA (Power Purchase Agreement)", best: "Lowest barrier", body: "$0 down. Pay only for the electricity the system produces — typically 20–30% below utility rates." },
]

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#32373c] to-[#1f2226] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Solar financing options</h1>
          <p className="text-lg text-slate-300">$0 down options available for every credit profile. We&apos;ll match you with the best fit.</p>
        </div>
      </section>
      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OPTIONS.map(o => (
            <div key={o.name} className="border border-slate-200 rounded-2xl p-6 hover:border-[#f0cc00] hover:shadow-md transition">
              <span className="inline-block bg-[#fff8d1] text-[#c9a700] text-xs font-semibold px-2 py-1 rounded uppercase tracking-wider mb-2">{o.best}</span>
              <h2 className="text-2xl font-bold text-[#32373c] mb-2">{o.name}</h2>
              <p className="text-slate-600 leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  )
}
