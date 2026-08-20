import { useEffect, useRef, useCallback, useState } from "react";
import "./App.css";
import Footer from "./pages/footer";
import ContactMe from "./pages/links";
import Skills from "./pages/skills";
import Exp from "./pages/exp";
import Home from "./pages/home";

type RGBColor = [number, number, number];

interface TrailParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: RGBColor;
}

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  const cursorPos = useRef({ x: 0, y: 0, ringX: 0, ringY: 0 });

  const [typedText, setTypedText] = useState("");
  const targetText = "Engineering Reality";

  // ==================== 3D SPACE BACKGROUND ====================
  const initSpace = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const canvasElement = canvas;
    const ctx = canvasElement.getContext("2d");
    if (!ctx) return;

    const drawingContext = ctx;

    let width = 0;
    let height = 0;
    let stars: Star3D[] = [];
    let shootingStars: ShootingStar[] = [];
    let nebulaClouds: NebulaCloud[] = [];
    let trailParticles: TrailParticle[] = [];
    let time = 0;
    let mouseVx = 0;
    let mouseVy = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;

    function resize() {
      width = canvasElement.width = window.innerWidth;
      height = canvasElement.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // 3D Star with depth
    class Star3D {
      x = 0;
      y = 0;
      z = 0;
      size = 0;
      baseOpacity = 0;
      twinkleSpeed = 0;
      twinklePhase = 0;
      color: RGBColor = [0, 0, 0];
      screenX = 0;
      screenY = 0;
      screenScale = 1;

      constructor() {
        this.reset(true);
      }
      reset(randomZ = false) {
        this.x = (Math.random() - 0.5) * width * 2;
        this.y = (Math.random() - 0.5) * height * 2;
        this.z = randomZ ? Math.random() * 2000 : 2000;
        this.size = Math.random() * 1.5 + 0.3;
        this.baseOpacity = Math.random() * 0.8 + 0.2;
        this.twinkleSpeed = Math.random() * 0.03 + 0.005;
        this.twinklePhase = Math.random() * Math.PI * 2;
        this.color = this.getStarColor();
      }
      getStarColor(): RGBColor {
        const colors: RGBColor[] = [
          [200, 195, 255], // blue-white
          [255, 240, 200], // warm white
          [180, 200, 255], // cool blue
          [255, 220, 180], // orange tint
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        // Move star toward camera (decrease z)
        this.z -= 0.8 + (2000 - this.z) * 0.0005;

        // Mouse parallax - stronger effect
        const mx = (mouseRef.current.x - width / 2) * 0.3;
        const my = (mouseRef.current.y - height / 2) * 0.3;

        // Scroll parallax - stars move with scroll
        const scrollOffset = scrollRef.current * 0.1;

        // Reset if passed camera
        if (this.z <= 1) {
          this.reset();
          this.z = 2000;
        }

        this.twinklePhase += this.twinkleSpeed;
      }
      getScreenPos() {
        const mx = (mouseRef.current.x - width / 2) * 0.3;
        const my = (mouseRef.current.y - height / 2) * 0.3;
        const scrollOffset = scrollRef.current * 0.05;

        const perspective = 400;
        const scale = perspective / (perspective + this.z);
        let sx = width / 2 + (this.x - mx) * scale;
        let sy = height / 2 + (this.y - my + scrollOffset) * scale;

        // Mouse proximity repulsion for nearby stars
        if (this.z < 600) {
          const dx = sx - mouseRef.current.x;
          const dy = sy - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && dist > 0) {
            const force = (120 - dist) / 120;
            sx += (dx / dist) * force * 25;
            sy += (dy / dist) * force * 25;
          }
        }

        this.screenX = sx;
        this.screenY = sy;
        this.screenScale = scale;
        return { x: sx, y: sy, scale, z: this.z };
      }
      draw() {
        const pos = this.getScreenPos();
        if (
          pos.x < -50 ||
          pos.x > width + 50 ||
          pos.y < -50 ||
          pos.y > height + 50
        )
          return;

        const twinkle = Math.sin(this.twinklePhase) * 0.3 + 0.7;
        const depthAlpha = Math.max(0, 1 - this.z / 2000);
        const alpha = this.baseOpacity * twinkle * depthAlpha;
        const drawSize = this.size * pos.scale * 2;

        if (drawSize < 0.3) return;

        drawingContext.beginPath();
        drawingContext.arc(pos.x, pos.y, drawSize, 0, Math.PI * 2);
        drawingContext.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${alpha})`;
        drawingContext.fill();

        // Glow for close/bright stars
        if (this.z < 800 && alpha > 0.5) {
          const glowSize = drawSize * 6;
          drawingContext.beginPath();
          drawingContext.arc(pos.x, pos.y, glowSize, 0, Math.PI * 2);
          const gradient = drawingContext.createRadialGradient(
            pos.x,
            pos.y,
            0,
            pos.x,
            pos.y,
            glowSize,
          );
          gradient.addColorStop(
            0,
            `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${alpha * 0.15})`,
          );
          gradient.addColorStop(
            1,
            `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, 0)`,
          );
          drawingContext.fillStyle = gradient;
          drawingContext.fill();
        }
      }
    }

    // Nebula cloud for depth
    class NebulaCloud {
      x = 0;
      y = 0;
      radius = 0;
      color: RGBColor = [0, 0, 0];
      opacity = 0;
      driftX = 0;
      driftY = 0;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 300 + 200;
        this.color = this.getColor();
        this.opacity = Math.random() * 0.08 + 0.02;
        this.driftX = (Math.random() - 0.5) * 0.2;
        this.driftY = (Math.random() - 0.5) * 0.2;
      }
      getColor(): RGBColor {
        const colors: RGBColor[] = [
          [124, 111, 255], // purple
          [0, 212, 170], // teal
          [100, 80, 200], // deep purple
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.driftX;
        this.y += this.driftY + scrollRef.current * 0.002;
        if (this.x < -this.radius) this.x = width + this.radius;
        if (this.x > width + this.radius) this.x = -this.radius;
        if (this.y < -this.radius) this.y = height + this.radius;
        if (this.y > height + this.radius) this.y = -this.radius;
      }
      draw() {
        const gradient = drawingContext.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius,
        );
        gradient.addColorStop(
          0,
          `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${this.opacity})`,
        );
        gradient.addColorStop(
          0.5,
          `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${this.opacity * 0.5})`,
        );
        gradient.addColorStop(
          1,
          `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, 0)`,
        );
        drawingContext.fillStyle = gradient;
        drawingContext.fillRect(
          this.x - this.radius,
          this.y - this.radius,
          this.radius * 2,
          this.radius * 2,
        );
      }
    }

    // Shooting star
    class ShootingStar {
      x = 0;
      y = 0;
      length = 0;
      speed = 0;
      angle = 0;
      life = 0;
      decay = 0;

      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height * 0.4;
        this.length = Math.random() * 120 + 60;
        this.speed = Math.random() * 12 + 6;
        this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.5;
        this.life = 1;
        this.decay = Math.random() * 0.01 + 0.008;
      }
      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.life -= this.decay;
      }
      draw() {
        if (this.life <= 0) return;
        const tailX = this.x - Math.cos(this.angle) * this.length;
        const tailY = this.y - Math.sin(this.angle) * this.length;
        const gradient = drawingContext.createLinearGradient(
          this.x,
          this.y,
          tailX,
          tailY,
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.life})`);
        gradient.addColorStop(0.3, `rgba(200, 195, 255, ${this.life * 0.8})`);
        gradient.addColorStop(1, `rgba(124, 111, 255, 0)`);
        drawingContext.beginPath();
        drawingContext.moveTo(this.x, this.y);
        drawingContext.lineTo(tailX, tailY);
        drawingContext.strokeStyle = gradient;
        drawingContext.lineWidth = 2;
        drawingContext.stroke();

        // Head glow
        drawingContext.beginPath();
        drawingContext.arc(this.x, this.y, 3, 0, Math.PI * 2);
        drawingContext.fillStyle = `rgba(255, 255, 255, ${this.life})`;
        drawingContext.fill();
      }
    }

    // Initialize
    for (let i = 0; i < 400; i++) {
      stars.push(new Star3D());
    }
    for (let i = 0; i < 5; i++) {
      nebulaClouds.push(new NebulaCloud());
    }

    // Mouse tracking with velocity
    const handleMouseMove = (e: MouseEvent) => {
      mouseVx = e.clientX - lastMouseX;
      mouseVy = e.clientY - lastMouseY;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      // Spawn trail particles based on mouse speed
      const speed = Math.sqrt(mouseVx * mouseVx + mouseVy * mouseVy);
      if (speed > 3) {
        const count = Math.min(Math.floor(speed / 5), 3);
        const colors: RGBColor[] = [[124, 111, 255], [0, 212, 170], [200, 195, 255]];
        for (let i = 0; i < count; i++) {
          trailParticles.push({
            x: e.clientX + (Math.random() - 0.5) * 10,
            y: e.clientY + (Math.random() - 0.5) * 10,
            vx: (Math.random() - 0.5) * 2 - mouseVx * 0.1,
            vy: (Math.random() - 0.5) * 2 - mouseVy * 0.1,
            life: 40 + Math.random() * 30,
            maxLife: 70,
            size: Math.random() * 2 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
          });
        }
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    // Scroll tracking
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    // Animation loop
    function animate() {
      // Clear with slight trail for motion blur effect
      drawingContext.fillStyle = "rgba(5, 5, 8, 0.3)";
      drawingContext.fillRect(0, 0, width, height);

      // Draw nebula clouds first (background layer)
      nebulaClouds.forEach((cloud) => {
        cloud.update();
        cloud.draw();
      });

      // Sort stars by z for proper depth rendering
      stars.sort((a, b) => b.z - a.z);

      // Draw stars
      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      // Random shooting stars
      if (Math.random() < 0.008) {
        shootingStars.push(new ShootingStar());
      }
      shootingStars = shootingStars.filter((s) => s.life > 0);
      shootingStars.forEach((s) => {
        s.update();
        s.draw();
      });

      // Constellation lines between nearby close stars
      const closeStars = stars.filter((s) => s.z < 500 && s.screenX > 0 && s.screenX < width && s.screenY > 0 && s.screenY < height);
      for (let i = 0; i < closeStars.length; i++) {
        for (let j = i + 1; j < closeStars.length; j++) {
          const a = closeStars[i];
          const b = closeStars[j];
          const dx = a.screenX - b.screenX;
          const dy = a.screenY - b.screenY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const lineAlpha = (1 - dist / 100) * 0.12;
            const depthAvg = (a.z + b.z) / 2;
            const depthFade = Math.max(0, 1 - depthAvg / 500);
            drawingContext.beginPath();
            drawingContext.moveTo(a.screenX, a.screenY);
            drawingContext.lineTo(b.screenX, b.screenY);
            drawingContext.strokeStyle = `rgba(124, 111, 255, ${lineAlpha * depthFade})`;
            drawingContext.lineWidth = 0.5;
            drawingContext.stroke();
          }
        }
      }

      // Cursor trail particles
      for (let i = trailParticles.length - 1; i >= 0; i--) {
        const p = trailParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.97;
        p.vy *= 0.97;
        p.life -= 1;
        if (p.life <= 0) {
          trailParticles.splice(i, 1);
          continue;
        }
        const lifeRatio = p.life / p.maxLife;
        const pAlpha = lifeRatio * 0.6;
        const pSize = p.size * lifeRatio;
        drawingContext.beginPath();
        drawingContext.arc(p.x, p.y, pSize, 0, Math.PI * 2);
        drawingContext.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${pAlpha})`;
        drawingContext.fill();
        // Particle glow
        if (pSize > 0.8) {
          const glowGrad = drawingContext.createRadialGradient(p.x, p.y, 0, p.x, p.y, pSize * 4);
          glowGrad.addColorStop(0, `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${pAlpha * 0.3})`);
          glowGrad.addColorStop(1, `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, 0)`);
          drawingContext.beginPath();
          drawingContext.arc(p.x, p.y, pSize * 4, 0, Math.PI * 2);
          drawingContext.fillStyle = glowGrad;
          drawingContext.fill();
        }
      }
      // Limit trail particles
      if (trailParticles.length > 150) {
        trailParticles = trailParticles.slice(-150);
      }

      time += 0.016;
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ==================== CUSTOM CURSOR ====================
  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    const dotElement = dot;
    const ringElement = ring;

    let rafId = 0;
    function updateCursor() {
      cursorPos.current.ringX +=
        (cursorPos.current.x - cursorPos.current.ringX) * 0.15;
      cursorPos.current.ringY +=
        (cursorPos.current.y - cursorPos.current.ringY) * 0.15;
      dotElement.style.left = cursorPos.current.x - 4 + "px";
      dotElement.style.top = cursorPos.current.y - 4 + "px";
      ringElement.style.left = cursorPos.current.ringX - 20 + "px";
      ringElement.style.top = cursorPos.current.ringY - 20 + "px";
      rafId = window.requestAnimationFrame(updateCursor);
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorPos.current.x = e.clientX;
      cursorPos.current.y = e.clientY;
    };
    document.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(updateCursor);

    // Hover effects
    const hoverElements = document.querySelectorAll(
      "a, button, .tech-item, .role-pill",
    );
    const handleEnter = () => ringElement.classList.add("hovering");
    const handleLeave = () => ringElement.classList.remove("hovering");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.cancelAnimationFrame(rafId);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  // ==================== SCROLL REVEAL ====================
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal, .exp-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ==================== TYPING EFFECT ====================
  useEffect(() => {
    let cancelled = false;
    let timerId = 0;
    let charIndex = 0;

    const typeWriter = () => {
      if (cancelled) return;

      setTypedText(targetText.slice(0, charIndex + 1));
      charIndex += 1;

      if (charIndex < targetText.length) {
        timerId = window.setTimeout(typeWriter, 100);
      }
    };

    timerId = window.setTimeout(typeWriter, 1500);

    const glitchTimer = window.setTimeout(() => {
      const line1 = document.querySelector<HTMLElement>(".hero-title .line1");
      if (line1) {
        line1.style.textShadow = "2px 0 var(--accent), -2px 0 var(--accent2)";
        window.setTimeout(() => {
          line1.style.textShadow = "none";
        }, 150);
      }
    }, 1200);

    return () => {
      cancelled = true;
      clearTimeout(timerId);
      clearTimeout(glitchTimer);
    };
  }, [targetText]);

  // ==================== SMOOTH SCROLL ====================
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });
    };
  }, []);

  // ==================== PARALLAX ORBS ====================
  useEffect(() => {
    const orbs = document.querySelectorAll(".orb");
    const handleScroll = () => {
      const scrollY = window.scrollY;
      orbs.forEach((orb, i) => {
        const speed = (i + 1) * 0.1;
        (orb as HTMLElement).style.transform =
          `translateY(${scrollY * speed}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ==================== MAGNETIC CURSOR ====================
  useEffect(() => {
    if ("ontouchstart" in window) return;

    const magneticElements = document.querySelectorAll<HTMLElement>(
      ".btn-primary, .btn-secondary, .contact-link",
    );

    const cleanups: (() => void)[] = [];

    magneticElements.forEach((el) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          el.style.transform = `translate(${dx * 0.35}px, ${dy * 0.35}px)`;
        } else {
          el.style.transform = "";
        }
      };

      const handleMouseLeave = () => {
        el.style.transform = "";
      };

      document.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);

      cleanups.push(() => {
        document.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  // ==================== 3D TILT CARDS ====================
  useEffect(() => {
    if ("ontouchstart" in window) return;

    const tiltCards = document.querySelectorAll<HTMLElement>(
      ".exp-card, .tech-category",
    );

    const cleanups: (() => void)[] = [];

    tiltCards.forEach((card) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

        // Dynamic gradient highlight following cursor
        const gradX = (x / rect.width) * 100;
        const gradY = (y / rect.height) * 100;
        card.style.background = `radial-gradient(circle at ${gradX}% ${gradY}%, rgba(124, 111, 255, 0.08) 0%, var(--bg-card) 50%)`;
      };

      const handleMouseLeave = () => {
        card.style.transform = "";
        card.style.background = "";
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      cleanups.push(() => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  // ==================== GLITCH ON SCROLL ====================
  useEffect(() => {
    const titles = document.querySelectorAll<HTMLElement>(".section-title, .contact-title");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains("glitched")) {
            entry.target.classList.add("glitched");
            const el = entry.target as HTMLElement;
            el.style.transition = "none";

            const apply = (s: { ts?: string; tf?: string; cp?: string }) => {
              if (s.ts !== undefined) el.style.textShadow = s.ts;
              if (s.tf !== undefined) el.style.transform = s.tf;
              if (s.cp !== undefined) el.style.clipPath = s.cp;
            };

            // --- Burst 1: strong initial glitch ---
            setTimeout(() => apply({ ts: "5px 0 var(--accent), -5px 0 var(--accent2), 0 3px rgba(0,212,170,0.4)", tf: "translateX(4px) skewX(-4deg)" }), 0);
            setTimeout(() => apply({ cp: "inset(15% 0 25% 0)" }), 40);
            setTimeout(() => apply({ ts: "-4px 0 var(--accent2), 4px 0 var(--accent)", tf: "translateX(-6px) skewX(3deg)", cp: "inset(45% 0 5% 0)" }), 90);
            setTimeout(() => apply({ ts: "3px 0 var(--accent), -3px 0 var(--accent2)", tf: "translateX(3px)" }), 160);
            setTimeout(() => apply({ cp: "inset(5% 0 60% 0)" }), 200);
            setTimeout(() => apply({ ts: "none", tf: "none", cp: "none" }), 280);

            // --- Burst 2: second wave ---
            setTimeout(() => apply({ ts: "-6px 0 var(--accent2), 6px 0 var(--accent), 0 -2px rgba(124,111,255,0.5)", tf: "translateX(-5px) skewX(5deg) scaleY(1.02)" }), 380);
            setTimeout(() => apply({ cp: "inset(30% 0 10% 0)" }), 430);
            setTimeout(() => apply({ ts: "4px 0 var(--accent), -4px 0 var(--accent2)", tf: "translateX(4px) skewX(-2deg)", cp: "inset(0% 0 40% 0)" }), 490);
            setTimeout(() => apply({ ts: "-2px 0 var(--accent2), 2px 0 var(--accent)", tf: "translateX(-2px)" }), 560);
            setTimeout(() => apply({ cp: "inset(50% 0 0% 0)" }), 590);

            // --- Settle ---
            setTimeout(() => apply({ ts: "2px 0 var(--accent), -2px 0 var(--accent2)", tf: "translateX(1px)", cp: "none" }), 660);
            setTimeout(() => apply({ ts: "none", tf: "none", cp: "none" }), 740);
          }
        });
      },
      { threshold: 0.15 },
    );

    titles.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    initSpace();
  }, [initSpace]);

  return (
    <>
      {/* Custom Cursor */}
      <div className="cursor-dot" ref={cursorDotRef}></div>
      <div className="cursor-ring" ref={cursorRingRef}></div>

      {/* Noise Overlay */}
      <div className="noise"></div>

      {/* Floating Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* 3D Space Canvas */}
      <canvas ref={canvasRef} id="starfield"></canvas>

      {/* Navigation */}
      <nav className="nav">
        <div className="logo">
          irfan<span>.</span>wani
        </div>
        <ul className="nav-links">
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#tech">Tech Stack</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <Home typedText={typedText} />

      {/* Experience Section */}
      <Exp />
      {/* Tech Stack Section */}
      <Skills />

      {/* Contact Section */}
      <ContactMe />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
