# PragmaTech Portfolio

A production-ready Next.js portfolio site for PragmaTech — a two-person full-stack delivery team
(Node.js/MERN and NestJS backend engineering) presenting itself as a complete
design-develop-test-deploy product team for Upwork clients.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript, Server Components by default)
- [Tailwind CSS v4](https://tailwindcss.com)
- [lucide-react](https://lucide.dev) for icons
- No other runtime dependencies

## Getting Started

```bash
npm install
cp .env.example .env.local   # then edit values as needed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm run dev      # start the dev server
npm run lint     # run ESLint
npx tsc --noEmit # type-check
npm run build    # production build
npm run start    # run the production build locally
```

## Environment Variables

See `.env.example`. All variables are optional in development (sane defaults are baked into
`src/lib/metadata.ts`), but should be set explicitly before deploying:

| Variable                     | Purpose                                                                 |
| ----------------------------- | ------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`        | Canonical domain used for metadata, Open Graph tags, and the sitemap.    |
| `NEXT_PUBLIC_CONTACT_EMAIL`   | Address used for the footer contact link and the contact form's mailto fallback. |
| `NEXT_PUBLIC_FORM_ENDPOINT`   | Optional. If set, the contact form POSTs JSON here instead of using the mailto fallback (e.g. a Formspree endpoint or your own API route). |

## Project Data & Adding a New Project

All project content lives in a single typed data source: `src/data/projects.ts`. Project cards
and the dynamic `/projects/[slug]` detail pages are generated entirely from this file — adding a
new project does not require touching any component.

To add a project:

1. Add a new object to the `projects` array in `src/data/projects.ts`, following the existing
   `Project` type (slug, title, summary, description, category, services, technologies, features,
   outcomes, thumbnail, gallery, featured, year, etc.).
2. Add its images (see below).
3. That's it — it will automatically appear in the `/projects` grid, the homepage (if
   `featured: true`), and get its own `/projects/<slug>` page with SEO metadata and related-project
   links.

This data layer is intentionally decoupled from presentation, so it can later be swapped for a CMS
(e.g. Sanity, Contentful) by changing only the `getAllProjects` / `getProjectBySlug` functions —
no component changes required.

### Adding real project screenshots

The site ships with generated abstract placeholder mockups (SVGs produced by
`scripts/generate-placeholders.mjs`). To replace a placeholder with a real screenshot:

1. Add your image files under `public/images/projects/<slug>/`, e.g.
   `public/images/projects/your-project/thumbnail.png` and `gallery-1.png`, `gallery-2.png`, etc.
   - Recommended thumbnail aspect ratio: 16:9 (e.g. 1200×675px).
   - Gallery images can be any consistent aspect ratio; 16:9 is used throughout the design system.
2. Update the `thumbnail` and `gallery` fields for that project in `src/data/projects.ts` to point
   to the new file paths.

All images render through `next/image`, so they get automatic optimization and lazy loading with
no further changes.

## SEO

- Per-page metadata (title, description, canonical URL, Open Graph, Twitter card) via
  `src/lib/metadata.ts` and the Next.js Metadata API.
- `src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.
- `src/app/icon.tsx` generates the favicon.
- Organization/ProfessionalService JSON-LD is injected in the root layout.
- `public/og-image.svg` is a placeholder social-preview image — replace with a real PNG/JPG (and
  update `siteConfig.ogImage` in `src/lib/metadata.ts`) before launch, since some platforms don't
  render SVG social previews.

## Placeholders to Replace Before Launch

- **Domain**: `NEXT_PUBLIC_SITE_URL` defaults to `https://pragmatech-solutions.com`.
- **Social preview image**: `public/og-image.svg` is a placeholder graphic.
- **Project screenshots**: all project thumbnails/galleries are abstract generated mockups, not
  real product screenshots (see "Adding real project screenshots" above).
- **Contact form backend**: defaults to a `mailto:` fallback. Set `NEXT_PUBLIC_FORM_ENDPOINT` to
  point at a real form service if you'd rather not rely on the visitor's email client.

## Deployment

This project is ready to deploy on [Vercel](https://vercel.com/new):

1. Push this repository to GitHub.
2. Import it in Vercel.
3. Set the environment variables from `.env.example` in the Vercel project settings.
4. Deploy.

Any other Node.js host that supports Next.js (App Router) will also work.
