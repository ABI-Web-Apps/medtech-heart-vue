<template>
  <div class="navi">
    <div v-if="subMenuActive" :class="$vuetify.breakpoint.smAndDown ? 'sub-menu' : '' "> 
      <v-bottom-navigation grow
        :input-value="subMenuActive" 
        :color="activeColor"       
      >
        <v-btn class="button-default"
          v-for="subTopic in selectedTopic.subTopics" 
          :key="subTopic.title"   
          :disabled="$isSubTopicDisabled(subTopic)"
          :to="{ name: 'slug',params:{'slug':selectedTopic.title+'-'+subTopic.title}}"      
        >
          <span>{{subTopic.title}}</span>
          <v-icon>{{subTopic.icon}}</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>
    <v-bottom-navigation grow         
      :fixed="$vuetify.breakpoint.smAndDown ? true : false"
      :color="activeColor"
      v-model="menuCaption"
    >
      <v-btn v-for="topic in topics" 
        class="button-default"
        :key="topic.title" 
        :value="topic.title"
        :disabled=$isTopicDisabled(topic)  
        :to="{ name: 'slug',params:{'slug':topic.title+'-'+topic.subTopics[0].title}}"
        @click="selectedTopic=topic"
      >
        <span>{{topic.title}}</span>
        <v-icon>{{topic.icon}}</v-icon>
      </v-btn>
      <v-btn class="button-default" :to="{ name: 'about' }"  @click="updateAbout()">
        <span>About</span>
        <v-icon>mdi-account-group</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>

export default {
    
  data: () => {
    return {
      selectedTopic: {},
      topics:{},
      subMenuActive:false,
    }
  },

  methods:{
    updateAbout:function(){
      this.subMenuActive=false
    },  
    getIconWidth(){
      let menuItemWidth=100 /(topics.length + 1)
      return menuItemWidth.toFixed(2)
    }
  },
  
  computed:{
    activeColor(){
      return this.$route.name==='about'? this.$vuetify.theme.themes.dark.secondary : this.$category()
    },
    menuCaption(){
      return this.$parentTitle()
    }
  },

  watch:{
    selectedTopic:function(currentTopic){
      this.subMenuActive= currentTopic.subTopics.length>1?  true : false 
    },
    subMenuActive:function (isActive) {     
      $nuxt.$emit('menu-height-changed',isActive?'2':'1')
    }
  },

  created(){
    this.topics=this.$getTopics()
    if(this.$route.name==='slug'){
      const parentTitle= this.$parentTitle().toLowerCase()
      this.selectedTopic=this.topics.filter(function (topic) {
        return topic.title.toLowerCase()===parentTitle
      })[0]
    }
  }
}

</script>

<style scoped lang="scss">

.navi{
  position:relative;
}

.sub-menu{
  position:fixed;
  bottom:56px;
  width:100%;
}

.v-btn.button-default{
  height:56px !important;
  background: -webkit-linear-gradient(rgba(5,5,5,1), rgba(30,30,30,1) 4%,  rgba(5,5,5,1)); /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(rgba(5,5,5,1), rgba(30,30,30,1) 4%,  rgba(5,5,5,1)); /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(rgba(5,5,5,1), rgba(30,30,30,1) 4%,  rgba(5,5,5,1)); /* For Firefox 3.6 to 15 */
  background: linear-gradient(rgba(5,5,5,1), rgba(30,30,30,1) 4%,  rgba(5,5,5,1)); /* Standard syntax */;
  border-left: 2px rgb(5,5,5) solid;
}

</style>