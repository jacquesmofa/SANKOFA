/** The Sankofa Adinkra heart, drawn for this site: the brand's signature mark. */
export function SankofaMark({ className = "", title }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 90C30 74 8 60 8 36 8 19 20 8 34 8c11 0 18 8 18 19 0 8-6 13-12 10-5-2-4-10 2-10" />
        <path d="M50 90C70 74 92 60 92 36 92 19 80 8 66 8c-11 0-18 8-18 19 0 8 6 13 12 10 5-2 4-10-2-10" />
        <path d="M50 90c-6 5-15 5-15-2 0-4 5-5 7-2M50 90c6 5 15 5 15-2 0-4-5-5-7-2" />
      </g>
    </svg>
  );
}

/** Gold rule with the Sankofa mark in the middle: used between sections. */
export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 text-gold ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/70 md:w-28" />
      <SankofaMark className="h-6 w-6" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/70 md:w-28" />
    </div>
  );
}

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`font-sans text-[11px] font-semibold uppercase tracking-label text-gold ${className}`}>{children}</p>;
}
