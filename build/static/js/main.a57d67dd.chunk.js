(this["webpackJsonpyahoo-shopping-rank"]=this["webpackJsonpyahoo-shopping-rank"]||[]).push([[0],{170:function(e,t,n){e.exports=n(362)},362:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),i=n(26),l=n(41),u=n(67),s=n(68),p=n(72),d=n(71),m=n(73),g=n(49),y=n.n(g),f=n(40),h=n.n(f),E=n(154),v=n.n(E),b=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentWillUnmount",value:function(){this.props.onMount(this.props.categoryId)}},{key:"componentWillReceiveProps",value:function(e){this.props.categoryId!==e.categoryId&&this.props.onUpdate(e.categoryId)}},{key:"render",value:function(){console.log("this is this prop"),console.log(this.props),console.log("\u3053\u3053\u307e\u3067");var e=this.props,t=e.category,n=e.ranking,a=e.error;return r.a.createElement("div",null,r.a.createElement("h2",null,"undefined"!==typeof t?"".concat(t.name,"\u306e\u30e9\u30f3\u30ad\u30f3\u30b0"):""),a?r.a.createElement("p",null,"\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\u30ea\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044"):"undefined"===typeof n?r.a.createElement("p",null,"\u8aad\u307f\u8fbc\u307f\u4e2d..."):n.map((function(e,t){return r.a.createElement(y.a,{key:"rankning-item-".concat(e.code),style:{maxWidth:"500px",margin:"32px auto"}},r.a.createElement(g.CardMedia,{image:e.imageUrl,title:e.name,style:{height:"200px"}}),r.a.createElement(g.CardContent,null,r.a.createElement(h.a,{type:"title"},"".concat(t+1,"\u4f4d ").concat(e.name))),r.a.createElement(g.CardActions,null,r.a.createElement(v.a,{raised:!0,color:"secondary",fullWidth:!0,href:e.url},"\u5546\u54c1\u30da\u30fc\u30b8\u3078")))})))}}]),n}(r.a.Component);b.defaultProps={categoryId:"1"};var j=n(100),k=n.n(j),O=n(155),R=n(156),I=n.n(R),w=n(157),C=n.n(w),S=n(168),T=function(e){return{type:"START_REQUEST",payload:{category:e}}},x=function(e,t,n){return{type:"RECEIVE_DATA",payload:{category:e,error:t,response:n}}},U=function(e){return{type:"FINISH_REQUEST",payload:{category:e}}},W=function(e){return function(){var t=Object(O.a)(k.a.mark((function t(n,a){var r,o,c,i,l;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=a().shopping.categories,"undefined"!==typeof(o=r.find((function(t){return t.id===e})))){t.next=5;break}return n(Object(S.a)("/")),t.abrupt("return");case 5:return n(T(o)),c=C.a.stringify({appid:"dj00aiZpPTREMmpuaFE4OU5ZSyZzPWNvbnN1bWVyc2VjcmV0Jng9NjE-",category_id:e}),t.prev=7,t.next=10,I()("".concat("https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking","?").concat(c));case 10:return i=t.sent,t.next=13,i.json();case 13:l=t.sent,n(x(o,null,l)),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(7),n(x(o,t.t0));case 20:n(U(o));case 21:case"end":return t.stop()}}),t,null,[[7,17]])})));return function(e,n){return t.apply(this,arguments)}}()},A=Object(i.c)((function(e,t){return{categoryId:t.categoryId,category:e.Ranking.category,ranking:e.Ranking.ranking,error:e.Ranking.error}}),(function(e){return{onMount:function(t){e(W(t))},onUpdate:function(t){e(W(t))}}}))(b),M=n(161),N=n.n(M),V=n(74),_=n.n(V);var P=n(14),J=Object(i.c)((function(e){return{categories:e.shopping.categories}}),(function(e){return{onClick:function(t){e(Object(P.d)(t))}}}))((function(e){var t=e.categories,n=e.onClick;return r.a.createElement(N.a,{type:"permanent"},r.a.createElement(_.a,{style:{width:240}},t.map((function(e){return r.a.createElement(V.ListItem,{button:!0,key:"nav-item-".concat(e.id),onClick:function(){return n(function(e){return"1"===e.id?"/all":"category/".concat(e.id)}(e))}},r.a.createElement(V.ListItemText,{primary:e.name}))}))))})),L=n(162),Q=n.n(L),Z=n(163),B=n.n(Z),D=n(164),F=n.n(D),z=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App",style:{paddingLeft:240}},r.a.createElement(Q.a,null),r.a.createElement(B.a,{style:{left:240}},r.a.createElement(F.a,null,r.a.createElement(h.a,{type:"title",color:"inherit"},"Yahoo\u30b7\u30e7\u30c3\u30d7\u30e9\u30f3\u30ad\u30f3\u30b0"))),r.a.createElement(J,null),r.a.createElement("div",{style:{marginTop:64,padding:32}},r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/all",component:A}),r.a.createElement(m.b,{path:"/category/1",render:function(){return r.a.createElement(m.a,{to:"/all"})}}),r.a.createElement(m.b,{path:"/category/:id",render:function(e){var t=e.match;return r.a.createElement(A,{categoryId:t.params.id})}}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=n(29),Y=n(152),$={categories:[{id:"1",name:"\u3059\u3079\u3066\u306e\u30ab\u30c6\u30b4\u30ea"},{id:"2502",name:"\u30d1\u30bd\u30b3\u30f3\u3001\u5468\u8fba\u6a5f\u5668"},{id:"10002",name:"\u672c\u3001\u96d1\u8a8c\u3001\u30b3\u30df\u30c3\u30af"}]},q=function(){return $},G=n(50),K=function(e){for(var t=[],n=e.ResultSet.totalResultsReturned,a=0;a<n;a++){var r=e.ResultSet[0].Result[a+""];t.push({code:r.Code,name:r.Name,url:r.Url,imageUrl:r.Image.Medium})}return t},X={category:void 0,ranking:void 0,error:!1},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_REQUEST":return{category:t.payload.category,ranking:void 0,error:!1};case"RECEIVE_DATA":return t.payload.error?Object(G.a)(Object(G.a)({},e),{},{error:!0}):Object(G.a)(Object(G.a)({},e),{},{ranking:K(t.payload.response)});default:return e}},te=n(167),ne=n(165),ae=n.n(ne),re=n(166),oe=Object(te.a)();var ce=function(e){var t;return Object(H.e)((t=oe,Object(H.c)({router:Object(l.b)(t),shopping:q,Ranking:ee})),e,Object(H.d)(Object(H.a)(Object(Y.a)(oe),ae.a,re.a)))}();c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:ce},r.a.createElement(l.a,{history:oe},r.a.createElement(z,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[170,1,2]]]);
//# sourceMappingURL=main.a57d67dd.chunk.js.map