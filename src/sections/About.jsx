import { motion } from 'motion/react'
import {
  certifications,
  education,
  integrationNodes,
  integrationTiers,
  profile,
  skills,
} from '../data/profile'
import { Section, Reveal, Panel, Icon, Tag } from '../components/ui'
import TiltCard from '../components/TiltCard'

const EASE = [0.16, 1, 0.3, 1]

/** Tailwind classes per integration tier — text + border + dot colour. */
const TIER_STYLE = {
  cyan: { text: 'text-cyan', border: 'border-cyan/45', dot: 'bg-cyan' },
  sky: { text: 'text-sky-300', border: 'border-sky-400/40', dot: 'bg-sky-400' },
  teal: { text: 'text-teal-300', border: 'border-teal-400/40', dot: 'bg-teal-400' },
  amber: { text: 'text-amber', border: 'border-amber/45', dot: 'bg-amber' },
  violet: { text: 'text-violet', border: 'border-violet/45', dot: 'bg-violet' },
  lime: { text: 'text-lime', border: 'border-lime/45', dot: 'bg-lime' },
  rose: { text: 'text-rose', border: 'border-rose/45', dot: 'bg-rose' },
}

/** Rendered under the terminal's `links --list` block. */
const PUBLIC_LINKS = [
  {
    label: `github.com/${profile.githubUser}`,
    href: profile.github,
    external: true,
    cls: 'border-cyan/35 text-cyan/90 hover:border-cyan hover:bg-cyan/10 hover:text-cyan',
  },
  {
    label: 'linkedin.com/in/irfanwani',
    href: profile.linkedin,
    external: true,
    cls: 'border-violet/35 text-violet/90 hover:border-violet hover:bg-violet/10 hover:text-violet',
  },
  {
    label: `@${profile.twitterHandle}`,
    href: profile.twitter,
    external: true,
    cls: 'border-amber/35 text-amber/90 hover:border-amber hover:bg-amber/10 hover:text-amber',
  },
  {
    label: 'irfanwani.vercel.app',
    href: profile.site,
    external: true,
    cls: 'border-lime/35 text-lime/90 hover:border-lime hover:bg-lime/10 hover:text-lime',
  },
  {
    label: 'play.google.com/developer',
    href: profile.playDeveloper,
    external: true,
    cls: 'border-rose/35 text-rose/90 hover:border-rose hover:bg-rose/10 hover:text-rose',
  },
]

