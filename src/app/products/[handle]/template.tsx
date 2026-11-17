'use client';

import { useEffect, useLayoutEffect } from 'react';

const scrollWindowToTop = () => {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  window.scrollTo(0, 0);
  root.scrollTop = 0;
  document.body.scrollTop = 0;
  root.style.scrollBehavior = previous;
};

export default function ProductTemplate({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    scrollWindowToTop();
  }, []);

  useEffect(() => {
    scrollWindowToTop();
  }, []);

  return children;
}
