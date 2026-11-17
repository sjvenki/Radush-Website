# Radush website: notes for Claude

## What this is
- radush.io, the Radush Technologies company website. Plain HTML, CSS and JavaScript on Netlify. No framework,
  no build step, no server, no database. Owner and approver of every change: SJ (GitHub `sjvenki`).
- Live release: v18 (2 Nov 2026), commit `56428a9`. Branch `main` is production: a merge publishes to radush.io
  in about a minute. The pre-October React site is on branch `backup/pre-v15-react`.
- Documents (PDF, baselined 17 Nov 2026) are in `docs/`: BRD, Architecture, HLD, LLD. The LLD is the developer
  reference for files, tokens and behaviour. They sit outside `site/`, so they are not published.
- Why a decision was made: search `docs/history/` (project chat and 11 work threads, 14 Oct to 17 Nov 2026). It is
  a record, not a specification; the documents above win if they disagree.

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

## Search and sharing (added in v19)
- `site/robots.txt` allows all crawling and points to `site/sitemap.xml`, which lists the 12 indexable pages. The
  404 page has `noindex`; the Search Console file is left out. When you add a page, add it to `sitemap.xml`.
- Every page head carries a canonical URL, Open Graph tags and `twitter:card` (no X handle, by SJ's choice).
  The share image is `assets/og-share.jpg` (1200 x 630, orange to light brown). URLs use the `.html` form, matching
  the site's own links; the main address is `https://radush.io` (no `www`).

## Deferred on purpose (SJ, 17 Nov 2026)
- Contact form: it has no backend (it blocks submit); email and phone links work. Revisit when traffic grows and
  enquiries should be stored in a database. Fix then: `data-netlify="true"` plus a form name, remove the blocking
  handler in `main.js`, set up Netlify email notifications.
- Payments: the "Buy" buttons only open a prefilled enquiry. No payment integration yet; do not add Razorpay or
  similar until SJ decides.
- CMS for blog and news: in the backlog. The pages are static and hand-edited.
