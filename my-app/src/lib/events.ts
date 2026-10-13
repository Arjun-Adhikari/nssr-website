import type { EventSummary, NssrEvent, StatusMeta } from "./types";

/**
 * Port of `assets/js/pages/event.js` (eventsData) merged with
 * `NSSR_EVENT_FEED` from `assets/js/main.js`. The feed supplied a separate,
 * shorter display title / poster image / ISO date that the home page's
 * "Recent Proceedings" strip and the archive sort by, so both are kept here.
 */
export const events: NssrEvent[] = [
  {
    slug: "experimental",
    title: "Online Talk: Frontier Experimental Physics",
    id: "NSSR-014",
    date: "31 May 2026",
    categoryType: "Online Talks",
    category: "Physics",
    image: "/assets/images/expe/exp1.jpg",
    excerpt:
      "How Large Research Facilities Advance Science and Create Global Research Opportunities.",
    report: "report/NSRF_Schedule.pdf",
    status: "Completed",
    mentor: "Pashupati Dhakal",
    venue: "Online",
    gallery: [
      "/assets/images/expe/exp1.jpg",
      "/assets/images/expe/exp2.jpg",
      "/assets/images/expe/exp3.jpg",
      "/assets/images/expe/exp4.jpg",
    ],
    feed: {
      isoDate: "2026-05-31",
      label: "Physics // 2026",
      title: "Frontier Experimental Physics",
      image: "/assets/images/events/exp.png",
    },
    body: `
        <p class="mb-4">The Nepalese Society of Student Researchers organized an interactive virtual session titled &ldquo;Frontier Experimental Physics: How Large Research Facilities Advance Science and Create Global Research Opportunities.&rdquo; The webinar aimed to bridge the gap between aspiring Nepali student researchers and cutting-edge global physics research.</p>

        <h4 class="text-xl font-bold mb-2 mt-6">Large Experimental Physics Facilities &amp; Scientific Impact</h4>
        <p class="mb-4">The session detailed how facilities like particle colliders, neutrino detectors, gravitational wave observatories, and nuclear fusion reactors operate.</p>

		<h4 class="text-xl font-bold mb-2 mt-6">Opportunities for Students</h4>
        <p>The speaker outlined step-by-step guidance on identifying student fellowships, summer student programs at major labs, master&rsquo;s/Ph.D. assistantships, and funding avenues available for physics students.</p>
    `,
  },
  {
    slug: "aspire",
    title: "Pathways: Research, Leadership and Global Opportunities",
    id: "NSSR-012",
    date: "30 March 2026",
    categoryType: "Workshops",
    category: "Physics",
    image: "/assets/images/aspire/asp4.jpeg",
    excerpt:
      "Foundational concepts in quantum mechanics, qubits, superposition, entanglement and measurement",
    report: "report/Research_Pathways.pdf",
    status: "Completed",
    mentor: "Dr. Pukar Malla, Dr. Arjun Acharya, Meena Sonea",
    venue: "Tri-chandra College, Ghantaghar",
    gallery: [
      "/assets/images/aspire/asp1.jpeg",
      "/assets/images/aspire/asp2.jpeg",
      "/assets/images/aspire/asp4.jpeg",
      "/assets/images/aspire/asp5.jpeg",
      "/assets/images/aspire/asp6.jpeg",
    ],
    feed: {
      isoDate: "2026-03-30",
      label: "Research & Leadership // 2026",
      title: "Pathways: Research, Leadership and Global Opportunities",
      image: "/assets/images/events/aspire.png",
    },
    body: `
        <p class="mb-4">The Nepalese Society of Student Researchers (NSSR), in collaboration with Aspire Institute and Tri-Chandra Multiple Campus, successfully organized the national-level event entitled Pathways: Research, Leadership, &amp; Global Opportunities, Connecting Local Potential to Global Possibilities on March 30, 2026 with approximatedly 65 students.
			The program aimed to inspire undergraduate and graduate students by providing insights into research opportunities in Nepal, leadership development, innovation, and international fellowships.
			Through interactive talks, mentorship sessions, and networking opportunities, participants gained valuable knowledge for their academic and professional development.</p>

        <h4 class="text-xl font-bold mb-2 mt-6">Objectives Achieved:</h4>
        <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>Increased awareness of research opportunities available in Nepal.</li>
            <li>Introduced students to leadership principles and innovation.</li>
            <li>Connected students with experienced mentors and professionals.</li>
        </ul>

        <p>The Pathways program was successfully completed and fulfilled its intended objectives.
			The event created an engaging platform where students explored research pathways, strengthened leadership skills, and learned about international academic opportunities.</p>
    `,
  },
  {
    slug: "FWU-26",
    title: "Scientific Writing & LaTeX Workshop",
    id: "NSSR-04",
    date: "29 Jan - 3 Feb, 2026",
    categoryType: "Workshops",
    category: "Research Methodology",
    status: "Complete",
    venue: "School of Engineering, Far Western University",
    mentor: "Manish Pandey, Shaleen Kumar Dhital, Mahesh Prasad Awasthi",
    image: "/assets/images/events/1.jpeg",
    excerpt: "5-Day intensive writing and formatting workshop for academic research.",
    report: "report/MAT.pdf",
    gallery: [
      "/assets/images/events/1.jpeg",
      "/assets/images/events/2.jpeg",
      "/assets/images/events/5.jpeg",
      "/assets/images/events/22.jpeg",
    ],
    feed: {
      isoDate: "2026-01-29",
      label: "Research Methodology // 2026",
      title: "Scientific Writing & LaTeX Workshop",
      image: "/assets/images/events/6.png",
    },
    body: `
        <p class="mb-4">The Scientific Writing with LATEX training program is designed to equip undergraduate and early-stage graduate students with essential skills in academic research, scientific writing, and professional document preparation using LATEX. The program integrates theoretical foundations of research methodology with practical hands-on sessions to ensure participants develop both conceptual clarity and technical competence.</p>

        <h4 class="text-xl font-bold mb-2 mt-6">Objectives:</h4>
        <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>To introduce participants to the fundamentals of scientific research and academic writing.</li>
            <li>To develop skills in identifying research problems, objectives, and research questions.</li>
            <li>To familiarize participants with ethical research practices and publication standards.</li>
            <li>To provide hands-on training in LATEX for preparing research papers, reports, and presentations.</li>
        </ul>
        <h4 class="text-xl font-bold mb-2 mt-6"> Outcomes:</h4>
        <p>By the end of the program, participants demonstrated a clear understanding of the structure and essential components of scientific research papers. They developed the ability to conduct effective literature reviews, while consistently applying ethics in citation. Participants also acquired practical skills in preparing professionally formatted research documents using LaTeX.</p>
             `,
  },
  {
    slug: "quantum-25",
    title: "Crash Course on Quantum Computing",
    id: "NSSR-02",
    date: "28 Nov - 14 Dec 2025",
    categoryType: "Workshops",
    category: "Physics",
    image: "/assets/images/Qc/image1.JPG",
    excerpt: "Foundational concepts: qubits, superposition, entanglement, and measurement.",
    report: "report/NSRF_Proceedings.pdf",
    status: "Completed",
    mentor: "Yuechi-Pata Magar, Tara Bhadur Rana, Om Jha, Manish Pandey",
    venue: "St. Xavier's College, Maitighar",
    gallery: [
      "/assets/images/Qc/image1.JPG",
      "/assets/images/Qc/image2.JPG",
      "/assets/images/Qc/image3.JPG",
      "/assets/images/Qc/image5.JPG",
      "/assets/images/Qc/image6.JPG",
      "/assets/images/Qc/image7.JPG",
      "/assets/images/Qc/image9.JPG",
    ],
    feed: {
      isoDate: "2025-11-28",
      label: "Physics // 2025",
      title: "Crash Course on Quantum Computing",
      image: "/assets/images/events/crash.png",
    },
    body: `
        <p class="mb-4">The United Nations (UN) designated the year 2025 as the International Year of Quantum Science and Technology. The centenary celebration aims to raise awareness among students about the profound contributions and future possibilities in quantum mechanics.</p>
        <p class="mb-4">With this goal, this crash course seeks to inspire and ignite young minds by introducing the basics of quantum mechanics and quantum computing.</p>

        <h4 class="text-xl font-bold mb-2 mt-6">Objectives:</h4>
        <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>Introduce foundational quantum mechanics concepts relevant to quantum computing.</li>
            <li>Teach practical quantum programming using Qiskit.</li>
            <li>Provide hands-on experience through lab sessions.</li>
        </ul>
        <p>The workshop concluded with a hands-on session using IBM QISKIT.</p>
    `,
  },
  {
    slug: "geo-25",
    title: "Water Chemistry and Hydrogeochemical Processes in the Central Himalayas",
    id: "NSSR-03",
    date: "28 Nov 2025",
    categoryType: "Online Talks",
    category: "Geo-Chemistry",
    image: "/assets/images/chemistry1.jpeg",
    excerpt: "Himalayan ecology and active data discussion.",
    report: "report/WC.pdf",
    status: "Completed",
    venue: "Online Microsoft Teams",
    mentor: "Dr. Ramesh Raj Pant",
    gallery: [
      "/assets/images/chemistry1.jpeg",
      "/assets/images/chemistry2.jpeg",
      "/assets/images/chemistry3.jpeg",
      "/assets/images/chemistry4.jpeg",
    ],
    feed: {
      isoDate: "2025-11-28",
      label: "Geo-Chemistry // 2025",
      title: "Water Chemistry and Hydrogeochemical Processes",
      image: "/assets/images/chemistry1.jpeg",
    },
    body: `
        <p class="mb-4">The Nepalese Society of Student Researchers (NSSR) successfully organized an online academic talk titled &ldquo;Water Chemistry and Hydrogeochemical Processes in the Central Himalayas.&rdquo; The session focused on key aspects of water chemistry and contemporary research challenges in the Himalayan region.</p>

        <h4 class="text-xl font-bold mb-2 mt-6">Outcomes:</h4>
        <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>Enhanced understanding of water chemistry and hydrogeochemical processes.</li>
            <li>Exposure to research methodologies, analytical techniques, and data interpretation.</li>
            <li>Academic networking among participants from different colleges and universities.</li>
        </ul>
    `,
  },
  {
    slug: "Matlab-25",
    title: "MATLAB Workshop for Researchers: Symbolic Math and Simulink",
    id: "NSSR-01",
    date: "6-10 September 2025",
    categoryType: "Workshops",
    category: "Data Analysis",
    status: "Complete",
    venue: "Online",
    mentor: "Manish Pandey, Janak Singh Dhami",
    image: "/assets/images/Mat/Mat2.png",
    excerpt: "A 5-Day Online MATLAB Workshop on Symbolic Math and Simulink Basics.",
    report: "report/MAT.pdf",
    gallery: [
      "/assets/images/Mat/Mat1.png",
      "/assets/images/Mat/Mat2.png",
      "/assets/images/Mat/Mat3.png",
      "/assets/images/Mat/Mat4.png",
      "/assets/images/Mat/Mat5.png",
    ],
    feed: {
      isoDate: "2025-09-06",
      label: "Computation // 2025",
      title: "MATLAB Workshop for Researchers",
      image: "/assets/images/Mat/Mat1.png",
    },
    body: `
        <p class="mb-4">The Nepalese Society of Student Researchers (NSSR) successfully conducted a 5-Day Online MATLAB Workshop for Researchers: Symbolic Math and Simulink Basics. The workshop aimed to strengthen computational and research skills among students and early-career researchers by providing hands-on training in MATLAB, Symbolic Math Toolbox, and Simulink.</p>

        <h4 class="text-xl font-bold mb-2 mt-6">Outcomes:</h4>
        <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>Introduced participants to MATLAB environment, Symbolic Math Toolbox, and Simulink.</li>
            <li>Developed skills in numerical computation, symbolic mathematics, visualization, and simulations.</li>
            <li>Applied computational techniques to physics, engineering, mathematics, and interdisciplinary research.</li>
            <li>Fostered collaboration and knowledge sharing among young researchers.</li>
        </ul>
             `,
  },
  {
    slug: "computational-25",
    title: "Getting Started with Research: Biology",
    id: "NSSR-05",
    date: "5 Oct 2025",
    categoryType: "Online Talks",
    category: "Methodology",
    status: "Completed",
    venue: "Online",
    mentor: "Pratishna KC",
    image: "/assets/images/bio/pc.jpeg",
    excerpt: "Solving methodology and finding early biology literature.",
    report: "report/MAT.pdf",
    gallery: [
      "/assets/images/bio/pc.jpeg",
      "/assets/images/bio/pc2.jpeg",
      "/assets/images/bio/pc4.jpeg",
      "/assets/images/bio/pc5.jpeg",
      "/assets/images/bio/pc6.jpeg",
    ],
    feed: {
      isoDate: "2025-10-05",
      label: "Methodology // 2025",
      title: "Getting Started with Research: Biology",
      image: "/assets/images/bio/PC.jpg",
    },
    body: `
        <p class="mb-4">The Nepalese Society of Student Researchers (NSSR) successfully organized an insightful online session titled &ldquo;Getting Into Research&rdquo; with the objective of encouraging and guiding students toward academic research and scientific inquiry. The session was delivered by Ms. Pratishna KC, a student researcher from Caldwell University, USA.</p>
        <p>Ms. KC discussed key aspects of research development, including understanding research methodology, improving academic writing skills, seeking mentorship, and exploring research opportunities at national and international levels.</p>
                     `,
  },
];

