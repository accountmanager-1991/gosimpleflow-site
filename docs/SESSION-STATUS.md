# Session Status

**Last updated:** April 7, 2026
**Project:** gosimpleflow-site (marketing website)
**Repo:** https://github.com/accountmanager-1991/gosimpleflow-site
**Hosting:** Vercel (Emozca LLC team)
**Status:** Live, awaiting custom domain cutover

---

## Current State

### Live & Working
- **Hosting:** Vercel — auto-deploys on push to `main`
- **Tech stack:** Next.js 16.2.2 + TypeScript + Tailwind 4 (Turbopack)
- **Lead capture:** Form → `/api/lead` → GHL inbound webhook → GHL workflow → contact + opportunity
- **GHL webhook URL:** `https://services.leadconnectorhq.com/hooks/PndjFMYDP78p6bJ4E9rB/webhook-trigger/7c56e8c0-3c4d-4a74-90b8-1d3f573ee856`
- **GHL calendar (booking):** `https://links.gosimpleflow.com/widget/booking/TcbG84gueAfG5uqwcCH8`
- **First test lead** received and confirmed in GHL on 2026-04-07

### Pages Built (22 total routes)
| Path | Purpose |
|---|---|
| `/` | Homepage — hero, trust bar, differentiators, savings calculator, horizontal timeline, testimonials, CTA |
| `/quote` | 7-step lead funnel with savings estimate + GHL calendar embed |
| `/how-it-works` | 11-step alternating timeline roadmap |
| `/financing` | Cash, loan, lease, PPA explainer |
| `/incentives` | State-by-state 2026 incentive guide |
| `/about` | Company story |
| `/faq` | FAQ accordion |
| `/contact` | Phone + quote CTA |
| `/blog` | Blog index (3 sample posts) |
| `/blog/[slug]` | Individual post pages |
| `/gallery` | Install gallery (placeholder cards, real photos pending) |
| `/reviews` | Reviews page (placeholder, awaiting Google Business reviews) |
| `/privacy` | Privacy policy (TCPA + GHL compliant) |
| `/terms` | Terms of service (16 sections, mirrors Emozca structure) |
| `/solar/[state]` | 7 state landing pages (NY, PA, MD, NJ, CT, MA, CA) |
| `/api/lead` | Lead capture API → GHL webhook |

### Brand
- **Primary:** `#f0cc00` (yellow/gold) — pulled from existing gosimpleflow.com
- **Secondary:** `#32373c` (dark slate)
- **Accent / hover:** `#c9a700` (darker gold)
- **Background tint:** `#fffdf1` (cream)
- **Logo:** `/public/brand/logo.png` (downloaded from existing site)
- **Tagline:** "Solar Made Simple" (in hero pill) + "Own your power. Avoid rate hikes." (sub-headline)

### Form Fields → GHL Mapping
| Form (camelCase) | GHL Webhook (snake_case) |
|---|---|
| firstName | first_name |
| lastName | last_name |
| email | email |
| phone | phone |
| address | address |
| city | city |
| state | state |
| zip | postal_code |
| bill | bill |
| homeowner | homeowner |
| roofAge | roof_age |
| credit | credit_650_plus |
| schedule | schedule_choice |
| (constant) | source = "gosimpleflow.com" |
| (constant) | funnel = "main_quote" |
| (auto) | submitted_at (ISO datetime) |

### Environment Variables Needed in Vercel
| Key | Value | Status |
|---|---|---|
| `GHL_LEAD_WEBHOOK_URL` | https://services.leadconnectorhq.com/hooks/PndjFMYDP78p6bJ4E9rB/webhook-trigger/7c56e8c0-3c4d-4a74-90b8-1d3f573ee856 | **Set & confirmed** |
| `NEXT_PUBLIC_GHL_CALENDAR_URL` | https://links.gosimpleflow.com/widget/booking/TcbG84gueAfG5uqwcCH8 | **Pending — user to add** |

---

## What's NOT Done Yet

### High Priority
- [ ] **Custom domain cutover** — site is on `gosimpleflow-site.vercel.app`. Need to point `gosimpleflow.com` (or a new subdomain) to Vercel after content review.
- [ ] **Real install photos** — `/gallery` shows placeholder cards. Need user to drop photos in `public/installations/` and update `content/installations.ts`.
- [ ] **Real Google reviews** — `/reviews` page shows "coming soon". Either manually paste reviews OR wire to Google Places API.
- [ ] **Replace placeholder testimonials** on homepage with real customer reviews.
- [ ] **Set `NEXT_PUBLIC_GHL_CALENDAR_URL`** in Vercel and redeploy so the schedule button works.

### Medium Priority
- [ ] **Vercel 404 issue from earlier** — user reported a 404 in the post-deploy preview iframe. Likely a Next.js 16 quirk; if production URL works, ignore. Otherwise downgrade to Next 15.5.
- [ ] **Wire site footer TCPA disclosure to /privacy and /terms links** — done in form's TCPA box but verify the language matches GHL/A2P 10DLC submission requirements.
- [ ] **Email collection** — currently no `/free-solar-guide` lead magnet funnel built. Was in original plan, deferred.
- [ ] **Battery/EV upgrade funnel** — also in original plan, deferred.
- [ ] **Commercial funnel** — deferred.
- [ ] **Sitemap.xml + robots.txt** — not yet generated.
- [ ] **OG image** for social sharing — not customized.
- [ ] **Google Analytics or Plausible** — not added.

### Low Priority
- [ ] **More blog content** — only 3 sample posts. Need real content cadence.
- [ ] **City-level subpages** — user originally wanted city pages but switched to state-only. Can revisit later for SEO.
- [ ] **Live chat widget** — none yet.

---

## Recent Activity (Session 1 — 2026-04-07)

See `CHANGELOG.md` for the commit-by-commit log. High-level:

1. **Scaffolded the project** with Next.js 15, set up structure
2. **Built homepage, quote funnel, 7 state pages, and supporting pages**
3. **Wired lead capture** to GHL webhook with test confirmation
4. **Rebranded** to match existing Simple Flow colors and logo
5. **Added GHL calendar embed** for "Schedule virtual consultation now"
6. **Added blog, gallery, reviews pages** as scaffolds
7. **Added privacy + terms pages** mirroring Emozca structure
8. **Added interactive savings calculator** to homepage
9. **Replaced 5-step summary** with horizontal 11-step timeline on homepage
10. **Updated install timeframe** from "30 days" to "30-60 days" everywhere
11. **Moved Privacy/Terms** to footer bottom row
