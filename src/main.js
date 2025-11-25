import "./style.css";
import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position((z = -30));

renderer.render(scene, camera);

const geometry = new THREE.IcosahedronGeometry(10);
const material_basic = new THREE.MeshBasicMaterial({
  color: 0xff6007,
  wireframe: true,
});
//const material = new THREE.MeshStandardMaterial();
const icosahedron = new THREE.Mesh(geometry, material_basic);

scene.add(icosahedron);

function animate() {
  requestAnimationFrame(animate);

  icosahedron.rotation.x += 0.01;
  icosahedron.rotation.y += 0.01;
  icosahedron.rotation.z += 0.05;

  renderer.render(scene, camera);
}
