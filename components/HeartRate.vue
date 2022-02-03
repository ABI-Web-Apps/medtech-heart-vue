<template>
  <div class="slider d-flex flex-column align-center">
    <div class="font-weight-medium text-subtitle-2 text-sm-subtitle-2 text-md-body-1">
      Heart Rate
    </div>
    <v-slider
        dense 
        v-model="beat"    
        min="1" max="200"
        thumb-color="info"
        track-color="secondary"
        track-fill-color="secondary"
        hide-details
        class="slider"
        @change="$emit('beat-change',beat)"     
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
        beat:80,
      }
    }
  }

</script>

<style scoped lang="scss">
  .slider{
    width:100%;
  }

</style>