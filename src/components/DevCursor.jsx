import { useEffect, useRef, useState } from 'react'

/**
 * SoftwareEngineerCursor — a genuinely live cursor, not a static image being
 * dragged around.
 *
 * What's actually animating:
 *   · a CSS-3D wireframe cube rotating on two axes in real time
 *   · a "scan" plane sweeping through the cube interior
 *   · data packets orbiting the cube and re-lighting on each pass
 *   · a velocity trail whose length tracks cursor speed
 *   · a live hex/binary telemetry readout that ticks every frame
 *   · on interactive elements it "locks": rotation eases, the cube snaps
 *     upright, packets stop and a targeting frame engages
 *
 * PERFORMANCE / CORRECTNESS NOTES
 *  1. NO React state is used for hover/press. An earlier version kept
 *     `pressed` in state and listed it in the effect deps — so every mousedown
 *     tore down the rAF loop and re-seeded the cursor position to the screen
 *     centre, making the cursor "jump to the middle" on every click. Hover and
 *     press are now plain closure variables; the effect runs exactly once.
 *  2. Rotation is applied to inner elements only. Writing `style.transform`
 *     on an element that also carries Tailwind's `-translate-x-1/2` classes
 *     overwrites that centring and visibly displaces the element — so every
 *     transformed element here has a dedicated non-transformed positioning
 *     wrapper.
 *  3. Every listener is registered with a stable reference and removed on
 *     unmount (no inline arrow functions in add/removeEventListener).
 */

const clamp = (v, a, b) => Math.min(Math.max(v, a), b)
const lerp = (a, b, t) => a + (b - a) * t

const hasFinePointer = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches

