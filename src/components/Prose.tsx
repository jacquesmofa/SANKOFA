/** Paragraphs from editor text: a blank line starts a new paragraph. */
export function Prose({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`space-y-5 ${className}`}>
      {text
        .split(/\n\s*\n/)
        .filter(Boolean)
        .map((p, i) => (
          <p key={i}>{p}</p>
        ))}
    </div>
  );
}
