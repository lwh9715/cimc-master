(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-price-bosslist"],{"326a":function(t,e,i){var a=i("63c9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("52d1b04b",a,!0,{sourceMap:!1,shadowMode:!1})},"63c9":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"[data-v-1abca591] .uni-table-td{padding:5px 0}[data-v-1abca591] .uni-table-th{padding:2px 0}[data-v-1abca591] .uni-table-th-content{font-size:xx-small}[data-v-1abca591] uni-button{display:inline-flex;line-height:2.3;font-size:10px}[data-v-1abca591] .uni-table{background-color:initial}[data-v-1abca591] .table--stripe .uni-table-tr:nth-child(2n + 3){background-color:inherit}",""]),t.exports=e},"6c3b":function(t,e,i){"use strict";i.r(e);var a=i("a9f3"),n=i("77d0");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("f6f3");var r,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"1abca591",null,!1,a["a"],r);e["default"]=o.exports},"77d0":function(t,e,i){"use strict";i.r(e);var a=i("ca31"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},a9f3:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={uniIcons:i("c917").default,uniTable:i("16d6").default,uniTr:i("a6c1").default,uniTh:i("f991").default,uniTd:i("2081").default,uIcon:i("03b4").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{directives:[{name:"watermark",rawName:"v-watermark",value:t.watermarkConfig,expression:"watermarkConfig"}],staticClass:"flex flex-column"},[t.pricelist.length>0&&t.isread?[i("v-uni-view",{staticClass:" flex-1"},[i("v-uni-view",{staticClass:"flex start",staticStyle:{padding:"5px 10px","align-items":"center"}},[t._v("起运港："),i("uni-icons",{staticStyle:{"font-size":"x-large"},attrs:{type:"location"}}),i("v-uni-text",{staticStyle:{"font-size":"18px","font-weight":"700"}},[t._v(t._s(t.pricelist[0].pol))])],1),i("v-uni-view",{staticStyle:{"border-bottom":"1px solid rgb(234 234 234)","margin-bottom":"1rpx"}}),i("v-uni-view",{staticClass:"flex start",staticStyle:{padding:"5px 10px",display:"flex","align-items":"center"}},[t._v("目的港："),i("uni-icons",{staticStyle:{"font-size":"x-large"},attrs:{type:"location-filled"}}),i("v-uni-text",{staticStyle:{"font-size":"18px","font-weight":"700"}},[t._v(t._s(t.pricelist[0].pod))])],1)],1),i("v-uni-view",{staticStyle:{"border-bottom":"1px solid #e5e5e5","margin-bottom":"10rpx"}}),i("uni-table",{ref:"table",attrs:{stripe:!0,emptyText:"暂无更多数据"}},[i("uni-tr",[i("uni-th",{attrs:{width:"55",align:"center"}},[t._v("船公司")]),i("uni-th",{attrs:{width:"50",align:"center"}},[t._v("20GP"),i("br"),t._v("(USD)")]),i("uni-th",{attrs:{width:"50",align:"center"}},[t._v("40GP"),i("br"),t._v("(USD)")]),i("uni-th",{attrs:{width:"50",align:"center"}},[t._v("40HQ"),i("br"),t._v("(USD)")]),i("uni-th",{attrs:{width:"50",align:"center"}},[t._v("截关")]),i("uni-th",{attrs:{width:"50",align:"center"}},[t._v("操作")])],1),t._l(t.pricelist,(function(e,a){return t.pricelist.length>0&&t.isread?i("uni-tr",{key:a},[i("uni-td",{attrs:{align:"center"}},[e.ispush?i("v-uni-text",{staticClass:"text-red"},[i("u-icon",{attrs:{name:"../../static/icon/flag.png",size:25}})],1):t._e(),t._v(t._s(e.shipping))],1),i("uni-td",{staticStyle:{color:"#ce3c3c"},attrs:{align:"center"}},[t._v(t._s(e.cost20))]),i("uni-td",{staticStyle:{color:"#ce3c3c"},attrs:{align:"center"}},[t._v(t._s(e.cost40gp))]),i("uni-td",{staticStyle:{color:"#ce3c3c"},attrs:{align:"center"}},[t._v(t._s(e.cost40hq))]),i("uni-td",{attrs:{align:"center"}},[t._v(t._s(e.schedule))]),i("uni-td",{attrs:{align:"center"}},[i("v-uni-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.checkDetail(e)}}},[t._v("详情")])],1)],1):t._e()}))],2)]:t._e(),t.pricelist.length<=0&&t.isread?[i("v-uni-view",{staticClass:" bg-white m-1 px-2 rounded-half py-2 font-sm"},[i("v-uni-view",{staticClass:"flex justify-center",staticStyle:{"justify-content":"space-between"}},[t._v("没有查询到运价"),i("br"),t._v("我们会尽快更新运价!!!"),i("v-uni-text",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backToNext()}}},[t._v("询盘")])],1)],1)],1)]:t._e()],2)},s=[]},ca31:function(t,e,i){"use strict";(function(t){var a=i("4ea4");i("a434"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a(i("e467"));var n={data:function(){return{isread:!1,userInfo:{},datatemp:{},watermarkConfig:{text:"中集世倡0001",font:"12px 微软雅黑",textColor:"#dcdfe6",width:210,height:110},pricelist:[],feelist:{}}},created:function(){var t=this,e=uni.getStorageSync("islogin"),i=uni.getStorageSync("dd_user");e&&i?(this.watermarkConfig.text=i.data.data.name+i.data.data.mobile.substring(7,11),uni.showLoading({title:"加载中",mask:!0}),uni.request({url:"http://47.112.190.46/so/price?method=fcllist&pol="+this.datatemp.pol+"&pod="+this.datatemp.pod+"&crrier="+this.datatemp.carrier,method:"GET",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.isread=!0,setTimeout((function(){uni.hideLoading()}),300),t.pricelist=e.data.data.splice(0,25)},fail:function(t){uni.showToast({title:"失败："+t.message,icon:"none"})}})):uni.reLaunch({url:"/pages/price/error"})},methods:{backToNext:function(){uni.navigateBack({delta:1})},submitBook:function(e){uni.setStorageSync("booking",e),uni.navigateTo({url:"/pages/price/booking",fail:function(e){t("log",e," at pages/price/bosslist.vue:122")}})},timeFormat:function(t){var e=t.split("-");return e[0]+"/"+e[1]+"/"+e[2]},startType:function(t){return"CLS"==t?"大船截关":"BETD"==t?"大船驳船ON BOARD":"ETD"==t?"大船ON BOARD":"TDETD"==t?"提单ON BOARD":"BCETD"==t||"ONBOARD"==t?"驳船ON BOARD":"SOETD"==t?"SO ETD":"GATE"==t?"GATE IN":""},checkDetail:function(e){uni.setStorageSync("detail",e),uni.navigateTo({url:"/pages/price/detail",fail:function(e){t("log",e," at pages/price/bosslist.vue:156")}})},onLoad:function(e){this.datatemp=uni.getStorageSync("bosslist_detail"),this.datatemp||(uni.showToast({title:"请输入起运港-目的港口查询",icon:"none"}),uni.navigateTo({url:"/pages/price/index",fail:function(e){t("log",e," at pages/price/bosslist.vue:187")}}))}}};e.default=n}).call(this,i("0de9")["log"])},f6f3:function(t,e,i){"use strict";var a=i("326a"),n=i.n(a);n.a}}]);