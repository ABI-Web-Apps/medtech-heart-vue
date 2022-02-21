<template>
  <div>
    <div v-if="section=='research'" 
      class="container-default research-page flexbox --vertical"
      :class="$vuetify.breakpoint.smAndUp?'full-height':''"
    >
      <div class="pt-4 heading">
        <h3 class="heading__main">Heart Mechanics Research at the Auckland Bioengineering Institute</h3>
        <div class="heading__sub">
          Improving diagnosis and management of heart diseases<span v-if="$vuetify.breakpoint.mdAndUp"><br/></span>
          using personalised biomechanics and image-driven computer modelling
        </div>
      </div> 
      <iframe 
        class="researchVideo" 
        frameborder="0" 
        src="https://www.youtube.com/embed/FazkF5oQTU0?rel=0&amp;showinfo=0&autoplay=1"
        allowfullscreen>
      </iframe>
    </div>
    <div v-if="section=='team'" 
      class="container-default research-page flexbox  --vertical"
      :class="$vuetify.breakpoint.mdAndUp?'full-height':''"
    >
      <div class="pt-4 heading">
        <h3 class="heading__main">Our Heart Mechanics Research Team</h3>
        <div class="heading__sub pt-2">
          An inter-disciplinary collaboration between experts in <span v-if="$vuetify.breakpoint.smAndUp"><br/></span>
          bioengineering, physiology, software development, and medical imaging
        </div>
      </div>    
      <div class="detail">
        <img src="~assets/images/headshots.png"/>
      </div>
      <div class="detail">
        <img src="~assets/images/funding-abi-medtech.png"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'default',
  name: 'AboutPage',

  data() {
    return {
      section:'research'
    }
  },
 
  created() {
    this.$nuxt.$on('about-navigation', (componentName) => {
      this.section=componentName
    })
  },

  beforeDestroy(){
    this.$nuxt.$off('about-navigation')
  }
}
</script>

<style scoped lang="scss">

  .research-page{
    align-items:center; 
    row-gap:1rem;  
  }

  .heading{
    text-align:center;
    &__main{
      color:$clear;
      font-size:1.5rem;
      @media #{map-get($display-breakpoints, 'xl-only')}
      { font-size: 1.8rem;}
      @media #{map-get($display-breakpoints, 'xs-only')}
      { font-size: 1.3rem;} 
    }
    &__sub{
      padding-top:1px;
      font-size:1.1rem;
      color:$text-color;
      @media #{map-get($display-breakpoints, 'xl-only')}
      { font-size: 1.3rem;} 
      @media #{map-get($display-breakpoints, 'xs-only')}
      { font-size: 1rem;} 
    }  
  }

  .researchVideo{
    width:100%;
    height:24rem; 
    flex-grow:1;
  }
  
  .detail{
    width:80%;
    padding-bottom:1rem;
    img{
      width:100%;
      height:auto;
    }   
  }
</style>
