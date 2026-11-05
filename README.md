# Cairnmark Plan Services: Website

Solo and self-directed 401(k) plan support and education in Salt Lake City, delivered at the
client's location. It's a static site with no dependencies, built with Node and deployed to
**Netlify** at `https://cairnmark-plan-services.netlify.app`.

## Quick start

```bash
node build.mjs          # builds ./dist; checks internal links; lists missing info
STRICT=1 node build.mjs # pre-launch check
```

## Deploy to Netlify

1. **Add new project → Import from Git**, then select this repo and branch `claude/nifty-cray-89pvhk`.
2. Name the project `cairnmark-plan-services`.
3. **Forms → Enable form detection**, then deploy. Add an email notification for the `consultation` form.
4. Make the project **public**, then verify it in Google Search Console.

## Pages

`/`, `/plan-support/`, `/self-directed-401k/` (Q&A guide), `/solo-401k/` (field guide), `/services/`,
`/about/`, `/faq/` (20 questions), `/contact/` (meeting request with a preferred location),
`/privacy-policy/`, `/terms/` and `/disclosures/` (Utah law).

## Design

- **Palette:** plum night `#231A26`, plum `#3A2A40`, sage `#4F6B55`, alpenglow `#E07A5F` / `#B0533B`, sandstone `#F1ECE4`, paper `#FAF8F4`
- **Type:** Bricolage Grotesque (display) and Figtree (text), both self-hosted
- **Logo:** a four-stone cairn on a plum tile, with the top stone in alpenglow (`src/brand.mjs`)

See `docs/` for the launch checklist, media sources, Search Console and Google Business Profile steps.
