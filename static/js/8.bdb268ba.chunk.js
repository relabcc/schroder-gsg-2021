(this["webpackJsonpschroders-gci-2020"]=this["webpackJsonpschroders-gci-2020"]||[]).push([[8],{608:function(e,t,n){"use strict";var a=n(33),r=n(26),c=n(6),i=n(64),l=n.n(i),o=n(55);function s(){var e=Object(a.a)(["\n  ","\n  ","\n  ","\n"]);return s=function(){return e},e}var u=Object(r.d)(l.a.img)(s(),c.j,c.g,c.h);u.defaultProps={blacklist:o.a,width:1},u.displayName="Image",t.a=u},610:function(e,t,n){"use strict";var a=n(38),r=n(0),c=n.n(r),i=n(16),l=n(12);t.a=function(e){var t=e.children,n=Object(a.a)(e,["children"]);return c.a.createElement(i.a,Object.assign({mt:"1.5em",mb:Object(l.c)("8.5rem","10em"),borderTop:"1px solid",pt:"1em",textAlign:"justify"},n),t)}},668:function(e,t,n){e.exports=n.p+"static/media/lens.a7dd5d65.svg"},751:function(e,t,n){"use strict";n.r(t);var a=n(88),r=n(0),c=n.n(r),i=n(167),l=n(16),o=n(12),s=n(33),u=n(26),b=n(737),m=(n(657),n(256)),d=n(70),f=n(658),h=n(659),p=n.n(h),g=function(e){var t=e.children,n=e.useStickyClasses,a=e.verticalPosition,i=void 0===a?"top":a,o=e.scrollEl,s=e.stickyBitStickyOffset,u=e.noStyles,b=e.parentClass,m=e.stickyClass,d=e.stuckClass,h=e.useFixed,g=e.useGetBoundingClientRect,y=Object(r.useMemo)((function(){return"sticky-".concat(p()())}),[]);return Object(r.useEffect)((function(){return window[y]=Object(f.a)(".".concat(y),{useStickyClasses:n,verticalPosition:i,scrollEl:o,stickyBitStickyOffset:s,noStyles:u,parentClass:b,stickyClass:m,stuckClass:d,useFixed:h,useGetBoundingClientRect:g}),function(){window[y]&&(window[y].cleanup(),delete window[y])}}),[]),c.a.createElement(l.a,{className:y,zOrder:2,left:0,right:0},t)},y=n(166),E=n(260),k=n(157),v=n.n(k),O=n(622),j=function(e){var t=e.nowData,n=e.thAlign,a=e.tbodyAlign,i=e.fontSize,s=void 0===i?"1.143em":i,u=e.bg,b=void 0===u?"darkGreen":u,m=e.noMobile,d=Object(r.useCallback)((function(e,t){return m?t:Object(o.c)(e,t)}),[m]);return c.a.createElement(l.a,{is:"table",fontSize:s},c.a.createElement(l.a,{is:"thead"},c.a.createElement(l.a,{is:"tr"},t.th.map((function(e,t,a){var r=a.length;return c.a.createElement(l.a,{is:"th",color:d(t?t==r-1?"numberGreen":"black":"white","white"),bg:d(t?"white":b,b),px:"0.5em",py:"1em",textAlign:d("center",n||(t?"right":"left")),whiteSpace:"pre-wrap",fontWeight:"bold",key:t},e)})))),t.tbody.map((function(e,n){return c.a.createElement(l.a,{is:"tbody",key:n},c.a.createElement(l.a,{is:"tr"},e.map((function(r,i){return c.a.createElement(l.a,{whiteSpace:"pre-wrap",is:"td",px:"0.5em",py:"1em",fontWeight:"bold",bg:d(i?"white":b,"white"),color:d(i?i==e.length-1?"numberGreen":"black":"white",t.color[n]),borderBottom:Object(o.c)("none","1px solid black"),textAlign:d("center",a||(i?"right":"left")),key:i},r)}))))})))},x=n(259),w=n(115),S=n.n(w),C=n(38),G=n(608),B=n(668),M=n.n(B);function A(){var e=Object(s.a)(["\n  animation: "," 2s infinite;\n"]);return A=function(){return e},e}function z(){var e=Object(s.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return z=function(){return e},e}var W=Object(u.e)(z()),P=u.d.div(A(),W);function F(e){var t=e.text,n=Object(C.a)(e,["text"]);return c.a.createElement(l.a,Object.assign({textAlign:"center"},n),c.a.createElement(P,null,c.a.createElement(G.a,{src:M.a})),c.a.createElement(d.a,{fontSize:"1em",mt:"1em"},t))}F.defaultProps={text:"Loading...",width:"5em"};var D,L=function(e){var t=e.path,n=e.children,a=Object(x.b)(t),r=a.error,i=a.data;return r&&console.error(r),c.a.createElement(l.a,{position:"relative"},r&&"Error!",i?S()(n)?n(i):n:c.a.createElement(l.a.fullAbs,{bg:"rgba(255,255,255,0.5)"},c.a.createElement(l.a.absCenter,null,c.a.createElement(F,{color:"prussianBlue"}))))},R=n(610),I=["\u7d2f\u7a4d\u5831\u916c, \u7f8e\u5143\u5831\u916c (%)","\u4eca\u5e74\u4ee5\u4f86","\u4e09\u500b\u6708","\u516d\u500b\u6708","\u4e00\u5e74","\u4e8c\u5e74","\u4e09\u5e74","\u4e94\u5e74","\u6a19\u6e96\u5dee"],T=function(e){var t=e.isMobile;return c.a.createElement(L,{path:"/performance"},(function(e){if(!e.length)return null;var n=I.map((function(t){return[t,e[0][t],e[1][t],e[2][t],e[3][t]]})),a=v()(e,[4,I[0]]),r={th:Object(E.a)(n.map((function(e){return e[0]}))),tbody:Object(O.range)(n[0].length-1).map((function(e){return Object(E.a)(n.map((function(t){return t[e+1]})))})),color:["darkBlue","darkBlue","black","numberGreen"]},i={th:[].concat(Object(E.a)(n[0].slice(0,2)),Object(E.a)(n[0].slice(3))),tbody:n.slice(1).map((function(e){return[].concat(Object(E.a)(e.slice(0,2)),Object(E.a)(e.slice(3)))})),color:["darkBlue","darkBlue","black","numberGreen"]};return c.a.createElement(c.a.Fragment,null,c.a.createElement(j,{nowData:t?i:r,isMobile:t}),c.a.createElement(R.a,{mb:"0"},a))}))},_=n(758),q=n(754),J=n(759),N=n(760),H=n(762),K=n(752),Q=n(755),U=n(252),V=n.n(U),X=n(173),Y=n(258),Z=n(257),$=function(e){var t=e.children,n=e.isMobile,a=Object(r.useRef)();return Object(r.useEffect)((function(){var e=a.current.querySelectorAll("svg");Array.prototype.forEach.call(e,(function(e){var t=Object(Z.b)(e.getAttribute("viewBox")),n=new X.a((function(n){var a=n[0].contentRect.width;e.style.width="".concat(a,"px"),e.style.height="".concat(a*t,"px")}));n.unobserve(a.current),n.observe(a.current)}))}),[n]),c.a.createElement("div",{ref:a},t)},ee=V()({},_.a.grayscale,{bar:{style:{data:{strokeWidth:2},labels:{fontWeight:700,fontSize:10,fontFamily:"inherit"}}},line:{style:{data:{strokeWidth:1,strokeDasharray:"10, 5"}}},axis:{style:{axisLabel:{fontFamily:"inherit"},tickLabels:{fontFamily:"inherit"},axis:{stroke:"transparent"}}}}),te=function(e){return e?22:24},ne=(D=function(e){var t=e.data,n=e.isMobile,a=e.max,r=e.colors,i=e.labelColors;return c.a.createElement(q.a,{theme:ee,domain:{y:[0,a+5]},width:n?600:1200,height:600,containerComponent:c.a.createElement(J.a,null),padding:{top:n?50:10,left:100,bottom:n?40:70,right:40}},c.a.createElement(N.a,{style:{grid:{fill:"transparent",stroke:o.b.colors.numberGreen,strokeWidth:1,strokeDasharray:"2, 5"}},dependentAxis:!0}),c.a.createElement(N.a,{style:{grid:{fill:"transparent",strokeWidth:0,strokeDasharray:"2, 5"},tickLabels:{fontSize:18,fontWeight:700}}}),c.a.createElement(H.a,{horizontal:!0,offset:te(n)+1,style:{data:{width:te(n)}}},t.map((function(e,t){return c.a.createElement(K.a,{data:e,style:{data:{fill:r[t],stroke:o.b.colors.titleBlue},labels:{fill:i[t],fontSize:18}},key:t})}))),c.a.createElement(Q.a,{x:n?510:1100,y:450,centerTitle:!0,orientation:"vertical",gutter:20,style:{labels:{fontSize:20,fontWeight:"bold"}},data:[{name:"\u57fa\u91d1",symbol:{fill:r[1],type:"square"}},{name:"\u6307\u6a19",symbol:{fill:r[0],type:"square"}}]}))},Y.a?function(e){return c.a.createElement($,{isMobile:e.isMobile},c.a.createElement(D,e))}:D),ae=/[^%]+/,re=function(e){var t=e.isMobile,n=e.dataPath;return c.a.createElement(L,{path:n},(function(e){if(!e.length)return null;var n=e.reduce((function(e,t){return e=Object(O.max)([e,+ae.exec(t.\u57fa\u91d1)[0],+ae.exec(t.\u6307\u6a19)[0]])}),0),a=Object(O.last)(e)[Object.keys(Object(O.last)(e))[0]],r=Object.keys(e[0]),i=e.slice(0,e.length-1).reverse().reduce((function(e,t){return e[0]?(e[1].push({x:t[r[0]],y:+ae.exec(t[r[1]])[0],label:t[r[1]]}),e[0].push({x:t[r[0]],y:+ae.exec(t[r[2]])[0],label:t[r[2]]}),e):(e[1]=[{x:t[r[0]],y:+ae.exec(t[r[1]])[0],label:t[r[1]]}],e[0]=[{x:t[r[0]],y:+ae.exec(t[r[2]])[0],label:t[r[2]]}],e)}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(ne,{isMobile:t,data:i,max:n,colors:[o.b.colors.lightGreen,o.b.colors.darkGreen],labelColors:[o.b.colors.numberGreen,o.b.colors.darkGreen]}),c.a.createElement(R.a,{mb:"0"},a))}))};function ce(){var e=Object(s.a)(["\n  border-bottom: none;\n  padding: 0;\n"]);return ce=function(){return e},e}function ie(){var e=Object(s.a)(["\n  width: ","%;\n  cursor: pointer;\n  font-size: 1.428em;\n  font-weight: bold;\n  padding: 1em 1em;\n  border-radius: 0;\n  display: inline-block;\n  text-align: center;\n  background-color: ",";\n  transition: all ","ms;\n  &:hover,\n  &.react-tabs__tab--selected {\n    background-color: ",";\n    color: white;\n    border-radius: 0;\n  }\n"]);return ie=function(){return e},e}function le(){var e=Object(s.a)(["\nposition: relative;\n"]);return le=function(){return e},e}var oe=Object(u.d)(b.d)(le()),se=Object(u.d)(b.a)(ie(),(function(e){return 100*e.width}),Object(m.a)("colors.gray"),Object(m.a)("duration",250),Object(m.a)("colors.darkGreen")),ue=Object(u.d)(b.b)(ce()),be=[{name:"\u6295\u8cc7\u7d44\u5408",data:[{title:"\u7522\u696d\u914d\u7f6e",Comp:function(e){return c.a.createElement(re,Object.assign({dataPath:"/industries"},e))}},{title:"\u5340\u57df\u914d\u7f6e",Comp:function(e){return c.a.createElement(re,Object.assign({dataPath:"/geographical"},e))}}]},{name:"\u57fa\u91d1\u7e3e\u6548",data:[{title:"\u57fa\u91d1\u7d2f\u7a4d\u7e3e\u6548",Comp:T}]}],me=function(e){var t=e.selectedIndex,n=e.onSelect,a=(e.secPt,e.sticky),i=Object(y.a)().isMobile,s=Object(r.useRef)();return c.a.createElement(oe,{selectedIndex:t,onSelect:n},c.a.createElement(l.a,{is:a||i?g:"div"},c.a.createElement(l.a,{mx:Object(o.c)(-10,0)},c.a.createElement(ue,null,be.map((function(e,t){var n=e.name;return c.a.createElement(se,{key:n,width:1/be.length,onClick:function(){var e,n=null===(e=window.__tabButtons)||void 0===e?void 0:e[t];n&&n.click()}},n)}))))),c.a.createElement("div",{ref:s},be.map((function(e,t){var n=e.data;return c.a.createElement(b.c,{key:t},n.map((function(e,t){var n=e.title,a=e.Comp;e.source;return c.a.createElement(l.a,{key:t},c.a.createElement(d.a.SubTitle,{color:"darkGreen",pt:Object(o.c)("2rem","3rem"),pb:"2rem"},n),c.a.createElement(a,{isMobile:i}))})))}))))};t.default=function(e){var t=e.onLoad,n=Object(r.useState)(0),s=Object(a.a)(n,2),u=s[0],b=s[1];return Object(r.useEffect)((function(){return t()}),[]),c.a.createElement(i.a,{pt:Object(o.c)("2.86em","7.143em")},c.a.createElement(l.a.Title,null,"\u57fa\u91d1\u8cc7\u6599"),c.a.createElement(me,{selectedIndex:u,onSelect:b}))}}}]);
//# sourceMappingURL=8.bdb268ba.chunk.js.map