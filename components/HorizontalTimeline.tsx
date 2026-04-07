const STEPS = [
  { num: 1, title: "Site Survey Scheduled", body: "We schedule a visit to inspect your home.", icon: "📅" },
  { num: 2, title: "Site Survey Completed", body: "We review results and start your design (3–8 days).", icon: "✅" },
  { num: 3, title: "Planset Ready", body: "We finalize your solar design for permitting.", icon: "📐", highlight: true },
  { num: 4, title: "Permit Submitted", body: "We handle the permit application — up to 30 days.", icon: "📄", highlight: true },
  { num: 5, title: "Permit Approved", body: "We gather final docs before installation.", icon: "✓" },
  { num: 6, title: "Scheduling Install", body: "We pick the best date for your install.", icon: "🗓️", highlight: true },
  { num: 7, title: "Install Scheduled", body: "Your install is locked in.", icon: "🔒" },
  { num: 8, title: "Install Completed", body: "Your system is installed!", icon: "🎉", highlight: true },
  { num: 9, title: "Inspection & Activation", body: "We coordinate inspection and PTO — up to 30 days.", icon: "🔍" },
  { num: 10, title: "You're Live!", body: "Start saving from day one.", icon: "⚡", highlight: true },
  { num: 11, title: "Review & Refer", body: "Earn rewards by referring friends.", icon: "⭐" },
]

export default function HorizontalTimeline() {
  return (
    <section className="py-20 bg-[#32373c] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(240,204,0,0.15),_transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How Simple Flow works</h2>
          <p className="text-lg text-slate-300">From site survey to system activation — every step we handle for you.</p>
        </div>

        {/* Horizontal scroll on mobile, full row on desktop */}
        <div className="overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="relative" style={{ minWidth: "1100px" }}>
            {/* Connecting line */}
            <div className="absolute top-8 left-[5%] right-[5%] h-0.5 bg-[#f0cc00]/40" />

            <div className="grid grid-cols-11 gap-2">
              {STEPS.map((step) => (
                <div key={step.num} className="relative flex flex-col items-center text-center">
                  {/* Number circle */}
                  <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-3 border-4 ${
                    step.highlight
                      ? "bg-[#f0cc00] border-[#f0cc00] text-[#32373c]"
                      : "bg-[#32373c] border-[#f0cc00]/60 text-[#f0cc00]"
                  }`}>
                    {step.num}
                  </div>
                  {/* Icon */}
                  <div className="text-2xl mb-2">{step.icon}</div>
                  {/* Title */}
                  <h3 className={`font-bold text-sm mb-1 leading-tight ${step.highlight ? "text-[#f0cc00]" : "text-white"}`}>
                    {step.title}
                  </h3>
                  {/* Body */}
                  <p className="text-xs text-slate-400 leading-snug px-1">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-slate-400 text-sm">
            From quote to activation typically takes <span className="text-[#f0cc00] font-bold">60–90 days</span> total.
          </p>
        </div>
      </div>
    </section>
  )
}
