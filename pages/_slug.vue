<template>
  <div class="right-pane">
    <div class="text-center">
      <right-pane/>
      <v-overlay :value="showVideo" absolute opacity=1>
        <div class="overlay-video">
          <video-player :videoId="currentVideoId" @close-video="showVideo=false"/>
        </div>
      </v-overlay>
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
      overlay:false
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
  }
}
</script>


<style scoped lang="scss">
  .right-pane{
    color:$text-color;
  }

  .overlay-video{
    //background-color:blue !important;
    //width:700px;
  }

</style>