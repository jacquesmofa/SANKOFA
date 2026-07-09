import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Award Night", path: "/award-night" },
  { label: "What is Sankofa", path: "/sankofa" },
  { label: "Gallery", path: "/gallery" },
  { label: "Tickets", path: "/tickets" },
  { label: "CAWAP", path: "/cawap" },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "glass-nav"
          : "bg-transparent"
      }`}
    >
      <div className="section-padding">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
              <i className="ri-vip-crown-line text-background-950 text-sm md:text-base"></i>
            </div>
            <span className="font-heading text-base md:text-lg font-semibold text-foreground-50 tracking-wide">
              Sankofa <span className="text-primary-500">Royale</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-label text-sm tracking-wide transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-primary-400"
                    : "text-foreground-400 hover:text-primary-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="/tickets" className="btn-primary-gold text-sm">
              Acquire Tickets
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-foreground-50"
            aria-label="Toggle menu"
          >
            <i className={`ri-${mobileOpen ? "close" : "menu"}-line text-2xl`}></i>
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass-card-strong mx-4 mb-4 p-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-label text-base py-2 border-b border-background-800/50 ${
                  location.pathname === link.path
                    ? "text-primary-400"
                    : "text-foreground-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/tickets" className="btn-primary-gold text-sm text-center mt-2">
              Acquire Tickets
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}