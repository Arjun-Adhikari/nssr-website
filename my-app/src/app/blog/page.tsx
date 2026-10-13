import type { Metadata } from "next";
import Link from "next/link";
import { ProgressBar } from "@/components/blog/progress-bar";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "The Dispatch",
  description: "Insights from NSSR student researchers.",
};

export default function BlogIndexPage() {
  return (
    <>
      <ProgressBar />

      {/* 1. EDITORIAL HERO */}
      <header id="blog-hero" className="hero-clear pb-16 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="max-w-3xl">
              <span className="font-oswald text-blue-600 uppercase tracking-[0.4em] text-[10px] max-md:text-[11px] md:text-xs font-bold mb-4 block">
                NSSR Thought Leadership
              </span>
              <h1 className="text-4xl md:text-8xl font-bold text-slate-900 leading-tight">
                The <span className="italic font-light">Dispatch.</span>
              </h1>
            </div>
            <div className="text-left md:text-right border-l md:border-l-0 pl-4 md:pl-0">
              <p className="font-oswald text-[10px] max-lg:text-[11px] uppercase tracking-widest text-slate-400">
                Scientific Journal
              </p>
              <p className="text-xs text-gray-500 italic">
                Insights from Student Researchers
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 2. BLOG CONTENT AREA */}
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Feed */}
            <div className="lg:col-span-8 space-y-2" id="blog-feed">
              {posts.map((post) => (
                <article
                  className="blog-card py-8 cursor-pointer group"
                  key={post.slug}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex flex-col md:flex-row gap-8 items-center"
                  >
                    <div className="w-full md:w-1/3 aspect-video overflow-hidden rounded-sm bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full md:w-2/3">
                      <span className="text-[10px] max-lg:text-[11px] font-oswald font-bold text-blue-600 tracking-widest uppercase mb-2 block">
                        {post.category} {"//"} {post.date}
                      </span>
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-900 transition leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Sidebar (Hidden on Mobile) */}
            <aside className="lg:col-span-4 hidden lg:block border-l pl-10">
              <div className="sticky top-32">
                <h4 className="font-oswald text-[10px] max-lg:text-[11px] font-bold uppercase tracking-widest mb-8 border-b pb-4 text-slate-500">
                  Editor&apos;s Choice
                </h4>
                <div className="space-y-10">
                  {posts.map((post) => (
                    <div className="cursor-pointer group" key={post.slug}>
                      <Link href={`/blog/${post.slug}`}>
                        <span className="text-[9px] max-lg:text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                          {post.date}
                        </span>
                        <h5 className="font-bold text-sm group-hover:text-blue-600 transition mt-1 leading-snug">
                          {post.title}
                        </h5>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}