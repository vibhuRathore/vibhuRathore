import type { Variants } from 'motion/react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Container variant for staggering children
export const staggerContainer = (delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: prefersReducedMotion()
      ? { delayChildren: 0, staggerChildren: 0 }
      : {
          delayChildren: delay,
          staggerChildren: 0.4,
        },
  },
});

// Child item fade-up animation
export const fadeUp: Variants = {
  hidden: prefersReducedMotion() ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: prefersReducedMotion() ? 0 : 0.6 },
  },
};
