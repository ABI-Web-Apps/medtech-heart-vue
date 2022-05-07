<template>
  <div id="video-div">
    <v-overlay
      color="black"
      :value="showVideo"
      :absolute="$vuetify.breakpoint.mdAndUp ? true : false"
      opacity="1"
    >
      <!-- :style="videoStyle" -->
      <div>
        <video-player :videoId="currentVideoId" @close-video="closeVideo()" />
      </div>
    </v-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentVideoId: null,
      showVideo: false,
      overlay: false,
      lastOffset: 0,
      outerWidth: 0,
    };
  },
  //   computed: {
  //     videoStyle() {
  //       return {
  //         width: this.outerWidth,
  //       };
  //     },
  //   },
  methods: {
    closeVideo() {
      this.showVideo = false;
      /* Scroll back to the point where user clicked on video icon - for small devices */
      if (!this.$vuetify.breakpoint.mdAndUp)
        this.$vuetify.goTo(this.lastOffset, {});
    },
  },
  //   mounted() {
  //     this.outerWidth = this.$refs.outerDiv.clientWidth + "px";
  //   },
  created() {
    console.log(this.$route.params);
    //   this.$nuxt.$on("load-video-player", (videoId) => {
    this.currentVideoId = this.$route.params.videoId;
    this.showVideo = true;
    this.lastOffset = process.client ? window.pageYOffset : 0;
    //   });
  },
  beforeDestroy() {
    //   this.$nuxt.$off("load-video-player");
    this.showVideo = false;
  },
};
</script>

<style scoped></style>
