<template>
  <v-app>
    <div class="order-2">
      <div class="w-full h-screen">
        <v-main>
          <div
            class="pa-0 black overflow-y-auto"
            :class="mdAndUp ? 'full-height' : 'auto-height'"
          >
            <Nuxt />
          </div>
        </v-main>
      </div>
    </div>
    <div class="w-full lg:w-[450px] lg:h-screen lg:fixed top-0 left-0">
      <div class="pa-0" :class="mdAndUp ? 'full-height' : 'auto-height'">
        <!-- <div class="pa-0"> -->
        <v-row class="d-flex flex-row" no-gutters>
          <v-col ref="panel">
            <div
              class="pa-0 overflow-y-auto"
              :class="mdAndUp ? 'panel-height' + multiplier : ''"
            >
              <left-pane :panel-height="panelHeight" />
            </div>
          </v-col>
          <v-col class="fixed bottom-0 lg:static left-0">
            <navigation />
          </v-col>
        </v-row>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",

  data: () => {
    return {
      multiplier: 1,
      panelHeight: 0,
    };
  },

  computed: {
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
  },

  mounted() {
    this.panelHeight = this.$refs.panel.clientHeight;
  },

  updated() {
    this.panelHeight = this.$refs.panel.clientHeight;
  },

  created() {
    this.$nuxt.$on("menu-height-changed", (multiplier) => {
      this.multiplier = multiplier;
    });
  },

  beforeDestroy() {
    this.$nuxt.$off("menu-height-changed");
  },
};
</script>

<style scoped lang="scss">
.fix-it {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  bottom: 0;
}

.panel-height1 {
  height: calc(100vh - 56px);
}
.panel-height2 {
  height: calc(100vh - 112px);
}
</style>
