import { ContentPlaceholder } from "@/components/placeholder";
import { profile } from "@/content/profile";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("About", "/about");
export default function AboutPage() {
  return (
    <div className="page-container">
      <header className="page-intro">
        <p className="eyebrow">About / dimeees</p>
        <h1>
          Dimas Satria
          <br />
          Widjatmiko.
        </h1>
        <p className="lead">
          Multimedia, visual work, and software engineering.
        </p>
      </header>
      <div className="split-section pb-20">
        <div>
          <p className="copy">
            The personal and professional context behind the work.
          </p>
          <div className="mt-6">
            {profile.resume ? (
              <a className="button-link" href={profile.resume}>
                View resume (PDF)
              </a>
            ) : (
              <p className="draft-note">Resume / CV — pending</p>
            )}
          </div>
        </div>
        <div className="about-rows">
          <section>
            <h2>Personal narrative</h2>
            <ContentPlaceholder>
              Add the owner-approved introduction and creative × engineering
              story.
            </ContentPlaceholder>
          </section>
          <section>
            <h2>Education</h2>
            <ContentPlaceholder>
              Add verified education details and dates.
            </ContentPlaceholder>
          </section>
          <section>
            <h2>Selected experience</h2>
            <ContentPlaceholder>
              Add verified positions, organizations, dates, and individual
              contributions.
            </ContentPlaceholder>
          </section>
          <section>
            <h2>Tools & capabilities</h2>
            <ContentPlaceholder>
              Add selected tools supported by actual work. No inferred
              technology list.
            </ContentPlaceholder>
          </section>
        </div>
      </div>
    </div>
  );
}
