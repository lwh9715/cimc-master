(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-index"],{"031e":function(t,e,a){"use strict";a.r(e);var i=a("3f66"),n=a("117a");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("5d55");var o,l=a("f0c5"),s=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"0e7bdd8d",null,!1,i["a"],o);e["default"]=s.exports},"0437":function(t,e,a){"use strict";var i=a("86983"),n=a.n(i);n.a},"117a":function(t,e,a){"use strict";a.r(e);var i=a("539f"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},1401:function(t,e,a){"use strict";a("4160"),a("a9e3"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniCollapseItem",props:{title:{type:String,default:""},name:{type:[Number,String],default:0},disabled:{type:Boolean,default:!1},showAnimation:{type:Boolean,default:!1},open:{type:Boolean,default:!1},thumb:{type:String,default:""}},data:function(){return{isOpen:!1}},watch:{open:function(t){this.isOpen=t}},inject:["collapse"],created:function(){if(this.isOpen=this.open,this.nameSync=this.name?this.name:this.collapse.childrens.length,this.collapse.childrens.push(this),"true"===String(this.collapse.accordion)&&this.isOpen){var t=this.collapse.childrens[this.collapse.childrens.length-2];t&&(this.collapse.childrens[this.collapse.childrens.length-2].isOpen=!1)}},methods:{onClick:function(){var t=this;this.disabled||("true"===String(this.collapse.accordion)&&this.collapse.childrens.forEach((function(e){e!==t&&(e.isOpen=!1)})),this.isOpen=!this.isOpen,this.collapse.onChange&&this.collapse.onChange())}}};e.default=i},"144c":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-card[data-v-0013ae4e]{display:flex;flex:1;box-shadow:0 0 0 transparent;margin:12px 15px;background-color:#fff;position:relative;flex-direction:column;border-radius:5px;overflow:hidden;cursor:pointer}.uni-border[data-v-0013ae4e]{position:relative;z-index:1}.uni-border[data-v-0013ae4e]:after{content:"";position:absolute;bottom:0;left:0;top:0;right:0;border:1px solid #e5e5e5;border-radius:10px;box-sizing:border-box;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left top;transform-origin:left top;z-index:-1}.uni-border-bottom[data-v-0013ae4e]{position:relative;z-index:1}.uni-border-bottom[data-v-0013ae4e]:after{content:"";position:absolute;bottom:0;left:0;top:0;right:0;border-bottom:1px solid #e5e5e5;box-sizing:border-box;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left top;transform-origin:left top;z-index:-1}.uni-border-top[data-v-0013ae4e]{position:relative;z-index:1}.uni-border-top[data-v-0013ae4e]:after{content:"";position:absolute;bottom:0;left:0;top:0;right:0;border-top:1px solid #e5e5e5;box-sizing:border-box;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left top;transform-origin:left top;z-index:-1}.uni-card__thumbnailimage[data-v-0013ae4e]{position:relative;flex-direction:column;justify-content:center;height:150px;overflow:hidden}.uni-card__thumbnailimage-box[data-v-0013ae4e]{display:flex;flex:1;flex-direction:row;overflow:hidden}.uni-card__thumbnailimage-image[data-v-0013ae4e]{flex:1}.uni-card__thumbnailimage-title[data-v-0013ae4e]{display:flex;position:absolute;bottom:0;left:0;right:0;flex-direction:row;padding:8px 12px;background-color:rgba(0,0,0,.4)}.uni-card__thumbnailimage-title-text[data-v-0013ae4e]{flex:1;font-size:14px;color:#fff}.uni-card__title[data-v-0013ae4e]{display:flex;flex-direction:row;align-items:center;padding:10px}.uni-card__title-box[data-v-0013ae4e]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card__title-header[data-v-0013ae4e]{width:40px;height:40px;overflow:hidden;border-radius:5px}.uni-card__title-header-image[data-v-0013ae4e]{width:40px;height:40px}.uni-card__title-content[data-v-0013ae4e]{display:flex;flex-direction:column;justify-content:center;flex:1;padding-left:10px;height:40px;overflow:hidden}.uni-card__title-content-title[data-v-0013ae4e]{font-size:14px;line-height:22px}.uni-card__title-content-extra[data-v-0013ae4e]{font-size:12px;line-height:27px;color:#999}.uni-card__header[data-v-0013ae4e]{display:flex;position:relative;flex-direction:row;padding:12px;align-items:center}.uni-card__header-title[data-v-0013ae4e]{display:flex;flex-direction:row;margin-right:8px;justify-content:flex-start;align-items:center}.uni-card__header-title-text[data-v-0013ae4e]{font-size:16px;flex:1;color:#333}.uni-card__header-extra-img[data-v-0013ae4e]{height:20px;width:20px;margin-right:8px}.uni-card__header-extra-text[data-v-0013ae4e]{flex:1;margin-left:8px;font-size:12px;text-align:right;color:#999}.uni-card__content[data-v-0013ae4e]{color:#333}.uni-card__content--pd[data-v-0013ae4e]{padding:12px}.uni-card__content-extra[data-v-0013ae4e]{font-size:14px;padding-bottom:10px;color:#999}.uni-card__footer[data-v-0013ae4e]{justify-content:space-between;padding:12px}.uni-card__footer-text[data-v-0013ae4e]{color:#999;font-size:12px}.uni-card--shadow[data-v-0013ae4e]{position:relative;box-shadow:0 0 5px 1px rgba(0,0,0,.1)}.uni-card--full[data-v-0013ae4e]{margin:0;border-radius:0}.uni-card--full[data-v-0013ae4e]:after{border-radius:0}.uni-ellipsis[data-v-0013ae4e]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},"19ad":function(t,e,a){"use strict";var i=a("d5d2"),n=a.n(i);n.a},2398:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uniIcons:a("4c54").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-collapse-cell",class:{"uni-collapse-cell--disabled":t.disabled,"uni-collapse-cell--notdisabled":!t.disabled,"uni-collapse-cell--open":t.isOpen,"uni-collapse-cell--hide":!t.isOpen}},[a("v-uni-view",{staticClass:"uni-collapse-cell__title",class:{"uni-collapse-cell--disabled":t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.thumb?a("v-uni-image",{staticClass:"uni-collapse-cell__title-img",attrs:{src:t.thumb}}):t._e(),a("v-uni-text",{staticClass:"uni-collapse-cell__title-text"},[t._v(t._s(t.title))]),a("uni-icons",{staticClass:"uni-collapse-cell__title-arrow",class:{"uni-collapse-cell__title-arrow-active":t.isOpen,"uni-collapse-cell--animation":!0===t.showAnimation},attrs:{color:"#bbb",size:"20",type:"arrowdown"}})],1),a("v-uni-view",{staticClass:"uni-collapse-cell__content",class:{"uni-collapse-cell__content--hide":!t.isOpen}},[a("v-uni-view",{staticClass:"uni-collapse-cell__wrapper",class:{"uni-collapse-cell--animation":!0===t.showAnimation},style:{transform:t.isOpen?"translateY(0)":"translateY(-50%)","-webkit-transform":t.isOpen?"translateY(0)":"translateY(-50%)"}},[t._t("default")],2)],1)],1)},r=[]},"23ce":function(t,e,a){"use strict";var i=a("faa2"),n=a.n(i);n.a},"3a01":function(t,e,a){"use strict";a.r(e);var i=a("c836"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"3c5a":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-card uni-border",class:{"uni-card--full":!0===t.isFull||"true"===t.isFull,"uni-card--shadow":!0===t.isShadow||"true"===t.isShadow}},["basic"===t.mode&&t.title?a("v-uni-view",{staticClass:"uni-card__header uni-border-bottom",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.thumbnail?a("v-uni-view",{staticClass:"uni-card__header-extra-img-view"},[a("v-uni-image",{staticClass:"uni-card__header-extra-img",attrs:{src:t.thumbnail}})],1):t._e(),a("v-uni-text",{staticClass:"uni-card__header-title-text"},[t._v(t._s(t.title))]),t.extra?a("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))]):t._e()],1):t._e(),"title"===t.mode?a("v-uni-view",{staticClass:"uni-card__title uni-border-bottom",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-card__title-box"},[a("v-uni-view",{staticClass:"uni-card__title-header"},[a("v-uni-image",{staticClass:"uni-card__title-header-image",attrs:{src:t.thumbnail,mode:"scaleToFill"}})],1),a("v-uni-view",{staticClass:"uni-card__title-content"},[a("v-uni-text",{staticClass:"uni-card__title-content-title uni-ellipsis"},[t._v(t._s(t.title))]),a("v-uni-text",{staticClass:"uni-card__title-content-extra uni-ellipsis"},[t._v(t._s(t.subTitle))])],1)],1),t.extra?a("v-uni-view",[a("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1):t._e()],1):t._e(),"style"===t.mode?a("v-uni-view",{staticClass:"uni-card__thumbnailimage",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-card__thumbnailimage-box"},[a("v-uni-image",{staticClass:"uni-card__thumbnailimage-image",attrs:{src:t.thumbnail,mode:"aspectFill"}})],1),t.title?a("v-uni-view",{staticClass:"uni-card__thumbnailimage-title"},[a("v-uni-text",{staticClass:"uni-card__thumbnailimage-title-text"},[t._v(t._s(t.title))])],1):t._e()],1):t._e(),a("v-uni-view",{staticClass:"uni-card__content uni-card__content--pd",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},["style"===t.mode&&t.extra?a("v-uni-view",{},[a("v-uni-text",{staticClass:"uni-card__content-extra"},[t._v(t._s(t.extra))])],1):t._e(),t._t("default")],2),t.note?a("v-uni-view",{staticClass:"uni-card__footer uni-border-top"},[t._t("footer",[a("v-uni-text",{staticClass:"uni-card__footer-text"},[t._v(t._s(t.note))])])],2):t._e()],1)},r=[]},"3f66":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-collapse"},[t._t("default")],2)},r=[]},"539f":function(t,e,a){"use strict";a("4160"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniCollapse",props:{accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var t=[];this.childrens.forEach((function(e,a){e.isOpen&&t.push(e.nameSync)})),this.$emit("change",t)}}};e.default=i},"5b67":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".card-conent[data-v-0e0b3bdf]{height:calc(100vh);overflow-y:auto}.uni-card[data-v-0e0b3bdf]{margin-top:%?30?%!important;padding:0 4px!important\n\t/* border-radius: 15rpx !important; */}.uni-collapse-cell--open[data-v-0e0b3bdf]{background-color:#fff!important}",""]),t.exports=e},"5d55":function(t,e,a){"use strict";var i=a("c590"),n=a.n(i);n.a},6612:function(t,e,a){"use strict";a.r(e);var i=a("3c5a"),n=a("3a01");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("19ad");var o,l=a("f0c5"),s=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"0013ae4e",null,!1,i["a"],o);e["default"]=s.exports},"7fbb":function(t,e,a){"use strict";a.r(e);var i=a("2398"),n=a("bf22");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("0437");var o,l=a("f0c5"),s=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"800a8b56",null,!1,i["a"],o);e["default"]=s.exports},86983:function(t,e,a){var i=a("e4fe");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("45917735",i,!0,{sourceMap:!1,shadowMode:!1})},b56b:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-collapse[data-v-0e7bdd8d]{width:100%;display:flex;flex-direction:column;background-color:#fff}',""]),t.exports=e},bf22:function(t,e,a){"use strict";a.r(e);var i=a("1401"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},c590:function(t,e,a){var i=a("b56b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("0e0d0d57",i,!0,{sourceMap:!1,shadowMode:!1})},c836:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniCard",props:{title:{type:String,default:""},subTitle:{type:String,default:""},extra:{type:String,default:""},note:{type:String,default:""},thumbnail:{type:String,default:""},mode:{type:String,default:"basic"},isFull:{type:Boolean,default:!1},isShadow:{type:[Boolean,String],default:!1}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},ca8a:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{keyword:"",formData:{company:"YML GSZ",route:"GUANGZHOU--\x3eDUBAI",freight:"中东",freightcode:"CGX",startdate:"2022-4-12",enddate:"2022-04-18",type:"",currency:"RMB",name:"YML 广州/南沙/佛山/云浮",manager:"李滢",note:"BK USD222/444 (4月)和 WRS USD47/94",releasedate:"22/04/08",entryDate:"22/04/08 15:49",pg20:"2000",pg40:"4000",hq40:"8000",hq45:"18000"}}},created:function(){},methods:{}};e.default=i},cb21:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uniCard:a("6612").default,uniForms:a("4a07").default,uniFormsItem:a("9c43").default,uniCollapse:a("031e").default,uniCollapseItem:a("7fbb").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"card-conent",staticStyle:{"background-image":"url(../../static/background.png)"}},[a("uni-card",{staticStyle:{"text-align":"center"}},[a("uni-forms",{attrs:{modelValue:t.formData}},[a("uni-forms-item",{attrs:{label:"船公司","label-width":"80"}},[a("v-uni-view",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.formData.company))])],1),a("uni-forms-item",{attrs:{label:"路线","label-width":"80"}},[a("v-uni-view",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.formData.route))])],1),a("uni-forms-item",{attrs:{label:"有效时间起","label-width":"80"}},[a("v-uni-view",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.formData.startdate))])],1),a("uni-forms-item",{attrs:{label:"有效时间止","label-width":"80"}},[a("v-uni-view",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.formData.enddate))])],1),a("uni-forms-item",{attrs:{label:"航线","label-width":"80"}},[a("v-uni-view",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.formData.freight))])],1),a("uni-forms-item",{attrs:{label:"航线代码","label-width":"80"}},[a("v-uni-view",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.formData.freightcode))])],1),a("uni-forms-item",{attrs:{label:"20GP","label-width":"80"}},[a("v-uni-view",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.formData.pg20))])],1),a("uni-forms-item",{attrs:{label:"40GP","label-width":"80"}},[a("v-uni-view",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.formData.pg40))])],1),a("uni-forms-item",{attrs:{label:"40HQ","label-width":"80"}},[a("v-uni-view",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.formData.hq40))])],1),a("uni-forms-item",{attrs:{label:"45HQ","label-width":"80"}},[a("v-uni-view",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.formData.hq45))])],1)],1),a("uni-collapse",[a("uni-collapse-item",{attrs:{title:"更多信息"}},[a("uni-forms",[a("uni-forms-item",{attrs:{label:"名称","label-width":"80"}},[a("v-uni-view",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.formData.name))])],1),a("uni-forms-item",{attrs:{label:"币制","label-width":"80"}},[a("v-uni-view",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.formData.currency))])],1),a("uni-forms-item",{attrs:{label:"运价类型","label-width":"80"}},[a("v-uni-view",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.formData.type))])],1),a("uni-forms-item",{attrs:{label:"运价管理人","label-width":"80"}},[a("v-uni-view",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.formData.manager))])],1),a("uni-forms-item",{attrs:{label:"发布时间","label-width":"80"}},[a("v-uni-view",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.formData.releasedate))])],1),a("uni-forms-item",{attrs:{label:"录入时间","label-width":"80"}},[a("v-uni-view",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.formData.entryDate))])],1),a("uni-forms-item",{attrs:{label:"外部备注","label-width":"80"}},[a("v-uni-view",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.formData.note))])],1)],1)],1)],1)],1)],1)},r=[]},d5d2:function(t,e,a){var i=a("144c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("868ab8a8",i,!0,{sourceMap:!1,shadowMode:!1})},d938:function(t,e,a){"use strict";a.r(e);var i=a("cb21"),n=a("f222");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("23ce");var o,l=a("f0c5"),s=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"0e0b3bdf",null,!1,i["a"],o);e["default"]=s.exports},e4fe:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-collapse-cell[data-v-800a8b56]{flex-direction:column;border-color:#e5e5e5;border-bottom-width:1px;border-bottom-style:solid}.uni-collapse-cell--hover[data-v-800a8b56]{background-color:#f1f1f1}.uni-collapse-cell--open[data-v-800a8b56]{background-color:#f1f1f1}.uni-collapse-cell--disabled[data-v-800a8b56]{background-color:#f1f1f1;cursor:not-allowed!important}.uni-collapse-cell--hide[data-v-800a8b56]{height:48px}.uni-collapse-cell--animation[data-v-800a8b56]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.3s;transition-timing-function:ease}.uni-collapse-cell__title[data-v-800a8b56]{padding:12px 12px;position:relative;display:flex;width:100%;box-sizing:border-box;height:48px;line-height:24px;flex-direction:row;justify-content:space-between;align-items:center;cursor:pointer}.uni-collapse-cell__title[data-v-800a8b56]:active{background-color:#f1f1f1}.uni-collapse-cell__title-img[data-v-800a8b56]{height:26px;width:26px;margin-right:10px}.uni-collapse-cell__title-arrow[data-v-800a8b56]{width:20px;height:20px;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:center center;transform-origin:center center}.uni-collapse-cell__title-arrow-active[data-v-800a8b56]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.uni-collapse-cell__title-text[data-v-800a8b56]{flex:1;font-size:14px;white-space:nowrap;color:inherit;overflow:hidden;text-overflow:ellipsis}.uni-collapse-cell__content[data-v-800a8b56]{overflow:hidden}.uni-collapse-cell__wrapper[data-v-800a8b56]{display:flex;flex-direction:column}.uni-collapse-cell__content--hide[data-v-800a8b56]{height:0;line-height:0}',""]),t.exports=e},f222:function(t,e,a){"use strict";a.r(e);var i=a("ca8a"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},faa2:function(t,e,a){var i=a("5b67");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("5cf5b0f2",i,!0,{sourceMap:!1,shadowMode:!1})}}]);