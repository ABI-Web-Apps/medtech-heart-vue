<template>
  <div>
    <div v-if="videoFound" 
      class=" container-default video-player flexbox"
      :class="$vuetify.breakpoint.mdAndUp?'full-height':''"
    >      
      <iframe 
        frameborder="0" 
        :class="$vuetify.breakpoint.mdAndUp?'display-video --big' : 'display-video --small'"
        :src="require('@/assets/videos/'+selectedVideo.link)"
        allowfullscreen>
      </iframe>
      <div class="credits flexbox">
        <img src="@/assets/images/Annie-Jones.png" class="img-icon"/>
        <div class="credit-button">
          <div class="d-none d-sm-block">
            <span class="annie-liz">
                Movie credits to Annie Jones and Dr. Liz Broadbent, University of Auckland
            </span>
          </div>
          <div class="button">
            <v-btn class="bg-secondary" elevation="8" small block @click="close">
              <span> Click to Close</span>
            </v-btn>
          </div>
        </div>
        <img src="@/assets/images/Liz-Broadbent.png" class="img-icon"/>     
      </div>
      <div class="annie-liz d-sm-none">
        <span>
          Movie credits to Annie Jones and Dr. Liz Broadbent, University of Auckland
        </span>
      </div>
    </div>
    <div v-if="!videoFound" class="error-message">
      <h3>Specified video was not found</h3>
    </div>
  </div>
</template>


<script>
import videosData from '../assets/data/videos.json'

export default {  
  data() {
    return {
      videoFound:false,
      videos:videosData,
      selectedVideo:{}
    }
  },

  props: {
    videoId: {
      type: String,
      required:true
    }
  },

  methods:{
    refreshVideo:function(currentId){
      this.videoFound=false
      if(currentId){
        this.selectedVideo=this.videos[currentId]
        if(this.selectedVideo){
          this.videoFound=true
        }  
      }
    },
    close:function(){
      this.$emit('close-video')
    }
  },

  watch:{
    videoId: function (currentId) {
      this.refreshVideo(currentId)
    }
  },

  created(){
    this.refreshVideo(this.videoId)
  }
}

</script>

<style scoped lang="scss">
  .video-player{
    flex-direction:column;
    row-gap:1rem;  
  }

  .display-video{
    width:100%;
    &.--big{height:80vh;}
    &.--small{height:15rem;}  
  }

  .img-icon{
    height:4rem;
    width:4rem;
  }

  .credits{
    justify-content:space-between;
    align-items: center;
    column-gap:1rem;
  }

  .credit-button{
    display:flex;
    flex-direction:column;
    flex-grow:1;
    row-gap:0.5rem;
    align-items: center;
  }

  .button{
    width:90%;
    max-width:20rem;
  }

  .annie-liz{
    display:flex;
    padding:0px 1px;
    text-align:center;
    align-items:centre;
    font-size:0.8rem;
    font-style:italic;
    color:$text-color;
  }
</style>