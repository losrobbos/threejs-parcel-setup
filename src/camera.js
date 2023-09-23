import { PerspectiveCamera } from "three";

export const loadCamera = () => {
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // by default: camera is right in the MIDDLE of the coordinate system of the scene
  // move it a bit OUTSIDE the center
  camera.position.x = 3;
  camera.position.y = 4;
  camera.position.z = 7;

  return camera;
};
