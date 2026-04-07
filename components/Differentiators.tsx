const ITEMS = [
  {
    icon: "💻",
    title: "100% Virtual Process",
    body: "No salespeople in your living room. Quote, design, and approval all done online. Sign once and we handle the rest.",
  },
  {
    icon: "⚡",
    title: "Fast Installation",
    body: "Most installs scheduled within 30 days. Industry average is 90+. We move fast so you start saving sooner.",
  },
  {
    icon: "🛡️",
    title: "We Handle Everything",
    body: "Permits, utility paperwork, HOA, financing, inspections — all of it. One signature, zero headaches.",
  },
]

export default function Differentiators() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why homeowners choose Simple Flow</h2>
          <p className="text-lg text-slate-600">Solar shouldn&apos;t be complicated. We&apos;ve built our entire process to be the opposite.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ITEMS.map(item => (
            <div key={item.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-orange-300 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
