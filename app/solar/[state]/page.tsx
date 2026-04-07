import Link from "next/link"
import { notFound } from "next/navigation"
import { getStateByCode, getAllStatePaths, STATES } from "@/lib/states"
import { INCENTIVES_BY_STATE } from "@/lib/incentives"
import { TESTIMONIALS } from "@/content/testimonials"
import TrustBar from "@/components/TrustBar"
import HowItWorks from "@/components/HowItWorks"
import CTASection from "@/components/CTASection"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return getAllStatePaths()
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params
  const s = getStateByCode(state)
  if (!s) return { title: "Solar Installer" }
  return {
    title: `Solar Installer in ${s.state} | Simple Flow`,
    description: `Simple Flow installs residential solar across ${s.state}. ${s.incentiveHighlight}. Get a free quote in 60 seconds.`,
  }
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params
  const s = getStateByCode(state)
  if (!s) notFound()

  const incentives = INCENTIVES_BY_STATE[s.stateCode] || []
  const localTestimonials = TESTIMONIALS.filter(t => t.state === s.stateCode.toUpperCase()).slice(0, 3)
  const fallbackTestimonials = localTestimonials.length > 0 ? localTestimonials : TESTIMONIALS.slice(0, 3)

  return (
    <>
      {/* State Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(251,146,60,0.25),_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <span className="inline-block bg-orange-500/20 border border-orange-500/40 text-orange-200 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              Solar in {s.state}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
              Solar installer in {s.state}
            </h1>
            <p className="text-lg text-slate-300 mb-2">{s.blurb}</p>
            <p className="text-sm text-orange-300 mb-8">💡 {s.incentiveHighlight}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg">
                Get Your Free Quote
              </Link>
              <a href="tel:+18553757923" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg text-center">
                Call (855) 375-7923
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Local stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 text-center">
            <div className="text-sm font-semibold text-orange-700 uppercase tracking-wider mb-2">Avg Bill in {s.state}</div>
            <div className="text-4xl font-bold text-slate-900">${s.avgBill}/mo</div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
            <div className="text-sm font-semibold text-amber-700 uppercase tracking-wider mb-2">Install Time</div>
            <div className="text-4xl font-bold text-slate-900">~30 days</div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
            <div className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-2">25-yr savings est.</div>
            <div className="text-4xl font-bold text-slate-900">${(s.avgBill * 12 * 18).toLocaleString()}+</div>
          </div>
        </div>
      </section>

      {/* Service areas in this state */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Areas we serve in {s.state}</h2>
          <p className="text-slate-700">{s.majorCities.join(" · ")}</p>
        </div>
      </section>

      {/* Incentives */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{s.state} solar incentives 2026</h2>
            <p className="text-lg text-slate-600">We help you claim every program you qualify for.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {incentives.map(inc => (
              <div key={inc.name} className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-900">{inc.name}</h3>
                  <span className="text-sm font-bold text-orange-600 ml-3 whitespace-nowrap">{inc.amount}</span>
                </div>
                <p className="text-sm text-slate-600">{inc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Local testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{s.state} homeowners are switching</h2>
            <p className="text-lg text-slate-600">★★★★★ Real reviews from real customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fallbackTestimonials.map((t, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="text-amber-400 mb-3">★★★★★</div>
                <p className="text-slate-700 leading-relaxed mb-4">&quot;{t.text}&quot;</p>
                <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                <div className="text-xs text-slate-500">{t.city}, {t.state}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* Other states */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Also serving</h3>
          <div className="flex flex-wrap gap-3">
            {STATES.filter(other => other.stateCode !== s.stateCode).map(other => (
              <Link key={other.stateCode} href={`/solar/${other.stateCode}`} className="text-sm text-orange-600 hover:text-orange-700 hover:underline">
                {other.state}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
