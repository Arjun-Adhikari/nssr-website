import type { Metadata } from "next";
import {
  EditorialGallery,
  type EditorialGalleryItem,
} from "@/components/editorial-gallery";

export const metadata: Metadata = {
  title: "Science Beyond the Classroom",
  description:
    "A talk session series for students across Nepal — bringing young researchers into schools and colleges to make research feel accessible.",
};

const differentiators = [
  {
    n: "01",
    title: "Go beyond the textbook",
    body: "Explore real questions, unfamiliar problems, and scientific ideas that do not fit neatly inside a syllabus.",
    accent: "blue",
  },
  {
    n: "02",
    title: "Meet researchers",
    body: "Hear directly from early-career researchers about curiosity, projects, setbacks, careers, and the path into research.",
    accent: "blue",
  },
  {
    n: "03",
    title: "Keep exploring",
    body: "Leave with a new question, a clearer pathway, and a connection to NSSR's research community.",
    accent: "amber",
  },
];

const process = [
  { n: "01", title: "Learn", body: "Build foundational knowledge.", accent: "blue" },
  { n: "02", title: "Question", body: "Ask meaningful questions.", accent: "blue" },
  { n: "03", title: "Explore", body: "Investigate new ideas.", accent: "blue" },
  { n: "04", title: "Investigate", body: "Analyze real evidence.", accent: "blue" },
  { n: "05", title: "Discover", body: "Uncover new insights.", accent: "blue" },
  { n: "06", title: "Share", body: "Share your ideas.", accent: "amber" },
];

const footprint = [
  { value: "40,967", label: "Documents", accent: "blue" },
  { value: "729,915", label: "Citations", accent: "blue" },
  { value: "17.82", label: "Citations / document", accent: "blue" },
  { value: "247", label: "H-index", accent: "amber" },
];

const agenda = [
  { mins: "10", label: "Opening question", color: "text-blue-700", border: "border-slate-200" },
  { mins: "25", label: "The talk", color: "text-blue-600", border: "border-slate-200" },
  { mins: "15", label: "Open Q&A", color: "text-blue-500", border: "border-slate-200" },
  { mins: "10", label: "Curiosity to action", color: "text-amber-600", border: "border-amber-200" },
];

const galleryItems: EditorialGalleryItem[] = [
  {
    src: "assets/images/SBC/IMG-20260811-WA0001.jpg",
    alt: "Students attending a Science Beyond the Classroom session",
    caption: "Bagishwori Secondary School",
  },
  {
    src: "assets/images/SBC/IMG-20260811-WA0005.jpg",
    alt: "NSSR speaker presenting to students",
    caption: "Apex Life School",
  },
  {
    src: "assets/images/SBC/IMG_2497.jpg",
    alt: "Science Beyond the Classroom audience",
    caption: "Kanya Mandir Secondary School",
  },
  {
    src: "assets/images/SBC/IMG_2498.jpg",
    alt: "NSSR science session with students",
    caption: "Session in action",
  },
  {
    src: "assets/images/SBC/IMG_2499.jpg",
    alt: "Students engaging with a science talk",
    caption: "Curiosity in action",
  },
];

const ACCENT = {
  blue: "text-blue-600",
  amber: "text-amber-500",
} as const;

const STAT_ACCENT = {
  blue: "text-blue-700",
  amber: "text-amber-600",
} as const;