/** Replaces `window.getLatestNSSREvents()` from `main.js`. */
export function getLatestEvents(count = 3): EventSummary[] {
  return [...events]
    .sort(
      (a, b) =>
        new Date(b.feed.isoDate).getTime() - new Date(a.feed.isoDate).getTime(),
    )
    .slice(0, count)
    .map((event) => ({
      id: event.slug,
      date: event.feed.isoDate,
      label: event.feed.label,
      title: event.feed.title,
      image: event.feed.image,
    }));
}

export function getEvent(slug: string): NssrEvent | undefined {
  return events.find((event) => event.slug === slug);
}

/**
 * Port of the ordering in `renderUI`: entries appear in `NSSR_EVENT_FEED`
 * order, with anything absent from the feed (computational-25) sorted last.
 */
const feedOrder = new Map(
  events.map((event, index) => [event.slug, index] as const),
);

export function eventsInFeedOrder(): NssrEvent[] {
  return [...events].sort(
    (a, b) =>
      (feedOrder.get(a.slug) ?? Number.MAX_SAFE_INTEGER) -
      (feedOrder.get(b.slug) ?? Number.MAX_SAFE_INTEGER),
  );
}

export function eventsByCategory(categoryType: string): NssrEvent[] {
  return eventsInFeedOrder().filter(
    (event) => event.categoryType === categoryType,
  );
}

