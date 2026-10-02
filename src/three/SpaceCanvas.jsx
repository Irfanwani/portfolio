import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { AdaptiveDpr, Preload } from '@react-three/drei'
import SpaceScene from './SpaceScene'

/**
 * Fixed full-viewport WebGL layer behind all DOM content.
 *
 * - Mounts after the boot overlay so first paint is instant
 * - Skips WebGL entirely for reduced-motion users (CSS starfield still runs)
 * - Fades out as the user scrolls past the hero, so the planet never fights
 *   text contrast in the content sections
 */
export default function SpaceCanvas() {
  const [enabled, setEnabled] = useState(false)
  const wrapRef = useRef(null)
  const raf = useRef(0)
  const opacity = useRef(1)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => setEnabled(true), 220)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const el = wrapRef.current
    if (!el) return

    const update = () => {
      cancelAnimationFrame(raf.current)
      raf.current = requestAnimationFrame(() => {
        const hero = document.getElementById('hero')
        const h = hero?.offsetHeight || window.innerHeight
        const p = Math.min(Math.max(window.scrollY / (h * 0.92), 0), 1)
        // 1 at the top -> 0.12 once the hero is behind us
        const next = 1 - p * 0.88
        if (Math.abs(next - opacity.current) > 0.004) {
          opacity.current = next
          el.style.opacity = next.toFixed(3)
        }
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [enabled])

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-200 ease-out"
    >
      {enabled && (
        <Canvas
          dpr={[1, 1.75]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          camera={{ position: [0, 0.35, 10.5], fov: 42, near: 0.1, far: 160 }}
          onCreated={({ gl }) => {
            gl.toneMapping = 0
          }}
        >
          <Suspense fallback={null}>
            <SpaceScene />
            <AdaptiveDpr pixelated={false} />
            <Preload all />
          </Suspense>
        </Canvas>
      )}
    </div>
  )
}
