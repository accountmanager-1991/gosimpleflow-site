import Link from "next/link"

export const metadata = { title: "Contact Simple Flow" }

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-orange-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in touch</h1>
          <p className="text-lg text-slate-300">We respond within 24 hours.</p>
        </div>
      </section>
      <section className="py-20 max-w-3xl mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8">
            <div className="text-4xl mb-3">📞</div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Call us</h2>
            <a href="tel:+18553757923" className="text-2xl font-bold text-orange-600">(855) 375-7923</a>
            <p className="text-sm text-slate-600 mt-2">Mon–Fri 9am–7pm ET</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <div className="text-4xl mb-3">📅</div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Get a quote</h2>
            <Link href="/quote" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">Start now →</Link>
            <p className="text-sm text-slate-600 mt-2">60 seconds. No obligation.</p>
          </div>
        </div>
      </section>
    </>
  )
}
