/**
 * Icon sprite for the NSRF card glyphs. Defined once and referenced by <use>,
 * so every card icon shares one stroke weight, one 24x24 box and one colour
 * without repeating path data across the markup. Ported verbatim from the
 * inline <svg class="icon-sprite"> in nsrf.html.
 */
export function IconSprite() {
  return (
    <svg
      className="icon-sprite"
      aria-hidden="true"
      focusable="false"
      width={0}
      height={0}
    >
      <symbol
        id="i-certificate"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="9" r="5.2" />
        <path d="M8.4 13.4 7 21.5l5-2.4 5 2.4-1.4-8.1" />
        <path d="m9.9 9 1.5 1.5L14.3 7.6" />
      </symbol>
      <symbol
        id="i-proposal"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V7.5L14 3z" />
        <path d="M13.8 3.2v4.3h4.4M8.5 12.5h7M8.5 16h4.5" />
      </symbol>
      <symbol id="i-team" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="4.6" cy="9.7" r="2.45" />
        <circle cx="19.4" cy="9.7" r="2.45" />
        <rect x="0.2" y="13.9" width="8.8" height="5.4" rx="2.4" />
        <rect x="15" y="13.9" width="8.8" height="5.4" rx="2.4" />
        <circle cx="12" cy="7.4" r="3.3" />
        <rect x="5.6" y="12.2" width="12.8" height="7.6" rx="3" />
      </symbol>
      <symbol
        id="i-book"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 6.5S9.8 4.5 4 4.5v13c5.8 0 8 2 8 2s2.2-2 8-2v-13c-5.8 0-8 2-8 2z" />
        <path d="M12 6.5v13" />
      </symbol>
      <symbol
        id="i-compass"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="m15.6 8.4-2 5.2-5.2 2 2-5.2 5.2-2z" />
      </symbol>
      <symbol
        id="i-microscope"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.5 3.5h4l1.6 8H11.1z" />
        <path d="M8 11.5h7a4 4 0 0 1 0 8H8" />
        <path d="M4 19.5h16" />
      </symbol>
      <symbol
        id="i-mentors"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="7" cy="8" r="3" />
        <circle cx="17" cy="8" r="3" />
        <path d="M4 20v-1.5a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3V20M14 20v-1.5a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3V20" />
      </symbol>
      <symbol
        id="i-shield"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2.5 4 5.6v6.1c0 4.7 3.3 9 8 10.3 4.7-1.3 8-5.6 8-10.3V5.6L12 2.5z" />
        <path d="m8.6 11.9 2.4 2.4 4.4-4.6" />
      </symbol>
    </svg>
  );
}

/** The blue 22x22 glyph the NSRF advisor/gain rows lead with. */
export function SpriteIcon({ id }: { id: string }) {
  return (
    <svg
      className="icon-box"
      aria-hidden="true"
      focusable="false"
      style={{ width: 22, height: 22, color: "#1d4ed8" }}
    >
      <use href={`#${id}`} />
    </svg>
  );
}