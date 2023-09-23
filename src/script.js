import * as THREE from "three";
import { loadCamera } from "./camera";
import { loadRenderer } from "./renderer";
import { loadVisualHelpers } from './visualize'
import { loadWorldObjects } from "./objects";
import { loadLights } from "./light";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


console.log("Heyyyyy")

const scene = new THREE.Scene()
const camera = loadCamera();

loadLights(scene)

// SETUP rendering
const renderer = loadRenderer()

// add controls for mouse movement in scene
const controls = new OrbitControls(camera, renderer.domElement)

// add helper lines to visualize 3D space
loadVisualHelpers(scene)

// load your world objects into the scene
const { box, sphere } = loadWorldObjects(scene)

// animation loop
let sphereDirection = -1;

const animate = (time) => {
  // render to browser (into DOM element)
  box.rotation.y -= 0.01;
  if (sphere.position.x < -5) {
    sphere.position.x = -5;
    sphereDirection = 1;
  }
  if (sphere.position.x > 5) {
    sphere.position.x = 5;
    sphereDirection = -1;
  }

  sphere.position.x += sphereDirection * 0.05;
  controls.update();
  renderer.render(scene, camera);
};
// start scene rendering (endless loop)...
renderer.setAnimationLoop(animate);

// responsive scene
window.onresize = (e) => {
  // resize canvas
  renderer.setSize(window.innerWidth, window.innerHeight);
  // re-adjust camera aspect ratio
  camera.aspect = window.innerWidth / window.innerHeight;
};

