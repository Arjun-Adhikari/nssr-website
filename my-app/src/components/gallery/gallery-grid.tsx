"use client";

import { useEffect, useState } from "react";
import { galleryImages } from "@/lib/gallery";

/**
 * Port of the masonry grid + `#gallery-lightbox` behaviour in `gallery.html`.
 * The original used document-level click delegation on `.masonry-item`; here
 * each tile owns its handler and the lightbox is React state.
 */
export function GalleryGrid() {
  const [open, setOpen] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="masonry-grid" id="masonry-grid">
        {galleryImages.map((image) => (
          <button
            type="button"
            key={image.src}
            className="masonry-item"
            onClick={() => setOpen(image)}
            aria-label={image.alt}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.src} alt={image.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {open && (
        <div
          className="lightbox"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery preview"
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setOpen(null)}
            aria-label="Close preview"
          >
            &times;
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={open.src} alt={open.alt} />
        </div>
      )}
    </>
  );
}