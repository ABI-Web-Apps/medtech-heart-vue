<template>
  <div>
    <div v-if="$route.name=='slug'">
      <v-card class="pa-4" :class="currentBg" tile :style="panelHeightStyle">
        <panel/> 
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
      return this.$category()? 'bg-'+this.$category() : 'bg-success'
    },
    panelHeightStyle(){
      if(this.$vuetify.breakpoint.mdAndUp)
        return{'min-height':this.panelHeight-2+'px'}
      else
        return{'height':'auto'} 
    }
  }
}
</script>

<style scoped lang="scss">

</style>