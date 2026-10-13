import type { Metadata } from "next";
import {
  EditorialGallery,
  type EditorialGalleryItem,
} from "@/components/editorial-gallery";

export const metadata: Metadata = {
  title: "Student Empowerment Initiative",
  description:
    "A planned one-year science and digital learning program designed to help around 3,000 students in rural areas of Nepal learn, practice, and keep progressing.",
};

const glance = [
  { term: "Planned reach", value: "3,000+ students" },
  { term: "Planned launch sites", value: "2-3 schools" },
  { term: "Pilot mentorship", value: "Monthly for ~9 months" },
  { term: "Primary cohort", value: "Grades 9-12" },
];

const supports = [
  {
    icon: "fa-solid fa-flask",
    title: "Hands-on launch",
    body: "Experiments across Physics, Chemistry, and Biology, plus STEM career awareness.",
  },
  {
    icon: "fa-solid fa-video",
    title: "Digital learning",
    body: "Projectors, connectivity, and a shared learning library for ordinary lessons.",
  },
  {
    icon: "fa-solid fa-people-arrows",
    title: "Near-peer mentorship",
    body: "Monthly concept clinics led by NSSR student researchers and advisors.",
  },
  {
    icon: "fa-solid fa-photo-film",
    title: "Content library",
    body: "Syllabus-aligned videos organized by topic for teachers and students.",
  },
  {
    icon: "fa-solid fa-book-open-reader",
    title: "Reference library",
    body: "Guide books, model questions, past papers, and entrance preparation materials.",
  },
];

const impact = [
  { value: "3,000+", label: "students targeted across rural Nepal", accent: "blue" },
  { value: "5", label: "pilot classrooms proposed for digital learning", accent: "blue" },
  { value: "9 mo.", label: "of planned monthly contact at the pilot school", accent: "blue" },
  { value: "2-3", label: "planned rural launch locations", accent: "amber" },
];

const success = [
  "Every launch participant takes part in at least one experiment.",
  "Host schools retain usable lab equipment and teaching materials.",
  "A Grade 9-12 or 9-10 mentee cohort receives monthly academic support.",
  "Term-test comparisons and short topic quizzes document learning progress.",
  "The book and video libraries continue after the funding cycle.",
];

const galleryItems: EditorialGalleryItem[] = [
  {
    src: "assets/images/SEI/out1.png",
    alt: "Students taking part in an NSSR outreach session",
    caption: "Students engaging with science experiments",
  },
  {
    src: "assets/images/SEI/out2.png",
    alt: "Science equipment demonstration",
    caption: "Equipment demonstration",
  },
  {
    src: "assets/images/SEI/out3.png",
    alt: "NSSR team with students",
    caption: "NSSR team with participants",
  },
  {
    src: "assets/images/SEI/out4.png",
    alt: "Rural school science program in action",
    caption: "Hands-on lab session",
  },
];

const IMPACT_ACCENT = {
  blue: "text-blue-700",
  amber: "text-amber-600",
} as const;

