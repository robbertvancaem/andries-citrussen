(function(e){function t(t){for(var a,s,l=t[0],o=t[1],i=t[2],f=0,p=[];f<l.length;f++)s=l[f],r[s]&&p.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(p.length)p.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,l=1;l<n.length;l++){var o=n[l];0!==r[o]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},c=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/andries-citrussen/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=o;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"07fc":function(e,t,n){},"0cec":function(e,t,n){"use strict";var a=n("07fc"),r=n.n(a);r.a},"50f1":function(e,t,n){"use strict";var a=n("8ff1"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Menu",{attrs:{menuItems:e.menuItems}}),n("Header",{attrs:{title:e.homepageData.title}})],1)},c=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"content-wrapper"},[n("h1",[e._v(e._s(e.title))])]),n("Overlay",{attrs:{"background-color":"rgba(59,22,17,0.6)"}})],1)},l=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"overlay",style:{backgroundColor:e.backgroundColor}})},i=[],u={name:"app-overlay",props:{backgroundColor:{type:String,required:!0}}},f=u,p=(n("855a"),n("2877")),h=Object(p["a"])(f,o,i,!1,null,"2c29620e",null),v=h.exports,d={name:"app-header",props:["title"],components:{Overlay:v}},m=d,b=(n("ab30"),Object(p["a"])(m,s,l,!1,null,"b44dd1aa",null)),g=b.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("div",{staticClass:"logo"},[n("a",{attrs:{href:"/",target:"_self"}},[n("Logo")],1)]),n("ul",e._l(e.items,function(t){return n("menu-item",e._b({key:t.key},"menu-item",t,!1))}),1)])},_=[],y=n("cebc"),w={functional:!0,render(e,t){const{_c:n,_v:a,data:r,children:c=[]}=t,{class:s,staticClass:l,style:o,staticStyle:i,attrs:u={},...f}=r;return n("svg",{class:["svg-sprite-inline svg-sprite-inline-logo_new",s,l],style:[o,i],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 432 106",width:"0",height:"0",class:"svg-sprite-inline svg-sprite-inline-logo_new","enable-background":"new 0 0 432 106"},u),...f},c.concat([n("path",{staticClass:"logo-new0",attrs:{d:"M51.064 55.366l45.07 29.211c1.607 1.043 3.726-.116 3.726-2.038V24.115c0-1.923-2.119-3.083-3.727-2.04l-45.07 29.212c-1.474.956-1.474 3.123 0 4.079z"}}),n("path",{staticClass:"logo-new1",attrs:{d:"M142.057 44.487c-2.44-1.352-4.347-3.269-5.724-5.75-1.378-2.483-2.067-5.319-2.067-8.509 0-3.19.694-6.025 2.082-8.508 1.388-2.482 3.317-4.41 5.788-5.782 2.47-1.373 5.283-2.06 8.436-2.06 2.545 0 5.005.507 7.381 1.522 2.376 1.013 4.332 2.47 5.867 4.372l-4.92 4.278a10.052 10.052 0 0 0-3.438-2.63c-1.346-.634-2.849-.951-4.51-.951-1.851 0-3.481.407-4.89 1.22-1.408.813-2.502 1.954-3.28 3.422-.777 1.468-1.166 3.153-1.166 5.054 0 1.922.393 3.622 1.182 5.101.789 1.48 1.893 2.625 3.313 3.438 1.418.813 3.043 1.22 4.871 1.22.674 0 1.342-.058 2.003-.174a10.43 10.43 0 0 0 1.846-.492 11.182 11.182 0 0 0 1.609-.744c.504-.285.967-.597 1.387-.934.421-.339.8-.698 1.136-1.078l4.984 4.436c-1.452 1.648-3.36 2.989-5.726 4.024-2.366 1.035-4.999 1.553-7.9 1.553-3.07 0-5.825-.676-8.264-2.028z"}}),n("defs",[n("filter",{attrs:{id:"Adobe_OpacityMaskFilter",filterUnits:"userSpaceOnUse",x:"0",y:"0",width:"432",height:"106"}},[n("feColorMatrix",{attrs:{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"}})])]),n("mask",{attrs:{maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"432",height:"106",id:"mask0_1_"}},[n("path",{attrs:{d:"M0 106h432V0H0v106z","fill-rule":"evenodd","clip-rule":"evenodd",fill:"#fff",filter:"url(#Adobe_OpacityMaskFilter)"}})]),n("g",{attrs:{mask:"url(#mask0_1_)"}},[n("path",{staticClass:"logo-new1",attrs:{d:"M168.364 46.008h7.223V14.354h-7.223v31.654zm.19-37.785c-.947-.94-1.42-2.076-1.42-3.407 0-1.33.473-2.466 1.42-3.406C169.5.47 170.655 0 172.022 0c1.324 0 2.465.475 3.422 1.426.957.95 1.436 2.08 1.436 3.39 0 .866-.222 1.669-.664 2.409a4.915 4.915 0 0 1-1.781 1.758c-.747.433-1.55.65-2.413.65-1.367 0-2.523-.47-3.47-1.41zM185.51 43.853c-1.546-1.774-2.32-4.393-2.32-7.858V20.533h-3.847v-6.18h3.847V3.833l7.224-.791v11.311h9.273v6.18h-9.273V35.33c0 1.584.246 2.714.741 3.39.494.676 1.257 1.014 2.286 1.014 1.409 0 2.965-.454 4.67-1.363l1.89 6.274a16.217 16.217 0 0 1-3.452 1.394c-1.168.317-2.687.475-4.558.475-2.776 0-4.936-.886-6.482-2.66zM221.577 13.91v8.08a28.58 28.58 0 0 0-2.175-.095c-1.787 0-3.339.4-4.653 1.204a7.667 7.667 0 0 0-2.964 3.248c-.663 1.362-.994 2.91-.994 4.641v15.02h-7.223V14.353h7.223v4.754h.095c1.24-1.69 2.706-2.984 4.399-3.882a11.383 11.383 0 0 1 5.41-1.347c.42 0 .714.011.882.032zM253.215 14.354v31.654h-7.223V41.89h-.094c-1.24 1.5-2.702 2.645-4.385 3.438a12.36 12.36 0 0 1-5.329 1.188c-1.788 0-3.38-.238-4.779-.713a10.088 10.088 0 0 1-3.69-2.203c-1.062-.992-1.877-2.328-2.444-4.008-.568-1.68-.851-3.67-.851-5.973V14.354h7.221v17.3c0 1.584.123 2.904.364 3.96.24 1.057.625 1.902 1.151 2.536a4.301 4.301 0 0 0 1.924 1.346c.756.265 1.692.397 2.807.397a7.11 7.11 0 0 0 3.06-.682 8.038 8.038 0 0 0 2.585-1.949c.757-.844 1.357-1.937 1.798-3.28.442-1.34.662-2.835.662-4.483V14.354h7.223zM257.098 41.889l3.659-5.45c1.283 1.288 2.643 2.234 4.084 2.835 1.44.603 3.106.904 4.999.904 1.367 0 2.445-.286 3.233-.856.788-.57 1.182-1.32 1.182-2.25 0-.76-.447-1.388-1.34-1.885-.894-.496-2.528-1.156-4.904-1.98a32.65 32.65 0 0 1-2.524-.951 23.496 23.496 0 0 1-2.254-1.125 9.568 9.568 0 0 1-1.972-1.441 11.337 11.337 0 0 1-1.498-1.79 7.534 7.534 0 0 1-1.025-2.266c-.232-.845-.347-1.775-.347-2.788 0-2.577 1.045-4.717 3.138-6.417 2.092-1.7 4.747-2.55 7.964-2.55 4.163 0 7.886 1.32 11.166 3.96l-3.628 5.704c-.82-.76-1.697-1.4-2.634-1.917-.935-.518-1.834-.893-2.697-1.126a9.919 9.919 0 0 0-2.586-.348c-.841 0-1.623.232-2.35.698-.725.464-1.087 1.14-1.087 2.027 0 .507.22.988.662 1.442.441.454.999.86 1.672 1.22.672.359 1.567.76 2.681 1.204 3.342 1.33 5.424 2.207 6.244 2.63 2.082 1.12 3.449 2.482 4.101 4.087.378.993.567 2.144.567 3.454 0 1.352-.24 2.604-.725 3.755a8.707 8.707 0 0 1-2.144 3.041c-.947.877-2.177 1.564-3.69 2.06-1.515.497-3.25.745-5.205.745-5.004 0-9.252-1.542-12.742-4.626zM156.928 96.732c1.734-1.786 2.603-4.082 2.603-6.892 0-2.81-.848-5.16-2.54-7.05-1.693-1.89-3.822-2.836-6.387-2.836a9.047 9.047 0 0 0-3.548.697 8.776 8.776 0 0 0-2.886 1.949c-.82.834-1.467 1.88-1.94 3.137-.473 1.257-.71 2.624-.71 4.103 0 2.81.842 5.106 2.524 6.892 1.682 1.785 3.858 2.677 6.528 2.677 2.502 0 4.621-.892 6.356-2.677zm9.54-22.894v31.654h-6.906v-4.245h-.094c-2.397 3.168-5.741 4.753-10.03 4.753-1.725 0-3.37-.243-4.937-.729a13.594 13.594 0 0 1-4.226-2.154 15.218 15.218 0 0 1-3.25-3.376c-.913-1.298-1.618-2.799-2.112-4.499-.494-1.7-.741-3.512-.741-5.434 0-2.345.389-4.542 1.167-6.59.778-2.05 1.839-3.792 3.184-5.229 1.347-1.436 2.956-2.566 4.827-3.39 1.871-.824 3.88-1.236 6.025-1.236 4.1 0 7.348 1.426 9.746 4.278h.126v-3.803h7.222zM199.384 76.674c2.05 2.208 3.075 5.604 3.075 10.188v18.663h-7.223V88.73c0-1.648-.147-3.042-.441-4.183-.295-1.14-.746-2.043-1.357-2.708a5.343 5.343 0 0 0-2.129-1.443c-.809-.295-1.781-.443-2.917-.443-1.22 0-2.334.212-3.344.633a7.085 7.085 0 0 0-2.586 1.838c-.715.803-1.267 1.817-1.656 3.042-.389 1.226-.583 2.598-.583 4.12v15.905H173V73.84h7.223v4.34h.094a13.315 13.315 0 0 1 4.731-3.58 14.057 14.057 0 0 1 5.835-1.236c3.617 0 6.45 1.104 8.5 3.311zM229.808 96.748c1.766-1.775 2.649-4.077 2.649-6.908 0-2.83-.857-5.186-2.57-7.066-1.714-1.88-3.916-2.82-6.608-2.82a9.06 9.06 0 0 0-3.548.697 8.763 8.763 0 0 0-2.885 1.95c-.822.833-1.468 1.879-1.941 3.136-.473 1.257-.71 2.625-.71 4.103 0 2.81.842 5.107 2.525 6.891 1.681 1.786 3.857 2.678 6.528 2.678 2.606 0 4.794-.887 6.56-2.661zm9.589-39.037v47.781h-6.908v-4.246h-.126c-2.397 3.17-5.814 4.754-10.251 4.754-1.724 0-3.37-.243-4.936-.73a13.554 13.554 0 0 1-4.227-2.153 15.174 15.174 0 0 1-3.247-3.375c-.916-1.3-1.62-2.8-2.115-4.5-.493-1.7-.74-3.511-.74-5.433 0-2.346.388-4.542 1.166-6.592.778-2.048 1.84-3.791 3.186-5.227 1.346-1.437 2.955-2.568 4.825-3.391 1.872-.824 3.88-1.236 6.025-1.236 4.247 0 7.57 1.426 9.967 4.278h.158v-19.93h7.223zM264.22 73.395v8.08a28.575 28.575 0 0 0-2.175-.095c-1.787 0-3.339.4-4.653 1.204a7.667 7.667 0 0 0-2.964 3.248c-.663 1.362-.994 2.91-.994 4.641v15.02h-7.223V73.837h7.223v4.754h.095c1.24-1.69 2.706-2.985 4.399-3.882a11.383 11.383 0 0 1 5.41-1.347c.42 0 .714.011.882.032zM268.135 105.493h7.223V73.84h-7.223v31.654zm.189-37.785c-.946-.94-1.42-2.076-1.42-3.407 0-1.33.474-2.466 1.42-3.406.945-.94 2.102-1.41 3.468-1.41 1.326 0 2.466.475 3.424 1.426.956.95 1.434 2.08 1.434 3.39a4.61 4.61 0 0 1-.662 2.409 4.917 4.917 0 0 1-1.783 1.758 4.73 4.73 0 0 1-2.413.65c-1.366 0-2.523-.47-3.468-1.41zM291.351 81.617c-1.451 1.11-2.429 2.678-2.933 4.706h15.77c-.316-1.289-.805-2.403-1.467-3.343a6.948 6.948 0 0 0-2.586-2.218c-1.062-.539-2.265-.808-3.612-.808-1.998 0-3.721.554-5.172 1.663zm19.902 10.568h-22.962c.463 2.239 1.499 4.002 3.107 5.291 1.609 1.289 3.57 1.933 5.882 1.933 3.26 0 5.878-1.246 7.854-3.74l5.047 4.342c-1.43 1.837-3.266 3.296-5.505 4.373-2.238 1.077-4.83 1.616-7.774 1.616-3.049 0-5.793-.665-8.232-1.996-2.439-1.332-4.364-3.248-5.772-5.752-1.409-2.503-2.113-5.37-2.113-8.603 0-2.386.39-4.594 1.166-6.622.779-2.028 1.851-3.749 3.218-5.164 1.366-1.415 2.996-2.52 4.889-3.311 1.891-.793 3.921-1.189 6.087-1.189 3.048 0 5.74.687 8.074 2.06a13.774 13.774 0 0 1 5.362 5.671c1.24 2.408 1.861 5.144 1.861 8.207 0 1.162-.063 2.123-.189 2.884zM313.684 101.374l3.658-5.45c1.284 1.288 2.645 2.234 4.085 2.835 1.44.603 3.106.903 5 .903 1.367 0 2.444-.285 3.232-.855.789-.57 1.183-1.32 1.183-2.25 0-.76-.447-1.388-1.34-1.885-.894-.496-2.529-1.157-4.906-1.98a32.772 32.772 0 0 1-2.523-.951 23.499 23.499 0 0 1-2.254-1.125 9.569 9.569 0 0 1-1.971-1.442 11.339 11.339 0 0 1-1.499-1.79 7.535 7.535 0 0 1-1.024-2.265c-.232-.845-.347-1.775-.347-2.788 0-2.578 1.045-4.717 3.138-6.417 2.092-1.7 4.747-2.55 7.963-2.55 4.164 0 7.886 1.32 11.166 3.96l-3.627 5.703c-.82-.76-1.698-1.4-2.634-1.916-.935-.518-1.835-.893-2.697-1.126a9.918 9.918 0 0 0-2.586-.348c-.842 0-1.624.232-2.35.697-.725.465-1.088 1.14-1.088 2.028 0 .507.22.988.663 1.442.44.454.998.86 1.67 1.22.674.359 1.568.76 2.682 1.204 3.343 1.33 5.425 2.207 6.245 2.63 2.082 1.12 3.448 2.482 4.1 4.087.379.993.568 2.144.568 3.454 0 1.352-.241 2.604-.726 3.755a8.71 8.71 0 0 1-2.143 3.041c-.948.877-2.177 1.564-3.69 2.06-1.515.497-3.25.744-5.206.744-5.004 0-9.252-1.542-12.742-4.625zM340.086 101.374l3.659-5.45c1.282 1.288 2.644 2.234 4.085 2.835 1.44.603 3.106.903 4.999.903 1.366 0 2.444-.285 3.232-.855.79-.57 1.183-1.32 1.183-2.25 0-.76-.447-1.388-1.34-1.885-.894-.496-2.53-1.157-4.905-1.98a32.777 32.777 0 0 1-2.523-.951 23.398 23.398 0 0 1-2.255-1.125 9.596 9.596 0 0 1-1.972-1.442 11.388 11.388 0 0 1-1.497-1.79 7.561 7.561 0 0 1-1.026-2.265c-.23-.845-.346-1.775-.346-2.788 0-2.578 1.045-4.717 3.138-6.417 2.091-1.7 4.747-2.55 7.963-2.55 4.164 0 7.886 1.32 11.166 3.96l-3.628 5.703c-.82-.76-1.697-1.4-2.633-1.916-.936-.518-1.834-.893-2.697-1.126a9.924 9.924 0 0 0-2.586-.348c-.841 0-1.624.232-2.35.697-.725.465-1.088 1.14-1.088 2.028 0 .507.221.988.663 1.442.441.454.998.86 1.67 1.22.674.359 1.568.76 2.682 1.204 3.343 1.33 5.425 2.207 6.245 2.63 2.082 1.12 3.449 2.482 4.101 4.087.378.993.567 2.144.567 3.454 0 1.352-.242 2.604-.725 3.755a8.714 8.714 0 0 1-2.145 3.041c-.946.877-2.176 1.564-3.69 2.06-1.514.497-3.249.744-5.204.744-5.004 0-9.252-1.542-12.743-4.625zM377.558 81.617c-1.45 1.11-2.428 2.678-2.932 4.706h15.77c-.316-1.289-.805-2.403-1.467-3.343a6.948 6.948 0 0 0-2.586-2.218c-1.062-.539-2.265-.808-3.612-.808-1.997 0-3.721.554-5.173 1.663zm19.903 10.568H374.5c.463 2.239 1.499 4.002 3.107 5.291 1.608 1.289 3.57 1.933 5.883 1.933 3.258 0 5.877-1.246 7.853-3.74l5.046 4.342c-1.43 1.837-3.264 3.296-5.503 4.373-2.24 1.077-4.831 1.616-7.774 1.616-3.05 0-5.794-.665-8.233-1.996-2.44-1.332-4.363-3.248-5.772-5.752-1.409-2.503-2.113-5.37-2.113-8.603 0-2.386.39-4.594 1.167-6.622.778-2.028 1.85-3.749 3.217-5.164 1.366-1.415 2.996-2.52 4.888-3.311 1.893-.793 3.922-1.189 6.087-1.189 3.05 0 5.742.687 8.075 2.06a13.774 13.774 0 0 1 5.363 5.671c1.24 2.408 1.86 5.144 1.86 8.207 0 1.162-.063 2.123-.189 2.884zM428.925 76.674c2.05 2.208 3.075 5.604 3.075 10.188v18.663h-7.223V88.73c0-1.648-.147-3.042-.442-4.183-.294-1.14-.745-2.043-1.356-2.708a5.344 5.344 0 0 0-2.128-1.443c-.81-.295-1.782-.443-2.919-.443-1.22 0-2.333.212-3.343.633a7.085 7.085 0 0 0-2.586 1.838c-.715.803-1.266 1.817-1.656 3.042-.389 1.226-.583 2.598-.583 4.12v15.905h-7.224V73.84h7.224v4.34h.094a13.306 13.306 0 0 1 4.731-3.58 14.057 14.057 0 0 1 5.835-1.236c3.617 0 6.45 1.104 8.5 3.311z"}}),n("path",{staticClass:"logo-new0",attrs:{d:"M49.804 5.74v20.341c0 1.32-.998 2.424-2.307 2.547C35.069 29.8 25.31 40.34 25.31 53.126c0 12.787 9.758 23.326 22.186 24.498a2.552 2.552 0 0 1 2.307 2.548v20.34c0 1.5-1.27 2.653-2.759 2.571C20.861 101.641 0 79.785 0 53.126 0 26.468 20.861 4.612 47.045 3.169c1.49-.082 2.759 1.073 2.759 2.571z"}})])]))}},O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{on:{mouseover:e.onMouseOver,mouseleave:e.onMouseLeave}},[n("a",{attrs:{href:e.url,"data-hover":e.label}},[n("span",[e._v(e._s(e.label))])]),n("transition",{attrs:{name:"unfold"}},[e.showSubMenu?n("div",[e._v("\n      HALLO SUBCONTENT IS DIT OFZO\n    ")]):e._e()])],1)},z=[],C={name:"menu-item",props:{url:String,label:String},data:function(){return{showSubMenu:!1}},methods:{onMouseOver:function(e){this.showSubMenu=!0},onMouseLeave:function(e){this.showSubMenu=!1}}},k=C,S=(n("50f1"),Object(p["a"])(k,O,z,!1,null,"1e962225",null)),x=S.exports,V={name:"app-menu",props:{menuItems:{type:Array,required:!0}},components:{Logo:w,MenuItem:x},computed:{items:function(){return this.menuItems.map(function(e,t){return Object(y["a"])({},e,{key:t})})}}},j=V,I=(n("0cec"),Object(p["a"])(j,M,_,!1,null,"499acd00",null)),H=I.exports,P=[{url:"/",label:"Home"},{url:"/diensten",label:"Diensten"},{url:"/oplossingen",label:"Oplossingen"},{url:"/cases",label:"Cases"},{url:"/over",label:"Over Andries Citrussen"},{url:"/contact",label:"Contact"}],E={title:"Partner in digitaal toetsen"},L={name:"app",components:{Header:g,Menu:H},data:function(){return{menuItems:P,homepageData:E}}},T=L,$=(n("034f"),Object(p["a"])(T,r,c,!1,null,null,null)),A=$.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(A)}}).$mount("#app")},"64a9":function(e,t,n){},"855a":function(e,t,n){"use strict";var a=n("d604"),r=n.n(a);r.a},"8ff1":function(e,t,n){},"93c1":function(e,t,n){},ab30:function(e,t,n){"use strict";var a=n("93c1"),r=n.n(a);r.a},d604:function(e,t,n){}});
//# sourceMappingURL=app.646f68c8.js.map