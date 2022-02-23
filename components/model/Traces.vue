<template>
  <div class="d-flex justify-center" :class="$vuetify.breakpoint.smAndUp || $vuetify.breakpoint.width<=430?'flex-column':''">
    <div class="pt-5 pb-1 d-flex flex-column align-center">
      <div class="font-weight-bold text-subtitle-2 text-xl-h6 text-sm-subtitle-2 text-md-body-1">
        ECG 
      </div>
      <div id="rightECG" ref="rightECG" class="chart">
      </div>
      <div id="ecgDescription" class="text-caption text-xl-body-2">
          {{$ecg().description}}  
      </div>
    </div>
    <div class="pt-5 pb-1  d-flex flex-column align-center">
     <div class="font-weight-bold text-subtitle-2 text-xl-h6 text-sm-subtitle-2 text-md-body-1">
        Pressure (mmHg)
      </div> 
      <div id="rightLVP" ref="rightLVP" class="chart">
      </div>
      <div id="lvpDescription" class="text-caption text-xl-body-2">
        {{$lvp().description}}  
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
    loadChart(this.$ecg().name,this.$ecg().path,this.$lvp().name,this.$lvp().path,this.$category()) 
    
   /*if(this.$store.getters.getChartLoaded!=this.$ecg().name)
    {
      loadChart(this.$ecg().name,this.$ecg().path,this.$lvp().name,this.$lvp().path,this.$category()) 
      this.$store.commit('setChartLoaded',this.$ecg().name) 
    }*/
  },
}

</script>


<style scoped lang="scss">

  #ecgDescription, #lvpDescription{
    width:90%;
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