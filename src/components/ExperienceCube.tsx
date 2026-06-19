/**
 * ExperienceCube.tsx
 *
 * Drop-in React component for Irfan Wani's portfolio.
 *
 * Usage:
 *   import ExperienceCube from './ExperienceCube';
 *   <ExperienceCube />
 *
 * Dependencies:
 *   npm install three
 *   npm install -D @types/three
 *
 * The Google Font (Space Grotesk + Inter) is injected automatically.
 * Customise the `experiences` array below with your real data.
 */

import {
  useEffect,
  useRef,
  useState,
  useCallback,
  type CSSProperties,
} from "react";
import * as THREE from "three";

// ── Types ─────────────────────────────────────────────────────────────────

interface Highlight {
  val: string;
  label: string;
}

interface Experience {
  eyebrow: string;
  title: string;
  company: string;
  color: string;
  desc: string;
  tags: string[];
  highlights: Highlight[];
}

interface InteractionState {
  isDragging: boolean;
  dragMoved: boolean;
  prevMouse: { x: number; y: number };
  velocity: { x: number; y: number };
  currentRotation: { x: number; y: number };
  isModalOpen: boolean;
}

interface SceneRefs {
  renderer?: THREE.WebGLRenderer;
  scene?: THREE.Scene;
  camera?: THREE.PerspectiveCamera;
  cube?: THREE.Mesh;
}

// ── Data ────────────────────────────────────────────────────────────────────
const experiences: Experience[] = [
  {
    eyebrow: "June 2025 — Present",
    title: "Senior Software Development Engineer",
    company: "Frejun · Full-time",
    color: "#4f46e5",
    desc: "Working as a Senior Software Development Engineer, I handle the integration team and lead the development of integration solutions. I work on mobile apps, backend systems, and more.",
    tags: ["Integration", "React", "Mobile", "Backend", "APIs", "SIP", "VoIP", "FastAPI"],
    highlights: [
      { val: "Integration", label: "Team lead" },
      { val: "Mobile + Backend", label: "Scope" },
    ],
  },
  {
    eyebrow: "Nov 2024 — Present",
    title: "Integration Manager",
    company: "Frejun · Full-time",
    color: "#0ea5e9",
    desc: "As an Integration Manager, I lead the efforts to connect our core platform with a variety of third-party systems, including CRMs, ATSs, and other business tools. I oversee the full lifecycle of integrations—from planning and development to deployment and maintenance—ensuring seamless data flow and reliability.",
    tags: ["APIs", "Webhooks", "Integrations", "Mobile", "Cloud", "Django"],
    highlights: [
      { val: "Multiple", label: "Systems integrated" },
      { val: "End-to-end", label: "Lifecycle ownership" },
    ],
  },
  {
    eyebrow: "June 2024 — June 2025",
    title: "Software Development Engineer",
    company: "Frejun · Full-time",
    color: "#0891b2",
    desc: "As an SDE, I work across backend systems and mobile application development to build scalable, high-performance solutions. I primarily use Django and Django REST Framework to develop robust APIs and contribute to cross-platform mobile apps.",
    tags: ["Django", "React Native", "APIs", "Backend", "Cloud"],
    highlights: [
      { val: "Cross-platform", label: "Mobile & backend" },
      { val: "API-first", label: "Design" },
    ],
  },
  {
    eyebrow: "Apr 2023 — Jul 2023",
    title: "Mobile Development Intern (React Native)",
    company: "Frejun · Internship",
    color: "#06b6d4",
    desc: "Worked on building Android applications using React Native, focusing on SIP-based calling functionality and real-time communication features. Implemented key features and optimized performance for a reliable calling experience.",
    tags: ["React Native", "Android", "SIP", "Real-time"],
    highlights: [
      { val: "SIP", label: "Calling integration" },
      { val: "Performance", label: "Optimizations" },
    ],
  },
  {
    eyebrow: "Oct 2022 — Oct 2023",
    title: "Mobile Development Intern (React Native)",
    company: "Appsdeployer · Internship",
    color: "#7c3aed",
    desc: "Contributed to development of React Native applications, focusing on intuitive UIs and smooth performance for Android and iOS. Assisted in backend integration and API work to support feature delivery.",
    tags: ["React Native", "APIs", "Android", "iOS"],
    highlights: [
      { val: "Mobile", label: "Apps shipped" },
      { val: "API", label: "Integration" },
    ],
  },
  {
    eyebrow: "Oct 2022 — Dec 2022",
    title: "Mobile Development Intern (React Native)",
    company: "Solvevolve · Internship",
    color: "#f97316",
    desc: "Focused on building and optimizing Android applications using React Native, supporting both frontend and backend teams to implement and debug features.",
    tags: ["React Native", "Android", "Frontend", "Backend"],
    highlights: [
      { val: "Android", label: "Focus" },
      { val: "Full-stack", label: "Support" },
    ],
  },
  {
    eyebrow: "Jun 2022 — Jul 2022",
    title: "Blockchain Development Intern",
    company: "NIT Srinagar · Internship",
    color: "#059669",
    desc: "Explored core blockchain concepts including NFTs, decentralized applications (dApps), smart contracts, and cryptocurrencies. Gained hands-on experience with blockchain development tools and platforms.",
    tags: ["Blockchain", "Research", "Smart Contracts"],
    highlights: [
      { val: "Hands-on", label: "Blockchain" },
      { val: "Learning", label: "dApps & NFTs" },
    ],
  },
];

