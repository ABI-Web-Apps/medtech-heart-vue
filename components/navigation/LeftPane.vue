<template>
  <div class="left-pane">
    <div class="logo d-md-none">
      <logo/>
    </div>
    <div v-if="$route.name=='slug'">
      <v-card class="pa-4" :class="currentBg" tile :style="panelHeightStyle">
        <lazy-panel/> 
      </v-card>
    </div>
    <div v-if="$route.name=='about'">
     <v-card class="pa-4 bg-secondary" :style="panelHeightStyle">
        <lazy-about-us/>
      </v-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LeftPane',

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
  .left-pane{
    position:relative;
  }

  .logo{
    position:absolute;
    width:9rem;   
    top:2px;
    right:6px;
    z-index:999
  }
</style>