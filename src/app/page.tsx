import Link from "next/link";
import Image from "next/image";
import { FirstVisitIntro } from "@/components/first-visit-intro";
import { FloatingComment } from "@/components/floating-comment";
import { RevealOnce } from "@/components/reveal-once";
import { Mascot } from "@/components/mascot";
import { ContactLinks } from "@/components/contact-links";
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
    <div className="page-container home-page">
      <section className="hero" aria-labelledby="identity-heading">
        <div className="hero-atmosphere" aria-hidden="true">
          <svg
            className="hero-ribbon"
            viewBox="0 0 880 440"
            fill="none"
            focusable="false"
          >
            <path
              className="hero-ribbon-body"
              d="M920 28C670 -30 610 90 734 150C895 228 896 326 751 307C581 285 639 137 747 201C891 287 612 421 347 401C184 389 100 457 -40 466"
            />
            <path
              className="hero-ribbon-edge"
              d="M920 10C670 -48 610 72 734 132C895 210 896 308 751 289C581 267 639 119 747 183C891 269 612 403 347 383C184 371 100 439 -40 448"
            />
          </svg>
        </div>
        <FirstVisitIntro />
        <p className="eyebrow">Visuals × Interfaces × Software</p>
        <div className="hero-lockup">
          <Image
            className="hero-head"
            src="/brand/hero/dimeees-hero-head-flat.png"
            width={1254}
            height={1254}
            sizes="(max-width: 600px) 180px, (max-width: 1440px) 32vw, 460px"
            alt=""
            aria-hidden="true"
            preload
          />
          <h1 id="identity-heading" className="hero-wordmark">
            <span className="hero-wordmark-text">
              d
              <span className="hero-letter-i">
                i
                <Image
                  className="wordmark-dot"
                  src="/brand/accents/wordmark-dot-blue.svg"
                  width={64}
                  height={64}
                  alt=""
                  aria-hidden="true"
                />
              </span>
              meees
            </span>
            <Image
              className="wordmark-smile"
              src="/brand/accents/wordmark-smile-blue.svg"
              width={180}
              height={80}
              alt=""
              aria-hidden="true"
            />
            <Image
              className="wordmark-rays"
              src="/brand/accents/wordmark-rays-yellow.svg"
              width={120}
              height={96}
              alt=""
              aria-hidden="true"
            />
          </h1>
        </div>
        <div className="hero-support">
          <div>
            <p className="hero-name">Dimas Satria Widjatmiko</p>
            <p className="lead">
              Visual work, interfaces, and software experiments.
            </p>
          </div>
          <div className="hero-actions">
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
        <FloatingComment />
      </section>
      <section
        className="section selected-scene"
        id="selected-work"
        aria-labelledby="selected-heading"
      >
        <div className="scene-transition" aria-hidden="true">
          <svg
            className="scene-bands"
            viewBox="0 0 1440 280"
            preserveAspectRatio="none"
            fill="none"
            focusable="false"
          >
            {/* blurred/background sweep */}
            <path
              className="scene-band-ghost"
              d="
                M -120 96
                C 220 42, 500 150, 830 142
                C 1080 136, 1290 78, 1560 104
              "
            />

            {/* thin orange accent */}
            <path
              className="scene-band-orange"
              d="
                M -120 190
                C 260 140, 610 198, 940 176
                C 1180 160, 1370 118, 1560 126
              "
            />

            {/* main blue ribbon */}
            <path
              id="scene-blue-path"
              className="scene-band-blue"
              d="
                M -120 132
                C 230 82, 560 176, 880 162
                C 1110 152, 1320 108, 1560 118
              "
            />

            <text className="scene-band-type">
              <textPath
                href="#scene-blue-path"
                startOffset="9%"
                dy="10"
              >
                VISUALS × INTERFACES × SOFTWARE
              </textPath>
            </text>
          </svg>

          <span className="scene-mobile-type">
            VISUALS × INTERFACES × SOFTWARE
          </span>
        </div>
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
                <li>Photography</li>
                <li>Videography</li>
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
          <RevealOnce className="peek-ledge">
            <Mascot variant="peek" />
          </RevealOnce>
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
