(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-new-order-scan-order"],{"1a4d":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={uIcon:e("03b4").default},r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticStyle:{background:"#eee",height:"100%"}},[e("v-uni-view",{staticStyle:{background:"#6DBA52",height:"240rpx"}},[e("v-uni-view",{staticClass:"card"},[e("v-uni-view",{staticStyle:{"font-size":"40rpx","font-weight":"bold"}},[e("v-uni-text",[t._v("单号："),e("v-uni-text",{staticStyle:{color:"#E2564E"}},[t._v("22233333")])],1)],1),e("v-uni-view",{staticStyle:{"font-size":"35rpx"}},[e("v-uni-text",[t._v("客户名称： 222222222222222223")])],1)],1)],1),e("v-uni-view",{staticStyle:{margin:"0 20rpx","margin-top":"150rpx"}},[e("v-uni-view",{staticClass:"u-f"},[e("v-uni-view",{staticClass:"u-f u-f-ac u-f-jsb",staticStyle:{border:"1px solid #6DBA52",padding:"10rpx 20rpx",flex:"1","border-radius":"16rpx"}},[e("u-icon",{staticStyle:{"margin-right":"30rpx"},attrs:{name:"scan",color:"#6DBA52",size:"78"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openScan.apply(void 0,arguments)}}}),e("v-uni-input",{staticStyle:{flex:"1",height:"100%"},attrs:{type:"text",placeholder:"请输入或扫描单号"},model:{value:t.orderId,callback:function(n){t.orderId=n},expression:"orderId"}})],1),e("u-icon",{staticStyle:{"margin-left":"30rpx"},attrs:{name:"photo",color:"#6DBA52",size:"78"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.test("1")}}}),e("u-icon",{staticStyle:{"margin-left":"30rpx"},attrs:{name:"arrow-left",color:"#6DBA52",size:"78"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.test("2")}}}),e("u-icon",{staticStyle:{"margin-left":"30rpx"},attrs:{name:"arrow-upward",color:"#6DBA52",size:"78"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.test("3")}}})],1),e("v-uni-view",{staticClass:"m-30",staticStyle:{color:"red","font-weight":"bold","font-size":"32rpx",height:"56rpx"}},[e("v-uni-text",[t._v("提示信息： 123456789")])],1),e("v-uni-view",{staticClass:"card2"},[e("v-uni-view",{staticStyle:{color:"#999","font-size":"34rpx",margin:"30rpx 40rpx"}},[t._v("最新扫描单号")]),t._l(t.records,(function(n,i){return e("v-uni-view",{staticClass:"u-f u-f-jsb",staticStyle:{"margin-left":"80rpx","padding-right":"30rpx"}},[e("v-uni-text",[t._v(t._s(n.id))]),e("v-uni-text",{staticStyle:{color:"red"}},[t._v(t._s(n.status))]),e("v-uni-text",[t._v(t._s(n.time))])],1)}))],2)],1),e("v-uni-view",{staticClass:"u-f u-f-jsb bottom"},[e("v-uni-view",[t._v("已提货"),e("v-uni-view",[t._v("(99)")])],1),e("v-uni-view",[t._v("正常"),e("v-uni-view",[t._v("(99)")])],1),e("v-uni-view",[t._v("异常"),e("v-uni-view",{staticStyle:{color:"red"}},[t._v("(1)")])],1)],1)],1)},a=[]},2917:function(t,n,e){"use strict";(function(t){var e,i,r;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{stop:!1,orderId:"33",records:[{id:"2131221",status:"重复",time:"17:11"},{id:"2131323223232221",status:"不存在",time:"17:11"},{id:"2131221",status:"异常",time:"17:11"}]}},onNavigationBarButtonTap:function(){uni.reLaunch({url:"../menu/menu"}),uni.showToast({title:"Back12"})},onBackPress:function(){return uni.reLaunch({url:"../menu/menu"}),!0},onShow:function(){r=this,i=plus.android.runtimeMainActivity();plus.android.importClass("android.content.Context");e=plus.android.implements("io.dcloud.feature.internal.reflect.BroadcastReceiver",{onReceive:o});var n=plus.android.importClass("android.content.IntentFilter"),a=(plus.android.importClass("android.content.Intent"),new n);function o(n,e){plus.android.importClass(e),t("log",e.getStringExtra("data")," at pages/new-order/scan-order.vue:151"),r.orderId=e.getStringExtra("data")}a.addAction("com.android.receive_scan_action"),i.registerReceiver(e,a)},onHide:function(){i.unregisterReceiver(e)},onLoad:function(){this.innerAudioContext=uni.createInnerAudioContext()},onReady:function(){},watch:{orderId:function(n){t("log","from watch "+n," at pages/new-order/scan-order.vue:169"),"6926032345152"===n&&this.test("1")}},methods:{test:function(t){switch(this.innerAudioContext.autoplay=!0,t){case"2":this.innerAudioContext.src="../../static/voice/2.mp3";break;case"1":this.innerAudioContext.src="../../static/voice/1.mp3";break;case"3":this.innerAudioContext.src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3";break}this.innerAudioContext.play()},openScan:function(){var n=this;uni.scanCode({success:function(e){n.orderId=e.result,t("log",n.orderId," at pages/new-order/scan-order.vue:215")}})}}};n.default=a}).call(this,e("0de9")["log"])},"462a":function(t,n,e){var i=e("6a78");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("4f06").default;r("2705ebae",i,!0,{sourceMap:!1,shadowMode:!1})},"4a68":function(t,n,e){"use strict";e.r(n);var i=e("1a4d"),r=e("a9c6");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("b9b0");var o,s=e("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"e8e76e54",null,!1,i["a"],o);n["default"]=c.exports},"6a78":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.bottom > uni-view[data-v-e8e76e54]{font-size:%?34?%;flex:1;border-radius:8px 8px 0 0;background:#6dba52}.bottom[data-v-e8e76e54]{width:100%;position:absolute;bottom:0;color:#fff;text-align:center}.card2[data-v-e8e76e54]{background:#fff;height:%?400?%;border-radius:%?30?%}.card[data-v-e8e76e54]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:%?200?%;background:#fff;margin:0 %?20?%;position:relative;border-radius:%?30?%;bottom:%?-100?%;padding:%?20?%}',""]),t.exports=n},a9c6:function(t,n,e){"use strict";e.r(n);var i=e("2917"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a},b9b0:function(t,n,e){"use strict";var i=e("462a"),r=e.n(i);r.a}}]);