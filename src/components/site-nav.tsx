"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["/", "Home"],
  ["/work", "Work"],
  ["/about", "About"],
  ["/contact", "Contact"],
] as const;
export function SiteNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main navigation" className="nav-links">
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
  );
}
