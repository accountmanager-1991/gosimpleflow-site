import { TESTIMONIALS } from "@/content/testimonials"

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Real customers, real savings</h2>
          <p className="text-lg text-slate-600">★★★★★ Rated by hundreds of homeowners across 7 states</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
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
  )
}
