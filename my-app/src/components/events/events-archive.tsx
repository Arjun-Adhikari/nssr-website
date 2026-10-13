"use client";

import Link from "next/link";
import { useState } from "react";
import { Lightbox } from "@/components/lightbox";
import {
  eventsByCategory,
  eventsInFeedOrder,
  statusMeta,
} from "@/lib/events";
import type { NssrEvent } from "@/lib/types";

const TABS = [
  {
    id: "workshops-grid",
    label: "Workshops",
    icon: "fa-solid fa-laptop-code",
    description:
      "Immersive, hands-on masterclasses designed to build essential technical capabilities, from scientific LaTeX formatting and MATLAB simulations to machine learning pipelines, laboratory techniques, and rigorous research methodology.",
  },
  {
    id: "online-grid",
    label: "Online Talks",
    icon: "fa-solid fa-satellite-dish",
    description:
      "Accessible virtual dialogues and international speaker sessions bridging geographic divides to connect Nepali student researchers directly with global scholars, cutting-edge discoveries, and overseas academic opportunities.",
  },
];

function ArchiveCard({ event }: { event: NssrEvent }) {
  const status = statusMeta(event.status);
  return (
    <article className="archive-card" tabIndex={0} role="link">
      <Link href={`/events/${event.slug}`} className="block">
        <div className="card-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={event.image} alt={event.title} loading="lazy" />
        </div>
        <div className="card-content">
          <div className="card-meta">
            <span className="card-tag">{event.categoryType}</span>
            <span className="card-date">{event.date}</span>
            <span className={`status-badge ${status.cls}`}>{status.label}</span>
          </div>
          <h3 className="card-title">{event.title}</h3>
          <p className="card-excerpt">{event.excerpt}</p>
          <span className="card-cta">READ MORE</span>
        </div>
      </Link>
    </article>
  );
}

/** The compact highlight strip that always shows the newest entry in the feed. */
function Featured({ event }: { event: NssrEvent }) {
  const status = statusMeta(event.status);
  return (
    <div
      className="event-featured--compact-row"
      style={{
        maxWidth: 900,
        margin: "0 auto 32px",
        display: "flex",
        border: "1px solid rgba(15, 23, 42, 0.08)",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <div
        className="event-featured__media"
        style={{
          flex: "0 0 240px",
          height: 180,
          background: "var(--bg-surface-sunken)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={event.image} alt={event.title} />
      </div>
      <div className="event-featured__body" style={{ padding: 32, flex: 1 }}>
        <h3 className="text-slate-900 font-black text-2xl mb-2">
          {event.title}
        </h3>
        <p className="text-slate-600 text-sm mb-6">{event.excerpt}</p>
        <div
          className="event-featured__meta-compat"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 16,
            flexWrap: "wrap",
          }}
        >
          <span className={`status-badge ${status.cls}`}>{status.label}</span>
          <span className="text-xs font-semibold text-nssrBlue uppercase tracking-widest">
            {event.categoryType}
          </span>
          <span className="text-xs font-semibold text-nssrBlue uppercase tracking-widest">
            {event.date}
          </span>
        </div>
        <div
          className="event-featured__actions"
          style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
        >
          <Link
            href={`/events/${event.slug}`}
            className="btn-primary btn-sm inline-flex max-lg:min-h-11 max-lg:items-center"
          >
            View Event Details
          </Link>
          {event.report && (
            <a
              href={`/${event.report}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-sm inline-flex max-lg:min-h-11 max-lg:items-center"
            >
              Download Proceeding
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/** Featured / upcoming event highlight, rendered above the partners strip. */
export function FeaturedEvent() {
  const featured = eventsInFeedOrder()[0];

  return (
    <section
      className="pb-6 md:pb-10 bg-slate-50 border-b border-slate-100"
      aria-labelledby="featured-heading"
    >
      <div className="container mx-auto px-6">
        <h2 id="featured-heading" className="sr-only">
          Featured event
        </h2>
        <div id="featured-slot">{featured && <Featured event={featured} />}</div>
      </div>
    </section>
  );
}

export function EventsArchive() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  return (
    <>
      {/* 3. MAIN HUB (CATEGORIZED) — a <section>, not a <main>: the page owns
          the single main landmark, and nesting a second one announced two
          "main" landmarks to screen readers. */}
      <section
        className="py-12 md:py-20 border-t border-slate-100"
        id="main-archive"
      >
        <div className="container mx-auto px-6">
          <div id="event-list-view">
            {/* Category Descriptions */}
            <div className="editorial-row mb-16">
              {TABS.map((tab) => (
                <div className="deboxed-card" key={tab.id}>
                  <i className={`${tab.icon} icon-inline text-2xl mb-3`} />
                  <h4 className="framework-card__title font-oswald">
                    {tab.label}
                  </h4>
                  <p className="framework-card__body">{tab.description}</p>
                </div>
              ))}
            </div>

            {/* Tabs Navigation */}
            <div
              className="events-tabs"
              id="tabs-container"
              role="tablist"
              aria-label="Event categories"
            >
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  className="events-tab"
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={tab.id}
                  data-target={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <i className={`${tab.icon} icon-inline`} aria-hidden="true" />
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="events-section-head">
              <div>
                <h2>Browse the archive</h2>
                <p>
                  Every session NSSR has run, with proceedings and photo
                  documentation.
                </p>
              </div>
            </div>

            {TABS.map((tab) => {
              const list = eventsByCategory(tab.label);
              return (
                <div
                  key={tab.id}
                  id={tab.id}
                  className={`tab-content${activeTab === tab.id ? " active" : ""}`}
                >
                  <div className="premium-card-grid">
                    {list.length === 0 ? (
                      <p className="framework-card__body">
                        No proceedings available in this category yet.
                      </p>
                    ) : (
                      <div className="archive-card-grid">
                        {list.map((event) => (
                          <ArchiveCard key={event.slug} event={event} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

/** Session gallery grid with the shared lightbox, used on the event detail. */
export function SessionGallery({ images }: { images: string[] }) {
  const [src, setSrc] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {images.map((image) => (
          <button
            key={image}
            type="button"
            className="aspect-square bg-slate-100 overflow-hidden cursor-zoom-in"
            onClick={() => setSrc(image)}
            aria-label="Open image"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
      {src && <Lightbox src={src} onClose={() => setSrc(null)} />}
    </>
  );
}