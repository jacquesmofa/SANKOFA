/**
 * Image URLs: Cloudinary photos get resized/compressed on the fly (f_auto = WebP/AVIF, q_auto = smart quality).
 * Photos uploaded through the website editor live in /media/uploads and are served as they are.
 */
const CLOUDINARY = /^(https:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\/)(.*)$/;

export type Crop = { w: number; h?: number; fill?: boolean };

export function isCloudinary(src: string) {
  return CLOUDINARY.test(src);
}

export function img(src: string, { w, h, fill = true }: Crop): string {
  if (!src) return "";
  const m = src.match(CLOUDINARY);
  if (!m) return asset(src);
  const t = ["f_auto", "q_auto", h && fill ? `c_fill,g_auto,w_${w},h_${h}` : `c_limit,w_${w}`].join(",");
  return `${m[1]}${t}/${m[2]}`;
}

/** srcset for a set of widths, keeping the same aspect ratio when one is given. */
export function srcSet(src: string, widths: number[], ratio?: number): string | undefined {
  if (!isCloudinary(src)) return undefined;
  return widths.map((w) => `${img(src, { w, h: ratio ? Math.round(w * ratio) : undefined })} ${w}w`).join(", ");
}

/** Local files respect the base path (the /preview/ build lives in a sub-folder). */
export function asset(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path;
  return `${__BASE_PATH__.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
