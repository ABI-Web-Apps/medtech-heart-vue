<template>
  <div>
    <div v-if="$route.name=='index' || $route.name=='topics-slug'"> 
      <v-card class="pa-4" :class="currentBg" tile :style="panelHeightStyle">
        <panel 
          :topicHeading="topicHeading"
          :subTopicHeading="subTopicHeading"
          :dataFile="dataFile"
          :category="category"/> 
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
    panelHeight: {
      type:String
    }
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
    },
    panelHeightStyle(){
      return{
        'height':this.panelHeight+'px'
      }
    }
  },

}
</script>

<style scoped lang="scss">

</style>