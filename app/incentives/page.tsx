import { INCENTIVES_BY_STATE } from "@/lib/incentives"
import CTASection from "@/components/CTASection"

export const metadata = { title: "Solar Incentives by State (2026) | Simple Flow" }

const STATE_NAMES: Record<string, string> = {
  ny: "New York", pa: "Pennsylvania", md: "Maryland", nj: "New Jersey",
  ct: "Connecticut", ma: "Massachusetts", ca: "California",
}

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-orange-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Solar incentives 2026</h1>
          <p className="text-lg text-slate-300">State-by-state guide to every program, rebate, and credit available in 2026.</p>
        </div>
      </section>
      <section className="py-20 max-w-5xl mx-auto px-4">
        {Object.entries(INCENTIVES_BY_STATE).map(([code, list]) => (
          <div key={code} className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{STATE_NAMES[code]}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {list.map(inc => (
                <div key={inc.name} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-slate-900 text-sm">{inc.name}</h3>
                    <span className="text-xs font-bold text-orange-600 ml-2 whitespace-nowrap">{inc.amount}</span>
                  </div>
                  <p className="text-xs text-slate-600">{inc.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <CTASection />
    </>
  )
}
