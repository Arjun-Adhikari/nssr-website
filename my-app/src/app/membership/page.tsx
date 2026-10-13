import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Participation Pathways",
  description:
    "Discover your path within NSSR — as a Volunteer, College Representative, or General Member.",
};

type Track = {
  badge: string;
  badgeClass: string;
  title: string;
  description: string;
  dark: boolean;
  facts: { label: string; value: string; valueClass?: string }[];
  benefits: string[];
  advancement: string;
  cta: { label: string; status: string; statusClass: string; href?: string };
};

const tracks: Track[] = [
  {
    badge: "Entry Level",
    badgeClass: "bg-blue-100 text-blue-700",
    title: "Volunteer",
    description:
      "The primary entry point into NSSR. Volunteers support specific events, campaigns, projects, and departmental activities while acquiring foundational skills.",
    dark: false,
    facts: [
      {
        label: "Fee Obligation:",
        value: "Exempt (Free)",
        valueClass: "text-green-600",
      },
      { label: "Appointing Authority:", value: "HR Department" },
      { label: "GA Voting Rights:", value: "Observer Only", valueClass: "text-gray-400" },
    ],
    benefits: [
      "Support specific campaigns and workshops",
      "Gain hands-on project management experience",
      "Eligible for 1-month observation for leadership roles",
    ],
    advancement:
      "May be appointed as College Representative, Sub-Executive, or Team Lead based on performance.",
    cta: {
      label: "Apply Now",
      status: "Applications Open Now",
      statusClass: "text-green-600",
      href: "https://forms.gle/n9pDEVRBSb9JSPVS7",
    },
  },
  {
    badge: "Institutional Presence",
    badgeClass: "bg-blue-600 text-white",
    title: "College Representative",
    description:
      "Serves as the official NSSR ambassador within partner colleges and universities across Nepal, bridging NSSR with academic institutions.",
    dark: true,
    facts: [
      {
        label: "Fee Obligation:",
        value: "Exempt (1 Academic Year)",
        valueClass: "text-blue-400",
      },
      { label: "Appointing Authority:", value: "Outreach Department" },
      { label: "Term:", value: "1 Academic Year (Renewable)" },
    ],
    benefits: [
      "Official institutional representation & authority",
      "Priority access to NSSR fellowships & workshops",
      "Certificate of Appreciation upon term completion",
    ],
    advancement:
      "Direct consideration for departmental Sub-Executive and Executive leadership positions.",
    cta: {
      label: "Apply Now",
      status: "Applications Open Now",
      statusClass: "text-green-400",
      href: "https://forms.gle/csSUtYrEL4mw6QnJ8",
    },
  },
  {
    badge: "Governance Member",
    badgeClass: "bg-slate-100 text-slate-800",
    title: "General Member",
    description:
      "Formal voting members of NSSR who form the core democratic foundation of the organization and participate in General Assembly decisions.",
    dark: false,
    facts: [
      {
        label: "Fee Obligation:",
        value: "NPR 500 / year",
        valueClass: "text-blue-600",
      },
      { label: "Appointing Authority:", value: "Executive Committee" },
      {
        label: "GA Voting Rights:",
        value: "Full Voting Rights",
        valueClass: "text-green-600",
      },
    ],
    benefits: [
      "Full voting rights in General Assembly (AGM)",
      "Eligible to contest Executive positions",
      "Access to research groups & publication support",
    ],
    advancement:
      "Eligible to contest or be elected to Executive Committee leadership roles.",
    cta: {
      label: "Apply Now",
      status: "Applications Currently Closed",
      statusClass: "text-slate-500",
    },
  },
];

const steps = [
  {
    n: "1",
    title: "Entry & Engagement",
    sub: "Volunteer or College Rep",
    body: "Join NSSR through an open call. Support departmental projects, run campus initiatives, and build your track record.",
    dark: false,
  },
  {
    n: "2",
    title: "Volunteer Observation",
    sub: "1-Month Performance Period",
    body: "Applicants for Sub-Executive roles complete a 1-month Volunteer observation period within the target department to demonstrate commitment and skill (Article 8.4).",
    dark: false,
  },
  {
    n: "3",
    title: "Sub-Executive Role",
    sub: "Operational Leadership",
    body: "Appointed by Executive Committee for a 1-year tenure. Execute key operational duties within HR, IT, Outreach, Event, or Research departments.",
    dark: false,
  },
  {
    n: "4",
    title: "Executive Committee",
    sub: "Strategic & Board Governance",
    body: "Elected or appointed as Department Heads, Treasurer, Secretary, Vice President, or President with full EC voting power and policy governance.",
    dark: true,
  },
];

