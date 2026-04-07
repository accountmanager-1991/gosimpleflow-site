const STEPS = [
  { num: "01", title: "Free Quote", body: "Fill out a 60-second form. We pull your roof and bill data automatically." },
  { num: "02", title: "Virtual Design", body: "Our engineers design your system on a 30-min video call. No home visit required." },
  { num: "03", title: "Permits & Approval", body: "We handle utility paperwork, permits, HOA, and financing. You sit back." },
  { num: "04", title: "Fast Installation", body: "Most installs scheduled within 30-60 days. Crews work all day, gone the next." },
  { num: "05", title: "Start Saving", body: "Once activated, you start saving from day one. We handle warranty for 25 years." },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#32373c] mb-4">How it works</h2>
          <p className="text-lg text-slate-600">From quote to activation in as little as 30-60 days.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {STEPS.map(s => (
            <div key={s.num} className="relative">
              <div className="text-5xl font-bold text-[#f0cc00] mb-2">{s.num}</div>
              <h3 className="text-lg font-bold text-[#32373c] mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
