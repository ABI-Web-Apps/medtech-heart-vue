<template>
  <div>
    <div v-if="$route.name=='index' || $route.name=='topics-slug'"> 
      <v-card class="pa-4" :class="currentBg" tile>
        <panel 
          :topicHeading="topicHeading"
          :subTopicHeading="subTopicHeading"
          :dataFile="dataFile"
          :category="category"
          @play-video="playVideo"/> 
      </v-card>
    </div>
    <div v-if="$route.name=='about'">
     <v-card class="pa-4 bg-secondary">
        About
        <!--<about-us/>-->
      </v-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LeftPane',
  
  props: {
    /*panelHeightClass: {
      type:String
    }*/
  },

  computed:{
    topicHeading(){
      return this.$route.params.mainHeading
    },
    subTopicHeading(){
      return this.$route.params.subHeading 
    },
    dataFile(){
      return this.$route.params.slug
    },
    category(){
      return this.$route.params.category
    },
    currentBg(){
      return this.category? 'bg-'+this.category : 'bg-success'
    }
  },

  methods:{
    playVideo:function(videoId){
      $nuxt.$emit('load-video-player',videoId)
    },
  }
}
</script>

<style scoped lang="scss">
  .left-pane{
    height:100vh;
  }
</style>