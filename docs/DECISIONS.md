# Architecture Decisions

This file records the key technical and product decisions made for the Simple Flow marketing site, with the reasoning behind each.

---

## D1: Next.js + Vercel over GoHighLevel landing pages

**Date:** 2026-04-07
**Decision:** Build the marketing site as a custom Next.js app on Vercel instead of using GoHighLevel's built-in landing page builder.

**Reasoning:**
- Full control over SEO (city pages, schema, meta tags) — GHL pages are SEO-weak by default.
- Same platform as SimpleFlow Dashboard (Vercel) — single management surface.
- Faster page load (Vercel CDN) and zero-downtime deploys.
- Free tier covers current scale.
- Easier to add custom interactivity (savings calculator, multi-step funnel).

**Trade-offs:**
- Requires code changes for content updates instead of WYSIWYG editing.
- Marketing team can't edit copy directly without a CMS.

---

## D2: One domain (path-based routing) over multiple domains or subdomains

**Date:** 2026-04-07
**Decision:** Use a single domain (`gosimpleflow.com`) with path-based routing for state pages (`/solar/ny`, `/solar/pa`, etc.) instead of subdomains or separate domains.

**Reasoning:**
- Multiple domains hurt SEO — each must build authority separately.
- Subdomain split (`ny.gosimpleflow.com`) is the worst of both worlds.
- One domain consolidates link equity and makes analytics simpler.

**Trade-offs:**
- All pages share the same brand/template — can't fully customize per market.

---

## D3: State-level landing pages instead of city-level

**Date:** 2026-04-07 (revised mid-session)
**Decision:** Build one landing page per state (7 total) instead of one per major city (originally planned 13+).

**Reasoning:**
- User feedback: too granular for current sales volume.
- Easier content maintenance.
- Can revisit city-level later as SEO need grows.

**Trade-offs:**
- Loses some hyper-local SEO opportunity (Long Island specific search, etc.).

---

## D4: Webhook to GHL (not direct API) for lead capture

**Date:** 2026-04-07
**Decision:** Lead form posts to a GHL inbound webhook, not the GHL REST API directly.

**Reasoning:**
- Simpler — one POST, no auth headers, no PIT token rotation worries.
- Uses existing GHL workflow infrastructure (tagging, SMS, calendar booking).
- Lead automatically flows from GHL into SimpleFlow Dashboard via existing project webhook — no new integration.
- One source of truth — GHL is already where contacts live.

**Trade-offs:**
- Less control over field mapping at the moment of lead creation.
- Webhook URL is the only "auth" — if leaked, anyone can submit fake leads.

---

## D5: Match LeadSimple deals by name, not by `leadsimple_id`

**Date:** Inherited from SimpleFlow Dashboard work, 2026-04-06
**Decision:** When syncing from SimpleFlow → LeadSimple, search deals by project name in the PM pipeline, not by stored `leadsimple_id`.

**Reasoning:**
- `leadsimple_id` column has dirty data (URLs + UUIDs mixed).
- Name search uses 1 API call vs 3 (avoids GHL phone lookup + LS contact search).
- Project names map cleanly to LS deal names since the GHL→LS sync sets them that way.

**Trade-offs:**
- Name duplicates could cause false matches. Mitigated by filtering to PM pipeline only.

---

## D6: Address split into 4 fields (not Google Places autocomplete)

**Date:** 2026-04-07
**Decision:** Quote form Step 1 collects address, city, state (dropdown), zip as 4 separate fields. Did not add Google Places autocomplete in v1.

**Reasoning:**
- Google Places needs an API key with billing setup — wanted to ship faster.
- Splitting upfront makes GHL field mapping cleaner.
- State dropdown limited to the 7 service-area states acts as a soft DQ filter.

**Trade-offs:**
- More fields = more friction. Can upgrade to autocomplete later.

---

## D7: GHL calendar via iframe embed (not a popup or new tab)

