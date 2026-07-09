import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFormUrl } from "@/utils/formHelper";

export default function Contact() {
  const [formUrl, setFormUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getFormUrl("Contact Form").then((url) => setFormUrl(url));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formUrl) return;

    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("phone_alt") as HTMLInputElement)?.value;
    if (honeypot && honeypot.trim()) {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
      return;
    }

    setStatus("submitting");
    try {
      const formDataObj = new FormData(form);
      const response = await fetch(formUrl, {
        method: "POST",
        body: formDataObj,
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
        setErrorMsg(serverMsg || "Submission failed. Please try again.");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-background-950 pt-24 md:pt-28">
      <section className="section-padding py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-500/30 bg-primary-950/30 mb-6">
            <i className="ri-mail-send-line text-primary-500 text-xs"></i>
            <span className="font-label text-xs uppercase tracking-[0.15em] text-primary-400">
              Get in Touch
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-50 leading-tight mb-5">
            Contact <span className="text-gradient-gold italic">Us</span>
          </h1>
          <p className="text-foreground-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Whether you have questions about tickets, nominations, sponsorships, or just want to learn more about CAWAP, we would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary-950/50 border border-primary-500/20 flex items-center justify-center">
                  <i className="ri-phone-line text-primary-500"></i>
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground-200">Phone</h3>
              </div>
              <a href="tel:+16475815901" className="text-foreground-500 text-sm hover:text-primary-400 transition-colors block">
                647-581-5901
              </a>
            </div>

            <div className="glass-card p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary-950/50 border border-primary-500/20 flex items-center justify-center">
                  <i className="ri-mail-line text-primary-500"></i>
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground-200">Email</h3>
              </div>
              <a href="mailto:cawap2005@gmail.com" className="text-foreground-500 text-sm hover:text-primary-400 transition-colors block">
                cawap2005@gmail.com
              </a>
            </div>

            <div className="glass-card p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary-950/50 border border-primary-500/20 flex items-center justify-center">
                  <i className="ri-map-pin-line text-primary-500"></i>
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground-200">Location</h3>
              </div>
              <p className="text-foreground-500 text-sm leading-relaxed">
                23 Regan Road<br />
                Brampton, ON L7A 1B2
              </p>
            </div>

            <div className="glass-card p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary-950/50 border border-primary-500/20 flex items-center justify-center">
                  <i className="ri-global-line text-primary-500"></i>
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground-200">Website</h3>
              </div>
              <a href="https://www.cawap.ca" target="_blank" rel="noopener noreferrer" className="text-foreground-500 text-sm hover:text-primary-400 transition-colors block">
                www.cawap.ca
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            {formUrl && (
              <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8" data-readdy-form>
                <input type="hidden" name="form_id" value="contact-form" />
                <input
                  type="text"
                  name="phone_alt"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  readOnly
                  className="hp-field"
                />
                <h3 className="font-heading text-lg font-semibold text-foreground-200 mb-5">
                  Send a Message
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-foreground-500 text-xs uppercase tracking-wider mb-2 font-label">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-background-900/50 border border-background-800/60 rounded-lg px-4 py-2.5 text-foreground-200 text-sm focus:outline-none focus:border-primary-500/50 transition-colors placeholder:text-foreground-700"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-foreground-500 text-xs uppercase tracking-wider mb-2 font-label">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-background-900/50 border border-background-800/60 rounded-lg px-4 py-2.5 text-foreground-200 text-sm focus:outline-none focus:border-primary-500/50 transition-colors placeholder:text-foreground-700"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-foreground-500 text-xs uppercase tracking-wider mb-2 font-label">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-background-900/50 border border-background-800/60 rounded-lg px-4 py-2.5 text-foreground-200 text-sm focus:outline-none focus:border-primary-500/50 transition-colors placeholder:text-foreground-700"
                      placeholder="(Optional)"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-foreground-500 text-xs uppercase tracking-wider mb-2 font-label">
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-background-900/50 border border-background-800/60 rounded-lg px-4 py-2.5 text-foreground-200 text-sm focus:outline-none focus:border-primary-500/50 transition-colors"
                    >
                      <option>General Inquiry</option>
                      <option>Ticket Purchase</option>
                      <option>Nomination Question</option>
                      <option>Sponsorship</option>
                      <option>Media & Press</option>
                      <option>Volunteer</option>
                    </select>
                  </div>
                </div>
                <div className="mb-5">
                  <label htmlFor="contact-message" className="block text-foreground-500 text-xs uppercase tracking-wider mb-2 font-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    maxLength={500}
                    className="w-full bg-background-900/50 border border-background-800/60 rounded-lg px-4 py-2.5 text-foreground-200 text-sm focus:outline-none focus:border-primary-500/50 transition-colors placeholder:text-foreground-700 resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                  <p className="text-foreground-700 text-[10px] mt-1 text-right">
                    {formData.message.length}/500
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary-gold text-sm w-full sm:w-auto inline-flex items-center justify-center"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                  <i className="ri-send-plane-line ml-2"></i>
                </button>
                {status === "success" && (
                  <p className="text-primary-400 text-sm mt-3">Thank you! We will be in touch soon.</p>
                )}
                {status === "error" && (
                  <p className="text-accent-400 text-sm mt-3">{errorMsg}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}