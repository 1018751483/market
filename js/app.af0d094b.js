(function(t){function e(e){for(var r,o,i=e[0],u=e[1],s=e[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a={app:0},c=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d0df247":"b9e03ea8","chunk-2d22ce43":"e2f3e115","chunk-e8389c04":"a75455b9","chunk-38383fe1":"c5d51b9f","chunk-b5f65aa8":"f55e9901","chunk-c91045d0":"9eaac25d","chunk-7b679fe0":"efd6bae1"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-e8389c04":1,"chunk-38383fe1":1,"chunk-b5f65aa8":1,"chunk-c91045d0":1,"chunk-7b679fe0":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0df247":"31d6cfe0","chunk-2d22ce43":"31d6cfe0","chunk-e8389c04":"092943f8","chunk-38383fe1":"1d11da4d","chunk-b5f65aa8":"f77f856c","chunk-c91045d0":"c3ef79f9","chunk-7b679fe0":"f51b90c1"}[t]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[t],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"077b":function(t,e,n){"use strict";n("b398")},"0908":function(t,e,n){"use strict";n("d6e4")},2872:function(t,e,n){t.exports=n.p+"img/shopcart.fbc81098.svg"},"3fa9":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"detail"}},[n("router-view")],1),n("bottom")],1)},a=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("navbottom",[r("navbottomitem",{attrs:{path:"/home",activeColor:"red"}},[r("img",{attrs:{slot:"img",src:n("9443"),alt:""},slot:"img"}),r("img",{attrs:{slot:"img-alive",src:n("b508"),alt:""},slot:"img-alive"}),r("div",{attrs:{slot:"text"},slot:"text"},[t._v("首页")])]),r("navbottomitem",{attrs:{path:"/category"}},[r("img",{attrs:{slot:"img",src:n("57cd"),alt:""},slot:"img"}),r("img",{attrs:{slot:"img-alive",src:n("a5ef"),alt:""},slot:"img-alive"}),r("div",{attrs:{slot:"text"},slot:"text"},[t._v("分类")])]),r("navbottomitem",{attrs:{path:"/shopcart"}},[r("img",{attrs:{slot:"img",src:n("2872"),alt:""},slot:"img"}),r("img",{attrs:{slot:"img-alive",src:n("c3f8"),alt:""},slot:"img-alive"}),r("div",{attrs:{slot:"text"},slot:"text"},[t._v("购物车")])]),r("navbottomitem",{attrs:{path:"/profile"}},[r("img",{attrs:{slot:"img",src:n("e55d"),alt:""},slot:"img"}),r("img",{attrs:{slot:"img-alive",src:n("d151"),alt:""},slot:"img-alive"}),r("div",{attrs:{slot:"text"},slot:"text"},[t._v("我的")])])],1)],1)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tebbar"},[t._t("default")],2)},s=[],l={name:"navbottom",data:function(){return{}},components:{},methods:{}},f=l,d=(n("077b"),n("2877")),p=Object(d["a"])(f,u,s,!1,null,"d9c2301a",null),h=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar",on:{click:t.click}},[t.isactive?n("div",[t._t("img-alive")],2):n("div",[t._t("img")],2),n("div",{style:t.style},[t._t("text")],2)])},v=[],g={name:"navbottomitem",props:{path:String,activeColor:{type:String,default:"red"}},data:function(){return{}},components:{},computed:{isactive:function(){return this.$route.path===this.path},style:function(){return this.isactive?{color:this.activeColor}:{}}},methods:{click:function(){this.$router.push(this.path).catch((function(){})),console.log(this.$route.path===this.path),console.log(this.$route.path),console.log(this.path)}}},b=g,k=(n("0908"),Object(d["a"])(b,m,v,!1,null,"258db9df",null)),y=k.exports,x={name:"finishbottom",data:function(){return{}},components:{navbottom:h,navbottomitem:y},methods:{}},_=x,w=Object(d["a"])(_,c,i,!1,null,"6fd0aa34",null),O=w.exports,j={name:"App",data:function(){return{}},components:{bottom:O},methods:{}},P=j,C=(n("5fe3"),Object(d["a"])(P,o,a,!1,null,"6e487eda",null)),E=C.exports,L=(n("d3b7"),n("8c4f")),S=function(){return Promise.all([n.e("chunk-e8389c04"),n.e("chunk-38383fe1"),n.e("chunk-b5f65aa8")]).then(n.bind(null,"b3d7"))},$=function(){return n.e("chunk-2d22ce43").then(n.bind(null,"f4ba"))},A=function(){return Promise.all([n.e("chunk-e8389c04"),n.e("chunk-7b679fe0")]).then(n.bind(null,"c723"))},T=function(){return n.e("chunk-2d0df247").then(n.bind(null,"893c"))},N=function(){return Promise.all([n.e("chunk-e8389c04"),n.e("chunk-38383fe1"),n.e("chunk-c91045d0")]).then(n.bind(null,"7be8"))};r["a"].use(L["a"]);var M=[{path:"",redirect:"/home"},{path:"/home",component:S},{path:"/category",component:$},{path:"/shopcart",component:A},{path:"/profile",component:T},{path:"/detail/:iid",component:N}],B=new L["a"]({base:"",routes:M}),q=B,D=n("2f62"),J={Addcounter:function(t,e){e.count++},addtocart:function(t,e){t.cartList.push(e)}},F=n("b85c"),H={addCart:function(t,e){return new Promise((function(n,r){var o,a=null,c=Object(F["a"])(t.state.cartList);try{for(c.s();!(o=c.n()).done;){var i=o.value;i.iid===e.iid&&(a=i)}}catch(u){c.e(u)}finally{c.f()}a?(t.commit("Addcounter",a),n("当前的数量+1")):(e.count=1,e.checked=!0,t.commit("addtocart",e),n("添加了新的商品"))}))}},I={cartLength:function(t){return t.cartList.length},cartList:function(t){return t.cartList()}};r["a"].use(D["a"]);var K=new D["a"].Store({state:{cartList:[]},mutations:J,actions:H,getters:I}),U=n("fe3c"),z=n.n(U),G=n("caf9");r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],z.a.attach(document.body),r["a"].use(G["a"]),new r["a"]({router:q,store:K,render:function(t){return t(E)}}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.11368804.svg"},"5fe3":function(t,e,n){"use strict";n("3fa9")},9443:function(t,e,n){t.exports=n.p+"img/home.43fd8010.svg"},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.e3dac1fb.svg"},b398:function(t,e,n){},b508:function(t,e,n){t.exports=n.p+"img/home_active.74d1cc4d.svg"},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3857810e.svg"},d151:function(t,e,n){t.exports=n.p+"img/profile_active.3ba58f85.svg"},d6e4:function(t,e,n){},e55d:function(t,e,n){t.exports=n.p+"img/profile.c2b75dfe.svg"}});
//# sourceMappingURL=app.af0d094b.js.map