(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{377:function(t,e,n){var content=n(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("2f0c9a16",content,!0,{sourceMap:!1})},383:function(t,e,n){t.exports=n.p+"img/kiwirous.992457b.png"},384:function(t,e,n){"use strict";n(377)},385:function(t,e,n){var o=n(23)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),o.push([t.i,".slider[data-v-828a97ac]{width:100%}.kiwirous[data-v-828a97ac]{width:1.8rem;height:1.8rem}",""]),t.exports=o},398:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-flex align-center font-weight-bold text-xl-h6 text-subtitle-2 text-sm-subtitle-2 text-md-body-1"},[o("div",{staticClass:"pr-2"},[t._v("Heart Rate")]),t._v(" "),o("div",[o("img",{staticClass:"kiwirous",attrs:{src:n(383)}})])])}],c={name:"HeartRate",data:function(){return{beat:2500}},mounted:function(){this.beat=this.$heartBeat()},methods:{sliderOnChange:function(t){$nuxt.$emit("beat-change",t)}},watch:{beat:function(t){t>2?t%2==0&&$nuxt.$emit("beat-update-onTime",t):$nuxt.$emit("beat-update-onTime",0)}},created:function(){var t=this;this.$nuxt.$on("beat-reset",(function(e){t.beat=e}))}},r=(n(384),n(42)),l=n(59),d=n.n(l),f=n(435),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider d-flex flex-column align-center"},[t._m(0),t._v(" "),n("v-slider",{staticClass:"slider",attrs:{dense:"",min:"0",max:"5000","thumb-color":"info","track-color":"secondary","track-fill-color":"secondary","hide-details":""},on:{change:function(e){return t.sliderOnChange(t.beat)}},model:{value:t.beat,callback:function(e){t.beat=e},expression:"beat"}}),t._v(" "),n("div",{staticClass:"text-caption text-sm-caption text-md-caption text-lg-body-2 text-xl-body-2 font-italic"},[t._v("\n    beats per minute\n  ")])],1)}),o,!1,null,"828a97ac",null);e.default=component.exports;d()(component,{VSlider:f.a})}}]);