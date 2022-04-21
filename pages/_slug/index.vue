<template>
  <div ref="outerDiv">
    <div class="text-center">
      <right-pane />
      <!--ID of below div(i.e "video-div") should not be changed. 
          It is used in .md files for creating anchor - 
          in order to scroll to video in small screens when movie icon is clicked 
      -->
      <div id="video-div">
        <v-overlay
          color="black"
          :value="showVideo"
          :absolute="$vuetify.breakpoint.mdAndUp ? true : false"
          opacity="1"
        >
          <div :style="videoStyle">
            <video-player
              :videoId="currentVideoId"
              @close-video="closeVideo()"
            />
          </div>
        </v-overlay>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",

  async asyncData({ route, $getContentBySlug, error, store }) {
    const slug = route.params.slug;
    let content = $getContentBySlug(slug);
    if (content === null) {
      error({ statusCode: 404, message: "Unexpected Error, Page not found" });
    }
    store.commit("setCurrentContent", content);
  },

  data() {
    return {
      currentVideoId: null,
      showVideo: false,
      overlay: false,
      lastOffset: 0,
      outerWidth: 0,
    };
  },

  computed: {
    videoStyle() {
      return {
        width: this.outerWidth,
      };
    },
  },

  methods: {
    closeVideo() {
      this.showVideo = false;
      $nuxt.$emit("closedVideoByClick");
      /* Scroll back to the point where user clicked on video icon - for small devices */
      if (!this.$vuetify.breakpoint.mdAndUp)
        this.$vuetify.goTo(this.lastOffset, {});
    },
  },

  mounted() {
    this.outerWidth = this.$refs.outerDiv.clientWidth + "px";
  },

  created() {
    this.$nuxt.$on("load-video-player", (videoId) => {
      this.currentVideoId = videoId;
      this.showVideo = true;
      this.lastOffset = process.client ? window.pageYOffset : 0;
    });
  },

  beforeDestroy() {
    this.$nuxt.$off("load-video-player");
    this.showVideo = false;
  },
};
</script>

<style scoped lang="scss">
.right-pane {
  width: 100%;
  color: $text-color;
}
</style>
