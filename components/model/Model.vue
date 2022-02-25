<template>
  <div class="outer-model">
    <div class="d-flex d-sm-none justify-center gestures"> <!--small screens only -->
      <div class="gestures">
        <img src="~/assets/images/gestures-icons.png"/>
      </div>
    </div>
    <div class="d-flex flex-column justify-space-between" :style="modelHeightStyle">
      <div ref="zincDomObject" class="zinc-object" :style="zincHeightStyle"/>
      <div ref="modelControls" class="d-none d-sm-flex justify-center">
        <div class="gestures">
          <img src="~/assets/images/gestures-icons.png"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {

  data() {
    return {
      heartRate:2500,
      modelControlsHeight:0,
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

  props: {
    availableHeight: {
      type: Number
    },
    totalHeight:{
      type:Number
    }
  },

  computed:{
    modelHeightStyle(){
      let modelHeight=0
      if(this.$vuetify.breakpoint.mdAndUp){
        modelHeight= this.totalHeight
      }
      else if(this.$vuetify.breakpoint.sm){
        modelHeight= this.availableHeight
      }

      return{
        'height': modelHeight > 0 ? modelHeight +'px':'auto'
      }
    },
    zincHeightStyle(){
      let zincObjectHeight="20rem" // default for xs devices

      if(this.$vuetify.breakpoint.mdAndUp){
        let calculated=this.totalHeight - this.modelControlsHeight
        zincObjectHeight=calculated> 0 ? calculated+ 'px' : '80vh'  //Set default in case some devices don't provide client height
      }
      else if(this.$vuetify.breakpoint.sm){
        let calculated=this.availableHeight - this.modelControlsHeight 
        zincObjectHeight=calculated> 0 ? calculated+ 'px' : '30rem'    
      }
      return{
        'height':zincObjectHeight,
        'width':'100%'
      }
    }
  },

  mounted() {
    this.modelControlsHeight=this.$refs.modelControls.clientHeight
    this.start()
  },

  methods: {
    start() {
      let container = this.$refs.zincDomObject;
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

  .outer-model{
    height:100%;
  }
  .zinc-object{
    //border:1px solid green;
  }
  .gestures{
    width:40%;
    img{
      width:100%;
      height:auto;
    }  
  }
</style>