import { AxesHelper, GridHelper } from "three";

export const loadVisualHelpers = (scene) => {
  // add axis helper to show 3D coordinates
  const axesHelper = new AxesHelper(10);
  scene.add(axesHelper);

  const gridHelper = new GridHelper();
  scene.add(gridHelper);
};
