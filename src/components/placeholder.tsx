export function Placeholder({ label, note }: { label: string; note?: string }) {
  return (
    <div className="placeholder">
      <span className="placeholder-label">{label}</span>
      {note && <span className="placeholder-note">{note}</span>}
    </div>
  );
}
export function ContentPlaceholder({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="content-placeholder">
      <strong>TODO</strong> — {children}
    </div>
  );
}
