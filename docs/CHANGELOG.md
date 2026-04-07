# Changelog

All notable changes to the Simple Flow marketing site.

---

## [Session 1] — 2026-04-07

Initial scaffold + first session of feature work. Built the entire marketing site from scratch in one sitting and pushed to production on Vercel.

### Added
- **Project scaffolded** with Next.js 16.2.2, TypeScript, Tailwind 4, Turbopack
- **GitHub repo** connected: `accountmanager-1991/gosimpleflow-site`
- **Vercel deployment** auto-deploys on push to `main` (Emozca LLC team)
- **Homepage** with hero, trust bar, differentiators, savings calculator, horizontal timeline, testimonials, CTA
- **7-step quote funnel** at `/quote` (address → bill → homeowner → roof age → credit → contact → schedule)
  - Step 1 collects street, city, state (dropdown), zip as 4 separate fields
  - Step 7 shows estimated savings range and 2 CTAs: schedule now or callback
- **Lead API** at `/api/lead` posting to GHL inbound webhook with snake_case field mapping
- **GHL calendar embed** — when "Schedule virtual consultation" is clicked, GHL booking widget loads in iframe with prefilled name/email/phone
- **7 state landing pages** at `/solar/[state]` (NY, PA, MD, NJ, CT, MA, CA)
- **Supporting pages:** `/how-it-works`, `/financing`, `/incentives`, `/about`, `/faq`, `/contact`
- **Blog system:** `/blog` index + `/blog/[slug]` dynamic posts (3 sample posts seeded)
- **Gallery:** `/gallery` with 9 placeholder install cards
- **Reviews:** `/reviews` placeholder linked to Google reviews
- **Privacy Policy:** `/privacy` — TCPA + GHL compliant SMS terms
- **Terms of Service:** `/terms` — 16 sections mirroring Emozca structure
- **Brand assets:** logo downloaded from existing gosimpleflow.com, primary colors `#f0cc00` and `#32373c`
- **Interactive savings calculator** — slider $50–$800/month, shows monthly/yearly/25-year savings, embedded in hero
- **Horizontal 11-step timeline** on homepage and state pages
- **Alternating 11-step roadmap** on `/how-it-works` page
- **TypeScript content files** in `/content/` and `/lib/` for testimonials, blog posts, installations, states, incentives

### Changed
- Hero rebuilt as 2-column layout: text content on left, savings calculator on right
- Order of homepage sections: Hero → TrustBar → HorizontalTimeline → Differentiators → Testimonials → CTA
- Install timeframe updated from "30 days" to "30-60 days" everywhere (Hero, Differentiators, HowItWorks, About, FAQ, state pages)
- Footer Privacy Policy + Terms of Service moved to bottom row (next to copyright)
- Form field names mapped from camelCase (form) to snake_case (GHL): `firstName` → `first_name`, etc.
- Address field replaced with 4 separate fields: address, city, state (7-state dropdown), zip
- Brand colors swapped from default orange/slate to Simple Flow yellow `#f0cc00` and dark slate `#32373c`
- All "text-white on yellow" buttons fixed to "text-[#32373c] on yellow" for proper contrast
- State page (`/solar/[state]`) updated to use HorizontalTimeline instead of the old 5-step HowItWorks

### Removed
- Original generic 5-step "How it works" component from homepage
- All references to the 30% Federal Investment Tax Credit (eliminated December 31, 2025)
- City-level landing pages (originally 13+) — reduced to state-level only per user feedback
- TX from service area (discontinued)

### Decisions
- Use Vercel + Next.js instead of GHL landing page builder (D1)
- One domain with path-based routing instead of multiple domains/subdomains (D2)
- State-level landing pages instead of city-level (D3)
- Webhook to GHL instead of direct API (D4)
- Address split into 4 fields, no Google Places autocomplete in v1 (D6)
- GHL calendar via iframe embed with URL prefill (D7)
- TypeScript data files for content instead of CMS (D8)
- Brand colors pulled from existing gosimpleflow.com (D9)
- Removed all 30% federal tax credit messaging (D10)
- Horizontal timeline on homepage (D11)
- Interactive savings calculator with optimistic 25-year estimates (D12)
- Privacy + Terms in footer bottom row (D13)

### Verified
- ✅ End-to-end lead flow tested (form → API → GHL webhook → contact created in GHL)
- ✅ All 22 routes build successfully
- ✅ GHL field mapping confirmed in user's GHL workflow

### Known Issues / Pending
- ⏳ `NEXT_PUBLIC_GHL_CALENDAR_URL` env var not yet set in Vercel — schedule button won't show calendar until set
- ⏳ Custom domain not yet pointed at Vercel
- ⏳ Real testimonials, install photos, and Google reviews not yet wired
- ⏳ Vercel post-deploy preview iframe shows 404 (cosmetic only, real URLs work)
- ⏳ State pages still use old `~30 days` text on the install time card (FIX in next commit)

### Commits
| Hash | Message |
|---|---|
| `490e826` | Initial scaffold: Simple Flow marketing site |
| `340e8b2` | Map form fields to GHL snake_case names in lead API |
| `924a911` | Split address into address, city, state, zip fields |
| `cc5eb45` | Rebrand to Simple Flow yellow + dark slate, real logo, schedule embeds GHL calendar |
| `6e11109` | Add 11-step full process roadmap to How It Works page |
| `5235dfe` | Remove 5-step summary; make full process roadmap wide single-column |
| `fbb033f` | Revert process roadmap to alternating left/right timeline layout |
| `1fe83f5` | Update hero: add 'Own your power. Avoid rate hikes.' tagline |
| `d2c3d4a` | Remove 5-step from homepage; horizontal grid roadmap; add blog, gallery, reviews pages |
| `914f7a0` | Add savings calculator + horizontal timeline to homepage; 30-60 day install; privacy/terms in footer bottom |
| _(next)_ | Move calculator into hero; reorder timeline above differentiators; state pages use HorizontalTimeline; add docs |