// ── Face texture builder ─────────────────────────────────────────────────────
function makeFaceTexture(exp: Experience, idx: number): THREE.CanvasTexture {
  const size = 512;
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d") as CanvasRenderingContext2D;

  ctx.fillStyle = "#12121a";
  ctx.fillRect(0, 0, size, size);

  const grad = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size * 0.7,
  );
  grad.addColorStop(0, exp.color + "55");
  grad.addColorStop(1, exp.color + "00");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  ctx.strokeStyle = exp.color + "cc";
  ctx.lineWidth = 6;
  ctx.strokeRect(3, 3, size - 6, size - 6);

  ctx.strokeStyle = "rgba(255,255,255,0.07)";
  ctx.lineWidth = 1;
  ctx.strokeRect(20, 20, size - 40, size - 40);

  ctx.font = '900 200px "Space Grotesk", sans-serif';
  ctx.fillStyle = exp.color + "18";
  ctx.textAlign = "right";
  ctx.textBaseline = "bottom";
  ctx.fillText(String(idx + 1).padStart(2, "0"), size - 24, size - 16);

  ctx.font = '500 26px "Inter", sans-serif';
  ctx.fillStyle = "rgba(180,180,210,0.65)";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText(exp.eyebrow, 44, 52);

  ctx.font = '700 52px "Space Grotesk", sans-serif';
  ctx.fillStyle = "#e8e8f0";
  const words = exp.title.split(" ");
  let line = "";
  const lines: string[] = [];
  const maxW = size - 88;
  for (const w of words) {
    const test = line + (line ? " " : "") + w;
    if (ctx.measureText(test).width > maxW && line) {
      lines.push(line);
      line = w;
    } else {
      line = test;
    }
  }
  lines.push(line);
  lines.forEach((l, i) => ctx.fillText(l, 44, 110 + i * 62));

  ctx.beginPath();
  ctx.arc(44, size - 56, 8, 0, Math.PI * 2);
  ctx.fillStyle = exp.color;
  ctx.fill();

  ctx.font = '400 24px "Inter", sans-serif';
  ctx.fillStyle = "rgba(180,180,210,0.45)";
  ctx.fillText("Click to explore →", 64, size - 68);

  return new THREE.CanvasTexture(c);
}

// ── Modal component ──────────────────────────────────────────────────────────
interface ModalProps {
  exp: Experience | null;
  onClose: () => void;
}