export default function About() {
  return (
    <>
      <Section id="about" className="py-20 sm:py-28" label="PROFILE" code="01">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
          {/* ---------- terminal ---------- */}
          <Reveal>
            <Panel className="relative overflow-hidden p-6 sm:p-8" glow>
              <div className="mb-6 flex items-center gap-2 border-b border-stroke/70 pb-3">
                <span className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-rose/60" />
                  <span className="h-2 w-2 rounded-full bg-amber/60" />
                  <span className="h-2 w-2 rounded-full bg-lime/60" />
                </span>
                <span className="ml-1 font-mono text-[9.5px] tracking-[0.22em] text-ice/40">
                  /var/log/engineer.txt
                </span>
              </div>

              <div className="space-y-3 font-mono text-[12px] leading-[1.85] text-ice/65 sm:text-[13px]">
                <LogLine>cat --credentials subject.txt</LogLine>
                <p>
                  <span className="text-cyan">const</span>{' '}
                  <span className="text-violet">engineer</span> = {'{'}
                  <br />
                  &nbsp;&nbsp;name: <span className="text-amber">"{profile.name}"</span>,
                  <br />
                  &nbsp;&nbsp;role:{' '}
                  <span className="text-amber">"{profile.title}"</span>,
                  <br />
                  &nbsp;&nbsp;org: <span className="text-amber">"{profile.org}"</span>,
                  <br />
                  &nbsp;&nbsp;focus: [<span className="text-lime">"mobile apps"</span>,{' '}
                  <span className="text-lime">"integrations"</span>,{' '}
                  <span className="text-lime">"backend"</span>,{' '}
                  <span className="text-lime">"AI agents"</span>],
                  <br />
                  &nbsp;&nbsp;ships: <span className="text-amber">"production"</span>
                  <br />
                  {'}'}
                </p>

                <LogLine delay={0.1}>cat --summary brief.md</LogLine>
                <p className="text-ice/70">{profile.summary}</p>

                <LogLine delay={0.2}>log --highlights --grep shipped</LogLine>
                <ul className="space-y-1 text-ice/55">
                  {[
                    'Five apps live on the Google Play Store as Appshop Co.',
                    'Top contributor to Sidekick — 319 commits, on PyPI',
                    'Building AI agent harnesses and local-first LLM tooling',
                    'Production SIP/WebRTC calling on Android and iOS',
                    'Integration layer across CRM, ATS and enterprise systems',
                    'Django / DRF backend services on AWS',
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="select-none text-cyan/50">└─</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <LogLine delay={0.3}>links --list --public</LogLine>
                <div className="flex flex-wrap gap-1.5">
                  {PUBLIC_LINKS.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target={l.external ? '_blank' : undefined}
                      rel="noreferrer noopener"
                      data-hot
                      className={`group inline-flex items-center gap-1.5 border px-2 py-[3px] font-mono text-[10px] tracking-[0.12em] uppercase transition-all duration-200 ${l.cls} hover:shadow-[0_0_16px_-6px_currentColor]`}
                    >
                      <Icon.external
                        size={10}
                        className="opacity-50 transition-opacity group-hover:opacity-100"
                      />
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </Panel>
          </Reveal>

          {/* ---------- education + certifications ---------- */}
          <div className="space-y-6">
            {education.length > 0 && (
              <Reveal delay={0.1}>
                <Panel className="p-6">
                  <div className="mb-5 flex items-center gap-2">
                    <Icon.book size={15} className="text-violet" />
                    <span className="font-mono text-[10px] tracking-[0.28em] text-ice/55">
                      EDUCATION
                    </span>
                  </div>
                  <div className="space-y-5">
                    {education.map((e, i) => (
                      <div key={e.degree} className="relative pl-5">
                        <span className="absolute left-0 top-1.5 h-2 w-2 border border-violet/60 bg-void" />
                        {i < education.length - 1 && (
                          <span className="absolute left-[3.5px] top-4 h-[calc(100%+0.5rem)] w-px bg-gradient-to-b from-violet/35 to-transparent" />
                        )}
                        <div className="font-mono text-[11.5px] leading-snug text-ice/85">
                          {e.degree}
                        </div>
                        <div className="mt-1 font-mono text-[10.5px] text-violet/85">
                          {e.org}
                          <span className="text-ice/30"> · {e.location}</span>
                        </div>
                        <div className="mt-0.5 font-mono text-[9.5px] tracking-[0.16em] text-ice/35">
                          {e.period}
                        </div>
                        <p className="mt-2 font-mono text-[11px] leading-relaxed text-ice/50">
                          {e.detail}
                        </p>
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {e.tags.map((t) => (
                            <Tag key={t}>{t}</Tag>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Panel>
              </Reveal>
            )}

            <Reveal delay={0.18}>
              <Panel className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Icon.award size={15} className="text-lime" />
                  <span className="font-mono text-[10px] tracking-[0.28em] text-ice/55">
                    CERTIFICATIONS
                  </span>
                </div>
                <div className="space-y-1.5">
                  {certifications.map((c) => (
                    <div
                      key={c}
                      className="flex items-center gap-2.5 border-b border-stroke/40 py-1.5 last:border-0"
                    >
                      <span className="text-lime/50">▸</span>
                      <span className="font-mono text-[11px] text-ice/60">{c}</span>
                    </div>
                  ))}
                </div>
              </Panel>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ================= STACK + INTEGRATION MAP ================= */}
      <Section id="stack" className="py-20 sm:py-24" label="STACK" code="02">
        <Reveal className="mb-10 max-w-2xl">
          <p className="font-mono text-[12.5px] leading-relaxed text-ice/55">
            <span className="text-cyan/70">&gt;</span> The integration graph in the header
            is live in 3D — every node below is a system this work keeps connected.
            Hover the cards to inspect the stack.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          {/* tech stack cards */}
          <div className="grid gap-3 sm:grid-cols-2">
            {skills.map((g, i) => (
              <motion.div
                key={g.group}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: EASE }}
              >
                <TiltCard intensity={0.7} lift={14}>
                  <article className="panel panel-edge sheen group relative h-full overflow-hidden p-5 transition-all duration-500 hover:border-cyan/40">
                    <span className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-cyan opacity-[0.06] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.16]" />
                    <div className="relative z-10 mb-3.5 flex items-center gap-2">
                      <Icon.terminal size={13} className="text-cyan/70" />
                      <span className="font-mono text-[9.5px] tracking-[0.22em] text-cyan/75">
                        {g.group.toUpperCase()}
                      </span>
                    </div>
                    <div className="relative z-10 flex flex-wrap gap-1.5">
                      {g.items.map((it) => (
                        <span
                          key={it}
                          className="border border-stroke/70 bg-white/[0.022] px-2 py-1 font-mono text-[10px] text-ice/60 transition-colors hover:border-cyan/35 hover:text-cyan"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* integration map legend */}
          <Reveal delay={0.12}>
            <Panel className="h-full p-6">
              <div className="mb-2 flex items-center gap-2">
                <Icon.webhook size={15} className="text-cyan" />
                <span className="font-mono text-[10px] tracking-[0.26em] text-ice/55">
                  INTEGRATION MAP
                </span>
              </div>
              <p className="mb-5 font-mono text-[10.5px] leading-relaxed text-ice/40">
                {integrationNodes.length} systems · 19 connections · pulses show live request
                flow
              </p>

              <div className="space-y-3.5">
                {integrationTiers.map((tier, i) => {
                  const members = integrationNodes.filter(
                    (n) => n.kind === tier.kind && n.label !== tier.label
                  )
                  if (!members.length) return null
                  const st = TIER_STYLE[tier.color] || TIER_STYLE.cyan
                  const isCore = tier.kind === 'core'
                  return (
                    <motion.div
                      key={tier.kind}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className={`flex flex-wrap items-center gap-x-2 gap-y-1.5 ${
                        isCore ? 'border border-cyan/40 bg-cyan/[0.05] px-2.5 py-2' : ''
                      }`}
                    >
                      <span className="flex w-full items-center gap-2 sm:w-auto">
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${st.dot} ${
                            isCore ? 'animate-pulse' : ''
                          }`}
                        />
                        <span className={`font-mono text-[8.5px] tracking-[0.16em] ${st.text}`}>
                          {tier.label.toUpperCase()}
                        </span>
                      </span>
                      {members.map((n) => (
                        <span
                          key={n.id}
                          className="border border-stroke/70 bg-white/[0.022] px-2 py-1 font-mono text-[10px] text-ice/60"
                        >
                          {n.label}
                        </span>
                      ))}
                    </motion.div>
                  )
                })}
              </div>
            </Panel>
          </Reveal>
        </div>
      </Section>
    </>
  )
}

function LogLine({ children, delay = 0 }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="!mt-5 flex items-center gap-2 text-[11px] text-lime/85"
    >
      <span className="text-lime/50">$</span>
      {children}
    </motion.p>
  )
}