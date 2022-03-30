<template>
  <div class="outer-model">
    <div class="d-flex d-sm-none justify-center">
      <div class="gestures">
        <img src="~/assets/images/gestures-icons.png" />
        <div @click="onHalfHeartPressed"></div>
      </div>
    </div>
    <div
      class="d-flex flex-column justify-space-between"
      :style="modelHeightStyle"
    >
      <div
        id="zincDom"
        ref="zincDomObject"
        :style="zincHeightStyle"
        @dblclick="onHalfHeartPressed"
      />
      <input class="hidden-input" />

      <div ref="threeDControls" class="d-none d-sm-flex justify-center">
        <div class="gestures">
          <div class="reset-control" @click="onResetAllModelsView" />
          <img src="~/assets/images/gestures-icons.png" />
          <div class="half-control" @click="onHalfHeartPressed" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heartRate: 2500,
      threeDControlsHeight: 0,
      zincRenderer: null,
      halfHeartFlag: false,
      oldCam: null,
      modelToSceneArray: [],
      container: null,
      modelURLsArray: {
        NoInfarct_highres: [
          "heartInfarct/noInfarct_highres_metadata.json",
          "heartInfarct/noInfarct_view.json",
        ],
        NormalElectricity_highres: [
          "heartElectricity/normalActivity_highres_metadata.json",
          "heartElectricity/normalActivity_view.json",
        ],
        CompensatedFailure_highres: [
          "heartFailure/compensated_highres_metadata.json",
          "heartFailure/compensated_view.json",
        ],
        SmallInfarct_highres: [
          "heartInfarct/smallInfarct_highres_metadata.json",
          "heartInfarct/smallInfarct_view.json",
        ],
        LargeInfarct_highres: [
          "heartInfarct/largeInfarct_highres_metadata.json",
          "heartInfarct/largeInfarct_view.json",
        ],
        ArrythmiaElectricity_highres: [
          "heartElectricity/arrythmiaActivity_highres_metadata.json",
          "heartElectricity/arrythmiaActivity_view.json",
        ],
        DecompensatedFailure_highres: [
          "heartFailure/decompensated_highres_metadata.json",
          "heartFailure/decompensated_view.json",
        ],
      },
    };
  },

  props: {
    totalHeight: {
      type: Number,
    },
    availableHeight: {
      type: Number,
    },
  },

  computed: {
    modelHeightStyle() {
      let modelHeight = 0;
      if (this.$vuetify.breakpoint.mdAndUp) {
        modelHeight = this.totalHeight;
      } else if (this.$vuetify.breakpoint.sm) {
        modelHeight = this.availableHeight;
      }

      return {
        height: modelHeight > 0 ? modelHeight + "px" : "auto",
      };
    },
    zincHeightStyle() {
      let zincObjectHeight = "20rem"; // default for xs devices
      if (this.$vuetify.breakpoint.mdAndUp) {
        zincObjectHeight = "80vh";
      } else if (this.$vuetify.breakpoint.sm) {
        let calculated = this.availableHeight - this.threeDControlsHeight;
        zincObjectHeight = calculated > 0 ? calculated + "px" : "30rem";
      }
      return {
        height: zincObjectHeight,
        width: "100%",
      };
    },
  },

  mounted() {
    this.threeDControlsHeight = this.$refs.threeDControls.clientHeight;
    this.start();
  },

  methods: {
    start() {
      this.container = this.$refs.zincDomObject;
      // this.container = document.getElementById("zincDom");
      this.zincRenderer = this.$currentRender();
      if (this.container) {
        if (this.zincRenderer === undefined) {
          this.initialZinc();
        }
        this.zincRenderer.switchContainer(this.container);
        this.halfHeartFlag = this.$isHalfModel();
      }
      // if (this.container) {
      //   if (render === undefined) {
      //     initZinc();
      //   }
      //   render.switchContainer(this.container);
      //   this.zincRenderer = render;
      //   this.halfHeartFlag = this.$isHalfModel();
      // }

      if (
        this.$model().name === "NoInfarct" ||
        this.$model().name === "SmallInfarct" ||
        this.$model().name === "LargeInfarct" ||
        this.$model().name === "CompensatedFailure" ||
        this.$model().name === "DecompensatedFailure"
      ) {
        this.oldCam = this.$perviousCamera();
      }
      if (this.$model().name === "ArrythmiaElectricity") {
        this.loadModel(this.$model().name, 0.25);
      } else {
        this.loadModel(this.$model().name, 1.0);
      }

      // when home click
      if (this.$route.params.slug === "model-heart") {
        // const that = this
        setTimeout(() => {
          this.oldCam = null;
          this.onResetAllModelsView();
        }, 100);
      }

      this.updateSlider(this.heartRate);
    },
    initialZinc() {
      this.zincRenderer = new Zinc.Renderer(this.container, window);
      Zinc.defaultMaterialColor = 0xffff9c;
      this.zincRenderer.initialiseVisualisation();
      this.zincRenderer.getThreeJSRenderer().setClearColor(0x000000, 1);

      // zincRenderer.getThreeJSRenderer().setClearColor(0x050505, 1);
      var defaultScene = this.zincRenderer.getSceneByName("default");
      this.zincRenderer.setCurrentScene(defaultScene);
      let render = this.zincRenderer;
      this.$store.commit("setZincRender", render);
      this.zincRenderer.animate();
    },
    loadModel(model_name, rateScaling) {
      let model_prefix = "_highres";
      const metaURL = this.modelURLsArray[model_name + model_prefix][0];
      const viewURL = this.modelURLsArray[model_name + model_prefix][1];

      let scene = this.zincRenderer.getSceneByName(model_name);

      if (scene == undefined) {
        scene = this.zincRenderer.createScene(model_name);
        scene.setDuration(scene.getDuration() / rateScaling);
        scene.loadViewURL(viewURL);
        scene.loadMetadataURL(metaURL, this.meshReady(this.oldCam));
        this.zincRenderer.setCurrentScene(scene);

        const old_scene = {
          name: model_name,
          sceneObj: scene,
        };
        this.$store.commit("setModelToSceneArray", old_scene);
        this.addLabel(this.$model().name);
      } else {
        scene.switchContainer(this.container);
        this.zincRenderer.setCurrentScene(scene);
        this.shareCameraSettings(this.oldCam);
      }
    },
    meshReady(oldCam) {
      const that = this;
      return function (mygeometry) {
        if (mygeometry.groupName && mygeometry.groupName.includes("Post")) {
          mygeometry.setVisibility(!that.halfHeartFlag);
        }
        if (mygeometry.groupName && mygeometry.groupName.includes("Fibres")) {
          mygeometry.setVisibility(false);
        }
        that.shareCameraSettings(oldCam);
        that.zincRenderer
          .getCurrentScene()
          .getZincCameraControls()
          .updateAutoTumble();
      };
    },

    shareCameraSettings(oldCam) {
      if (
        oldCam !== null &&
        oldCam.near !== null &&
        oldCam.near !== undefined
      ) {
        var newCam = this.zincRenderer.getCurrentScene().camera;
        newCam.near = oldCam.near;
        newCam.far = oldCam.far;
        newCam.position.copy(oldCam.position);
        newCam.target = new THREE.Vector3(
          oldCam.target.x,
          oldCam.target.y,
          oldCam.target.z
        );
        newCam.up.copy(oldCam.up);
        this.zincRenderer.getCurrentScene().updateDirectionalLight();
      }
    },

    onResetAllModelsView() {
      this.modelToSceneArray = this.$modelToSceneArray();
      this.halfHeartFlag = false;
      this.$store.commit("setIsHalfModel", false);
      for (var k in this.modelToSceneArray) {
        if (this.modelToSceneArray.hasOwnProperty(k)) {
          this.modelToSceneArray[k].resetView();
          this.modelToSceneArray[k].forEachGeometry(this.geometryShowHalf());
        }
      }
    },
    updateSlider(heartRate) {
      this.zincRenderer.setPlayRate(heartRate);
    },
    addLabel(model_name) {
      var scene = this.zincRenderer.getSceneByName(model_name);
      if (model_name === "NoInfarct") {
        addLabelToScene(
          scene,
          "right ventricle",
          -38.056679,
          35.639515,
          10.421283,
          60.0
        );
        addLabelToScene(
          scene,
          "left ventricle",
          -48.056679,
          -5.639515,
          5.421283,
          60.0
        );
      } else if (model_name === "SmallInfarct") {
        addLabelToScene(scene, "damaged tissue", 30, -50, 0, 60.0);
      } else if (model_name === "LargeInfarct") {
        addLabelToScene(scene, "damaged tissue", 15, -55, 0, 60.0);
      }
    },
    onHalfHeartPressed() {
      if (this.halfHeartFlag) {
        this.halfHeartFlag = false;
        this.$store.commit("setIsHalfModel", false);
      } else {
        this.halfHeartFlag = true;
        this.$store.commit("setIsHalfModel", true);
      }
      this.showHalf();
    },
    showHalf() {
      // this.isHalfModel ? (this.isHalfModel = false) : (this.isHalfModel = true);
      var currentScene = this.zincRenderer.getCurrentScene();
      currentScene.forEachGeometry(this.geometryShowHalf());
    },
    geometryShowHalf() {
      const that = this;
      return function (zincGeometry) {
        if (zincGeometry.groupName && zincGeometry.groupName.includes("Post")) {
          zincGeometry.setVisibility(!that.halfHeartFlag);
        }
      };
    },
  },

  watch: {
    heartRate: function (currentRate) {
      this.updateSlider(currentRate);
    },
  },

  created() {
    this.$nuxt.$on("beat-change", (currentBeat) => {
      this.heartRate = currentBeat;
    });
  },

  beforeDestroy() {
    if (this.oldCam) {
      const currentCamera = this.zincRenderer.getCurrentScene().camera;
      const position = new THREE.Vector3();
      const up = new THREE.Vector3();
      const target = new THREE.Vector3();

      target.copy(currentCamera.target);
      position.copy(currentCamera.position);
      up.copy(currentCamera.up);

      const currentCameraInfo = {
        position: position,
        target: target,
        up: up,
        near: currentCamera.near,
        far: currentCamera.far,
      };

      this.$store.commit("setPreviousCamera", currentCameraInfo);
    }

    this.$nuxt.$off("beat-change");
  },
};
</script>

<style scoped lang="scss">
.outer-model {
  height: 100%;
}
.hidden-input {
  width: 1px;
  height: 1px;
}

.gestures {
  width: 40%;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  .reset-control {
    width: 22%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    opacity: 0.1;
  }
  .half-control {
    width: 22%;
    height: 100%;
    right: 0;
    top: 0;
    position: absolute;
    opacity: 0.1;
  }
}
</style>
