import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { img } from "@/lib/media";

type Props = { photos: string[]; index: number | null; title: string; onChange: (i: number | null) => void };

/** Full-screen photo viewer: arrows, keyboard (← → Esc) and swipe. Neighbouring photos are preloaded. */
export function Lightbox({ photos, index, title, onChange }: Props) {
  const touchX = useRef<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;
  const go = useCallback((d: number) => index !== null && onChange((index + d + photos.length) % photos.length), [index, photos.length, onChange]);

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prevFocus?.focus();
    };
  }, [open, go, onChange]);

  useEffect(() => {
    if (index === null) return;
    [1, -1].forEach((d) => {
      const p = photos[(index + d + photos.length) % photos.length];
      if (p) new Image().src = img(p, { w: 1600 });
    });
  }, [index, photos]);

  if (index === null) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/95"
      role="dialog"
      aria-modal="true"
      aria-label={`${title}, photo ${index + 1} of ${photos.length}`}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-5 py-4 text-sm text-ivory/80">
        <span className="font-display tracking-wide">{title}</span>
        <span className="tabular-nums text-ivory-muted">
          {index + 1} / {photos.length}
        </span>
        <button ref={closeRef} type="button" onClick={() => onChange(null)} className="p-2 text-ivory hover:text-gold" aria-label="Close">
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="relative flex flex-1 items-center justify-center px-2 pb-6 md:px-20" onClick={(e) => e.target === e.currentTarget && onChange(null)}>
        <img key={photos[index]} src={img(photos[index], { w: 1600 })} alt={`${title}, photo ${index + 1}`} className="max-h-full max-w-full animate-rise object-contain shadow-2xl" />
        <button type="button" onClick={() => go(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 border border-gold/40 bg-ink/70 p-3 text-gold-light hover:bg-gold hover:text-ink md:left-6" aria-label="Previous photo">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button type="button" onClick={() => go(1)} className="absolute right-2 top-1/2 -translate-y-1/2 border border-gold/40 bg-ink/70 p-3 text-gold-light hover:bg-gold hover:text-ink md:right-6" aria-label="Next photo">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
