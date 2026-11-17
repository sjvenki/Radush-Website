# Radush website: notes for Claude

## What this is
- radush.io, the Radush Technologies company website. Plain HTML, CSS and JavaScript on Netlify. No framework,
  no build step, no server, no database. Owner and approver of every change: SJ (GitHub `sjvenki`).
- Live release: v18 (2 Nov 2026), commit `56428a9`. Branch `main` is production: a merge publishes to radush.io
  in about a minute. The pre-October React site is on branch `backup/pre-v15-react`.
- Documents (PDF, baselined 17 Nov 2026) are in `docs/`: BRD, Architecture, HLD, LLD. The LLD is the developer
  reference for files, tokens and behaviour. They sit outside `site/`, so they are not published.

## Layout
- `site/` is everything that is published (`netlify.toml` sets `publish = "site"`). Do not delete `netlify.toml`:
  it overrides the old React build settings still shown in the Netlify dashboard.
- 13 pages: `index`, `about`, `services`, `products`, five `product-*.html` (Minerva, eC-hyre, QRcode4you,
  Formatflex, eVal.ai), `book`, `contact`, `legal`, `404`. Keep `google55b91295912d3a34.html` (Search Console).
- `site/css/main.css` holds all styles; later review rounds are labelled override blocks at the end (v13 to v18),
  mostly scoped to one page such as `body.home`. `site/js/main.js` holds all behaviour (no libraries).
- `site/_redirects`: 27 permanent redirects from old React URLs plus the 404 rule. Google Tag Manager is
  `GTM-TJ8VKJWC`, in every page.

## Conventions
- Brand: orange `#F27B22` as the main colour, brown for gradients and dark areas, never black. The CSS tokens
  `--black`, `--ink`, `--charcoal` are old names for browns. Fonts: Space Grotesk and Inter.
- Header and footer are copied into all 13 pages, so a menu or footer change means editing every page.
- British spelling. Keep supplied copy as given; flag anything you add for SJ's approval.
- Logos: `logo.png` on light backgrounds, `logo-dark.png` on brown. People photos are 720 x 895 JPG, cut out on the
  orange-brown gradient. Product artwork is SVG (`prod-*.svg`).
- No secrets, no stored personal data, no server code.

## How to make a change
1. Branch from `main` (for example `v19-site`) and edit files in `site/`.
2. Check the pages in a browser at desktop and phone widths.
3. Open a draft pull request. Netlify posts a deploy preview link. SJ reviews it and approves.
4. Merge to `main`. Add a "Changes in vNN" note to `README.md`.
- Rollback: Netlify, Deploys, publish the last good deploy. For a permanent fix, revert the merge commit.

## Known gaps
- The contact form has no backend (it blocks submit). Fix: `data-netlify="true"` plus a form name, remove the
  blocking handler in `main.js`, set up Netlify email notifications.
- The "Buy" buttons only open a prefilled enquiry. No payments yet (Razorpay is on the roadmap).
- Missing `robots.txt`, `sitemap.xml` and Open Graph tags.
- `README.md` changelog stops at v15 and `book.html` may still contain a `YOUR_BUY_LINK` placeholder. Check both.
- Roadmap: contact form, Razorpay checkout, a simple CMS for blog and news.
