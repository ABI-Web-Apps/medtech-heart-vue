<template>
  <div class="pa-2">
    <h1 class="pt-2 main-heading">
      About Us
    </h1>
    <div class="navigate flexbox --vertical">
      <div class="button" :class="researchSelected?'button --active':'button --inactive'">
        <v-btn plain @click="toggleNavigation('research')">
          Our Research
        </v-btn>
      </div>
      <div class="button" :class="teamSelected?'button --active':'button --inactive'">
        <v-btn plain @click="toggleNavigation('team')">
          Our Team
        </v-btn>
      </div>
    </div>
    <div class="feedback font-weight-medium">
      Visit our <a href="#">Online form</a> to give us your valuable feedback about this app.
    </div>
  </div>
</template>

<script>


export default { 
  name: "AboutUs",

  data() {
    return {
      teamSelected:false,
      researchSelected:true,
    }
  },

  methods:{
    toggleNavigation:function(componentName){
      this.teamSelected=!(this.teamSelected)
      this.researchSelected=!(this.researchSelected)
      $nuxt.$emit('about-navigation',componentName)
    }
  }
}

</script>


<style scoped lang="scss">

  .navigate{
    padding-top:4rem; 
    padding-bottom:2rem;
    align-items:center;
    row-gap:1.5rem;

    .button{
      width:80%;
      max-width:16rem;
      padding:1.2rem;
      border-radius: 1.25rem;
      text-align:center;
      span{
        font-size:1.3rem;
        font-weight:600;
      }

      &.--active{
        color:white;
        background-color:rgba(150,30,150,0.6);
      }
      &.--inactive{
        color:rgba(175,175,175);
        background-color:rgba(255,255,255,0.2);
      }
    }
  }

  .feedback{
    padding:1rem;
    line-height:1rem;
    a{
      color:yellow;
    }
  }
</style>