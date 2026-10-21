# Radush Technologies — Website (v12: orange + brown theme)

Plain HTML/CSS/JS. No build step, no framework — open any `.html` file in a
browser and it works. Easy to hand-edit, easy to hand off to anyone.

## Structure

```
index.html                 Home
about.html                 About us
services.html              Services (5 capability tiles)
products.html               Products hub (links to the 5 product pages below)
product-minerva.html        Minerva — flagship product, full write-up
product-ec-hyre.html        eC-hyre — full write-up
product-qrcode4you.html     QRcode4you — full write-up (from the QRcode4you copy document)
product-formatflex.html     Formatflex — full write-up
product-eval-ai.html        eVal.ai — full write-up
contact.html                Contact (Bangalore HQ only)
legal.html                  Privacy / Terms / Refund (tabbed, Razorpay-based)
book.html                   "SRE as a Business Capability" book page (carried over as-is)
404.html                    Not-found page

css/main.css                 Design system: colors, type, layout, components
js/main.js                   Mobile nav, legal tabs, contact form handler
assets/                      Logos (logo.png for light bg, logo-dark.png for dark bg), badges,
                             portraits, book cover, hero + product artwork (SVG)
_redirects                   Netlify redirect rules
```

## How to edit content

Every page is plain HTML — find the text in the file and change it directly.
There's no templating engine at runtime; the shared header/footer are simply
copy-pasted into every page (so they render instantly with zero JS), which
means editing the nav or footer means updating it in each file. If that
becomes a hassle as the site grows, this is the natural point to introduce a
static site generator or a CMS — see "What's next" below.

## Design tokens (css/main.css)

- Brand orange: `#F27B22` (close to the logo's orange); brown scale (tokens still named `--black`, `--ink`, `--charcoal`) used for backgrounds and gradients
- Display font: Space Grotesk · Body font: Inter (loaded from Google Fonts)
- All colors, spacing and type sizes are defined as CSS custom properties at
  the top of the file — change a value there and it updates everywhere.

## Changes in v15 (review round 5, home page)
- Hero image replaced with `assets/hero-art-b.svg` (delivery dashboard in orange and brown, showing the five services). The old `hero-art.svg` was removed.
- Hero art is larger and no longer fades at the bottom (`.home` override at the end of css/main.css).
- "Partnering with Teceze" strip removed.
- All five home product card links now read "View Product Details →".
- Home product cards are now light (white body, brown illustration panel) to match the capability cards (`.home` override at the end of css/main.css).

## Changes in v14 (review round 4, products page)

1. products.html: the five product cards are now in a 3 + 3 grid on desktop (sixth slot free for a new product),
   with smaller images (200px tall), titles above the descriptions, and slightly smaller text. Two columns on tablets, one on phones.

## Changes in v13 (review round 4, home page)

1. Company name: the hero pill now reads "Radush Technologies · Bengaluru" (name in bold white), and the
   "Why do clients choose our services?" section says "At Radush Technologies, we combine…".
2. Hero is more compact: smaller headline (two lines), less space above and below, smaller artwork.
3. Tighter spacing and slightly smaller headings in all home page sections, tiles and the closing band.
4. Product cards: shorter images, smaller padding, and a 3 + 3 grid on desktop (sixth slot free for a new product).
All home-only styles are scoped to `body.home` at the end of main.css; other pages are unchanged.

## Changes in v12 (review round 3)

1. QRcode4you page, "Twelve smart solutions": each card now shows its product logo
   (supplied PNGs, blue kept as is) in the top left corner in place of the number.
   Logos live in `assets/qr/` (e.g. `MyQR_KNOCK.png`), shown at 72px via `.feature .logo` in main.css.
2. Card names changed to the "MyQR KNOCK" style (MyQR KNOCK, MyQR HELP, ... MyQR PARKING).

## Placeholder content

All five product pages now have full write-ups. One placeholder remains:
- book.html — the two "Buy" buttons point to `YOUR_BUY_LINK`; replace with the real purchase link.

## What's next (not built yet, by design — structure first)

1. **Razorpay checkout** for book purchases and Minerva usage.
2. **Netlify Function** to securely call the Anthropic API for the
   roulette/interactive feature (keeps your API key off the frontend).
3. **Decap CMS** (or similar) so you can publish blog/news content yourself
   without touching code.

## Deploying

1. Create your own Netlify account (if you haven't already) — don't reuse
   the old builder's account.
2. Drag this whole folder into Netlify's "Deploy manually" upload area, or
   connect it to a GitHub repo you own for continuous deployment.
3. Point your domain (radush.io) at the new Netlify site once you're happy
   with it.
