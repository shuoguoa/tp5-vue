(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{137:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("a",{attrs:{href:"javascript:;"},on:{click:t.onClearRows}},[t._v("清空")]),t._v(" "),e("a",{attrs:{href:"javascript:;"},on:{click:t.onLoad}},[t._v("重新加载")]),t._v(" "),e("router-link",{attrs:{tag:"a",to:{name:"login"}}},[t._v("查看表单栗子")]),t._v(" "),0===t.rows.length?e("div",[t._v("\n        正在加载中\n    ")]):e("ul",t._l(t.rows,function(n){return e("li",{key:n.id},[t._v(t._s(n.title))])}))],1)},r=[];a._withStripped=!0,e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r})},196:function(t,n,e){"use strict";var a=e(67),r=e.n(a);r.a},198:function(t,n,e){"use strict";e.r(n);var a=e(137),r=e(65);for(var o in r)"default"!==o&&function(t){e.d(n,t,function(){return r[t]})}(o);e(196);var u=e(60),i=Object(u["a"])(r["default"],a["a"],a["b"],!1,null,"43ad3084",null);i.options.__file="webpack\\src\\pages\\index\\views\\index.vue",n["default"]=i.exports},65:function(t,n,e){"use strict";e.r(n);var a=e(66),r=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=r.a},66:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a,r=e(140),o=p(r),u=e(94),i=p(u),s=e(95),c=p(s),l=e(141),f=p(l),d=e(142),v=p(d),_=e(143);function p(t){return t&&t.__esModule?t:{default:t}}var w=(0,_.Component)(a=function(t){function n(){var t,e,a,r;(0,i.default)(this,n);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return a=(0,f.default)(this,(t=n.__proto__||(0,o.default)(n)).call.apply(t,[this].concat(s))),e=a,a.rows=[],r=e,(0,f.default)(a,r)}return(0,v.default)(n,t),(0,c.default)(n,[{key:"mounted",value:function(){this.rows=[],this.onLoad()}},{key:"onLoad",value:function(){var t=this;this.$http.get("news").then(function(n){console.log(n),t.rows=n.data.data})}},{key:"onClearRows",value:function(){this.rows=[],alert("数据清除完成")}}]),n}(_.Vue))||a;n.default=w},67:function(t,n){}}]);
//# sourceMappingURL=2.8d1928c5.js.map