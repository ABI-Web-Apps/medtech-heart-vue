<template>
  <div class="pa-2">
    <h1 class="main-heading">{{topicHeading}}</h1>
    <h4 :class="'sub-heading '+category+'--text'">{{subTopicHeading}}</h4>
    <div v-if="fileFound" ref="markedDiv" class="marked" v-html="markedText"></div>
    <div v-if="!fileFound" class="error-message">
      <span>Data Not Found</span>
    </div>
  </div>
</template>

<script>

import { marked } from 'marked'

export default { 
  name: "Panel",

  data() {
    return {
      currentPanel:'',
      fileFound:false,
    }
  },

  props: {
    topicHeading: {
      type:String,
    },
    subTopicHeading:{
      type:String,
    },
    dataFile: {
      type:String,
    },
    category:{
      type:String,
    }
  },

  methods:{
    play: function(event) {
      $nuxt.$emit('load-video-player',event.target.id)
    },
    refreshContent:function(fileName){      
      try {
        const panelData = require(`../assets/data/markdown/${fileName}.md`);
        this.fileFound=true
        this.currentPanel=panelData.default
      }
      catch (e) {
        this.fileFound=false
      }
    },
    addVideoLinks(){         
      const markedDiv=this.$refs.markedDiv
      const links = markedDiv.getElementsByTagName('a')
      let i;
      for (i = 0; i < links.length; i++) {
        let element=links[i]
        if(element.getAttribute("data-play")=="video"){
          element.addEventListener('click',this.play)
        }
      }
    }
  },

  computed:{
    markedText(){
      return marked(this.currentPanel)
    }
  },
  
  created() {
    this.refreshContent(this.dataFile)
  },
  
  watch:{
    dataFile: function (currentFile) {
      if(currentFile){
        this.fileFound=true
        this.refreshContent(currentFile)
      }    
      else{
        this.fileFound=false
      } 
    }
  },

  mounted() {
    if(this.fileFound)
      this.addVideoLinks()
  },

  updated() {
    if(this.fileFound)
      this.addVideoLinks()
  }
}

</script>

<style scoped lang="scss">

  .marked{
    margin-top:1rem;
    font-size:0.8rem;
  }

</style>