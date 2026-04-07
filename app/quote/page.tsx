"use client"

import { useState } from "react"
import Link from "next/link"

type FormData = {
  address: string
  city: string
  state: string
  zip: string
  bill: string
  homeowner: string
  roofAge: string
  credit: string
  firstName: string
  lastName: string
  email: string
  phone: string
  schedule: string
}

const STATES = ["NY", "PA", "MD", "NJ", "CT", "MA", "CA"]

const STEPS = [
  "Address",
  "Bill",
  "Homeowner",
  "Roof Age",
  "Credit",
  "Contact",
  "Schedule",
]

const BILL_RANGES = ["Under $100", "$100 – $200", "$200 – $300", "$300 – $500", "$500+"]
const ROOF_AGES = ["0–10 years", "10–20 years", "20+ years", "Not sure"]

function estimateSavings(bill: string): string {
  const map: Record<string, [number, number]> = {
    "Under $100": [12000, 22000],
    "$100 – $200": [22000, 38000],
    "$200 – $300": [35000, 58000],
    "$300 – $500": [55000, 90000],
    "$500+": [90000, 150000],
  }
  const range = map[bill]
  if (!range) return "$25,000 – $50,000"
  return `$${range[0].toLocaleString()} – $${range[1].toLocaleString()}`
}

const CALENDAR_URL = process.env.NEXT_PUBLIC_GHL_CALENDAR_URL || ""