/** Port of `statusMeta`. The design supports Open / Soon / Done. */
export function statusMeta(status?: string): StatusMeta {
  const value = String(status ?? "").toLowerCase();
  if (value.includes("registration") || value.includes("open")) {
    return { label: "Registration Open", cls: "status-pill--open" };
  }
  if (value.includes("upcoming") || value.includes("soon")) {
    return { label: "Upcoming", cls: "status-pill--soon" };
  }
  if (value.includes("complete") || value.includes("conducted")) {
    return { label: "Completed", cls: "status-pill--done" };
  }
  return { label: status || "Archived", cls: "status-pill--done" };
}

/**
 * Prefer the feed's ISO date: the display strings are ranges such as
 * "29 Jan - 3 Feb, 2026" and cannot yield a reliable day.
 */
export function eventDate(event: NssrEvent): Date {
  const parsed = new Date(`${event.feed.isoDate}T00:00:00`);
  if (!Number.isNaN(parsed.getTime())) return parsed;
  const fallback = new Date(event.date);
  return Number.isNaN(fallback.getTime())
    ? new Date(`${event.feed.isoDate}T00:00:00`)
    : fallback;
}

export function dateBadge(event: NssrEvent) {
  const date = eventDate(event);
  return {
    month: date.toLocaleString("en-US", { month: "short" }),
    day: date.getDate(),
    year: date.getFullYear(),
  };
}