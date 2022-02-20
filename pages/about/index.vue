<template>
  <div>
    <div v-if="section=='research'" 
      class="container-default research-page flexbox"
      :class="$vuetify.breakpoint.mdAndUp?'full-height':''"
    >
      <div class="heading">
        <h3 class="heading__main">Heart Mechanics Research at the Auckland Bioengineering Institute</h3>
        <span class="heading__sub">
          Improving diagnosis and management of heart diseases
          using personalised biomechanics and image-driven computer modelling
        </span>
      </div> 
      <iframe 
        class="researchVideo" 
        frameborder="0" 
        src="https://www.youtube.com/embed/FazkF5oQTU0?rel=0&amp;showinfo=0&autoplay=1"
        allowfullscreen>
      </iframe>
    </div>
    <div v-if="section=='team'" 
      class="container-default research-page flexbox"
      :class="$vuetify.breakpoint.mdAndUp?'full-height':''"
    >
      <div class="heading">
        <h3 class="heading__main">Our Heart Mechanics Research Team</h3>
        <span class="heading__sub">
          An inter-disciplinary collaboration between experts in
          bioengineering, physiology, software development, and medical imaging
        </span>
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
      section:'research',
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
    flex-direction:column;
    row-gap:1rem;  
  }

  .heading{
    text-align:center;
    &__main{
      color:$clear;
      font-size:1.5rem;
    }
    &__sub{
      padding-top:1px;
      font-size:1.1rem;
      color:$text-color;;
    }  
  }

  .researchVideo{
    padding-top:2rem;
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
