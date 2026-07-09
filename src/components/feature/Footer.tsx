import { Link } from "react-router-dom";
import { getFormUrl } from "@/utils/formHelper";
import { useState, useEffect } from "react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Award Night", path: "/award-night" },
  { label: "What is Sankofa", path: "/sankofa" },
  { label: "Gallery", path: "/gallery" },
  { label: "Tickets", path: "/tickets" },
  { label: "CAWAP", path: "/cawap" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  const [formUrl, setFormUrl] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getFormUrl("Newsletter Subscription").then((url) => setFormUrl(url));
  }, []);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !formUrl) return;

    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("contact_alt") as HTMLInputElement)?.value;
    if (honeypot && honeypot.trim()) {
      setStatus("success");
      setEmail("");
      return;
    }

    setStatus("submitting");
    try {
      const formData = new FormData(form);
      const response = await fetch(formUrl, {
        method: "POST",
        body: formData,
      });
      const responseText = await response.text();
      let parsed;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMsg = parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;
      if (!response.ok || parsed?.code !== "OK" || serverMsg.toLowerCase().includes("spam")) {
        setStatus("error");
        setErrorMsg(serverMsg || "Subscription failed. Please try again.");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <footer className="bg-background-950 border-t border-background-900/50">
      <div className="section-padding py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <i className="ri-vip-crown-line text-background-950 text-sm"></i>
              </div>
              <span className="font-heading text-xl font-semibold text-foreground-50">
                Sankofa <span className="text-primary-500">Royale</span>
              </span>
            </div>
            <p className="text-foreground-600 text-sm leading-relaxed max-w-sm mb-8">
              Celebrating and acknowledging Black excellence and the power of Us.
              Join us for an unforgettable evening of honor, culture, and community.
            </p>

            {formUrl && (
              <form onSubmit={handleSubscribe} className="max-w-sm" data-readdy-form>
                <input type="hidden" name="form_id" value="newsletter-subscription" />
                <input
                  type="text"
                  name="contact_alt"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  readOnly
                  className="hp-field"
                />
                <label htmlFor="newsletter-email" className="block text-foreground-500 text-xs uppercase tracking-wider mb-3 font-label">
                  Subscribe for Updates
                </label>
                <div className="flex gap-2">
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 bg-transparent border-b border-foreground-800/50 text-foreground-200 text-sm py-2 px-1 focus:outline-none focus:border-primary-500 transition-colors placeholder:text-foreground-700"
                  />
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary-gold text-xs px-4 py-2"
                  >
                    {status === "submitting" ? "..." : "Subscribe"}
                    <i className="ri-arrow-right-line ml-1"></i>
                  </button>
                </div>
                {status === "success" && (
                  <p className="text-primary-400 text-xs mt-2">Thank you for subscribing!</p>
                )}
                {status === "error" && (
                  <p className="text-accent-400 text-xs mt-2">{errorMsg}</p>
                )}
              </form>
            )}
          </div>

          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="text-foreground-400 text-xs uppercase tracking-wider mb-5 font-label">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-foreground-600 text-sm hover:text-primary-400 transition-colors underline underline-offset-4 decoration-foreground-800/30 hover:decoration-primary-500/50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 lg:pl-8">
            <h4 className="text-foreground-400 text-xs uppercase tracking-wider mb-5 font-label">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-foreground-500">
              <a href="tel:+16475815901" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                <i className="ri-phone-line text-primary-500"></i>
                647-581-5901
              </a>
              <a href="mailto:cawap2005@gmail.com" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                <i className="ri-mail-line text-primary-500"></i>
                cawap2005@gmail.com
              </a>
              <a href="https://www.cawap.ca" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                <i className="ri-global-line text-primary-500"></i>
                www.cawap.ca
              </a>
            </div>
            <div className="mt-8">
              <h4 className="text-foreground-400 text-xs uppercase tracking-wider mb-3 font-label">
                Location
              </h4>
              <p className="text-foreground-600 text-sm leading-relaxed">
                23 Regan Road<br />
                Brampton, ON<br />
                L7A 1B2
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 md:mt-20 pt-6 border-t border-foreground-900/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground-600 hover:text-primary-400 transition-colors text-sm underline underline-offset-4">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground-600 hover:text-primary-400 transition-colors text-sm underline underline-offset-4">
              Instagram
            </a>
          </div>
          <p className="text-foreground-700 text-xs text-center">
            &copy; {new Date().getFullYear()} Sankofa Royale Awards. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="text-foreground-600 hover:text-primary-400 transition-colors text-sm underline underline-offset-4">
              Privacy
            </Link>
            <Link to="/contact" className="text-foreground-600 hover:text-primary-400 transition-colors text-sm underline underline-offset-4">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}