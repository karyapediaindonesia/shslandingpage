import { useEffect } from 'react';

/**
 * useScrollReveal initializes an IntersectionObserver that observes
 * all elements with '.reveal-on-scroll' or '.reveal-scale' and adds
 * the '.is-revealed' class when they enter the viewport.
 */
export function useScrollReveal(dependencyKey?: unknown) {
  useEffect(() => {
    // Check if IntersectionObserver is supported
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll, .reveal-scale').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-on-scroll, .reveal-scale').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            // Unobserve once revealed for 60fps performance and single elegant trigger
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-scale');
    elements.forEach((el) => observer.observe(el));

    // Fallback timer: ensure all visible elements on screen are revealed
    const timer = setTimeout(() => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('is-revealed');
        }
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [dependencyKey]);
}
