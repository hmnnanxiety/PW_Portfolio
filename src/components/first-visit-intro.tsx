"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

let seenInMemory = false;
const storageKey = "dimeees:intro-seen";

/** A decorative overlay only: the server-rendered page never waits on it. */
export function FirstVisitIntro() {
  const overlay = useRef<HTMLDivElement>(null);
  const deadline = useRef(0);

  useEffect(() => {
    const element = overlay.current;
    if (!element) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!deadline.current) {
      let seen = seenInMemory;
      try {
        seen ||= sessionStorage.getItem(storageKey) === "yes";
      } catch {
        // Storage may be unavailable; the module still covers internal navigation.
      }
      seenInMemory = true;
      try {
        sessionStorage.setItem(storageKey, "yes");
      } catch {}
      if (seen || media.matches || window.scrollY > 0 || location.hash) return;
      deadline.current = performance.now() + 1600;
    }
    if (media.matches || performance.now() >= deadline.current) return;
    element.dataset.active = "true";
    const dismiss = () => {
      delete element.dataset.active;
      deadline.current = -1;
    };
    const timer = window.setTimeout(
      dismiss,
      deadline.current - performance.now(),
    );
    // Let any intent to navigate dismiss it immediately, without consuming events.
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("focusin", dismiss);
    window.addEventListener("scroll", dismiss, { passive: true });
    media.addEventListener("change", dismiss);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("focusin", dismiss);
      window.removeEventListener("scroll", dismiss);
      media.removeEventListener("change", dismiss);
      delete element.dataset.active;
    };
  }, []);

  return (
    <div ref={overlay} className="first-visit-intro" aria-hidden="true">
      <div className="intro-state intro-state-first">
        <Image
          src="/brand/hero/dimeees-hero-head-flat.png"
          width={112}
          height={112}
          sizes="112px"
          alt=""
        />
        <p>making it look intentional...</p>
      </div>
      <div className="intro-state intro-state-last">
        <Image
          src="/mascot/expressions/dimeees-expression-wink.webp"
          width={112}
          height={110}
          sizes="112px"
          alt=""
          loading="lazy"
        />
        <p>okay, we&apos;re in.</p>
      </div>
    </div>
  );
}