function Modal({ exp, onClose }: ModalProps) {
  const visible = exp !== null;

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        pointerEvents: visible ? "all" : "none",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.35s ease",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 680,
          maxHeight: "85vh",
          overflowY: "auto",
          borderRadius: 20,
          padding: "clamp(36px, 5vw, 52px) clamp(24px, 5vw, 52px)",
          background: "#12121a",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow:
            "0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
          transform: visible
            ? "scale(1) translateY(0)"
            : "scale(0.72) translateY(40px)",
          opacity: visible ? 1 : 0,
          transition:
            "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            borderRadius: "20px 20px 0 0",
            background: exp?.color ?? "transparent",
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#6b6b8a",
            transition: "background 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.12)";
            e.currentTarget.style.color = "#e8e8f0";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.06)";
            e.currentTarget.style.color = "#6b6b8a";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <svg
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {exp && (
          <>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#6b6b8a",
                marginBottom: 10,
              }}
            >
              {exp.eyebrow}
            </div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(24px, 4vw, 34px)",
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: 6,
                color: "#e8e8f0",
              }}
            >
              {exp.title}
            </div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 16,
                fontWeight: 500,
                marginBottom: 28,
                color: "rgba(232,232,240,0.7)",
              }}
            >
              {exp.company}
            </div>

            <div
              style={{
                height: 1,
                background: "rgba(255,255,255,0.07)",
                marginBottom: 28,
              }}
            />

            <div style={sectionLabel}>Overview</div>
            <div
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "rgba(232,232,240,0.8)",
                marginBottom: 32,
              }}
            >
              {exp.desc}
            </div>

            <div style={sectionLabel}>Tech Stack</div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: 32,
              }}
            >
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: "5px 12px",
                    borderRadius: 100,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(232,232,240,0.75)",
                    letterSpacing: "0.03em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div style={sectionLabel}>Impact</div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {exp.highlights.map((h) => (
                <div
                  key={h.label}
                  style={{
                    padding: "16px 18px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 12,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 22,
                      fontWeight: 700,
                      marginBottom: 2,
                      color: exp.color,
                    }}
                  >
                    {h.val}
                  </div>
                  <div style={{ fontSize: 12, color: "#6b6b8a" }}>
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const sectionLabel: CSSProperties = {
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#6b6b8a",
  marginBottom: 12,
};

