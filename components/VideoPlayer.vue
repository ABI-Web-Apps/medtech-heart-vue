<template>
  <div>
    <div v-if="videoFound" 
      class="video-player flexbox"
      :class="$vuetify.breakpoint.mdAndUp?'full-height':''"
    >      
      <iframe 
          frameborder="0" 
          class="display-video"
          :src="require('@/assets/videos/'+selectedVideo.link)"
          allowfullscreen>
      </iframe>
      <div class="credits flexbox">
        <img src="@/assets/images/Annie-Jones.png" class="img-icon"/>
        <div class="credit-button">
          <div class="d-none d-sm-block">
            <span class="annie-liz">
              <i>
                Movie credits to Annie Jones and Dr. Liz Broadbent, University of Auckland
              </i>
            </span>
          </div>
          <div class="button">
            <v-btn block class="secondary" @click="close">
              <span> Click to Close</span>
            </v-btn>
          </div>
        </div>
        <img src="@/assets/images/Liz-Broadbent.png" class="img-icon"/>     
      </div>
      <div class="annie-liz d-sm-none">
        <span>
          <i>Movie credits to Annie Jones and Dr. Liz Broadbent, University of Auckland</i>
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
    padding:1rem 3rem;
    flex-direction:column;
    row-gap:1rem; 
    jistify-content:space-between;  
  }

  .display-video{
    width:100%;
    height:30rem; 
  }

  .img-icon{
    height:5rem;
    width:5rem;
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
    align-content:center;
    align-items: center;
  }

  .button{
    width:90%;
    max-width:20rem;
  }

  .annie-liz{
    display:flex;
    padding:0px 2px;
    text-align:center;
    align-items:centre;
  }
</style>