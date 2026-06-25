# Mehak Javed — Portfolio

Personal portfolio for **Mehak Javed**, Front-End Developer (React · Next.js · TypeScript).
A single-page, dark, minimal site with a custom **Why Glasgow** section.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion (scroll & parallax animations)
- lucide-react icons

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

- `app/` — layout, page, global theme
- `components/` — section components (Hero, About, Skills, Projects, WhyGlasgow, Contact, …)
- `components/ui/` — shared primitives (SectionHeading, Reveal, Chip, Wordmark, hero-parallax)
- `lib/data.ts` — all site content (edit copy here)

## Deployment

Deployed on [Vercel](https://vercel.com). Pushing to `main` triggers a production deploy.
