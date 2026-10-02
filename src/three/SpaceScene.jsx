import { useEffect, useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { integrationNodes, integrationEdges } from '../data/profile'

/* ==========================================================================
   Deterministic PRNG (mulberry32) — stable layout across reloads
   ========================================================================== */
function makeRng(seed) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/* ==========================================================================
   Round sprite so points read as stars, not squares
   ========================================================================== */
let _starTex = null
function starTexture() {
  if (_starTex) return _starTex
  const size = 64
  const c = document.createElement('canvas')
  c.width = c.height = size
  const ctx = c.getContext('2d')
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  g.addColorStop(0.0, 'rgba(255,255,255,1)')
  g.addColorStop(0.18, 'rgba(255,255,255,0.95)')
  g.addColorStop(0.42, 'rgba(255,255,255,0.32)')
  g.addColorStop(1.0, 'rgba(255,255,255,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  _starTex = new THREE.CanvasTexture(c)
  _starTex.colorSpace = THREE.SRGBColorSpace
  return _starTex
}

/* ==========================================================================
   DEEP STARFIELD — unchanged backdrop from the space theme
   ========================================================================== */
function StarLayer({ count, radius, size, speed, color }) {
  const ref = useRef()
  const tex = useMemo(() => starTexture(), [])

  const positions = useMemo(() => {
    const rnd = makeRng(count * 7919 + radius)
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const t = i / count
      const phi = Math.acos(1 - 2 * t)
      const theta = Math.PI * (1 + Math.sqrt(5)) * i
      const r = radius * (0.85 + rnd() * 0.3)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.cos(phi)
      arr[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
    }
    return arr
  }, [count, radius])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * speed
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        map={tex}
        alphaMap={tex}
        sizeAttenuation
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

/* ==========================================================================
   NODE COLOURS by integration kind
   ========================================================================== */
const KIND_COLOR = {
  core: '#22d3ee', // Integration Platform
  crm: '#38bdf8', // Salesforce / HubSpot / Zoho
  ats: '#2dd4bf', // Applicant tracking
  commerce: '#fbbf24', // Shopify
  surface: '#a78bfa', // REST APIs / Webhooks / SDKs
  channel: '#4ade80', // Voice / Email
  internal: '#fb7185', // React Native / Django / Postgres / AWS
}

/* ==========================================================================
   EDGE — a curved tube between two nodes, with a travelling light pulse.
   The pulses are the "traffic" flowing through the integration layer.
   ========================================================================== */
const EDGE_VERT = /* glsl */ `
  attribute float aProgress;   // 0..1 along the curve, per vertex
  attribute float aSpeed;      // per-edge pulse speed
  uniform float uTime;
  varying float vProgress;
  varying float vSpeed;
  void main() {
    vProgress = aProgress;
    vSpeed = aSpeed;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const EDGE_FRAG = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColor;
  varying float vProgress;
  varying float vSpeed;
  void main() {
    // Faint base line
    float base = 0.10;

    // Travelling pulses: 3 evenly spaced heads running along the edge
    float t = mod(uTime * vSpeed, 1.0);
    float d = abs(vProgress - t);
    d = min(d, 1.0 - d);                       // wrap at the ends
    float pulse = smoothstep(0.045, 0.0, d);

    // A second, offset pulse for a busier signal
    float t2 = mod(uTime * vSpeed + 0.5, 1.0);
    float d2 = abs(vProgress - t2);
    d2 = min(d2, 1.0 - d2);
    float pulse2 = smoothstep(0.028, 0.0, d2) * 0.7;

    float a = base + pulse + pulse2;
    gl_FragColor = vec4(uColor * (0.55 + pulse * 1.7 + pulse2), a);
  }
`

function PulseEdge({ from, to, color, speed = 0.22, bow = 0.22, progressRef }) {
  const matRef = useRef()

  const { geometry } = useMemo(() => {
    const a = new THREE.Vector3(...from)
    const b = new THREE.Vector3(...to)
    const mid = a.clone().add(b).multiplyScalar(0.5)
    // Push the midpoint outward so links arc rather than run dead straight
    const dir = mid.clone().normalize().multiplyScalar(bow)
    mid.add(dir)
    const curve = new THREE.QuadraticBezierCurve3(a, mid, b)

    const SEG = 48
    const pts = curve.getPoints(SEG)
    const positions = new Float32Array((SEG + 1) * 3)
    const progress = new Float32Array(SEG + 1)
    for (let i = 0; i <= SEG; i++) {
      positions[i * 3] = pts[i].x
      positions[i * 3 + 1] = pts[i].y
      positions[i * 3 + 2] = pts[i].z
      progress[i] = i / SEG
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('aProgress', new THREE.BufferAttribute(progress, 1))
    geo.setAttribute('aSpeed', new THREE.BufferAttribute(new Float32Array(SEG + 1).fill(speed), 1))
    return { geometry: geo }
  }, [from, to, bow, speed])

  const uniforms = useMemo(
    () => ({ uTime: { value: 0 }, uColor: { value: new THREE.Color(color) } }),
    [color]
  )

  useFrame((state) => {
    if (matRef.current) matRef.current.uniforms.uTime.value = state.clock.elapsedTime
    // Fade the whole graph out past the hero
    const p = progressRef.current
    if (matRef.current) matRef.current.opacity = Math.max(1 - p * 1.15, 0)
  })

  return (
    <line>
      <primitive object={geometry} attach="geometry" />
      <shaderMaterial
        ref={matRef}
        vertexShader={EDGE_VERT}
        fragmentShader={EDGE_FRAG}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </line>
  )
}

/* ==========================================================================
   NODE — a faceted polyhedron sized by importance, with a glowing core
   and a slowly orbiting satellite node
   ========================================================================== */
function GraphNode({ node, progressRef }) {
  const spinRef = useRef()
  const coreRef = useRef()
  const ringRef = useRef()
  const orbRef = useRef()

  const color = KIND_COLOR[node.kind] || '#22d3ee'
  const isCore = node.kind === 'core'
  const size = isCore ? 0.42 : 0.2

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    const p = progressRef.current
    const k = Math.max(1 - p * 1.15, 0)

    if (spinRef.current) {
      spinRef.current.rotation.x += delta * (isCore ? 0.28 : 0.5)
      spinRef.current.rotation.y += delta * (isCore ? 0.42 : 0.7)
      spinRef.current.scale.setScalar(size * (0.35 + k))
      spinRef.current.visible = k > 0.02
    }
    if (coreRef.current) {
      const pulse = 1 + Math.sin(t * 2.2 + node.x) * 0.06
      coreRef.current.scale.setScalar(size * 0.42 * pulse * k)
      coreRef.current.visible = k > 0.02
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * (isCore ? 0.5 : 0.9)
      ringRef.current.rotation.x = Math.PI / 2.6 + Math.sin(t * 0.6) * 0.25
      ringRef.current.scale.setScalar(size * 2.1 * k)
      ringRef.current.visible = k > 0.02
    }
    if (orbRef.current) {
      const r = size * 1.55
      orbRef.current.position.set(
        Math.cos(t * 0.8 + node.z) * r,
        Math.sin(t * 0.8 + node.z) * r,
        Math.sin(t * 0.8 + node.z) * r
      )
      orbRef.current.scale.setScalar(size * 0.2 * k)
      orbRef.current.visible = k > 0.02
    }
  })

  return (
    <group position={[node.x, node.y, node.z]}>
      {/* faceted shell */}
      <mesh ref={spinRef}>
        {isCore ? <icosahedronGeometry args={[1, 0]} /> : <octahedronGeometry args={[1, 0]} />}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isCore ? 0.9 : 0.5}
          metalness={0.4}
          roughness={0.25}
          wireframe
          transparent
          opacity={0.92}
        />
      </mesh>

      {/* glowing core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color={color} toneMapped={false} transparent opacity={0.95} />
      </mesh>

      {/* orbit ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1, 0.012, 6, 48]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* orbiting node */}
      <mesh ref={orbRef}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>

      {/* point light so the core actually illuminates nearby geometry */}
      <pointLight color={color} intensity={isCore ? 4 : 1.4} distance={3.4} />
    </group>
  )
}

/* ==========================================================================
   DATA PACKETS — discrete glints travelling along the edges
   ========================================================================== */
function Packets({ curves, progressRef }) {
  const ref = useRef()

  const items = useMemo(() => {
    const rnd = makeRng(4242)
    return curves.map((c, i) => ({
      curve: c,
      offset: rnd(),
      speed: 0.09 + rnd() * 0.14,
      color: c.color,
      size: 0.035 + rnd() * 0.03,
      key: i,
    }))
  }, [curves])

  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    const p = progressRef.current
    const k = Math.max(1 - p * 1.15, 0)
    ref.current.visible = k > 0.02

    ref.current.children.forEach((child, i) => {
      const it = items[i]
      const u = (t * it.speed + it.offset) % 1
      it.curve.getPoint(u, dummy.position)
      dummy.scale.setScalar(it.size * k * (0.7 + Math.sin(u * Math.PI) * 0.6))
      dummy.updateMatrix()
      child.matrix.copy(dummy.matrix)
      child.matrixAutoUpdate = false
    })
  })

  return (
    <group ref={ref}>
      {items.map((it) => (
        <mesh key={it.key} matrixAutoUpdate={false}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial color={it.color} toneMapped={false} transparent opacity={0.9} />
        </mesh>
      ))}
    </group>
  )
}

