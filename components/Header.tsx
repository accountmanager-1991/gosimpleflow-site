import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold">S</div>
          <span className="font-bold text-lg text-slate-900">Simple Flow</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
          <Link href="/how-it-works" className="hover:text-orange-600 transition">How It Works</Link>
          <Link href="/financing" className="hover:text-orange-600 transition">Financing</Link>
          <Link href="/incentives" className="hover:text-orange-600 transition">Incentives</Link>
          <Link href="/about" className="hover:text-orange-600 transition">About</Link>
          <Link href="/faq" className="hover:text-orange-600 transition">FAQ</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+18553757923" className="hidden sm:block text-sm font-semibold text-slate-700 hover:text-orange-600">(855) 375-7923</a>
          <Link href="/quote" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition shadow-sm">Get Free Quote</Link>
        </div>
      </div>
    </header>
  )
}
