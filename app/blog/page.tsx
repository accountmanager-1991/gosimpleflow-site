import Link from "next/link"
import { BLOG_POSTS } from "@/content/blog-posts"
import CTASection from "@/components/CTASection"

export const metadata = {
  title: "Solar Blog | Simple Flow",
  description: "News, guides, and tips on solar incentives, financing, and installation from Simple Flow.",
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#32373c] to-[#1f2226] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Solar Blog</h1>
          <p className="text-lg text-slate-300">Guides, news, and tips on going solar in 2026.</p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#f0cc00] hover:shadow-lg transition group"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-[#f0cc00]/30 to-[#fffdf1] flex items-center justify-center text-5xl">
                ☀️
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span className="bg-[#fffdf1] text-[#c9a700] px-2 py-0.5 rounded font-semibold uppercase tracking-wider">{post.category}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-bold text-lg text-[#32373c] mb-2 group-hover:text-[#c9a700] transition">{post.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="mt-4 text-xs text-slate-500">{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
