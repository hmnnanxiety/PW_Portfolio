import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { canIndex, siteDescription, siteUrl } from "@/lib/site";
import "@/styles/globals.css";

const eudoxus = localFont({
  src: [
    {
      path: "../fonts/EudoxusSans-Light-BF659b6cb2036b5.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/EudoxusSans-Regular-BF659b6cb1d4714.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/EudoxusSans-Medium-BF659b6cb1c14cb.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/EudoxusSans-Bold-BF659b6cb1408e5.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/EudoxusSans-ExtraBold-BF659b6cb1b96c9.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-eudoxus",
  display: "swap",
});

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
    <html lang="en" className={eudoxus.variable}>
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
