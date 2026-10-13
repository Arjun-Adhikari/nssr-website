import Link from "next/link";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="hero-clear py-32 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,.35),_transparent_48%),linear-gradient(135deg,#0f172a,#172554)]" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="font-oswald text-blue-400 uppercase tracking-[.35em] text-xs font-bold">
          Error 404
        </span>
        <h1 className="text-4xl md:text-7xl font-black mt-5 mb-6">
          This page is not in the{" "}
          <span className="italic font-light text-blue-300">archive</span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-300 leading-relaxed">
          The page you were looking for has moved, or never existed. Try the
          events directory, or head back to the start.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link href="/" className="btn-primary btn-lg btn-sharp">
            Back to Home
          </Link>
          <Link href="/events" className="btn-hero-outline">
            Browse Events
          </Link>
        </div>
      </div>
    </section>
  );
}