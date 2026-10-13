import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research Pathways",
  description:
    "Each month, NSSR spotlights one research field and creates a guided route from first curiosity to meaningful conversation, a developing idea, and potential collaboration.",
};

const includes = [
  "A new research field or interdisciplinary theme",
  "An online talk with a researcher or expert",
  "An offline meetup for discussion and connection",
  "A chance to present and improve research ideas",
];

const steps = [
  {
    n: "1",
    title: "Monthly Field Spotlight",
    body: "A new discipline or interdisciplinary theme is introduced each month, across science and beyond.",
  },
  {
    n: "2",
    title: "Online Research Talk",
    body: "Students meet a researcher or expert online to learn how the field works and how to begin exploring it.",
  },
  {
    n: "3",
    title: "Share Your Idea",
    body: "Students or teams can submit an early research idea, question, short video, or developing proposal.",
  },
  {
    n: "4",
    title: "Offline Research Meetup",
    body: "Participants meet researchers and fellow students in person, discuss possibilities, and find potential collaborators.",
  },
  {
    n: "5",
    title: "Present to the Room",
    body: "Selected participants give a short presentation about their idea to researchers and other participants.",
  },
  {
    n: "6",
    title: "Receive Feedback",
    body: "The audience and researchers respond with questions, suggestions, and perspectives that help sharpen the idea.",
  },
  {
    n: "7",
    title: "Connect and Collaborate",
    body: "Students can meet people with shared interests, form teams, and identify potential mentors or collaborators.",
  },
];

export default function ResearchPathwaysPage() {
  return (
    <>
      <header className="hero-clear pb-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,.35),_transparent_48%),linear-gradient(135deg,#0f172a,#172554)]" />
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <span className="font-oswald text-blue-400 uppercase tracking-[.35em] text-xs font-bold">
            Discover &middot; Connect &middot; Research
          </span>
          <h1 className="text-4xl md:text-7xl font-black mt-5 mb-6">
            Research{" "}
            <span className="italic font-light text-blue-300">Pathways</span>
          </h1>
          <p className="max-w-3xl text-slate-300 text-sm md:text-lg leading-relaxed">
            Each month, NSSR spotlights one research field and creates a guided
            route from first curiosity to meaningful conversation, a developing
            idea, and potential collaboration.
          </p>
        </div>
      </header>

      <main className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-start mb-16">
            <div>
              <span className="font-oswald text-blue-600 uppercase tracking-widest text-xs font-bold">
                One field, every month
              </span>
              <h2 className="text-3xl md:text-5xl font-black mt-3 mb-6">
                A monthly doorway into research.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Research Pathways includes a multidisciplinary range of research
                areas, bringing together natural sciences, social sciences,
                technology, mathematics, health, humanities, economics, design,
                and other fields of inquiry.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Each month, NSSR will feature one field or interdisciplinary
                theme. Students can join to learn, ask questions, share an early
                idea, meet people working in the field, or discover a direction
                they had not considered before.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <p className="font-oswald text-xs uppercase tracking-widest text-blue-700 font-bold mb-4">
                Every month includes
              </p>
              <ul className="space-y-4 text-sm text-slate-700">
                {includes.map((item) => (
                  <li key={item}>
                    <i className="fa-solid fa-circle-check text-blue-600 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div className="step-card p-7 rounded-2xl" key={step.n}>
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5 font-oswald font-bold">
                  {step.n}
                </div>
                <h2 className="font-oswald text-base font-bold mb-2">
                  {step.title}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
            <div className="p-7 rounded-2xl bg-slate-900 text-white">
              <p className="font-oswald text-xs uppercase tracking-widest text-blue-400 font-bold mb-3">
                The pathway
              </p>
              <p className="text-xs text-slate-300 leading-loose">
                Discover &rarr; Learn &rarr; Question &rarr; Share &rarr; Present
                &rarr; Receive feedback &rarr; Collaborate &rarr; Pursue research
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:info@nssrnepal.org?subject=Research Pathways Interest"
              className="btn-primary"
            >
              Submit Your Research Interest
            </a>
            <Link href="/nsrf" className="btn-secondary">
              Explore NSRF
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}