<template>
  <div>
    <div class="container-default flexbox" :class="$vuetify.breakpoint.mdAndUp?'full-height':'auto-height'">
      <v-container class="pa-0">
        <v-row class="d-flex justify-space-between" no-gutters>
          <v-col cols="12" xs="12" sm="9" md="8" lg="9">
            <div class="model-container">
              <!--<v-overlay :value="modelOverlay" absolute opacity=0>
                <model/>
              </v-overlay>-->
               <model/>
              <div class="rate-2 d-flex d-sm-none">
                <heart-rate/>
              </div>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="3" md="4" lg="3">
            <v-container class="pa-0 fill-height">
              <v-row class="d-flex flex-column" no-gutters>
                <v-col class="d-none d-sm-flex flex-grow">
                  <traces/>
                </v-col>
                <v-col class="d-none d-sm-flex">
                  <div class="item" style="width:80%;height:8rem">
                    <heart-rate/>
                  </div>
                </v-col>
                <v-col class="d-none d-md-block">
                  <div class="item mt-auto">
                    <div class="logo-mdAndUp">
                      <logo/>
                    </div>
                  </div>
                </v-col>
              </v-row>
              <v-row class="d-flex d-sm-none" no-gutters>
                <v-col>
                  <traces/>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>   
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      modelOverlay:true
    };
  },
}

</script>


<style scoped lang="scss">

  .model-container{
    //width:100vw;
    position:relative;
  }

  .item{
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    margin:auto;
  }

  .rate-2{
    position:absolute;
    left:0px;
    top:20px;
    width:120px;
  }

  .logo-mdAndUp{
    width:85%;
    padding:0.2rem;
  }
</style>