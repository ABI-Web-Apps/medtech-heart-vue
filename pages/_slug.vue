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

 async asyncData({route, $getContentBySlug,error,store}) {
    const slug = route.params.slug   
    let content=$getContentBySlug(slug)
    if(content===null){
      error({ statusCode: 404, message: 'Unexpected Error, Page not found' })
    }
    store.commit('setCurrentContent',content)  
  },

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