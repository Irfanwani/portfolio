import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { bootLines, profile } from '../data/profile'
import { StatusDot } from './ui'

const YEAR = new Date().getFullYear()
const LINE_MS = 130
const TITLE_MS = 700
const DONE_MS = 1000

/**
 * BootSequence — CRT-style console boot.
 * Runs the checks line by line, then hands off to the site.
 */
export default function BootSequence({ onDone }) {
  const [visible, setVisible] = useState(0)
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    let cancelled = false
    let timeout

    const runLine = (i) => {
      if (cancelled) return
      setVisible(i + 1)
      setProgress(Math.round(((i + 1) / bootLines.length) * 100))

      const isTitle = bootLines[i].type === 'title'
      const delay = isTitle
        ? TITLE_MS
        : bootLines[i].type === 'success'
          ? DONE_MS
          : LINE_MS + Math.random() * 130

      if (i === bootLines.length - 1) {
        timeout = setTimeout(() => {
          setLeaving(true)
          timeout = setTimeout(() => onDone?.(), 720)
        }, delay)
      } else {
        timeout = setTimeout(() => runLine(i + 1), delay)
      }
    }

    timeout = setTimeout(() => runLine(0), 180)

    return () => {
      cancelled = true
      clearTimeout(timeout)
    }
  }, [onDone])

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-void"
          exit={{ opacity: 0, filter: 'blur(14px)' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* ambient star wash */}
          <div className="stars-a absolute inset-0 opacity-25" />

          {/* corner telemetry brackets */}
          {[
            'left-5 top-5 border-l border-t',
            'right-5 top-5 border-r border-t',
            'left-5 bottom-5 border-b border-l',
            'right-5 bottom-5 border-b border-r',
          ].map((c) => (
            <span
              key={c}
              className={`pointer-events-none absolute h-10 w-10 border-cyan/25 ${c}`}
            />
          ))}

          <div className="relative w-full max-w-xl px-6">
            {/* Header */}
            <div className="mb-6 flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-ice/40">
              <StatusDot />
              <span>UPLINK · SECURE CHANNEL</span>
            </div>

            {/* Lines */}
            <div className="min-h-[248px] space-y-[5px] font-mono text-[11px] leading-relaxed sm:text-xs">
              {bootLines.slice(0, visible).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22 }}
                  className={
                    line.type === 'title'
                      ? 'mb-3 text-cyan glow-cyan'
                      : line.type === 'success'
                        ? 'mt-4 text-lime'
                        : 'text-ice/65'
                  }
                >
                  {line.type === 'success' ? (
                    <span className="flex items-center gap-2">
                      <span className="text-lime">▸</span>
                      {line.text}
                    </span>
                  ) : (
                    line.text
                  )}
                </motion.div>
              ))}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block h-3.5 w-[7px] translate-y-[2px] bg-cyan"
              />
            </div>

            {/* Progress */}
            <div className="mt-7">
              <div className="mb-2 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-ice/45">
                <span>LOADING FLIGHT SYSTEMS</span>
                <span className="text-cyan">{String(progress).padStart(3, '0')}%</span>
              </div>
              <div className="relative h-[3px] w-full overflow-hidden bg-white/8">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan via-cyan to-violet"
                  style={{ boxShadow: '0 0 12px rgba(34,211,238,0.75)' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
                {/* scan sheen */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)] animate-[drift_1.6s_linear_infinite] bg-[length:40%_100%] bg-no-repeat" />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between font-mono text-[9px] tracking-[0.22em] text-ice/25">
              <span>{profile.callSign} :: OS 4.2.1-STABLE</span>
              <span>© {YEAR}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
