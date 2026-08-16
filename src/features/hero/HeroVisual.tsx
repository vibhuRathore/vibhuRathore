import { lazy, Suspense, useEffect, useState } from 'react';

const HeroShaderCanvas = lazy(() => import('./HeroShaderCanvas'));

type IdleWindow = Window & {
  requestIdleCallback?: (
    callback: IdleRequestCallback,
    options?: IdleRequestOptions,
  ) => number;
  cancelIdleCallback?: (handle: number) => void;
};

const hasReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const hasWebGL = () => {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl');

  return Boolean(gl);
};

const isLowCapabilityDevice = () => {
  const navigatorWithMemory = navigator as Navigator & {
    deviceMemory?: number;
  };

  return (
    navigator.hardwareConcurrency <= 4 ||
    (navigatorWithMemory.deviceMemory ?? 8) <= 4
  );
};

const scheduleAfterLoadAndIdle = (callback: () => void) => {
  const idleWindow = window as IdleWindow;
  let timeoutId = 0;
  let idleId = 0;
  let cancelled = false;

  const run = () => {
    if (!cancelled) {
      callback();
    }
  };

  const waitForIdle = () => {
    if (idleWindow.requestIdleCallback) {
      idleId = idleWindow.requestIdleCallback(run, { timeout: 1600 });
      return;
    }

    timeoutId = window.setTimeout(run, 700);
  };

  if (document.readyState === 'complete') {
    timeoutId = window.setTimeout(waitForIdle, 0);
  } else {
    window.addEventListener('load', waitForIdle, { once: true });
  }

  return () => {
    cancelled = true;
    window.removeEventListener('load', waitForIdle);

    if (idleId && idleWindow.cancelIdleCallback) {
      idleWindow.cancelIdleCallback(idleId);
    }

    if (timeoutId) {
      window.clearTimeout(timeoutId);
    }
  };
};

const HeroVisual = () => {
  const [shouldEnhance, setShouldEnhance] = useState(false);

  useEffect(() => {
    return scheduleAfterLoadAndIdle(() => {
      if (hasReducedMotion() || isLowCapabilityDevice() || !hasWebGL()) {
        return;
      }

      setShouldEnhance(true);
    });
  }, []);

  return (
    <div
      className='hero-visual pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] overflow-hidden rounded-md'
      aria-hidden='true'
    >
      <div className='hero-visual__fallback absolute inset-0' />
      {shouldEnhance ? (
        <Suspense fallback={null}>
          <HeroShaderCanvas />
        </Suspense>
      ) : null}
    </div>
  );
};

export default HeroVisual;
