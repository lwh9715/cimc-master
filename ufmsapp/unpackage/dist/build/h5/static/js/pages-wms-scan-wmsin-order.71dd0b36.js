(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wms-scan-wmsin-order"],{"0cf1":function(t,e,n){"use strict";(function(t){var n,i,o;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{stop:!1,orderId:"",records:[{id:"",status:"",time:""}],form:{id:0,goodsnamec:"",innos:"",piece_in:0,gdscbm_in:0,gdswgt_in:0},itemindex:0,wmsinnos:"",customernamec:""}},onNavigationBarButtonTap:function(){uni.reLaunch({url:"../index/index"})},onBackPress:function(){return uni.reLaunch({url:"../index/index"}),!0},onShow:function(){o=this,i=plus.android.runtimeMainActivity();plus.android.importClass("android.content.Context");n=plus.android.implements("io.dcloud.feature.internal.reflect.BroadcastReceiver",{onReceive:a});var e=plus.android.importClass("android.content.IntentFilter"),r=(plus.android.importClass("android.content.Intent"),new e);function a(e,n){plus.android.importClass(n),t("log",n.getStringExtra("data")," at pages/wms/scan-wmsin-order.vue:171"),o.orderId=n.getStringExtra("data")}r.addAction("com.android.receive_scan_action"),i.registerReceiver(n,r)},onHide:function(){i.unregisterReceiver(n)},onLoad:function(){this.innerAudioContext=uni.createInnerAudioContext()},onReady:function(){},watch:{orderId:function(e){t("log","from watch "+e," at pages/wms/scan-wmsin-order.vue:189"),"6926032345152"===e&&this.test("1")}},methods:{test:function(t){switch(this.innerAudioContext.autoplay=!0,t){case"2":this.innerAudioContext.src="../../static/voice/2.mp3";break;case"1":this.innerAudioContext.src="../../static/voice/1.mp3";break;case"3":this.innerAudioContext.src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3";break}this.innerAudioContext.play()},openScan:function(){var e=this;uni.scanCode({success:function(n){e.form.innos=n.result,t("log",e.orderId," at pages/wms/scan-wmsin-order.vue:227"),e.clearData(),e.openWms()}})},clearData:function(){this.records=[{}],this.itemindex=0,this.wmsinnos="",this.customernamec="",this.showItem("next")},openWms:function(){var e=this;this.form.innos?this.$H.post("/wmsinfo?method=getWmsinfo",this.form,{token:!1}).then((function(n){t("log",n," at pages/wms/scan-wmsin-order.vue:253"),n.data&&(e.records=n.data,e.itemindex=0,e.wmsinnos=n.data[0].wmsinnos,e.customernamec=n.data[0].customernamec,e.showItem("next"))})).catch((function(e){t("log",e," at pages/wms/scan-wmsin-order.vue:263"),uni.showToast({title:"失败2："+e.message,icon:"none"})})):uni.showToast({title:"请输入或扫描单号",icon:"none"})},submitWms:function(){var e=this;t("log","form:"+this.form," at pages/wms/scan-wmsin-order.vue:271"),this.$H.post("/wmsinfo?method=submitWmsin",this.form,{token:!1}).then((function(n){if(t("log",n," at pages/wms/scan-wmsin-order.vue:275"),n.data,!0===n.success)return uni.showToast({title:"成功"}),void e.clearData();uni.showToast({title:"失败："+n.message,icon:"none"})})).catch((function(e){t("log",e," at pages/wms/scan-wmsin-order.vue:291"),uni.showToast({title:"失败："+e.message,icon:"none"})}))},submitWmsDtl:function(){t("log","form:"+this.form," at pages/wms/scan-wmsin-order.vue:299"),this.$H.post("/wmsinfo?method=updateWmsin",this.form,{token:!1}).then((function(e){t("log",e," at pages/wms/scan-wmsin-order.vue:303"),e.data,!0!==e.success?uni.showToast({title:"失败："+e.message,icon:"none"}):uni.showToast({title:"成功"})})).catch((function(e){t("log",e," at pages/wms/scan-wmsin-order.vue:318"),uni.showToast({title:"失败："+e.message,icon:"none"})}))},showItem:function(e){for(var n=0;n<this.records.length;n++)if(t("log",this.records[n]," at pages/wms/scan-wmsin-order.vue:327"),n==this.itemindex){var i=this.records[n];this.form.id=i.id,this.form.goodsnamec=i.goodsnamec,this.form.piece_in=i.piece_in,this.form.gdscbm_in=i.gdscbm_in,this.form.gdswgt_in=i.gdswgt_in}"before"==e&&(this.itemindex>0?this.itemindex--:this.itemindex=this.records.length-1),"next"==e&&(this.itemindex<this.records.length?this.itemindex++:this.itemindex=0)}}};e.default=r}).call(this,n("0de9")["log"])},"127c":function(t,e,n){"use strict";n.r(e);var i=n("492d"),o=n("bcc2");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("e8ac");var a,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"27cd8f38",null,!1,i["a"],a);e["default"]=c.exports},"1fb5":function(t,e,n){"use strict";var i=n("a31e"),o=n.n(i);o.a},3538:function(t,e,n){"use strict";var i=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("35ad")),r={name:"u-input",mixins:[o.default],props:{value:{type:String,default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:Boolean,default:!0}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,marginRight:0}},watch:{value:function(t,e){this.defaultValue=t,t!=e&&"select"==this.type&&this.handleInput({detail:{value:t}})},focused:function(t){this.clearable&&this.value&&this.getMarginRight()}},computed:{inputMaxlength:function(){return Number(this.maxlength)},getStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t.marginRight=this.marginRight+"px",t=Object.assign(t,this.customStyle),t}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},mounted:function(){this.getMarginRight()},methods:{getMarginRight:function(){var t=this;this.$nextTick((function(){t.$uGetRect(".u-input__right-icon").then((function(e){t.marginRight=e.width+uni.upx2px(20)}))}))},handleInput:function(t){var e=this;this.defaultValue=t.detail.value,this.$emit("input",t.detail.value),this.$nextTick((function(){e.dispatch("u-form-item","on-form-change",t.detail.value)}))},handleBlur:function(t){var e=this;this.focused=!1,this.$emit("blur",t.detail.value),this.$nextTick((function(){e.dispatch("u-form-item","on-form-blur",t.detail.value)}))},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=r},"35ad":function(t,e,n){"use strict";function i(t,e,n){this.$children.map((function(o){t===o.$options.name?o.$emit.apply(o,[e].concat(n)):i.apply(o,[t,e].concat(n))}))}n("99af"),n("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={methods:{dispatch:function(t,e,n){var i=this.$parent||this.$root,o=i.$options.name;while(i&&(!o||o!==t))i=i.$parent,i&&(o=i.$options.name);i&&i.$emit.apply(i,[e].concat(n))},broadcast:function(t,e,n){i.call(this,t,e,n)}}};e.default=o},"403ce":function(t,e,n){"use strict";n.r(e);var i=n("0cf1"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"492d":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uIcon:n("03b4").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-input",class:{"u-input--border":t.border,"u-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"==t.type?n("v-uni-textarea",{staticClass:"u-input__input u-input__textarea",style:[t.getStyle],attrs:{value:t.value,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):n("v-uni-input",{staticClass:"u-input__input",style:[t.getStyle],attrs:{type:"password"==t.type?"text":t.type,value:t.defaultValue,password:"password"==t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"u-input__right-icon u-flex"},[t.clearable&&t.value&&t.focused?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[n("u-icon",{attrs:{size:"32",name:"close-circle-fill",color:"#c0c4cc"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}})],1):t._e(),t.passwordIcon&&"password"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[n("u-icon",{attrs:{size:"32",name:t.showPassword?"eye-fill":"eye",color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}})],1):t._e(),"select"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon--select u-input__right-icon__item",class:{"u-input__right-icon--select--reverse":t.selectOpen}},[n("u-icon",{attrs:{name:"arrow-down-fill",size:"26",color:"#c0c4cc"}})],1):t._e()],1)],1)},r=[]},"5f38":function(t,e,n){"use strict";n.r(e);var i=n("79d3"),o=n("403ce");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("1fb5");var a,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"e5fa035c",null,!1,i["a"],a);e["default"]=c.exports},"79d3":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uIcon:n("03b4").default,uInput:n("127c").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{background:"#eee",height:"100%"}},[n("v-uni-view",{staticStyle:{background:"#727bba",height:"240rpx"}},[n("v-uni-view",{staticClass:"card"},[n("v-uni-view",{staticStyle:{"font-size":"40rpx","font-weight":"bold"}},[n("v-uni-text",[t._v("入仓单号："),n("v-uni-text",{staticStyle:{color:"#E2564E"}},[t._v(t._s(t.wmsinnos))])],1)],1),n("v-uni-view",{staticStyle:{"font-size":"35rpx"}},[n("v-uni-text",[t._v("客户名称： "+t._s(t.customernamec))])],1)],1)],1),n("v-uni-view",{staticStyle:{margin:"0 20rpx","margin-top":"150rpx"}},[n("v-uni-view",{staticClass:"u-f"},[n("v-uni-view",{staticClass:"u-f u-f-ac u-f-jsb",staticStyle:{border:"1px solid #6DBA52",padding:"10rpx 20rpx",flex:"1","border-radius":"16rpx"}},[n("u-icon",{staticStyle:{"margin-right":"30rpx"},attrs:{name:"scan",color:"#6DBA52",size:"78"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openScan.apply(void 0,arguments)}}}),n("v-uni-input",{staticStyle:{flex:"1",height:"100%"},attrs:{type:"text",placeholder:"请输入或扫描单号"},model:{value:t.form.innos,callback:function(e){t.$set(t.form,"innos",e)},expression:"form.innos"}}),n("v-uni-button",{staticStyle:{width:"20%","background-color":"#6DBA52","border-radius":"96rpx"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openWms.apply(void 0,arguments)}}},[t._v("搜索")])],1)],1),n("v-uni-view",{staticClass:"card2"},[n("v-uni-view",{staticStyle:{color:"#999","font-size":"34rpx",margin:"30rpx 40rpx"}},[t._v("入库信息")]),t._l(t.records,(function(e,i){return n("v-uni-view",{staticClass:"u-f u-f-jsb",staticStyle:{"margin-left":"80rpx","padding-right":"30rpx"}},[n("v-uni-text",{staticStyle:{width:"1%",display:"none"}},[t._v(t._s(e.id))]),n("v-uni-text",{staticStyle:{color:"red"}},[t._v(t._s(e.goodsnamec))]),n("v-uni-text",[t._v(t._s(e.piece))]),n("v-uni-text",[t._v(t._s(e.gdscbm)+"CBM")]),n("v-uni-text",[t._v(t._s(e.gdswgt)+"KGS")])],1)}))],2),n("v-uni-view",{staticClass:"card2"},[n("v-uni-view",{staticStyle:{color:"#999","font-size":"34rpx",margin:"30rpx 40rpx"}},[t._v("确认数据"),n("u-icon",{staticStyle:{"margin-left":"30rpx"},attrs:{name:"arrow-left",color:"#6DBA52",size:"78"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showItem("before")}}}),n("u-icon",{staticStyle:{"margin-left":"30rpx"},attrs:{name:"arrow-right",color:"#6DBA52",size:"78"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showItem("next")}}})],1),n("v-uni-view",{staticClass:"u-f u-f-jsb",staticStyle:{"margin-left":"20rpx","padding-right":"20rpx"}},[n("v-uni-text",{staticStyle:{color:"red",display:"none"}},[t._v(t._s(t.form.id))]),n("v-uni-text",{staticStyle:{color:"red",padding:"20rpx"}},[t._v(t._s(t.form.goodsnamec))]),n("u-input",{staticClass:"rounded border",staticStyle:{padding:"0 20rpx","border-color":"#6DBA52",margin:"5rpx"},attrs:{type:"text",placeholder:"件数"},model:{value:t.form.piece_in,callback:function(e){t.$set(t.form,"piece_in",e)},expression:"form.piece_in"}}),n("u-input",{staticClass:"rounded border",staticStyle:{padding:"0 20rpx","border-color":"#6DBA52",margin:"5rpx"},attrs:{type:"text",placeholder:"毛重"},model:{value:t.form.gdscbm_in,callback:function(e){t.$set(t.form,"gdscbm_in",e)},expression:"form.gdscbm_in"}}),n("u-input",{staticClass:"rounded border",staticStyle:{padding:"0 20rpx","border-color":"#6DBA52",margin:"5rpx"},attrs:{type:"text",placeholder:"体积"},model:{value:t.form.gdswgt_in,callback:function(e){t.$set(t.form,"gdswgt_in",e)},expression:"form.gdswgt_in"}})],1),n("v-uni-view",{staticClass:"u-f u-f-jsb",staticStyle:{"margin-left":"20rpx","padding-right":"20rpx"}},[n("v-uni-button",{staticStyle:{width:"40%","margin-top":"5%","background-color":"#ff5500","border-radius":"96rpx"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitWmsDtl.apply(void 0,arguments)}}},[t._v("确认件毛体")]),n("v-uni-button",{staticStyle:{width:"40%","margin-top":"5%","background-color":"#6DBA52","border-radius":"96rpx"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitWms.apply(void 0,arguments)}}},[t._v("确认入库")])],1)],1)],1)],1)},r=[]},"80f5":function(t,e,n){var i=n("d672");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("0f648850",i,!0,{sourceMap:!1,shadowMode:!1})},a31e:function(t,e,n){var i=n("bb32");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("11e67c73",i,!0,{sourceMap:!1,shadowMode:!1})},bb32:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.bottom > uni-view[data-v-e5fa035c]{font-size:%?34?%;flex:1;border-radius:8px 8px 0 0;background:#6dba52}.bottom[data-v-e5fa035c]{width:100%;position:absolute;bottom:0;color:#fff;text-align:center}.card2[data-v-e5fa035c]{background:#fff;height:%?400?%;border-radius:%?30?%}.card[data-v-e5fa035c]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:%?200?%;background:#fff;margin:0 %?20?%;position:relative;border-radius:%?30?%;bottom:%?-100?%;padding:%?20?%}',""]),t.exports=e},bcc2:function(t,e,n){"use strict";n.r(e);var i=n("3538"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},d672:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-input[data-v-27cd8f38]{position:relative;flex:1}.u-input__input[data-v-27cd8f38]{font-size:%?28?%;color:#303133}.u-input__textarea[data-v-27cd8f38]{width:auto;font-size:%?28?%;color:#303133;padding:%?10?% 0;line-height:normal}.u-input--border[data-v-27cd8f38]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-input--error[data-v-27cd8f38]{border-color:#fa3534!important}.u-input__right-icon[data-v-27cd8f38]{position:absolute;right:0;top:50%;z-index:3;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.u-input__right-icon__item[data-v-27cd8f38]{margin-left:%?10?%}.u-input__right-icon--select[data-v-27cd8f38]{transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.u-input__right-icon--select--reverse[data-v-27cd8f38]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},e8ac:function(t,e,n){"use strict";var i=n("80f5"),o=n.n(i);o.a}}]);