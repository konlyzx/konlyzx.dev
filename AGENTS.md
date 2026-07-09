# Spooky — Personal Website

## Quick start

```bash
pnpm install
pnpm dev          # next dev --turbopack
pnpm build        # next build
pnpm lint         # eslint .
pnpm format       # prettier --write .
pnpm format:check # prettier --check .
```

- Package manager: **pnpm** (not npm/yarn)
- No test framework or test scripts exist.
- `.env*` files are gitignored — create `.env.local` for local overrides if needed.

## Stack

- **Next.js 16** (App Router) with **Turbopack** in dev
- **Tailwind CSS v4** — uses `@import 'tailwindcss'` + `@theme` directive; no `tailwind.config.ts`
- **shadcn/ui** (new-york style) — `components/ui/` is generated, prettier-ignored; edit elsewhere
- **MDX** via `@next/mdx` — pages can be `.mdx` (configured in `next.config.ts`)
- **Custom i18n** (en/es) via React Context in `lib/language-context.tsx`, not next-intl
- **Lenis** (`@studio-freight/lenis`) for smooth scrolling via `components/lenis-provider.tsx`
- **Shiki** for code block highlighting in MDX (`lib/shiki.ts`)
- **MapLibre GL** + **Cobe** for geo viz in `components/home/`
- **Vercel Analytics** and OG image generation at `app/api/og/`

## Paths & conventions

- `@/` maps to project root (e.g. `@/components/navbar`)
- CSS variables for theming in `app/globals.css` — dark theme is the default
- Fonts via `next/font/google`: Geist Sans, Geist Mono, Instrument Serif
- Prettier plugins: `prettier-plugin-tailwindcss` + `@trivago/prettier-plugin-sort-imports` (semi: false, singleQuote: true)
- `_archive/` is gitignored — safe to delete or ignore
- Custom SVG icons live in `components/svg/`
- JSON-LD structured data in `lib/seo/json-ld.ts`

## Lint → format

No required ordering — `pnpm lint` and `pnpm format` are independent.
