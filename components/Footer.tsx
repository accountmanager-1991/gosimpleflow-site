import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold">S</div>
              <span className="font-bold text-white">Simple Flow</span>
            </div>
            <p className="text-sm text-slate-400">Solar made simple. Virtual consultation, fast installation, we handle everything.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solar/ny" className="hover:text-orange-400">New York</Link></li>
              <li><Link href="/solar/pa" className="hover:text-orange-400">Pennsylvania</Link></li>
              <li><Link href="/solar/md" className="hover:text-orange-400">Maryland</Link></li>
              <li><Link href="/solar/nj" className="hover:text-orange-400">New Jersey</Link></li>
              <li><Link href="/solar/ct" className="hover:text-orange-400">Connecticut</Link></li>
              <li><Link href="/solar/ma" className="hover:text-orange-400">Massachusetts</Link></li>
              <li><Link href="/solar/ca" className="hover:text-orange-400">California</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-orange-400">About</Link></li>
              <li><Link href="/how-it-works" className="hover:text-orange-400">How It Works</Link></li>
              <li><Link href="/incentives" className="hover:text-orange-400">Incentives</Link></li>
              <li><Link href="/financing" className="hover:text-orange-400">Financing</Link></li>
              <li><Link href="/faq" className="hover:text-orange-400">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Get In Touch</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+18553757923" className="hover:text-orange-400">(855) 375-7923</a></li>
              <li><Link href="/quote" className="text-orange-400 font-semibold hover:text-orange-300">Get Free Quote →</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-6 text-sm text-slate-500 flex flex-col sm:flex-row justify-between gap-3">
          <p>© {new Date().getFullYear()} Simple Flow. All rights reserved.</p>
          <p>Solar Made Simple.</p>
        </div>
      </div>
    </footer>
  )
}
