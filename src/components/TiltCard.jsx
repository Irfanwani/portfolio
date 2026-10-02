import { useRef, useCallback, useEffect } from 'react'

const MAX_TILT = 9 // degrees
const LIFT = 18 // px translateZ
const PERSP = 1400
const BASE = `perspective(${PERSP}px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0)`

/**
 * TiltCard — CSS 3D card with pointer-tracked rotation and a radial glare.
 *
 * ARCHITECTURE NOTE (important):
 * The pointer listeners live on an UNTRANSFORMED outer wrapper, while the
 * transform is written to the inner card. If the transformed element owned the
 * listeners, rotating it would push the cursor outside its own hit region,
 * firing pointerleave -> reset -> re-enter in a feedback loop (visible flicker).
 * Measuring the static wrapper keeps hit-testing stable.
 *
 * Fully imperative: no React state, so a re-render can never clobber the
 * in-flight transform. The ease is only enabled on RESET so tracking feels
 * instant.
 */
export default function TiltCard({
  children,
  className = '',
  wrapperClassName = '',
  intensity = 1,
  glare = true,
  as: Tag = 'div',
  lift = LIFT,
  depth = true,
  ...rest
}) {
  const sceneRef = useRef(null)
  const cardRef = useRef(null)

  const apply = useCallback(
    (e) => {
      const scene = sceneRef.current
      const card = cardRef.current
      if (!scene || !card) return

      // Measure the STATIC wrapper — never the rotated element
      const r = scene.getBoundingClientRect()
      if (!r.width || !r.height) return

      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height

      const rx = (0.5 - py) * MAX_TILT * 2 * intensity
      const ry = (px - 0.5) * MAX_TILT * 2 * intensity

      card.style.transition = 'none'
      card.style.transform = `perspective(${PERSP}px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translate3d(0,0,${lift}px)`

      scene.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`)
      scene.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`)
      scene.style.setProperty('--glare', '1')
      scene.style.setProperty('--tilt-x', rx.toFixed(2))
      scene.style.setProperty('--tilt-y', ry.toFixed(2))
      // Inner content drifts against the tilt for a genuine depth read
      scene.style.setProperty('--px', `${((px - 0.5) * 10 * intensity).toFixed(2)}px`)
      scene.style.setProperty('--py2', `${((py - 0.5) * 10 * intensity).toFixed(2)}px`)
      scene.dataset.hot = 'true'
    },
    [intensity, lift]
  )

  const reset = useCallback(() => {
    const scene = sceneRef.current
    const card = cardRef.current
    if (!scene || !card) return
    card.style.transition = 'transform 0.7s cubic-bezier(0.16,1,0.3,1)'
    card.style.transform = BASE
    scene.style.setProperty('--glare', '0')
    scene.style.setProperty('--tilt-x', '0')
    scene.style.setProperty('--tilt-y', '0')
    scene.style.setProperty('--px', '0px')
    scene.style.setProperty('--py2', '0px')
    scene.dataset.hot = ''
  }, [])

  useEffect(() => {
    if (cardRef.current) cardRef.current.style.transform = BASE
  }, [])

  return (
    <div
      ref={sceneRef}
      onPointerMove={apply}
      onPointerLeave={reset}
      onPointerCancel={reset}
      className={`tilt-scene ${depth ? 'tilt-depth' : ''} ${wrapperClassName}`}
    >
      <Tag ref={cardRef} className={`tilt-card ${className}`} {...rest}>
        {children}
        {glare && (
          <span
            aria-hidden
            className="tilt-glare pointer-events-none absolute inset-0 z-30 opacity-0 transition-opacity duration-300"
            style={{
              background:
                'radial-gradient(460px circle at var(--gx,50%) var(--gy,50%), rgba(34,211,238,0.22), rgba(167,139,250,0.10) 40%, transparent 66%)',
              mixBlendMode: 'screen',
              clipPath:
                'polygon(14px 0,100% 0,100% calc(100% - 14px),calc(100% - 14px) 100%,0 100%,0 14px)',
            }}
          />
        )}
      </Tag>
    </div>
  )
}

