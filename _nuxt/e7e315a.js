(window.webpackJsonp=window.webpackJsonp||[]).push([[10,9],{384:function(e,t,o){var content=o(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(21).default)("b0fca2e6",content,!0,{sourceMap:!1})},393:function(e,t,o){e.exports=o.p+"img/Annie-Jones.807272e.png"},394:function(e,t,o){e.exports=o.p+"img/Liz-Broadbent.bd68ff2.png"},395:function(e){e.exports=JSON.parse('{"healthy":{"heading":"View of a Healthy Heart","link":"videos/1_healthy_heart.mp4"},"blocked":{"heading":"View of a Healthy Heart","link":"videos/2_blocked_arteries.mp4"},"exercise":{"heading":"Lifestyle Factors: Exercise","link":"videos/5_exercise_v2.mp4"},"diet":{"heading":"Lifestyle Factors: Diet","link":"videos/6_diet_v2.mp4"},"smoking":{"heading":"Lifestyle Factors: Smoking","link":"videos/7_smoking_v2.mp4"},"statin":{"heading":"How your static medication will help?","link":"videos/3_Statins.mp4"},"aspirin":{"heading":"How your aspirin medication will help?","link":"videos/4_aspirin.mp4"}}')},396:function(e,t,o){"use strict";o(384)},397:function(e,t,o){var r=o(20)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),r.push([e.i,".video-player[data-v-442872d0]{grid-row-gap:1rem;row-gap:1rem;height:100%}#outer-credits[data-v-442872d0]{padding-bottom:1px}.display-video[data-v-442872d0]{display:block;width:100%;flex-grow:1}.display-video.--sm[data-v-442872d0]{height:30rem}.display-video.--xs[data-v-442872d0]{height:20rem}.credits[data-v-442872d0]{justify-content:space-between;align-items:center;grid-column-gap:1rem;-moz-column-gap:1rem;column-gap:1rem}.credit-button[data-v-442872d0]{flex-grow:1;grid-row-gap:.5rem;row-gap:.5rem;align-items:center}.button[data-v-442872d0]{width:90%;max-width:20rem}.img-icon[data-v-442872d0]{height:4rem;width:4rem}.annie-liz[data-v-442872d0]{padding:2px;text-align:center;justify-content:center}.annie-liz span[data-v-442872d0]{font-size:.8rem;font-style:italic;color:#afafaf}",""]),e.exports=r},399:function(e,t,o){var content=o(413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(21).default)("afce4b60",content,!0,{sourceMap:!1})},405:function(e,t,o){"use strict";o.r(t);o(33);var r=o(395),n={data:function(){return{videoFound:!1,videos:r,selectedVideo:{},credits1:"Movie credits to Annie Jones and Dr. Liz Broadbent,",credits2:" University of Auckland"}},props:{videoId:{type:String,required:!0}},methods:{refreshVideo:function(e){this.videoFound=!1,e&&(this.selectedVideo=this.videos[e],this.selectedVideo&&(this.videoFound=!0))},close:function(){this.$emit("close-video")},getVideoStyle:function(){return this.$vuetify.breakpoint.mdAndUp?"display-video":"display-video --"+this.$vuetify.breakpoint.name}},watch:{videoId:function(e){this.refreshVideo(e)}},created:function(){this.refreshVideo(this.videoId)}},d=(o(396),o(42)),l=o(59),c=o.n(l),v=o(378),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.videoFound?r("div",{staticClass:"container-default video-player flexbox --vertical",class:e.$vuetify.breakpoint.mdAndUp?"full-height":""},[r("iframe",{class:e.getVideoStyle(),attrs:{allowfullscreen:"",frameborder:"0",src:e.selectedVideo.link}}),e._v(" "),r("div",{attrs:{id:"outer-credits"}},[r("div",{staticClass:"credits flexbox"},[r("img",{staticClass:"img-icon",attrs:{src:o(393)}}),e._v(" "),r("div",{staticClass:"credit-button flexbox --vertical"},[r("div",{staticClass:"annie-liz flexbox d-none d-sm-block"},[r("span",[e._v(e._s(e.credits1)+" "+e._s(e.credits2))])]),e._v(" "),r("div",{staticClass:"button"},[r("v-btn",{staticClass:"bg-secondary",attrs:{elevation:"8",small:"",block:""},on:{click:e.close}},[r("span",[e._v(" Click to Close")])])],1)]),e._v(" "),r("img",{staticClass:"img-icon",attrs:{src:o(394)}})]),e._v(" "),r("div",{staticClass:"pt-2 annie-liz flexbox d-sm-none"},[r("span",[e._v(e._s(e.credits1)),r("br"),e._v(e._s(e.credits2))])])])]):e._e(),e._v(" "),e.videoFound?e._e():r("div",{staticClass:"error-message"},[r("h3",[e._v("Specified video was not found")])])])}),[],!1,null,"442872d0",null);t.default=component.exports;c()(component,{VBtn:v.a})},412:function(e,t,o){"use strict";o(399)},413:function(e,t,o){var r=o(20)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),r.push([e.i,".right-pane[data-v-20982734]{width:100%;color:#afafaf}",""]),e.exports=r},426:function(e,t,o){var content=o(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(21).default)("3f95a174",content,!0,{sourceMap:!1})},427:function(e,t,o){var r=o(20)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),r.push([e.i,".theme--light.v-overlay{color:rgba(0,0,0,.87)}.theme--dark.v-overlay{color:#fff}.v-overlay{align-items:center;border-radius:inherit;display:flex;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;transition:.3s cubic-bezier(.25,.8,.5,1),z-index 1ms}.v-overlay__content{position:relative}.v-overlay__scrim{border-radius:inherit;bottom:0;height:100%;left:0;position:absolute;right:0;top:0;transition:inherit;width:100%;will-change:opacity}.v-overlay--absolute{position:absolute}.v-overlay--active{pointer-events:auto}",""]),e.exports=r},445:function(e,t,o){"use strict";o.r(t);var r=o(30),n=(o(102),{layout:"default",asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var o,r,n,d,l,content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e.route,r=e.$getContentBySlug,n=e.error,d=e.store,l=o.params.slug,null===(content=r(l))&&n({statusCode:404,message:"Unexpected Error, Page not found"}),d.commit("setCurrentContent",content);case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{currentVideoId:null,showVideo:!1,overlay:!1,lastOffset:0,outerWidth:0}},computed:{videoStyle:function(){return{width:this.outerWidth}}},methods:{closeVideo:function(){this.showVideo=!1,this.$vuetify.breakpoint.mdAndUp||this.$vuetify.goTo(this.lastOffset,{})}},mounted:function(){this.outerWidth=this.$refs.outerDiv.clientWidth+"px"},created:function(){var e=this;this.$nuxt.$on("load-video-player",(function(t){e.currentVideoId=t,e.showVideo=!0,e.lastOffset=window.pageYOffset}))},beforeDestroy:function(){this.$nuxt.$off("load-video-player"),this.showVideo=!1}}),d=(o(412),o(42)),l=o(59),c=o.n(l),v=(o(10),o(12),o(16),o(6),o(22),o(15),o(23),o(1)),f=(o(40),o(426),o(60)),h=o(54),m=o(118),y=o(35);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var w=Object(y.a)(f.a,h.a,m.a).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var data=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",data)},classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(v.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(e){var t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},t)}}),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"outerDiv"},[o("div",{staticClass:"text-center"},[o("right-pane"),e._v(" "),o("div",{attrs:{id:"video-div"}},[o("v-overlay",{attrs:{color:"black",value:e.showVideo,absolute:!!e.$vuetify.breakpoint.mdAndUp,opacity:"1"}},[o("div",{style:e.videoStyle},[o("video-player",{attrs:{videoId:e.currentVideoId},on:{"close-video":function(t){return e.closeVideo()}}})],1)])],1)],1)])}),[],!1,null,"20982734",null);t.default=component.exports;c()(component,{RightPane:o(441).default,VideoPlayer:o(405).default}),c()(component,{VOverlay:w})}}]);