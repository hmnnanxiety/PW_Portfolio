import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { ContactLinks } from "@/components/contact-links";
import { profile } from "@/content/profile";
import { isPreview } from "@/lib/site";

export function SiteHeader() {
  return (
    <>
      {isPreview && (
        <div className="preview-banner">
          Grayscale UX preview · Draft content and layout fixtures · Not for
          publication
        </div>
      )}
      <header className="site-header page-container">
        <Link href="/" className="wordmark" aria-label="dimeees — home">
          dimeees
        </Link>
        <SiteNav />
      </header>
    </>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer page-container">
      <div className="footer-grid">
        <div>
          <Link href="/" className="wordmark">
            dimeees
          </Link>
          <p className="mt-3 text-sm text-muted">{profile.name}</p>
          <Link href="/contact" className="text-link mt-4">
            Contact details <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div>
          <p className="eyebrow mb-3">Direct contact</p>
          <ContactLinks />
        </div>
      </div>
      <div className="footer-bottom">
        <span>Multimedia / Visual work / Software</span>
        <span>
          {isPreview ? "Foundation + grayscale UX" : "Dimas Satria Widjatmiko"}
        </span>
      </div>
    </footer>
  );
}
