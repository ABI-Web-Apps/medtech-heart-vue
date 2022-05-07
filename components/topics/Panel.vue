<template>
  <div class="pa-2">
    <div class="flexbox demo-head">
      <div>
        <h1 class="pt-2 main-heading">
          {{ $parentTopic().heading }}
        </h1>
        <h4 :class="'sub-heading font-weight-black ' + $subTitle() + '--text'">
          {{ $heading() }}
        </h4>
      </div>
    </div>
    <div
      v-if="fileFound"
      ref="markedDiv"
      class="pt-2 pt-xl-4 marked"
      v-html="markedText"
    ></div>
    <div v-if="!fileFound" class="error-message">
      <span>Data Not Found</span>
    </div>
  </div>
</template>

<script>
import { marked } from "marked";

export default {
  name: "Panel",

  data() {
    return {
      currentPanel: "",
      fileFound: false,
    };
  },

  methods: {
    play: function (event) {
      // /model-heart#video-div
      const routeStr = this.$nuxt.$route.path;

      const lastChar = routeStr.charAt(routeStr.length - 1);

      if (lastChar === "/") {
        const newstr = routeStr.substr(0, routeStr.length - 1);
        // console.log(newstr);
        this.$router.push({
          name: "video",
          params: { videoId: event.target.id, originPath: newstr },
        });
      } else {
        // this.$router.push({ path: routeStr, hash: "#video-div" });
        this.$router.push({
          name: "video",
          params: { videoId: event.target.id, originPath: routeStr },
        });
      }

      // $nuxt.$emit("load-video-player", {id:event.target.id, originPath:});
    },
    refreshContent: function () {
      const fileName = this.$dataFile();
      try {
        const panelData = require(`@/assets/data/markdown/${fileName}.md`);
        this.fileFound = true;
        this.currentPanel = panelData.default;
      } catch (e) {
        this.fileFound = false;
      }
    },
    addVideoLinks: function () {
      if (this.fileFound) {
        const markedDiv = this.$refs.markedDiv;
        const links = markedDiv.getElementsByTagName("span");
        let i;
        for (i = 0; i < links.length; i++) {
          let element = links[i];
          if (element.getAttribute("data-play") == "video") {
            element.addEventListener("click", this.play);
          }
        }
      }
    },
  },

  computed: {
    markedText() {
      return marked(this.currentPanel);
    },
  },

  mounted() {
    this.addVideoLinks();
  },

  created() {
    this.refreshContent();
  },

  updated() {
    this.refreshContent();
    this.addVideoLinks();
  },
};
</script>
