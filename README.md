# Flexicurl Web Client

Modern, responsive web experience for the Flexicurl gym management platform. Built with Next.js (App Router), React 19, Tailwind CSS v4, and `next-themes` for system-aware light/dark mode.

## Overview

The web client is a marketing and product front door for Flexicurl, featuring:
- High‑impact landing sections (hero, features, how‑it‑works, benefits, testimonials, pricing, CTA)
- Fully responsive layout
- Theme support (system, light, dark)
- Fast typography via `next/font` (Geist)

## Tech Stack

- **Framework:** Next.js (App Router)
- **UI:** React 19, Tailwind CSS v4
- **Icons:** `lucide-react`
- **Theming:** `next-themes`
- **TypeScript:** Yes

## Project Structure

```
src/
  app/
    layout.tsx        # Global layout, metadata, theme provider
    page.tsx          # Landing page composition
    globals.css       # Tailwind v4 + theme variables
    providers.tsx     # Theme provider wiring
  components/
    landing/          # Landing page sections
```

## Getting Started

### Install dependencies

```
npm install
```

### Run the dev server

```
npm run dev
```

The app will be available at `http://localhost:3000`.

## Scripts

```
npm run dev     # Start dev server
npm run build   # Create production build
npm run start   # Run production server
npm run lint    # Lint codebase
```

## Customization

- Update landing sections in `src/components/landing/`.
- Edit metadata in `src/app/layout.tsx`.
- Adjust global styles in `src/app/globals.css`.

## Environment Variables

No environment variables are required for the landing page by default. If you later connect to backend services, add them to `.env.local` and reference them via Next.js environment configuration.

## Deployment

This project deploys like any standard Next.js app. Recommended platforms include Vercel, Netlify, and AWS.

```
npm run build
npm run start
```

---

If you want additions like API integration docs or component usage guidelines, let me know and I’ll extend the README.