<template>
  <div>
    <div v-if="$route.name=='index'"> 
      <v-card class="pa-4" :class="currentBg" tile :style="panelHeightStyle">
        <panel 
          :topicHeading="currentContent.parentHeading"
          :subTopicHeading="currentContent.heading"
          :dataFile="currentContent.dataFile"
          :category="currentContent.category"/> 
      </v-card>
    </div>
    <div v-if="$route.name=='about'">
     <v-card class="pa-4 bg-secondary" :style="panelHeightStyle">
        <about-us/>
      </v-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LeftPane',
  
  data() {
    return {
      currentContent:{},
    }
  },

  props: {
    panelHeight: {
      type:Number
    }
  },

  computed:{
    currentBg(){
      return this.currentContent.category? 'bg-'+this.currentContent.category : 'bg-success'
    },
    panelHeightStyle(){
      if(this.$vuetify.breakpoint.mdAndUp)
        return{'min-height':this.panelHeight-2+'px'}
      else
        return{'height':'auto'} 
    }
  },

  methods:{
    registerRefreshEvent(){
      this.$nuxt.$on('content-changed', (currentContent) => {
      this.currentContent=currentContent
      })
    }
  },

  created() {
    this.registerRefreshEvent()
  },

  updated() {
    this.registerRefreshEvent()
  },

  beforeDestroy(){
    this.$nuxt.$off('content-changed')
  }
  
}
</script>

<style scoped lang="scss">

</style>