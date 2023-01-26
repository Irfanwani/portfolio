import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { FontLoader } from "three/examples/jsm/loaders/fontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

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

  const fontLoader = new FontLoader();

  fontLoader.load(
    "node_modules/three/examples/fonts/droid/droid_sans_bold.typeface.json",
    (droidFont) => {
      const textGeometry = new TextGeometry("Irfan\nwani", {
        height: 0,
        size: 3,
        font: droidFont,
      });

      const textMaterial = new THREE.MeshBasicMaterial({color: 'rgb(198, 185, 158)'});
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);

      textMesh.position.x = -25;
      textMesh.position.y = 10;

      scene.add(textMesh);
    }
  );

  const geometry = new THREE.TorusGeometry(10, 3, 16, 100);

  const material = new THREE.MeshStandardMaterial({
    color: 0xff6347,
  });

  const torus = new THREE.Mesh(geometry, material);

  scene.add(torus);

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
      .map(() => THREE.MathUtils.randFloatSpread(200));

    star.position.set(x, y, z);

    scene.add(star);
  }

  Array(400).fill(0).forEach(addStar);

  // DP

  const dpTexture = textureloader.load("src/assets/dp.png");

  const dpgeometry = new THREE.BoxGeometry(3, 3.5, 3.5);
  const dpmaterial = new THREE.MeshBasicMaterial({ map: dpTexture });
  const irfan = new THREE.Mesh(dpgeometry, dpmaterial);

  scene.add(irfan);

  irfan.position.z = 40;
  irfan.position.x = 20;

  // sphere object
  const sphereTexture = textureloader.load("src/assets/colorsmoke.jpeg");

  const spheregeometry = new THREE.SphereGeometry(50, 50, 50);
  const spherematerial = new THREE.MeshBasicMaterial({
    map: sphereTexture,
  });

  const sphere = new THREE.Mesh(spheregeometry, spherematerial);

  scene.add(sphere);

  sphere.position.z = 300;
  sphere.position.x = -10;

  const moveCamera = () => {
    const t = window.scrollY;
    sphere.rotation.x += 0.05;
    sphere.rotation.y += 0.05;
    sphere.rotation.z += 0.05;

    irfan.rotation.y += 0.01;
    irfan.rotation.z += 0.01;

    console.log(t, 'ttttt')

    camera.position.x = t/3;
    camera.position.y = t/3;
  };

  document.body.onscroll = moveCamera;

  const animate = () => {
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  };

  animate();
};
