import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { profile, sections } from '../data/profile'
import { Icon, StatusDot } from './ui'

const YEAR = new Date().getFullYear()

const LINKS = [
  { label: 'GitHub', href: profile.github, icon: 'github' },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'external' },
  { label: 'Play Store', href: profile.playDeveloper, icon: 'play' },
  { label: 'Resume', href: profile.resume, icon: 'download' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
]

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-stroke/70">
      {/* grid floor fade */}
      <div className="grid-floor pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,transparent,#000_45%,transparent)]" />
      <div className="stars-b pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand block */}
          <div>
            <div className="flex items-center gap-3">
              <span className="relative grid h-9 w-9 place-items-center border border-cyan/40 bg-cyan/10">
                <Icon.github size={17} className="text-cyan" />
                <span className="absolute -inset-px animate-pulse-glow border border-cyan/20" />
              </span>
              <div>
                <div className="font-display text-lg font-semibold tracking-tight text-ice">
                  {profile.name}
                </div>
                <div className="font-mono text-[9.5px] tracking-[0.2em] text-cyan/80">
                  {profile.role} · {profile.org}
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-sm font-mono text-[11.5px] leading-relaxed text-ice/63">
              {profile.tagline}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3 font-mono text-[9.5px] tracking-[0.16em] text-ice/52">
              <span className="flex items-center gap-1.5 text-lime/80">
                <StatusDot />
                ALL SYSTEMS NOMINAL
              </span>
            </div>
          </div>

          {/* index */}
          <nav>
            <div className="mb-4 font-mono text-[9px] tracking-[0.24em] text-ice/60">
              [ INDEX ]
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 lg:grid-cols-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    data-hot
                    className="group flex items-center gap-2 font-mono text-[11px] text-ice/68 transition-colors hover:text-cyan"
                  >
                    <span className="text-[9px] text-ice/52 group-hover:text-cyan/72">
                      {s.code}
                    </span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* links */}
          <div>
            <div className="mb-4 font-mono text-[9px] tracking-[0.24em] text-ice/60">
              [ CHANNELS ]
            </div>
            <ul className="space-y-2">
              {LINKS.map((l) => {
                const Ico = Icon[l.icon]
                return (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.icon === 'mail' ? undefined : '_blank'}
                      rel="noreferrer noopener"
                      data-hot
                      className="group flex items-center gap-2.5 border-b border-stroke/40 py-1.5 font-mono text-[11px] text-ice/72 transition-colors hover:border-cyan/30 hover:text-cyan"
                    >
                      <Ico size={13} className="text-ice/60 transition-colors group-hover:text-cyan" />
                      {l.label}
                      <Icon.chevron
                        size={12}
                        className="ml-auto opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="mt-6 border border-stroke/60 bg-white/[0.02] p-3.5">
              <div className="font-mono text-[9px] tracking-[0.2em] text-ice/60">
                LOCAL TIME
              </div>
              <div className="mt-1 font-mono text-[12px] tabular-nums text-cyan">
                <LocalClock />
              </div>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-stroke/60 pt-6 sm:flex-row sm:justify-between">
          <p className="font-mono text-[10px] tracking-[0.14em] text-ice/60">
            © {YEAR} {profile.name.toUpperCase()} · ALL RIGHTS RESERVED
          </p>
          <p className="font-mono text-[10px] tracking-[0.14em] text-ice/56">
            REACT · VITE · THREE.JS · TAILWIND
          </p>
        </div>
      </div>

      {/* giant watermark text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        aria-hidden
        className="pointer-events-none relative select-none overflow-hidden"
      >
        <div className="translate-y-[16%] bg-gradient-to-b from-ice/[0.09] via-ice/[0.04] to-transparent bg-clip-text text-center font-display text-[19vw] leading-[0.82] font-bold tracking-tighter text-transparent">
          IRFAN
        </div>
      </motion.div>
    </footer>
  )
}

function LocalClock() {
  const [now, setNow] = useState(null)
  useEffect(() => {
    const tick = () =>
      setNow(
        new Date().toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'Asia/Kolkata',
        })
      )
    tick()
    const t = setInterval(tick, 1000)
    return () => clearInterval(t)
  }, [])
  return (
    <span>
      {now ?? '--:--:--'}
      <span className="ml-1.5 text-[9px] text-ice/60">IST</span>
    </span>
  )
}
