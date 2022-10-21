<template>
  <div class="webglCanvas" ref="webglCanvas"></div>
  <div class="cssCanvas" ref="cssCanvas">
    <div class="iframe-container" ref="iframeContainer">
      <iframe
        class="iframe"
        ref="iframe"
        src="https://www.youtube.com/"
      ></iframe>
    </div>
    <div class="instructions-container" ref="instructionsContainer">
      <div class="instructions" ref="instructions">
        <div class="instruction">
          <div class="control space-control" @click="toggleCameraView">
            SPACE
          </div>
          - Press to alternate view
        </div>
        <div class="instruction">
          <div class="control">MOUSE</div>
          - Drag to look around
        </div>
      </div>
    </div>
  </div>
  <div class="progress-bar-container">
    <label for="progress-bar" ref="progressBarContainer">
      Loading assets...
    </label>
    <progress
      id="progress-bar"
      value="0"
      max="100"
      ref="progressBar"
    ></progress>
  </div>
</template>

<script>
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "stats.js";

import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/addons/renderers/CSS3DRenderer.js";

// Scene elements
var stats = new Stats();
const scene = new THREE.Scene();
const cssScene = new THREE.Scene();
const cssRenderer = new CSS3DRenderer();
const renderer = new THREE.WebGLRenderer({
  antialias: true,
});
const camera = new THREE.PerspectiveCamera(
  45.6,
  window.innerWidth / window.innerHeight,
  0.1,
  50
);

const ambientLight = new THREE.AmbientLight(0xffffff, 4);

const composer = new EffectComposer(renderer);
const loadingManager = new THREE.LoadingManager();
const loader = new GLTFLoader(loadingManager);
const models = [];

// Controls
const controls = new OrbitControls(camera, cssRenderer.domElement);

