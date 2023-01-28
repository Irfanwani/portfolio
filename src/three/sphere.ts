import * as THREE from "three";

export const sphereGen = (
  r: number,
  x: number,
  y: number,
  sphereTexture: THREE.Texture,
  scene: THREE.Scene,
  color?: number,
) => {
  const spheregeometry = new THREE.SphereGeometry(r, x, y);
  const spherematerial = new THREE.MeshBasicMaterial({
    color,
    map: sphereTexture,
  });

  const sphere = new THREE.Mesh(spheregeometry, spherematerial);

  scene.add(sphere);

  return sphere;
};
