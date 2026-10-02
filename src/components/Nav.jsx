import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react'
import { sections, profile } from '../data/profile'
import { Icon } from './ui'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('hero')

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (top) setActiveId(top.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.5, 1] }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  // Lock scroll when the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* ---------------- TOP BAR ---------------- */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-[120]"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? 'border-b border-stroke/70 bg-void/80 backdrop-blur-xl'
              : 'border-b border-transparent'
          }`}
        >
          <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-5 sm:px-8 sm:h-16">
            {/* Brand */}
            <a href="#hero" className="group flex items-center gap-2.5" data-hot>
              <span className="relative grid h-7 w-7 place-items-center border border-cyan/40 bg-cyan/10">
                <Icon.github size={14} className="text-cyan transition-transform duration-500 group-hover:rotate-180" />
                <span className="absolute -inset-px animate-pulse-glow border border-cyan/20" />
              </span>
              <span className="font-mono text-[11px] leading-none tracking-[0.2em] text-ice/85 transition-colors group-hover:text-cyan sm:text-xs">
                IRFAN<span className="text-cyan/60">_</span>
                <span className="hidden sm:inline">WANI</span>
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="ml-auto hidden items-center gap-1 lg:flex">
              {sections.map((s) => {
                const isActive = activeId === s.id
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    data-hot
                    className={`group relative whitespace-nowrap px-2.5 py-2 font-mono text-[10.5px] tracking-[0.14em] transition-colors xl:px-3 ${
                      isActive ? 'text-cyan' : 'text-ice/50 hover:text-ice'
                    }`}
                  >
                    <span className="mr-1.5 text-[9px] text-ice/25 group-hover:text-cyan/60">
                      {s.code}
                    </span>
                    {s.label}
                    <span
                      className={`absolute inset-x-2 bottom-0.5 h-px origin-left bg-cyan transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                )
              })}
            </nav>

            {/* CTA */}
            <div className="ml-auto flex items-center gap-2 lg:ml-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                data-hot
                className="group hidden items-center gap-1.5 whitespace-nowrap border border-cyan/35 bg-cyan/10 px-3.5 py-2 font-mono text-[10px] tracking-[0.16em] text-cyan transition-all duration-300 hover:bg-cyan/20 hover:shadow-[0_0_20px_-4px_rgba(34,211,238,0.6)] sm:flex"
              >
                HIRE ME
                <Icon.external size={12} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              {/* Mobile trigger */}
              <button
                onClick={() => setOpen(true)}
                data-hot
                aria-label="Open navigation"
                className="grid h-9 w-9 place-items-center border border-stroke bg-white/[0.03] lg:hidden"
              >
                <span className="flex flex-col gap-[4px]">
                  <span className="block h-[1.5px] w-4 bg-cyan" />
                  <span className="block h-[1.5px] w-4 bg-cyan" />
                  <span className="block h-[1.5px] w-4 bg-cyan" />
                </span>
              </button>
            </div>
          </div>

          {/* Scroll progress hairline */}
          <div className="relative h-px w-full bg-transparent">
            <motion.div
              style={{ scaleX: progress }}
              className="h-px w-full origin-left bg-gradient-to-r from-cyan via-cyan to-violet"
            />
          </div>
        </div>
      </motion.header>

      {/* ---------------- MOBILE SHEET ---------------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-[130] lg:hidden"
          >
            <div className="absolute inset-0 bg-void/95 backdrop-blur-md" onClick={() => setOpen(false)} />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 flex h-full w-full max-w-xs flex-col border-l border-stroke bg-void-2/95 p-6"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.28em] text-cyan">NAVIGATION</span>
                <button
                  onClick={() => setOpen(false)}
                  data-hot
                  aria-label="Close navigation"
                  className="grid h-8 w-8 place-items-center border border-stroke text-ice/60"
                >
                  <span className="relative block h-3.5 w-3.5">
                    <span className="absolute top-1/2 left-0 h-px w-full rotate-45 bg-cyan" />
                    <span className="absolute top-1/2 left-0 h-px w-full -rotate-45 bg-cyan" />
                  </span>
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {sections.map((s, i) => (
                  <motion.a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    data-hot
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.045 }}
                    className={`flex items-center gap-3 border-b border-stroke/50 py-3.5 font-mono text-xs tracking-[0.18em] transition-colors ${
                      activeId === s.id ? 'text-cyan' : 'text-ice/65'
                    }`}
                  >
                    <span className="text-[9px] text-ice/30">{s.code}</span>
                    {s.label}
                    <Icon.chevron size={13} className="ml-auto opacity-40" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto space-y-2 pt-8">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-hot
                  className="flex items-center justify-center gap-2 border border-cyan/40 bg-cyan/10 py-3 font-mono text-[10px] tracking-[0.2em] text-cyan"
                >
                  <Icon.github size={13} /> GITHUB
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  data-hot
                  className="flex items-center justify-center gap-2 border border-stroke py-3 font-mono text-[10px] tracking-[0.2em] text-ice/65"
                >
                  <Icon.mail size={13} /> EMAIL
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
