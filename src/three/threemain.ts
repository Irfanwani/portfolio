import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import starfield from "./starfield";
import { cometPathPoint, cometGroup, cometHistory, TRAIL_LENGTH, trailGeometry, cometTrail } from "./comets";


export const threemain = () => {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10000000,
  );

  const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("bg")!,
    antialias: true,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Caps high-res scaling to preserve framerate
  renderer.setSize(window.innerWidth, window.innerHeight);
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.4,
    0.5,
    0.85,
  );
  composer.addPass(bloomPass);


  camera.position.setZ(30);

  const handleResize = () => {
    const { innerHeight, innerWidth } = window;
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    composer.setSize(innerWidth, innerHeight);
  };

  window.addEventListener("resize", handleResize);

  const fontLoader = new FontLoader();

  const textGen = (
    text: string,
    x: number,
    y: number,
    z: number,
    color: string,
    size: number,
  ) => {
    fontLoader.load("/droid_sans_bold.typeface.json", (droidFont: Font) => {
      const textGeometry = new TextGeometry(text, {
        size,
        font: droidFont,
        depth: 0,
      });

      const textMaterial = new THREE.MeshBasicMaterial({
        color,
      });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);

      // Flip the text so its front face faces the camera at the initial orbit position.
      textMesh.rotation.y = Math.PI;

      textMesh.position.x = x;
      textMesh.position.y = y;
      textMesh.position.z = z;

      textMesh.name = text;

      scene.add(textMesh);
    });
  };

  const { innerHeight, innerWidth } = window;

  let x = innerWidth < innerHeight ? -5 : 20;
  let size = innerWidth < innerHeight ? 1 : 2;

  // textGen("Irfan wani", x, 10, 0, "rgb(198, 185, 158)", size);

  // ---------------------------------------------------------------------
  // LIGHTING
  // ---------------------------------------------------------------------
  const pointLight = new THREE.PointLight(0xffffff, 2);
  pointLight.position.set(5, 5, 5);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(pointLight, ambientLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enabled = false;

  // ---------------------------------------------------------------------
  // ULTRA-FAST BATCHED STARFIELD
  // ---------------------------------------------------------------------
  scene.add(starfield);

// ---------------------------------------------------------------------
  // COMET — glowing head + fading particle trail
  // ---------------------------------------------------------------------
  let cometT = 0;
  // scene.add(cometGroup);
  // scene.add(cometTrail);

  // ---------------------------------------------------------------------
  // SCROLL-DRIVEN CAMERA ORBIT
  // ---------------------------------------------------------------------
  const orbitTarget = new THREE.Vector3(0, 0, 0);
  const ORBIT_START_ANGLE = -0.6;
  const ORBIT_END_ANGLE = 2.4;
  const ORBIT_RADIUS_NEAR = 45;
  const ORBIT_RADIUS_FAR = 90;
  const ORBIT_ELEVATION_LOW = 8;
  const ORBIT_ELEVATION_HIGH = 55;
  let scrollProgress = 0;

  const getScrollProgress = () => {
    const doc = document.documentElement;
    const scrollTop =
      window.scrollY || doc.scrollTop || document.body.scrollTop || 0;

    const scrollHeight =
      Math.max(doc.scrollHeight, document.body.scrollHeight) -
      window.innerHeight;
    if (scrollHeight <= 0) return 0;
    return THREE.MathUtils.clamp(scrollTop / scrollHeight, 0, 1);
  };
  const moveCamera = () => {
    scrollProgress = getScrollProgress();
    const angle = THREE.MathUtils.lerp(
      ORBIT_START_ANGLE,
      ORBIT_END_ANGLE,
      scrollProgress,
    );
    const radius = THREE.MathUtils.lerp(
      ORBIT_RADIUS_NEAR,
      ORBIT_RADIUS_FAR,
      scrollProgress,
    );
    const elevation = THREE.MathUtils.lerp(
      ORBIT_ELEVATION_LOW,
      ORBIT_ELEVATION_HIGH,
      scrollProgress,
    );
    camera.position.x = orbitTarget.x + Math.cos(angle) * radius;
    camera.position.z = orbitTarget.z + Math.sin(angle) * radius;
    camera.position.y = orbitTarget.y + elevation;
    camera.lookAt(orbitTarget);
    controls.target.copy(orbitTarget);
    camera.fov = 70 + scrollProgress * 12;
    camera.updateProjectionMatrix();
  };
  window.addEventListener("scroll", moveCamera, { passive: true });
  moveCamera();

  let lastScrollProgress = scrollProgress;
  let idleRotation = 0;
  const IDLE_ROTATION_SPEED = 0.00002; // slower base rotation when not actively scrolling
  const SCROLL_ROTATION_SPEED = 0.00005; // faster rotation during active scrolling
  const ROTATION_DECAY = 0.96; // decay factor for smooth transition between scroll and idle rotation

  const animate = (timestamp: number) => {
    requestAnimationFrame(animate);

    const scrollDelta = Math.abs(scrollProgress - lastScrollProgress);
    if (scrollDelta > 0.0005) {
      idleRotation +=
        Math.sign(scrollProgress - lastScrollProgress) * SCROLL_ROTATION_SPEED;
    } else {
      idleRotation += IDLE_ROTATION_SPEED;
    }
    idleRotation *= ROTATION_DECAY;
    lastScrollProgress = scrollProgress;

    // Slow background rotation that follows scroll direction
    starfield.rotation.y += idleRotation;

    // Comet logic update path tracing loop
    cometT += 0.003;
    const scrollNudgedT = cometT + scrollProgress * 2.0;
    const headPos = cometPathPoint(scrollNudgedT, scrollProgress);
    cometGroup.position.copy(headPos);
    cometHistory.unshift(headPos.clone());
    if (cometHistory.length > TRAIL_LENGTH) cometHistory.pop();
    const posAttr = trailGeometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < TRAIL_LENGTH; i++) {
      const p = cometHistory[i] || headPos;
      posAttr.setXYZ(i, p.x, p.y, p.z);
    }
    posAttr.needsUpdate = true; // Fixed uniform data flow using high precision native millisecond metrics
    controls.update();
    composer.render();
  };

  // Start the frame animation cycle loop with initial native performance metric
  requestAnimationFrame(animate);
};
