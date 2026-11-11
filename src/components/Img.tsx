import { img, srcSet } from "@/lib/media";

type Props = {
  src: string;
  alt: string;
  /** height ÷ width; when set, the photo is cropped around faces/subjects to this shape */
  ratio?: number;
  /** widths offered to the browser */
  widths?: number[];
  sizes?: string;
  className?: string;
  priority?: boolean;
};

export function Img({ src, alt, ratio, widths = [480, 800, 1200], sizes = "100vw", className = "", priority = false }: Props) {
  const largest = widths[widths.length - 1];
  return (
    <img
      src={img(src, { w: largest, h: ratio ? Math.round(largest * ratio) : undefined })}
      srcSet={srcSet(src, widths, ratio)}
      sizes={sizes}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={className}
    />
  );
}
