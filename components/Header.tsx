import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/brand/logo.png" alt="Simple Flow" width={140} height={40} priority className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#32373c]">
          <Link href="/how-it-works" className="hover:text-[#c9a700] transition">How It Works</Link>
          <Link href="/financing" className="hover:text-[#c9a700] transition">Financing</Link>
          <Link href="/incentives" className="hover:text-[#c9a700] transition">Incentives</Link>
          <Link href="/about" className="hover:text-[#c9a700] transition">About</Link>
          <Link href="/faq" className="hover:text-[#c9a700] transition">FAQ</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+18553757923" className="hidden sm:block text-sm font-semibold text-[#32373c] hover:text-[#c9a700]">(855) 375-7923</a>
          <Link href="/quote" className="bg-[#f0cc00] hover:bg-[#d9b800] text-[#32373c] px-4 py-2 rounded-lg text-sm font-bold transition shadow-sm">Get Free Quote</Link>
        </div>
      </div>
    </header>
  )
}
