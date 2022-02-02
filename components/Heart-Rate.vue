<template>
  <div class="slider">
    <v-subheader class="pl-0">
      Heart Rate
    </v-subheader>
    <v-slider
        dense v-model="beat"
        hint="beats per minute"
        color="info"      
        min="0" max="200"
        :thumb-size="24"
        thumb-label
        thumb-color="secondary"
        persistent-hint     
      >
      </v-slider>
  </diV>
</template>

<script>
  export default {
    data () {
      return {
        beat: 100,
      }
    },
  }
</script>

<style scoped lang="scss">
  .slider{
    width:100%;
  }

</style>