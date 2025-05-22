// Optimized intersection observer hook
import { useEffect, useRef, useState, useCallback } from 'react';
import { debouncedObserver } from '../utils/performance';

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);

  const callback = useCallback(debouncedObserver(() => {
    if (targetRef.current) {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      }, options);

      observer.observe(targetRef.current);
      return () => observer.disconnect();
    }
  }), [options]);

  useEffect(() => {
    callback();
  }, [callback]);

  return [targetRef, isIntersecting] as const;
};