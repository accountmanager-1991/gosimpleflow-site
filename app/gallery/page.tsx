import Image from "next/image"
import { INSTALLATIONS } from "@/content/installations"
import CTASection from "@/components/CTASection"

export const metadata = {
  title: "Installation Gallery | Simple Flow",
  description: "Real solar installations by Simple Flow across NY, PA, MD, NJ, CT, MA, and CA.",
}

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#32373c] to-[#1f2226] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Installation Gallery</h1>
          <p className="text-lg text-slate-300">Real Simple Flow installs across 7 states.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTALLATIONS.map(inst => (
            <div key={inst.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#f0cc00] hover:shadow-lg transition group">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#f0cc00]/20 via-[#fffdf1] to-[#f0cc00]/30 relative flex items-center justify-center">
                {inst.imageUrl ? (
                  <Image src={inst.imageUrl} alt={`${inst.systemSize} install in ${inst.city}, ${inst.state}`} fill className="object-cover" />
                ) : (
                  <div className="text-center p-6">
                    <div className="text-6xl mb-2">☀️</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">Photo coming soon</div>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <h3 className="font-bold text-[#32373c]">{inst.city}, {inst.state}</h3>
                    {inst.caption && <p className="text-xs text-slate-500">{inst.caption}</p>}
                  </div>
                  <span className="text-sm font-bold text-[#c9a700] bg-[#fffdf1] px-2 py-1 rounded">{inst.systemSize}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-500 mt-10">
          More installs being added every week. Want to see your home become the next one? <a href="/quote" className="text-[#c9a700] font-semibold hover:underline">Get your free quote →</a>
        </p>
      </section>

      <CTASection />
    </>
  )
}
