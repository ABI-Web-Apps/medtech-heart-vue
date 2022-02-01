<template>
  <div class="pa-2">
    I am  Model
    <div ref="myRenderer" class="model"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
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
        ]
      },
    };
  },
  mounted() {
    this.start();
  },

  methods: {
    start() {
      //let container = document.getElementById("myRenderer");
      let container = this.$refs.myRenderer;
      let zincRenderer = new Zinc.Renderer(container, window);
      Zinc.defaultMaterialColor = 0xffff9c;
      let that = this;
      zincRenderer.initialiseVisualisation();
      zincRenderer.getThreeJSRenderer().setClearColor(0x050505, 1);

      loadModel("NoInfarct", 5.0);
      //loadModel("NormalElectricity", 1.0);
      //loadModel("CompensatedFailure", 8.1);
      zincRenderer.animate();

      function loadModel(model_name, rateScaling) {
        let model_prefix = "_highres";

        const metaURL = that.modelURLsArray[model_name + model_prefix][0];
        const viewURL = that.modelURLsArray[model_name + model_prefix][1];
        let scene = zincRenderer.getSceneByName(model_name);
        if (scene == undefined) {
          scene = zincRenderer.createScene(model_name);
          scene.setDuration(scene.getDuration() / rateScaling);
          scene.loadViewURL(viewURL);
          scene.loadMetadataURL(metaURL, meshReady());
          zincRenderer.setCurrentScene(scene);
        } 
        else {
          zincRenderer.setCurrentScene(scene);
        }
      }

      function meshReady() {
        return function () {
          console.log("hello");
        };
      }
    },
  }
}

</script>


<style scoped lang="scss">
  .model{
    height:500px;
    width:500px;
  }
</style>