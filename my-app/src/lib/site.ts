import type { NavItem, SocialLink } from "./types";

/**
 * Routes are absolute-from-root ("/team") rather than the original
 * "team.html", since the App Router owns the path shape.
 */
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Executives", href: "/team" },
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "NSRF", href: "/nsrf" },
      { label: "Research Pathways", href: "/research-pathways" },
    ],
  },
  {
    label: "Outreach",
    href: "/outreach",
    children: [
      { label: "Science Beyond the Classroom", href: "/science-beyond-classroom" },
      { label: "Student Empowerment Initiative", href: "/student-empowerment" },
    ],
  },
  { label: "Workshops", href: "/workshop" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Join Us", href: "/membership", variant: "cta" },
];

export const footerLinks: NavItem[] = [
  { label: "Research", href: "/research" },
  { label: "Outreach", href: "/outreach" },
  { label: "Workshops", href: "/workshop" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events Directory", href: "/events" },
  { label: "Our Team", href: "/team" },
  { label: "Membership", href: "/membership" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/nssrnepal",
    icon: "fa-facebook-square",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nssrnepal/",
    icon: "fa-instagram-square",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nssrnepal/?viewAsMember=true",
    icon: "fa-linkedin",
  },
];

export const site = {
  name: "Nepalese Society of Student Researchers",
  shortName: "NSSR",
  url: "https://nssrnepal.org/",
  tagline: "Towards an Informed Society.",
};