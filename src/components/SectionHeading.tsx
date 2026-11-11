import { Eyebrow } from "./Mark";

export function SectionHeading({ eyebrow, heading, body, align = "left", className = "" }: { eyebrow?: string; heading: string; body?: string; align?: "left" | "center"; className?: string }) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 font-display text-4xl leading-[1.08] text-ivory md:text-5xl">{heading}</h2>
      {body && <p className="mt-5 text-lg leading-relaxed text-ivory/70">{body}</p>}
    </div>
  );
}
