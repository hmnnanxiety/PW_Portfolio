import Link from "next/link";
export default function NotFound() {
  return (
    <div className="page-container">
      <section className="section">
        <p className="eyebrow mb-4">404 / Page not found</p>
        <h1>
          This page
          <br />
          isn’t here.
        </h1>
        <p className="copy mt-6">
          The link may be incorrect, or this project may not be published yet.
        </p>
        <div className="flex gap-6 flex-wrap mt-8">
          <Link href="/work" className="button-link">
            Browse work
          </Link>
          <Link href="/" className="text-link">
            Return home
          </Link>
        </div>
      </section>
    </div>
  );
}
