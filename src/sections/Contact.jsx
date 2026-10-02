import { useState } from 'react'
import { profile } from '../data/profile'
import { Section, Reveal, Panel, Icon, StatusDot } from '../components/ui'
import TiltCard from '../components/TiltCard'

const CHANNELS = [
  {
    id: 'email',
    label: 'DIRECT UPLINK',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: 'mail',
    accent: 'cyan',
    note: 'Best channel for roles and integration work',
  },
  {
    id: 'github',
    label: 'SOURCE CONTROL',
    value: `github.com/${profile.githubUser}`,
    href: profile.github,
    icon: 'github',
    accent: 'violet',
    note: '83 original repositories · open to collaboration',
  },
  {
    id: 'linkedin',
    label: 'PROFESSIONAL NETWORK',
    value: '/in/irfanwani',
    href: profile.linkedin,
    icon: 'external',
    accent: 'amber',
    note: 'Full experience history and recommendations',
  },
  {
    id: 'play',
    label: 'APPS ON GOOGLE PLAY',
    value: 'Appshop Co.',
    href: profile.playDeveloper,
    icon: 'play',
    accent: 'lime',
    note: 'GeoTag Camera · Space Blaster',
  },
  {
    id: 'resume',
    label: 'RESUME',
    value: 'PDF · Drive',
    href: profile.resume,
    icon: 'download',
    accent: 'rose',
    note: 'Curriculum vitae',
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  }

  return (
    <Section id="contact" className="py-20 sm:py-24" label="DOWNLINK" code="06">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
        {/* ---------- terminal ---------- */}
        <Reveal>
          <Panel className="relative h-full overflow-hidden p-6 sm:p-8" glow>
            <div className="mb-6 flex items-center gap-2 border-b border-stroke/70 pb-3">
              <span className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-rose/60" />
                <span className="h-2 w-2 rounded-full bg-amber/60" />
                <span className="h-2 w-2 rounded-full bg-lime/60" />
              </span>
              <span className="ml-1 font-mono text-[9.5px] tracking-[0.22em] text-ice/40">
                /home/engineer/contact.sh
              </span>
            </div>

            <h2 className="font-display text-3xl leading-[1.1] font-semibold tracking-tight text-ice sm:text-[2.6rem]">
              Let&apos;s connect the
              <br />
              <span className="bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent">
                next thing.
              </span>
            </h2>

            <p className="mt-5 font-mono text-[12.5px] leading-relaxed text-ice/55">
              <span className="text-cyan/70">&gt;</span> Open to integration engineering
              roles, API and platform work, React Native positions, and freelance
              builds. Currently at{' '}
              <span className="text-cyan">{profile.org}</span> as{' '}
              {profile.title.replace('Senior Software Development Engineer & ', '')}.
            </p>

            <div className="mt-7 space-y-2 font-mono text-[11.5px]">
              <p className="text-lime/85">
                <span className="text-lime/50">$</span> ./open_channel --to engineer
              </p>
              <a
                href={`mailto:${profile.email}`}
                data-hot
                className="group relative mt-2 flex items-center gap-3 overflow-hidden border border-cyan/45 bg-cyan/10 px-4 py-3.5 transition-all duration-300 hover:bg-cyan hover:text-void hover:shadow-[0_0_34px_-6px_rgba(34,211,238,0.8)]"
              >
                <Icon.mail size={16} className="shrink-0" />
                <span className="truncate text-[11.5px] tracking-wide">{profile.email}</span>
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </a>

              <button
                onClick={copy}
                data-hot
                className={`mt-1.5 flex w-full items-center gap-2 border px-3 py-2 font-mono text-[10px] tracking-[0.16em] transition-colors ${
                  copied
                    ? 'border-lime/40 bg-lime/[0.07] text-lime'
                    : 'border-stroke bg-white/[0.02] text-ice/45 hover:border-cyan/35 hover:text-cyan'
                }`}
              >
                {copied ? <Icon.check size={12} /> : <Icon.copy size={12} />}
                {copied ? 'COPIED TO CLIPBOARD' : 'COPY ADDRESS'}
              </button>
            </div>

            <div className="mt-7 flex flex-wrap gap-1.5 border-t border-stroke/60 pt-5">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                data-hot
                className="flex items-center gap-1.5 border border-stroke px-2.5 py-1.5 font-mono text-[9.5px] tracking-[0.14em] text-ice/55 transition-colors hover:border-violet/40 hover:text-violet"
              >
                <Icon.github size={12} /> GITHUB
              </a>
              <a
                href={profile.twitter}
                target="_blank"
                rel="noreferrer noopener"
                data-hot
                className="flex items-center gap-1.5 border border-stroke px-2.5 py-1.5 font-mono text-[9.5px] tracking-[0.14em] text-ice/55 transition-colors hover:border-cyan/40 hover:text-cyan"
              >
                @{profile.twitterHandle}
              </a>
              <a
                href={profile.site}
                target="_blank"
                rel="noreferrer noopener"
                data-hot
                className="flex items-center gap-1.5 border border-stroke px-2.5 py-1.5 font-mono text-[9.5px] tracking-[0.14em] text-ice/55 transition-colors hover:border-lime/40 hover:text-lime"
              >
                <Icon.globe size={12} /> irfanwani.vercel.app
              </a>
            </div>
          </Panel>
        </Reveal>

        {/* ---------- channels ---------- */}
        <div className="space-y-3">
          {CHANNELS.map((c, i) => {
            const Ico = Icon[c.icon]
            return (
              <Reveal key={c.id} delay={0.07 + i * 0.07}>
                <TiltCard intensity={0.7} lift={14}>
                  <a
                    href={c.href}
                    target={c.id === 'email' ? undefined : '_blank'}
                    rel="noreferrer noopener"
                    data-hot
                    className={`panel panel-edge sheen group flex items-center gap-4 p-5 transition-all duration-500 ${
                      c.accent === 'cyan'
                        ? 'hover:border-cyan/45'
                        : c.accent === 'violet'
                          ? 'hover:border-violet/45'
                          : c.accent === 'amber'
                            ? 'hover:border-amber/45'
                            : c.accent === 'lime'
                              ? 'hover:border-lime/45'
                              : 'hover:border-rose/45'
                    }`}
                  >
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center border transition-all duration-500 group-hover:scale-110 ${
                        c.accent === 'cyan'
                          ? 'border-cyan/30 bg-cyan/[0.07] text-cyan'
                          : c.accent === 'violet'
                            ? 'border-violet/30 bg-violet/[0.07] text-violet'
                            : c.accent === 'amber'
                              ? 'border-amber/30 bg-amber/[0.07] text-amber'
                              : c.accent === 'lime'
                                ? 'border-lime/30 bg-lime/[0.07] text-lime'
                                : 'border-rose/30 bg-rose/[0.07] text-rose'
                      }`}
                    >
                      <Ico size={18} />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="font-mono text-[9px] tracking-[0.22em] text-ice/30">
                        {c.label}
                      </div>
                      <div className="mt-1 truncate font-mono text-[12.5px] text-ice transition-colors duration-300 group-hover:text-white">
                        {c.value}
                      </div>
                      <div className="mt-1 font-mono text-[10px] text-ice/40">{c.note}</div>
                    </div>

                    <span className="shrink-0 text-ice/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan">
                      <Icon.chevron size={16} />
                    </span>
                  </a>
                </TiltCard>
              </Reveal>
            )
          })}

          <Reveal delay={0.32}>
            <Panel className="flex items-center gap-3 p-5">
              <StatusDot />
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[10.5px] tracking-[0.14em] text-lime/90">
                  OPEN TO NEW OPPORTUNITIES
                </div>
                <div className="mt-0.5 font-mono text-[10px] text-ice/40">
                  Response window · typically within 24h · {profile.timezone}
                </div>
              </div>
            </Panel>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}