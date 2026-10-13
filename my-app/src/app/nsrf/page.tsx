import type { Metadata } from "next";
import { IconSprite, SpriteIcon } from "@/components/icon-sprite";

export const metadata: Metadata = {
  title: "NSSR Summer Research Fellowship",
  description:
    "NSRF is a mentorship-driven fellowship connecting students with experienced mentors across seven research areas.",
};

const phases = [
  {
    label: "Phase 1 · Weeks 1-3",
    title: "Research Foundations",
    body: "Literature navigation, reference tools, critical reading, and LaTeX writing close with proposal presentations and group placement.",
  },
  {
    label: "Phase 2 · Weeks 4-5",
    title: "Group Development",
    body: "Fellows work with a dedicated mentor to finalize a topic and literature review, producing a joint proposal and paper outline.",
  },
  {
    label: "Phase 3 · Weeks 6-11",
    title: "Research Implementation",
    body: "Groups execute approved research with weekly meetings, progress reports, and rotating presentation duties.",
  },
  {
    label: "Phase 4 · Week 12",
    title: "Final Symposium",
    body: "Fellows present completed research to faculty, mentors, and partners. Certificates are awarded and qualifying groups receive publication guidance.",
  },
];

const mentors = [
  { name: "Manish Pandey", role: "Plasma Physics", image: "assets/images/mentor/manish_pandey.jpg" },
  { name: "Dhirendra Pd. Upadhya", role: "Biophysics", image: "assets/images/mentor/Dhirendra.jpg" },
  { name: "Om Jha", role: "Materials Science", image: "assets/images/mentor/om jha.jpg" },
  { name: "Shubash Bhandari", role: "Astrophysics", image: "assets/images/mentor/subash.jpg" },
  { name: "Sadhana Adhikari", role: "Economics", image: "assets/images/mentor/sadhana.jpeg" },
  { name: "Miraj Pathak", role: "Number Theory", image: "assets/images/mentor/miraj.jpeg" },
  { name: "Rijan Bhandari", role: "AI & ML", image: "assets/images/mentor/rijan.jpg" },
];

const advisorRows = [
  {
    icon: "i-compass",
    title: "Program guidance",
    body: "Advisors help coordinate the fellowship structure, milestones, symposium preparation, and overall research quality.",
  },
  {
    icon: "i-microscope",
    title: "Field expertise",
    body: "Experts across the fellowship fields help connect students with appropriate questions, methods, resources, and research standards.",
  },
  {
    icon: "i-mentors",
    title: "Mentor support",
    body: "The advisors team supports mentors with feedback and coordination so fellows receive consistent guidance throughout the program.",
  },
  {
    icon: "i-shield",
    title: "Research standards",
    body: "Advisors uphold research quality, ethics, and standards across all fellowship activities.",
  },
];

const gains = [
  { icon: "i-certificate", body: "NSRF Fellowship Certificate at the closing symposium" },
  {
    icon: "i-proposal",
    body: "Training in proposal writing, from defining a research question to preparing a clear, structured proposal",
  },
  { icon: "i-team", body: "Collaborative research experience with defined team roles" },
  { icon: "i-book", body: "Publication opportunities for selected projects" },
];

const fields = [
  "Number Theory",
  "Astrophysics",
  "Materials Science",
  "Biophysics",
  "Plasma Physics",
  "AI & ML",
  "Economics",
];

const LAST_ROW = { borderBottom: "none", paddingBottom: 0, marginBottom: 0 } as const;
const ROW_RULE = {
  borderBottom: "1px solid #e2e8f0",
  paddingBottom: 32,
  marginBottom: 32,
} as const;
const fieldChip = {
  color: "#1d4ed8",
  border: "1px solid #e2e8f0",
  background: "transparent",
  borderRadius: 4,
} as const;

