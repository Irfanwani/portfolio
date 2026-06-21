import * as THREE from "three";

export const cometGroup = new THREE.Group();
const cometHeadGeometry = new THREE.SphereGeometry(2.5, 24, 24);
const cometHeadMaterial = new THREE.MeshBasicMaterial({ color: 0xbfe9ff });
const cometHead = new THREE.Mesh(cometHeadGeometry, cometHeadMaterial);
cometGroup.add(cometHead);

export const TRAIL_LENGTH = 200;
export const trailGeometry = new THREE.BufferGeometry();
const trailPositions = new Float32Array(TRAIL_LENGTH * 3);
const trailOpacities = new Float32Array(TRAIL_LENGTH);

for (let i = 0; i < TRAIL_LENGTH; i++) {
  trailPositions[i * 3] = 0;
  trailPositions[i * 3 + 1] = 0;
  trailPositions[i * 3 + 2] = 0;
  trailOpacities[i] = 1 - i / TRAIL_LENGTH;
}

trailGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(trailPositions, 3),
);

const trailMaterial = new THREE.PointsMaterial({
  color: 0xbfe9ff,
  size: 2.5,
  transparent: true,
  opacity: 0.35,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  sizeAttenuation: true,
});

const headGlow = new THREE.Mesh(
  new THREE.SphereGeometry(8, 24, 24),
  new THREE.MeshBasicMaterial({
    color: 0xbfe9ff,
    transparent: true,
    opacity: 0.15,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }),
);

cometGroup.add(headGlow);

export const cometTrail = new THREE.Points(trailGeometry, trailMaterial);

export const cometHistory: THREE.Vector3[] = [];
export const cometPathPoint = (t: number, scroll: number = 0) => {
  const radiusX = THREE.MathUtils.lerp(600, 780, scroll);
  const radiusZ = THREE.MathUtils.lerp(250, 340, scroll);
  const px = Math.cos(t) * radiusX + 500;
  const py = Math.sin(t * 1.3) * 40 - 50;
  const pz = Math.sin(t) * radiusZ - 70;
  return new THREE.Vector3(px, py, pz);
};
