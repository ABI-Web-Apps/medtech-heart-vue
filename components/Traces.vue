<template>
  <div class="traces d-flex justify-center" :class="$vuetify.breakpoint.smAndUp || $vuetify.breakpoint.width<=430?'flex-column':''">
    <div class="item text-center">
      <div class="font-weight-medium text-subtitle-2 text-sm-subtitle-2 text-md-body-1">
        ECG
      </div>
      <div id="rightECG" ref="rightECG" class="chart">
      </div>
      <div id="ECGDescription" ref="ECGDescription" class="text-caption text-sm-body-2">
        Some description text here
      </div>
    </div>
    <div class="item text-center">
     <div class="font-weight-medium text-subtitle-2 text-sm-subtitle-2 text-md-body-1">
        Pressure (mmHg)
      </div> 
      <div id="rightLVP" ref="rightLVP" class="chart">
      </div>
      <div id="LVPDescription" ref="LVPDescription" class="text-caption text-sm-body-2">
        Some description text here
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    //this.$displayChart("Normal")
    //("CompensatedFailure",0.0)
  },
}

</script>


<style scoped lang="scss">

  .traces{
    width:100%;
  }
  .item{
    width:100%;
  }

  .chart{
    width:100%;
    height:120px;
  }
</style>