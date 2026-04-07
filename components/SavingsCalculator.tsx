"use client"

import { useState } from "react"
import Link from "next/link"

export default function SavingsCalculator() {
  const [bill, setBill] = useState(200)

  // Highest realistic estimate: 25 years × 12 months × monthly bill × inflation factor (1.5x)
  const totalSavings = Math.round(bill * 12 * 25 * 1.5)
  const monthlySavings = Math.round(bill * 0.85)
  const yearlySavings = monthlySavings * 12

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#32373c] mb-4">See your potential savings</h2>
          <p className="text-lg text-slate-600">Adjust the slider to match your monthly electric bill.</p>
        </div>

        <div className="bg-gradient-to-br from-[#fffdf1] to-white border-2 border-[#f0cc00]/40 rounded-3xl p-8 sm:p-12 shadow-xl">
          {/* Slider */}
          <div className="mb-10">
            <div className="flex justify-between items-baseline mb-3">
              <label className="text-sm font-semibold text-[#32373c] uppercase tracking-wider">Your monthly electric bill</label>
              <span className="text-3xl sm:text-4xl font-bold text-[#c9a700]">${bill}<span className="text-base text-slate-500 font-normal">/mo</span></span>
            </div>
            <input
              type="range"
              min="50"
              max="800"
              step="10"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#f0cc00]"
              style={{
                background: `linear-gradient(to right, #f0cc00 0%, #f0cc00 ${((bill - 50) / 750) * 100}%, #e2e8f0 ${((bill - 50) / 750) * 100}%, #e2e8f0 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>$50</span>
              <span>$200</span>
              <span>$400</span>
              <span>$600</span>
              <span>$800</span>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-[#f0cc00]/30 rounded-2xl p-5 text-center">
              <div className="text-xs font-semibold text-[#c9a700] uppercase tracking-wider mb-1">Monthly savings</div>
              <div className="text-3xl font-bold text-[#32373c]">${monthlySavings.toLocaleString()}</div>
            </div>
            <div className="bg-white border border-[#f0cc00]/30 rounded-2xl p-5 text-center">
              <div className="text-xs font-semibold text-[#c9a700] uppercase tracking-wider mb-1">Yearly savings</div>
              <div className="text-3xl font-bold text-[#32373c]">${yearlySavings.toLocaleString()}</div>
            </div>
            <div className="bg-[#f0cc00] border border-[#f0cc00] rounded-2xl p-5 text-center">
              <div className="text-xs font-semibold text-[#32373c]/80 uppercase tracking-wider mb-1">25-year total</div>
              <div className="text-3xl font-bold text-[#32373c]">${totalSavings.toLocaleString()}</div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/quote" className="inline-block bg-[#32373c] hover:bg-[#1f2226] text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              Get My Custom Quote →
            </Link>
            <p className="text-xs text-slate-500 mt-3">
              Estimates assume utility rate inflation and full system offset. Actual savings vary by location, system size, and utility rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
