# Changes

## Phase 5 Animation And README Refresh

- Added a raw WebGL hero shader visual in a lazy-loaded chunk. It creates the bold shader centerpiece without adding the React Three Fiber and Three.js dependency stack.
- Added an immediate CSS gradient fallback for the hero visual. It protects above-the-fold paint, no-WebGL browsers, lower-capability devices, and `prefers-reduced-motion: reduce`.
- Deferred shader hydration until after `load` and idle time, with a `setTimeout` fallback for browsers without `requestIdleCallback`.
- Reduced shader runtime cost by moving canvas resize work to `ResizeObserver` and capping the decorative render loop.
- Added a word-level hero heading reveal using `motion/react` to make the primary entrance feel more deliberate.
- Added subtle magnetic lift/tap motion to hero CTA links while preserving normal anchor behavior.
- Added restrained tilt/lift motion to project cards for tactile polish.
- Updated `README.md` to document the current stack, features, setup, scripts, and animation approach.

### Dependency And Bundle Impact

- New runtime dependencies: none.
- Raw WebGL hero shader chunk after implementation: `4.23 kB` minified, `1.89 kB` gzip.
- Avoided R3F/Three estimate for this shader-style effect: roughly `230-250 kB` gzip before scene code.

## Phase 3 Implementation

- Removed fabricated testimonials, dead social links, and unverified numeric metrics.
- Added Formspree delivery with `VITE_FORMSPREE_FORM_ID`, honeypot spam mitigation, and live submit status.
- Added a persisted light/dark theme toggle with system-preference default.
- Fixed mobile profile card overflow, duplicate `h1`, resume placeholder copy, and repeated Tools heading copy.
- Added reduced-motion handling, image loading/dimension attributes, AVIF file extensions, SEO metadata, manifest, robots, sitemap, apple touch icon, and a dedicated social preview image.