export default function QuotePage() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormData>({
    address: "", city: "", state: "", zip: "",
    bill: "", homeowner: "", roofAge: "", credit: "",
    firstName: "", lastName: "", email: "", phone: "", schedule: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)

  const update = (k: keyof FormData, v: string) => setData(d => ({ ...d, [k]: v }))
  const next = () => setStep(s => Math.min(s + 1, STEPS.length - 1))
  const back = () => setStep(s => Math.max(s - 1, 0))

  const submit = async (scheduleChoice: "now" | "callback") => {
    setSubmitting(true)
    const payload = { ...data, schedule: scheduleChoice }
    setData(payload)
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
    } catch (e) {
      console.error(e)
    } finally {
      setSubmitting(false)
      if (scheduleChoice === "now" && CALENDAR_URL) {
        setShowCalendar(true)
      } else {
        setSubmitted(true)
      }
    }
  }

  // Calendar booking screen
  if (showCalendar) {
    const url = new URL(CALENDAR_URL)
    if (data.firstName) url.searchParams.set("first_name", data.firstName)
    if (data.lastName) url.searchParams.set("last_name", data.lastName)
    if (data.email) url.searchParams.set("email", data.email)
    if (data.phone) url.searchParams.set("phone", data.phone)
    return (
      <div className="min-h-[80vh] bg-[#fffdf1] py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#32373c] mb-2">Pick a time that works for you</h1>
            <p className="text-slate-600">Your free 15-min virtual consultation with a Simple Flow advisor.</p>
          </div>
          <div className="bg-white border border-[#f0cc00]/30 rounded-2xl shadow-sm overflow-hidden" style={{ minHeight: "700px" }}>
            <iframe
              src={url.toString()}
              style={{ width: "100%", height: "700px", border: 0 }}
              scrolling="no"
              title="Schedule a consultation"
            />
          </div>
        </div>
      </div>
    )
  }

  // Thank you / callback screen
  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-[#fffdf1]">
        <div className="max-w-xl bg-white border border-[#f0cc00]/30 rounded-2xl shadow-lg p-10 text-center">
          <div className="w-16 h-16 bg-[#f0cc00] rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✓</div>
          <h1 className="text-3xl font-bold text-[#32373c] mb-3">You&apos;re all set, {data.firstName || "friend"}!</h1>
          <p className="text-slate-600 mb-6">We received your information. Here&apos;s what happens next:</p>
          <div className="text-left space-y-3 text-slate-700 mb-8">
            <div className="flex gap-3"><span className="text-[#c9a700] font-bold">1.</span> Within 24 hours, your dedicated advisor will reach out to schedule your free 15-min virtual consultation.</div>
            <div className="flex gap-3"><span className="text-[#c9a700] font-bold">2.</span> On the call, we&apos;ll review your roof, your bill, and the available incentives in your area.</div>
            <div className="flex gap-3"><span className="text-[#c9a700] font-bold">3.</span> If you decide to move forward, we handle everything from there — permits, install, all of it.</div>
          </div>
          <Link href="/" className="inline-block bg-[#f0cc00] hover:bg-[#d9b800] text-[#32373c] px-6 py-3 rounded-lg font-bold">← Back to home</Link>
        </div>
      </div>
    )
  }

  const canAdvance = () => {
    switch (step) {
      case 0: return data.address.length > 3 && data.city.length > 1 && !!data.state && /^\d{5}$/.test(data.zip)
      case 1: return !!data.bill
      case 2: return !!data.homeowner
      case 3: return !!data.roofAge
      case 4: return !!data.credit
      case 5: return data.firstName && data.lastName && data.phone.length >= 10 && data.email.includes("@")
      default: return true
    }
  }

  return (
    <div className="min-h-[80vh] bg-[#fffdf1] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-[#32373c] uppercase">Step {step + 1} of {STEPS.length}</span>
            <span className="text-xs text-slate-500">{STEPS[step]}</span>
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#f0cc00] transition-all" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
          </div>
        </div>

        <div className="bg-white border border-[#f0cc00]/30 rounded-2xl shadow-sm p-8 sm:p-10">
          {step === 0 && (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#32373c] mb-2">Let&apos;s start with your address</h2>
              <p className="text-slate-600 mb-6">We&apos;ll use this to pull your roof and bill data — no phone calls needed.</p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Street address"
                  value={data.address}
                  onChange={e => update("address", e.target.value)}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-[#f0cc00]"
                  autoFocus
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="City"
                    value={data.city}
                    onChange={e => update("city", e.target.value)}
                    className="border border-slate-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-[#f0cc00]"
                  />
                  <select
                    value={data.state}
                    onChange={e => update("state", e.target.value)}
                    className="border border-slate-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-[#f0cc00] bg-white"
                  >
                    <option value="">State</option>
                    {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="ZIP"
                    value={data.zip}
                    maxLength={5}
                    onChange={e => update("zip", e.target.value.replace(/\D/g, ""))}
                    className="border border-slate-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-[#f0cc00]"
                  />
                </div>
                <p className="text-xs text-slate-500">We service NY, PA, MD, NJ, CT, MA, and CA.</p>
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#32373c] mb-2">What&apos;s your average monthly electric bill?</h2>
              <p className="text-slate-600 mb-6">Pick the closest range — this helps us estimate your savings.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BILL_RANGES.map(b => (
                  <button key={b} onClick={() => { update("bill", b); next() }}
                    className={`border-2 rounded-lg px-4 py-4 text-lg font-semibold transition ${data.bill === b ? "border-[#f0cc00] bg-[#fffdf1] text-[#32373c]" : "border-slate-300 hover:border-[#f0cc00]"}`}>
                    {b}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#32373c] mb-2">Do you own your home?</h2>
              <p className="text-slate-600 mb-6">Solar requires homeownership — we want to make sure we can help you.</p>
              <div className="grid grid-cols-2 gap-3">
                {["Yes", "No"].map(v => (
                  <button key={v} onClick={() => { update("homeowner", v); next() }}
                    className={`border-2 rounded-lg px-4 py-6 text-lg font-semibold transition ${data.homeowner === v ? "border-[#f0cc00] bg-[#fffdf1] text-[#32373c]" : "border-slate-300 hover:border-[#f0cc00]"}`}>
                    {v}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#32373c] mb-2">How old is your roof?</h2>
              <p className="text-slate-600 mb-6">If your roof is older, we can include a re-roof in your financing.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ROOF_AGES.map(v => (
                  <button key={v} onClick={() => { update("roofAge", v); next() }}
                    className={`border-2 rounded-lg px-4 py-4 text-lg font-semibold transition ${data.roofAge === v ? "border-[#f0cc00] bg-[#fffdf1] text-[#32373c]" : "border-slate-300 hover:border-[#f0cc00]"}`}>
                    {v}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#32373c] mb-2">Is your credit score above 650?</h2>
              <p className="text-slate-600 mb-6">This helps us match you with the best financing option. We have programs for all credit profiles.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["Yes", "No", "Not sure"].map(v => (
                  <button key={v} onClick={() => { update("credit", v); next() }}
                    className={`border-2 rounded-lg px-4 py-4 text-lg font-semibold transition ${data.credit === v ? "border-[#f0cc00] bg-[#fffdf1] text-[#32373c]" : "border-slate-300 hover:border-[#f0cc00]"}`}>
                    {v}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 5 && (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#32373c] mb-2">Almost done — how can we reach you?</h2>
              <p className="text-slate-600 mb-6">We&apos;ll send your custom savings report and confirm your appointment.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="text" placeholder="First name" value={data.firstName} onChange={e => update("firstName", e.target.value)} className="border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#f0cc00]" />
                <input type="text" placeholder="Last name" value={data.lastName} onChange={e => update("lastName", e.target.value)} className="border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#f0cc00]" />
                <input type="email" placeholder="Email" value={data.email} onChange={e => update("email", e.target.value)} className="border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#f0cc00] sm:col-span-2" />
                <input type="tel" placeholder="Phone" value={data.phone} onChange={e => update("phone", e.target.value)} className="border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#f0cc00] sm:col-span-2" />
              </div>
              <p className="text-xs text-slate-500 mt-4">By providing your phone number, you agree to receive calls and texts from Simple Flow about your solar quote. Reply STOP to opt out.</p>
            </>
          )}

          {step === 6 && (
            <>
              <div className="bg-gradient-to-br from-[#fffdf1] to-[#fff8d1] border border-[#f0cc00]/40 rounded-xl p-6 mb-6 text-center">
                <div className="text-sm font-semibold text-[#c9a700] uppercase tracking-wider mb-1">Your estimated 25-year savings</div>
                <div className="text-4xl font-bold text-[#32373c]">{estimateSavings(data.bill)}</div>
                <div className="text-xs text-[#c9a700] mt-2">vs. paying utility rates over 25 years</div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#32373c] mb-2">Want to talk through your options?</h2>
              <p className="text-slate-600 mb-6">Pick how you&apos;d like to connect with your dedicated advisor.</p>
              <div className="grid grid-cols-1 gap-3">
                <button onClick={() => submit("now")} disabled={submitting}
                  className="border-2 border-[#f0cc00] bg-[#f0cc00] hover:bg-[#d9b800] text-[#32373c] rounded-lg px-4 py-5 text-left transition disabled:opacity-50">
                  <div className="font-bold text-lg">📅 Schedule a virtual consultation now</div>
                  <div className="text-sm text-[#32373c]/80">Free 15-min call. Pick a time that works.</div>
                </button>
                <button onClick={() => submit("callback")} disabled={submitting}
                  className="border-2 border-slate-300 hover:border-[#f0cc00] rounded-lg px-4 py-5 text-left transition disabled:opacity-50">
                  <div className="font-semibold text-lg text-[#32373c]">📞 Have someone call me</div>
                  <div className="text-sm text-slate-500">We&apos;ll reach out within 24 hours.</div>
                </button>
              </div>
            </>
          )}

          {/* Nav buttons */}
          {(step === 0 || step === 5) && (
            <div className="flex gap-3 mt-8">
              {step > 0 && <button onClick={back} className="px-6 py-3 border border-slate-300 rounded-lg font-semibold hover:bg-slate-50">Back</button>}
              <button onClick={next} disabled={!canAdvance()} className="flex-1 bg-[#f0cc00] hover:bg-[#d9b800] disabled:bg-slate-300 text-[#32373c] px-6 py-3 rounded-lg font-bold transition">
                Continue →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
