<template>
  <div
    class="container-default flexbox"
    :class="$vuetify.breakpoint.mdAndUp ? 'full-height' : 'auto-height'"
  >
    <v-container class="pa-0" ref="rightMost">
      <v-row class="d-flex" no-gutters>
        <v-col cols="12" xs="12" sm="9" md="8" lg="9">
          <div class="model-rate">
            <model
              :availableHeight="rateAndTracesHeight"
              :totalHeight="rightMostHeight"
            />
            <div class="rate-smAndDown d-flex d-sm-none">
              <heart-rate />
              <!--Small screens only -->
            </div>
          </div>
        </v-col>
        <v-col cols="12" xs="12" sm="3" md="4" lg="3">
          <div
            class="pa-0 d-flex flex-column justify-space-between"
            :style="rightContainerStyle"
          >
            <div
              ref="rateAndTraces"
              class="flex-grow-1 d-flex flex-column justify-center"
            >
              <div class="d-none d-sm-flex justify-center">
                <div class="pb-1 rate-mdAndUp">
                  <heart-rate />
                </div>
              </div>
              <div class="pt-5 justify-center" :style="traceMarginBottom">
                <traces />
              </div>
            </div>
            <div class="d-none d-md-flex justify-center">
              <div class="pt-4 pa-1 logo-mdAndUp">
                <logo />
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rightMostHeight: 0,
      rateAndTracesHeight: 0,
      // traceMarginBottom:0
    };
  },

  mounted() {
    this.getDomHeights();
  },

  updated() {
    this.getDomHeights();
  },

  computed: {
    rightContainerStyle() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return {
          height: this.rightMostHeight + "px",
        };
      }
    },
    traceMarginBottom() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return {
          // display: flex,
          // "justify-content": center,
          margin: "auto",
          width: "90%",
          "margin-bottom": 120 + "px",
        };
      } else {
        return {
          width: "100%",
        };
      }
    },
  },

  methods: {
    getDomHeights() {
      this.rightMostHeight = this.$refs.rightMost.clientHeight;
      this.rateAndTracesHeight = this.$refs.rateAndTraces.clientHeight;
    },
  },
};
</script>

<style scoped lang="scss">
.model-rate {
  position: relative;
  width: 100%;
  text-align: center;
}

.rate-mdAndUp {
  width: 80%;
}

.rate-smAndDown {
  position: absolute;
  bottom: 20px;
  width: 120px;
  left: 2%;
}

.logo-mdAndUp {
  width: 70%;
  display: block;
}
// .traces {
//   margin-bottom: 120px;
// }
</style>
