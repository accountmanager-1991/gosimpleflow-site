const STEPS = [
  { num: 1, title: "Site Survey Scheduled", body: "We'll schedule a visit to inspect your home — someone 18+ needs to be there.", icon: "📅" },
  { num: 2, title: "Site Survey Completed", body: "For 3–8 business days, we'll review the results and start on your system design.", icon: "✅" },
  { num: 3, title: "Planset Ready", body: "We'll finalize your solar design and prepare everything needed for permitting.", icon: "📐", highlight: true },
  { num: 4, title: "Permit Submitted", body: "We'll handle the permit application with your local authority — it can take up to 30 days.", icon: "📄", highlight: true },
  { num: 5, title: "Permit Approved", body: "Once approved, we'll gather any final documents needed before installation.", icon: "✓" },
  { num: 6, title: "Scheduling Your Install", body: "We'll contact you to choose the best date for your installation.", icon: "🗓️", highlight: true },
  { num: 7, title: "Installation Scheduled", body: "Your install is locked in — please ensure someone 18+ is home that day.", icon: "🔒" },
  { num: 8, title: "Installation Completed", body: "Time to celebrate! Your beautiful system is installed and ready for inspection!", icon: "🎉", highlight: true },
  { num: 9, title: "Final Inspection & Activation", body: "We'll coordinate inspection and apply for permission to turn on your system. Up to 30 days after install.", icon: "🔍" },
  { num: 10, title: "You're Live!", body: "Once approved, your system is ready to start saving you money.", icon: "⚡", highlight: true },
  { num: 11, title: "Leave a Review & Refer Friends", body: "We'd love your feedback — and you can earn rewards by referring others!", icon: "⭐" },
]

export default function FullProcess() {
  return (
    <section className="py-20 bg-[#32373c] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(240,204,0,0.15),_transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Your full Simple Flow journey</h2>
          <p className="text-lg text-slate-300">From site survey to system activation — every step we handle for you.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className={`relative rounded-xl p-5 border-2 transition hover:scale-[1.02] ${
                step.highlight
                  ? "bg-[#f0cc00]/10 border-[#f0cc00] hover:bg-[#f0cc00]/15"
                  : "bg-[#3d434a] border-[#f0cc00]/30 hover:border-[#f0cc00]/60"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                  step.highlight ? "bg-[#f0cc00] text-[#32373c]" : "bg-[#2a2e33] text-[#f0cc00] border border-[#f0cc00]/40"
                }`}>
                  {step.num}
                </div>
                <span className="text-3xl">{step.icon}</span>
              </div>
              <h3 className={`font-bold text-lg mb-2 ${step.highlight ? "text-[#f0cc00]" : "text-white"}`}>
                {step.title}
              </h3>
              <p className={`text-sm leading-relaxed ${step.highlight ? "text-[#fffdf1]/90" : "text-slate-300"}`}>
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 text-sm">
            From quote to activation typically takes <span className="text-[#f0cc00] font-bold">60–90 days</span> — about a third of the industry average.
          </p>
        </div>
      </div>
    </section>
  )
}
