import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigation, site } from "@/lib/content";
import { SankofaMark } from "./Mark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "border-b border-ink-line/70 bg-ink/90 backdrop-blur-md" : "bg-gradient-to-b from-ink/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-page items-center justify-between px-5 md:px-8">
        <Link to="/" className="group flex items-center gap-3" aria-label={`${site.name}, home`}>
          <SankofaMark className="h-9 w-9 text-gold transition-transform duration-500 group-hover:-rotate-6" />
          <span className="leading-none">
            <span className="block font-display text-[19px] tracking-wide text-ivory">Sankofa</span>
            <span className="block text-[9.5px] font-semibold uppercase tracking-[0.42em] text-gold">Royale Awards</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navigation.items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative text-[13px] tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 ${
                  isActive ? "text-gold-light after:w-full" : "text-ivory/80 after:w-0 hover:text-ivory hover:after:w-full"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to={navigation.cta.to}
            className="hidden border border-gold/70 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light transition-colors hover:bg-gold hover:text-ink sm:inline-block"
          >
            {navigation.cta.label}
          </Link>
          <button
            type="button"
            className="p-2 text-ivory lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[76px] overflow-y-auto bg-ink transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-8" aria-label="Mobile">
          {[...navigation.items, navigation.cta].map((item, i) => (
            <NavLink
              key={item.to + i}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `border-b border-ink-line py-4 font-display text-2xl ${isActive ? "text-gold" : "text-ivory"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <p className="mt-8 text-sm text-ivory-muted">{site.presentedBy}</p>
        </nav>
      </div>
    </header>
  );
}
