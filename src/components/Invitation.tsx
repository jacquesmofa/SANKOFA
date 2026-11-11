import { home } from "@/lib/content";
import { Button } from "./Button";
import { Img } from "./Img";
import { Logo } from "./Logo";

/** Closing section styled as an engraved gala invitation card over a photo. */
export function Invitation() {
  const inv = home.invitation;
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <Img src={inv.image} alt="" widths={[800, 1400, 2000]} className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
      <div className="relative mx-auto max-w-3xl px-5">
        <div className="border border-gold/60 bg-ink/80 p-2 backdrop-blur-sm">
          <div className="border border-gold/30 px-6 py-12 text-center md:px-16 md:py-16">
            <Logo className="mx-auto h-16 w-auto" />
            <p className="mt-6 font-display text-sm italic tracking-wide text-gold-light">{inv.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl text-ivory md:text-5xl">{inv.heading}</h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ivory/75">{inv.body}</p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Button to="/tickets">{inv.primaryLabel}</Button>
              <Button to="/contact" variant="outline">
                {inv.secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
