import type { BlogPost } from "./types";

/**
 * Port of `const blogs` from `assets/js/pages/blog.js`. The original rendered
 * these client-side off `window.location.hash`; they are now statically
 * generated routes under /blog/[slug].
 */
export const posts: BlogPost[] = [
  {
    slug: "quantum-mechanics-2025",
    title: "Quantum Mechanics: 2025 Retrospective",
    author: "Research Committee",
    role: "NSSR Secretariat",
    date: "Jan 02, 2026",
    category: "Physics",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Looking back at the International Year of Quantum Science and Technology breakthroughs.",
    body: `<h3>A Year of Quantum Leap</h3><p>2025 was designated as the International Year of Quantum Science and Technology. It lived up to the title with breakthroughs that pushed the boundaries of the known universe.</p><blockquote>"Quantum effects were shown in systems large enough to hold in your hand."</blockquote>`,
  },
  {
    slug: "plasma-physics-2025",
    title: "Plasma Physics Nutshell",
    author: "Manish Pandey",
    role: "President, NSSR",
    date: "Nov 10, 2025",
    category: "Physics",
    image: "/assets/images/plasma.jpg",
    excerpt:
      "Revolutionary whole-device modeling for fusion energy and star birth simulations.",
    body: `<h3>The 4th State of Matter</h3><p>Research advanced our ability to model, experiment with, and stabilize plasmas under extreme conditions.</p>`,
  },
];

export const fallbackPostImage =
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80";

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}