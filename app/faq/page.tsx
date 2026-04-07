import CTASection from "@/components/CTASection"

export const metadata = { title: "Solar FAQs | Simple Flow" }

const FAQS = [
  { q: "Is the federal solar tax credit still available?", a: "The 30% federal residential tax credit ended December 31, 2025. However, state and local incentives (NY, PA, MD, NJ, CT, MA, CA) are still very strong, and many of our customers still see 6–10 year payback periods." },
  { q: "What does $0 down really mean?", a: "It means you pay nothing upfront. We offer loans, leases, and PPAs with no upfront cost. Your monthly solar payment is typically lower than your current electric bill." },
  { q: "How long does installation take?", a: "Most Simple Flow installs are scheduled within 30 days of contract signing. The actual install crew is on-site for 1–2 days." },
  { q: "Do I need to be home during the install?", a: "Briefly. The roof crew works outside, and we need maybe 30 minutes inside to install the inverter and connect to your panel." },
  { q: "What if my roof needs to be replaced?", a: "We can include re-roofing in your financing. Our designers will assess your roof during the virtual consultation." },
  { q: "What happens if my system stops working?", a: "All Simple Flow installs come with a 25-year equipment warranty. If anything goes wrong, we handle the repair at no cost." },
  { q: "Will solar increase my home value?", a: "Yes — Zillow studies show solar adds an average of $15,000–$20,000 to home value, often more in high-cost-of-electricity markets." },
  { q: "What if I sell my home?", a: "You can transfer the lease/PPA to the new owner, or pay it off as part of closing. Solar loans can be paid off or transferred similarly." },
]

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#32373c] to-[#1f2226] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Frequently asked questions</h1>
          <p className="text-lg text-slate-300">Common questions about going solar with Simple Flow.</p>
        </div>
      </section>
      <section className="py-20 max-w-3xl mx-auto px-4">
        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <details key={i} className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-[#f0cc00] transition">
              <summary className="cursor-pointer font-bold text-[#32373c] list-none flex justify-between items-center">
                {f.q}
                <span className="text-[#c9a700] group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-slate-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  )
}
