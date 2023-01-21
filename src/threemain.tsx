import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const threemain = () => {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("bg")!,
    antialias: true,
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  camera.position.setZ(30);

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

  const lightHelper = new THREE.PointLightHelper(pointLight);

  const gridHelper = new THREE.GridHelper(window.innerWidth, 100);

  scene.add(lightHelper, gridHelper);

  const controls = new OrbitControls(camera, renderer.domElement);

  const spgeometry = new THREE.SphereGeometry(0.25, 24, 24);
  const spmaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

  function addStar() {
    const star = new THREE.Mesh(spgeometry, spmaterial);

    const [x, y, z] = Array(3)
      .fill(0)
      .map(() => THREE.MathUtils.randFloatSpread(500));

    star.position.set(x, y, z);

    scene.add(star);
  }

  Array(2000).fill(0).forEach(addStar);

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
