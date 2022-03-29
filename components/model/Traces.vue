<template>
  <div
    class="d-flex trace-box"
    :class="
      $vuetify.breakpoint.smAndUp || $vuetify.breakpoint.width <= 430
        ? 'flex-column'
        : ''
    "
  >
    <div class="pt-4 pb-1 d-flex flex-column align-center item">
      <div
        class="font-weight-bold text-subtitle-2 text-xl-h6 text-sm-subtitle-2 text-md-body-1"
      >
        ECG
      </div>
      <div id="rightECG" ref="rightECG" class="chart"></div>
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
      <div id="rightLVP" ref="rightLVP" class="chart"></div>
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
    };
  },

  mounted() {
    if (process.client) {
      window.ecgDone = false; //to prevent unexpected problem of chart being loaded twice
      window.lvpDone = false;
    }
    loadChart(this.$ecg(), this.$lvp(), this.$category(), 1.0);
    // showECGAndLVP(this.$model().name, 0.0);
    const that = this;
    setTimeout(that.updateEcg(), 5000);
  },
  methods: {
    updateEcg() {
      var updateIndicatorsAndTimer = () => {
        var newTime = new Date();
        this.idleTime =
          this.idleTime + newTime.getTime() - this.oldTime.getTime();
        this.oldTime = newTime;
        var normaliseTime = render.getCurrentTime() / 3000.0;
        updateIndicator(normaliseTime);
      };

      render.addPreRenderCallbackFunction(updateIndicatorsAndTimer);
    },
  },
};
</script>

<style scoped lang="scss">
#ecgDescription,
#lvpDescription {
  width: 90%;
}

.chart {
  padding-bottom: 2px;
  width: 100%;
  height: 90px;
  @media #{map-get($display-breakpoints, 'md-only')} {
    height: 80px;
  }

  @media #{map-get($display-breakpoints, 'xl-only')} {
    height: 120px;
  }
}

.trace-box,
.item {
  width: 100%;
}
</style>
