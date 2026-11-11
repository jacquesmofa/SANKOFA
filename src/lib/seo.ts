import { useEffect } from "react";
import { seo, site } from "./content";

// Page titles, Google descriptions and share pictures: src/content/seo.json (editable in both
// editors). Social apps never run this code: they read the static page that
// scripts/social-pages.mjs writes for every address at build time, from the same file.
function setMeta(attr: "name" | "property", key: string, value: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.content = value;
}

/** Sets the tab title, Google description, canonical link and share tags for the current page. */
export function usePageMeta(path: string, fallbackTitle?: string) {
  useEffect(() => {
    const entry = seo.pages.find((p) => p.path === path);
    const title = entry?.title ?? (fallbackTitle ? `${fallbackTitle} | ${site.name}` : site.name);
    const description = entry?.description ?? site.tagline;
    const base = seo.site.url.replace(/\/$/, "");
    const url = base + (path === "/" ? "/" : path);
    const pic = entry?.image || seo.site.image;
    const image = /^https?:\/\//.test(pic) ? pic : `${base}/${pic.replace(/^\/+/, "")}`;
    const imageAlt = (entry?.image && entry?.imageAlt) || seo.site.imageAlt;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("property", "og:image:alt", imageAlt);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    setMeta("name", "twitter:image:alt", imageAlt);
    if (path !== "/404") {
      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = url;
    }
  }, [path, fallbackTitle]);
}
