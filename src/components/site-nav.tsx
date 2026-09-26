"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  ["/", "Home"],
  ["/work", "Work"],
  ["/about", "About"],
  ["/contact", "Contact"],
] as const;
export function SiteNav() {
  const pathname = usePathname();
  const anchor = useRef<HTMLDivElement>(null);
  const nav = useRef<HTMLElement>(null);
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    const slot = anchor.current;
    const navigation = nav.current;
    if (!slot || !navigation) return;
    const resize = new ResizeObserver(() => {
      if (slot.dataset.floating !== "true") {
        slot.style.setProperty(
          "--nav-rest-width",
          `${navigation.offsetWidth}px`,
        );
      }
    });
    resize.observe(navigation);
    // Observe the reserved slot, not the element that becomes fixed.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFloating(
          !entry.isIntersecting && entry.boundingClientRect.bottom < 12,
        );
      },
      { rootMargin: "-12px 0px 0px 0px" },
    );
    observer.observe(slot);
    return () => {
      observer.disconnect();
      resize.disconnect();
    };
  }, []);

  return (
    <div ref={anchor} className="nav-anchor" data-floating={floating}>
      <nav ref={nav} aria-label="Main navigation" className="nav-links">
        {links.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={
              pathname === href ||
              (href !== "/" && pathname.startsWith(`${href}/`))
                ? "page"
                : undefined
            }
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
