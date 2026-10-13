"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/site";
import type { NavItem } from "@/lib/types";

/* Root-absolute: a relative path would resolve against the current route's
   directory and 404 on every nested page (/events/[id], /blog/[slug]). */
const LOGO_SRC = "/assets/images/bluelogonobg.png";

/** The design system's own drawer breakpoint, mirrored in the matchMedia calls. */
const MOBILE_NAV_QUERY = "(max-width: 1024px)";

/** True on the desktop bar, where hover is available to open a submenu. */
function isDesktopNav() {
  return !window.matchMedia(MOBILE_NAV_QUERY).matches;
}

/** Stable DOM id for a dropdown, derived from its label (matches the original). */
function dropdownId(label: string) {
  return "nav-dropdown-" + label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

/* --------------------------------------------------------------------------
   Dropdown classes.

   These used to live in globals.css as .nav-dropdown-* / .dropdown-* rules.
   They are Tailwind utilities now, but every value still reads from the
   design system's custom properties, so the rendered result is unchanged.
   `lg:` is the 1024px breakpoint the design system uses for the drawer.
   -------------------------------------------------------------------------- */

const MENU_BASE =
  "absolute left-0 top-[calc(100%+var(--space-2))] z-[var(--z-drawer)] m-0 " +
  "min-w-[250px] list-none rounded-[var(--nssr-radius-md)] border border-[var(--border-hairline)] " +
  "bg-[var(--bg-glass-strong)] p-[var(--space-2)] opacity-0 shadow-[var(--nssr-shadow-lg)] " +
  "backdrop-blur-[var(--blur-overlay)] backdrop-saturate-[var(--blur-saturation)] " +
  "invisible [transition:var(--transition-premium)] -translate-y-2 " +
  /* Bridges the 8px gap between the trigger row and the panel. Without it the
     pointer passes through empty space on the way down, leaves the <li>, and
     onMouseLeave closes the menu before it can be reached. */
  "[&::before]:absolute [&::before]:left-0 [&::before]:right-0 [&::before]:-top-2 [&::before]:h-2 [&::before]:content-[''] " +
  // Below lg the drawer is open on screen, so the panel becomes an inline
  // accordion: no floating glass card, no shadow.
  "max-lg:static max-lg:z-auto max-lg:my-[5px] max-lg:min-w-0 max-lg:w-full " +
  "max-lg:rounded-[var(--nssr-radius-md)] max-lg:border-0 max-lg:bg-[var(--bg-surface-sunken)] " +
  "max-lg:p-[10px_0] max-lg:shadow-none max-lg:opacity-100 max-lg:visible max-lg:translate-y-0";

/** Open state, applied at every breakpoint. */
const MENU_OPEN = "visible opacity-100 translate-y-0";

/** Closed: an inline, collapsed accordion in the drawer. */
const MENU_CLOSED = "max-lg:hidden";

const TRIGGER_WRAPPER =
  "flex items-center max-lg:w-full max-lg:justify-between";

const ARROW_BASE =
  "inline-flex h-[22px] w-[22px] -ml-[2px] shrink-0 items-center justify-center rounded-full " +
  "border-0 bg-none text-[var(--text-tertiary)] [transition:var(--transition-premium)] " +
  "max-lg:ml-0 max-lg:h-12 max-lg:w-12";

const ARROW_OPEN = "text-[var(--nssr-blue)]";
const ARROW_HOVER =
  "hover:bg-[var(--accent-subtle-bg)] hover:text-[var(--nssr-blue)]";

const CARET_BASE =
  "h-1.5 w-1.5 -translate-y-0.5 rotate-45 border-b-[1.5px] border-r-[1.5px] border-current " +
  "transition-transform [transition:var(--transition-premium)]";
const CARET_OPEN = "translate-y-px rotate-[225deg]";

const DROPDOWN_LINK =
  "flex items-center rounded-[var(--nssr-radius-sm)] px-[var(--space-4)] py-[var(--space-3)] " +
  "text-[length:var(--font-size-md)] text-[var(--text-secondary)] no-underline " +
  "[transition:var(--transition-premium)] " +
  "max-lg:box-border max-lg:block max-lg:w-full max-lg:whitespace-normal " +
  "max-lg:px-6 max-lg:py-3 max-lg:text-[length:0.95rem] max-lg:text-[#0f172a]";

const DROPDOWN_LINK_ACTIVE =
  "bg-[var(--accent-subtle-bg)] text-[var(--nssr-blue)] [font-weight:var(--nssr-font-weight-semibold)]";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const currentPage = pathname.toLowerCase();

  const isActiveHref = (href: string) => href.toLowerCase() === currentPage;

  const isActiveItem = (item: NavItem) =>
    item.children
      ? item.children.some((child) => isActiveHref(child.href))
      : isActiveHref(item.href);

  /* Compact-glass header once the page has scrolled past 8px. */
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDropdown = useCallback((label: string, event?: React.SyntheticEvent) => {
    /* Both triggers must swallow the event. Without this the click bubbles to
       the document listener below and closes the mobile drawer in the same
       tick, so the submenu opens behind a drawer that has just disappeared —
       and the leftover open state shifts every item below it, which is how
       taps end up landing on the wrong link. */
    event?.preventDefault();
    event?.stopPropagation();
    setOpenDropdown((current) => (current === label ? null : label));
  }, []);

  /* Escape closes the drawer first, then any open submenu. Closing the drawer
     also clears the submenu so no open state survives into the next visit. */
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (menuOpen) {
        setMenuOpen(false);
        setOpenDropdown(null);
        toggleRef.current?.focus();
        return;
      }
      if (openDropdown) setOpenDropdown(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, openDropdown]);

  /* Dismiss the drawer on an outside click, and collapse it once a destination
     is chosen. The latter matters because the header survives client-side
     navigation, so without it the drawer would still be marked open on the
     next page. Clicks on a trigger are excluded: they stop propagation, so
     they never reach this listener. */
  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      if (navRef.current?.contains(target)) {
        if (target.closest("a")) setMenuOpen(false);
        return;
      }
      setMenuOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [menuOpen]);

  /* Rotating past the mobile breakpoint must reset inlined state, or the
     desktop menu can be left invisible after a resize. */
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1025px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (!event.matches) return;
      setMenuOpen(false);
      setOpenDropdown(null);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  const renderItem = (item: NavItem) => {
    const active = isActiveItem(item);
    const linkClass = ["nav-link", item.variant === "cta" ? "nav-cta" : ""]
      .filter(Boolean)
      .join(" ");
    const attrs = active ? { "aria-current": "page" as const } : {};

    if (item.children) {
      const isOpen = openDropdown === item.label;
      const menuId = dropdownId(item.label);

return (
        <li
          key={item.label}
          className={`relative${active ? " is-active" : ""}${isOpen ? " is-open" : ""}`}
          /* Hover and focus are routed through React rather than CSS so that
             `openDropdown` stays the single source of truth. With CSS hover the
             two mechanisms are independent and two menus can be visible at
             once; here only the selected one can ever be open. */
          onMouseEnter={() => {
            if (isDesktopNav()) setOpenDropdown(item.label);
          }}
          onMouseLeave={() => {
            if (isDesktopNav())
              setOpenDropdown((current) =>
                current === item.label ? null : current,
              );
          }}
          onFocus={() => setOpenDropdown(item.label)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              setOpenDropdown((current) =>
                current === item.label ? null : current,
              );
            }
          }}
        >
          <div className={TRIGGER_WRAPPER}>
            {/* Desktop the label navigates to the section page; in the drawer it
                becomes an accordion toggle, because the drawer has no hover. */}
            <Link
              href={item.href}
              className={`${linkClass} max-lg:min-w-0 max-lg:flex-1${active ? " is-active" : ""}`}
              {...attrs}
              aria-expanded={isOpen}
              aria-controls={menuId}
              onClick={(event) => {
                if (isDesktopNav()) return;
                toggleDropdown(item.label, event);
              }}
            >
              {item.label}
            </Link>
            <button
              className={`dropdown-arrow-btn ${ARROW_BASE} ${ARROW_HOVER}${
                isOpen ? ` ${ARROW_OPEN}` : ""
              }`}
              type="button"
              aria-expanded={isOpen}
              aria-controls={menuId}
              aria-label={`Toggle ${item.label} submenu`}
              onClick={(event) => toggleDropdown(item.label, event)}
            >
              <span
                className={`dropdown-caret ${CARET_BASE}${isOpen ? ` ${CARET_OPEN}` : ""}`}
                aria-hidden="true"
              />
            </button>
          </div>
          <ul
            className={`nav-dropdown-menu ${MENU_BASE} ${
              isOpen ? MENU_OPEN : MENU_CLOSED
            }`}
            id={menuId}
          >
            {item.children.map((child) => {
              const childActive = isActiveHref(child.href);
              return (
                <li key={child.href}>
                  <Link
                    className={`dropdown-link ${DROPDOWN_LINK}${
                      childActive ? ` ${DROPDOWN_LINK_ACTIVE}` : ""
                    }`}
                    href={child.href}
                    aria-current={childActive ? "page" : undefined}
                  >
                    {child.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      );
    }

    return (
      <li className="nav-item" key={item.href}>
        <Link
          className={`${linkClass}${active ? " is-active" : ""}`}
          href={item.href}
          {...attrs}
        >
          {item.label}
        </Link>
      </li>
    );
  };

  return (
    <header
      className="site-header"
      id="site-header"
      data-nav-state={scrolled ? "scrolled" : "top"}
    >
      <div className="nav-container">
        <Link href="/" className="nav-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="nav-brand-logo"
            src={LOGO_SRC}
            alt="NSSR"
            width={36}
            height={36}
          />
          <span className="brand-text">
            Nepalese Society of Student Researchers
          </span>
        </Link>
        <button
          ref={toggleRef}
          className={`nav-toggle${menuOpen ? " is-active" : ""}`}
          id="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          onClick={(event) => {
            event.stopPropagation();
            setMenuOpen((open) => !open);
          }}
        >
          <span className="hamburger-line" aria-hidden="true" />
          <span className="hamburger-line" aria-hidden="true" />
          <span className="hamburger-line" aria-hidden="true" />
        </button>
        <nav
          ref={navRef}
          className={`nav-menu${menuOpen ? " is-open" : ""}`}
          id="nav-menu"
          aria-label="Primary"
        >
          <ul className="nav-links">{navItems.map(renderItem)}</ul>
        </nav>
      </div>
    </header>
  );
}