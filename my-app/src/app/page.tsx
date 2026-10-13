import Link from "next/link";
import { MissionBullets } from "@/components/home/mission-bullets";
import { getLatestEvents } from "@/lib/events";

const focusAreas = [
  {
    icon: "fa-solid fa-atom",
    title: "Physics",
    body: "Fundamental and applied physics, from mathematical ideas to experimental and computational inquiry.",
    offset: false,
  },
  {
    icon: "fa-solid fa-code",
    title: "AI / ML",
    body: "Machine learning, intelligent systems, and data-driven research across disciplines.",
    offset: true,
  },
  {
    icon: "fa-solid fa-dna",
    title: "Biology",
    body: "Living systems, biodiversity, molecular questions, and biological research methods.",
    offset: false,
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Economics",
    body: "Economic systems, markets, behavior, and quantitative approaches to social questions.",
    offset: true,
  },
];

const partners = [
  "assets/images/collab/1.png",
  "assets/images/collab/2.png",
  "assets/images/collab/3.png",
  "assets/images/collab/4.png",
  "assets/images/collab/5.png",
  "assets/images/collab/6.png",
  "assets/images/collab/7.png",
  "assets/images/collab/8.png",
  "assets/images/collab/9.png",
  "assets/images/collab/10.png",
  "assets/images/collab/11.png",
  "assets/images/collab/12.png",
  "assets/images/collab/mmihs.png",
];