export default function NsrfPage() {
  return (
    <>
      <IconSprite />

      <header className="hero-clear pb-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/IMG_20260902_144525.jpg"
            className="w-full h-full object-cover"
            alt="NSRF fellowship participants"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 to-slate-950" />
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <span className="font-oswald text-blue-400 uppercase tracking-[.3em] text-xs font-bold">
            12 Weeks &middot; Training &middot; Research &middot; Publication
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-5 mb-6">
            NSSR Summer{" "}
            <span className="italic font-light text-blue-300">
              Research Fellowship
            </span>
          </h1>
          <p className="max-w-3xl text-slate-300 text-sm md:text-lg leading-relaxed">
            NSRF is a mentorship-driven fellowship connecting students with
            experienced mentors across seven research areas. Fellows develop
            research skills, explore open problems, and build a foundation for
            future academic and professional work.
          </p>
        </div>
      </header>

      <main className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Phase Timeline - Editorial Strip */}
          <div className="editorial-strip mb-16">
            {phases.map((phase) => (
              <div className="editorial-strip__item" key={phase.title}>
                <span className="font-oswald text-blue-600 uppercase tracking-widest text-xs font-bold">
                  {phase.label}
                </span>
                <h3 className="text-xl font-black mt-3 mb-3 font-serif">
                  {phase.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {phase.body}
                </p>
              </div>
            ))}
          </div>

          {/* Mentors Grid */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <span className="font-oswald text-blue-600 uppercase tracking-widest text-xs font-bold">
                Research community
              </span>
              <h2 className="text-3xl md:text-5xl font-black mt-3">
                Meet the NSRF mentors
              </h2>
              <p className="max-w-2xl mx-auto text-slate-500 text-sm leading-relaxed mt-4">
                The fellowship is supported by mentors working across
                mathematics, physics, biology, materials, economics, and machine
                learning.
              </p>
            </div>
            <div className="editorial-grid">
              {mentors.map((mentor) => (
                <article className="team-card" key={mentor.name}>
                  <div className="team-card__avatar">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={mentor.image} alt={mentor.name} loading="lazy" />
                  </div>
                  <div className="team-card__content">
                    <h4 className="team-card__name">{mentor.name}</h4>
                    <p className="team-card__role">{mentor.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Advisors Section */}
          <section className="mb-16">
            <div className="editorial-row">
              <div>
                <span className="font-oswald text-blue-700 uppercase tracking-widest text-xs font-bold">
                  Beyond the mentors
                </span>
                <h2 className="text-3xl md:text-4xl font-black mt-3 mb-4">
                  Advisors and field experts
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  NSRF is supported by NSSR&apos;s broader advisors team and
                  invited experts who help the fellowship run smoothly. They
                  provide program oversight, review research directions, and
                  support mentors and fellows with field-specific guidance.
                </p>
              </div>
              <div>
                <div className="space-y-6">
                  {advisorRows.map((row, i) => (
                    <div
                      className="editorial-photo-row"
                      style={i === advisorRows.length - 1 ? LAST_ROW : ROW_RULE}
                      key={row.title}
                    >
                      <div className="editorial-photo-row__content">
                        <SpriteIcon id={row.icon} />
                        <h3 className="font-bold text-sm mb-2 font-serif">
                          {row.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {row.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* What Fellows Gain + CTA */}
          <div className="editorial-row">
            <div>
              <h2 className="text-3xl font-black mb-6 font-serif">
                What fellows gain
              </h2>
              <div className="space-y-6">
                {gains.map((gain, i) => (
                  <div
                    className="editorial-photo-row"
                    style={i === gains.length - 1 ? LAST_ROW : ROW_RULE}
                    key={gain.icon}
                  >
                    <div className="editorial-photo-row__content">
                      <SpriteIcon id={gain.icon} />
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {gain.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:info@nssrnepal.org?subject=NSRF Application"
                  className="btn-primary"
                >
                  Apply for NSRF
                </a>
                <a
                  href="mailto:info@nssrnepal.org?subject=NSRF Inquiry"
                  className="btn-secondary"
                >
                  Inquire About NSRF
                </a>
              </div>
            </div>
            <div>
              <div
                className="aspect-video mb-8"
                style={{ background: "transparent", border: "1px solid #e2e8f0" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/nsr.png"
                  className="w-full h-full object-cover"
                  alt="NSRF Fellowship"
                />
              </div>
              <h2 className="font-oswald text-sm font-bold uppercase tracking-widest mb-4">
                Research fields explored
              </h2>
              <div className="flex flex-wrap gap-2">
                {fields.map((field) => (
                  <span
                    className="px-3 py-2 text-xs font-semibold"
                    style={fieldChip}
                    key={field}
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}