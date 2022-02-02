<template>
  <div>
    <div class="container-default flexbox" :class="$vuetify.breakpoint.mdAndUp?'full-height':''">
      <v-container class="pa-0">
        <v-row class="d-flex" no-gutters>
          <v-col cols="12" xs="12" sm="7" md="7" lg="8" class="">
            <div class="model-container">
              <div ref="myRenderer" :class="$vuetify.breakpoint.mdAndUp?'model --big' : 'model --small'">
              </div>
              <div class="rate-2 d-flex d-sm-none">
                <heart-rate/>
              </div>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="5" md="5" lg="4" class="">
            <v-container class="pa-0 fill-height">
              <v-row class="d-flex flex-column" no-gutters>
                <v-col class="d-none d-sm-flex">
                  ECG
                </v-col>
                <v-col class="d-none d-sm-flex">
                  Pressure
                </v-col>
                <v-col class="d-none d-sm-flex">
                  <heart-rate/>
                </v-col>
                <v-col class="d-none d-md-block">
                  <div class="logo">
                    <img src="~assets/images/medtechcore-abi-logo.png"/>
                  </div>
                </v-col>
              </v-row>
              <v-row class="d-flex flex-nowrap d-sm-none"  :class="$vuetify.breakpoint.width<=400?'flex-column':''" no-gutters>
                <v-col>
                  ECG
                </v-col>
                <v-col>
                  Pressure
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>   
      </v-container>
    </div>
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

  .model-container{
    position:relative;
  }

  .model{
    z-index:9999;
    width:100%;
    &.--big{height:90vh;}
    &.--small{height:20rem;}  
  }

  .rate-2{
    position:absolute;
    bottom:0;
    right:0;
    width:200px;
    height:30px;
  }

  .logo{
    width:80%;
    padding:0.2rem;
    img{
      width:100%;
      height:auto;
    }   
  }
</style>