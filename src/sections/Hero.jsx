import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { profile } from '../data/profile'
import { buildStats, formatCount, statsMeta } from '../data/stats'
import { Icon, Typewriter, StatusDot } from '../components/ui'

const EASE = [0.16, 1, 0.3, 1]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.075, delayChildren: 0.12 } },
}
const rise = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: EASE } },
}

export default function Hero() {
  const stats = buildStats()
  const reduce = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center pt-24 pb-16 sm:pt-28"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
          {/* status strip */}
          <motion.div variants={rise} className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="flex items-center gap-2 border border-lime/25 bg-lime/[0.06] px-2.5 py-1 font-mono text-[9.5px] tracking-[0.2em] text-lime">
              <StatusDot />
              OPEN TO WORK
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[9.5px] tracking-[0.2em] text-ice/58">
              <Icon.pin size={12} /> {profile.location}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[9.5px] tracking-[0.2em] text-ice/58">
              <Icon.clock size={12} /> {profile.timezone}
            </span>
          </motion.div>

          {/* eyebrow */}
          <motion.p
            variants={rise}
            className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-0.5 font-mono text-[10.5px] leading-relaxed tracking-[0.2em] text-cyan/86 sm:text-[11px] sm:tracking-[0.28em]"
          >
            <span className="text-violet/80">&gt;</span>
            {/* full title is too long on narrow screens */}
            <span className="sm:hidden">{profile.shortTitle.toUpperCase()}</span>
            <span className="hidden sm:inline">{profile.title.toUpperCase()}</span>
            <span className="text-ice/52">//</span>
            <span className="text-ice/63">{profile.org}</span>
          </motion.p>

          {/* name */}
          <h1 className="font-display text-[13vw] leading-[0.86] font-bold tracking-[-0.035em] sm:text-[9.5vw] lg:text-[6.4rem]">
            <motion.span
              variants={rise}
              className="block text-ice drop-shadow-[0_0_28px_rgba(199,214,255,0.22)]"
            >
              IRFAN
            </motion.span>
            <motion.span
              variants={rise}
              className="block bg-gradient-to-r from-cyan via-cyan to-violet bg-clip-text text-transparent"
            >
              WANI
            </motion.span>
          </h1>

          <motion.div variants={rise} className="mt-5 h-7 sm:h-8">
            <RoleRotator reduce={reduce} />
          </motion.div>

          <motion.p
            variants={rise}
            className="mt-6 max-w-xl font-mono text-[12.5px] leading-relaxed text-ice/78 sm:text-sm"
          >
            <span className="text-cyan/80">&gt;</span> {profile.summary}
          </motion.p>

          {/* integration chip strip */}
          <motion.div variants={rise} className="mt-6 flex flex-wrap gap-1.5">
            {[
              'AI Agents',
              'Agent Harnesses',
              'LLM Tooling',
              'Ollama',
              'React Native',
              'TypeScript',
              'Python',
              'Django / DRF',
              'REST APIs',
              'Webhooks',
              'SDKs',
              'PostgreSQL',
              'AWS',
              'SIP / WebRTC',
            ].map((k, ki) => (
              <motion.span
                key={k}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.85 + ki * 0.045, duration: 0.32 }}
                className={`border px-2.5 py-1 font-mono text-[9.5px] tracking-[0.13em] transition-colors ${
                  AI_TAGS.includes(k)
                    ? 'border-violet/40 bg-violet/[0.07] text-violet/94 hover:border-violet hover:text-violet'
                    : 'border-stroke/80 bg-white/[0.025] text-ice/72 hover:border-cyan/40 hover:text-cyan'
                }`}
              >
                {k}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={rise} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              data-hot
              className="group relative inline-flex items-center gap-2.5 overflow-hidden border border-cyan/50 bg-cyan/15 px-6 py-3 font-mono text-[11px] tracking-[0.18em] text-cyan transition-all duration-300 hover:bg-cyan hover:text-void hover:shadow-[0_0_34px_-6px_rgba(34,211,238,0.85)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              <Icon.rocket size={15} className="relative transition-transform duration-500 group-hover:-translate-y-0.5" />
              <span className="relative">VIEW PROJECTS</span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              data-hot
              className="group inline-flex items-center gap-2.5 border border-stroke bg-white/[0.03] px-6 py-3 font-mono text-[11px] tracking-[0.18em] text-ice/88 transition-all duration-300 hover:border-violet/50 hover:text-violet hover:shadow-[0_0_30px_-8px_rgba(167,139,250,0.7)]"
            >
              <Icon.github size={15} />
              GITHUB
              <span className="text-violet/80">{statsMeta.github.followers}★ followers</span>
            </a>

            <a
              href={profile.playDeveloper}
              target="_blank"
              rel="noreferrer noopener"
              data-hot
              className="group inline-flex items-center gap-2.5 border border-lime/40 bg-lime/[0.07] px-6 py-3 font-mono text-[11px] tracking-[0.18em] text-lime transition-all duration-300 hover:border-lime hover:bg-lime hover:text-void hover:shadow-[0_0_30px_-8px_rgba(74,222,128,0.7)]"
            >
              <Icon.play size={14} />
              APP ON PLAY
            </a>
          </motion.div>
        </motion.div>

        {/* ---- telemetry rail ---- */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: EASE }}
          className="mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden border border-stroke/70 bg-stroke/40 sm:mt-14 sm:grid-cols-4"
        >
          {stats.slice(0, 4).map((s) => (
            <div
              key={s.key}
              className="group relative bg-void/70 px-4 py-3.5 backdrop-blur-sm transition-colors duration-300 hover:bg-hull/60"
            >
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[9px] tracking-[0.18em] text-ice/52">
                  {s.label}
                </span>
                <span
                  title={`live from ${s.hint}`}
                  className="h-1 w-1 rounded-full bg-lime/70"
                />
              </div>
              <div
                className={`mt-1 font-display text-2xl font-semibold tabular-nums sm:text-[1.7rem] ${
                  s.accent === 'cyan'
                    ? 'text-cyan'
                    : s.accent === 'violet'
                      ? 'text-violet'
                      : s.accent === 'amber'
                        ? 'text-amber'
                        : 'text-lime'
                }`}
              >
                {formatCount(s.value)}
              </div>
              <div className="mt-0.5 font-mono text-[8.5px] tracking-[0.13em] text-ice/56">
                {s.hint}
              </div>
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-cyan/70 transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </motion.div>

        {/* provenance note for the rounded stats */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-3 max-w-3xl font-mono text-[8.5px] tracking-[0.14em] text-ice/56"
        >
          <span className="text-lime/65">●</span> fetched live from api.github.com
          {statsMeta.fetchedAt && (
            <span className="text-ice/52">
              {' '}
              · {new Date(statsMeta.fetchedAt).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}
            </span>
          )}
        </motion.p>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        data-hot
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="group absolute right-6 bottom-7 z-10 hidden flex-col items-center gap-2 sm:flex lg:right-10"
        aria-label="Scroll to profile"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] text-ice/60 transition-colors group-hover:text-cyan/80 [writing-mode:vertical-rl]">
          SCROLL
        </span>
        <span className="relative h-8 w-[1px] overflow-hidden bg-stroke">
          <motion.span
            className="absolute inset-x-0 top-0 h-3 bg-cyan"
            animate={{ y: [-12, 32] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>

      {/* HUD readouts — now integration telemetry */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden xl:block">
        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-right font-mono text-[9px] leading-relaxed tracking-[0.2em] text-ice/52">
          <div>UPLINK 2.4 Gb/s</div>
          <div>{integrationNodes.length} NODES</div>
          <div>{integrationEdges.length} EDGES</div>
          <div className="text-cyan/58">MESH · NOMINAL</div>
        </div>
        <div className="absolute left-8 top-1/2 -translate-y-1/2 font-mono text-[9px] leading-relaxed tracking-[0.2em] text-ice/52">
          <div>API: 200 OK</div>
          <div>WEBHOOKS: ARMED</div>
          <div>SIP: REGISTERED</div>
          <div className="text-lime/58">PIPELINE: LIVE</div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
const ROLES = [
  'INTEGRATION ARCHITECTURE',
  'APIs · WEBHOOKS · SDKS',
  'REACT NATIVE ENGINEERING',
  'REAL-TIME SIP / WEBRTC',
  'BACKEND SERVICES',
  'CLOUD ON AWS',
  'AI ENGINEERING',
  'BUILDING HARNESSES FOR THE FUTURE',
]
const DWELL = 3400

/** Chips rendered in the AI accent. */
const AI_TAGS = ['AI Agents', 'Agent Harnesses', 'LLM Tooling', 'Ollama']

function RoleRotator({ reduce }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setI((p) => (p + 1) % ROLES.length), DWELL)
    return () => clearInterval(t)
  }, [reduce])

  const role = ROLES[reduce ? 0 : i]

  if (reduce) {
    return (
      <span className="flex items-center gap-2 font-mono text-[12px] tracking-[0.18em] text-violet sm:text-sm">
        <span className="text-cyan/80">&gt;</span>
        {role}
      </span>
    )
  }

  return (
    <div className="relative h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          className="absolute inset-0 flex items-center gap-2 font-mono text-[12px] tracking-[0.18em] text-violet sm:text-sm"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          <span className="text-cyan/80">&gt;</span>
          <Typewriter text={role} speed={22} className="text-violet" />
        </motion.span>
      </AnimatePresence>
    </div>
  )
}