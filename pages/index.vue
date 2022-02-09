<template>
  <div class="right-pane">
    <div v-if="!showVideo">
      <model/>
    </div>
    <div v-if="showVideo">
      <video-player :videoId="currentVideoId" @close-video="showVideo=false"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      currentVideoId:null,
      showVideo:false,
    }
  },

  created() {
    this.$nuxt.$on('load-video-player', (videoId) => {
      this.currentVideoId=videoId
      this.showVideo=true
    }),
    this.$nuxt.$on('close-video',()=>{
       this.showVideo=false
    }),
    this.$nuxt.$on('content-changed', (currentContent) => {
      //currentContent
    })
  },

  beforeDestroy(){
    this.$nuxt.$off('load-video-player')
    this.showVideo=false
    this.$nuxt.$off('content-changed')
  }
}
</script>


<style scoped lang="scss">
  .right-pane{
    color:$text-color;
  }

</style>