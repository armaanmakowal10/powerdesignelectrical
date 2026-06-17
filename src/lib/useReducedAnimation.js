import { useEffect, useState } from 'react';

/**
 * Returns true when heavy background animations should be skipped: on small
 * screens (no hover, tighter GPU/battery budget) or when the user has asked
 * for reduced motion. SSR-safe — defaults to false and resolves on mount.
 */
export function useReducedAnimation() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const queries = [
      window.matchMedia('(max-width: 720px)'),
      window.matchMedia('(prefers-reduced-motion: reduce)'),
    ];
    const update = () => setReduce(queries.some((q) => q.matches));
    update();
    queries.forEach((q) => q.addEventListener('change', update));
    return () => queries.forEach((q) => q.removeEventListener('change', update));
  }, []);

  return reduce;
}
