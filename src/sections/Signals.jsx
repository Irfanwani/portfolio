import { motion } from 'motion/react'
import { buildStats, statsMeta } from '../data/stats'
import { Section, Reveal, Counter } from '../components/ui'
import TiltCard from '../components/TiltCard'

const EASE = [0.16, 1, 0.3, 1]

export default function Signals() {
  const stats = buildStats()

  return (
    <Section id="stats" className="py-20 sm:py-24" label="SIGNALS" code="05">

      {/* ---- live API stats ---- */}
      <Reveal className="mb-4 flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-1.5 border border-lime/30 bg-lime/[0.06] px-2 py-1 font-mono text-[9px] tracking-[0.16em] text-lime">
          <span className="h-1 w-1 animate-pulse rounded-full bg-lime" />
          LIVE · api.github.com
        </span>
        {statsMeta.fetchedAt && (
          <span className="font-mono text-[9px] tracking-[0.14em] text-ice/60">
            fetched{' '}
            {new Date(statsMeta.fetchedAt).toLocaleString('en-GB', {
              dateStyle: 'medium',
              timeStyle: 'short',
            })}
          </span>
        )}
      </Reveal>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats
          .filter((s) => s.exact)
          .map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
            >
              <TiltCard intensity={0.6} lift={12}>
                <StatCell stat={s} />
              </TiltCard>
            </motion.div>
          ))}
      </div>

    </Section>
  )
}

function StatCell({ stat }) {
  const color =
    stat.accent === 'cyan'
      ? 'text-cyan'
      : stat.accent === 'violet'
        ? 'text-violet'
        : stat.accent === 'amber'
          ? 'text-amber'
          : stat.accent === 'lime'
            ? 'text-lime'
            : 'text-rose'

  return (
    <div className="panel panel-edge sheen group relative h-full overflow-hidden p-5 transition-all duration-500 hover:border-cyan/40">
      <span className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-cyan opacity-[0.06] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.18]" />
      <div className="relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[9px] tracking-[0.2em] text-ice/52">
            {stat.label.toUpperCase()}
          </span>
          <span
            title={`live from ${stat.hint}`}
            className="h-1 w-1 rounded-full bg-lime/70"
          />
        </div>
        <div className={`mt-1.5 font-display text-3xl font-semibold tabular-nums ${color}`}>
          <Counter value={Number(stat.value)} />
        </div>
        <div className="mt-0.5 font-mono text-[8.5px] tracking-[0.14em] text-ice/56">
          {stat.hint}
        </div>
      </div>
    </div>
  )
}
