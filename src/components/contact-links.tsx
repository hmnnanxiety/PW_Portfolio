import { profile } from "@/content/profile";
import { CopyEmailButton } from "@/components/copy-email-button";

export function ContactLinks({ copyEmail = false }: { copyEmail?: boolean }) {
  const destinations = [
    ["Email", profile.email ? `mailto:${profile.email}` : null, "say hi"],
    [
      "School",
      profile.schoolEmail ? `mailto:${profile.schoolEmail}` : null,
      "academic stuff",
    ],
    ["GitHub", profile.github, "see the code"],
    ["LinkedIn", profile.linkedin, "professional me"],
    ["Instagram", profile.instagram, "visual chaos"],
  ] as const;
  return (
    <ul className="contact-list">
      {destinations.map(([label, url, note]) => (
        <li key={label}>
          {url ? (
            <a
              href={url}
              className="contact-action"
              {...(url.startsWith("https:")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span>
                {label} <span aria-hidden="true">↗</span>
              </span>
              <span className="contact-note" aria-hidden="true">
                {note}
              </span>
              {url.startsWith("https:") && (
                <span className="sr-only"> (opens in a new tab)</span>
              )}
            </a>
          ) : (
            <span className="pending">{label} — pending</span>
          )}
          {label === "Email" && copyEmail && profile.email && (
            <CopyEmailButton email={profile.email} />
          )}
        </li>
      ))}
    </ul>
  );
}
