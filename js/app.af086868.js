(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},s={app:0},r={app:0},i=[];function o(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-2d22c6c5":"a39e2183","chunk-2d22d746":"35548de8","chunk-31f8bd26":"f8c20e5e","chunk-dfc73350":"990e871d"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-31f8bd26":1,"chunk-dfc73350":1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-2d22c6c5":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-31f8bd26":"67f08d2b","chunk-dfc73350":"fac2834a"}[t]+".css",r=l.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var c=i[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===r))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===n||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete s[t],f.parentNode.removeChild(f),a(i)},f.href=r;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){s[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,a[1](d)}r[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00c2":function(t,e,a){"use strict";var n=a("128e"),s=a.n(n);s.a},"128e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("NavBar"),a("transition",{attrs:{name:"slide-fade"}},[a("router-view")],1),a("Foot")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-color-on-scroll fixed-top navbar-expand-lg navbar-transparent",attrs:{"color-on-scroll":"100",id:"sectionsNav"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-translate"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v(" SOSCONF.ZH 2020 ")]),t._m(0)],1),a("div",{staticClass:"collapse navbar-collapse"},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/reg"}},[a("i",{staticClass:"material-icons"},[t._v("done_all")]),t._v(" 报名参加 ")])],1),a("li",{staticClass:"dropdown nav-item"},[t._m(1),a("div",{staticClass:"dropdown-menu dropdown-with-icons"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/sub/0"}},[a("i",{staticClass:"material-icons"},[t._v("code")]),t._v(" 分会场0 ")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/sub/1"}},[a("i",{staticClass:"material-icons"},[t._v("code")]),t._v(" 分会场1 ")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/sub/2"}},[a("i",{staticClass:"material-icons"},[t._v("code")]),t._v(" 分会场2 ")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/sub/3"}},[a("i",{staticClass:"material-icons"},[t._v("code")]),t._v(" 分会场3 ")])],1)]),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/events"}},[a("i",{staticClass:"material-icons"},[t._v("event")]),t._v(" 日程 ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[a("i",{staticClass:"material-icons"},[t._v("help")]),t._v(" 关于我们 ")])],1),t._m(2),t._m(3),t._m(4),t._m(5)])])]),a("div",{staticClass:"modal fade",attrs:{id:"qqqrcode",tabindex:"-1",role:"dialog","aria-labelledby":"QQ qrcode","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-sm"},[a("div",{staticClass:"modal-content"},[t._m(6),a("div",{staticClass:"modal-body qrcode"},[a("img",{attrs:{src:t.qqqrcode}})])])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),a("span",{staticClass:"navbar-toggler-icon"}),a("span",{staticClass:"navbar-toggler-icon"}),a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"dropdown-toggle nav-link",attrs:{href:"#","data-toggle":"dropdown"}},[a("i",{staticClass:"material-icons"},[t._v("dashboard")]),t._v(" 分会场列表 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{rel:"tooltip",title:"","data-placement":"bottom",href:"#",target:"_blank","data-original-title":"WeChat"}},[a("i",{staticClass:"fa fa-wechat"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{rel:"tooltip",title:"","data-placement":"bottom",href:"#",target:"_blank","data-original-title":"Weibo"}},[a("i",{staticClass:"fa fa-weibo"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{rel:"tooltip",title:"","data-placement":"bottom",href:"#",target:"_blank","data-original-title":"Telegram"}},[a("i",{staticClass:"fa fa-telegram"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{rel:"tooltip",title:"QQ",role:"button","data-placement":"bottom","data-original-title":"QQ","data-toggle":"modal","data-target":"#qqqrcode"}},[a("i",{staticClass:"fa fa-qq"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("扫描二维码加入QQ群")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"关闭"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],l=a("88ad"),c=a.n(l),u={name:"NavBar",data:function(){return{qqqrcode:c.a}}},d=u,f=(a("ed6b"),a("2877")),v=Object(f["a"])(d,i,o,!1,null,null,null),p=v.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer",attrs:{"data-background-color":"black"}},[a("div",{staticClass:"container"},[a("nav",{staticClass:"float-left"},[a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v(" 参与合作 ")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v(" 联系我们 ")])])])]),a("div",{staticClass:"copyright float-right"},[t._v(" SOSCONF © 2020 ")])])])}],b={name:"Foot"},g=b,_=Object(f["a"])(g,m,h,!1,null,null,null),C=_.exports,k={name:"App",components:{NavBar:p,Foot:C}},y=k,w=(a("5c0b"),Object(f["a"])(y,s,r,!1,null,null,null)),E=w.exports,O=a("9483");Object(O["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7");var x=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Head"),a("div",{staticClass:"main main-raised"},[a("Introduction"),a("Map")],1)],1)},S=[],q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header header-filter clear-filter purple-filter",staticStyle:{"background-image":"url('./assets/img/bg2.jpg')"},attrs:{"data-parallax":"true"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 ml-auto mr-auto"},[n("div",{staticClass:"brand"},[n("img",{attrs:{src:a("cf05")}}),n("h2",[t._v("SOSCONF.ZH 2020 / 2020中文学生开源年会")]),n("h3",[t._v("2020 5.17-5.18，Chengdu")]),n("p",[n("button",{staticClass:"btn btn-info btn-round"},[t._v("关于年会")]),n("button",{staticClass:"btn btn-success btn-round"},[t._v("立即报名")])])])])])])])}],N={name:"Head"},P=N,T=(a("00c2"),Object(f["a"])(P,q,$,!1,null,null,null)),A=T.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section section-basic"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[t._v(" SOSCONF 2020 ")]),a("h3",{staticClass:"title"},[t._v("学生开源年会")]),a("p",[t._v("2020 中文学生开源年会将于 2020年5月16日-17日由电子科技大学Linux用户组与电子科技大学微软学生俱乐部在成都举办，本次中文学生开源年会将围绕着“开源”主题，开设主会场与分会场：主会场将主要由主题演讲构成，为学生开源项目、开源思想应用等广义开源技术实践提供分享与交流的平台；分会场将主要由各合作社区所负责，以便为与会者提供富有本社区特色的活动。我们也将会设置开源圆桌会议为各高校学生开源组织提供相互沟通、相互了解的渠道，让各高校的开源社区能定期地面对面交流组织情况与项目进度；往届精彩项目开源运动会与开源辩论会也将会出现在年会之中。")]),a("h3",{staticClass:"title"},[t._v("年会展望")]),a("p",[t._v("我们也希望学生开源年会所聚集而成的社群会作为一个长期的舞台，成为学生交流技术、开放讨论的平台，使得开源理念能够在学生群体中茁壮成长。 我们希望同学们能积极交流，让学生站上舞台，展示诞生在实验室里的创想，分享蕴含在编码中的激情，畅聊属于开源理念的未来。也期待参会者能继续发挥自己的影响力，让开源理念能更好的在学生群体中传播开去。")]),a("h3",{staticClass:"title"},[t._v("如何参与")]),a("p",[t._v("2020中文学生开源年会的报名渠道已经开放。若您希望站上年会讲台，与大家一同分享想法、观点或项目，请移步至“讲者报名”，每位学生讲者都将获得一定比例的餐旅费用补贴；我们欢迎各大高校社区与我们一同合作，打造具有本社区特色的分会场，若您希望报名或进一步了解合作社区事宜，请移步至“合作社区/分会场报名”；我们的志愿者报名与票务工作也已同步开启，若您希望近距离接触开源年会的组织与筹备工作，请移步至“志愿者报名”；若您希望作为观众参与这场开源盛宴，请移步“观众报名”，以上所有报名均不收取任何形式的费用。")])])])}],Q={name:"Introduction"},B=Q,L=Object(f["a"])(B,F,M,!1,null,null,null),z=L.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section section-basic"},[a("div",{staticClass:"container"},[a("h3",{staticClass:"title"},[t._v("举办信息")]),t._m(0),a("vl-map",{staticStyle:{height:"400px"},attrs:{"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0,"data-projection":"EPSG:4326"}},[a("vl-view",{attrs:{zoom:t.zoom,center:t.center,rotation:t.rotation},on:{"update:zoom":function(e){t.zoom=e},"update:center":function(e){t.center=e},"update:rotation":function(e){t.rotation=e}}}),a("vl-geoloc",{on:{"update:position":function(e){t.geolocPosition=e}},scopedSlots:t._u([{key:"default",fn:function(e){return[e.position?a("vl-feature",{attrs:{id:"position-feature"}},[a("vl-geom-point",{attrs:{coordinates:e.position}}),a("vl-style-box",[a("vl-style-icon",{attrs:{src:"_media/marker.png",scale:.4,anchor:[.5,1]}})],1)],1):t._e(),a("vl-feature",{ref:"marker",attrs:{id:"marker",properties:{start:Date.now(),duration:2500}}},[a("vl-geom-point",{attrs:{coordinates:t.loc}}),a("vl-style-box",[a("vl-style-icon",{attrs:{src:t.MapIcon,scale:.5,size:[96,96]}})],1)],1)]}}])}),a("vl-layer-tile",{attrs:{id:"osm"}},[a("vl-source-osm")],1)],1)],1)])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 ml-auto mr-auto icon-list"},[a("div",{staticClass:"tim-typo"},[a("p",[a("span",{staticClass:"tim-note"},[t._v("举办时间")]),a("i",{staticClass:"material-icons"},[t._v("access_time")]),t._v(" 2020年5月16日至17日")])]),a("div",{staticClass:"tim-typo"},[a("p",[a("span",{staticClass:"tim-note"},[t._v("主办社区")]),a("i",{staticClass:"material-icons"},[t._v("people")]),t._v(" 电子科技大学Linux用户组、电子科技大学微软学生俱乐部")])])])])}],D=a("9b1b"),J=a.n(D),W={name:"Map",data:function(){return{zoom:14,center:[103.93447213467519,30.754676847667],loc:[103.9275765,30.7586058],rotation:0,geolocPosition:void 0,MapIcon:J.a}}},Z=W,G=(a("fc9c"),Object(f["a"])(Z,H,I,!1,null,null,null)),K=G.exports,U={name:"home",components:{Head:A,Introduction:z,Map:K}},R=U,V=Object(f["a"])(R,j,S,!1,null,null,null),X=V.exports,Y=a("1cf8");a("2b69");n["a"].use(Y["a"]),n["a"].use(x["a"]);var tt=[{path:"/",name:"home",component:X},{path:"/reg",name:"reg",component:function(){return a.e("chunk-31f8bd26").then(a.bind(null,"3fd1"))}},{path:"/sub/:sub",name:"sub",component:function(){return a.e("chunk-2d22c6c5").then(a.bind(null,"f2be"))}},{path:"/events",name:"events",component:function(){return a.e("chunk-dfc73350").then(a.bind(null,"aa9c"))}},{path:"/about",name:"about",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}}],et=new x["a"]({mode:"history",base:"/",routes:tt}),at=et,nt=a("2f62");n["a"].use(nt["a"]);var st=new nt["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:at,store:st,render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},"88ad":function(t,e,a){t.exports=a.p+"img/qqqrcode.f22b9430.jpg"},"9b1b":function(t,e,a){t.exports=a.p+"img/map_icon.325a4a07.png"},"9c0c":function(t,e,a){},c7fa:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.7bc3142b.png"},d5a8:function(t,e,a){},ed6b:function(t,e,a){"use strict";var n=a("d5a8"),s=a.n(n);s.a},fc9c:function(t,e,a){"use strict";var n=a("c7fa"),s=a.n(n);s.a}});
//# sourceMappingURL=app.af086868.js.map