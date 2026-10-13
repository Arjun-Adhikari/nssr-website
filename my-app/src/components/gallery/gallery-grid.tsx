"use client";

import { useEffect, useState, type SyntheticEvent } from "react";
import { galleryImages } from "@/lib/gallery";

/**
 * Port of the masonry grid + `#gallery-lightbox` behaviour in `gallery.html`.
 * The original used document-level click delegation on `.masonry-item`; here
 * each tile owns its handler and the lightbox is React state.
 */
export function GalleryGrid() {
  const [open, setOpen] = useState<{ src: string; alt: string } | null>(null);

  /* globals.css keeps `.masonry-item img[loading="lazy"]` at opacity 0 until the
     `loaded` class lands. gallery.html did this with an inline
     onload="this.classList.add('loaded')"; without it every photo renders as an
     empty placeholder box. */
  const revealImage = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.classList.add("loaded");
  };

  /* Cached images can finish before React attaches onLoad, which would then
     never fire and strand the photo at opacity 0. */
  useEffect(() => {
    document
      .querySelectorAll<HTMLImageElement>('.masonry-item img[loading="lazy"]')
      .forEach((image) => {
        if (image.complete) image.classList.add("loaded");
      });
  }, []);

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
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              onLoad={revealImage}
            />
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