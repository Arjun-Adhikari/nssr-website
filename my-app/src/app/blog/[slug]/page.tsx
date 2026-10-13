import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProgressBar } from "@/components/blog/progress-bar";
import { getPost, posts } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <ProgressBar />

      <main className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="fade-in">
            <div className="reading-container">
              <Link
                href="/blog"
                className="mb-10 flex items-center text-[10px] max-lg:text-[11px] font-oswald font-bold uppercase tracking-widest text-blue-600 transition-all hover:gap-2 w-fit max-lg:min-h-11"
              >
                <i className="fa-solid fa-arrow-left mr-2" />
                Back to Dispatch
              </Link>

              <header className="mb-12">
                <span className="font-oswald text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] max-lg:text-[11px] mb-6 block">
                  {post.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-xs text-gray-500 uppercase font-oswald tracking-widest">
                  <span className="font-bold text-slate-900">{post.author}</span>
                  <span className="opacity-20">|</span>
                  <span>{post.date}</span>
                </div>
              </header>

              <div className="text-slate-700">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt=""
                  className="w-full aspect-video object-cover rounded-lg mb-12 shadow-xl"
                />
                <div dangerouslySetInnerHTML={{ __html: post.body }} />
              </div>

              {/* Author Footer */}
              <div className="mt-20 pt-10 border-t flex items-center gap-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {post.author}
                  </h4>
                  <p className="text-[10px] max-lg:text-[11px] text-gray-400 font-oswald uppercase tracking-widest">
                    {post.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}