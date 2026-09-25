import { ContactLinks } from "@/components/contact-links";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contact", "/contact");
export default function ContactPage() {
  return (
    <div className="page-container">
      <header className="page-intro">
        <p className="eyebrow">Contact</p>
        <h1>Get in touch.</h1>
        <p className="lead">Email and professional profiles.</p>
      </header>
      <div className="split-section pb-20">
        <div>
          <p className="copy">Contact details are awaiting confirmation.</p>
          <p className="draft-note mt-4">
            TODO — supply email, GitHub, LinkedIn, and Instagram URLs. Actions
            become available when verified values are added.
          </p>
        </div>
        <ContactLinks copyEmail />
      </div>
    </div>
  );
}
