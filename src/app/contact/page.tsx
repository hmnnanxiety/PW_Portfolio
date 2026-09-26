import { Mascot } from "@/components/mascot";
import { ContactLinks } from "@/components/contact-links";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contact", "/contact");
export default function ContactPage() {
  return (
    <div className="page-container contact-page">
      <header className="page-intro">
        <p className="eyebrow">Contact</p>
        <div className="contact-title">
          <h1>Get in touch.</h1>
          <Mascot variant="wink" />
        </div>
        <p className="lead">Email and professional profiles.</p>
      </header>
      <div className="split-section page-content">
        <div>
          <p className="copy">
            For projects, collaborations, or a simple hello, use Email. For
            academic conversations, use School.
          </p>
        </div>
        <ContactLinks copyEmail />
      </div>
    </div>
  );
}
