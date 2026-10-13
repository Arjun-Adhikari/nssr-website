import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outreach",
  description:
    "NSSR believes in a model that is by students, for students — helping students encounter science in an accessible and meaningful way.",
};

const impact = [
  "Students reached across provinces",
  "Schools retaining lab equipment & libraries",
  "Mentees continuing into research pathways",
  "Teachers reporting improved engagement",
];

export default function OutreachPage() {
  return (
    <>
      <header className="hero-clear pb-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/SEI/out1.png"
            className="w-full h-full object-cover"
            alt="NSSR outreach program"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="font-oswald text-blue-400 uppercase tracking-[.35em] text-xs font-bold">
            Next-Generation Initiatives
          </span>
          <h1 className="text-4xl md:text-7xl font-black mt-5 mb-6">
            Science in{" "}
            <span className="italic font-light text-blue-300">community.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 leading-relaxed">
            NSSR believes in a model that is by students, for students. Through
            outreach, we help students, especially those in high school and
            below, encounter science in an accessible and meaningful way.
          </p>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm leading-relaxed mt-5">
            Our aim is to promote science education, build curiosity, encourage
            students to ask questions, and develop the critical thinking they
            need to understand and explore the world around them.
          </p>
        </div>
      </header>

      <main className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="editorial-row">
            <div>
              <span className="font-oswald text-blue-600 uppercase tracking-widest text-xs font-bold">
                Talk Session Series
              </span>
              <h2 className="text-3xl font-black text-slate-900 mt-3 mb-4">
                Science Beyond the Classroom
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                A nationwide series bringing young researchers into schools to
                show students that curiosity, questions, and research extend
                beyond the syllabus.
              </p>
              <Link
                href="/science-beyond-classroom"
                className="font-oswald text-xs uppercase tracking-widest text-blue-700 inline-flex items-center gap-1 max-lg:min-h-11"
              >
                Explore the Initiative <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
            <div className="border-l border-slate-200 pl-8">
              <span className="font-oswald text-blue-600 uppercase tracking-widest text-xs font-bold">
                Rural Outreach Program
              </span>
              <h2 className="text-3xl font-black text-slate-900 mt-3 mb-4">
                Student Empowerment Initiative
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Hands-on science learning and sustained near-peer mentorship for
                underserved schools across Nepal.
              </p>
              <Link
                href="/student-empowerment"
                className="font-oswald text-xs uppercase tracking-widest text-blue-700 inline-flex items-center gap-1 max-lg:min-h-11"
              >
                Explore the Initiative <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>

          <div className="editorial-row">
            <div>
              <span className="font-oswald text-blue-600 uppercase tracking-widest text-xs font-bold">
                Our Commitment
              </span>
              <h2 className="text-3xl md:text-4xl font-black mt-3 mb-4">
                Science for every student, everywhere.
              </h2>
              <p className="text-slate-600 leading-relaxed">
                NSSR&apos;s outreach model is built on sustained presence, not
                one-off visits. We work with schools over time to build
                capacity, transfer resources, and create lasting pathways into
                research for students who would otherwise never encounter them.
              </p>
            </div>
            <div className="border-l border-slate-200 pl-8">
              <h2 className="text-2xl font-black mb-4">How we measure impact</h2>
              <ul className="space-y-3 text-sm text-slate-600">
                {impact.map((item) => (
                  <li key={item}>
                    <i className="fa-solid fa-check text-blue-600 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <section className="py-16 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <p className="max-w-2xl mx-auto text-slate-500 italic">
            Making scientific curiosity accessible, practical, and lasting for
            students across Nepal.
          </p>
        </div>
      </section>
    </>
  );
}