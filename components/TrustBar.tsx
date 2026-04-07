export default function TrustBar() {
  return (
    <div className="bg-slate-50 border-y border-slate-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
        <span className="flex items-center gap-1">
          <span className="text-amber-400">★★★★★</span>
          <span className="font-semibold">on Google</span>
        </span>
        <span className="hidden sm:inline text-slate-300">·</span>
        <span className="font-semibold">1,000+ installs</span>
        <span className="hidden sm:inline text-slate-300">·</span>
        <span>NY · PA · MD · NJ · CT · MA · CA</span>
      </div>
    </div>
  )
}
