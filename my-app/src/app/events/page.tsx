import type { Metadata } from "next";
import { EventsArchive } from "@/components/events/events-archive";

export const metadata: Metadata = {
  title: "Events Directory",
  description:
    "The central hub for NSSR workshops and online talks — every session we have run, with proceedings and photo documentation.",
};

const partners = Array.from({ length: 12 }, (_, i) => `assets/images/collab/${i + 1}.png`);

export default function EventsPage() {
  return (
    <>
      {/* 1. EVENTS HERO BANNER */}
      <header className="events-hero">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/IMG_20260902_144525.jpg"
            className="w-full h-full object-cover scale-110 fade-in-up"
            style={{ animationDuration: "8s" }}
            alt="NSSR event"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/92 via-slate-900/86 to-slate-900/96" />
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>
        <div className="events-hero__inner">
          <span className="events-badge">NSSR Events &amp; Symposia</span>
          <h1 className="events-hero__title">
            The Events <em>Directory</em>
          </h1>
          <p className="events-hero__lede">
            The central hub for our community of student researchers, mentors,
            and scholars to connect, collaborate, and learn &mdash;
            hands-on technical <strong>Workshops</strong> and accessible
            virtual <strong>Online Talks</strong> connecting Nepali
            researchers with global pioneers.
          </p>
        </div>
      </header>

      <EventsArchive />

      {/* PARTNER / SPONSOR LOGOS - Horizontal Flexbox Grid */}
      <section
        className="py-16 bg-white border-b border-slate-100"
        aria-labelledby="partners-heading"
      >
        <div className="container mx-auto px-6">
          <h2 id="partners-heading" className="sr-only">
            Event Partners &amp; Sponsors
          </h2>
          <div className="partner-logo-grid" role="list">
            {partners.map((src, i) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={src}
                src={src}
                alt={`Partner ${i + 1}`}
                className="partner-logo"
                role="listitem"
                loading="lazy"
              />
            ))}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/collab/mmihs.png"
              alt="MMIHS — Manmohan Memorial Institute of Health Sciences"
              className="partner-logo"
              role="listitem"
              loading="lazy"
              width={800}
              height={761}
            />
          </div>
          <p className="text-center text-xs uppercase font-bold text-slate-400 mt-8 tracking-widest">
            Event Partners &amp; Sponsors
          </p>
        </div>
      </section>
    </>
  );
}