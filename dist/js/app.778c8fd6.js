(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,s=1;s<i.length;s++){var c=i[s];0!==r[c]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},r={app:0},n=[];function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"11d9":function(t,e,i){t.exports=i.p+"img/3.c5a0e4a2.jpg"},"1c38":function(t,e,i){"use strict";i("6f7d")},"2e36":function(t,e,i){t.exports=i.p+"img/25.7364df1b.jpg"},"342f5":function(t,e,i){t.exports=i.p+"media/30.55f7af04.mp4"},"36d0":function(t,e,i){t.exports=i.p+"img/30.ff8947d5.jpg"},"405a":function(t,e,i){t.exports=i.p+"img/2.32c737b8.jpg"},"4f4b":function(t,e,i){t.exports=i.p+"img/28.fa2f2907.jpg"},"51e9":function(t,e,i){t.exports=i.p+"img/24.2505d70f.jpg"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" Meniu ")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{to:e.to,link:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{color:e.color}},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{app:"",color:"dark-grey",dense:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",[a("v-img",{attrs:{"lazy-src":i("cf05"),"max-height":"45","max-width":"371",src:i("cf05")}})],1)],1),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("v-fade-transition",{attrs:{mode:"out-in"}},[a("router-view")],1)],1)],1),a("v-btn",{staticClass:"font-weight-thin body-2",attrs:{elevation:"2",outlined:"",text:"",bottom:"",center:""}},[t._v("Slavici Cenei © 2021 - All rights reserved.")])],1)},n=[],o={data:function(){return{drawer:!1,items:[{title:"Investitii",icon:"mdi-currency-usd",color:"teal",to:"/investitii"},{title:"Atelier",icon:"mdi-hammer-wrench",color:"orange",to:"/atelier"},{title:"Hala Industriala",icon:"mdi-warehouse",color:"blue",to:"/hala"}],right:null}}},s=o,c=i("2877"),l=i("6544"),d=i.n(l),u=i("7496"),f=i("40dc"),v=i("5bc1"),p=i("8336"),m=i("a523"),g=i("ce7e"),h=i("0789"),b=i("132d"),x=i("adda"),y=i("8860"),w=i("da13"),_=i("5d23"),j=i("34c3"),C=i("f6c4"),V=i("f774"),I=i("2a7f"),O=Object(c["a"])(s,r,n,!1,null,null,null),k=O.exports;d()(O,{VApp:u["a"],VAppBar:f["a"],VAppBarNavIcon:v["a"],VBtn:p["a"],VContainer:m["a"],VDivider:g["a"],VFadeTransition:h["b"],VIcon:b["a"],VImg:x["a"],VList:y["a"],VListItem:w["a"],VListItemContent:_["a"],VListItemIcon:j["a"],VListItemTitle:_["b"],VMain:C["a"],VNavigationDrawer:V["a"],VToolbarTitle:I["a"]});var D=i("8c4f"),T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title text-center font-weight-bold justify-center mx-auto h2"},[t._v(" Investitii ")]),i("div",{staticClass:"text-center"},[i("v-progress-circular",{class:{inactive:!this.loading},attrs:{rotate:360,size:100,width:15,value:t.value,color:"teal"}},[t._v(" "+t._s(t.value)+" ")]),i("div",{class:{inactive:this.loading}},t._l(t.apiData,(function(e,a){return i("div",{key:a,staticClass:"mb-2 pa-5"},[i("v-card",{staticClass:"text-center",attrs:{elevation:"11",shaped:""}},[i("v-card-title",{staticClass:"text-body-1 justify-center font-weight-bold  mainTitle"},[t._v(" "+t._s(e[1])+" ")]),i("v-divider"),i("v-card-title",{staticClass:"text-body-2 justify-center font-weight-medium amber accent-1"},[t._v(" "+t._s(e[2])+" ")]),i("v-divider"),i("v-list-item",{staticClass:"mx-auto justify-center pa-2 amber lighten-4 filetitle",attrs:{width:"260px","max-width":"320px",href:e[3]}},[t._v(" Fisier: "),i("v-icon",[t._v("mdi-file-download")]),t._v(t._s(t.formatData(e[3]))+" ")],1)],1)],1)})),0)],1)])},S=[],A=(i("d3b7"),i("5319"),i("ac1f"),i("1276"),i("25f0"),i("bc3a")),P=i.n(A),L={name:"Investitii",data:function(){return{apiData:[],formatedData:[],loading:!0,interval:{},value:0}},mounted:function(){var t=this;P.a.get("http://slavicidashboard.herokuapp.com/").then((function(e){t.apiData=e.data,t.apiData.shift()})).catch((function(e){console.log(e),t.errored=!0})).finally((function(){return t.loading=!1})),this.interval=setInterval((function(){if(100===t.value)return t.value=0;t.value+=10}),500)},beforeDestroy:function(){!1===this.loading&&clearInterval(this.interval)},methods:{formatData:function(t){return t.toString().split("/")[t.toString().split("/").length-1].replace(/[_,.]|pdf|%20/gm," ")}}},M=L,H=(i("1c38"),i("b0af")),$=i("99d9"),E=i("490a"),z=Object(c["a"])(M,T,S,!1,null,"5e5ace56",null),B=z.exports;d()(z,{VCard:H["a"],VCardTitle:$["a"],VDivider:g["a"],VIcon:b["a"],VListItem:w["a"],VProgressCircular:E["a"]});var F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"justify-center"},[i("div",{staticClass:"title h2 justify-center font-weight-bold text-center"},[t._v("Atelier")]),i("v-divider",{staticClass:"ma-3"}),i("v-card",{attrs:{elevation:"13",outlined:"",tile:""}},[i("v-card-title",{staticClass:"justify-center text-center"},[t._v(" Fabricăm peleți și bricheți. Atelier de confecții metalice.")])],1),i("v-divider"),i("v-carousel",{attrs:{cycle:"",height:"400","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.items,(function(t,e){return i("v-carousel-item",{key:e,attrs:{src:t.src}})})),1),i("v-divider"),i("v-spacer"),i("div",{staticClass:"d-flex flex-row justify-center align-center text-center mx-auto"},[t._l(t.videos,(function(e,a){return i("video",{key:a,staticClass:"ml-16",attrs:{width:"400",autoplay:"",controls:""}},[i("source",{attrs:{src:e.src,type:"video/mp4"}}),t._v(" Your browser does not support HTML video. ")])})),i("v-spacer")],2)],1)},J=[],N={name:"Atelier",data:function(){return{items:[{src:i("67ce")},{src:i("d423")},{src:i("51e9")},{src:i("2e36")},{src:i("d1e4")},{src:i("5cb9")},{src:i("4f4b")},{src:i("5ee2")},{src:i("36d0")},{src:i("896f")}],videos:[{src:i("342f5")},{src:i("6c5f")}]}}},Y=N,q=i("5e66"),G=i("3e35"),K=i("2fa4"),Q=Object(c["a"])(Y,F,J,!1,null,null,null),R=Q.exports;d()(Q,{VCard:H["a"],VCardTitle:$["a"],VCarousel:q["a"],VCarouselItem:G["a"],VDivider:g["a"],VSpacer:K["a"]});var U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-card",{staticClass:"mx-auto justify-center text-center font-weight-bold h2",attrs:{"max-width":"360",elevation:"10",outlined:"",tile:""}},[i("v-card-title",{staticClass:"text-center justify-center"},[t._v("Hala")])],1),i("v-divider",{staticClass:"mt-3"}),i("div",{staticClass:"d-flex flex-row justify-center"},[i("v-divider",{attrs:{vertical:""}}),t._l(t.items,(function(t,e){return i("v-card",{key:e,staticClass:"ma-3",attrs:{elevation:"2"}},[i("v-img",{attrs:{"lazy-src":t.src,height:"auto",width:"250",src:t.src}})],1)})),i("v-divider",{attrs:{vertical:""}})],2),i("div",{staticClass:"title-center text-center mx-auto font-weight-bold"},[t._v("Hala industriala de inchiriat")])],1)},W=[],X={name:"Hala",data:function(){return{items:[{src:i("8554")},{src:i("405a")},{src:i("11d9")},{src:i("bafb")}]}},methods:{}},Z=X,tt=Object(c["a"])(Z,U,W,!1,null,null,null),et=tt.exports;d()(tt,{VCard:H["a"],VCardTitle:$["a"],VDivider:g["a"],VImg:x["a"]}),a["a"].use(D["a"]);var it=[{path:"/",component:B},{path:"/investitii",component:B},{path:"/atelier",component:R},{path:"/hala",component:et}],at=new D["a"]({routes:it}),rt=at,nt=i("f309");a["a"].use(nt["a"]);var ot=new nt["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:ot,router:rt,render:function(t){return t(k)}}).$mount("#app")},"5cb9":function(t,e,i){t.exports=i.p+"img/27.11512162.jpg"},"5ee2":function(t,e,i){t.exports=i.p+"img/29.f26ea41c.jpg"},"67ce":function(t,e,i){t.exports=i.p+"img/22.1f12839c.jpg"},"6c5f":function(t,e,i){t.exports=i.p+"media/31.aaea93ea.mp4"},"6f7d":function(t,e,i){},8554:function(t,e,i){t.exports=i.p+"img/1.db93e676.jpg"},"896f":function(t,e,i){t.exports=i.p+"img/33.33fbd942.jpg"},bafb:function(t,e,i){t.exports=i.p+"img/4.dcd0e948.jpg"},cf05:function(t,e,i){t.exports=i.p+"img/logo.b2c52cba.png"},d1e4:function(t,e,i){t.exports=i.p+"img/26.db97dd87.jpg"},d423:function(t,e,i){t.exports=i.p+"img/23.cf9175dd.jpg"}});
//# sourceMappingURL=app.778c8fd6.js.map