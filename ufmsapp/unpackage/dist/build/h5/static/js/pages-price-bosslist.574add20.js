(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-price-bosslist"],{"32bf":function(t,e,i){"use strict";var n=i("4ea4");i("a434"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(i("351a"));var a={data:function(){return{isread:!1,userInfo:{},datatemp:{},watermarkConfig:{text:"中集世倡0001",font:"12px 微软雅黑",textColor:"#dcdfe6",width:220,height:90,extRotate:-30},pricelist:[],feelist:{}}},created:function(){var t=this;if(uni.showLoading({title:"加载中",mask:!0}),uni.request({url:"http://120.77.239.151/so/price?method=fcllist&pol="+this.datatemp.pol+"&pod="+this.datatemp.pod+"&crrier="+this.datatemp.carrier,method:"GET",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.isread=!0,setTimeout((function(){uni.hideLoading()}),300),t.pricelist=e.data.data.splice(0,25)},fail:function(t){uni.showToast({title:"失败："+t.message,icon:"none"})}}),uni.getStorageSync("user_info")){var e="";e=uni.getStorageSync("user_info"),this.watermarkConfig.text=e.data.data.name+e.data.data.mobile.substring(7,11)}},methods:{backToNext:function(){uni.navigateBack({delta:1})},submitBook:function(t){uni.navigateTo({url:"/pages/price/booking?detail="+encodeURIComponent(JSON.stringify(t)),fail:function(t){console.log(t)}})},timeFormat:function(t){var e=t.split("-");return e[0]+"/"+e[1]+"/"+e[2]},startType:function(t){return"CLS"==t||"BETD"==t?"大船截关":"ETD"==t?"大船 ETD":"TDETD"==t?"驳船 TDETD":"ONBOARD"==t?"驳船 ONBOARD":"SOETD"==t?"SO ETD":"GATE"==t?"GATE IN":""},checkDetail:function(t){uni.navigateTo({url:"/pages/price/detail?detail="+encodeURIComponent(JSON.stringify(t)),fail:function(t){console.log(t)}})},onLoad:function(t){t.detail?this.datatemp=JSON.parse(decodeURIComponent(t.detail)):(uni.showToast({title:"请输入起运港-目的港口查询",icon:"none"}),uni.navigateTo({url:"/pages/price/index",fail:function(t){console.log(t)}}))}}};e.default=a},"4cc8":function(t,e,i){"use strict";i.r(e);var n=i("bcb5"),a=i("9f87");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("bbe4");var s,c=i("f0c5"),o=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"3d960bbc",null,!1,n["a"],s);e["default"]=o.exports},"9f87":function(t,e,i){"use strict";i.r(e);var n=i("32bf"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},a550:function(t,e,i){var n=i("c103");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4c1dce21",n,!0,{sourceMap:!1,shadowMode:!1})},bbe4:function(t,e,i){"use strict";var n=i("a550"),a=i.n(n);a.a},bcb5:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("72e3").default,uniTable:i("a240").default,uniTr:i("4e2d").default,uniTh:i("f1c7").default,uniTd:i("2ddb").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{directives:[{name:"watermark",rawName:"v-watermark",value:t.watermarkConfig,expression:"watermarkConfig"}],staticClass:"flex flex-column"},[t.pricelist.length>0&&t.isread?[i("v-uni-view",{staticClass:" flex-1"},[i("v-uni-view",{staticClass:"flex start",staticStyle:{padding:"5px 10px","align-items":"center"}},[t._v("起运港："),i("uni-icons",{staticStyle:{"font-size":"x-large"},attrs:{type:"location-filled"}}),i("v-uni-text",{staticStyle:{"font-size":"18px","font-weight":"700"}},[t._v(t._s(t.datatemp.pol))])],1),i("v-uni-view",{staticStyle:{"border-bottom":"1px solid rgb(234 234 234)","margin-bottom":"1rpx"}}),i("v-uni-view",{staticClass:"flex start",staticStyle:{padding:"5px 10px",display:"flex","align-items":"center"}},[t._v("目的港："),i("uni-icons",{staticStyle:{"font-size":"x-large"},attrs:{type:"location-filled"}}),i("v-uni-text",{staticStyle:{"font-size":"18px","font-weight":"700"}},[t._v(t._s(t.datatemp.pod))])],1)],1),i("v-uni-view",{staticStyle:{"border-bottom":"1px solid #e5e5e5","margin-bottom":"10rpx"}}),i("uni-table",{ref:"table",attrs:{stripe:!0,emptyText:"暂无更多数据"}},[i("uni-tr",[i("uni-th",{attrs:{width:"50",align:"center"}},[t._v("船公司")]),i("uni-th",{attrs:{width:"50",align:"center"}},[t._v("20GP"),i("br"),t._v("(USD)")]),i("uni-th",{attrs:{width:"50",align:"center"}},[t._v("40GP"),i("br"),t._v("(USD)")]),i("uni-th",{attrs:{width:"50",align:"center"}},[t._v("40HQ"),i("br"),t._v("(USD)")]),i("uni-th",{attrs:{width:"50",align:"center"}},[t._v("截关")]),i("uni-th",{attrs:{width:"50",align:"center"}},[t._v("操作")])],1),t._l(t.pricelist,(function(e,n){return t.pricelist.length>0&&t.isread?i("uni-tr",{key:n},[i("uni-td",{attrs:{align:"center"}},[t._v(t._s(e.shipping))]),i("uni-td",{staticStyle:{color:"#ce3c3c"},attrs:{align:"center"}},[t._v(t._s(e.cost20))]),i("uni-td",{staticStyle:{color:"#ce3c3c"},attrs:{align:"center"}},[t._v(t._s(e.cost40gp))]),i("uni-td",{staticStyle:{color:"#ce3c3c"},attrs:{align:"center"}},[t._v(t._s(e.cost40hq))]),i("uni-td",{attrs:{align:"center"}},[t._v(t._s(e.cls))]),i("uni-td",{attrs:{align:"center"}},[i("v-uni-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.checkDetail(e)}}},[t._v("详情")])],1)],1):t._e()}))],2)]:t._e(),t.pricelist.length<=0&&t.isread?[i("v-uni-view",{staticClass:" bg-white m-1 px-2 rounded-half py-2 font-sm"},[i("v-uni-view",{staticClass:"flex justify-center",staticStyle:{"justify-content":"space-between"}},[t._v("没有查询到运价"),i("br"),t._v("我们会尽快更新运价!!!"),i("v-uni-text",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backToNext()}}},[t._v("询盘")])],1)],1)],1)]:t._e()],2)},r=[]},c103:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"[data-v-3d960bbc] .uni-table-td{padding:5px 0}[data-v-3d960bbc] .uni-table-th{padding:2px 0}[data-v-3d960bbc] .uni-table-th-content{font-size:xx-small}[data-v-3d960bbc] uni-button{display:inline-flex;line-height:2.3;font-size:10px}",""]),t.exports=e}}]);