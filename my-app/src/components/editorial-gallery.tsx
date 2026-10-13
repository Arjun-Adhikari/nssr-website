"use client";

import { useState } from "react";
import { Lightbox } from "@/components/lightbox";

export type EditorialGalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

/**
 * Port of the `.editorial-gallery-item` grid with click-to-lightbox, used on
 * the Science Beyond the Classroom and Student Empowerment pages.
 */
export function EditorialGallery({ items }: { items: EditorialGalleryItem[] }) {
  const [src, setSrc] = useState<string | null>(null);

  return (
    <>
      <div className="editorial-gallery-grid">
        {items.map((item) => (
          <button
            type="button"
            key={item.src}
            className="editorial-gallery-item"
            onClick={() => setSrc(item.src)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.src} alt={item.alt} loading="lazy" />
            <div className="editorial-gallery-item__caption">
              {item.caption}
            </div>
          </button>
        ))}
      </div>
      {src && <Lightbox src={src} onClose={() => setSrc(null)} />}
    </>
  );
}