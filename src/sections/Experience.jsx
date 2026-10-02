import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { experience } from '../data/profile'
import { Section, Reveal, Icon, StatusDot } from '../components/ui'
import TiltCard from '../components/TiltCard'

const EASE = [0.16, 1, 0.3, 1]

export default function Experience() {
  const [open, setOpen] = useState(0)

  return (
    <Section id="experience" className="py-20 sm:py-24" label="EXPERIENCE" code="03">
      <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <p className="max-w-xl font-mono text-[12.5px] leading-relaxed text-ice/55">
          <span className="text-cyan/70">&gt;</span> Professional roles and internships, most recent first.
          Expand an entry for details.
        </p>
        <div className="flex items-center gap-2 font-mono text-[9.5px] tracking-[0.2em] text-ice/35">
          <span className="border border-stroke px-2 py-1">TOTAL {experience.length} ROLES</span>
        </div>
      </Reveal>

      <div className="relative">
        {/* vertical rail */}
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan/45 via-stroke to-transparent sm:left-[19px]" />

        <div className="space-y-3">
          {experience.map((job, i) => (
            <FlightLog
              key={`${job.org}-${job.role}-${job.from}`}
              job={job}
              index={i}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

function FlightLog({ job, index, open, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -22 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.3), ease: EASE }}
      className="relative pl-9 sm:pl-12"
    >
      {/* node marker */}
      <span
        className={`absolute top-[18px] left-[9px] z-10 grid h-4 w-4 place-items-center border sm:left-[13px] ${
          job.current
            ? 'border-lime/70 bg-void'
            : open
              ? 'border-cyan/70 bg-void'
              : 'border-stroke bg-void'
        } transition-colors duration-300`}
      >
        <span
          className={`h-1.5 w-1.5 ${
            job.current ? 'bg-lime' : open ? 'bg-cyan' : 'bg-ice/30'
          } transition-colors duration-300`}
        />
        {job.current && (
          <span className="absolute inset-0 animate-ping border border-lime/40" />
        )}
      </span>

      <TiltCard intensity={0.5} lift={10}>
        <button
          onClick={onToggle}
          data-hot
          aria-expanded={open}
          className={`panel panel-edge sheen group relative block w-full overflow-hidden p-5 text-left transition-all duration-500 sm:p-6 ${
            open
              ? 'border-cyan/45 shadow-[0_0_50px_-20px_rgba(34,211,238,0.7)]'
              : 'hover:border-cyan/30'
          }`}
        >
          <div className="relative z-10 flex flex-wrap items-start justify-between gap-x-5 gap-y-3">
            <div className="min-w-0 flex-1">
              <div className="mb-1.5 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[9.5px] tracking-[0.18em] text-ice/30">
                  {job.from} → {job.to}
                </span>
                {job.current && (
                  <span className="flex items-center gap-1.5 border border-lime/30 bg-lime/[0.07] px-1.5 py-[2px] font-mono text-[8.5px] tracking-[0.16em] text-lime">
                    <StatusDot />
                    ACTIVE
                  </span>
                )}
              </div>

              <h3 className="font-display text-[17px] leading-snug font-semibold text-ice transition-colors duration-300 group-hover:text-cyan sm:text-lg">
                {job.role}
              </h3>

              <div className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[11px]">
                <span className="text-cyan/85">{job.org}</span>
                {job.short && (
                  <span className="border border-stroke px-1 py-px text-[8.5px] text-ice/45">
                    {job.short}
                  </span>
                )}
                <span className="text-ice/30">· {job.location}</span>
              </div>

              <p className="mt-3 max-w-2xl font-mono text-[11.5px] leading-relaxed text-ice/55">
                {job.summary}
              </p>
            </div>

            {/* expand chevron */}
            <span
              className={`mt-1 grid h-8 w-8 shrink-0 place-items-center border border-stroke text-ice/40 transition-all duration-400 ${
                open ? 'rotate-90 border-cyan/50 text-cyan' : 'group-hover:border-cyan/40 group-hover:text-cyan'
              }`}
            >
              <Icon.chevron size={14} />
            </span>
          </div>

          {/* expandable detail */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="relative z-10 overflow-hidden"
              >
                <div className="mt-5 border-t border-stroke/60 pt-4">
                  <div className="font-mono text-[9px] tracking-[0.24em] text-cyan/60">
                    KEY ACTIVITIES
                  </div>
                  <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                    {job.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 font-mono text-[11px] leading-relaxed text-ice/55"
                      >
                        <Icon.spark size={12} className="mt-[2px] shrink-0 text-cyan/60" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </TiltCard>
    </motion.div>
  )
}
