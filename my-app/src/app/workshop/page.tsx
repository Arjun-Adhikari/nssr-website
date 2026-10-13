import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Hands-on masterclasses built to turn willingness into capability: scientific writing, LaTeX typesetting, data tools, and the working habits of real research.",
};

const sessionThemes = [
  "IMRaD structure",
  "Citation ethics",
  "Reference tools",
  "Grammar & style",
  "Journal finder",
];

export default function WorkshopPage() {
  return (
    <>
      <header className="hero-clear pb-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 research-hero-overlay bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,.35),_transparent_48%),linear-gradient(135deg,#0f172a,#172554)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="font-oswald text-blue-400 uppercase tracking-[.35em] text-xs font-bold">
            NSSR Masterclasses
          </span>
          <h1 className="text-4xl md:text-7xl font-black mt-5 mb-6">
            Skill, shaped by{" "}
            <span className="italic font-light text-blue-300">practice.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 leading-relaxed">
            Hands-on masterclasses built to turn willingness into capability:
            scientific writing, LaTeX typesetting, data tools, and the working
            habits of real research.
          </p>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm leading-relaxed mt-5">
            Each workshop runs as a working session &mdash; a short brief, a
            live build, and time on your own manuscript, slides or code before
            you leave the room.
          </p>
        </div>
      </header>

      {/* WORKSHOP SHOWCASE — creative collage for the Scientific Writing & LaTeX lab */}
      <section className="workshop-showcase" aria-labelledby="showcase-heading">
        <div className="showcase-container">
          {/* Left: context */}
          <div className="showcase-text">
            <span className="feature-meta">
              Workshop Spotlight &bull; Jan-Feb 2026
            </span>
            <h2 className="feature-title" id="showcase-heading">
              Scientific Writing <em>&amp; LaTeX</em>
            </h2>
            <p className="feature-desc">
              An intensive multi-day workshop equipping researchers with the
              foundational tools for academic formatting, rigorous
              documentation, and publication-ready manuscript preparation.
            </p>

            <ul className="session-themes">
              {sessionThemes.map((theme) => (
                <li key={theme}>{theme}</li>
              ))}
            </ul>

            <Link className="showcase-link" href="/gallery">
              See it in the full gallery
            </Link>
          </div>

          {/* Right: strict 3-piece asymmetric grid — one large spanning both rows, two stacked */}
          <div className="feature-photo-grid">
            <div className="photo-large">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/latexfolder/latex-main.jpg"
                alt="LaTeX Workshop Session"
                loading="lazy"
              />
            </div>
            <div className="photo-small">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/latexfolder/latex-sub1.jpg"
                alt="Research tools slide"
                loading="lazy"
              />
            </div>
            <div className="photo-small">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/latexfolder/latex-sub2.jpg"
                alt="Workshop slide on types of research reports"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closing note */}
      <section className="py-16 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <p className="max-w-2xl mx-auto text-slate-500 italic">
            Formatting should be the quiet part of research &mdash; so the
            thinking can be the loud part.
          </p>
          <Link
            href="/events"
            className="inline-block mt-6 font-oswald text-xs uppercase tracking-widest text-blue-700"
          >
            Browse the workshop archive
          </Link>
        </div>
      </section>
    </>
  );
}