export default function StudentEmpowermentPage() {
  return (
    <>
      <header className="hero-clear bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="hero-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/SEI/out1.png"
              className="hero-media__img"
              alt="Students taking part in an NSSR outreach session"
            />
            <div className="hero-media__scrim" />
            <div className="hero-media__overlay">
              <div className="max-w-3xl">
                <span className="font-oswald text-amber-400 uppercase tracking-[.3em] text-xs font-bold">
                  Rural Outreach Program &middot; By Students, For Students
                </span>
                <h1 className="text-4xl md:text-7xl font-black mt-4 mb-5">
                  Student Empowerment{" "}
                  <span className="italic font-light text-blue-300">
                    Initiative
                  </span>
                </h1>
                <p className="text-slate-200 text-sm md:text-lg leading-relaxed">
                  A planned one-year science and digital learning program
                  designed to help around 3,000 students in rural areas of Nepal
                  learn, practice, and keep progressing beyond a single outreach
                  visit.
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
                  Why SEI exists
                </span>
                <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6">
                  The spark should not end when the team leaves.
                </h2>
                <p className="text-slate-600 leading-relaxed mb-5">
                  The Student Empowerment Initiative responds to a practical gap
                  in rural science education: students are curious, but many
                  schools have limited laboratory access, few qualified science
                  teachers, and very little opportunity to practice what they
                  learn.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Over its planned one-year period, SEI will combine one-day
                  hands-on launches at rural schools with a deeper pilot model.
                  The proposed pilot includes projectors, a curated learning
                  library, monthly near-peer mentorship, and a reference library
                  across the 2026-27 academic year.
                </p>
              </div>
              <div className="border-l border-slate-200 pl-8">
                <span className="font-oswald text-amber-400 uppercase tracking-widest text-xs font-bold">
                  Program at a glance
                </span>
                <dl className="mt-6 space-y-5 text-sm">
                  {glance.map((row, i) => (
                    <div
                      className={`flex justify-between gap-4 ${i === glance.length - 1 ? "" : "border-b border-slate-200 pb-4"}`}
                      key={row.term}
                    >
                      <dt className="text-slate-600">{row.term}</dt>
                      <dd className="font-bold text-right">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="editorial-row mb-20">
              <div className="text-center mb-10 md:text-left">
                <span className="font-oswald text-blue-600 uppercase tracking-widest text-xs font-bold">
                  The two-layer model
                </span>
                <h2 className="text-3xl md:text-5xl font-black mt-3">
                  Reach first. Stay connected.
                </h2>
              </div>
              <div className="border-l border-slate-200 pl-8">
                <div className="space-y-8">
                  <div>
                    <div className="text-amber-500 font-oswald text-4xl font-bold mb-4">
                      01
                    </div>
                    <h3 className="text-2xl font-black mb-3">
                      One-day science launch
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Students in Physics, Chemistry, and Biology take part in
                      experiments, meet facilitators, and explore STEM pathways.
                      Lab equipment and teaching materials are handed over to
                      each host school for continued use.
                    </p>
                  </div>
                  <div className="border-t border-slate-200 pt-8">
                    <div className="text-blue-600 font-oswald text-4xl font-bold mb-4">
                      02
                    </div>
                    <h3 className="text-2xl font-black mb-3">
                      Year-long pilot
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      One school receives a digital learning setup, a curated
                      syllabus-matched video library, monthly teacher-guided
                      mentorship, and books selected for Grades 9-12 or Grades
                      9-10 where no +2 program exists.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="editorial-row mb-20">
              <div className="text-center mb-10 md:text-left">
                <span className="font-oswald text-blue-600 uppercase tracking-widest text-xs font-bold">
                  How the program works
                </span>
                <h2 className="text-3xl md:text-5xl font-black mt-3">
                  Five practical supports
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {supports.map((item) => (
                  <div className="deboxed-card" key={item.title}>
                    <i className={`${item.icon} text-blue-600 text-xl mb-4`} />
                    <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="editorial-strip mb-20">
              <div className="editorial-strip__item">
                <span className="font-oswald text-blue-600 uppercase tracking-widest text-xs font-bold">
                  Impact we are planning
                </span>
                <h2 className="text-3xl md:text-5xl font-black mt-4">
                  A one-year plan for lasting reach.
                </h2>
              </div>
              <div className="editorial-strip__item">
                <div className="grid sm:grid-cols-2 gap-8">
                  {impact.map((stat) => (
                    <div className="border-t border-slate-200 pt-6" key={stat.label}>
                      <div
                        className={`text-4xl font-black font-oswald ${IMPACT_ACCENT[stat.accent as keyof typeof IMPACT_ACCENT]}`}
                      >
                        {stat.value}
                      </div>
                      <p className="text-xs text-slate-500 mt-2">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="editorial-row mb-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-black mb-5">
                  What success looks like
                </h2>
                <ul className="space-y-4 text-sm text-slate-600">
                  {success.map((item) => (
                    <li key={item}>
                      <i className="fa-solid fa-check text-blue-600 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-l border-slate-200 pl-8">
                <h2 className="text-2xl font-black mb-4">Built to grow</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Each component can stand alone or be combined into a complete
                  program. This lets schools and partners begin with a launch
                  event, then extend support to the digital pilot, mentorship,
                  and library as resources allow.
                </p>
              </div>
            </div>

            <div className="editorial-row mb-16">
              <div className="text-center mb-10 md:text-left">
                <span className="font-oswald text-blue-600 uppercase tracking-widest text-xs font-bold">
                  In the field
                </span>
                <h2 className="text-3xl md:text-5xl font-black mt-3">
                  Moments from the launch events.
                </h2>
                <p className="text-slate-500 mt-4">
                  Hands-on science reaching students across rural Nepal.
                </p>
              </div>
              <EditorialGallery items={galleryItems} />
            </div>

            <div className="text-center">
              <a
                href="mailto:info@nssrnepal.org?subject=Partner With the Student Empowerment Initiative"
                className="btn-primary"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}