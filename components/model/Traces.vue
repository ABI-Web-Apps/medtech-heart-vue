<template>
  <div
    class="d-flex trace-box"
    :class="
      $vuetify.breakpoint.smAndUp || $vuetify.breakpoint.width <= 430
        ? 'flex-column'
        : ''
    "
  >
    <!-- pt-4 pb-1 d-flex flex-column align-center item -->
    <div
      class="mt-4 lg:mt-0 flex flex-col items-center space-y-10 lg:space-y-4"
    >
      <div
        class="font-weight-bold text-subtitle-2 text-xl-h6 text-sm-subtitle-2 text-md-body-1"
      >
        ECG
      </div>
      <div id="rightECG" ref="rightECG" class="w-full h-24 lg:h-[100px]"></div>
      <div id="ecgDescription" class="text-caption text-xl-body-2">
        {{ $ecg().description }}
      </div>
    </div>
    <div class="pt-4 pb-1 d-flex flex-column align-center item">
      <div
        class="font-weight-bold text-subtitle-2 text-xl-h6 text-sm-subtitle-2 text-md-body-1"
      >
        Pressure (mmHg)
      </div>
      <div id="rightLVP" ref="rightLVP" class="w-full h-24 lg:h-[100px]"></div>
      <div id="lvpDescription" class="text-caption text-xl-body-2">
        {{ $lvp().description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idleTime: 0,
      idleTimeLimit: 300000,
      oldTime: new Date(),
      render: undefined,
    };
  },

  mounted() {
    if (process.client) {
      window.ecgDone = false; //to prevent unexpected problem of chart being loaded twice
      window.lvpDone = false;
    }

    // These ecgName and lvpName are global variables come from LVPandECG.js to prevent the name undefined issue.
    ecgName = null;
    lvpName = null;
    loadChart(this.$ecg(), this.$lvp(), this.$category(), 1.0);
    // showECGAndLVP(this.$model().name, 0.0);
    this.updateEcg();
  },
  methods: {
    updateEcg() {
      this.render = this.$currentRender();
      if (this.render) {
        var updateIndicatorsAndTimer = () => {
          var newTime = new Date();
          this.idleTime =
            this.idleTime + newTime.getTime() - this.oldTime.getTime();
          this.oldTime = newTime;
          var normaliseTime = this.render.getCurrentTime() / 3000.0;
          updateIndicator(normaliseTime);
        };

        this.render.addPreRenderCallbackFunction(updateIndicatorsAndTimer);
      }
    },
  },
};
</script>

<style scoped lang="scss">
#ecgDescription,
#lvpDescription {
  width: 90%;
}

.trace-box,
.item {
  width: 100%;
}
</style>
