import { motion } from 'motion/react'
import { projects } from '../data/profile'
import { Section, Icon } from '../components/ui'
import TiltCard from '../components/TiltCard'

const EASE = [0.16, 1, 0.3, 1]

const accentText = {
  cyan: 'text-cyan',
  violet: 'text-violet',
  amber: 'text-amber',
  lime: 'text-lime',
  rose: 'text-rose',
}
const accentBorder = {
  cyan: 'hover:border-cyan/45 hover:shadow-[0_0_46px_-16px_rgba(34,211,238,0.75)]',
  violet: 'hover:border-violet/45 hover:shadow-[0_0_46px_-16px_rgba(167,139,250,0.75)]',
  amber: 'hover:border-amber/45 hover:shadow-[0_0_46px_-16px_rgba(251,191,36,0.7)]',
  lime: 'hover:border-lime/45 hover:shadow-[0_0_46px_-16px_rgba(74,222,128,0.7)]',
  rose: 'hover:border-rose/45 hover:shadow-[0_0_46px_-16px_rgba(251,113,133,0.7)]',
}
const accentGlow = {
  cyan: 'bg-cyan',
  violet: 'bg-violet',
  amber: 'bg-amber',
  lime: 'bg-lime',
  rose: 'bg-rose',
}

export default function Projects() {
  return (
    <Section id="projects" className="py-20 sm:py-24" label="PROJECTS" code="04">

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 26, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.07, ease: EASE }}
          >
            <TiltCard lift={16} className="h-full">
              <div
                className={`panel panel-edge sheen group relative flex h-full min-h-[318px] flex-col overflow-hidden p-6 transition-all duration-500 ${accentBorder[p.accent]}`}
              >
                <span
                  className={`pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full opacity-[0.08] blur-2xl transition-opacity duration-500 group-hover:opacity-25 ${accentGlow[p.accent]}`}
                />

                {/* rank + badges */}
                <div className="relative z-10 flex items-start justify-between gap-2">
                  <span className="flex items-center gap-2">
                    <span
                      className={`font-display text-[22px] font-bold leading-none tabular-nums ${accentText[p.accent]}`}
                    >
                      {String(p.rank).padStart(2, '0')}
                    </span>
                    {p.live && (
                      <span className="flex items-center gap-1 border border-lime/35 bg-lime/[0.07] px-1.5 py-[2px] font-mono text-[8px] tracking-[0.14em] text-lime">
                        <span className="h-1 w-1 animate-pulse rounded-full bg-lime" />
                        LIVE
                      </span>
                    )}
                    {p.private && (
                      <span
                        title="Repository is private"
                        className="border border-amber/30 bg-amber/[0.06] px-1.5 py-[2px] font-mono text-[8px] tracking-[0.14em] text-amber/94"
                      >
                        PRIVATE
                      </span>
                    )}
                    {p.stars > 0 && (
                      <span className="border border-stroke px-1.5 py-[2px] font-mono text-[8.5px] text-ice/68">
                        {p.stars}★
                      </span>
                    )}
                  </span>
                  <span
                    className={`shrink-0 border px-2 py-[3px] font-mono text-[8.5px] tracking-[0.13em] ${
                      p.accent === 'cyan'
                        ? 'border-cyan/35 text-cyan'
                        : p.accent === 'violet'
                          ? 'border-violet/35 text-violet'
                          : p.accent === 'amber'
                            ? 'border-amber/35 text-amber'
                            : p.accent === 'lime'
                              ? 'border-lime/35 text-lime'
                              : 'border-rose/35 text-rose'
                    }`}
                  >
                    {p.metric}
                  </span>
                </div>

                {/* title */}
                <h3 className="relative z-10 mt-4 font-display text-[16px] leading-snug font-semibold text-ice transition-colors duration-300 group-hover:text-cyan">
                  {p.name}
                </h3>
                <p className="relative z-10 mt-1 font-mono text-[10.5px] leading-snug text-ice/63">
                  {p.tagline}
                </p>

                <p className="relative z-10 mt-3 flex-1 font-mono text-[11px] leading-relaxed text-ice/70">
                  {p.description}
                </p>

                {/* highlights */}
                <ul className="relative z-10 mt-3.5 space-y-1 border-t border-stroke/50 pt-3">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-1.5 font-mono text-[10px] leading-relaxed text-ice/60"
                    >
                      <span className={`mt-[3px] shrink-0 ${accentText[p.accent]}/70`}>▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* tech */}
                <div className="relative z-10 mt-3.5 flex flex-wrap gap-1">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-stroke/70 bg-white/[0.02] px-1.5 py-[2px] font-mono text-[9px] tracking-[0.08em] text-ice/63"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* links */}
                <div className="relative z-10 mt-4 flex flex-wrap gap-1.5 border-t border-stroke/60 pt-3.5">
                  {p.links.map((l) => {
                    const Ico = Icon[l.icon] || Icon.external
                    const isPlay = l.label === 'Play Store'
                    return (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        data-hot
                        className={`group/btn inline-flex items-center gap-1.5 border px-2.5 py-1.5 font-mono text-[9.5px] tracking-[0.13em] transition-all duration-300 ${
                          isPlay
                            ? 'border-lime/45 bg-lime/[0.08] text-lime hover:bg-lime hover:text-void'
                            : 'border-stroke bg-white/[0.02] text-ice/72 hover:border-cyan/45 hover:text-cyan'
                        }`}
                      >
                        <Ico size={12} />
                        {l.label.toUpperCase()}
                      </a>
                    )
                  })}
                </div>
              </div>
            </TiltCard>
          </motion.article>
        ))}
      </div>

    </Section>
  )
}