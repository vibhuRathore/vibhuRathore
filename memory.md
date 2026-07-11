# Portfolio Repo Memory

## Project Overview

This is a personal portfolio site for Vibhu Rathore. It is a Vite + React + TypeScript app using Tailwind CSS v4, shadcn-style UI components, lucide-react icons, and `motion/react` animations.

The app is mostly static and content-driven. Portfolio data is stored in TypeScript arrays, while a few longer copy sections are hard-coded directly inside feature components.

## Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Preview production build: `npm run preview`

## Tech Stack

- React 19
- TypeScript 5
- Vite via `rolldown-vite`
- Tailwind CSS v4 through `@tailwindcss/vite`
- shadcn-style local UI components in `src/components/ui`
- Radix Dialog/Label primitives
- lucide-react icons
- `motion/react` for section and card animations
- React Hook Form + Zod are installed, but there is no active contact form flow yet

## Entry Points

- `src/main.tsx` mounts `AppLayout` into `#root`.
- `src/AppLayout.tsx` composes the page shell:
  - `FloatingMenu`
  - `Sidebar`
  - `Profile`
  - `App`
- `src/App.tsx` controls the main section order:
  - `Hero`
  - `Stats`
  - `Projects`
  - `About`
  - `Resume`
  - `Tools`
  - `Services` is imported as a commented-out section and is not rendered.

## Path Aliases

`@/*` maps to `src/*`.

Configured in:

- `tsconfig.json`
- `tsconfig.app.json`
- `vite.config.ts`
- `components.json`

Prefer `@/...` imports for source files when adding new code.

## Styling

- Global CSS is in `src/index.css`.
- Tailwind v4 theme variables are defined directly in CSS with `@theme inline`.
- The app uses a dark visual style through neutral backgrounds, borders, and `text-primary`.
- The body font uses `--font-syne`, but the font itself is not imported in this repo.
- Common class patterns:
  - Section spacing: `mt-30 scroll-mt-10`
  - Main container: `container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl`
  - Dark cards/panels: neutral borders and dark neutral backgrounds

## Shared Utilities

- `src/lib/utils.ts` exports `cn(...)`, combining `clsx` and `tailwind-merge`.
- `src/lib/animations.ts` exports:
  - `staggerContainer(delay)`
  - `fadeUp`

Most animated feature sections use:

- `initial="hidden"`
- `whileInView="visible"`
- `viewport={{ once: true, amount: 0.3 }}`
- variants from `src/lib/animations.ts`

## Shared Components

- `src/components/SectionHeader.tsx`
  - Reusable animated subtitle + heading block.
  - Uses `SparkleIcon`.
- `src/components/navigation/Sidebar.tsx`
  - Mobile/right sheet menu using shadcn `Sheet`.
  - Tracks active link locally by click only.
- `src/components/navigation/FloatingMenu.tsx`
  - Desktop fixed right-side icon menu.
  - Tracks active link locally by click only.
- `src/components/ui/*`
  - Local shadcn-style primitives: button, sheet, form, input, textarea, label.

## Content Data Locations

Use these files first when editing visible portfolio content:

- Navigation and social links: `src/constants/index.tsx`
- Education and work experience: `src/constants/index.tsx`
- Projects: `src/features/projects/projects.data.ts`
- Stats: `src/features/stats/stats.data.ts`
- Tools/skills: `src/features/Tools/tool.data.ts`
- Services data:
  - Active duplicate in `src/constants/index.tsx`
  - Feature-local data in `src/features/Services/services.data.tsx`

## Main Feature Files

- `src/features/Hero.tsx`
  - Hero intro text, primary CTA to `#projects`, and inactive "Download Cv" button.
- `src/features/Profile.tsx`
  - Sticky profile card, image `/Image.jpeg`, specialization, location, social links, and "Let's Work" button.
- `src/features/stats/Stats.tsx`
  - Renders `statsData`.
- `src/features/projects/Projects.tsx`
  - Renders `projectsData`.
- `src/features/About.tsx`
  - Long hard-coded about copy.
- `src/features/Resume/Resume.tsx`
  - Renders education and experience timelines from `src/constants/index.tsx`.
- `src/features/Tools/Tool.tsx`
  - Renders tools from `src/features/Tools/tool.data.ts`.
- `src/features/Services/Services.tsx`
  - Exists but is not currently rendered by `App.tsx`.

## Assets

Static assets live in `public`.

- Profile image: `public/Image.jpeg`
- Project placeholders: `public/images/project-ph-1.jpeg` through `project-ph-4.jpeg`
- Tool icons: `public/images/tools/*.svg`
- Favicon: `public/favicon.svg`

Use root-relative paths for public assets, for example `/Image.jpeg` or `/images/tools/react.svg`.

## Current Navigation/Section Notes

The navigation includes links for:

- `#hero`
- `#projects`
- `#about`
- `#services`
- `#resume`
- `#testimonials`
- `#contact`

Only these section IDs are currently rendered:

- `hero`
- `projects`
- `about`
- `resume`

Important: `Tools` currently also uses `id="resume"`, so there are duplicate `resume` anchors. Services, testimonials, and contact links do not have rendered target sections at the moment.

## Known Issues / Things To Check Before Editing

- `README.md` is empty.
- `Services` is commented out in `src/App.tsx`, but service-related nav and data still exist.
- `src/constants/index.tsx` and `src/features/Services/services.data.tsx` both define services data.
- `ProjectCard` receives `projectLink` through `ProjectType`, but the component does not use it. There is a local comment saying the project link will be added later.
- The project data currently repeats the same title and link for all project cards.
- `Hero` has a "Download Cv" button without a link or click handler.
- `Profile` has a "Let's Work" button without a link or click handler.
- Social links currently point to `/#`.
- `Tools` appears to have copied the resume section title and duplicate `id="resume"`.
- `src/lib/animations.ts` imports `Variants` from `framer-motion`, while package dependencies include `motion` and components import from `motion/react`. The current production build passes, but keep this import mismatch in mind if animation packages change.
- There are text typos in visible copy, such as `developement` in `Profile.tsx`.

## Change Guidance

- Keep changes narrow and content-driven when possible.
- For timeline changes, edit `education` and `experience` in `src/constants/index.tsx`.
- For Resume section changes like the timeline shown in the screenshot, start with:
  - `src/features/Resume/Resume.tsx`
  - `src/features/Resume/EducationCard.tsx`
  - `src/constants/index.tsx`
- For menu behavior or anchor issues, start with:
  - `src/constants/index.tsx`
  - `src/components/navigation/Sidebar.tsx`
  - `src/components/navigation/FloatingMenu.tsx`
  - the relevant feature section IDs
- For project content, edit `src/features/projects/projects.data.ts` first. Only change `ProjectCard` if card behavior needs to change.
- For visual style, prefer editing local component Tailwind classes unless a global token in `src/index.css` is truly required.
