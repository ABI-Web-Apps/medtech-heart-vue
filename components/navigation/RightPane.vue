<template>
  <div class="lg:h-screen">
    <div class="pa-0" ref="rightMost">
      <div class="w-full h-auto">
        <model />
        <div class="mr-24 ml-4 d-flex d-sm-none">
          <heart-rate />
          <!--Small screens only -->
        </div>
      </div>
      <div class="w-full lg:fixed top-0 right-0 lg:w-64 lg:h-full">
        <div ref="rateAndTraces" class="flex flex-col justify-around lg:h-full">
          <div class="d-none d-sm-flex justify-center">
            <div class="pb-1 rate-mdAndUp">
              <heart-rate />
            </div>
          </div>
          <div class="pt-5" :style="traceMarginBottom">
            <traces />
          </div>
          <div class="d-none d-md-flex justify-center">
            <div class="pt-4 pa-1 logo-mdAndUp lg:mt-10">
              <logo />
            </div>
          </div>
        </div>
      </div>
    </div>
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
