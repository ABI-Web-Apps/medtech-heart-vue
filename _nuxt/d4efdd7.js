(window.webpackJsonp=window.webpackJsonp||[]).push([[1,5,6,8],{381:function(t,e,r){var content=r(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("bcf979c8",content,!0,{sourceMap:!1})},382:function(t,e,r){var content=r(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("59e58823",content,!0,{sourceMap:!1})},383:function(t,e,r){var content=r(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("6223bc62",content,!0,{sourceMap:!1})},385:function(t,e,r){t.exports=r.p+"img/gestures-icons.104494d.png"},386:function(t,e,r){"use strict";r(381)},387:function(t,e,r){var n=r(20)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),n.push([t.i,".outer-model[data-v-075bf05a]{height:100%}.hidden-input[data-v-075bf05a]{width:1px;height:1px}",""]),t.exports=n},388:function(t,e,r){t.exports=r.p+"img/kiwirous.992457b.png"},389:function(t,e,r){"use strict";r(382)},390:function(t,e,r){var n=r(20)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),n.push([t.i,".slider[data-v-79f66478]{width:100%}.kiwirous[data-v-79f66478]{width:1.8rem;height:1.8rem}",""]),t.exports=n},391:function(t,e,r){"use strict";r(383)},392:function(t,e,r){var n=r(20)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),n.push([t.i,"#ecgDescription[data-v-d8487368],#lvpDescription[data-v-d8487368]{width:90%}.item[data-v-d8487368],.trace-box[data-v-d8487368]{width:100%}",""]),t.exports=n},400:function(t,e,r){var content=r(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("b6504546",content,!0,{sourceMap:!1})},402:function(t,e,r){"use strict";r.r(e);r(40),r(33),r(70),r(55),r(62);var n={data:function(){return{heartRate:2500,threeDControlsHeight:0,zincRenderer:null,halfHeartFlag:!1,oldCam:null,modelToSceneArray:[],container:null,modelURLsArray:{NoInfarct_highres:["heartInfarct/noInfarct_highres_metadata.json","heartInfarct/noInfarct_view.json"],NormalElectricity_highres:["heartElectricity/normalActivity_highres_metadata.json","heartElectricity/normalActivity_view.json"],CompensatedFailure_highres:["heartFailure/compensated_highres_metadata.json","heartFailure/compensated_view.json"],SmallInfarct_highres:["heartInfarct/smallInfarct_highres_metadata.json","heartInfarct/smallInfarct_view.json"],LargeInfarct_highres:["heartInfarct/largeInfarct_highres_metadata.json","heartInfarct/largeInfarct_view.json"],ArrythmiaElectricity_highres:["heartElectricity/arrythmiaActivity_highres_metadata.json","heartElectricity/arrythmiaActivity_view.json"],DecompensatedFailure_highres:["heartFailure/decompensated_highres_metadata.json","heartFailure/decompensated_view.json"]}}},props:{totalHeight:{type:Number},availableHeight:{type:Number}},mounted:function(){this.start()},methods:{start:function(){var t=this;this.container=this.$refs.zincDomObject,this.zincRenderer=this.$currentRender(),this.modelToSceneArray=this.$modelToSceneArray(),this.container&&(void 0===this.zincRenderer&&this.initialZinc(),this.zincRenderer.switchContainer(this.container),this.halfHeartFlag=this.$isHalfModel()),"NoInfarct"!==this.$model().name&&"SmallInfarct"!==this.$model().name&&"LargeInfarct"!==this.$model().name&&"CompensatedFailure"!==this.$model().name&&"DecompensatedFailure"!==this.$model().name&&"NormalElectricity"!==this.$model().name||(this.oldCam=this.$perviousCamera()),"ArrythmiaElectricity"===this.$model().name?this.loadModel(this.$model().name,.25):this.loadModel(this.$model().name,1),this.trackHalfModel(),"model-heart"===this.$route.params.slug&&setTimeout((function(){t.onResetAllModelsView()}),100),this.heartRate=this.$heartBeat(),this.updateSlider(this.heartRate)},initialZinc:function(){this.zincRenderer=new Zinc.Renderer(this.container,window),Zinc.defaultMaterialColor=16777116,this.zincRenderer.initialiseVisualisation(),this.zincRenderer.getThreeJSRenderer().setClearColor(0,1);var t=this.zincRenderer.getSceneByName("default");this.zincRenderer.setCurrentScene(t);var e=this.zincRenderer;this.$store.commit("setZincRender",e),this.zincRenderer.animate()},loadModel:function(t,e){var r="_highres",n=this.modelURLsArray[t+r][0],o=this.modelURLsArray[t+r][1],l=this.zincRenderer.getSceneByName(t);if(null==l){(l=this.zincRenderer.createScene(t)).setDuration(l.getDuration()/e),l.loadViewURL(o),l.loadMetadataURL(n,this.meshReady(this.oldCam)),this.zincRenderer.setCurrentScene(l);var c={name:t,sceneObj:l};this.$store.commit("setModelToSceneArray",c),this.addLabel(this.$model().name)}else l.switchContainer(this.container),this.zincRenderer.setCurrentScene(l),this.shareCameraSettings(this.oldCam)},meshReady:function(t){var e=this;return function(r){r.groupName&&r.groupName.includes("Post")&&r.setVisibility(!e.halfHeartFlag),r.groupName&&r.groupName.includes("Fibres")&&r.setVisibility(!1),e.shareCameraSettings(t),e.zincRenderer.getCurrentScene().getZincCameraControls().updateAutoTumble()}},shareCameraSettings:function(t){if(null!==t&&null!==t.near&&void 0!==t.near){var e=this.zincRenderer.getCurrentScene().camera;e.near=t.near,e.far=t.far,e.position.copy(t.position),e.target=new THREE.Vector3(t.target.x,t.target.y,t.target.z),e.up.copy(t.up),this.zincRenderer.getCurrentScene().updateDirectionalLight()}},onResetAllModelsView:function(){for(var t in this.halfHeartFlag=!1,this.heartRate=2500,$nuxt.$emit("beat-reset",2500),this.$store.commit("setHeartBeat",2500),this.$store.commit("setIsHalfModel",!1),this.$store.commit("setPreviousCamera",null),this.modelToSceneArray)this.modelToSceneArray.hasOwnProperty(t)&&(this.modelToSceneArray[t].resetView(),this.modelToSceneArray[t].forEachGeometry(this.geometryShowHalf()))},trackHalfModel:function(){for(var t in this.modelToSceneArray)this.modelToSceneArray.hasOwnProperty(t)&&this.modelToSceneArray[t].forEachGeometry(this.geometryShowHalf())},updateSlider:function(t){this.zincRenderer.setPlayRate(t)},addLabel:function(t){var e=this.zincRenderer.getSceneByName(t);"NoInfarct"===t||"NormalElectricity"===t?(addLabelToScene(e,"right ventricle",-38.056679,35.639515,10.421283,60),addLabelToScene(e,"left ventricle",-48.056679,-5.639515,5.421283,60)):"SmallInfarct"===t?addLabelToScene(e,"damaged tissue",30,-50,0,60):"LargeInfarct"===t&&addLabelToScene(e,"damaged tissue",15,-55,0,60)},onHalfHeartPressed:function(){this.halfHeartFlag?(this.halfHeartFlag=!1,this.$store.commit("setIsHalfModel",!1)):(this.halfHeartFlag=!0,this.$store.commit("setIsHalfModel",!0)),this.showHalf()},showHalf:function(){this.zincRenderer.getCurrentScene().forEachGeometry(this.geometryShowHalf())},geometryShowHalf:function(){var t=this;return function(e){e.groupName&&e.groupName.includes("Post")&&e.setVisibility(!t.halfHeartFlag)}}},watch:{heartRate:function(t){this.updateSlider(t)}},created:function(){var t=this;this.$nuxt.$on("beat-change",(function(e){t.heartRate=e,t.$store.commit("setHeartBeat",e)}))},beforeDestroy:function(){if(this.oldCam){var t=this.zincRenderer.getCurrentScene().camera,e=new THREE.Vector3,r=new THREE.Vector3,n=new THREE.Vector3;n.copy(t.target),e.copy(t.position),r.copy(t.up);var o={position:e,target:n,up:r,near:t.near,far:t.far};this.$store.commit("setPreviousCamera",o)}this.$nuxt.$off("beat-change")}},o=n,l=(r(386),r(42)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full h-full lg:h-screen"},[n("div",{staticClass:"w-full h-full flex flex-col justify-center items-center"},[n("div",{ref:"zincDomObject",staticClass:"w-full h-[400px] -mt-12 lg:h-screen lg:mt-0",attrs:{id:"zincDom"},on:{dblclick:t.onHalfHeartPressed}}),t._v(" "),n("div",{ref:"threeDControls",staticClass:"lg:fixed lg:bottom-0 lg:h-24 lg:pl-24 w-full h-full flex flex-row justify-center lg:mt-0 order-first lg:order-last"},[n("div",{staticClass:"ml-0 h-full w-2/5 lg:w-auto relative"},[n("button",{staticClass:"absolute top-0 left-0 w-1/5 h-full hover:bg-gray-50/10",on:{click:t.onResetAllModelsView}}),t._v(" "),n("img",{staticClass:"h-full w-full lg:object-contain",attrs:{src:r(385)}}),t._v(" "),n("button",{staticClass:"absolute top-0 right-0 w-1/5 h-full hover:bg-gray-50/10",on:{click:t.onHalfHeartPressed}})])])])])}),[],!1,null,"075bf05a",null);e.default=component.exports},403:function(t,e,r){"use strict";r.r(e);var n={name:"HeartRate",data:function(){return{beat:2500}},mounted:function(){this.beat=this.$heartBeat()},created:function(){var t=this;this.$nuxt.$on("beat-reset",(function(e){t.beat=e}))}},o=(r(389),r(42)),l=r(59),c=r.n(l),d=r(444),h=r(443),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider d-flex flex-column align-center"},[n("div",{staticClass:"d-flex align-center font-weight-bold text-xl-h6 text-subtitle-2 text-sm-subtitle-2 text-md-body-1"},[n("div",{staticClass:"pr-2"},[t._v("Heart Rate")]),t._v(" "),n("div",[n("v-tooltip",{scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[n("img",t._g(t._b({staticClass:"kiwirous",attrs:{src:r(388)}},"img",l,!1),o))]}}])},[t._v(" "),n("span",[t._v("Got Kiwirous? Click here!")])])],1)]),t._v(" "),n("v-slider",{staticClass:"slider",attrs:{dense:"",min:"0",max:"5000","thumb-color":"info","track-color":"secondary","track-fill-color":"secondary","hide-details":""},on:{change:function(e){return t.$nuxt.$emit("beat-change",t.beat)}},model:{value:t.beat,callback:function(e){t.beat=e},expression:"beat"}}),t._v(" "),n("div",{staticClass:"text-caption text-sm-caption text-md-caption text-lg-body-2 text-xl-body-2 font-italic"},[t._v("\n    beats per minute\n  ")])],1)}),[],!1,null,"79f66478",null);e.default=component.exports;c()(component,{VSlider:d.a,VTooltip:h.a})},404:function(t,e,r){"use strict";r.r(e);r(70);var n={data:function(){return{idleTime:0,idleTimeLimit:3e5,oldTime:new Date,render:void 0}},mounted:function(){window.ecgDone=!1,window.lvpDone=!1,loadChart(this.$ecg(),this.$lvp(),this.$category(),1),this.updateEcg()},methods:{updateEcg:function(){var t=this;setTimeout((function(){if(t.render=t.$currentRender(),t.render){t.render.addPreRenderCallbackFunction((function(){var e=new Date;t.idleTime=t.idleTime+e.getTime()-t.oldTime.getTime(),t.oldTime=e;var r=t.render.getCurrentTime()/3e3;updateIndicator(r)}))}}),1e3)}}},o=(r(391),r(42)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex trace-box",class:t.$vuetify.breakpoint.smAndUp||t.$vuetify.breakpoint.width<=430?"flex-column":""},[r("div",{staticClass:"mt-4 lg:mt-0 flex flex-col items-center space-y-10 lg:space-y-4"},[r("div",{staticClass:"font-weight-bold text-subtitle-2 text-xl-h6 text-sm-subtitle-2 text-md-body-1"},[t._v("\n      ECG\n    ")]),t._v(" "),r("div",{ref:"rightECG",staticClass:"w-full h-24 lg:h-20",attrs:{id:"rightECG"}}),t._v(" "),r("div",{staticClass:"text-caption text-xl-body-2",attrs:{id:"ecgDescription"}},[t._v("\n      "+t._s(t.$ecg().description)+"\n    ")])]),t._v(" "),r("div",{staticClass:"pt-4 pb-1 d-flex flex-column align-center item"},[r("div",{staticClass:"font-weight-bold text-subtitle-2 text-xl-h6 text-sm-subtitle-2 text-md-body-1"},[t._v("\n      Pressure (mmHg)\n    ")]),t._v(" "),r("div",{ref:"rightLVP",staticClass:"w-full h-24 lg:h-20",attrs:{id:"rightLVP"}}),t._v(" "),r("div",{staticClass:"text-caption text-xl-body-2",attrs:{id:"lvpDescription"}},[t._v("\n      "+t._s(t.$lvp().description)+"\n    ")])])])}),[],!1,null,"d8487368",null);e.default=component.exports},414:function(t,e,r){"use strict";r(400)},415:function(t,e,r){var n=r(20)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),n.push([t.i,".model-rate[data-v-78964b40]{position:relative;width:100%;text-align:center}.rate-mdAndUp[data-v-78964b40]{width:80%}.rate-smAndDown[data-v-78964b40]{position:absolute;bottom:20px;width:120px;left:2%}.logo-mdAndUp[data-v-78964b40]{width:70%;display:block}",""]),t.exports=n},441:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{rightMostHeight:0,rateAndTracesHeight:0}},mounted:function(){this.getDomHeights()},updated:function(){this.getDomHeights()},computed:{rightContainerStyle:function(){if(this.$vuetify.breakpoint.mdAndUp)return{height:this.rightMostHeight+"px"}},traceMarginBottom:function(){return this.$vuetify.breakpoint.smAndDown?{margin:"auto",width:"90%","margin-bottom":"120px"}:{width:"100%"}}},methods:{getDomHeights:function(){this.rightMostHeight=this.$refs.rightMost.clientHeight,this.rateAndTracesHeight=this.$refs.rateAndTraces.clientHeight}}},o=(r(414),r(42)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{ref:"rightMost",staticClass:"pa-0"},[r("div",{staticClass:"w-full h-auto"},[r("model"),t._v(" "),r("div",{staticClass:"md:hidden mr-24 ml-4"},[r("heart-rate")],1)],1),t._v(" "),r("div",{staticClass:"w-full lg:fixed top-0 right-0 lg:w-64 lg:h-screen flex flex-col justify-between"},[r("div",{ref:"rateAndTraces",staticClass:"flex-grow-1 d-flex flex-column justify-center"},[r("div",{staticClass:"d-none d-sm-flex justify-center"},[r("div",{staticClass:"pb-1 rate-mdAndUp"},[r("heart-rate")],1)]),t._v(" "),r("div",{staticClass:"pt-5 justify-center",style:t.traceMarginBottom},[r("traces")],1)]),t._v(" "),r("div",{staticClass:"d-none d-md-flex justify-center"},[r("div",{staticClass:"pt-4 pa-1 logo-mdAndUp"},[r("logo")],1)])])])])}),[],!1,null,"78964b40",null);e.default=component.exports;installComponents(component,{Model:r(402).default,HeartRate:r(403).default,Traces:r(404).default,Logo:r(258).default})}}]);