**Date:** 2026-04-07
**Decision:** When user clicks "Schedule a virtual consultation now," embed the GHL calendar widget in an iframe inline (after lead is submitted) and prefill name/email/phone via URL params.

**Reasoning:**
- Keeps the user on the Simple Flow domain.
- Prefilling cuts re-typing friction by ~60%.
- iframe is simpler than building a custom calendar UI.

**Trade-offs:**
- iframes can be blocked by some browsers.
- Calendar styling is GHL's, not Simple Flow's.

---

## D8: TypeScript data files for content (not a CMS)

**Date:** 2026-04-07
**Decision:** Store testimonials, blog posts, installations, states, and incentives as TypeScript files in `/content/` and `/lib/` instead of integrating a headless CMS (Contentful, Sanity, etc.).

**Reasoning:**
- Type-safe — TypeScript catches errors at build time.
- Version controlled — changes go through git.
- Free — no CMS subscription.
- Fast — no extra API calls at build time.
- Sufficient for current content volume (~30 items total).

**Trade-offs:**
- Marketing team needs developer help to add content.
- Doesn't scale past ~100 items per type.

---

## D9: Brand colors taken from existing gosimpleflow.com

**Date:** 2026-04-07
**Decision:** Use `#f0cc00` (yellow) as primary, `#32373c` (dark slate) as secondary, `#fffdf1` (cream) as background tint. Pulled from the existing public site to maintain visual continuity.

**Reasoning:**
- Customers recognize the brand from the existing site.
- Simpler than creating a new identity.
- Yellow = energy/sun, fits solar industry conventions.

**Trade-offs:**
- Yellow + dark slate is harder to get right on buttons (must use dark text on yellow for contrast). Required several pass-throughs to fix `text-white` on yellow combos.

---

## D10: Removed 30% federal tax credit messaging

**Date:** 2026-04-07
**Decision:** All references to the 30% Federal Investment Tax Credit have been removed from the site. The credit ended December 31, 2025 and is no longer available for residential installations.

**Reasoning:**
- Misleading customers with outdated incentive info is illegal and harmful.
- Site needed to reposition around what remains: state incentives, rate hedge, $0 down financing, net metering, property value.

**Trade-offs:**
- Lost the single biggest historical sales driver. Need stronger value props elsewhere.

---

## D11: Horizontal timeline on homepage (not 5-step summary)

**Date:** 2026-04-07 (revised after user feedback)
**Decision:** Replaced the homepage's 5-step "How it works" with the full 11-step horizontal timeline component. The 5-step component is now unused.

**Reasoning:**
- User said the 5-step was too generic.
- Full 11-step is more transparent — shows everything Simple Flow handles.
- Horizontal layout reads like a real journey/roadmap.

**Trade-offs:**
- More vertical space on homepage.
- Horizontal scroll required on mobile (timeline min-width 1100px).

---

## D12: Interactive savings calculator with optimistic estimates

**Date:** 2026-04-07
**Decision:** Built a slider-based savings calculator on the homepage that lets users adjust their monthly bill ($50–$800) and shows monthly/yearly/25-year savings live. Uses 1.5× inflation factor for the 25-year total.

**Reasoning:**
- User explicitly asked for "highest possible amount" estimates.
- Interactive elements significantly increase time-on-page and conversion.
- Range-based estimates avoid the legal risk of giving exact quotes.

**Trade-offs:**
- Optimistic estimates can disappoint customers if their actual savings come in lower.
- Mitigated by disclaimer text under the calculator.

---

## D13: Privacy + Terms in footer bottom row, not in column nav

**Date:** 2026-04-07
**Decision:** Privacy Policy and Terms of Service links live in the footer's bottom horizontal bar (next to copyright), not in the Company column.

**Reasoning:**
- Industry standard — most sites put legal links in the bottom strip.
- Reduces visual clutter in the main footer columns.
- Easier for users (and Google) to find legal pages where they're expected.
