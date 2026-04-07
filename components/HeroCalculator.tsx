"use client"

import { useState } from "react"
import Link from "next/link"

export default function HeroCalculator() {
  const [bill, setBill] = useState(200)

  // Highest realistic estimate
  const totalSavings = Math.round(bill * 12 * 25 * 1.5)
  const monthlySavings = Math.round(bill * 0.85)
  const yearlySavings = monthlySavings * 12

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-7 border-4 border-[#f0cc00] w-full max-w-md mx-auto lg:mx-0">
      <div className="text-center mb-5">
        <div className="text-xs font-bold text-[#c9a700] uppercase tracking-wider mb-1">Free Savings Calculator</div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#32373c]">See your potential savings</h3>
      </div>

      {/* Slider */}
      <div className="mb-5">
        <div className="flex justify-between items-baseline mb-2">
          <label className="text-xs font-semibold text-[#32373c] uppercase tracking-wider">Your monthly bill</label>
          <span className="text-2xl font-bold text-[#c9a700]">${bill}<span className="text-sm text-slate-500 font-normal">/mo</span></span>
        </div>
        <input
          type="range"
          min="50"
          max="800"
          step="10"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          className="w-full h-3 rounded-lg appearance-none cursor-pointer accent-[#f0cc00]"
          style={{
            background: `linear-gradient(to right, #f0cc00 0%, #f0cc00 ${((bill - 50) / 750) * 100}%, #e2e8f0 ${((bill - 50) / 750) * 100}%, #e2e8f0 100%)`
          }}
        />
        <div className="flex justify-between text-[10px] text-slate-500 mt-1">
          <span>$50</span>
          <span>$400</span>
          <span>$800</span>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-2 mb-5">
        <div className="flex justify-between items-center bg-[#fffdf1] border border-[#f0cc00]/30 rounded-lg px-3 py-2">
          <span className="text-xs text-slate-600 font-semibold">Monthly savings</span>
          <span className="text-lg font-bold text-[#32373c]">${monthlySavings.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center bg-[#fffdf1] border border-[#f0cc00]/30 rounded-lg px-3 py-2">
          <span className="text-xs text-slate-600 font-semibold">Yearly savings</span>
          <span className="text-lg font-bold text-[#32373c]">${yearlySavings.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center bg-[#f0cc00] rounded-lg px-3 py-3">
          <span className="text-xs text-[#32373c] font-bold uppercase">25-year total</span>
          <span className="text-2xl font-bold text-[#32373c]">${totalSavings.toLocaleString()}</span>
        </div>
      </div>

      <Link href="/quote" className="block w-full text-center bg-[#32373c] hover:bg-[#1f2226] text-white px-5 py-3 rounded-lg font-bold transition shadow-md">
        Get My Custom Quote →
      </Link>
      <p className="text-[10px] text-slate-500 mt-2 text-center">Estimates only. Actual savings vary by location and system size.</p>
    </div>
  )
}
