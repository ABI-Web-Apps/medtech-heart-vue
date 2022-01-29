<template>
  <div>
    <div v-if="subMenuActive">  
      <v-bottom-navigation grow
        :input-value="subMenuActive" 
        :fixed="$vuetify.breakpoint.smAndDown ? true : false"
        :color="activeColor"
      >
        <v-btn class="button-default"
          v-for="subTopic in selectedTopic.subTopics" 
          :key="subTopic.title"
          @click="updateSubTopic(subTopic)"
          :to="{name:'topics-slug', params:{'slug':subTopic.dataFile,'mainHeading':selectedTopic.heading,'subHeading':subTopic.heading,'category':subTopic.category}}" 
        >
          <span>{{subTopic.title}}</span>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>
    <v-bottom-navigation grow
      :fixed="$vuetify.breakpoint.mdAndUp ? false : true"       
      :color="activeColor"
    >
      <v-btn class="button-default" to="/" exact @click="updateHome">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn v-for="topic in topics" 
        class="button-default"
        :key="topic.title"
        @click="updateTopic(topic)"
        :to="{name:'topics-slug', params:{'slug':topic.subTopics[0].dataFile,'mainHeading':topic.heading,'subHeading':topic.subTopics[0].heading,'category':topic.subTopics[0].category}}"   
      >
        <span>{{topic.title}}</span>
        <v-icon>{{topic.icon}}</v-icon>
      </v-btn>
      <v-btn class="button-default" :to="{ name: 'about' }"  @click="updateAbout">
        <span>About</span>
        <v-icon>mdi-account-group</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
  import topicsData from '@/assets/data/topics.json'

  export default {
    
  data: () => {
    return {
      selectedTopic: {},
      topics:topicsData,
      subMenuActive:false,
      activeColor:'',
    }
  },

  methods:{
    updateHome:function(){
      this.subMenuActive=false
      this.activeColor=this.$vuetify.theme.themes.dark.success
    },
    updateAbout:function(){
      this.subMenuActive=false
      this.activeColor=this.$vuetify.theme.themes.dark.secondary
    },  
    updateTopic:function(topic){
      this.selectedTopic=topic
      this.subMenuActive= topic.subTopics.length>0?  true : false 
      this.activeColor=topic.subTopics[0].category
    },
    updateSubTopic:function(subTopic){
      this.activeColor=subTopic.category
    },
    getIconWidth(){
      let menuItemWidth=100 /(topics.length + 2)
      return menuItemWidth.toFixed(2)
    }
  },

  computed: {
    activeButton(){
      return{
        'background':this.activeColor+ ' !important'
      }
    },

    iconStyle(){
      return{
        'width': this.getIconWidth() + '%'
      }
    }
  },
  
  watch:{
    subMenuActive:function (isActive) {     
      $nuxt.$emit('menu-height-changed',isActive?'2':'1')
    }
  },

  created(){
    this.activeColor=this.$vuetify.theme.themes.dark.success
  },

}
</script>

<style scoped lang="scss">

.v-btn.button-default{
  height:56px !important;
  background: -webkit-linear-gradient(rgba(5,5,5,1), rgba(30,30,30,1) 4%,  rgba(5,5,5,1)); /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(rgba(5,5,5,1), rgba(30,30,30,1) 4%,  rgba(5,5,5,1)); /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(rgba(5,5,5,1), rgba(30,30,30,1) 4%,  rgba(5,5,5,1)); /* For Firefox 3.6 to 15 */
  background: linear-gradient(rgba(5,5,5,1), rgba(30,30,30,1) 4%,  rgba(5,5,5,1)); /* Standard syntax */;
  border-left: 2px rgb(5,5,5) solid;
}

/*
.v-btn.v-btn--active{
  background:green !important;
  border-color: yellow;
}*/
</style>