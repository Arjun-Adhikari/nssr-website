"use client";

import { useEffect } from "react";

/**
 * Port of `openLightbox`/`closeLightbox` in `assets/js/pages/event.js`, which
 * toggled a `.hidden` overlay and locked body scroll. Escape now closes it too.
 */
export function Lightbox({
  src,
  onClose,
}: {
  src: string;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[2000] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <button
        className="absolute top-6 right-6 text-white text-3xl"
        onClick={onClose}
        aria-label="Close preview"
      >
        <i className="fa-solid fa-xmark" />
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        onClick={(event) => event.stopPropagation()}
        className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
      />
    </div>
  );
}