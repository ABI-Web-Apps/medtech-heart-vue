<template>
  <div>
    <div v-if="section=='research'" 
      class="research-page flexbox"
      :class="$vuetify.breakpoint.mdAndUp?'full-height':''"
    >
      <div class="title">
        <h3 class="title__main">Heart Mechanics Research at the Auckland Bioengineering Institute</h3>
        <span class="title__sub">
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
      class="research-page flexbox"
      :class="$vuetify.breakpoint.mdAndUp?'full-height':''"
    >
      <div class="title">
        <h3 class="title__main">Our Heart Mechanics Research Team</h3>
        <span class="title__sub">
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
    padding:2rem 4rem;
    flex-direction:column;
    row-gap:1rem;  
  }

  .title{
    text-align:center;
    &__main{
      color:$clear;
      font-size:1.5rem;
    }
    &__sub{
      padding-top:2px;
      font-size:1.2rem;
      color:$text-color;
    }  
  }

  .researchVideo{
    padding-top:2rem;
    width:100%;
    height:24rem; 
    flex-grow:1;
  }
  
  .detail{
    width:100%;
    padding-bottom:2px;
    img{
      width:90%;
      height:auto;
    }   
  }
</style>