export default function ScienceBeyondClassroomPage() {
  return (
    <>
      <header className="hero-clear bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="hero-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/SBC/IMG_2497.jpg"
              className="hero-media__img"
              alt="Students attending Science Beyond the Classroom"
            />
            <div className="hero-media__scrim" />
            <div className="hero-media__overlay">
              <div className="max-w-3xl">
                <span className="font-oswald text-amber-400 uppercase tracking-[.3em] text-xs font-bold">
                  A talk session series for students across Nepal
                </span>
                <h1 className="text-4xl md:text-7xl font-black mt-4 mb-5">
                  Science Beyond the{" "}
                  <span className="italic font-light text-blue-300">
                    Classroom
                  </span>
                </h1>
                <p className="text-slate-200 text-sm md:text-lg leading-relaxed">
                  Science begins with a question, not an answer. NSSR creates
                  room for students to ask better questions, meet researchers,
                  and explore what comes next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="editorial-row">
              <div>
                <span className="font-oswald text-blue-600 uppercase tracking-widest text-xs font-bold">
                  The bigger picture
                </span>
                <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6">
                  The curiosity is already there. The opportunity is not.
                </h2>
                <p className="text-slate-600 leading-relaxed mb-5">
                  Science Beyond the Classroom is NSSR&apos;s one-hour
                  conversation series for students who ask questions the
                  syllabus does not. It brings young researchers into schools and
                  colleges to make research, scientific thinking, and future
                  pathways feel accessible.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The session is free for the school, designed to fit within one
                  class period, and built around conversation rather than exams
                  or grades.
                </p>
              </div>
              <div className="border-l border-slate-200 pl-8">
                <span className="font-oswald text-amber-400 uppercase tracking-widest text-xs font-bold">
                  Why it matters
                </span>
                <div className="mt-7 space-y-5">
                  <div>
                    <div className="text-3xl font-black font-oswald text-blue-300">
                      16.6%
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      students entering Science after SEE, 2023/24
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl font-black font-oswald text-blue-300">
                      6.9%
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      higher-education Science &amp; Technology share, 2023/24
                    </p>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed pt-2">
                    The question is not whether students are curious about
                    science. It is whether they get enough opportunities to
                    continue.
                  </p>
                </div>
              </div>
            </div>

            <div className="editorial-row mb-20">
              {differentiators.map((item) => (
                <div className="deboxed-card" key={item.n}>
                  <span
                    className={`font-oswald text-4xl font-bold ${ACCENT[item.accent as keyof typeof ACCENT]}`}
                  >
                    {item.n}
                  </span>
                  <h3 className="text-xl font-black mt-4 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="editorial-row mb-20">
              <div>
                <span className="font-oswald text-blue-600 uppercase tracking-widest text-xs font-bold">
                  Nepal&apos;s research footprint
                </span>
                <h2 className="text-3xl md:text-4xl font-black mt-3">
                  The next chapter is growing it.
                </h2>
                <p className="text-xs text-slate-500 max-w-sm">
                  Nepal is already producing research. SBC helps more students
                  see themselves as part of that future.
                </p>
              </div>
              <div className="border-l border-slate-200 pl-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {footprint.map((stat) => (
                    <div key={stat.label}>
                      <div
                        className={`font-oswald text-3xl md:text-4xl font-bold ${STAT_ACCENT[stat.accent as keyof typeof STAT_ACCENT]}`}
                      >
                        {stat.value}
                      </div>
                      <p className="text-[10px] max-lg:text-[11px] uppercase tracking-widest text-slate-500 mt-2">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 mt-7">
                  Source: SCImago Journal &amp; Country Rank, Country Rankings,
                  1996-2025, all subject areas.
                </p>
              </div>
            </div>

            <div className="editorial-row mb-20">
              <div>
                <span className="font-oswald text-blue-600 uppercase tracking-widest text-xs font-bold">
                  Introducing NSSR
                </span>
                <h2 className="text-3xl md:text-4xl font-black mt-3 mb-5">
                  Empowering young minds through research.
                </h2>
                <p className="text-slate-600 leading-relaxed mb-5">
                  NSSR is a youth-led research organization registered under
                  Company Act 2063. It builds a culture of research, innovation,
                  and scientific collaboration among students in Nepal.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Our work is grounded in inclusivity and accessibility,
                  collaboration, excellence, and integrity, creating a space
                  where students can explore, learn, and contribute.
                </p>
              </div>
              <div className="border-l border-slate-200 pl-8">
                <h2 className="text-2xl font-black mb-5">
                  What makes this different?
                </h2>
                <div className="grid sm:grid-cols-2 gap-5 text-sm">
                  <div className="deboxed-card">
                    <p className="font-bold text-slate-900 mb-2">
                      In the classroom
                    </p>
                    <p className="text-slate-600">
                      Learn established knowledge, follow structured learning,
                      and apply what you know.
                    </p>
                  </div>
                  <div className="deboxed-card">
                    <p className="font-bold text-blue-700 mb-2">
                      Beyond the classroom
                    </p>
                    <p className="text-slate-600">
                      Ask meaningful questions, explore unfamiliar problems, and
                      investigate what you discover.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="editorial-row mb-20">
              <div className="text-center mb-10 md:text-left">
                <span className="font-oswald text-blue-600 uppercase tracking-widest text-xs font-bold">
                  The process
                </span>
                <h2 className="text-3xl md:text-5xl font-black mt-3">
                  From learning to doing
                </h2>
              </div>
              <div className="process-steps-grid">
                {process.map((step) => (
                  <div className="deboxed-card text-center" key={step.n}>
                    <b
                      className={`font-oswald text-3xl ${STAT_ACCENT[step.accent as keyof typeof STAT_ACCENT]}`}
                    >
                      {step.n}
                    </b>
                    <h3 className="font-bold mt-4 mb-2">{step.title}</h3>
                    <p className="text-xs text-slate-600">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="editorial-strip mb-20">
              <div className="editorial-strip__item">
                <span className="font-oswald text-blue-600 uppercase tracking-widest text-xs font-bold">
                  One hour, real rooms
                </span>
                <h2 className="text-3xl md:text-5xl font-black mt-4">
                  Open with a question. Leave with curiosity.
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mt-5">
                  The session begins with a simple question that students can
                  relate to. From there, the speaker builds scientific thinking
                  through stories, examples, discussion, and questions.
                </p>
              </div>
              <div className="editorial-strip__item">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  {agenda.map((slot) => (
                    <div className={`p-4 border-t pt-6 ${slot.border}`} key={slot.label}>
                      <b className={`font-oswald text-xl ${slot.color}`}>
                        {slot.mins}
                      </b>
                      <p className="text-[10px] max-lg:text-[11px] uppercase mt-2 text-slate-600">
                        {slot.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-center text-slate-500 text-sm mt-8">
                  60 minutes. Free for the school. Every material funded and
                  prepared by NSSR.
                </p>
              </div>
            </div>

            <div className="editorial-row mb-20">
              <div className="text-center mb-10 md:text-left">
                <span className="font-oswald text-blue-600 uppercase tracking-widest text-xs font-bold">
                  Track record
                </span>
                <h2 className="text-3xl md:text-5xl font-black mt-3">
                  One hour, real rooms.
                </h2>
                <p className="text-slate-500 mt-4">
                  Sessions have already reached Bagishwori Secondary School,
                  Apex Life School, and Kanya Mandir Secondary School.
                </p>
              </div>
              <EditorialGallery items={galleryItems} />
            </div>

            <div className="text-center">
              <a
                href="mailto:info@nssrnepal.org?subject=Science Beyond the Classroom"
                className="inline-block bg-amber-500 text-slate-950 font-oswald text-xs px-8 py-4 tracking-widest hover:bg-amber-400 transition uppercase rounded-md"
              >
                Bring It To Your College
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}