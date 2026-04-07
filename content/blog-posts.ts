export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  body: string
  author: string
  date: string
  category: string
  readTime: string
  image?: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ny-solar-incentives-2026",
    title: "Every NY Solar Incentive Available in 2026",
    excerpt: "With the federal tax credit gone, here are the New York programs that still make solar a smart investment in 2026.",
    body: `The federal residential solar tax credit ended on December 31, 2025, but New York homeowners still have access to one of the strongest incentive stacks in the country. Here's everything you can claim in 2026.\n\n## NY State Solar Tax Credit\n\nNew York offers a 25% state income tax credit, capped at $5,000, for residential solar installations. This applies to the total system cost and can be carried forward for up to 5 years if you can't use the full amount in year one.\n\n## NYSERDA NY-Sun Rebate\n\nNYSERDA provides a per-watt rebate paid directly to your installer, lowering your upfront cost. Rebate amounts vary by region and decline as funding blocks fill up — meaning the sooner you act, the higher your incentive.\n\n## NYC Property Tax Abatement\n\nIf you live in New York City, you also qualify for a property tax abatement equal to 30% of your system cost, spread over 4 years. This is one of the most valuable local incentives in the country.\n\n## Net Metering\n\nNew York utilities still offer full retail net metering, meaning every kWh you send back to the grid offsets a kWh you pull from it at the same rate. This is the foundation of solar economics in NY.\n\n## Property Tax Exemption\n\nThe added value from your solar installation is exempt from property tax assessment for 15 years in NY.\n\n## What This Means for You\n\nStacked together, these incentives often cover 40–60% of your system cost, making the payback period in NY one of the fastest in the country — typically 6–8 years. After that, the system pays you for the next 17–19 years of its 25-year warranty.`,
    author: "Simple Flow Team",
    date: "2026-04-01",
    category: "Incentives",
    readTime: "4 min",
  },
  {
    slug: "what-happened-federal-solar-tax-credit",
    title: "What Happened to the Federal Solar Tax Credit?",
    excerpt: "The 30% federal residential solar tax credit ended December 31, 2025. Here's what it means for homeowners considering solar in 2026.",
    body: `For nearly 20 years, the federal Investment Tax Credit (ITC) was the single biggest reason homeowners went solar. It started at 30% in 2005, was extended multiple times, and finally expired for residential installations on December 31, 2025.\n\n## Why It Ended\n\nThe One Big Beautiful Bill Act of 2025 eliminated the residential portion of the ITC. Commercial and utility-scale solar projects still get federal incentives, but homeowners no longer do.\n\n## Does Solar Still Make Sense?\n\nYes — but the math is different. Without the ITC, payback periods extended by 1–3 years for most homeowners. The good news: state incentives are stronger than ever, especially in NY, NJ, MD, MA, and PA where utility rates are climbing fast.\n\n## What to Focus On Now\n\n1. **State and local incentives** — many are now more valuable than the ITC ever was.\n2. **$0 down financing** — most solar today is loan or lease, no upfront cost.\n3. **Rate hedge value** — utility rates are up 25%+ since 2022. Solar locks your rate for 25 years.\n4. **Net metering** — still works in most target states; full retail credit for excess generation.\n\n## The Bottom Line\n\nIf you're in a high-rate state with strong local incentives, solar is still one of the best investments you can make in your home. Just make sure you're working with an installer who knows how to claim every available program.`,
    author: "Simple Flow Team",
    date: "2026-03-25",
    category: "News",
    readTime: "3 min",
  },
  {
    slug: "how-virtual-solar-design-works",
    title: "How Our 100% Virtual Solar Process Works",
    excerpt: "No salespeople in your living room. No multi-week sales cycles. Here's how Simple Flow designs and approves your system entirely online.",
    body: `Traditional solar sales feels like buying a used car: a rep shows up at your house, runs through a high-pressure pitch, and pushes you to sign before you've had time to think. We hated that process. So we built the opposite.\n\n## Step 1: Free Online Quote (60 seconds)\n\nYou fill out a short form with your address and average bill. We use satellite imagery and your utility data to estimate system size and savings — no home visit required.\n\n## Step 2: Virtual Design Call (30 minutes)\n\nOur engineering team walks you through a custom design on a video call. You see the proposed panel layout on your roof, the production estimates, the financing options, and your projected savings. No pressure, no sales pitch.\n\n## Step 3: Digital Approval\n\nIf you like what you see, you sign electronically. We immediately submit for permits, financing, and utility interconnection.\n\n## Step 4: Site Survey\n\nThe only in-person step before install: a quick site survey to verify roof condition and electrical panel. This usually takes about an hour.\n\n## Step 5: Installation\n\nMost installs are scheduled within 30 days of contract signing. Crews work 1–2 days. You don't need to do anything except be home for a few minutes for the panel cutover.\n\n## Why It Works\n\nNo high-pressure sales. No 2-hour kitchen-table demos. Fast turnaround. Transparent pricing. That's how solar should be sold — and that's how we sell it.`,
    author: "Simple Flow Team",
    date: "2026-03-15",
    category: "How It Works",
    readTime: "3 min",
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(p => p.slug === slug)
}
