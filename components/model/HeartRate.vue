<template>
  <div class="pt-8 slider d-flex flex-column align-center">
    <div class="font-weight-bold text-subtitle-2 text-sm-subtitle-2 text-md-body-1">
      Heart Rate
    </div>
    <v-slider
        dense 
        v-model="beat"    
        min="0" max="5000"
        thumb-color="info"
        track-color="secondary"
        track-fill-color="secondary"
        hide-details
        class="slider"
        @change="$nuxt.$emit('beat-change',beat)"     
      >
      </v-slider>
      <div class="text-caption text-sm-body-2 font-italic">
        beats per minute
      </div>
  </div>
</template>

<script>

  export default {   
    name: "HeartRate",
  
    data() {
      return {
        beat:2000,
      }
    }
  }

</script>

<style scoped lang="scss">
  .slider{
    width:100%;
  }

</style>