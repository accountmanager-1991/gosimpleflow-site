import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(251,146,60,0.25),_transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <span className="inline-block bg-orange-500/20 border border-orange-500/40 text-orange-200 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
            Solar Made Simple
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Lock in your electric rate<br />for 25 years — <span className="text-orange-400">$0 down</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl">
            We handle the permits, install, and paperwork. Virtual consultation, fast installation, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg shadow-orange-500/30">
              Get Free Quote
            </Link>
            <Link href="/how-it-works" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
              See How It Works
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
            <span className="flex items-center gap-2"><span className="text-orange-400">✓</span> No upfront cost</span>
            <span className="flex items-center gap-2"><span className="text-orange-400">✓</span> Installed in 30 days</span>
            <span className="flex items-center gap-2"><span className="text-orange-400">✓</span> 25-year warranty</span>
            <span className="flex items-center gap-2"><span className="text-orange-400">✓</span> 100% virtual process</span>
          </div>
        </div>
      </div>
    </section>
  )
}
