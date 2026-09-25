import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { canIndex, siteDescription, siteUrl } from "@/lib/site";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dimas Satria Widjatmiko / dimeees",
    template: "%s | dimeees",
  },
  description: siteDescription,
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  robots: { index: canIndex, follow: canIndex },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
