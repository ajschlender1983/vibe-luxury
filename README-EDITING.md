# Editing this site — healwithvibe.com recreation

This is a **self-contained static copy of the whole core site** — the homepage plus every
page reachable from the nav and footer (23 pages). No Shopify, no build step, no server
needed. Open `index.html` in any browser (double-click it) and click through — internal
links between the recreated pages work offline.

```
healwithvibe/
├── index.html          ← EVERYTHING you edit for text & images lives here
├── styles/
│   └── theme.css        ← the site's full stylesheet (kept verbatim; rarely touched)
├── js/                  ← (empty — the only scripts are inline in index.html)
├── assets/
│   ├── images/          ← all 13 images + press logos + icons
│   └── fonts/           ← Abel (headings) + Roboto (body), served locally
└── README-EDITING.md    ← this file
```

## The full site — pages included

The URL structure mirrors the original, so links stay intact:

- `index.html` — homepage
- `products/` — VIBE PRO, VIBE GO, HyperVIBE, MedMat Pro, HW600, Molecular Hydrogen
- `collections/` — `all.html` (Shop All), `vibe-beds.html`
- `pages/` — FAQ, financing-options, about-dr-steven-schwartz, contact-us-1, find-your-vibe,
  vibe-comparison, vibe-systems-limited-warranty, refund/shipping/privacy/terms policies,
  payment-options, book-your-call, customer-support

**Internal links:** links to any of these 23 pages point to the local file; links to pages
NOT recreated (e.g. `/cart`, `/account`, blog posts, other products) point back to the live
`healwithvibe.com` so nothing dead-ends. Every page shares the one `styles/theme.css`,
the fonts, and the header/footer — so re-styling in the token block affects the whole site.

**Product pages** were built with the GemPages page-builder. Notes for editing them:
- Images were "de-lazyloaded" (real URL promoted into `src`), so what you see is what loads.
- The **Add-to-Cart form is neutralized** (`action="#"`) — it won't post to a dead cart.
  Point it at a live store URL or wire up your own checkout when ready.
- A tiny inline script (top of each page) reveals GemPages sections, opens accordions, and
  hides any image that 404s. It replaces the removed GemPages/Shopify runtime.
- Two customer-review photos on VIBE PRO/GO are 404 **on the live store itself**, so they're
  auto-hidden here too (nothing we could download).

## 1. Change TEXT

All copy is plain text inside `index.html`. Open it, **Find (⌘F / Ctrl-F)** the words you
see on the page, and edit them in place. Every major section is marked with a big
comment banner so you can scroll and find it:

```
<!-- ====================================================
     SECTION · PRODUCTS — 'Find the VIBE That Fits Your Life'
     Three product cards. Prices ... are plain text below.
     ==================================================== -->
```

Sections in order: **HERO → BRIDGE → (video testimonials) → WHO IT'S FOR → PRODUCTS →
FAQ → TIMELINE (First 90 Days) → FOUNDER (Dr. Schwartz) → press logos → store locator →
CLOSING CTA → footer.**

## 2. Change COLORS & FONTS (re-style the whole site)

Open `index.html` and Find: **`RE-STYLE THE WHOLE SITE HERE`**. That block holds the
brand design tokens. Colors are written as space-separated RGB triplets (`R G B`):

| Token | Current value | Controls |
|---|---|---|
| `--accent` | `128 60 238` (violet #803cee) | Links, primary buttons, badges, highlights |
| `--text-primary` | `26 26 26` (#1a1a1a) | All body + heading text; borders & shadows are derived from it |
| `--background-primary` | `255 255 255` (white) | Page background |
| `--header-background` / `--footer-background` | `255 250 247` (warm #fffaf7) | Header & footer bands |

Change those few values and most of the site re-themes automatically (borders, shadows and
ghost buttons are computed from them). **Keep the `R G B` triplet format** — don't convert
to `#hex`, or the derived colors break.

**Fonts:** search `--heading-font-family` (Abel) and `--text-font-family` (Roboto) in the
same area. To use a new font, add its files to `assets/fonts/`, add an `@font-face` block,
and change those two values.

## 3. Change IMAGES

Drop a replacement into `assets/images/` and point the `<img src="...">` at it. Current images:

| File | Used for |
|---|---|
| `Remove_the_orange_VIBROPHILE_banner...png`, `Professional_product_photography_of_the_HyperVibe...png`, `Professional_product_photography_placing_this_exac...png`, `Create_a_square_format...png` | Hero + product photography |
| `oie_Rcuu4eUyxdcH.png` | VIBE header logo |
| `oie_10312I6uuD2nB_1.png` | Social-share (og) image |
| `d5e1bf3f-...webp` | Dr. Steven Schwartz portrait |
| `US-Reporter.png`, `New-York-Weekly.png`, `the-chicago-journal.png`, `biohack-yourself.png` | Press-logo strip (white logos on a dark band) |
| `Amazon_icon.png` | Amazon buttons |
| `1Artboard_1.png` | Favicon |
| `checkmark.svg`, `cursor-zoom-in/out.svg`, `cursor-close.svg` | Theme icons/cursors |

## 4. Live embeds (external, kept exactly as the original)

These are third-party widgets — they still work and pull live data from their providers.
Everything else (all images, fonts, CSS) is fully localized/offline; only these stay live
because they *are* live functionality:

- **Video testimonials** ("Real Stories…", homepage) — Firework (`fwcdn3.com`/`fireworktv.com`).
- **Lead-capture form** (homepage) — LeadConnector (`leadconnectorhq.com` + `form_embed.js`).
- **Store-locator map** ("Find a VIBE Near Me", homepage) — Progus (`sl-widget.proguscommerce.com`).
- **Book-a-Call calendar** (`pages/book-your-call.html`) — Konvert (`tool.konvert.io`).
- **Customer-support calendar** (`pages/customer-support.html`) — bizbeseen (`link.bizbeseen.com`).

If you ever want a fully offline page, delete those three blocks (each is labeled) and
they'll simply disappear.

## What was removed vs. the live site

Everything visible was kept **pixel-, word-, and image-for-word identical**. Only invisible
Shopify plumbing was stripped: cart/checkout runtime, analytics/tracking (GTM, web-pixels),
the search API, and app loaders. The shopping-cart / account / search icons remain in the
header for visual fidelity but no longer perform Shopify actions — repoint their links (or
remove them) as you like.
