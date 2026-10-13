#!/usr/bin/env node
/**
 * Link + asset sweep for the NSSR site.
 *
 * Walks every route, checks it returns 200, and resolves every <img src> the
 * way a browser would for that document URL (relative paths are resolved
 * against the route's own directory, which is how nested routes such as
 * /events/[id] silently 404 on root-relative-looking asset paths).
 *
 * Also asserts the shell rendered and that each page carries exactly one <h1>.
 *
 * Usage:
 *   node scripts/verify.mjs [--base http://localhost:3100] [--json]
 *
 * Expects a server to already be running (`pnpm start` works well).
 */

const args = process.argv.slice(2);
const baseIdx = args.indexOf("--base");
const BASE =
  baseIdx >= 0 && args[baseIdx + 1]
    ? args[baseIdx + 1].replace(/\/$/, "")
    : process.env.VERIFY_BASE ?? "http://localhost:3100";
const asJson = args.includes("--json");

const ROUTES = [
  "/",
  "/events",
  "/events/experimental",
  "/events/aspire",
  "/events/FWU-26",
  "/events/Matlab-25",
  "/events/quantum-25",
  "/events/geo-25",
  "/events/computational-25",
  "/blog",
  "/blog/quantum-mechanics-2025",
  "/blog/plasma-physics-2025",
  "/gallery",
  "/membership",
  "/nsrf",
  "/outreach",
  "/research",
  "/research-pathways",
  "/science-beyond-classroom",
  "/student-empowerment",
  "/team",
  "/workshop",
];

async function checkRoute(route) {
  const problems = [];
  let images = 0;

  let res;
  try {
    res = await fetch(BASE + route);
  } catch (err) {
    return { route, problems: [`unreachable: ${err.message}`], images: 0 };
  }

  if (res.status !== 200) {
    problems.push(`status ${res.status}`);
  }

  const html = await res.text();

  if (!html.includes('class="site-header"')) problems.push("no site header");
  if (!html.includes('class="site-footer"')) problems.push("no site footer");

  const h1s = (html.match(/<h1\b/g) ?? []).length;
  if (h1s !== 1) problems.push(`${h1s} <h1> elements (expected 1)`);

  const imgsWithoutAlt = (html.match(/<img\b(?![^>]*\balt=)[^>]*>/g) ?? []).length;
  if (imgsWithoutAlt) problems.push(`${imgsWithoutAlt} <img> without alt`);

  const srcs = [...new Set([...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1]))];
  images = srcs.length;

  for (const src of srcs) {
    if (/^(https?:)?\/\//.test(src) || src.startsWith("data:")) continue;
    let url;
    try {
      url = new URL(src, BASE + route);
    } catch {
      problems.push(`unparseable src: ${src}`);
      continue;
    }
    let ok = false;
    try {
      const head = await fetch(url, { method: "HEAD" });
      ok = head.ok;
      if (!ok) problems.push(`image ${src} -> ${head.status}`);
    } catch (err) {
      problems.push(`image ${src} -> ${err.message}`);
    }
  }

  return { route, problems, images };
}

const results = [];
for (const route of ROUTES) {
  results.push(await checkRoute(route));
  process.stderr.write(".");
}
process.stderr.write("\n");

const failures = results.filter((r) => r.problems.length);
const totalImages = results.reduce((n, r) => n + r.images, 0);

if (asJson) {
  console.log(JSON.stringify({ base: BASE, results, totalImages }, null, 2));
} else {
  for (const r of results) {
    const mark = r.problems.length ? "FAIL" : " ok ";
    console.log(`[${mark}] ${r.route.padEnd(30)} ${String(r.images).padStart(3)} images`);
    for (const p of r.problems) console.log(`         - ${p}`);
  }
  console.log(
    `\n${results.length} routes, ${totalImages} images, ${failures.length} failing`,
  );
}

process.exit(failures.length ? 1 : 0);