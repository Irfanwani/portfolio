import { useEffect, useRef, useCallback, useState } from "react";
import "./App.css";
import Footer from "./pages/footer";
import ContactMe from "./pages/links";
import Skills from "./pages/skills";
import Exp from "./pages/exp";
import Home from "./pages/home";

function App() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const cursorPos = useRef({ x: 0, y: 0, ringX: 0, ringY: 0 });

  const [typedText, setTypedText] = useState("");
  const targetText = "Engineering Reality";

  // ==================== 3D SPACE BACKGROUND ====================
  const initSpace = useCallback(() => {
    const canvas: any = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width: any, height: any;
    let stars: any = [];
    let shootingStars: any = [];
    let nebulaClouds: any = [];
    let time = 0;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // 3D Star with depth
    class Star3D {
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
      getStarColor() {
        const colors = [
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
        const sx = width / 2 + (this.x - mx) * scale;
        const sy = height / 2 + (this.y - my + scrollOffset) * scale;
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

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, drawSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${alpha})`;
        ctx.fill();

        // Glow for close/bright stars
        if (this.z < 800 && alpha > 0.5) {
          const glowSize = drawSize * 6;
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, glowSize, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(
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
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }
    }

    // Nebula cloud for depth
    class NebulaCloud {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 300 + 200;
        this.color = this.getColor();
        this.opacity = Math.random() * 0.08 + 0.02;
        this.driftX = (Math.random() - 0.5) * 0.2;
        this.driftY = (Math.random() - 0.5) * 0.2;
      }
      getColor() {
        const colors = [
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
        const gradient = ctx.createRadialGradient(
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
        ctx.fillStyle = gradient;
        ctx.fillRect(
          this.x - this.radius,
          this.y - this.radius,
          this.radius * 2,
          this.radius * 2,
        );
      }
    }

    // Shooting star
    class ShootingStar {
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
        const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.life})`);
        gradient.addColorStop(0.3, `rgba(200, 195, 255, ${this.life * 0.8})`);
        gradient.addColorStop(1, `rgba(124, 111, 255, 0)`);
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Head glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.life})`;
        ctx.fill();
      }
    }

    // Initialize
    for (let i = 0; i < 400; i++) {
      stars.push(new Star3D());
    }
    for (let i = 0; i < 5; i++) {
      nebulaClouds.push(new NebulaCloud());
    }

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
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
      ctx.fillStyle = "rgba(5, 5, 8, 0.3)";
      ctx.fillRect(0, 0, width, height);

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

    let rafId;
    function updateCursor() {
      cursorPos.current.ringX +=
        (cursorPos.current.x - cursorPos.current.ringX) * 0.15;
      cursorPos.current.ringY +=
        (cursorPos.current.y - cursorPos.current.ringY) * 0.15;
      dot.style.left = cursorPos.current.x - 4 + "px";
      dot.style.top = cursorPos.current.y - 4 + "px";
      ring.style.left = cursorPos.current.ringX - 20 + "px";
      ring.style.top = cursorPos.current.ringY - 20 + "px";
      rafId = requestAnimationFrame(updateCursor);
    }

    const handleMouseMove = (e) => {
      cursorPos.current.x = e.clientX;
      cursorPos.current.y = e.clientY;
    };
    document.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(updateCursor);

    // Hover effects
    const hoverElements = document.querySelectorAll(
      "a, button, .tech-item, .role-pill",
    );
    const handleEnter = () => ring.classList.add("hovering");
    const handleLeave = () => ring.classList.remove("hovering");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
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
    let timerId;
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
      const line1 = document.querySelector(".hero-title .line1");
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
    const handleClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
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
        orb.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
