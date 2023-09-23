import { WebGLRenderer } from "three";

export const loadRenderer = () => {
  const renderer = new WebGLRenderer();
  // place created canvas element of renderer in DOM
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  return renderer;
};
