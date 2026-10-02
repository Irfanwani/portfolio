import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

/* ==========================================================================
   Section wrapper — consistent vertical rhythm + anchor offset
   ========================================================================== */
export function Section({ id, children, className = '', label, code }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>
      {label && <SectionHeader code={code} label={label} id={id} />}
      {children}
    </section>
  )
}

/* ==========================================================================
   Section header — CLI-style "// 02 — DOMAINS"
   ========================================================================== */
export function SectionHeader({ code, label, id }) {
  return (
    <header className="mb-10 sm:mb-14">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] tracking-[0.3em] text-cyan/72">
          [{code}]
        </span>
        <span className="font-mono text-[11px] tracking-[0.34em] text-cyan/92 sm:text-xs">
          {label}
        </span>
        <span className="rule flex-1" />
        <a
          href={`#${id}`}
          className="hidden font-mono text-[10px] tracking-widest text-ice/56 transition-colors hover:text-cyan sm:block"
        >
          #{id}
        </a>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 font-display text-3xl font-semibold tracking-tight text-ice sm:text-4xl md:text-[2.75rem]"
      >
        {label}
      </motion.h2>
    </header>
  )
}

/* ==========================================================================
   Panel — angular hull plate with corner brackets
   ========================================================================== */
export function Panel({ children, className = '', edge = true, glow = false }) {
  return (
    <div
      className={`panel ${edge ? 'panel-edge' : ''} ${
        glow ? 'shadow-[0_0_44px_-14px_rgba(34,211,238,0.4)]' : ''
      } group ${className}`}
    >
      {children}
    </div>
  )
}

/* ==========================================================================
   Reveal — scroll-triggered fade/slide
   ========================================================================== */
export function Reveal({ children, delay = 0, y = 22, className = '' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ==========================================================================
   Tag / chip
   ========================================================================== */
const accentMap = {
  cyan: 'border-cyan/30 text-cyan/94 bg-cyan/[0.07]',
  violet: 'border-violet/30 text-violet/94 bg-violet/[0.07]',
  amber: 'border-amber/30 text-amber/94 bg-amber/[0.07]',
  lime: 'border-lime/30 text-lime/94 bg-lime/[0.07]',
  rose: 'border-rose/30 text-rose/94 bg-rose/[0.07]',
  ice: 'border-stroke text-ice/78 bg-white/[0.03]',
}

export function Tag({ children, accent = 'ice', className = '' }) {
  return (
    <span
      className={`inline-flex items-center border px-2 py-[3px] font-mono text-[10px] tracking-[0.12em] uppercase ${accentMap[accent]} ${className}`}
    >
      {children}
    </span>
  )
}

/* ==========================================================================
   StatusDot — pulsing telemetry indicator
   ========================================================================== */
export function StatusDot({ color = 'bg-lime', className = '' }) {
  return (
    <span className={`relative inline-flex h-2 w-2 ${className}`}>
      <span className={`absolute inline-flex h-full w-full rounded-full ${color} opacity-70 animate-ping`} />
      <span className={`relative inline-flex h-2 w-2 rounded-full ${color}`} />
    </span>
  )
}

/* ==========================================================================
   Typewriter — terminal character-by-character reveal
   ========================================================================== */
export function Typewriter({ text, speed = 42, delay = 0, className = '', cursor = true }) {
  const [out, setOut] = useState('')
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) {
      setOut(text)
      return
    }
    let i = 0
    setOut('')
    const start = setTimeout(() => {
      const id = setInterval(() => {
        i++
        setOut(text.slice(0, i))
        if (i >= text.length) clearInterval(id)
      }, speed)
      return () => clearInterval(id)
    }, delay)
    return () => clearTimeout(start)
  }, [text, speed, delay, reduce])

  return (
    <span className={className}>
      {out}
      {cursor && out.length < text.length && (
        <span className="ml-0.5 inline-block text-cyan animate-blink">▊</span>
      )}
    </span>
  )
}

/* ==========================================================================
   Counter — count-up when scrolled into view
   ========================================================================== */
export function Counter({ value, suffix = '', duration = 1600 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [n, setN] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setN(value)
      return
    }
    let raf
    const start = performance.now()
    const step = (t) => {
      const p = Math.min((t - start) / duration, 1)
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
      setN(Math.round(value * eased))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration, reduce])

  return (
    <span ref={ref} className="tabular-nums">
      {n.toLocaleString('en-US')}
      {suffix}
    </span>
  )
}

export { Icon } from './icons'
