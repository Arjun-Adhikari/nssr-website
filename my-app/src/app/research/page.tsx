import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research",
  description:
    "NSSR believes research should be open to everyone. We help students find the guidance, mentorship, skills, and support they need to pursue meaningful research.",
};

const spotlights = [
  {
    image: "assets/images/research/spotlight-1.jpg",
    alt: "Genomic research in Nepal",
    tag: "Genomics & Public Health",
    title: "Mapping Nepal's Genomic Landscape",
    excerpt:
      "A nationwide initiative sequencing pathogen genomes to strengthen disease surveillance and inform evidence-based health policy.",
    cta: "Read the study",
  },
  {
    image: "assets/images/research/spotlight-2.jpg",
    alt: "Climate research in Himalayas",
    tag: "Climate & Glaciology",
    title: "Himalayan Glacier Retreat Accelerates",
    excerpt:
      "Long-term remote sensing and field studies reveal unprecedented ice loss rates, with implications for water security across South Asia.",
    cta: "Explore findings",
  },
  {
    image: "assets/images/research/spotlight-3.jpg",
    alt: "AI for agriculture",
    tag: "AI & Agricultural Systems",
    title: "Predicting Crop Yields with Satellite ML",
    excerpt:
      "Student researchers deploy computer vision on multispectral imagery to forecast harvests and guide smallholder decisions in real time.",
    cta: "View methodology",
  },
  {
    image: "assets/images/research/spotlight-4.jpg",
    alt: "Social science research",
    tag: "Social Science & Policy",
    title: "Youth Migration & Knowledge Remittances",
    excerpt:
      "Mixed-methods study tracing how Nepali students abroad transfer skills, networks, and capital back to domestic research ecosystems.",
    cta: "Read the paper",
  },
  {
    image: "assets/images/research/spotlight-5.jpg",
    alt: "Materials science",
    tag: "Materials & Energy",
    title: "Perovskite Solar Cells for Himalayan Conditions",
    excerpt:
      "Novel encapsulation techniques developed by undergraduate teams boost stability under high-UV, freeze-thaw cycling.",
    cta: "See the data",
  },
];

export default function ResearchPage() {
  return (
    <>
      <header className="hero-clear pb-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 research-hero-overlay bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,.35),_transparent_48%),linear-gradient(135deg,#0f172a,#172554)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="font-oswald text-blue-400 uppercase tracking-[.35em] text-xs font-bold">
            NSSR Research
          </span>
          <h1 className="text-4xl md:text-7xl font-black mt-5 mb-6">
            Curiosity into{" "}
            <span className="heading-accent italic font-light text-blue-300">
              contribution.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 leading-relaxed">
            NSSR believes research should be open to everyone. We stand with
            students by helping them find the guidance, mentorship, skills, and
            support they need to pursue meaningful research.
          </p>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm leading-relaxed mt-5">
            We support students in two ways: Research Pathways offers a
            recurring, multidisciplinary route for exploring ideas and meeting
            researchers, while the NSSR Summer Research Fellowship provides a
            structured program for developing research from question to
            presentation and publication.
          </p>
        </div>
      </header>

      {/* RESEARCH SPOTLIGHT — Sticky Scroll Creative Section */}
      <section className="research-spotlight" aria-labelledby="spotlight-heading">
        <div className="spotlight-grid">
          {/* Left Column: Sticky Heading */}
          <div className="spotlight-sticky">
            <span className="spotlight-eyebrow">Research Spotlight</span>
            <h2 id="spotlight-heading" className="spotlight-heading">
              Where curiosity meets <br />
              <span className="spotlight-accent">rigorous inquiry.</span>
            </h2>
            <p className="spotlight-lead">
              A curated view of the questions, methods, and voices shaping
              student-led research across Nepal and beyond.
            </p>
          </div>

          {/* Right Column: Scrolling Feature Blocks */}
          <div className="spotlight-content">
            {spotlights.map((item) => (
              <article className="spotlight-block" key={item.title}>
                <div className="spotlight-block__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.alt} loading="lazy" />
                </div>
                <div className="spotlight-block__body">
                  <span className="spotlight-block__tag">{item.tag}</span>
                  <h3 className="spotlight-block__title">{item.title}</h3>
                  <p className="spotlight-block__excerpt">{item.excerpt}</p>
                  <a href="#" className="spotlight-block__link">
                    <span>{item.cta}</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL FEATURE — Scientific Writing & LaTeX Workshop */}
      <section className="editorial-feature-section" aria-labelledby="feature-title">
        <div className="feature-container">
          {/* Left Column: Context */}
          <div className="feature-text">
            <span className="feature-meta">
              Workshop Spotlight &bull; Jan-Feb 2026
            </span>
            <h2 className="feature-title" id="feature-title">
              Scientific Writing <em>&amp; LaTeX</em>
            </h2>
            <p className="feature-desc">
              An intensive multi-day workshop equipping researchers with the
              foundational tools for academic formatting, rigorous
              documentation, and publication-ready manuscript preparation.
            </p>
            <span className="feature-rule" aria-hidden="true" />
          </div>

          {/* Right Column: Asymmetric Photo Grid */}
          <div className="feature-photo-grid">
            <div className="photo-large">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/latexfolder/latex-main.jpg"
                alt="LaTeX Workshop Session"
                loading="lazy"
              />
            </div>
            <div className="photo-small">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/latexfolder/latex-sub1.jpg"
                alt="Workshop slide on research tools"
                loading="lazy"
              />
            </div>
            <div className="photo-small">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/latexfolder/latex-sub2.jpg"
                alt="Workshop slide on types of research reports"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="py-20 md:py-28 research-pathways-wrapper">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="editorial-row">
            <div className="deboxed-card" style={editorialCard}>
              <span className="font-oswald text-blue-600 uppercase tracking-widest text-xs font-bold">
                Discover &middot; Connect &middot; Research
              </span>
              <h2 className="text-3xl font-black mt-3 mb-4 font-serif">
                Research Pathways
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                A monthly, multidisciplinary initiative where students explore
                one research field, meet researchers online and in person, share
                ideas, receive feedback, and find potential collaborators.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                No image is needed here. The pathway is built around
                conversation, ideas, and participation.
              </p>
              <Link
                href="/research-pathways"
                className="font-oswald text-xs uppercase tracking-widest text-blue-700 inline-flex items-center gap-1"
              >
                Explore Pathways <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
            <div className="deboxed-card" style={editorialCard}>
              <span className="font-oswald text-blue-600 uppercase tracking-widest text-xs font-bold">
                12 Weeks &middot; Training &middot; Research &middot; Publication
              </span>
              <h2 className="text-3xl font-black mt-3 mb-4 font-serif">
                NSSR Summer Research Fellowship
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                A structured three-month fellowship guiding students through
                research foundations, collaborative implementation, scientific
                writing, and a final symposium.
              </p>
              <Link
                href="/nsrf"
                className="font-oswald text-xs uppercase tracking-widest text-blue-700 inline-flex items-center gap-1"
              >
                View Fellowship <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <section className="py-16 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <p className="max-w-2xl mx-auto text-slate-500 italic">
            Research is the bridge between what we know and what we must
            discover to build a better Nepal.
          </p>
        </div>
      </section>
    </>
  );
}

const editorialCard = {
  borderTop: "2px solid #0f172a",
  paddingTop: 32,
} as const;