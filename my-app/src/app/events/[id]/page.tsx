import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SessionGallery } from "@/components/events/events-archive";
import { events, getEvent } from "@/lib/events";

export function generateStaticParams() {
  return events.map((event) => ({ id: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const event = getEvent(id);
  if (!event) return { title: "Event not found" };
  return { title: event.title, description: event.excerpt };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = getEvent(id);
  if (!event) notFound();

  return (
    <main className="py-12 md:py-20 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div id="event-detail-view" className="fade-up">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <article className="w-full lg:w-2/3">
              <Link
                href="/events"
                className="mb-10 flex items-center w-fit text-xs font-oswald font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 transition"
              >
                <i className="fa-solid fa-arrow-left mr-2" />
                Documented Archive
              </Link>

              <span className="font-oswald text-blue-600 font-bold tracking-[0.2em] uppercase text-xs">
                {event.categoryType} {"//"} {event.category}
              </span>
              {/* The original used an <h2> here, which left the detail view with
                  no <h1> at all. Promoting it keeps the exact same rendering —
                  main.css styles h1 and h2 through one shared rule and the
                  utility classes win either way. */}
              <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-8 text-slate-900 leading-tight">
                {event.title}
              </h1>
              <div
                className="prose prose-slate max-w-none text-slate-600 text-sm md:text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: event.body }}
              />

              <div className="mt-16 pt-12 border-t">
                <h2 className="font-oswald text-lg md:text-xl font-bold uppercase tracking-widest mb-8">
                  Session Gallery
                </h2>
                <SessionGallery images={event.gallery} />
              </div>
            </article>

            <aside className="w-full lg:w-1/3">
              <div className="sticky top-24 p-6 md:p-8 bg-slate-50 border border-slate-200 shadow-sm rounded-lg">
                <div className="space-y-6">
                  {event.venue && (
                    <div>
                      <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Venue
                      </h5>
                      <p className="font-bold text-xs text-slate-800">
                        {event.venue}
                      </p>
                    </div>
                  )}
                  <div>
                    <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                      Date
                    </h5>
                    <p className="font-bold text-xs text-slate-800">
                      {event.date}
                    </p>
                  </div>
                  {event.mentor && (
                    <div>
                      <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Speaker/Mentor
                      </h5>
                      <p className="font-bold text-xs text-slate-800">
                        {event.mentor}
                      </p>
                    </div>
                  )}
                  <div>
                    <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                      Status
                    </h5>
                    <p className="font-bold text-xs text-green-600 uppercase">
                      {event.status}
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  {event.report ? (
                    <a
                      href={`/${event.report}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary btn-sm w-full inline-flex justify-center"
                    >
                      Download Proceeding
                    </a>
                  ) : null}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}