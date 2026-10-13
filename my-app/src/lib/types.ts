export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  variant?: "cta";
  children?: NavChild[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type EventStatus = "Completed" | "Complete" | "Upcoming";

export type EventFeed = {
  /** ISO date used for sorting; `date` above is the human-facing string. */
  isoDate: string;
  label: string;
  title: string;
  image: string;
};

export type NssrEvent = {
  slug: string;
  title: string;
  id: string;
  date: string;
  categoryType: string;
  category: string;
  image: string;
  excerpt: string;
  report?: string;
  status: EventStatus;
  mentor?: string;
  venue?: string;
  gallery: string[];
  feed: EventFeed;
  /** Trusted first-party prose authored for the site, rendered as-is. */
  body: string;
};

/** The trimmed shape used by the home page "Recent Proceedings" strip. */
export type EventSummary = {
  id: string;
  date: string;
  label: string;
  title: string;
  image: string;
};

export type StatusMeta = {
  label: string;
  cls: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  role: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  body: string;
};

export type TeamMember = {
  name: string;
  role: string;
  affiliation: string;
  image: string;
  linkedin?: string;
  email?: string;
};

export type TeamTab = {
  id: string;
  label: string;
  heading: string;
  blurb: string;
  members: TeamMember[];
};

export type GalleryImage = {
  src: string;
  alt: string;
};