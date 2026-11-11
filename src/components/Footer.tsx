import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { navigation, site, whatsappLink } from "@/lib/content";
import { SankofaMark } from "./Mark";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-ink-line bg-ink-2">
      <SankofaMark className="pointer-events-none absolute -right-24 -top-16 h-[420px] w-[420px] text-gold/[0.04]" />
      <div className="relative mx-auto grid max-w-page gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <Logo variant="full" className="w-44" />
          <p className="mt-4 text-xs text-ivory-muted">{site.presentedBy}</p>
          <p className="mt-6 max-w-sm font-display text-lg italic leading-relaxed text-ivory/80">{site.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {site.socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm text-ivory-muted underline-offset-4 hover:text-gold hover:underline">
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <nav className="md:col-span-3" aria-label="Footer">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-label text-gold">Explore</p>
          <ul className="space-y-2.5">
            {[...navigation.items, navigation.cta].map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-ivory/80 hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-label text-gold">Contact</p>
          <ul className="space-y-3 text-sm text-ivory/80">
            {site.contact.phones.map((p) => (
              <li key={p.link}>
                <a href={`tel:${p.link}`} className="flex items-center gap-3 hover:text-gold">
                  <Phone className="h-4 w-4 text-gold" /> {p.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 hover:text-gold">
                <Mail className="h-4 w-4 text-gold" /> {site.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {site.contact.officeName}
                <br />
                {site.contact.officeAddress}
              </span>
            </li>
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block border border-gold/60 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-light hover:bg-gold hover:text-ink"
          >
            Reserve on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-ink-line">
        <div className="mx-auto flex max-w-page flex-col gap-2 px-5 py-6 text-xs text-ivory-dim md:flex-row md:justify-between md:px-8">
          <p>© {year} {site.name}. A CAWAP initiative.</p>
          <a href={site.links.cawapWebsite} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            cawap.ca
          </a>
        </div>
      </div>
    </footer>
  );
}
