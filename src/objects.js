import {
  BoxGeometry,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  SphereGeometry,
} from "three";

export const loadWorldObjects = (scene) => {
  // plane
  const plane = new Mesh(
    new PlaneGeometry(10, 10),
    new MeshBasicMaterial({ color: "yellow", side: DoubleSide, wireframe: true })
  );
  plane.rotation.x = Math.PI / 2;
  scene.add(plane);

  const box = new Mesh(
    new BoxGeometry(),
    new MeshBasicMaterial({ color: "green", wireframe: true })
  );
  box.position.y = 3;

  const sphere = new Mesh(
    new SphereGeometry(),
    new MeshBasicMaterial({ color: "purple", wireframe: true })
  );
  sphere.position.y = 1;
  sphere.position.z = 3;

  scene.add(box);
  scene.add(sphere);

  return { box, sphere };
};
