import Link from "next/link";
import { Mascot } from "@/components/mascot";
import { profile } from "@/content/profile";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("About", "/about");

export default function AboutPage() {
  return (
    <div className="page-container">
      <header className="page-intro about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">About / dimeees</p>

          <h1>
            Dimas Satria
            <br />
            Widjatmiko.
          </h1>

          <p className="lead">
            Somewhere between visual work, interfaces, and software engineering.
          </p>
        </div>

        <div className="about-expression-field" aria-hidden="true">
          <div className="about-expression about-expression-1">
            <Mascot variant="happy" />
          </div>

          <div className="about-expression about-expression-2">
            <Mascot variant="thinking" />
          </div>

          <div className="about-expression about-expression-3">
            <Mascot variant="smug" />
          </div>

          <div className="about-expression about-expression-4">
            <Mascot variant="surprised" />
          </div>

          <div className="about-expression about-expression-5">
            <Mascot variant="default" />
          </div>
        </div>
      </header>

      <div className="split-section page-content">
        <div>
          <p className="copy">
            I like making things that sit somewhere between design and
            engineering — sometimes that means motion and visuals, sometimes
            interfaces, and sometimes code that probably took longer than it
            should have.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            {profile.resume ? (
              <a className="button-link" href={profile.resume}>
                View resume (PDF)
              </a>
            ) : (
              <span className="draft-note">Resume / CV — coming soon</span>
            )}

            <Link className="text-link" href="/contact">
              Say hello <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="about-rows">
          <section>
            <p className="eyebrow">01 / Background</p>
            <h2>A creative person who also likes breaking software.</h2>

            <p className="copy">
              I work across multimedia, visual design, frontend development,
              and software engineering. I enjoy projects where visual thinking
              and technical problem-solving can exist in the same room.
            </p>
          </section>

          <section>
            <p className="eyebrow">02 / Education</p>
            <h2>Universitas Gadjah Mada</h2>

            <p className="copy">
              Studying software engineering while continuing to explore
              multimedia, interfaces, computer vision, and experimental
              technology.
            </p>
          </section>

          <section>
            <p className="eyebrow">03 / Experience</p>
            <h2>From underwater robots to creative production.</h2>

            <p className="copy">
              My experience includes programming for the ORCA underwater robot,
              working with robotics and perception systems, alongside
              multimedia and visual work for organizations and events.
            </p>

            <p className="copy mt-4">
              More recently, I have also been exploring AI applications through
              a RAG-based chatbot project, working across frontend development
              and AI integration.
            </p>
          </section>

          <section>
            <p className="eyebrow">04 / How I work</p>
            <h2>Visuals × Interfaces × Software</h2>

            <p className="copy">
              I tend to move between disciplines instead of treating them as
              separate boxes. A visual idea might turn into an interface, an
              interface might need code, and the code usually gives me another
              visual idea.
            </p>

            <Link href="/work" className="text-link mt-5">
              Browse the work <span aria-hidden="true">↗</span>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}