const matrix: { feature: string; cells: { text: string; className: string }[] }[] = [
  {
    feature: "Annual Fee",
    cells: [
      { text: "Exempt", className: "text-green-600 font-semibold" },
      { text: "Exempt (1 Year)", className: "text-green-600 font-semibold" },
      { text: "NPR 500 / year", className: "font-semibold" },
      { text: "NPR 500 / year", className: "font-semibold" },
    ],
  },
  {
    feature: "General Assembly Voting",
    cells: [
      { text: "Observer Only", className: "text-gray-400" },
      { text: "Observer Only*", className: "text-gray-400" },
      { text: "Full Voting Rights", className: "text-blue-600 font-bold" },
      { text: "Full Voting Rights", className: "text-blue-600 font-bold" },
    ],
  },
  {
    feature: "Appointing Authority",
    cells: [
      { text: "HR Department", className: "" },
      { text: "Outreach Department", className: "" },
      { text: "Executive Committee", className: "" },
      { text: "General Assembly / EC", className: "" },
    ],
  },
  {
    feature: "Standard Tenure",
    cells: [
      { text: "Project / Campaign Based", className: "" },
      { text: "1 Academic Year", className: "" },
      { text: "1 Year (Renewable)", className: "" },
      { text: "1 Year (Renewable)", className: "" },
    ],
  },
  {
    feature: "Primary Focus",
    cells: [
      { text: "Assigned Tasks & Events", className: "" },
      { text: "Campus Engagement", className: "" },
      { text: "Governance & Research", className: "" },
      { text: "Operational & Strategic Leadership", className: "" },
    ],
  },
];

