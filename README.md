# Vibhu Rathore Portfolio

Personal portfolio for Vibhu Rathore, built as a Vite, React, and TypeScript app. It presents profile details, featured projects, experience, education, technical skills, and a Formspree-backed contact form.

## Tech Stack

- React 19
- TypeScript 5
- Vite via `rolldown-vite`
- Tailwind CSS v4
- shadcn-style local UI components
- lucide-react icons
- simple-icons and devicon skill icons
- motion/react section and interaction animations
- Raw WebGL shader canvas for the hero visual
- React Hook Form, Zod, and Formspree
- Persisted light/dark theme system

## Features

- Sticky profile card with portrait, location, specialization, social links, and theme toggle.
- Hero section with a deferred shader visual, word-level heading reveal, and motion-enhanced calls to action.
- Featured project cards with real image dimensions, AVIF assets, tags, links, and reduced-motion-safe hover treatment.
- Separate Experience and Education sections.
- Categorized technical skills with brand icons.
- Contact form validation, honeypot field, Formspree delivery, and accessible submit status.
- SEO metadata, sitemap, robots file, web manifest, favicon, apple touch icon, and social preview image.
- Reduced-motion support for page reveals, shader enhancement, and hover interactions.

## Animation System

The base animation layer uses `motion/react` for section fade/stagger reveals and small interaction polish. The hero uses a raw WebGL shader canvas instead of React Three Fiber because the centerpiece is a shader-driven background, not true 3D geometry. A CSS gradient fallback paints immediately above the fold; the canvas hydrates only after `load` and idle time, with a Safari-safe timeout fallback, and is skipped for reduced-motion, no-WebGL, or lower-capability devices.

## Setup

Install dependencies:

```bash
npm install
```

Create local environment config from the example:

```bash
cp .env.example .env
```

Set the contact form id:

```bash
VITE_FORMSPREE_FORM_ID=your_formspree_form_id
```

Start the development server:

```bash
npm run dev
```

Run lint:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Scripts

- `npm run dev`: start the Vite development server.
- `npm run lint`: run ESLint across the project.
- `npm run build`: type-check and build production assets.
- `npm run preview`: serve the production build locally.
