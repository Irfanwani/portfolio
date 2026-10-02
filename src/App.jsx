import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import SpaceCanvas from './three/SpaceCanvas'
import DevCursor from './components/DevCursor'
import BootSequence from './components/BootSequence'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Signals from './sections/Signals'
import Contact from './sections/Contact'

const EASE = [0.16, 1, 0.3, 1]

export default function App() {
  const [booted, setBooted] = useState(false)

  useEffect(() => {
    if (booted) document.body.style.overflow = ''
  }, [booted])

  return (
    <>
      {/* ---------- CRT frame: scanlines + vignette ---------- */}
      <div className="crt" />

      {/* ---------- WebGL integration graph + starfield ---------- */}
      <SpaceCanvas />

      {/* ---------- CSS starfield under the WebGL layer ---------- */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <div className="stars-a absolute inset-0 animate-drift opacity-40" />
        <div className="stars-b absolute -inset-x-1/2 inset-y-0 animate-drift-slow opacity-30" />
        <div className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-cyan/8 blur-[130px]" />
        <div className="absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full bg-violet/8 blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 h-[32rem] w-[32rem] rounded-full bg-indigo/8 blur-[140px]" />
      </div>

      {/* ---------- Content ---------- */}
      <AnimatePresence>
        {booted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative z-10"
          >
            <Nav />

            <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Signals />
              <Contact />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      {!booted && <BootSequence onDone={() => setBooted(true)} />}

      {/* ---------- Live software cursor ---------- */}
      <DevCursor />
    </>
  )
}
