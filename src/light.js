import { AmbientLight, Color } from "three";

export const loadLights = (scene) => {
  const light = new AmbientLight(new Color("white"));
  light.position.set(5, 1, 1);
  scene.add(light);
}