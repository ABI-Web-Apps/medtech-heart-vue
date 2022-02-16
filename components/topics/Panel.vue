<template>
  <div class="pa-1">
    <div class="flexbox demo-head">
      <div>
        <h1 class="main-heading">
          {{$parentHeading()}} 
        </h1>
        <h4 :class="'sub-heading '+$category()+'--text'">
          {{$heading()}}
        </h4>
      </div>
      <div class="d-none d-sm-block" v-if="$demoIcon()">
        <v-tooltip>
          <template v-slot:activator="{ on, attrs }">
             <img :src="require(`@/assets/images/icons/${$demoIcon()}`)"  class="demoIcon" v-bind="attrs"  v-on="on"/>
          </template>
          <img :src="require(`@/assets/images/icons/${$demoIcon()}`)"  class="demoIconZoomed">
        </v-tooltip> 
      </div>
    </div>
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
      fileFound:false
    }
  },

  methods:{
    play: function(event) {
      $nuxt.$emit('load-video-player',event.target.id)
    },
    refreshContent:function(){
      const fileName=this.$dataFile()
      try {
        const panelData = require(`@/assets/data/markdown/${fileName}.md`);
        this.fileFound=true
        this.currentPanel=panelData.default
      }
      catch (e) {
        this.fileFound=false
      }
    },
    addVideoLinks:function(){ 
      if(this.fileFound){      
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
    }
  },

  computed:{
    markedText(){
      return marked(this.currentPanel)
    }
  },

  mounted() {
    this.addVideoLinks()
  },

  created() {
    this.refreshContent()
  },

  updated() {
    this.refreshContent()
    this.addVideoLinks()
  }
}

</script>

<style scoped lang="scss">

  .marked{
    padding-top:0.3rem;
    font-size:0.9rem;
  }

  .demo-head{
    column-gap:2rem;
  }

  .demoIcon{
    width:60px;
    height:60px;
    opacity:0.5;
  }

  .demoIconZoomed{
    width:90px;
    height:90px;
    opacity:1;
  }


</style>