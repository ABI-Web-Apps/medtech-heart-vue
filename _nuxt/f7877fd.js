(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{395:function(e,t,o){var content=o(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("4f57d1ce",content,!0,{sourceMap:!1})},399:function(e,t,o){e.exports=o.p+"img/Annie-Jones.807272e.png"},400:function(e,t,o){e.exports=o.p+"img/Liz-Broadbent.bd68ff2.png"},401:function(e){e.exports=JSON.parse('{"healthy":{"heading":"View of a Healthy Heart","link":"videos/1_healthy_heart.mp4"},"blocked":{"heading":"View of a Healthy Heart","link":"videos/2_blocked_arteries.mp4"},"exercise":{"heading":"Lifestyle Factors: Exercise","link":"videos/5_exercise_v2.mp4"},"diet":{"heading":"Lifestyle Factors: Diet","link":"videos/6_diet_v2.mp4"},"smoking":{"heading":"Lifestyle Factors: Smoking","link":"videos/7_smoking_v2.mp4"},"statin":{"heading":"How your static medication will help?","link":"videos/3_Statins.mp4"},"aspirin":{"heading":"How your aspirin medication will help?","link":"videos/4_aspirin.mp4"}}')},402:function(e,t,o){"use strict";o(395)},403:function(e,t,o){var d=o(24)(!1);d.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),d.push([e.i,".video-player[data-v-494203c6]{grid-row-gap:1rem;row-gap:1rem;width:100vw;background-color:#000}#outer-credits[data-v-494203c6]{position:fixed;padding-top:3px;padding-bottom:10px;bottom:0}.display-video[data-v-494203c6]{display:block;margin-top:0;width:100%;flex-grow:1}.display-video.--sm[data-v-494203c6]{height:30rem}.display-video.--xs[data-v-494203c6]{height:20rem}.credits[data-v-494203c6]{width:100vw;padding-left:10px;padding-right:30px;justify-content:space-between;align-items:center;grid-column-gap:1rem;-moz-column-gap:1rem;column-gap:1rem}.credit-button[data-v-494203c6]{flex-grow:1;grid-row-gap:.5rem;row-gap:.5rem;align-items:center}.button[data-v-494203c6]{width:90%;max-width:20rem}.img-icon[data-v-494203c6]{height:4rem;width:4rem}.annie-liz[data-v-494203c6]{padding:2px;text-align:center;justify-content:center}.annie-liz span[data-v-494203c6]{font-size:.8rem;font-style:italic;color:#afafaf}",""]),e.exports=d},417:function(e,t,o){"use strict";o.r(t);o(33);var d=o(401),n={data:function(){return{videoFound:!1,videos:d,selectedVideo:{},credits1:"Movie credits to Annie Jones and Dr. Liz Broadbent,",credits2:" University of Auckland"}},props:{videoId:{type:String,required:!0}},methods:{refreshVideo:function(e){this.videoFound=!1,e&&(this.selectedVideo=this.videos[e],this.selectedVideo&&(this.videoFound=!0))},close:function(){window.history.back(),this.$emit("close-video")},getVideoStyle:function(){return this.$vuetify.breakpoint.mdAndUp?"display-video":"display-video --"+this.$vuetify.breakpoint.name}},watch:{videoId:function(e){this.refreshVideo(e)}},created:function(){this.refreshVideo(this.videoId)}},r=(o(402),o(45)),c=o(59),l=o.n(c),v=o(394),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("div",[e.videoFound?d("div",{staticClass:"container-default video-player flexbox --vertical",class:e.$vuetify.breakpoint.mdAndUp?"full-height":""},[d("iframe",{class:e.getVideoStyle(),attrs:{allowfullscreen:"",frameborder:"0",src:e.selectedVideo.link}}),e._v(" "),d("div",{attrs:{id:"outer-credits"}},[d("div",{staticClass:"credits flexbox"},[d("img",{staticClass:"img-icon",attrs:{src:o(399)}}),e._v(" "),d("div",{staticClass:"credit-button flexbox --vertical"},[d("div",{staticClass:"annie-liz flexbox d-none d-sm-block"},[d("span",[e._v(e._s(e.credits1)+" "+e._s(e.credits2))])]),e._v(" "),d("div",{staticClass:"button"},[d("v-btn",{staticClass:"bg-secondary",attrs:{elevation:"8",small:"",block:""},on:{click:e.close}},[d("span",[e._v(" Click to Close")])])],1)]),e._v(" "),d("img",{staticClass:"img-icon",attrs:{src:o(400)}})]),e._v(" "),d("div",{staticClass:"pt-2 annie-liz flexbox d-sm-none"},[d("span",[e._v(e._s(e.credits1)),d("br"),e._v(e._s(e.credits2))])])])]):e._e(),e._v(" "),e.videoFound?e._e():d("div",{staticClass:"error-message"},[d("h3",[e._v("Specified video was not found")])])])}),[],!1,null,"494203c6",null);t.default=component.exports;l()(component,{VBtn:v.a})}}]);