/* ==========================================================================
   HERO PROGRESS — 0 at top of page, 1 once the hero is scrolled past
   ========================================================================== */
function useHeroProgress() {
  const ref = useRef(0)
  useEffect(() => {
    const read = () => {
      const hero = document.getElementById('hero')
      const h = hero?.offsetHeight || window.innerHeight
      const s = Math.min(Math.max(window.scrollY / h, 0), 1)
      ref.current = s * s * (3 - 2 * s) // smoothstep
    }
    read()
    window.addEventListener('scroll', read, { passive: true })
    window.addEventListener('resize', read)
    return () => {
      window.removeEventListener('scroll', read)
      window.removeEventListener('resize', read)
    }
  }, [])
  return ref
}

/* ==========================================================================
   NETWORK GRAPH — the hero subject, laid out per viewport aspect
   ========================================================================== */
function IntegrationGraph({ progressRef }) {
  const groupRef = useRef()
  const { size } = useThree()
  const aspect = size.width / size.height

  const byId = useMemo(
    () => Object.fromEntries(integrationNodes.map((n) => [n.id, n])),
    []
  )

  const edges = useMemo(
    () =>
      integrationEdges
        .filter(([a, b]) => byId[a] && byId[b])
        .map(([a, b], i) => ({
          from: [byId[a].x, byId[a].y, byId[a].z],
          to: [byId[b].x, byId[b].y, byId[b].z],
          color: KIND_COLOR[byId[a].kind] || '#22d3ee',
          speed: 0.16 + ((i * 0.037) % 0.16),
        })),
    [byId]
  )

  const curves = useMemo(
    () =>
      edges.map((e) => {
        const a = new THREE.Vector3(...e.from)
        const b = new THREE.Vector3(...e.to)
        const mid = a.clone().add(b).multiplyScalar(0.5)
        mid.add(mid.clone().normalize().multiplyScalar(0.24))
        return new THREE.QuadraticBezierCurve3(a, mid, b)
      }),
    [edges]
  )

  useEffect(() => {
    const g = groupRef.current
    if (!g) return
    if (aspect < 0.7) {
      // portrait phone — small, low-right, well clear of the copy
      g.position.set(1.5, -1.9, -4.6)
      g.scale.setScalar(0.42)
    } else if (aspect < 1.0) {
      g.position.set(2.1, -1.6, -4.0)
      g.scale.setScalar(0.5)
    } else if (aspect < 1.45) {
      g.position.set(3.4, -1.2, -3.2)
      g.scale.setScalar(0.58)
    } else {
      g.position.set(4.3, -0.5, -1.9)
      g.scale.setScalar(0.66)
    }
  }, [aspect])

  return (
    <group ref={groupRef}>
      {integrationNodes.map((n) => (
        <GraphNode key={n.id} node={n} progressRef={progressRef} />
      ))}
      {edges.map((e, i) => (
        <PulseEdge
          key={i}
          from={e.from}
          to={e.to}
          color={e.color}
          speed={e.speed}
          progressRef={progressRef}
        />
      ))}
      <Packets curves={curves} progressRef={progressRef} />
    </group>
  )
}

