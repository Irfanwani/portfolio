/**
 * ---------------------------------------------------------------------------
 *  fetch-stats.mjs — generates src/data/stats.json at build time.
 *
 *  WHY THIS EXISTS
 *  GitHub publishes an unauthenticated REST API, so follower counts, repo
 *  counts and total stars can be genuinely live and refreshed on every deploy.
 *
 *  LinkedIn has NO public API for profile statistics. There is nothing to call
 *  without OAuth plus approved-partner access, so this script will only use
 *  LinkedIn numbers if you supply LINKEDIN_STATS_URL — a self-hosted endpoint
 *  you control that returns { followers, connections }. Otherwise the site
 *  falls back to the rounded figures in src/data/profile.js, which is the
 *  correct behaviour: an approximate number never looks wrong, a stale exact
 *  one does.
 *
 *  USAGE
 *    node scripts/fetch-stats.mjs          # writes stats.json
 *    GITHUB_TOKEN=ghp_xxx node scripts/…   # higher rate limit, private repos
 *    LINKEDIN_STATS_URL=https://… node …  # optional LinkedIn proxy
 *
 *  Wired to `prebuild`, so `npm run build` refreshes automatically.
 *  The build never fails on a network error — it keeps the previous file.
 * ---------------------------------------------------------------------------
 */

import { writeFile, readFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = resolve(__dirname, '../src/data/stats.json')
const USER = 'Irfanwani'
const TIMEOUT = 8000

/* Fallback used when the network is unavailable (offline builds, CI air-gaps). */
const FALLBACK = {
  source: 'fallback',
  fetchedAt: null,
  github: { followers: 21, publicRepos: 81, totalStars: 21, originalRepos: 83 },
  linkedin: null,
}

const get = async (url, headers = {}) => {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT)
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { 'User-Agent': 'portfolio-stats-fetch', ...headers },
    })
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
    return await res.json()
  } finally {
    clearTimeout(timer)
  }
}

async function fetchGitHub() {
  const headers = process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}

  const [user, repos] = await Promise.all([
    get(`https://api.github.com/users/${USER}`, headers),
    get(
      `https://api.github.com/users/${USER}/repos?per_page=100&type=owner`,
      headers
    ),
  ])

  // Second page if the account has more than 100 repos
  let all = repos
  if (repos.length === 100) {
    try {
      const page2 = await get(
        `https://api.github.com/users/${USER}/repos?per_page=100&type=owner&page=2`,
        headers
      )
      all = all.concat(page2)
    } catch {
      /* keep page 1 */
    }
  }

  const original = all.filter((r) => !r.fork)
  const totalStars = all.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)

  return {
    followers: user.followers,
    publicRepos: user.public_repos ?? all.filter((r) => !r.private).length,
    totalStars,
    originalRepos: original.length,
  }
}

async function fetchLinkedIn() {
  const url = process.env.LINKEDIN_STATS_URL
  if (!url) return null
  try {
    const data = await get(url, process.env.LINKEDIN_TOKEN
      ? { Authorization: `Bearer ${process.env.LINKEDIN_TOKEN}` }
      : {})
    const followers = Number(data.followers)
    const connections = Number(data.connections)
    if (!Number.isFinite(followers) && !Number.isFinite(connections)) return null
    return { followers, connections }
  } catch (err) {
    console.warn(`  ! linkedin proxy unreachable (${err.message}) — using rounded figures`)
    return null
  }
}

async function main() {
  let out
  try {
    const [github, linkedin] = await Promise.all([fetchGitHub(), fetchLinkedIn()])
    out = {
      source: 'live',
      fetchedAt: new Date().toISOString(),
      github,
      linkedin,
    }
    console.log(
      `  ✓ github: ${github.followers} followers · ${github.publicRepos} public repos · ` +
        `${github.originalRepos} original · ${github.totalStars}★`
    )
    if (linkedin) console.log(`  ✓ linkedin: ${JSON.stringify(linkedin)}`)
    else console.log('  · linkedin: no public API — site falls back to rounded figures')
  } catch (err) {
    console.warn(`  ! github api unreachable (${err.message}) — keeping previous stats`)
    try {
      out = JSON.parse(await readFile(OUT, 'utf8'))
    } catch {
      out = FALLBACK
    }
  }

  await mkdir(dirname(OUT), { recursive: true })
  await writeFile(OUT, JSON.stringify(out, null, 2) + '\n')
  console.log(`  → ${OUT}`)
}

main()