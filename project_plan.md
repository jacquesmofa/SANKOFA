# Sankofa Royale Awards & VVIP Gala — Project Plan

## 1. Project Description

A prestigious, ultra-high-end web portal for the annual Sankofa Royale Awards Gala organized by CAWAP (Canadian and African Women Aid Program). The platform serves Black community leaders, entrepreneurs, government officials, VVIP delegates, and philanthropic donors. It showcases the cultural significance of "Sankofa," highlights past honorees, presents award categories, handles ticket/table registrations, and links to the nomination system.

**Core Brand Statement:** "Celebrating and acknowledging Black excellence and the power of Us."

## 2. Page Structure

| Route | Page Name | Purpose |
|-------|-----------|---------|
| `/` | Home (The Gateway) | Hero, countdown, key CTAs, Sankofa story preview, ticket tiers preview, CAWAP preview |
| `/award-night` | The Gala Night | Full agenda, African cuisine menu, performance lineup, paparazzi experience |
| `/sankofa` | Historical Essence | Deep dive into Sankofa meaning, Akan tribe story, crowned bird symbol |
| `/nomination` | Nomination Desk | 2026 award categories, guidelines, link to Google Form |
| `/tickets` | Ticket & Table Desk | Full pricing cards, tier comparison, checkout flow |
| `/cawap` | CAWAP Center | Parent organization info, 12 empowerment areas |
| `/gallery` | Media & Gallery | Lightbox gallery of past events |
| `/contact` | Contact & Sponsorship | Contact form, sponsorship requests |
| `*` | Not Found | 404 page |

## 3. Core Features

- [ ] **VVIP Red Carpet Hero** — Immersive hero with countdown timer, golden accents, event details glass card
- [ ] **Dynamic Countdown Timer** — Live countdown to August 09 gala
- [ ] **Sankofa Story Section** — Interactive scroll-reveal with the crowned bird visual
- [ ] **Nomination Categories Showcase** — 19 award category cards with descriptions
- [ ] **Ticket Tier Display** — 4 premium pricing cards (Single, VIP, VVIP, Platinum VVIP)
- [ ] **Stripe Online Checkout** — Secure credit card payment for ticket purchases
- [ ] **CAWAP Empowerment Grid** — 12 empowerment area showcase cards
- [ ] **Media Gallery** — Lightbox image gallery of past galas
- [ ] **Contact & Sponsorship Forms** — Secure multi-field forms
- [ ] **Glassmorphic Design System** — Semi-transparent cards with gold borders and backdrop blur
- [ ] **Mobile Responsive** — Full breakpoint optimization

## 4. Data Model Design

Since this is primarily a public-facing marketing and ticket site with no user accounts, minimal database storage is needed. Data will mainly come from:

- Mock data files for static content (award categories, CAWAP areas, gallery images)
- Supabase (if connected) for:
  - Contact form submissions
  - Sponsorship inquiry submissions
  - Ticket order records (if stored)

No user authentication tables required (public site).

## 5. Backend / Third-party Integration Plan

| Service | Needed | Purpose |
|---------|--------|---------|
| **Supabase** | Yes | Required for Stripe Edge Functions; optional for form storage |
| **Stripe** | Yes | Online credit card payments for tickets (Single $120, VIP $1000, VVIP $2000, Platinum $3000) |
| **Shopify** | No | Not applicable — direct ticket sales, not product catalog |
| **Google Forms** | External link | Nomination form at https://forms.gle/EhXYvwqBY1i68tZDA |

**Note:** Stripe integration requires Supabase to be connected first, as Stripe secrets are stored in Supabase Edge Function secrets.

## 6. Development Phase Plan

### Phase 1: Foundation & Homepage
**Goal:** Build the core visual foundation and the stunning homepage that captures the brand essence.
**Status:** ✅ COMPLETE
**Deliverable:**
- ✅ Design system with custom colors, fonts, and glassmorphic components
- ✅ Navigation header with mega-menu structure
- ✅ VVIP Red Carpet Hero with countdown timer
- ✅ Homepage sections: Sankofa preview, Nomination categories preview, Ticket tiers preview, CAWAP preview, Gallery preview, Nomination CTA
- ✅ Footer with newsletter subscription, quick links, contact info
- ✅ Routing for all 8 pages with placeholder/full pages
- ✅ Nomination page with all 19 categories
- ✅ Tickets page with 4 tier pricing cards
- ✅ CAWAP page with 12 empowerment areas
- ✅ Gallery page with lightbox
- ✅ Contact page with form
- ✅ Mobile responsive setup

### Phase 2: Content Pages Polish
**Goal:** Build out the remaining informational and showcase pages with rich content.
**Deliverable:**
- 🔴 `/award-night` — Full gala agenda, African cuisine menu, performance lineup
- 🔴 `/sankofa` — Deep Sankofa story page with Akan culture content
- 🔴 Additional homepage scroll-reveal animations and golden shimmer hover effects
- 🔴 SEO meta tags, Open Graph tags, Schema.org structured data

### Phase 3: Ticket Purchase & Payments
**Goal:** Implement the full ticket purchase flow with Stripe checkout.
**Deliverable:**
- ⬜ Supabase connection (required for Stripe)
- ⬜ Stripe connection and integration setup
- ⬜ Supabase Edge Function for Stripe checkout session creation
- ⬜ Order confirmation page

### Phase 4: Final Polish & Optimization
**Goal:** Final visual polish, animations, and performance tuning.
**Deliverable:**
- ⬜ Performance optimization (lazy loading, image optimization)
- ⬜ Final responsive testing and bug fixes
- ⬜ Any remaining content updates