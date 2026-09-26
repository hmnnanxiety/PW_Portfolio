import Link from "next/link";
import { Mascot } from "@/components/mascot";
import { ContactLinks } from "@/components/contact-links";
import { Placeholder } from "@/components/placeholder";
import { ProjectCard } from "@/components/project-card";
import { getFeaturedProjects } from "@/lib/projects";
import { pageMetadata } from "@/lib/metadata";
import { isPreview } from "@/lib/site";

export const metadata = {
  ...pageMetadata("Dimas Satria Widjatmiko", "/"),
  title: { absolute: "Dimas Satria Widjatmiko / dimeees" },
};
export default function HomePage() {
  const projects = getFeaturedProjects();
  return (
    <div className="page-container">
      <section className="hero" aria-labelledby="identity-heading">
        <div>
          <p className="eyebrow">Visuals × Interfaces × Software</p>
          <h1 id="identity-heading">dimeees</h1>
          <p className="hero-name">Dimas Satria Widjatmiko</p>
          <p className="lead">
            Visual work, interfaces, and software experiments.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-8">
            <Link className="button-link" href="#selected-work">
              Explore selected work{" "}
              <span aria-hidden="true" className="ml-3">
                ↓
              </span>
            </Link>
            <Link className="text-link" href="/about">
              About Dimas
            </Link>
          </div>
        </div>
        <div className="hero-art">
          <Placeholder
            label="Hero artwork — pending"
            note="Space reserved for a dedicated composition"
          />
        </div>
      </section>
      <section
        className="section"
        id="selected-work"
        aria-labelledby="selected-heading"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2 id="selected-heading">
              A closer look
              <br />
              at the work.
            </h2>
          </div>
          <Link href="/work" className="text-link">
            View all work <span aria-hidden="true">↗</span>
          </Link>
        </div>
        {isPreview && (
          <p className="draft-note mb-6">
            Draft candidates and one labeled layout fixture. Selection, order,
            and categories are provisional.
          </p>
        )}
        {projects.length ? (
          <ol
            className="project-list selected-list"
            data-selected-work="static"
          >
            {projects.map((project, index) => (
              <li key={project.slug}>
                <ProjectCard project={project} wide={index === 0} />
              </li>
            ))}
          </ol>
        ) : (
          <div className="empty-state">
            <h3>Selected projects — pending</h3>
            <p className="copy mt-3">
              Verified projects and media will appear here once ready.
            </p>
          </div>
        )}
      </section>
      <section className="section" aria-labelledby="capabilities-heading">
        <p className="eyebrow mb-4">02 / Capabilities</p>
        <h2 id="capabilities-heading">
          Across visuals
          <br />
          and engineering.
        </h2>
        <div className="capabilities">
          <div className="capability">
            <p className="eyebrow">Visual / Multimedia</p>
            <h3>Image & movement</h3>
            <p className="copy">
              Photography, videography, motion, and visual design.
            </p>
          </div>
          <div className="capability">
            <p className="eyebrow">Interfaces / Software</p>
            <h3>Design & implementation</h3>
            <p className="copy">
              UI/UX, frontend development, software development, and interface
              implementation.
            </p>
          </div>
          <div className="capability">
            <p className="eyebrow">AI / Experiments</p>
            <h3>Questions & exploration</h3>
            <p className="copy">
              AI/ML, RAG, backend exploration, data workflows, and technical
              experimentation.
            </p>
          </div>
        </div>
        <div className="toolkit" aria-labelledby="toolkit-heading">
          <h3 id="toolkit-heading">Selected toolkit</h3>
          <div className="toolkit-columns">
            <div>
              <h4 className="eyebrow">Engineering / Programming</h4>
              <ul className="toolkit-list">
                <li>Python</li>
                <li>TypeScript</li>
                <li>Java</li>
                <li>HTML / CSS</li>
                <li>MySQL</li>
                <li>
                  C++ <span>— familiar</span>
                </li>
                <li>
                  Kotlin <span>— familiar; Android coursework</span>
                </li>
              </ul>
              <h4 className="eyebrow">QA / Testing</h4>
              <ul className="toolkit-list">
                <li>Selenium</li>
                <li>Page Object Model (POM)</li>
              </ul>
              <h4 className="eyebrow">Web / AI</h4>
              <ul className="toolkit-list">
                <li>Next.js</li>
                <li>Frontend Development</li>
                <li>RAG</li>
                <li>AI integration</li>
              </ul>
            </div>
            <div>
              <h4 className="eyebrow">Creative / Multimedia</h4>
              <ul className="toolkit-list">
                <li>Figma</li>
                <li>Adobe After Effects</li>
                <li>DaVinci Resolve</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Premiere Pro</li>
              </ul>
              <h4 className="eyebrow">Photo / Video</h4>
              <ul className="toolkit-list">
                <li>Photography</li>
                <li>Videography</li>
                <li>Camera fundamentals / operation</li>
                <li>Exposure Triangle fundamentals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section split-section personal-section"
        aria-labelledby="personal-heading"
      >
        <div>
          <p className="eyebrow mb-4">03 / Personal context</p>
          <h2 id="personal-heading">
            The person
            <br />
            behind dimeees.
          </h2>
          <div className="peek-ledge" aria-hidden="true">
            <Mascot variant="peek" />
          </div>
        </div>
        <div>
          <p className="lead">Dimas Satria Widjatmiko</p>
          <p className="copy mt-4">
            Working across multimedia, visual work, and software.
          </p>
          <p className="draft-note mt-4">
            Personal narrative — pending. Education and experience will be added
            from verified information.
          </p>
          <Link href="/about" className="text-link mt-6">
            More about Dimas <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section
        className="section split-section contact-section"
        aria-labelledby="contact-heading"
      >
        <div>
          <p className="eyebrow mb-4">04 / Contact</p>
          <div className="contact-title">
            <h2 id="contact-heading">Get in touch.</h2>
            <Mascot variant="wink" />
          </div>
          <p className="copy mt-5">
            Email and professional profiles, all in one place.
          </p>
        </div>
        <ContactLinks copyEmail />
      </section>
    </div>
  );
}
