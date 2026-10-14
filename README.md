# Rajeev Verma — Creative Portfolio

A responsive Next.js App Router portfolio scaffold based on the supplied website brief and creative leadership dossier.

## Important repository / content status

The supplied workspace did not include an existing website repository or the original Behance media files. This project is therefore a new implementation, not a modification of an existing repository. The website includes all **30 distinct names** in the brief's inventory; the brief's stated count of 28 conflicts with its own list of 30. Titles have been retained as listed, and the additional two freelance-style entries are separately included because the dossier names Rabitat and Attrangi freelance work. Before launch, compare all entries against the actual source profile and merge duplicates only when confirmed.

All project cards and detail routes currently use labelled missing-media placeholders. No stock images, invented client credits, invented videos or unsupported performance results are presented as Rajeev's work. Placeholder state is represented in `lib/projects.ts` by `assetStatus: 'missing'`.

## Run locally

Requirements: Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm run start
```

## Structure

- `app/page.tsx` — homepage
- `app/work/page.tsx` — searchable/filterable complete project inventory
- `app/work/[slug]/page.tsx` — statically generated detail page for every project slug
- `app/services`, `app/about`, `app/case-studies`, `app/contact` — supporting pages
- `components/` — navigation, cards, library filters, contact form and footer
- `lib/projects.ts` — central project inventory; add/update projects here
- `app/sitemap.ts`, `app/robots.ts` — SEO endpoints
- `app/globals.css` — responsive visual system, restrained transitions and reduced-motion support

## Asset migration checklist

For every project, confirm the canonical title and slug, source media, thumbnail/poster, media permission, client credit, year, Rajeev's exact role, deliverables, collaborators and any approved summary. Add approved thumbnails under `public/images/projects/` using the slug plus `.webp`, then update the project entry. For videos, prefer a streaming host/CDN and set `mediaUrl` to an approved playable URL; avoid committing large originals to Git. Implement a player/gallery only when actual assets and their hosting URLs are supplied.

Entries to verify against source profile: Rabitat UGC Ads; Fogg Ad Spoof; Protein Condom; Motion Ads; Gym Campaign Ad | BeastLife; BeastLife; BeastLife Melatonin Commercial; Go Zero AI Commercial; Reels; iQuanta Launch Video with Teaser; Creatives!; Education; Ayelo | Campaign Shoot; Kacoba Cafe; Frogo (Food); Evtric (Motor Vehicle); Commercials; Real Estate; Samsons Gym; JAS 2022; Travel; Kritika Kataria (Fashion); Attrangi; Jewellery Photography; Jewellery Commercials; Rochees watches; Refine Beauty; E Commerce Shoot; Rabitat — Performance Creatives & AI Listing Videos; Attrangi Jewels — Themed Jewellery Shoot.

## Still required before launch

1. The original repository (if one exists) so changes can be merged into it instead of replacing it.
2. Original project videos, stills, thumbnails and any project descriptions; source brief does not include the media itself.
3. Resolution of the 28-versus-30 inventory discrepancy and confirmation of exact titles / possible duplicates.
4. Written permission to republish each client's videos, logos, stills and brand assets.
5. Rajeev-approved email and/or WhatsApp details if they should be public.
6. A real form provider and its credentials / recipient configuration. The current contact form intentionally states that it does not send anything; do not present it as live.
7. Verified campaign evidence and context before publishing metrics or detailed case studies. The dossier explicitly flags the baseline/measurement for watch-time and CTR figures and attribution for iQuanta follower growth for clarification.
8. Production domain in `NEXT_PUBLIC_SITE_URL` and an approved Open Graph image.

## Content / accuracy notes

- Case studies are marked as in preparation until original campaign, workflow or freelance project evidence is supplied.
- `robots` metadata currently disables indexing; enable indexing only after content, media rights, contact flow and domain are ready.
- Fonts load from Google Fonts; self-host them if a fully local font setup is required.
- This is a working base for migration, not a claim that the media migration is complete.
