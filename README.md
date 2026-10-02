# Irfan Wani — Portfolio

A space-themed, terminal-styled portfolio for **Irfan Wani**, Senior Software
Development Engineer & Integration Manager.

Deep-space backdrop, CLI/terminal typography, a **live software cursor** (a
rotating CSS-3D wireframe cube), a **3D integration-network graph** as the hero
subject, and CSS-3D tilt interactions.

---

## Stack

| Concern    | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | React 19 + Vite 8                              |
| Styling    | Tailwind CSS v4 (`@theme` tokens + custom CSS) |
| Animation  | Motion                                         |
| 3D         | Three.js + React Three Fiber + drei             |
| Lint       | oxlint                                         |

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # runs fetch-stats, then -> dist/
npm run stats    # refresh GitHub numbers on demand
npm run lint
npm run preview
```

## Editing content

**Everything lives in one file: `src/data/profile.js`.** No page component
hardcodes copy. Add a project, role, skill or integration node there and it flows
through the UI, including counters and the 3D graph.

| Export                | Drives                                  |
| --------------------- | --------------------------------------- |
| `profile`             | Name, role, email, all outbound links   |
| `skills`              | Stack cards                             |
| `experience`          | Experience timeline                     |
| `education` / `certifications` | Academic + cert panels          |
| `projects`            | Ranked top 10 project cards             |
| `integrationNodes` / `integrationEdges` | The 3D hero graph         |
| `bootLines`           | Console boot sequence                   |
| `sections`            | Nav items + section codes               |

### Adding an integration node

Append to `integrationNodes` (pick a `kind` that exists in `KIND_COLOR` in
`three/SpaceScene.jsx`, otherwise it falls back to grey) and reference its id in
`integrationEdges`. It appears in the 3D graph **and** the legend in `About.jsx`
automatically.

## Live statistics

| Source  | Method                                             | Status          |
| ------- | -------------------------------------------------- | --------------- |
| GitHub  | `api.github.com`, unauthenticated, on every build  | **live**        |
| LinkedIn| no public API exists                               | **rounded**     |

`scripts/fetch-stats.mjs` runs automatically via `prebuild` and writes
`src/data/stats.json`:

- **GitHub** — followers, public repos, original repos and total stars are
  fetched for real. Set `GITHUB_TOKEN` to raise the rate limit and include
  private repository counts.
- **LinkedIn** — there is no public statistics endpoint without OAuth plus
  approved-partner access, so exact counts cannot be fetched. The site shows
  rounded figures (`500+`), which never look stale. To switch to exact live
  numbers, self-host an endpoint returning `{ followers, connections }` and set
  `LINKEDIN_STATS_URL` — the build picks it up automatically.

The build **never fails on a network error**; it keeps the previous
`stats.json` and falls back to bundled defaults, so offline builds still work.

```bash
GITHUB_TOKEN=ghp_xxx npm run stats
LINKEDIN_STATS_URL=https://your-proxy/stats npm run stats
```

## Project structure

```
src/
├─ data/
│  ├─ profile.js         # ← all content
│  ├─ stats.js           # reads stats.json, formats counts
│  └─ stats.json         # generated — safe to commit, refreshed on build
├─ three/
│  ├─ SpaceCanvas.jsx    # fixed WebGL layer, scroll-fade, perf guards
│  └─ SpaceScene.jsx     # integration graph + starfield + camera rig
├─ components/
│  ├─ BootSequence.jsx   # CLI boot overlay
│  ├─ DevCursor.jsx      # live rotating-cube cursor
│  ├─ TiltCard.jsx       # CSS 3D tilt + glare
│  ├─ Nav.jsx            # top bar, scroll-spy, mobile sheet
│  ├─ Footer.jsx
│  ├─ icons.jsx          # inline SVG icon set
│  └─ ui.jsx             # Panel, Tag, Counter, Typewriter, Reveal…
├─ sections/             # Hero, About, Experience, Projects, Signals, Contact
├─ App.jsx               # layer composition (CRT, canvas, content, cursor)
└─ index.css             # theme tokens, keyframes, component utilities
scripts/
└─ fetch-stats.mjs       # build-time API fetch
```

## Design system

Tokens live in `src/index.css` under `@theme`:

- **Void scale** — `--color-void`, `--color-void-2`, `--color-hull`, `--color-stroke`
- **Signal colours** — `cyan` (primary), `violet` (secondary), `amber`, `lime`, `rose`
- **Type** — JetBrains Mono (UI/terminal) + Space Grotesk (display headings)
- **Motion** — `--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)`

Reusable classes: `.panel` (angled hull plate with corner brackets), `.rule`,
`.crt` (scanlines + vignette), `.sheen`, `.stars-a` / `.stars-b`, `.grid-floor`.

## Implementation notes

**Live cursor** — not a static image being translated. A single rAF loop drives
a CSS-3D wireframe cube rotating on two axes in real time, a scan plane sweeping
its interior, packets orbiting on a ring, a hex/binary telemetry readout that
ticks every frame, and a velocity trail whose length tracks cursor speed. Over
interactive elements it *locks*: rotation eases upright, the reticle engages and
a "LOCK" label appears. Transforms are written straight to `style`, so there is
zero React re-render per frame.

**Integration graph** — custom GLSL on `THREE.Line`: each edge carries an
`aProgress` attribute and runs travelling light pulses plus discrete glint
packets along a quadratic Bézier, so request flow is visible. Nodes are faceted
polyhedra with a glowing core, an inclined orbit ring and an orbiting satellite,
each emitting a point light. The graph is laid out per viewport aspect so it
never crowds the copy column.

**Tilt cards** — pointer listeners live on a *static* wrapper while the transform
is written to an *inner* card. If the transformed element owned the listeners,
rotating it would push the cursor outside its own hit region and cause a
`pointerleave → reset → re-enter` flicker loop. Also fully imperative (no React
state) so a re-render cannot clobber the in-flight transform.

**Performance** — `dpr` capped at 1.75, `AdaptiveDpr`, deterministic seeded PRNG
for star layouts, WebGL skipped entirely under `prefers-reduced-motion`, and the
scene fades to ~12% opacity past the hero so it never fights body-text contrast.
The graph, its pulses and the satellite all recede to zero together on scroll.

**Accessibility** — semantic landmarks, `aria-expanded` on disclosures,
`aria-hidden` on decorative layers, visible focus rings, and a full
`prefers-reduced-motion` path.

## Content source

Roles, stack and contact details come from the existing portfolio in
`../portfolio`. Projects were ranked from the GitHub account (98 repositories,
83 original, including private ones accessed via the `gh` CLI) using shipped
impact first, then recency, originality, complexity and community signal.
Ranking rationale lives in `src/data/profile.js`.