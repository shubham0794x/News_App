(function(e){function t(t){for(var a,s,i=t[0],c=t[1],l=t[2],d=0,f=[];d<i.length;d++)s=i[d],r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"106f":function(e,t,n){},12:function(e,t){},"2cb5":function(e,t,n){"use strict";var a=n("3708"),r=n.n(a);r.a},"2d8c":function(e,t,n){"use strict";var a=n("676f"),r=n.n(a);r.a},3708:function(e,t,n){},"43e2":function(e,t,n){"use strict";var a=n("f4de"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main_body"},[n("headercomponent",{attrs:{name:"name"}}),n("router-view"),n("footercomponent")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"#"}},[e._v("News App")]),n("b-navbar-nav",[n("b-nav-item",{attrs:{"router-link":"",to:"/",exact:""}},[e._v(e._s(e.link1))])],1)],1)],1)},i=[],c={name:"header-component",data:function(){return{link1:"Headlines"}},props:["name"]},l=c,u=(n("2d8c"),n("2877")),d=Object(u["a"])(l,s,i,!1,null,"e086b39e",null);d.options.__file="Header.vue";var f=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-card",{staticClass:"text-center"},[e._v("\r\n    This App uses "),n("a",{attrs:{href:"https://newsapi.org"}},[e._v(" NewsAPI")]),e._v(" data.\r\n  ")])],1)},v=[],m={name:"footercomponent"},b=m,h=(n("43e2"),Object(u["a"])(b,p,v,!1,null,"79b43b36",null));h.options.__file="Footer.vue";var _=h.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{},[n("div",{staticClass:"container-fluid"},[n("h2",{staticClass:"top_news"},[e._v("Latest Headlines")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loader,expression:"loader"}],staticClass:"loader"}),n("ul",{staticClass:"list-unstyled"},e._l(e.news,function(t,a){return t.urlToImage||t.description?n("li",{key:a,staticClass:"media articles card-body "},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-2 col-sm-3"},[n("img",{staticClass:"mr-3 img-thumbnail",attrs:{src:t.urlToImage,alt:"x.title"}})]),n("div",{staticClass:"media-body articles_cont col-md-10 col-sm-9"},[n("h5",{staticClass:"mt-0 mb-1"},[e._v(e._s(t.title))]),n("span",{staticClass:"card-text"},[e._v(e._s(t.description))])]),n("div",{staticClass:"col-md-2 col-sm-2 text-center"},[n("a",{staticClass:"btn btn-primary link_target",attrs:{href:t.url,target:"_blank"}},[e._v("Read More")])])])]):e._e()}))])])])},w=[],g="https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e",x={name:"head-component",data:function(){return{news:[],loader:!0}},methods:{},created:function(){this.$http.get(g).then(function(e){this.loader=!1,this.news=e.body.articles})}},C=x,O=(n("2cb5"),Object(u["a"])(C,y,w,!1,null,"03a65c5a",null));O.options.__file="Head.vue";var j=O.exports,k={name:"app",components:{headercomponent:f,footercomponent:_,headcomponent:j},data:function(){return{name:"hello"}}},P=k,T=(n("5c0b"),Object(u["a"])(P,r,o,!1,null,null,null));T.options.__file="App.vue";var $=T.exports,M=n("ce5b"),S=n.n(M),A=n("9f7b"),E=(n("f9e3"),n("2dd8"),n("28dd")),H=n("8c4f"),I=[{path:"/",component:j}];a["default"].use(A["a"]),a["default"].use(E["a"]),a["default"].use(S.a),a["default"].use(H["a"]);var N=new H["a"]({routes:I,mode:"history"});a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e($)},router:N}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("106f"),r=n.n(a);r.a},"676f":function(e,t,n){},f4de:function(e,t,n){}});
//# sourceMappingURL=app.eabe72c5.js.map