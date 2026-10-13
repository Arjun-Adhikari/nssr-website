"use client";

import { useEffect, useRef } from "react";

/**
 * Reading-progress bar. Ported from the `window.onscroll` handler in
 * `assets/js/pages/blog.js`, which wrote a percentage width onto #progress-bar.
 */
export function ProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const bar = barRef.current;
      if (!bar) return;
      const doc = document.documentElement;
      const height = doc.scrollHeight - doc.clientHeight;
      const scrolled =
        ((window.scrollY || doc.scrollTop || document.body.scrollTop) / height) *
        100;
      bar.style.width = `${scrolled}%`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div id="progress-container">
      <div id="progress-bar" ref={barRef} />
    </div>
  );
}