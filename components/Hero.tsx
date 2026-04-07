import Link from "next/link"
import HeroCalculator from "./HeroCalculator"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#32373c] via-[#3d434a] to-[#5a5145] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(240,204,0,0.25),_transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          {/* Left: Hero text — 3/5 width */}
          <div className="lg:col-span-3">
            <span className="inline-block bg-[#f0cc00]/20 border border-[#f0cc00]/40 text-[#f0cc00] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Solar Made Simple
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Lock in your electric rate<br />for 25 years — <span className="text-[#f0cc00]">$0 down</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#f0cc00] font-semibold mb-4">
              Own your power. Avoid rate hikes.
            </p>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl">
              We handle the permits, install, and paperwork. Virtual consultation, fast installation, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="bg-[#f0cc00] hover:bg-[#d9b800] text-[#32373c] px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg shadow-[#f0cc00]/30 text-center">
                Get Free Quote
              </Link>
              <Link href="/how-it-works" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition text-center">
                See How It Works
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
              <span className="flex items-center gap-2"><span className="text-[#f0cc00]">✓</span> No upfront cost</span>
              <span className="flex items-center gap-2"><span className="text-[#f0cc00]">✓</span> Installed in 30-60 days</span>
              <span className="flex items-center gap-2"><span className="text-[#f0cc00]">✓</span> 25-year warranty</span>
              <span className="flex items-center gap-2"><span className="text-[#f0cc00]">✓</span> 100% virtual</span>
            </div>
          </div>

          {/* Right: Savings calculator — 2/5 width */}
          <div className="lg:col-span-2">
            <HeroCalculator />
          </div>
        </div>
      </div>
    </section>
  )
}
