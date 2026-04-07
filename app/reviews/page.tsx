import Link from "next/link"
import CTASection from "@/components/CTASection"

export const metadata = {
  title: "Customer Reviews | Simple Flow",
  description: "Real reviews from Simple Flow solar customers across NY, PA, MD, NJ, CT, MA, and CA.",
}

// Real reviews go here. Pull from Google Business Profile or paste directly.
// To wire to Google Business Profile: use Google Places API + your Place ID.
const REVIEWS_PLACEHOLDER: { name: string; city: string; state: string; rating: number; text: string; date: string }[] = []

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#32373c] to-[#1f2226] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-lg text-slate-300">Real homeowners. Real results. Real reviews.</p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4">
        {REVIEWS_PLACEHOLDER.length === 0 ? (
          <div className="bg-[#fffdf1] border border-[#f0cc00]/30 rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">⭐</div>
            <h2 className="text-2xl font-bold text-[#32373c] mb-3">Reviews coming soon</h2>
            <p className="text-slate-600 max-w-xl mx-auto mb-6">
              We&apos;re currently building our review collection system. In the meantime, you can read real reviews on our Google Business Profile.
            </p>
            <a
              href="https://www.google.com/search?q=simple+flow+solar+reviews"
              target="_blank"
              rel="noopener"
              className="inline-block bg-[#f0cc00] hover:bg-[#d9b800] text-[#32373c] px-6 py-3 rounded-lg font-bold transition"
            >
              Read Google Reviews →
            </a>
            <p className="text-xs text-slate-500 mt-6">
              Are you a Simple Flow customer? <Link href="/contact" className="text-[#c9a700] hover:underline">Leave us a review</Link> — we&apos;d love your feedback.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS_PLACEHOLDER.map((r, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="text-[#f0cc00] mb-3">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</div>
                <p className="text-slate-700 leading-relaxed mb-4">&quot;{r.text}&quot;</p>
                <div className="text-sm font-semibold text-[#32373c]">{r.name}</div>
                <div className="text-xs text-slate-500">{r.city}, {r.state} · {r.date}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      <CTASection />
    </>
  )
}
