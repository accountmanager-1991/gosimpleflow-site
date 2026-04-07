import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f0cc00] to-[#e0b800]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#32373c] mb-4">Ready to lock in your rate?</h2>
        <p className="text-xl text-[#32373c]/80 mb-8 max-w-2xl mx-auto">
          Get your custom savings report in 60 seconds. No obligation, no credit check.
        </p>
        <Link href="/quote" className="inline-block bg-[#32373c] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1f2226] transition shadow-xl">
          Get Free Quote →
        </Link>
        <p className="text-[#32373c]/80 text-sm mt-4">
          ✓ Free 15-min call within 24 hours · ✓ No credit check · ✓ No obligation
        </p>
      </div>
    </section>
  )
}
