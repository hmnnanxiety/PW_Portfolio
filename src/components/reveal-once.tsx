"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Opt-in decorative reveal. Content stays visible without JavaScript. */
export function RevealOnce({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.revealed = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    const stop = () => {
      observer.disconnect();
      delete element.dataset.revealed;
    };
    observer.observe(element);
    media.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", stop);
    };
  }, []);
  return (
    <div ref={root} className={className} aria-hidden="true">
      {children}
    </div>
  );
}
