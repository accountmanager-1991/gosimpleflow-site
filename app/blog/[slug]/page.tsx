import Link from "next/link"
import { notFound } from "next/navigation"
import { BLOG_POSTS, getPostBySlug } from "@/content/blog-posts"
import CTASection from "@/components/CTASection"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Post not found" }
  return {
    title: `${post.title} | Simple Flow Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  // Render markdown-ish body (simple split on headings)
  const blocks = post.body.split(/\n\n/).map((block, i) => {
    if (block.startsWith("## ")) {
      return <h2 key={i} className="text-2xl font-bold text-[#32373c] mt-10 mb-3">{block.replace(/^##\s*/, "")}</h2>
    }
    if (block.match(/^\d\.\s/)) {
      const items = block.split("\n").map(l => l.replace(/^\d+\.\s*/, ""))
      return (
        <ol key={i} className="list-decimal pl-6 space-y-2 my-4">
          {items.map((it, j) => <li key={j} dangerouslySetInnerHTML={{ __html: it.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />)}
        </ol>
      )
    }
    return <p key={i} className="leading-relaxed text-slate-700 mb-4" dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
  })

  return (
    <>
      <section className="bg-gradient-to-br from-[#32373c] to-[#1f2226] text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/blog" className="text-[#f0cc00] text-sm hover:underline">← All posts</Link>
          <div className="flex items-center gap-2 text-xs text-slate-300 mt-4 mb-3">
            <span className="bg-[#f0cc00] text-[#32373c] px-2 py-0.5 rounded font-semibold uppercase tracking-wider">{post.category}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
          <p className="text-lg text-slate-300">{post.excerpt}</p>
        </div>
      </section>

      <article className="py-16 max-w-3xl mx-auto px-4">
        {blocks}
      </article>

      <CTASection />
    </>
  )
}