export default {
  name: "CanvasComponent",
  data() {
    return {
      setTableView: true,
    };
  },
  methods: {
    // Setup
    async init() {
      // Scene
      scene.background = new THREE.Color(0x000000);

      // Camera
      this.setCameraToTableView();

      // Renderer
      cssRenderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.outputEncoding = THREE.sRGBEncoding;
      // renderer.toneMapping = THREE.NoToneMapping;
      // renderer.toneMappingExposure = 1;
      renderer.physicallyCorrectLights = true;

      // Lights
      scene.add(ambientLight);

      // Composer
      composer.setPixelRatio(window.devicePixelRatio);
      composer.setSize(window.innerWidth, window.innerHeight);
      composer.addPass(new RenderPass(scene, camera));

      // Controls
      // controls.enableRotate = false;
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.rotateSpeed = 0.2212;
      controls.maxPolarAngle = Math.PI / 1.75;
      controls.minPolarAngle = Math.PI / 2.5;
      controls.maxAzimuthAngle = Math.PI / 3;
      controls.minAzimuthAngle = -Math.PI / 7;

      // Assets
      loadingManager.onStart = this.onLoadingStart;
      loadingManager.onProgress = this.onLoadingProgress;
      loadingManager.onLoad = this.onLoadingEnd;
      loadingManager.onError = this.onLoadingError;

      loader.setPath("src/assets/models/");
      const gltf = await Promise.all([
        loader.loadAsync("room.glb"),
        loader.loadAsync("table.glb"),
        loader.loadAsync("headphone.glb"),
        loader.loadAsync("led.glb"),
        loader.loadAsync("mousepad.glb"),
        loader.loadAsync("mousepadLogo.glb"),
        loader.loadAsync("monitor.glb"),
        loader.loadAsync("monitorStand.glb"),
        loader.loadAsync("keyboard.glb"),
      ]);

      gltf.forEach((model) => {
        const mesh = model.scene.getObjectByName("Scene");
        models.push(...mesh.children);
        scene.add(mesh);
      });

      // CSS objects
      const group = new THREE.Group();

      // CSS iframe
      const iframeContainer = this.$refs.iframeContainer;

      const monitor = models.filter((model) => model.name === "Monitor")[0];
      const position = monitor.position.clone();
      const rotation = monitor.rotation.clone();

      const iframeCSS = new CSS3DObject(iframeContainer);
      iframeCSS.scale.set(0.001, 0.001, 0.001);
      iframeCSS.position.copy(position);
      iframeCSS.rotation.copy(rotation);
      iframeCSS.rotation.x = 0;

      // CSS instructions
      const instructionsContainer = this.$refs.instructionsContainer;

      const instructionsCSS = new CSS3DObject(instructionsContainer);
      instructionsCSS.scale.set(0.0025, 0.0025, 0.0025);
      instructionsCSS.position.copy(position);
      instructionsCSS.rotation.copy(rotation);
      instructionsCSS.rotation.x = 0;
      instructionsCSS.position.x += 1.72;
      instructionsCSS.position.y -= 0.25;

      group.add(iframeCSS, instructionsCSS);
      cssScene.add(group);

      this.$refs.cssCanvas.appendChild(cssRenderer.domElement);
      this.$refs.webglCanvas.appendChild(renderer.domElement);
      this.$refs.webglCanvas.appendChild(stats.dom); // @TODO hide in production

      window.addEventListener("resize", () => this.onResize(), false);
      window.addEventListener("keydown", (e) => this.onKeyDown(e), false);
    },

    // @TODO path, index, total loaded
    onLoadingStart(url, item, total) {
      url;
      item;
      total;
    },

    // @TODO path, index, total loaded
    onLoadingProgress(url, loaded, total) {
      const progressBar = this.$refs.progressBar;
      progressBar.value = (loaded / total) * 100;
      console.log(`Started loading ${url}`);
    },

    // @TODO path, index, total loaded
    onLoadingEnd() {
      const progressBarContainer = this.$refs.progressBarContainer;
      const progressBar = this.$refs.progressBar;
      progressBarContainer.classList.add("finished");
      progressBar.classList.add("finished");
      console.log(`Finished loading assets`);
    },

    // @TODO path, index, total loaded
    onLoadingError(url) {
      console.error(`Error loading ${url}`);
    },

    // Calculates target based on camera position
    // https://discourse.threejs.org/t/control-for-turning-camera-fixed-axis-and-pivot-point/37705/14
    calculateTarget(camera, distance = 0.01) {
      return new THREE.Vector3().addVectors(
        camera.getWorldPosition(new THREE.Vector3()),
        camera.getWorldDirection(new THREE.Vector3()).multiplyScalar(distance)
      );
    },

    // Translates and rotates a target between two points for a given duration
    transitionBetweenViews(start, end, duration = 500, target) {
      const tween = new TWEEN.Tween({
        x: start.x,
        y: start.y,
        z: start.z,
        rX: start.rX,
        rY: start.rY,
        rZ: start.rZ,
      })
        .to(
          {
            x: end.x,
            y: end.y,
            z: end.z,
            rX: end.rX,
            rY: end.rY,
            rZ: end.rZ,
          },
          duration
        )
        .easing(TWEEN.Easing.Sinusoidal.InOut);

      tween.onUpdate(function (obj) {
        target.position.set(obj.x, obj.y, obj.z);
        target.rotation.set(obj.rX, obj.rY, obj.rZ);
      });

      tween.start();
    },

    toggleCameraView() {
      this.setTableView = !this.setTableView;
      if (this.setTableView) {
        this.setCameraToTableView();
      } else {
        this.setCameraToMonitorView();
      }
    },

    // Sets camera from current state to monitor view
    setCameraToMonitorView() {
      const monitor = models.filter((model) => model.name === "Monitor")[0];
      const pos = monitor.position.clone();
      pos.z += 1.8;

      const camPos = camera.position.clone();
      const camRot = camera.rotation.clone();

      const start = {
        x: camPos.x,
        y: camPos.y,
        z: camPos.z,
        rX: camRot.x,
        rY: camRot.y,
        rZ: camRot.z,
      };

      const end = {
        x: pos.x,
        y: pos.y,
        z: pos.z,
        rX: 0,
        rY: 0,
        rZ: 0,
      };

      this.transitionBetweenViews(start, end, 750, camera);
    },

    // Sets camera from current state to table view
    setCameraToTableView() {
      const tablePos = { x: -1.2672, y: 0.266311, z: 5.58409 };
      const tableRot = { x: 0, y: 0.455882, z: 0 };

      const camPos = camera.position.clone();
      const camRot = camera.rotation.clone();

      const start = {
        x: camPos.x,
        y: camPos.y,
        z: camPos.z,
        rX: camRot.x,
        rY: camRot.y,
        rZ: camRot.z,
      };

      const end = {
        x: tablePos.x,
        y: tablePos.y,
        z: tablePos.z,
        rX: tableRot.x,
        rY: tableRot.y,
        rZ: tableRot.z,
      };

      this.transitionBetweenViews(start, end, 750, camera);
    },

    // Updates objects in each frame
    animate() {
      requestAnimationFrame(this.animate);

      stats.begin();

      const target = this.calculateTarget(camera);
      controls.target.set(target.x, target.y, target.z);
      controls.update();

      TWEEN.update();
      composer.render();
      cssRenderer.render(cssScene, camera);

      stats.end();
    },

    // @TODO refactor later
    onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      cssRenderer.setSize(window.innerWidth, window.innerHeight);
    },

    onKeyDown(e) {
      if (e.key === " ") {
        this.toggleCameraView();
      }
    },
  },

  mounted() {
    this.init();
    this.animate();
  },
};
</script>

<style scoped>
.webglCanvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}

.cssCanvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}

.iframe-container {
  pointer-events: none;
  position: relative;
  width: 2240px;
  height: 1080px;
}

.iframe {
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
  width: 100%;
  height: 100%;
}

.instructions {
  font-size: 1rem;
  width: 350px;
  color: white;
  transition: all 0.2s ease-in-out;
}

.instruction {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.control {
  padding: 0.2rem 0.5rem;
  border: 0.1rem solid transparent;
  transition: all 0.1s ease-in-out;
}

.control:hover {
  border: 0.1rem solid white;
  transition: all 0.2s ease-in-out;
}

.space-control:hover {
  background-color: white;
  color: black;
}

.space-control:active {
  background-color: transparent;
  color: white;
  transition: all 0.05s ease;
}

.progress-bar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
}

#progress-bar {
  width: 30rem;
}

label {
  color: white;
}

.finished {
  display: none;
  z-index: -1;
}
</style>
