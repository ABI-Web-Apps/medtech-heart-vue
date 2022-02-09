<template>
  <div class="navi">
    <div v-if="subMenuActive" :class="$vuetify.breakpoint.smAndDown ? 'sub-menu' : '' "> 
      <v-bottom-navigation grow
        :input-value="subMenuActive"        
      >
        <v-btn class="button-default"
          v-for="subTopic in selectedTopic.subTopics" 
          :key="subTopic.title"   
          :disabled="isSubTopicDisabled(subTopic)"
          @click="updateSubTopic(subTopic)" 
        >
          <span>{{subTopic.title}}</span>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>
    <v-bottom-navigation grow         
      :fixed="$vuetify.breakpoint.smAndDown ? true : false"
    >
      <v-btn v-for="topic in topics" 
        class="button-default"
        :key="topic.title" 
        :disabled=isTopicDisabled(topic)  
        @click="updateTopic(topic)"
        to="/"
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
      subActiveColor:'',
    }
  },

  methods:{
    updateAbout:function(){
      this.subMenuActive=false
      this.activeColor=this.$vuetify.theme.themes.dark.secondary
    },  
    updateTopic:function(topic){
      this.selectedTopic=topic
      this.subMenuActive= topic.subTopics.length>1?  true : false 
      this.updateSubTopic(topic.subTopics[0]) 
    },
    updateSubTopic:function(subTopic){
      this.activeColor=subTopic.category
      this.refereshContent(subTopic)
    },
    getIconWidth(){
      let menuItemWidth=100 /(topics.length + 2)
      return menuItemWidth.toFixed(2)
    },
    refereshContent(subTopic){    
      let currentContent={...subTopic, parentHeading : this.selectedTopic.heading}
      this.$nuxt.$emit('content-changed',currentContent)
    },
    isTopicDisabled(topic){
      let flag=true    
      if(topic.subTopics){
        if(topic.subTopics.length>0){
          if(topic.subTopics[0].dataFile){
            if(topic.subTopics[0].dataFile!=""){
              flag=false
            }
          }
        }
      }     
      return flag
    },
    isSubTopicDisabled(subTopic){
      let flag=true
      if(subTopic.dataFile){
        if(subTopic.dataFile!=""){
          flag=false
        }
      }
      return flag  
    }
  },

  computed: {
    /*
    activeButton(){
      return{
        'background':this.activeColor+ ' !important'
      }
    },

    iconStyle(){
      return{
        'width': this.getIconWidth() + '%'
      }
    }*/
  },
  
  watch:{
    subMenuActive:function (isActive) {     
      $nuxt.$emit('menu-height-changed',isActive?'2':'1')
    }
  },

  created(){
    //let defaultTopic= this.topics.find(el => el.title === "Home");
    let defaultTopic=this.topics[0]
    this.updateTopic(defaultTopic)
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