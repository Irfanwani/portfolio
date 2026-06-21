import * as THREE from "three";

const BH_POS = new THREE.Vector3(0, 0, 0);

const starGeometry = new THREE.BufferGeometry();
const STAR_COUNT = 3500;
const positions = new Float32Array(STAR_COUNT * 3);

for (let i = 0; i < STAR_COUNT * 3; i++) {
positions[i] = THREE.MathUtils.randFloatSpread(2000);
}

starGeometry.setAttribute(
"position",
new THREE.BufferAttribute(positions, 3),
);

const starMaterial = new THREE.ShaderMaterial({
transparent: false,
depthWrite: false,
uniforms: {
    time: { value: 0 },
    blackHolePos: { value: BH_POS },
},
vertexShader: `
    uniform float time;
    uniform vec3 blackHolePos;

    void main() {
    vec3 pos = position;

    float d = distance(pos, blackHolePos);

    if(d < 180.0){
        vec3 dir = normalize(pos - blackHolePos);
        pos += dir * (180.0 - d) * 0.15;
    }

    vec4 mvPosition = modelViewMatrix * vec4(pos,1.0);

    gl_PointSize = 2.5 * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
    }
`,
fragmentShader: `
    void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    float alpha = smoothstep(0.5, 0.0, d);
    gl_FragColor = vec4(vec3(1.0), alpha);
    }
`,
});

const starfield = new THREE.Points(starGeometry, starMaterial);

export default starfield;
