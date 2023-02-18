import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { sphereGen } from "./sphere";

import rings from "../assets/saturn_ring_alpha.png";
import saturn from "../assets/saturn.jpg";

import jupiter from "../assets/jupiter.jpeg";
import marsimage from "../assets/mars.jpg";

export const threemain = () => {
  const scene = new THREE.Scene();

  const textureloader = new THREE.TextureLoader();

  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10000000
  );

  const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("bg")!,
    antialias: true,
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  camera.position.setZ(30);

  const handleResize = () => {
    const { innerHeight, innerWidth } = window;
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  };

  window.addEventListener("resize", handleResize);

  const fontLoader = new FontLoader();

  const textGen = (
    text: string,
    x: number,
    y: number,
    z: number,
    color: string,
    size: number
  ) => {
    fontLoader.load("/droid_sans_bold.typeface.json", (droidFont: Font) => {
      const textGeometry = new TextGeometry(text, {
        height: 0,
        size,
        font: droidFont,
      });

      const textMaterial = new THREE.MeshBasicMaterial({
        color,
      });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);

      textMesh.position.x = x;
      textMesh.position.y = y;
      textMesh.position.z = z;

      textMesh.name = text;

      scene.add(textMesh);
    });
  };

  const { innerHeight, innerWidth } = window;

  let x = innerWidth < innerHeight ? -5 : -20;
  let size = innerWidth < innerHeight ? 1 : 2;

  textGen("Irfan\nwani", x, 17, 0, "rgb(198, 185, 158)", size);

  const satrings = textureloader.load(rings);

  const geometry = new THREE.TorusGeometry(10, 3, 2, 100);

  const material = new THREE.MeshStandardMaterial({
    map: satrings,
  });

  const torus = new THREE.Mesh(geometry, material);

  scene.add(torus);

  const sattexture = textureloader.load(saturn);

  const sat = sphereGen(5, 32, 32, sattexture, scene);

  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(5, 5, 5);

  const ambientLight = new THREE.AmbientLight(0xffffff);

  scene.add(pointLight, ambientLight);

  const controls = new OrbitControls(camera, renderer.domElement);

  controls.enabled = false;

  const spgeometry = new THREE.SphereGeometry(0.25, 24, 24);
  const spmaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

  function addStar() {
    const star = new THREE.Mesh(spgeometry, spmaterial);

    const [x, y, z] = Array(3)
      .fill(0)
      .map(() => THREE.MathUtils.randFloatSpread(2000));

    star.position.set(x, y, z);

    scene.add(star);
  }

  Array(4000).fill(0).forEach(addStar);

  // sphere object
  const sphereTexture = textureloader.load(jupiter);

  const sphere = sphereGen(200, 50, 50, sphereTexture, scene, 0x45454544);

  sphere.position.z = 300;
  sphere.position.x = -10;

  // MARS
  const marstexture = textureloader.load(marsimage);

  const mars = sphereGen(30, 50, 50, marstexture, scene);

  mars.position.z = -70;
  mars.position.x = 500;
  mars.position.y = -50;

  const moveCamera = () => {
    // const textMesh = scene.getObjectByName("Experience")!;
    const t = window.scrollY;
    sphere.rotation.x += 0.05;
    sphere.rotation.y += 0.05;
    sphere.rotation.z += 0.05;

    mars.rotation.x += 0.01;
    mars.rotation.y += 0.008;
    mars.rotation.z += 0.01;

    camera.position.x = -t / 10;
    camera.position.y = -t / 10;
  };

  document.body.onscroll = moveCamera;

  const animate = () => {
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    sat.rotation.x += 0.01;
    sat.rotation.y += 0.005;
    sat.rotation.z += 0.01;

    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  };

  animate();
};
