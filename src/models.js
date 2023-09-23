import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"

export const loadModels = (scene) => {

  // Instantiate a loader
  const loader = new GLTFLoader();
  
  // Optional: Provide a DRACOLoader instance to decode compressed mesh data
  // const dracoLoader = new DRACOLoader();
  // dracoLoader.setDecoderPath( '/examples/jsm/libs/draco/' );
  // loader.setDRACOLoader( dracoLoader );
  
  // Load a glTF resource
  loader.load(
    // resource URL
    "./truck.glb",
    // called when the resource is loaded
    function (gltf) {
      const model = gltf.scene.children[0];
      model.position.y = 0.3
      model.scale.set(0.005, 0.005, 0.005);
      scene.add( model );
    },
    // called while loading is progressing
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    // called when loading has errors
    function (error) {
      console.log("An error happened");
    }
  );
}