export default function Home() {
  const proceedings = getLatestEvents(3);

  return (
    <>
      {/* STANFORD-STYLE FULL-BLEED HERO */}
      <header className="nssr-hero relative min-h-[85vh] md:min-h-screen overflow-hidden bg-nssrDark">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/aspire/asp4.jpeg"
            className="w-full h-full object-cover object-center"
            alt="NSSR Research"
          />
          {/* Stanford-style dark gradient overlay: transparent at top, opaque at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-nssrDark/95 via-nssrDark/60 to-transparent z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-20 h-full flex items-end pb-16 md:pb-24">
          <div className="max-w-4xl w-full animate-fade-in-up">
            <span className="academic-caps text-blue-400 mb-4 md:mb-6 block text-[10px]">
              <i className="fa-solid fa-microscope mr-2" />
              Scientific Inquiry • Kathmandu
            </span>

            <h1 className="text-white text-4xl md:text-7xl lg:text-8xl font-serif font-black leading-tight mb-6 md:mb-8">
              Towards an
              <br className="hidden md:block" />{" "}
              <span className="italic font-light">Informed Society.</span>
            </h1>

            <p className="text-gray-300 text-base md:text-xl max-w-xl mb-8 md:mb-10 font-light leading-relaxed">
              The Nepalese Society of Student Researchers is a catalyst for
              academic excellence, fostering a culture where inquiry meets
              integrity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/membership" className="btn-primary btn-lg btn-sharp">
                Join the Society
              </Link>
              <Link href="/research" className="btn-hero-outline">
                View Repository
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-6 z-20 hidden md:block">
          <div className="flex flex-col items-start gap-2">
            <span className="academic-caps text-white/40 text-[8px]">
              Scroll
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-t from-blue-400 to-transparent" />
          </div>
        </div>
      </header>

      {/* ABOUT NSSR — Stanford/MIT Asymmetrical Split */}
      <section className="about-section" aria-labelledby="about-heading">
        <div
          className="container mx-auto px-6"
          style={{ maxWidth: 1200, padding: "120px 24px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: 80,
              alignItems: "start",
            }}
          >
            {/* Left Column: Introduction */}
            <div>
              <span className="eyebrow-blue">ABOUT NSSR</span>
              <h2 id="about-heading" className="heading-2xl">
                Advancing student-led <br />
                research in Nepal.
              </h2>
            </div>

            {/* Right Column: Content */}
            <div>
              <p className="lede-copy">
                The Nepalese Society of Student Researchers (NSSR) is a
                national, student-governed organisation founded to bridge the gap
                between classroom learning and authentic scientific inquiry. We
                operate on a simple premise: students are not passive recipients
                of knowledge—they are active contributors to the research
                enterprise. By providing structured pathways, direct mentorship,
                and platforms for dissemination, NSSR transforms curiosity into
                credible scholarship.
              </p>

              {/* Mission & Vision Sub-grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 48,
                }}
              >
                <article className="border-t-2 border-nssrDark pt-6">
                  <h3 className="mission-vision-title">Our Mission</h3>
                  <p>
                    To democratise access to research opportunities for every
                    student in Nepal—regardless of institution, geography, or
                    background—through fellowships, workshops, and sustained
                    mentorship that meet international standards of rigour.
                  </p>
                </article>
                <article className="border-t-2 border-nssrDark pt-6">
                  <h3 className="mission-vision-title">Our Vision</h3>
                  <p>
                    A Nepal where student-led research is recognised as a pillar
                    of national innovation—where young investigators publish in
                    peer-reviewed venues, secure global fellowships, and drive
evidence-based solutions for the country&rsquo;s most
                     pressing challenges.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VALUES & ETHICS (INSTITUTIONAL EDITION) */}
      <section className="institutional-framework">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-16 items-start">
            {/* Left: editorial header column */}
            <div>
              <div className="framework-aside">
                <span className="framework-aside__eyebrow">
                  Institutional Framework
                </span>
                <h2 className="framework-aside__title">
                  Governing the <em>Standards of Inquiry.</em>
                </h2>
                <p className="framework-aside__lede">
                  The Nepalese Society of Student Researchers (NSSR) is committed
                  to advancing scientific knowledge, fostering a research-oriented
                  culture, and upholding integrity in every aspect of academic
                  practice.
                </p>

                <MissionBullets>
                  <div className="flex items-start gap-5 group">
                    <div
                      className="nssr-draw-line mt-2"
                      style={{ animationDelay: "0s" }}
                    />
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      A structured research pipeline from first curiosity in
                      Research Pathways to a peer-reviewed paper through the NSRF
                      fellowship.
                    </p>
                  </div>
                  <div className="flex items-start gap-5 group">
                    <div
                      className="nssr-draw-line mt-2"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      Direct mentorship from national and international
                      researchers, built into every fellowship cohort and
                      pathway.
                    </p>
                  </div>
                  <div className="flex items-start gap-5 group">
                    <div
                      className="nssr-draw-line mt-2"
                      style={{ animationDelay: "0.4s" }}
                    />
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      Nationwide outreach through Science Beyond the Classroom
                      and the Student Empowerment Initiative, carrying scientific
                      literacy past Kathmandu&apos;s academic centers.
                    </p>
                  </div>
                </MissionBullets>
              </div>
            </div>

            {/* Right: 2x2 editorial grid of pillars */}
            <div className="pillars-grid">
              <article className="pillar-item">
                <p className="framework-card__kicker">
                  <svg
                    className="icon-inline"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z" />
                  </svg>
                  Inclusivity
                </p>
                <h3 className="framework-card__title">Equal Accessibility</h3>
                <p className="framework-card__body">
                  Ensuring equal access to educational and scientific
                  opportunities for all researchers, regardless of socio-economic
                  background.
                </p>
              </article>

              <article className="pillar-item">
                <p className="framework-card__kicker">
                  <svg
                    className="icon-inline"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M12 2.5 4 6v5.4c0 4.7 3.3 9 8 10.1 4.7-1.1 8-5.4 8-10.1V6l-8-3.5z" />
                    <path d="m8.8 12 2.2 2.2 4.2-4.4" />
                  </svg>
                  Excellence
                </p>
                <h3 className="framework-card__title">Rigorous Integrity</h3>
                <p className="framework-card__body">
                  Upholding absolute honesty, transparency, and scientific
                  rigor in research, publication, and institutional governance.
                </p>
              </article>

              <article className="pillar-item">
                <p className="framework-card__kicker">
                  <svg
                    className="icon-inline"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <circle cx="6" cy="7" r="2.6" />
                    <circle cx="18" cy="7" r="2.6" />
                    <circle cx="12" cy="16" r="2.6" />
                    <path d="M6 9.6v2.2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9.6M12 13.8V11" />
                  </svg>
                  Collaboration
                </p>
                <h3 className="framework-card__title">Global Alignment</h3>
                <p className="framework-card__body">
                  Fostering partnerships that align with national priorities and
                  UN global development goals for long-term impact.
                </p>
              </article>

              <article className="pillar-item">
                <p className="framework-card__kicker">
                  <svg
                    className="icon-inline"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M12 4v16M7 8h10M5 8l-2.5 6a3 3 0 0 0 5 0L5 8zM19 8l-2.5 6a3 3 0 0 0 5 0L19 8zM8 20h8" />
                  </svg>
                  Policy Framework
                </p>
                <h3 className="framework-card__title">
                  Ethical Commitments
                </h3>
                <p className="framework-card__body">
                  NSSR conducts all activities in accordance with Nepal&rsquo;s
                  legal framework and international ethical standards.
                  Transparency and civic responsibility are embedded in every
                  project.
                </p>
              </article>
            </div>
          </div>

          {/* Strategic summary */}
          <blockquote className="mt-10 pl-8 border-l-2 border-blue-600 max-w-3xl">
            <p className="text-slate-500 text-sm italic leading-relaxed">
              &ldquo;Transparency, accountability, and civic responsibility are
              embedded in every project, ensuring that science remains a force for
              progress and public good.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* STANFORD-STYLE IMPACT STATS STRIP */}
      <section className="impact-stats bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="impact-stats__grid">
            {[
              ["40+", "Active Researchers"],
              ["5+", "Uni-Collaborations"],
              ["20+", "Conducted Sessions"],
              ["2025", "Foundation Year"],
            ].map(([number, label]) => (
              <div className="impact-stat" key={label}>
                <div className="impact-stat__number font-serif font-black text-nssrDark">
                  {number}
                </div>
                <div className="impact-stat__label academic-caps text-slate-500">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RESEARCH VERTICALS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="academic-caps text-nssrBlue mb-4 block">
              Scientific Domains
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900">
              Research Focus Areas
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className={`p-10 border border-slate-100 hover:bg-slate-50 transition-all group${area.offset ? " lg:mt-8" : ""}`}
              >
                <i className={`${area.icon} text-3xl mb-8 text-nssrBlue opacity-40`} />
                <h4 className="text-lg font-bold mb-4 uppercase tracking-tighter font-oswald">
                  {area.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {area.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EVENTS GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="academic-caps text-nssrBlue mb-2 block">
                Archive
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-black">
                Recent Proceedings
              </h2>
            </div>
            <Link
              href="/events"
              className="academic-caps text-slate-400 hover:text-nssrBlue transition"
            >
              Full History &rarr;
            </Link>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            id="recent-proceedings-grid"
          >
            {proceedings.map((event) => {
              const [category, year] = event.label.split(" // ");
              return (
                <article className="event-card-stanford" key={event.id}>
                  <Link
                    href={`/events/${event.id}`}
                    className="event-card-stanford__link"
                  >
                    <div className="event-card-stanford__media">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={event.image} alt={event.title} loading="lazy" />
                    </div>
                    <div className="event-card-stanford__content">
                      <div className="event-card-stanford__meta">
                        <span className="event-card-stanford__category">
                          {category}
                        </span>
                        <span className="event-card-stanford__date">
                          {year}
                        </span>
                      </div>
                      <h3 className="event-card-stanford__title">
                        {event.title}
                      </h3>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. STATISTICS */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
          <div>
            <div className="text-4xl md:text-5xl font-black font-oswald mb-2">
              40+
            </div>
            <div className="academic-caps opacity-70">Active Researchers</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black font-oswald mb-2">
              05+
            </div>
            <div className="academic-caps opacity-70">Uni-Collaborations</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black font-oswald mb-2">
              20+
            </div>
            <div className="academic-caps opacity-70">Conducted Sessions</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black font-oswald mb-2 italic">
              EST. 2025
            </div>
            <div className="academic-caps opacity-70">Foundation Year</div>
          </div>
        </div>
      </section>

      {/* 7. COLLABORATOR SLIDER */}
      <section className="py-24 bg-white border-t">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-12 bg-white p-10 border border-slate-100 flex flex-col justify-center">
              <h3 className="academic-caps text-center mb-12 text-slate-500">
                Collaborating Partners
              </h3>
              <div className="partner-logo-flex-grid">
                {partners.map((src) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img key={src} src={src} alt="Partner" loading="lazy" />
                ))}
              </div>
              <p className="text-center text-[8px] uppercase font-bold text-slate-400 mt-12 tracking-[0.4em]">
                Official Partners • 2025-2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}