<template>
  <div class="overlay flexbox">
    <div class="model">
      <div ref="myRenderer" :class="$vuetify.breakpoint.mdAndUp?'zinc-object --big' : 'zinc-object --small'" />
    </div>
    <div class="pa-0">
      <img src="~/assets/images/gestures-icons.png" class="gestures"/>
    </div>
  </div>
</template>


<script>
export default {

  data() {
    return {
      heartRate:2000,
      zincRenderer:null,
      modelURLsArray: {
        NoInfarct_highres: [
          "heartInfarct/noInfarct_highres_metadata.json",
          "heartInfarct/noInfarct_view.json",
        ],
        NormalElectricity_highres: [
          "heartElectricity/normalActivity_highres_metadata.json",
          "heartElectricity/normalActivity_view.json",
        ],
        ArrythmiaElectricity:[
          "heartElectricity/arrythmiaActivity_highres_metadata.json",
          "heartElectricity/arrythmiaActivity_view.json",
        ],
        CompensatedFailure_highres: [
          "heartFailure/compensated_highres_metadata.json",
          "heartFailure/compensated_view.json",
        ]
      }
    };
  },

  mounted() {
    this.start()
  },

  methods: {
    start() {
      let container = this.$refs.myRenderer;
      this.zincRenderer = new Zinc.Renderer(container, window);
      Zinc.defaultMaterialColor = 0xffff9c;
      let zincRenderer=this.zincRenderer;

      let that = this;
      zincRenderer.initialiseVisualisation();
      //0x050505
      zincRenderer.getThreeJSRenderer().setClearColor(0x000000, 1);

      loadModel(this.$model().name, 1.0);
      zincRenderer.animate();   	
      that.updateSlider(that.heartRate);

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
          //console.log("hello");
        };
      }
    },
    updateSlider(heartRate){
      this.zincRenderer.setPlayRate(heartRate)
    }
  },

  watch:{
    heartRate:function(currentRate){
      this.updateSlider(currentRate)
    }
  },

  created() {
    this.$nuxt.$on('beat-change', (currentBeat) => {
      this.heartRate=currentBeat
    })
  },

  beforeDestroy(){
    this.$nuxt.$off('beat-change')
  }
}

</script>

<style scoped lang="scss">

  .overlay{
    //border:1px solid red;
    flex-direction:column;
    text-align:center;
    height:100%;
    justify-content:space-between;
  }

  .model{   
    flex-grow:1;
  }

  .zinc-object{
    width:100%;
    &.--big{height:82vh;}
    &.--small{height:30rem;} 
  }

  .gestures{
    width:40%;
    height:auto;
  }
</style>