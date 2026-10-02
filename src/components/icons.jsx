/* ==========================================================================
   ICONS — inline, stroke-based, currentColor. Kept in its own module so
   ui.jsx only exports components (preserves React Fast Refresh).
   ========================================================================== */
const S = ({ children, size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    {children}
  </svg>
)

export const Icon = {
  orbit: (p) => (
    <S {...p}>
      <circle cx="12" cy="12" r="3.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(-28 12 12)" />
    </S>
  ),
  gyro: (p) => (
    <S {...p}>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="9" ry="3.4" />
      <ellipse cx="12" cy="12" rx="3.4" ry="9" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </S>
  ),
  grid: (p) => (
    <S {...p}>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </S>
  ),
  shield: (p) => (
    <S {...p}>
      <path d="M12 3l7.5 3v5.5c0 4.6-3.1 8.4-7.5 9.5-4.4-1.1-7.5-4.9-7.5-9.5V6z" />
      <path d="M9 12l2.2 2.2L15.5 10" />
    </S>
  ),
  cube: (p) => (
    <S {...p}>
      <path d="M12 2.6l8.4 4.7v9.4L12 21.4 3.6 16.7V7.3z" />
      <path d="M3.6 7.3L12 12l8.4-4.7M12 12v9.4" />
    </S>
  ),
  wave: (p) => (
    <S {...p}>
      <path d="M2 12c2.2-4.5 4.4-4.5 6.6 0s4.4 4.5 6.6 0 4.4-4.5 6.8 0" />
      <path d="M2 17c2.2-3 4.4-3 6.6 0s4.4 3 6.6 0 4.4-3 6.8 0" opacity=".6" />
    </S>
  ),
  satellite: (p) => (
    <S {...p}>
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9.5 12H4.5M19.5 12h-5M12 9.5V4.5M12 19.5v-5" />
      <path d="M2 10.4l2.6 1.6L2 13.6zM22 10.4l-2.6 1.6L22 13.6z" />
    </S>
  ),
  atom: (p) => (
    <S {...p}>
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    </S>
  ),
  book: (p) => (
    <S {...p}>
      <path d="M4 4.5A1.5 1.5 0 015.5 3H19v15H5.5A1.5 1.5 0 004 19.5z" />
      <path d="M4 19.5A1.5 1.5 0 015.5 21H19v-3" />
    </S>
  ),
  patent: (p) => (
    <S {...p}>
      <path d="M12 3l7 3v6c0 4.3-2.9 7.8-7 9-4.1-1.2-7-4.7-7-9V6z" />
      <path d="M9 12.2l2.1 2.1 4-4.3" />
    </S>
  ),
  rocket: (p) => (
    <S {...p}>
      <path d="M12 2.5c3.2 2.4 5 6 5 10l-1.8 4.2H8.8L7 12.5c0-4 1.8-7.6 5-10z" />
      <circle cx="12" cy="10" r="1.9" />
      <path d="M7 13.5L4 16.5v3l3-1.6M17 13.5l3 3v3l-3-1.6" />
    </S>
  ),
  user: (p) => (
    <S {...p}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20.5c1.4-4 4-6 7.5-6s6.1 2 7.5 6" />
    </S>
  ),
  chevron: (p) => (
    <S {...p}>
      <path d="M9 5l7 7-7 7" />
    </S>
  ),
  external: (p) => (
    <S {...p}>
      <path d="M14 4h6v6M20 4l-8.5 8.5" />
      <path d="M18 14.5V19a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 014 19V8a1.5 1.5 0 011.5-1.5H10" />
    </S>
  ),
  download: (p) => (
    <S {...p}>
      <path d="M12 3v11M7.5 10L12 14.5 16.5 10" />
      <path d="M4 18.5h16" />
    </S>
  ),
  copy: (p) => (
    <S {...p}>
      <rect x="9" y="9" width="11" height="11" rx="1.6" />
      <path d="M15 5.6A1.6 1.6 0 0013.4 4H5.6A1.6 1.6 0 004 5.6v7.8A1.6 1.6 0 005.6 15" />
    </S>
  ),
  check: (p) => (
    <S {...p}>
      <path d="M4 12.5l5 5L20 6.5" />
    </S>
  ),
  mail: (p) => (
    <S {...p}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3.5 6.5L12 13l8.5-6.5" />
    </S>
  ),
  pin: (p) => (
    <S {...p}>
      <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </S>
  ),
  layers: (p) => (
    <S {...p}>
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 13l9 5 9-5" opacity=".6" />
    </S>
  ),
  clock: (p) => (
    <S {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.4 2" />
    </S>
  ),
  spark: (p) => (
    <S {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
    </S>
  ),
  target: (p) => (
    <S {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4" />
    </S>
  ),
  terminal: (p) => (
    <S {...p}>
      <rect x="2.5" y="4" width="19" height="16" rx="1.5" />
      <path d="M6.5 9.5L9.5 12l-3 2.5M12.5 15h5" />
    </S>
  ),
  github: (p) => (
    <svg
      width={p.size ?? 20}
      height={p.size ?? 20}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={p.className}
      aria-hidden
    >
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
    </svg>
  ),
  play: (p) => (
    <S {...p}>
      <path d="M4 3.5l16 8.5-16 8.5z" />
    </S>
  ),
  apple: (p) => (
    <svg
      width={p.size ?? 20}
      height={p.size ?? 20}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={p.className}
      aria-hidden
    >
      <path d="M16.36 12.68c.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.61-1.7-3.18-1.72-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.86-.76-1.47.02-2.83.85-3.58 2.17-1.53 2.66-.39 6.6 1.1 8.76.72 1.06 1.58 2.25 2.71 2.21 1.09-.04 1.5-.71 2.82-.71s1.68.71 2.83.69c1.17-.02 1.9-1.08 2.62-2.14.83-1.23 1.17-2.42 1.19-2.48-.03-.01-2.27-.87-2.3-3.51zM14.2 5.9c.6-.73 1-1.74.89-2.75-.86.04-1.9.57-2.52 1.3-.55.65-1.04 1.7-.91 2.7.96.08 1.94-.49 2.54-1.25z" />
    </svg>
  ),
  server: (p) => (
    <S {...p}>
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </S>
  ),
  phone: (p) => (
    <S {...p}>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </S>
  ),
  webhook: (p) => (
    <S {...p}>
      <path d="M9.5 6.5a3 3 0 1 1 5 2.2l-3 5.2" />
      <path d="M14.5 17.5a3 3 0 1 1-5-2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
    </S>
  ),
  signal: (p) => (
    <S {...p}>
      <path d="M4 20v-4M9.3 20V11M14.7 20V6M20 20V3" />
    </S>
  ),
  award: (p) => (
    <S {...p}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.5 13.5L7 21.5l5-2.4 5 2.4-1.5-8" />
    </S>
  ),
  globe: (p) => (
    <S {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.2 9.5h17.6M3.2 14.5h17.6" />
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z" />
    </S>
  ),
}
