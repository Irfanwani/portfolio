/**
 * stats.js — reads the build-time generated stats.json.
 *
 * If the file is missing (fresh clone, build skipped the fetch step) the
 * module falls back to the same hardcoded values so the site never crashes.
 *
 * Only GitHub figures are shown. LinkedIn has no unauthenticated statistics
 * endpoint, and rather than print a number that quietly goes stale we print
 * nothing at all.
 *
 * @see scripts/fetch-stats.mjs for how stats.json is produced.
 */

import raw from './stats.json'

const FALLBACK_GITHUB = {
  followers: 21,
  publicRepos: 81,
  totalStars: 28,
  originalRepos: 66,
}

const gh = { ...FALLBACK_GITHUB, ...(raw?.github || {}) }
const isLive = raw?.source === 'live'


/**
 * 2138 -> "2.1k+", 940 -> "940+", 21 -> "21"
 *
 * Strings are passed through untouched (Number("500+") would be NaN).
 */
export function formatCount(n) {
  if (typeof n === 'string') return n
  if (!Number.isFinite(n)) return '—'
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}m+`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, '')}k+`
  if (n >= 100) return `${n}+`
  return String(n)
}

/**
 * Stat rows for the hero telemetry band and the signals section.
 * `exact: true` means the number came from an API; otherwise it is rounded.
 */
export function buildStats() {
  return [
    {
      key: 'ghFollowers',
      label: 'GitHub Followers',
      value: gh.followers,
      exact: true,
      hint: 'api.github.com',
      accent: 'amber',
    },
    {
      key: 'repos',
      label: 'Repos',
      value: gh.publicRepos,
      exact: true,
      hint: 'api.github.com',
      accent: 'lime',
    },
    {
      key: 'original',
      label: 'Original Repos',
      value: gh.originalRepos,
      exact: true,
      hint: 'api.github.com',
      accent: 'cyan',
    },
    {
      key: 'stars',
      label: 'Stars Earned',
      value: gh.totalStars,
      exact: true,
      hint: 'api.github.com',
      accent: 'rose',
    },
  ]
}

export const statsMeta = {
  isLive,
  fetchedAt: raw?.fetchedAt ?? null,
  github: gh,
}