/* ==========================================================================
   SCENE ROOT — camera rig with pointer parallax + scroll drift
   ========================================================================== */
function Rig({ progressRef }) {
  const { camera, pointer } = useThree()

  useFrame(() => {
    const px = pointer.x
    const py = pointer.y
    const ease = progressRef.current

    const targetX = px * 1.5 + ease * 6.6 // pan right, clearing the copy column
    const targetY = py * 0.9 + 0.3 - ease * 1.0
    const targetZ = 11 + ease * 3.2 // dolly back

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05)

    camera.lookAt(px * -0.3 - ease * 2.2, py * -0.18 - 0.1, 0)
  })

  return null
}

export default function SpaceScene() {
  const progressRef = useHeroProgress()

  return (
    <>
      {/* Deep star layers */}
      <StarLayer count={2600} radius={48} size={0.16} speed={0.006} color="#e8f0ff" />
      <StarLayer count={1400} radius={34} size={0.24} speed={0.014} color="#a5d8ff" />
      <StarLayer count={700} radius={24} size={0.34} speed={0.026} color="#c4b5fd" />
      <StarLayer count={320} radius={18} size={0.5} speed={0.04} color="#ffffff" />

      <ambientLight intensity={0.5} />
      <directionalLight position={[6, 4, 6]} intensity={1.5} color="#fff4e0" />
      <pointLight position={[-7, -3, -5]} intensity={16} color="#3b82f6" distance={20} />

      <IntegrationGraph progressRef={progressRef} />
      <Rig progressRef={progressRef} />
    </>
  )
}