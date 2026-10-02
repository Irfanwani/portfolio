import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const selectors =
      '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-item';
    const elements = document.querySelectorAll(selectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};
