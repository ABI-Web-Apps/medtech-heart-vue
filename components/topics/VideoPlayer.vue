<template>
  <div>
    <div v-if="videoFound" 
      class="container-default video-player flexbox"
      :class="$vuetify.breakpoint.mdAndUp?'full-height':''"
    > 
      <div id="outer-video" class="primary">     
        <iframe allowfullscreen
          frameborder="0" 
          :class="getVideoStyle()"
          :src="selectedVideo.link"
        >
        </iframe>
      </div>
      <div id="outer-credits">
        <div class="credits flexbox">
          <img src="@/assets/images/Annie-Jones.png" class="img-icon"/>
          <div class="credit-button flexbox">
            <div class="annie-liz flexbox d-none d-sm-block">
              <span>{{credits}}</span>
            </div>
            <div class="button">
              <v-btn class="bg-secondary" elevation="8" small block @click="close">
                <span> Click to Close</span>
              </v-btn>
            </div>
          </div>
          <img src="@/assets/images/Liz-Broadbent.png" class="img-icon"/>     
        </div>
        <div class="annie-liz flexbox d-sm-none">
          <span>{{credits}}</span>
        </div>
      </diV>
    </div>
    <div v-if="!videoFound" class="error-message">
      <h3>Specified video was not found</h3>
    </div>
  </div>
</template>


<script>
import videosData from '@/assets/data/videos.json'

export default {  
  data() {
    return {
      videoFound:false,
      videos:videosData,
      selectedVideo:{},
      credits:'Movie credits to Annie Jones and Dr. Liz Broadbent, University of Auckland'
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
    },
    getVideoStyle(){
      return 'display-video --'+ this.$vuetify.breakpoint.name
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
  #outer-video{
    flex-grow:1
  }
  #outer-credits{
    padding-bottom:1px;
  }
  
  .display-video{
    display:block;
    width:100%;
    &.--xl{height:85vh;}
    &.--lg{height:80vh;}
    &.--md{height:76vh;}
    &.--sm{height:25rem;}  
    &.--xs{height:20rem;}  
  }

  .credits{
    justify-content:space-between;
    align-items: center;
    column-gap:1rem;
  }

  .credit-button{
    flex-direction:column;
    flex-grow:1;
    row-gap:0.5rem;
    align-items: center;
  }

  .button{
    width:90%;
    max-width:20rem;
  }

 .img-icon{
    height:4rem;
    width:4rem;
  }

  .annie-liz{
    padding:0px 1px;
    text-align:center;
    justify-content:center;
    span{
      font-size:0.8rem;
      font-style:italic;
      color:$text-color;
    }
  }
</style>