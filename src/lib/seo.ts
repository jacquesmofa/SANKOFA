import { useEffect } from "react";
import { seo, site } from "./content";

/** Sets the browser tab title and Google description for the current page. */
export function usePageMeta(path: string, fallbackTitle?: string) {
  useEffect(() => {
    const entry = seo.pages.find((p) => p.path === path);
    document.title = entry?.title ?? (fallbackTitle ? `${fallbackTitle} | ${site.name}` : site.name);
    const description = entry?.description ?? site.tagline;
    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    tag.content = description;
  }, [path, fallbackTitle]);
}
