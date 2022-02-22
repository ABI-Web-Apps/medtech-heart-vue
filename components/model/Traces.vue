<template>
  <div class="d-flex justify-center" :class="$vuetify.breakpoint.smAndUp || $vuetify.breakpoint.width<=430?'flex-column':''">
    <div class="pt-5 pb-1 d-flex flex-column align-center">
      <div class="font-weight-bold text-subtitle-2 text-xl-h6 text-sm-subtitle-2 text-md-body-1">
        ECG
      </div>
      <div id="rightECG" ref="rightECG" class="chart">
      </div>
      <div id="ecgDescription" class="text-caption text-xl-body-2">
          {{$ecg().chartDescription}}  
      </div>
    </div>
    <div class="pt-5 pb-1  d-flex flex-column align-center">
     <div class="font-weight-bold text-subtitle-2 text-xl-h6 text-sm-subtitle-2 text-md-body-1">
        Pressure (mmHg)
      </div> 
      <div id="rightLVP" ref="rightLVP" class="chart">
      </div>
      <div id="lvpDescription" class="text-caption text-xl-body-2">
        {{$lvp().chartDescription}}  
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
    //loadChart('Normal','Normal')
    //this.$displayChart("Normal")
    //("CompensatedFailure",0.0)
  },
  updated(){
    //loadChart(this.$ecg().chartName,this.$lvp().chartName)
  }
}

</script>


<style scoped lang="scss">

  #ecgDescription, #lvpDescription{
    width:80%;
  }

  .chart{
    padding-bottom:2px;
    width:100%;
    height:100px;
    @media #{map-get($display-breakpoints, 'md-only')}
    { height:80px; }

    @media #{map-get($display-breakpoints, 'xl-only')}
    { height:120px; }
  }
</style>