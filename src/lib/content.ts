import site from "@/content/site.json";
import event from "@/content/event.json";
import navigation from "@/content/navigation.json";
import seo from "@/content/seo.json";
import gallery from "@/content/gallery.json";
import home from "@/content/pages/home.json";
import awardNight from "@/content/pages/award-night.json";
import sankofa from "@/content/pages/sankofa.json";
import nomination from "@/content/pages/nomination.json";
import tickets from "@/content/pages/tickets.json";
import cawap from "@/content/pages/cawap.json";
import contact from "@/content/pages/contact.json";

// All text and photos live in src/content/*.json and are edited in the website editors (/admin or Pages CMS).
export { site, event, navigation, seo, gallery, home, awardNight, sankofa, nomination, tickets, cawap, contact };

export type Album = (typeof gallery.albums)[number];

export const whatsappLink = (message = site.contact.whatsappMessage) =>
  `https://wa.me/${site.contact.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

/** The next gala's date, if one has been set and it is still in the future. */
export function upcomingDate(): Date | null {
  if (!event.date) return null;
  const d = new Date(`${event.date}T17:00:00`);
  return Number.isNaN(d.getTime()) || d.getTime() < Date.now() ? null : d;
}

export function formatDate(iso: string): string {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString("en-CA", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}
