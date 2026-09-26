import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { isPreview } from "@/lib/site";

export function SiteHeader() {
  return (
    <>
      {isPreview && (
        <div className="preview-banner">
          Brand layer preview · Draft content and layout fixtures · Not for
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
            dimeees.
          </Link>
          <p className="mt-3 text-sm text-muted">© 2026</p>
        </div>
        <div className="footer-signature">
          <p>Yogyakarta, Indonesia</p>
          <p className="mt-2 text-sm text-muted">
            built with questionable decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