export default function MembershipPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <header className="hero-clear pb-16 md:pb-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="font-oswald text-blue-400 uppercase tracking-widest text-[10px] md:text-xs font-bold mb-4 block">
            Governance &amp; Engagement Framework
          </span>
          <h1 className="text-3xl md:text-6xl font-bold mb-6">
            Participation{" "}
            <span className="text-blue-400 italic font-light">Pathways</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-400 text-sm md:text-base font-light leading-relaxed">
            Discover your path within NSSR. Whether you are stepping in as a
            Volunteer, representing your academic institution as a College
            Representative, or driving governance as a General Member, NSSR
            offers structured avenues for personal growth, scientific impact,
            and leadership advancement.
          </p>
        </div>
      </header>

      {/* 2. PARTICIPATION TRACKS OVERVIEW */}
      <section id="tracks-overview" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">
              NSSR Participation Tracks
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4" />
            <p className="text-gray-500 text-sm max-w-2xl mx-auto mt-4">
              NSSR recognizes distinct tracks of participation. Each track
              carries specific rights, responsibilities, fee obligations, and
              advancement opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tracks.map((track) => (
              <div
                key={track.title}
                className={`pathway-card p-6 rounded-2xl flex flex-col justify-between ${
                  track.dark
                    ? "bg-slate-900 text-white shadow-xl"
                    : "bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`${track.badgeClass} font-oswald uppercase tracking-wider text-[11px] font-bold px-3 py-1 rounded-full`}
                    >
                      {track.badge}
                    </span>
                  </div>
                  <h3
                    className={`font-oswald text-2xl font-bold mb-2 ${track.dark ? "" : "text-slate-900"}`}
                  >
                    {track.title}
                  </h3>
                  <p
                    className={`text-xs mb-4 leading-relaxed ${track.dark ? "text-gray-300" : "text-gray-500"}`}
                  >
                    {track.description}
                  </p>

                  <div
                    className={`border-t pt-4 space-y-3 text-xs ${track.dark ? "border-slate-800 text-gray-300" : "border-slate-100 text-gray-600"}`}
                  >
                    {track.facts.map((fact) => (
                      <div
                        className="flex items-center justify-between"
                        key={fact.label}
                      >
                        <span
                          className={`font-bold ${track.dark ? "text-gray-200" : "text-slate-700"}`}
                        >
                          {fact.label}
                        </span>
                        <span className={`font-semibold ${fact.valueClass ?? ""}`}>
                          {fact.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <ul
                    className={`text-xs space-y-2.5 my-4 border-t pt-3 ${track.dark ? "border-slate-800 text-gray-300" : "border-slate-100 text-gray-600"}`}
                  >
                    {track.benefits.map((benefit) => (
                      <li key={benefit}>
                        <i
                          className={`fa-solid fa-check mr-2 ${track.dark ? "text-blue-400" : "text-blue-600"}`}
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`mt-3 pt-3 border-t ${track.dark ? "border-slate-800" : "border-slate-100"}`}
                >
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider block mb-2 ${track.dark ? "text-blue-400" : "text-blue-600"}`}
                  >
                    Advancement Potential:
                  </span>
                  <p
                    className={`text-[11px] italic ${track.dark ? "text-gray-400" : "text-gray-500"}`}
                  >
                    {track.advancement}
                  </p>
                  <div className="mt-3 text-center">
                    <p
                      className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${track.cta.statusClass}`}
                    >
                      {track.cta.status}
                    </p>
                    {track.cta.href ? (
                      <a
                        href={track.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary btn-sm btn-pill w-full"
                      >
                        {track.cta.label}
                      </a>
                    ) : (
                      <span className="w-full text-center bg-slate-200 text-slate-500 font-oswald uppercase tracking-widest text-xs py-3 rounded-full inline-block cursor-not-allowed">
                        {track.cta.label}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROGRESSION & LEADERSHIP ROADMAP */}
      <section
        id="progression-flow"
        className="py-16 md:py-24 bg-slate-50 border-y border-slate-200"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-oswald uppercase tracking-widest text-xs font-bold text-blue-600">
              Career &amp; Leadership Path
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">
              How You Advance in NSSR
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4" />
            <p className="text-gray-500 text-sm max-w-2xl mx-auto mt-4">
              In accordance with Article 3.7 and Chapter 8, NSSR offers a
              transparent, merit-based progression pipeline from entry-level
              participation to executive governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {steps.map((step) => (
              <div
                key={step.n}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative"
              >
                <div
                  className={`w-10 h-10 rounded-full text-white font-oswald font-bold flex items-center justify-center text-lg mb-4 ${step.dark ? "bg-slate-900" : "bg-blue-600"}`}
                >
                  {step.n}
                </div>
                <h4 className="font-oswald text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-xs font-semibold text-blue-600 mb-2">
                  {step.sub}
                </p>
                <p className="text-[12px] text-gray-500 leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPARISON MATRIX */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="font-oswald uppercase tracking-widest text-xs font-bold text-blue-600">
              Side-by-Side Comparison
            </h3>
            <h2 className="text-3xl font-bold mt-2 text-slate-900">
              Track Features &amp; Rights Matrix
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-900 text-white font-oswald uppercase tracking-wider">
                  <th className="p-4 border border-slate-700">Feature / Rights</th>
                  <th className="p-4 border border-slate-700">Volunteer</th>
                  <th className="p-4 border border-slate-700">
                    College Representative
                  </th>
                  <th className="p-4 border border-slate-700">General Member</th>
                  <th className="p-4 border border-slate-700">
                    Executive / Sub-Exec
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-gray-700">
                {matrix.map((row) => (
                  <tr className="hover:bg-slate-50" key={row.feature}>
                    <td className="p-4 font-bold text-slate-900 border border-slate-200">
                      {row.feature}
                    </td>
                    {row.cells.map((cell) => (
                      <td
                        className={`p-4 border border-slate-200 ${cell.className}`}
                        key={cell.text}
                      >
                        {cell.className.includes("font-bold") ? (
                          <>
                            <i className="fa-solid fa-check mr-1" />
                            {cell.text}
                          </>
                        ) : (
                          cell.text
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-400 italic mt-3">
            * College Representatives and Volunteers hold observer status unless
            they separately hold General Membership.
          </p>
        </div>
      </section>
    </>
  );
}