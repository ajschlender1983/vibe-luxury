---
name: vibe-launch
description: >
  The operating system for VIBE (Bioharmonic / healwithvibe) launch work — brand system,
  funnel, sales principles, collateral, image pipeline, and deploy. Use this whenever you
  build, edit, or extend anything VIBE-branded: landing pages, the Command Center, the
  Production Hub, collateral, scripts, decks, or generated imagery. It keeps every surface
  consistent, on-voice, and shippable.
---

# VIBE Launch — build system

VIBE is Dr. Steven Schwartz's vibroacoustic wellness bed (the **HyperVIBE**). Positioning:
**"It all begins in the body"** and **"Peace is a vibe."** The wedge is **longevity + the
mitochondria**; the moat is **the frequency** (specific tuning that generic sound beds can't
replicate). Everything below keeps new work matching what's already shipped.

## Repo & deploy
- Repo: `github.com/ajschlender1983/vibe-luxury` → GitHub Pages. Local: `/Users/adamschlenderwork/dev/vibe-luxury`.
- Deploy: `git add … && git commit && git push origin main`. Pages rebuilds in ~40–90s.
  Poll `gh api repos/ajschlender1983/vibe-luxury/pages/builds/latest`, then verify the live URL
  with `curl` (200) **and** cache-bust in the browser (`?v=…`) — Pages/CDN serves stale copies for a minute.
- Do **not** put VIBE work on the FeelOPUS/opus-os company repo. It lives on Adam's personal account.

## The surfaces (all live)
| Surface | Path | What it is |
|---|---|---|
| Landing (V3) | `/index-v3.html` | The Founding-50 site. One action: **Apply**. |
| Application flow | `/apply/` | Multi-step application (not checkout), B2C/B2B split, referral-tracked. |
| Production Hub | `/film/` | One link bundling the shooting script + full storyboard (tabs). |
| Storyboard | `/storyboard/` | Rendered acts. Only reachable *inside* the Production Hub. |
| Book landing | `/learn/` | Free-chapter lead capture (top of funnel). |
| Practitioner one-pager | `/practitioners/` | B2B: ROI calculator + protocol + massage-table fit. |
| Sales scripts | `/scripts/` | Resonance call, practitioner outreach, OPUS-credit DM. |
| Command Center | `/command/` | Internal package for Steven: digest, councils, funnel, download. `noindex`. |

## Brand system (match exactly)
- **Tokens** (RGB triples for `rgb(var(--x)/α)`): `--violet:128 60 238` · `--violet-soft:168 130 246` ·
  `--cream:255 250 247` · `--aubergine:27 15 46` · `--aubergine-2:15 9 24` · `--metal:203 185 160`.
  Gold accents (hex): `--gold-1:#f7e8b4` `--gold-2:#e4c56b` `--gold-3:#a37f2c` · champagne `#e9c89a`.
  Semantic: good `#8fe3b0`, warn `#e8b45a`, bad `#e0736b`. Dark grounds only — never a white page.
- **Type**: display **Abel** + body **Roboto**, both served locally from `/assets/fonts/*.woff2`.
- **Voice**: calm, honest, body-first. Deliberate short fragments are on-brand ("Peace is a vibe.").
  Run the humanizer against marketing prose (kill AI-neat phrasing, em-dash pile-ups, "difference
  between X and Y", superficial -ing, false ranges) — but keep the poetic brand lines.
- **Proof, framed honestly**: "in our mitochondrial testing" — **−25% free radicals** after one
  20-min session, **rising OCR** over 7 days (Steven's TED talk). Wellness claims, not medical.
  The head-to-head baseline study vs. other vibroacoustics is the credibility keystone to run.

## The funnel (two ICPs)
- **B2C — the HNW biohacker**: longevity clinics, biohacking events, Attia/Huberman audiences,
  Oura/Whoop communities, family offices. Motion: book (lead magnet) → nurture on the proof →
  Mexico retreat as the hook → application → resonance call.
- **B2B — the practitioner**: functional-med/longevity networks, practitioner groups, the warm
  **OPUS commercial groups**. Motion: one-pager + ROI → DM OPUS leads with the deposit-credit
  offer → demo → pilot. Frame: treatment room → destination.
- Cold traffic never applies on first touch — every ICP gets a top and middle of funnel.

## Sales principles (apply to all collateral, scripts & flows)
1. Conviction > words — 80% is your certainty, 20% is what you say. People buy because they feel understood.
2. Know the buyer: young → the dream; older → security; owners → time; alphas → make it their idea; betas → a clear game plan + empowerment.
3. 80/20 — they talk, you ask. Whoever asks the questions controls the conversation.
4. Sell the sizzle, not the steak. Don't over-educate.
5. It's a dance — push then pull. Buy on emotion, justify with logic.
6. Sell the gap: where they are vs. where they want to be.
7. Understand before you pitch. Make them sell themselves; push past smoke screens.
8. The first objection isn't the real one — objections are a buying decision being processed.
9. Common ground is where the deal is found.
10. After you say the price, shut up. Real urgency, not "one spot left." Slow down.

## Image pipeline
- **Higgsfield CLI** (`/opt/homebrew/bin/higgsfield`, acct ajschlender@gmail.com). Model: **`nano_banana`**
  (NOT `_2`/`_flash`/`_pro`). Aspect ratios incl. 1:1,3:2,4:3,3:4,9:16,16:9,21:9; up to 8 `--image-references`.
- **Device fidelity**: condition on `storyboard/gen/hf/contact-sheet.png` + explicit form-factor guardrails
  ("cream swirl-quilt fills the surface flush; birch arch sits LOW underneath; no side rails winging out").
- **Character consistency**: Higgsfield **Soul** (`soul_cinematic --custom-reference-id <id>`); train from 5–20
  portraits; describe the scene in the prompt (don't pass a scene image-ref — it overrides the Soul).
- Advisor/portrait avatars: warm hand-illustrated circular style, conditioned on the fundraising-board avatars.
- Always **render every generated image and look at it** before shipping — verify form factor, no baked text.

## Councils
Two advisory councils reviewed the package (simulated personas, not real endorsements — label them so):
**Brand & GTM** — Hormozi, Godin, Watts, Jobs, Sutherland + **Jony Ive** (design bonus seat).
**Fundraising board** — Andreessen, Musk, Naval, Chamath + **Kirsten Green** (wellness-hardware 5th seat).
Fundability is milestone-gated (member-sourced demand, margins, the baseline study), not polish-gated.

## Guardrails
- Wellness claims only until the study + counsel are in place; the PTSD–mitochondria angle is a story and
  a market, never a medical claim.
- Payment/lead capture: build the UI, but the founder wires the real Stripe/Gumroad + email endpoint
  (placeholders are flagged in-file: `PAYMENT_URL`, `LEAD_ENDPOINT`).
- Progressive disclosure on dense internal pages: a 2-minute executive digest on top, deep sections folded.
