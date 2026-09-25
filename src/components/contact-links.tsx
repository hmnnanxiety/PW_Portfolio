import { profile } from "@/content/profile";
import { CopyEmailButton } from "@/components/copy-email-button";

export function ContactLinks({ copyEmail = false }: { copyEmail?: boolean }) {
  const socials = [
    ["GitHub", profile.github],
    ["LinkedIn", profile.linkedin],
    ["Instagram", profile.instagram],
  ] as const;
  return (
    <ul className="contact-list">
      <li>
        <span className="contact-label">Email</span>
        {profile.email ? (
          <>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            {copyEmail && <CopyEmailButton email={profile.email} />}
          </>
        ) : (
          <span className="pending">Address — pending</span>
        )}
      </li>
      {socials.map(([label, url]) => (
        <li key={label}>
          <span className="contact-label">{label}</span>
          {url ? (
            <a href={url}>
              Visit {label}
              <span aria-hidden="true"> ↗</span>
            </a>
          ) : (
            <span className="pending">URL — pending</span>
          )}
        </li>
      ))}
    </ul>
  );
}
