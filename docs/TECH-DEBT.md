# Technical Debt

Known issues, shortcuts, and things to revisit. Sorted by priority.

---

## P0 — Should fix soon

### TD1: Hardcoded testimonials are placeholders
**File:** `content/testimonials.ts`
**Issue:** All 5 testimonials are made-up names ("Sarah M.", "Mike R.", etc.). They look real but aren't. This is misleading to visitors and a legal/ethical risk.
**Fix:** Replace with real customer reviews (with permission), or pull live from Google Business Profile via Places API.

### TD2: Reviews page is a placeholder
**File:** `app/reviews/page.tsx`
**Issue:** Page shows "Reviews coming soon" with a link to a Google search. Not actually integrated with any review source.
**Fix:** Either manually paste reviews into a data file, or wire to Google Places API with the place_id and an API key.

### TD3: Gallery has no real photos
**File:** `app/gallery/page.tsx`, `content/installations.ts`
**Issue:** All 9 install cards show a sun emoji placeholder. No real install photos.
**Fix:** User to drop photos in `public/installations/` and update `imageUrl` in `content/installations.ts`.

### TD4: Vercel post-deploy preview iframe shows 404
**Issue:** When deploying, the Vercel "Congratulations" page shows a 404 in the embedded preview. The actual deployed URL works fine, but this is confusing.
**Possible cause:** Next.js 16 is brand new (16.2.2) and Vercel's preview iframe may not handle it well.
**Fix:** Either ignore (cosmetic only) or downgrade to Next.js 15.5 + React 19.0 (the rock-solid combo on Vercel).

---

## P1 — Should fix when convenient

### TD5: Quote form address has no autocomplete
**File:** `app/quote/page.tsx`
**Issue:** Address is 4 separate fields (street, city, state, zip) with no Google Places autocomplete. Adds friction.
**Fix:** Integrate Google Places API. Needs API key + billing setup.

### TD6: GHL webhook URL has no signature verification
**File:** `app/api/lead/route.ts`
**Issue:** Anyone who knows the webhook URL can fire fake leads. There's no auth between our API and GHL.
**Fix:** Add a shared secret header or HMAC signature. Or at least rate-limit the `/api/lead` endpoint.

### TD7: SavingsCalculator + HeroCalculator duplicate state logic
**Files:** `components/SavingsCalculator.tsx`, `components/HeroCalculator.tsx`
**Issue:** Two calculator components with the same math, slightly different UIs. SavingsCalculator is now unused (homepage uses HeroCalculator).
**Fix:** Either delete SavingsCalculator (if confirmed unused) or extract a shared `useSavings(bill)` hook.

### TD8: HowItWorks 5-step component is unused
**File:** `components/HowItWorks.tsx`
**Issue:** Was the original 5-step layout. After multiple revisions, now only the 11-step `HorizontalTimeline` is used. HowItWorks is not imported anywhere.
**Fix:** Delete the file.

### TD9: FullProcess (alternating timeline) unused on homepage
**File:** `components/FullProcess.tsx`
**Issue:** Used on `/how-it-works` only. Slightly redundant with HorizontalTimeline.
**Fix:** Decide whether to use FullProcess (alternating left/right) or HorizontalTimeline (single horizontal row) consistently. Currently homepage uses Horizontal, /how-it-works uses FullProcess.

### TD10: TypeScript content files don't scale
**Files:** `content/*.ts`
**Issue:** Adding blog posts, testimonials, or install photos requires a developer to edit a TS file and push.
**Fix:** Wire to a CMS (Sanity, Contentful, or Notion) when content volume exceeds ~50 items.

### TD11: No analytics installed
**Issue:** No Google Analytics, Plausible, Vercel Analytics, or any other tracking. We have no idea who's visiting or where they drop off.
**Fix:** Add Vercel Analytics (free, 1-line install) at minimum. Add GA4 for full attribution.

### TD12: No sitemap.xml or robots.txt
**Issue:** Search engines can't easily crawl the site structure.
**Fix:** Add `app/sitemap.ts` (Next.js native) and `app/robots.ts`.

### TD13: No social sharing image (OG image)
**Issue:** When the site is shared on Facebook, LinkedIn, etc., it uses the default Vercel image.
**Fix:** Generate an OG image (1200×630) with logo + tagline and add to `app/layout.tsx` metadata.

### TD14: Calendar URL is a public env var
**Issue:** `NEXT_PUBLIC_GHL_CALENDAR_URL` is exposed in the client bundle. Not a security risk (it's a public booking link), but if you ever rotate it, you have to redeploy.
**Fix:** Only an issue if rotated frequently. Document the rotation procedure.

---

## P2 — Nice to have

### TD15: No CMS for blog posts
**Issue:** Adding a blog post requires editing `content/blog-posts.ts`, writing markdown-ish body in a TS string template, and pushing to git.
**Fix:** MDX support or a headless CMS.

### TD16: No email lead magnet funnel
**Issue:** Originally planned `/free-solar-guide` PDF download funnel was deferred. No way to capture top-of-funnel emails.
**Fix:** Build the funnel + create the PDF.

### TD17: No live chat widget
**Issue:** No real-time engagement option. Phone or quote form only.
**Fix:** Tawk.to (free), Intercom, or GHL chat widget.

### TD18: City-level pages not built
**Issue:** Original plan included Long Island, Hudson Valley, Brooklyn, etc. as separate pages. Was reduced to state-level only.
**Fix:** Revisit when SEO needs more granularity. Templates can be reused.

### TD19: No structured data (JSON-LD)
**Issue:** No FAQ schema, LocalBusiness schema, Review schema, or Article schema. Missing rich result opportunities in Google.
**Fix:** Add JSON-LD blocks to relevant pages (FAQ, state pages, blog posts, reviews).

### TD20: Hardcoded brand colors not in Tailwind config
**Issue:** Uses `[#f0cc00]`, `[#32373c]` arbitrary values everywhere. If brand colors change, every file needs editing.
**Fix:** Add to `tailwind.config.ts` as named colors (`brand-yellow`, `brand-slate`).

### TD21: Footer service-areas list duplicates state pages array
**Issue:** Footer has hardcoded list of 7 states. `lib/states.ts` has the same data. Two sources of truth.
**Fix:** Render footer state list from `STATES` array.

---

## Resolved

### TD-R1: Address was a single field (resolved 2026-04-07)
Originally collected as one freeform string. Split into address, city, state, zip per user request.

### TD-R2: Hero CTA had no clear value prop (resolved 2026-04-07)
Originally just "Get a quote". Now has full headline + tagline + savings calculator inline.
