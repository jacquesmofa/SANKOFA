import { site } from "@/lib/content";
import { asset } from "@/lib/media";

/** The real Sankofa Royale Award logo: the crowned Sankofa bird (mark) or bird + wordmark (full). */
export function Logo({ variant = "mark", className = "" }: { variant?: "mark" | "full"; className?: string }) {
  const src = variant === "full" ? site.logoFull : site.logo;
  return <img src={asset(src)} alt={variant === "full" ? site.name : ""} className={className} decoding="async" draggable={false} />;
}