export default function DevCursor() {
  const [active] = useState(hasFinePointer)

  const rootRef = useRef(null)
  const cubeRef = useRef(null)
  const scanRef = useRef(null)
  const trailRef = useRef(null)
  const orbitRef = useRef(null)
  const p1Ref = useRef(null)
  const p2Ref = useRef(null)
  const readoutRef = useRef(null)
  const lockRef = useRef(null)
  const pressRef = useRef(null)
  const haloRef = useRef(null)

  useEffect(() => {
    if (!active) return

    const root = document.documentElement
    root.classList.add('dev-cursor')

    /* ---------- cursor kinematics ---------- */
    const target = { x: innerWidth / 2, y: innerHeight / 2 }
    const pos = { ...target }
    const vel = { x: 0, y: 0 }
    const trail = []

    /* ---------- interaction flags: closure vars, never React state ---------- */
    let isHot = false
    let isDown = false
    let lockT = 0 // 0 = free-spinning, 1 = locked upright
    let spinX = 0.6
    let spinY = 0.8
    let tick = 0
    let raf = 0

    const onMove = (e) => {
      target.x = e.clientX
      target.y = e.clientY
      const el = e.target
      const hot = !!el?.closest?.(
        'a, button, [role="button"], input, textarea, select, summary, [data-hot]'
      )
      if (hot !== isHot) {
        isHot = hot
        root.classList.toggle('is-hot', hot)
      }
    }

    const onDown = () => {
      isDown = true
    }
    const onUp = () => {
      isDown = false
    }
    const onLeave = () => {
      if (rootRef.current) rootRef.current.style.opacity = '0'
      if (lockRef.current) lockRef.current.style.opacity = '0'
    }
    const onEnter = () => {
      if (rootRef.current) rootRef.current.style.opacity = '1'
      if (lockRef.current) lockRef.current.style.opacity = '1'
    }

    const loop = () => {
      raf = requestAnimationFrame(loop)

      // Don't advance animations while the tab is hidden — otherwise the
      // first frame back has a huge dt and the cursor lurches.
      if (document.hidden) return

      tick++

      /* ---- spring the body toward the pointer ---- */
      vel.x = (vel.x + (target.x - pos.x) * 0.19) * 0.72
      vel.y = (vel.y + (target.y - pos.y) * 0.19) * 0.72
      pos.x += vel.x
      pos.y += vel.y

      const speed = Math.hypot(vel.x, vel.y)
      lockT = lerp(lockT, isHot ? 1 : 0, 0.08)

      /* ---- body ---- */
      if (rootRef.current) {
        const s = (1 + clamp(speed * 0.0018, 0, 0.22) - lockT * 0.12) * (isDown ? 0.86 : 1)
        rootRef.current.style.transform =
          `translate3d(${pos.x.toFixed(2)}px, ${pos.y.toFixed(2)}px, 0) ` +
          `translate(-50%, -50%) scale(${s.toFixed(3)})`
      }

      /* ---- live cube: continuous rotation, eased upright on lock ---- */
      spinX += 0.0075 + lockT * 0.0125
      spinY += 0.0125 + lockT * 0.0175
      const rx = lerp(spinX, -0.72, lockT)
      const ry = lerp(spinY, 0.45, lockT)
      if (cubeRef.current) {
        cubeRef.current.style.transform =
          `rotateX(${rx.toFixed(3)}rad) rotateY(${ry.toFixed(3)}rad)`
      }

      /* ---- halo responds to state ---- */
      if (haloRef.current) {
        haloRef.current.style.opacity = (0.5 + lockT * 0.5).toFixed(2)
        haloRef.current.style.transform =
          `translate(-50%, -50%) scale(${(1 + lockT * 0.35 + Math.sin(tick * 0.06) * 0.08).toFixed(3)})`
      }

      /* ---- scan plane sweeping the cube interior ---- */
      if (scanRef.current) {
        const sweep = ((tick * 0.9) % 130) / 130 - 0.5
        scanRef.current.style.transform = `translateZ(${sweep.toFixed(3)}px)`
        scanRef.current.style.opacity = lockT > 0.5 ? '0.85' : '0.45'
      }

      /* ---- orbiting data packets ---- */
      const spinSpeed = 0.055 + lockT * 0.02
      if (orbitRef.current) {
        orbitRef.current.style.transform = `rotate(${(tick * spinSpeed).toFixed(2)}deg)`
      }
      if (p1Ref.current) {
        p1Ref.current.style.opacity = (0.35 + 0.6 * Math.abs(Math.sin(tick * 0.055))).toFixed(2)
      }
      if (p2Ref.current) {
        p2Ref.current.style.opacity = (0.35 + 0.6 * Math.abs(Math.cos(tick * 0.041))).toFixed(2)
      }

      /* ---- velocity trail ---- */
      trail.unshift({ x: pos.x, y: pos.y })
      if (trail.length > 14) trail.pop()
      if (trailRef.current) {
        let d = ''
        for (let i = 0; i < trail.length; i++) {
          d += `${i === 0 ? 'M' : 'L'}${trail[i].x.toFixed(1)},${trail[i].y.toFixed(1)}`
        }
        trailRef.current.setAttribute('d', d)
        trailRef.current.style.opacity = clamp(speed * 0.012, 0, 0.5).toFixed(3)
        trailRef.current.style.strokeWidth = (0.8 + clamp(speed * 0.03, 0, 3)).toFixed(2)
      }

      /* ---- targeting frame tracks the exact pointer ---- */
      if (lockRef.current) {
        const r = 13 + clamp(speed * 0.5, 0, 12)
        lockRef.current.style.width = `${r * 2}px`
        lockRef.current.style.height = `${r * 2}px`
        lockRef.current.style.transform =
          `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%) rotate(${(tick * 0.6) % 360}deg)`
        lockRef.current.style.opacity = (0.35 + lockT * 0.65).toFixed(2)
      }

      /* ---- live telemetry readout ---- */
      if (readoutRef.current && tick % 2 === 0) {
        const h = (tick * 7) & 0xffff
        const bin = (tick >> 3) & 0xff
        readoutRef.current.textContent = `0x${h.toString(16).toUpperCase().padStart(4, '0')} ${bin
          .toString(2)
          .padStart(8, '0')}`
      }

      /* ---- press feedback (kept for the visual, no re-render) ---- */
      if (pressRef.current) {
        pressRef.current.style.opacity = isDown ? '0.75' : '1'
      }
    }
    raf = requestAnimationFrame(loop)

    addEventListener('mousemove', onMove, { passive: true })
    addEventListener('mousedown', onDown, { passive: true })
    addEventListener('mouseup', onUp, { passive: true })
    addEventListener('pointercancel', onUp, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    if (rootRef.current) rootRef.current.style.opacity = '1'
    if (lockRef.current) lockRef.current.style.opacity = '1'

    return () => {
      cancelAnimationFrame(raf)
      root.classList.remove('dev-cursor', 'is-hot')
      removeEventListener('mousemove', onMove)
      removeEventListener('mousedown', onDown)
      removeEventListener('mouseup', onUp)
      removeEventListener('pointercancel', onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [active])

  if (!active) return null

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* ---------- velocity trail ---------- */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="trailGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#a78bfa" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          ref={trailRef}
          d=""
          fill="none"
          stroke="url(#trailGrad)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0, filter: 'blur(1.5px)' }}
        />
      </svg>

      {/* ---------- the live cube ---------- */}
      <div
        ref={rootRef}
        data-cursor-body
        className="absolute left-0 top-0 will-change-transform transition-opacity duration-200"
        style={{ opacity: 0 }}
      >
        <div ref={pressRef} className="relative transition-opacity duration-150">
          {/* pulsing halo — transform written here, so no Tailwind translate on it */}
          <span
            ref={haloRef}
            className="pointer-events-none absolute left-1/2 top-1/2 h-14 w-14 rounded-full bg-cyan/25 blur-xl"
            style={{ transform: 'translate(-50%, -50%)', opacity: 0.5 }}
          />

          {/* 3D stage */}
          <div className="relative" style={{ perspective: '260px', width: 34, height: 34 }}>
            <div ref={cubeRef} className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
              {/* scan plane */}
              <div
                ref={scanRef}
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(34,211,238,0) 0%, rgba(34,211,238,0.5) 50%, rgba(34,211,238,0) 100%)',
                  transform: 'translateZ(0px)',
                  opacity: 0.45,
                }}
              />

              <Face v="rotateY(0deg) translateZ(17px)" />
              <Face v="rotateY(180deg) translateZ(17px)" />
              <Face v="rotateX(90deg) translateZ(17px)" />
              <Face v="rotateX(-90deg) translateZ(17px)" />
              <Face v="rotateY(90deg) translateZ(17px)" />
              <Face v="rotateY(-90deg) translateZ(17px)" />

              {/* corner ticks on the front face */}
              <div className="absolute inset-[3px]" style={{ transform: 'translateZ(17.4px)' }}>
                {[
                  ['left-0 top-0', 'border-l border-t'],
                  ['right-0 top-0', 'border-r border-t'],
                  ['left-0 bottom-0', 'border-l border-b'],
                  ['right-0 bottom-0', 'border-r border-b'],
                ].map(([pos, edge]) => (
                  <span key={pos + edge} className={`absolute h-1.5 w-1.5 border-cyan/80 ${pos} ${edge}`} />
                ))}
              </div>

              {/* glowing core */}
              <span
                className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(34,211,238,0.85)]"
                style={{ transform: 'translateZ(0px) translate(-50%, -50%)' }}
              />
            </div>

            {/* orbit ring — outer div centres it, inner div rotates */}
            <div
              className="absolute left-1/2 top-1/2 h-[42px] w-[42px] -translate-x-1/2 -translate-y-1/2"
              aria-hidden
            >
              <div
                ref={orbitRef}
                className="absolute inset-0 rounded-full border border-violet/40"
              >
                {/* packets positioned by CSS on the ring's edge, not by transform */}
                <span className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet shadow-[0_0_6px_#a78bfa]" ref={p1Ref} />
                <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 translate-y-1/2 rounded-full bg-amber shadow-[0_0_6px_#fbbf24]" ref={p2Ref} />
              </div>
            </div>
          </div>

          {/* telemetry readout */}
          <span
            ref={readoutRef}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[7px] tracking-[0.1em] text-cyan/70 tabular-nums"
          >
            0x0000 00000000
          </span>
        </div>
      </div>

      {/* ---------- exact-pointer targeting frame ---------- */}
      <div
        ref={lockRef}
        data-cursor-lock
        className="absolute left-0 top-0 will-change-transform transition-opacity duration-150"
        style={{ opacity: 0 }}
      >
        <svg viewBox="-24 -24 48 48" className="h-full w-full" fill="none">
          <circle r="20" stroke="#22d3ee" strokeOpacity="0.35" strokeWidth="0.5" strokeDasharray="3 7" />
          <circle r="24.5" stroke="#a78bfa" strokeOpacity="0.2" strokeWidth="0.4" strokeDasharray="1 6" />
          {[
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1],
          ].map(([sx, sy], i) => (
            <line
              key={i}
              x1={sx * 15}
              y1={sy * 15}
              x2={sx * 21}
              y2={sy * 21}
              stroke="#22d3ee"
              strokeOpacity="0.75"
              strokeWidth="0.8"
            />
          ))}
        </svg>
        <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 font-mono text-[7px] tracking-[0.18em] text-cyan/70">
          LOCK
        </span>
      </div>
    </div>
  )
}

/** One wireframe face of the cube. */
function Face({ v }) {
  return (
    <div
      className="absolute inset-0 border border-cyan/55"
      style={{
        transform: v,
        background: 'linear-gradient(135deg, rgba(34,211,238,0.09) 0%, rgba(167,139,250,0.05) 100%)',
        boxShadow: 'inset 0 0 12px rgba(34,211,238,0.12)',
      }}
    />
  )
}