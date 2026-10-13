import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A curated collection of NSSR events, workshops, outreach programs, and community moments captured across Nepal.",
};

export default function GalleryPage() {
  return (
    <>
      <header className="hero-clear pb-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,.35),_transparent_48%),linear-gradient(135deg,#0f172a,#172554)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="font-oswald text-blue-400 uppercase tracking-[.35em] text-xs font-bold">
            Visual Archive
          </span>
          <h1 className="text-4xl md:text-7xl font-black mt-5 mb-6">
            Moments in{" "}
            <span className="italic font-light text-blue-300">Focus</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 leading-relaxed">
            A curated collection of NSSR events, workshops, outreach programs,
            and community moments captured across Nepal.
          </p>
        </div>
      </header>

      <section className="creative-photo-wall py-20 md:py-28">
        <div className="wall-header text-center max-w-3xl mx-auto mb-16 px-6">
          <h2 className="wall-title font-serif font-black text-3xl md:text-5xl text-slate-900 mb-4">
            Visual Archive
          </h2>
          <p className="wall-subtitle text-slate-600 text-lg leading-relaxed">
            Exploring NSSR&apos;s impact through the lens &mdash; workshops,
            talks, outreach, and community.
          </p>
        </div>

        <GalleryGrid />
      </section>
    </>
  );
}