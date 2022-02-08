<template>
  <div>
    <div class="container-default flexbox" :class="$vuetify.breakpoint.mdAndUp?'full-height':'auto-height'">
      <v-container class="pa-0">
        <v-row class="d-flex" no-gutters>
          <v-col cols="12" xs="12" sm="9" md="8" lg="9">
            <div class="model-container">
              <div ref="myRenderer" :class="$vuetify.breakpoint.mdAndUp?'model --big' : 'model --small'">
              </div>
              <div class="rate-2 d-flex d-sm-none">
                <heart-rate/>
              </div>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="3" md="4" lg="3">
            <v-container class="pa-0 fill-height">
              <v-row class="d-flex flex-column" no-gutters>
                <v-col class="d-none d-sm-flex">
                  <traces/>
                </v-col>
                <v-col class="d-none d-sm-flex">
                  <div class="item" style="width:80%;height:8rem">
                    <heart-rate @beat-change="changeHeartRate"/>
                  </div>
                </v-col>
                <v-col class="d-none d-md-block">
                  <div class="item" style="height:8rem">
                    <div class="logo">
                      <img src="~assets/images/medtechcore-abi-logo.png"/>
                    </div>
                  </div>
                </v-col>
              </v-row>
              <v-row class="d-flex d-sm-none" no-gutters>
                <v-col>
                  <traces/>
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
      currentRate:6,
      str:"123"
    };
  },
  mounted() {
    //this.start()
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

      //loadModel("NoInfarct", 6.0);
      
      loadModel("NormalElectricity", 5.0);
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
    changeHeartRate(rate){
      this.currentRate=rate/10;
    }
  },
  
  watch:{
    currentRate:function (rate) {     
      this.currentRate=rate
    }
  }
}

</script>


<style scoped lang="scss">

  .model-container{
    position:relative;
  }

  .model{
    //border:1px solid red;
    width:100%;
    &.--big{height:90vh;}
    &.--small{height:30rem;}  
  }

  .item{
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    margin:auto;
  }

  .rate-2{
    position:absolute;
    left:0px;
    top:20px;
    width:120px;
  }

  .logo{
    width:85%;
    padding:0.2rem;
    img{
      width:100%;
      height:auto;
    }   
  }
</style>