// ── Stars component ──────────────────────────────────────────────────────────
function Stars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    interface Star {
      x: number;
      y: number;
      r: number;
      o: number;
    }
    let stars: Star[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      stars = Array.from({ length: 160 }, () => ({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        r: Math.random() * 1.2 + 0.2,
        o: Math.random() * 0.6 + 0.1,
      }));
      draw();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,200,255,${s.o})`;
        ctx.fill();
      });
    }

    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}
    />
  );
}

// ── Main component ───────────────────────────────────────────────────────────
export default function ExperienceCube() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const threeRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<SceneRefs>({}); // holds Three.js objects across renders
  const stateRef = useRef<InteractionState>({
    // mutable interaction state (no re-render needed)
    isDragging: false,
    dragMoved: false,
    prevMouse: { x: 0, y: 0 },
    velocity: { x: 0.003, y: 0.005 },
    currentRotation: { x: 0.3, y: 0.5 },
    isModalOpen: false,
  });

  const [activeExp, setActiveExp] = useState<Experience | null>(null); // null = closed

  // Sync modal-open flag into mutable ref so animation loop can read it
  useEffect(() => {
    stateRef.current.isModalOpen = activeExp !== null;
    if (activeExp !== null) {
      stateRef.current.velocity = { x: 0, y: 0 };
    } else {
      stateRef.current.velocity = { x: 0.002, y: 0.004 };
    }
  }, [activeExp]);

  const closeModal = useCallback(() => setActiveExp(null), []);

  // ── Three.js setup ─────────────────────────────────────────────────────────
  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = threeRef.current;
    if (!wrap || !canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 5);

    function resize3D() {
      const W = wrap!.clientWidth;
      const H = wrap!.clientHeight;
      renderer.setSize(W, H);
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
    }
    resize3D();
    window.addEventListener("resize", resize3D);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dir = new THREE.DirectionalLight(0xffffff, 0.9);
    dir.position.set(5, 8, 5);
    scene.add(dir);
    const rim = new THREE.DirectionalLight(0x4040ff, 0.3);
    rim.position.set(-5, -3, -5);
    scene.add(rim);

    // Cube
    const faceSize = 2.2;
    const geometry = new THREE.BoxGeometry(faceSize, faceSize, faceSize);
    const materials = experiences.map(
      (exp, i) =>
        new THREE.MeshStandardMaterial({
          map: makeFaceTexture(exp, i),
          roughness: 0.3,
          metalness: 0.15,
        }),
    );
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    const edgesMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.08,
    });
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      edgesMat,
    );
    cube.add(edges);

    // Invisible, slightly larger proxy used only for raycasting. Foreshortened
    // faces (visible at a steep angle, which happens whenever multiple faces
    // are on screen at once) present a very thin click target; a small margin
    // here makes clicks land reliably without changing anything visual.
    const hitGeometry = new THREE.BoxGeometry(
      faceSize * 1.04,
      faceSize * 1.04,
      faceSize * 1.04,
    );
    const hitMesh = new THREE.Mesh(
      hitGeometry,
      new THREE.MeshBasicMaterial({ visible: false }),
    );
    cube.add(hitMesh);

    sceneRef.current = { renderer, scene, camera, cube };

    // Raycaster
    const raycaster = new THREE.Raycaster();
    const mouse2 = new THREE.Vector2();
    // Toggle to true (or set window.__cubeDebug = true in the browser console)
    // to log every click attempt — useful if clicks ever silently miss again.
    const DEBUG = false;

    function handleClick(cx: number, cy: number) {
      const debugOn = DEBUG || (window as any).__cubeDebug;
      const rect = wrap!.getBoundingClientRect();
      mouse2.x = ((cx - rect.left) / rect.width) * 2 - 1;
      mouse2.y = -((cy - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse2, camera);
      const hits = raycaster.intersectObject(hitMesh, false);
      if (debugOn)
        console.log(
          "[ExperienceCube] click ndc=",
          mouse2.toArray(),
          "hits=",
          hits.length,
        );
      if (hits.length === 0) return;

      // Use the nearest hit's face normal (in the cube's local space) to
      // determine which of the 6 faces was clicked. This is more robust
      // than trusting `face.materialIndex` directly: it sidesteps any
      // ambiguity when multiple faces are visible on screen at once and
      // a ray grazes near a shared edge/corner between them.
      const hit = hits[0];
      if (!hit.face) return;

      const localNormal = hit.face.normal.clone();
      // `face.normal` is already in the geometry's local (object) space,
      // unaffected by the mesh's current world rotation — so this mapping
      // stays correct regardless of how the cube is currently oriented.
      const ax = Math.abs(localNormal.x);
      const ay = Math.abs(localNormal.y);
      const az = Math.abs(localNormal.z);

      let idx: number;
      if (ax >= ay && ax >= az) {
        idx = localNormal.x > 0 ? 0 : 1; // +x : -x
      } else if (ay >= ax && ay >= az) {
        idx = localNormal.y > 0 ? 2 : 3; // +y : -y
      } else {
        idx = localNormal.z > 0 ? 4 : 5; // +z : -z
      }

      if (debugOn) console.log("[ExperienceCube] resolved face idx=", idx);
      setActiveExp(experiences[idx]);
    }

    // ── Pointer events (unified mouse + touch + pen) ─────────────────────────
    // We deliberately avoid the native `click` event: browsers only fire `click`
    // if pointerdown AND pointerup land on the same element, which silently
    // breaks if the cursor drifts even slightly past the element's edge mid-click.
    // Deciding click-vs-drag ourselves inside pointerup is far more reliable.
    const DRAG_THRESHOLD = 6; // px — total movement allowed before it counts as a drag
    let downPos = { x: 0, y: 0 };
    let activePointerId: number | null = null;

    function onPointerDown(e: PointerEvent) {
      if (stateRef.current.isModalOpen) return;
      stateRef.current.isDragging = true;
      stateRef.current.dragMoved = false;
      stateRef.current.prevMouse = { x: e.clientX, y: e.clientY };
      stateRef.current.velocity = { x: 0, y: 0 };
      downPos = { x: e.clientX, y: e.clientY };
      activePointerId = e.pointerId;
      // Capture so we keep receiving move/up events even if the pointer
      // leaves the wrap element's bounds mid-drag.
      wrap!.setPointerCapture?.(e.pointerId);
    }

    function onPointerMove(e: PointerEvent) {
      const s = stateRef.current;
      if (!s.isDragging || s.isModalOpen || e.pointerId !== activePointerId)
        return;
      const dx = e.clientX - s.prevMouse.x;
      const dy = e.clientY - s.prevMouse.y;
      const totalDx = e.clientX - downPos.x;
      const totalDy = e.clientY - downPos.y;
      if (
        Math.abs(totalDx) > DRAG_THRESHOLD ||
        Math.abs(totalDy) > DRAG_THRESHOLD
      ) {
        s.dragMoved = true;
      }
      s.velocity.y = dx * 0.01;
      s.velocity.x = dy * 0.01;
      s.currentRotation.y += dx * 0.01;
      s.currentRotation.x += dy * 0.01;
      s.prevMouse = { x: e.clientX, y: e.clientY };
    }

    function onPointerUp(e: PointerEvent) {
      const s = stateRef.current;
      if (e.pointerId !== activePointerId) return;
      s.isDragging = false;
      activePointerId = null;
      if (!s.isModalOpen && !s.dragMoved) {
        handleClick(e.clientX, e.clientY);
      }
    }

    function onPointerCancel(e: PointerEvent) {
      if (e.pointerId !== activePointerId) return;
      stateRef.current.isDragging = false;
      activePointerId = null;
    }

    wrap.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerCancel);

    // ── Animation loop ───────────────────────────────────────────────────────
    let rafId: number;
    function animate() {
      rafId = requestAnimationFrame(animate);
      const s = stateRef.current;

      if (!s.isDragging && !s.isModalOpen) {
        s.velocity.x *= 0.96;
        s.velocity.y *= 0.96;
        const speed = Math.sqrt(s.velocity.x ** 2 + s.velocity.y ** 2);
        if (speed < 0.0008) {
          s.currentRotation.y += 0.004;
          s.currentRotation.x += 0.0015;
        } else {
          s.currentRotation.x += s.velocity.x;
          s.currentRotation.y += s.velocity.y;
        }
      }

      if (s.isModalOpen) {
        s.currentRotation.y += 0.003;
      }

      cube.rotation.x += (s.currentRotation.x - cube.rotation.x) * 0.08;
      cube.rotation.y += (s.currentRotation.y - cube.rotation.y) * 0.08;

      renderer.render(scene, camera);
    }
    animate();

    // ── Cleanup ──────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize3D);
      wrap.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerCancel);
      renderer.dispose();
      geometry.dispose();
      hitGeometry.dispose();
      (hitMesh.material as THREE.Material).dispose();
      materials.forEach((m) => {
        m.map?.dispose();
        m.dispose();
      });
    };
  }, []); // run once on mount

  const isOpen = activeExp !== null;

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap');
        @keyframes hudPulse { 0%,100%{opacity:.3} 50%{opacity:.9} }
        * { box-sizing: border-box; }
      `}</style>

      {/* Stars */}
      <Stars />

      {/* Three.js canvas */}
      <div
        ref={wrapRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          cursor: "grab",
          transition: "opacity 0.4s ease, filter 0.4s ease",
          opacity: isOpen ? 0.15 : 1,
          filter: isOpen ? "blur(4px)" : "none",
          pointerEvents: isOpen ? "none" : "auto",
        }}
      >
        <canvas
          ref={threeRef}
          style={{ display: "block", width: "100%", height: "100%" }}
        />
      </div>

      {/* HUD */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          padding: "28px 36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pointerEvents: "none",
          opacity: isOpen ? 0 : 1,
          transition: "opacity 0.3s",
        }}
      >
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "#e8e8f0",
            textTransform: "uppercase",
            opacity: 0.9,
          }}
        >
          Irfan Wani
        </div>
        <div
          style={{
            fontSize: 12,
            color: "#6b6b8a",
            letterSpacing: "0.05em",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#6b6b8a",
              opacity: 0.5,
              animation: "hudPulse 2s ease-in-out infinite",
            }}
          />
          Click a face to explore
        </div>
      </div>

      {/* Modal */}
      <Modal exp={activeExp} onClose={closeModal} />
    </>
  );
}
