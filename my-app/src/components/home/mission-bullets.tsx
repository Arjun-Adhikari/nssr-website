"use client";

import { useEffect, useRef } from "react";

/**
 * Draw-in animation for the mission bullets on the home page. Ported from the
 * IntersectionObserver in `assets/js/pages/index.js`; the `is-visible` class is
 * added to each `.nssr-draw-line` so main.css can run its keyframes.
 */
export function MissionBullets({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target
            .querySelectorAll(".nssr-draw-line")
            .forEach((line) => line.classList.add("is-visible"));
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-8 mt-12" id="mission-bullets" ref={ref}>
      {children}
    </div>
  );
}