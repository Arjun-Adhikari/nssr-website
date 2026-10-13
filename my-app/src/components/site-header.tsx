"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/site";
import type { NavItem } from "@/lib/types";

/* Root-absolute: a relative path would resolve against the current route's
   directory and 404 on every nested page (/events/[id], /blog/[slug]). */
const LOGO_SRC = "/assets/images/bluelogonobg.png";

/** Stable DOM id for a dropdown, derived from its label (matches the original). */
function dropdownId(label: string) {
  return "nav-dropdown-" + label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

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

  /* Escape closes the drawer first, then any open submenu. */
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (openDropdown) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, openDropdown]);

  /* Clicking outside the drawer dismisses it. */
  useEffect(() => {
    if (!menuOpen) return;
    const onClick = () => setMenuOpen(false);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [menuOpen]);

  /* The design system locks page scroll via `body.nav-open` while the drawer
     is up; that class used to be toggled straight onto <body> by main.js. */
  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
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

  const toggleDropdown = (label: string) => {
    setOpenDropdown((current) => (current === label ? null : label));
  };

  const renderItem = (item: NavItem) => {
    const active = isActiveItem(item);
    const linkClass = ["nav-link", item.variant === "cta" ? "nav-cta" : ""]
      .filter(Boolean)
      .join(" ");
    const attrs = active ? { "aria-current": "page" as const } : {};

    if (item.children) {
      const isOpen = openDropdown === item.label;
      return (
        <li
          key={item.label}
          className={`nav-dropdown-item${active ? " is-active" : ""}${isOpen ? " is-open" : ""}`}
        >
          <div className="dropdown-trigger-wrapper">
            {/* A dropdown has no page of its own, so the label is a
                non-navigating span and the adjacent button owns disclosure. */}
            <span
              className={`${linkClass}${active ? " is-active" : ""}`}
              {...attrs}
              onClick={(event) => {
                if (!window.matchMedia("(max-width: 1024px)").matches) return;
                event.preventDefault();
                toggleDropdown(item.label);
              }}
            >
              {item.label}
            </span>
            <button
              className="dropdown-arrow-btn"
              type="button"
              aria-expanded={isOpen}
              aria-controls={dropdownId(item.label)}
              aria-label={`Toggle ${item.label} submenu`}
              onClick={() => toggleDropdown(item.label)}
            >
              <span className="dropdown-caret" aria-hidden="true" />
            </button>
          </div>
          <ul
            className={`nav-dropdown-menu${isOpen ? " is-open" : ""}`}
            id={dropdownId(item.label)}
          >
            {item.children.map((child) => {
              const childActive = isActiveHref(child.href);
              return (
                <li key={child.href}>
                  <Link
                    className={`dropdown-link${childActive ? " is-active" : ""}`}
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