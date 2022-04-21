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
    <!-- <div class="firefox w-full lg:w-[30%] lg:fixed top-0 left-0"> -->
    <!-- <div class="pa-0" :class="mdAndUp ? 'full-height' : 'auto-height'">
        <div class="d-flex flex-col" no-gutters>
          <div ref="panel">
            <div
              class="pa-0 overflow-y-auto"
              :class="mdAndUp ? 'panel-height' + multiplier : ''"
            >
              <left-pane :panel-height="panelHeight" />
            </div>
          </div>
          <div class="fixed lg:static left-0 bottom-0">
            <navigation />
          </div>
        </div>
        </div>
      </div> -->
    <div
      class="firefox w-full lg:w-[450px] lg:fixed top-0 left-0"
      ref="leftPanel"
    >
      <div class="pa-0">
        <v-row class="d-flex" no-gutters>
          <v-col>
            <div class="pa-0" :class="mdAndUp ? 'full-height' : 'auto-height'">
              <v-row class="d-flex flex-column" no-gutters>
                <v-col ref="panel">
                  <v-card
                    outlined
                    tile
                    class="pa-0 overflow-y-auto transparent"
                    :class="mdAndUp ? 'panel-height' + multiplier : ''"
                  >
                    <left-pane :panel-height="panelHeight" />
                  </v-card>
                </v-col>
                <v-col class="d-none d-md-block fix-it">
                  <navigation />
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
        <div class="d-md-none fixed left-0 bottom-0">
          <navigation />
        </div>
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
.firefox {
  z-index: 1;
}
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
.transparent {
  background-color: rgba(255, 255, 255, 0.1) !important;
  opacity: 0.8;
}
</style>
