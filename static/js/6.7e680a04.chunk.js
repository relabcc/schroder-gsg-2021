(this["webpackJsonpschroders-gci-2020"]=this["webpackJsonpschroders-gci-2020"]||[]).push([[6],{628:function(e,t,a){"use strict";var n=a(63),r=a(0),l=a.n(r),c=a(22);t.a=function(e){var t=e.children,a=Object(n.a)(e,["children"]);return l.a.createElement(c.a,Object.assign({pt:"0.5em",color:"lightGray",borderTop:"1px solid black",mt:"0.5em",textAlign:"justify"},a),t)}},629:function(e,t,a){"use strict";var n=a(31),r=a(23),l=a(6),c=a(70),i=a.n(c),o=a(65);function s(){var e=Object(n.a)(["\n  ","\n  ","\n  ","\n"]);return s=function(){return e},e}var u=Object(r.d)(i.a.img)(s(),l.k,l.h,l.i);u.defaultProps={blacklist:o.a,width:1},u.displayName="Image",t.a=u},652:function(e,t,a){"use strict";var n=a(31),r=a(6),l=a(23),c=a(22),i=a(65);function o(){var e=Object(n.a)(["\n  ","\n"]);return o=function(){return e},e}var s=Object(l.d)(c.a)(o(),r.g);s.defaultProps={display:"flex",blacklist:i.a},s.displayName="Flex",t.a=s},656:function(e,t,a){e.exports=a.p+"static/media/lens.a7dd5d65.svg"},663:function(e,t,a){"use strict";var n=a(63),r=a(0),l=a.n(r),c=a(174),i=a(22),o=a(652),s=a(629),u=a(124),m=a(15);t.a=function(e){var t=e.src,a=e.step,r=e.title,b=Object(n.a)(e,["src","step","title"]);return l.a.createElement(i.a,Object.assign({bg:"gray",py:Object(m.c)("2.85em","4.43em")},b),l.a.createElement(c.a,null,l.a.createElement(o.a,{alignItems:"center"},t&&l.a.createElement(i.a,{width:Object(m.c)("5.715em","10%")},l.a.createElement(s.a,{src:t})),l.a.createElement(i.a,{fontWeight:"bold",ml:Object(m.c)("0.86em","1.86em")},a&&l.a.createElement(u.a,{fontSize:Object(m.c)("1.428em","1.86em"),color:"darkBlue"},"\u7279\u8272",a),l.a.createElement(u.a,{color:"darkGreen",fontSize:Object(m.c)("1.85em","2.86em")},r)))))}},665:function(e,t,a){"use strict";var n=a(31),r=a(0),l=a.n(r),c=a(23),i=a(700),o=(a(653),a(184)),s=a(22),u=a(628),m=a(124),b=a(668),d=a(669),f=a.n(d),h=function(e){var t=e.children,a=e.useStickyClasses,n=e.verticalPosition,c=void 0===n?"top":n,i=e.scrollEl,o=e.stickyBitStickyOffset,u=e.noStyles,m=e.parentClass,d=e.stickyClass,h=e.stuckClass,y=e.useFixed,p=e.useGetBoundingClientRect,g=Object(r.useMemo)((function(){return"sticky-".concat(f()())}),[]);return Object(r.useEffect)((function(){return window[g]=Object(b.a)(".".concat(g),{useStickyClasses:a,verticalPosition:c,scrollEl:i,stickyBitStickyOffset:o,noStyles:u,parentClass:m,stickyClass:d,stuckClass:h,useFixed:y,useGetBoundingClientRect:p}),function(){window[g]&&(window[g].cleanup(),delete window[g])}}),[]),l.a.createElement(s.a,{className:g,zOrder:2,left:0,right:0},t)},y=a(15),p=a(175),g=(a(670),a(655),a(125)),E=a.n(g),k=a(95),O=a.n(k),j=a(123),x=a.n(j),v=a(63),w=a(629),C=a(656),S=a.n(C);function G(){var e=Object(n.a)(["\n  animation: "," 2s infinite;\n"]);return G=function(){return e},e}function M(){var e=Object(n.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return M=function(){return e},e}var A=Object(c.e)(M()),F=c.d.div(G(),A);function z(e){var t=e.text,a=Object(v.a)(e,["text"]);return l.a.createElement(s.a,a,l.a.createElement(F,null,l.a.createElement(w.a,{src:S.a})),l.a.createElement(m.a,{mt:"1em"},t))}z.defaultProps={text:"Loading...",width:"4.5em"};var W=function(e){var t=e.path,a=e.children,n=O()(t,null,[]),r=n.loading,c=n.error,i=n.data,o=void 0===i?[]:i;return c&&console.error(c),l.a.createElement(s.a,{position:"relative"},c&&"Error!",r&&l.a.createElement(s.a.fullAbs,{bg:"rgba(255,255,255,0.5)"},l.a.createElement(s.a.absCenter,null,l.a.createElement(z,{color:"prussianBlue"}))),x()(a)?a(o):a)},B=a(130),L=a(177),P=a(802),D=a(798),R=a(805),I=a(806),N=a(799),H=a(800),J=a(176),_=a.n(J),q=a(91),T=a.n(q);function V(e,t,a){if(!t)return[e];var n=Array.from(e);a||n.reverse();var r=0,l=n.reduce((function(e,n){return e[r]=e[r]||"",e[r].length==t&&(e[r+=1]=""),a?e[r]+=n:e[r]=n+e[r],e}),[]);if(a||l.reverse(),a){var c=l.length;1===l[c-1].length&&(l[c-1]=l[c-2].substr(l[c-2].length-1)+l[c-1],l[c-2]=l[c-2].substr(0,l[c-2].length-1))}else 1===l[0].length&&(l[0]+=l[1][0],l[1]=l[1].substr(1));return l}var X=function(e){var t=e.x,a=e.y,n=e.dy,c=e.maxLength,i=e.lineHeight,o=e.lineBefore,s=e.fillFront,u=e.verticalCenter,m=e.maxLines,b=e.text,d=e.textAnchor,f=e.style,h=Object(r.useMemo)((function(){for(var e=c,t=V(b,e,s),a=t.length;a>m;)a=(t=V(b,e+=1,s)).length;return t}),[c,b,s,m]),y=h.length,p=h.map((function(e,t){return a+(u&&y>1?.5*f.fontSize*(o?1:-1):0)+i*f.fontSize*(o?t-y+1:t)})),g=h.map((function(e,a){return l.a.createElement("text",{key:a,x:t,y:p[a],dy:n,textAnchor:d,style:f},e)}));return l.a.createElement("g",null,g)};X.defaultProps={lineHeight:1.3,maxLines:3};var Y=X,K=a(116),Q=a(186),U=a(185),Z=function(e){var t=e.children,a=e.isMobile,n=Object(r.useRef)();return Object(r.useEffect)((function(){var e=n.current.querySelectorAll("svg");Array.prototype.forEach.call(e,(function(e){var t=Object(U.b)(e.getAttribute("viewBox")),a=new K.a((function(a){var n=a[0].contentRect.width;e.style.width="".concat(n,"px"),e.style.height="".concat(n*t,"px")}));a.unobserve(n.current),a.observe(n.current)}))}),[a]),l.a.createElement("div",{ref:n},t)},$=function(e){return Q.a?function(t){return l.a.createElement(Z,{isMobile:t.isMobile},l.a.createElement(e,t))}:e},ee=_()({},P.a.grayscale,{bar:{style:{data:{fill:y.b.colors.lime,stroke:y.b.colors.lime,strokeWidth:2},labels:{fontWeight:700,fontFamily:"inherit"}}},line:{style:{data:{stroke:y.b.colors.lightGray,strokeWidth:1,strokeDasharray:"10, 5"}}},axis:{style:{axisLabel:{fontFamily:"inherit"},tickLabels:{fontFamily:"inherit"}}}}),te=function(e){var t=e.children,a=e.x,n=e.y,r=e.style;return l.a.createElement("text",{x:a,y:n,style:r},t)},ae=($((function(e){var t=e.data,a=e.isMobile,n=e.fill,c=void 0===n?"lime":n,i=Object(r.useMemo)((function(){if(!t)return[];var e=t.reduce((function(e,t,a){return[].concat(Object(L.a)(e),[Object(B.a)(Object(B.a)({},t),{},{y0:a&&e[a-1].y0+e[a-1].p,y:a?e[a-1].y+t.p:t.p})])}),[]);return a?Object(L.a)(e).reverse():e}),[t,a]);return l.a.createElement(D.a,{theme:ee,domain:{y:[0,100]},domainPadding:30,horizontal:a,width:a?400:800,height:a?650:350,containerComponent:l.a.createElement(R.a,null),padding:{top:a?50:10,left:a?70:50,bottom:a?0:70,right:50}},l.a.createElement(I.a,{dependentAxis:!0,tickValues:T()(a?25:0,101,25),style:{grid:{stroke:y.b.colors.lightGray},axis:{stroke:"none"}},orientation:a&&"top",offsetY:50}),i.map((function(e,t){return t?l.a.createElement(N.a,{key:t,labelComponent:l.a.createElement("g",null),data:[a?e:i[t-1],_()({},a?i[t-1]:e,{y:a?e.y:i[t-1].y})]}):null})),l.a.createElement(H.a,{barRatio:.5,data:i,style:{data:{fill:function(e){return e.datum.p<0?y.b.colors.mandy:E()(y.b.colors,c,c)},stroke:function(e){return e.datum.p<0?y.b.colors.mandy:E()(y.b.colors,c,c)}}}}),l.a.createElement(I.a,{style:{tickLabels:{fill:y.b.colors.prussianBlue,fontWeight:900}},tickLabelComponent:l.a.createElement(Y,{maxLength:4,dy:a?4:12,verticalCenter:a,fillFront:!0})}),l.a.createElement(te,{x:a?70:20,y:a?36:12},"(%)"))})),a(90)),ne=a(804),re=a(808),le=a(695),ce=a(701),ie=a(694),oe=a(697),se=a(699),ue=a(282),me=function(e){var t=e.x,a=e.y,n=e.style,r=void 0===n?{}:n,c=e.textAnchor,i=e.datum;return l.a.createElement("g",null,l.a.createElement("text",{x:t,y:a,style:Object(B.a)(Object(B.a)({},r),{},{fontSize:10}),textAnchor:c,dy:"-0.5em"},i.x),l.a.createElement("text",{x:t,y:a,style:Object(B.a)(Object(B.a)({},r),{},{fontSize:12,fill:y.b.colors.primary}),textAnchor:c,dy:"0.875em"},i.y))},be=_()({},P.a.grayscale,{line:{style:{data:{stroke:y.b.colors.bgGreen,strokeWidth:2}}},axis:{style:{axisLabel:{fontFamily:"inherit"},tickLabels:{fontFamily:"inherit"}}}}),de=Object(ie.a)(new Date),fe=[{label:"3\u500b\u6708",start:Object(le.a)(de,3)},{label:"6\u500b\u6708",start:Object(le.a)(de,6)},{label:"1\u5e74",start:Object(ce.a)(de,1)},{label:"2\u5e74",start:Object(ce.a)(de,2)},{label:"3\u5e74",start:Object(ce.a)(de,3)},{label:"\u6210\u7acb\u81f3\u4eca"}],he=function(e){return Object(se.a)(new Date(e),"yyyy|MM/dd").replace("|","\n")},ye=($((function(e){var t=e.data,a=e.isMobile,n=Object(r.useState)(0),c=Object(ae.a)(n,2),i=c[0],o=c[1],u=Object(r.useMemo)((function(){var e=fe[i].start;return e?t.filter((function(t){return Object(oe.a)(new Date(t.x),e)})):t}),[i,t]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{overflowX:"auto",width:1,whiteSpace:"nowrap"},fe.map((function(e,t){return l.a.createElement(ue.a.darkGreen,{key:e.label,onClick:function(){return o(t)},active:t===i,borderRadius:"none",fontSize:Object(y.c)("1em","1.125em")},e.label)}))),l.a.createElement(D.a,{width:a?400:800,height:a?250:350,scale:{x:"time"},theme:be,domainPadding:12,containerComponent:l.a.createElement(ne.a,null),padding:{top:50,left:50,bottom:50,right:a?20:50}},l.a.createElement(I.a,{tickCount:a?6:8,tickFormat:he,style:{tickLabels:{fill:y.b.colors.primary,fontWeight:900}}}),l.a.createElement(I.a,{dependentAxis:!0,tickCount:5,style:{grid:{stroke:y.b.colors.lightGray},axis:{stroke:"none"}}}),l.a.createElement(N.a,{data:u,labels:"x",labelComponent:l.a.createElement(re.a,{cornerRadius:0,flyoutWidth:70,flyoutHeight:35,flyoutStyle:{fill:"white",stroke:y.b.colors.primary,strokeWidth:1},dy:0,labelComponent:l.a.createElement(me,null)})})))})),a(641)),pe=function(e){var t=e.nowData,a=e.thAlign,n=e.tbodyAlign,c=e.fontSize,i=void 0===c?"1.143em":c,o=e.bg,u=void 0===o?"darkGreen":o,m=e.noMobile,b=(Object(r.useCallback)((function(e){return e%2?"lightGray":"white"}),[]),Object(r.useCallback)((function(e,t){return m?t:Object(y.c)(e,t)}),[m]));return l.a.createElement(s.a,{is:"table",fontSize:i},l.a.createElement(s.a,{is:"thead"},l.a.createElement(s.a,{is:"tr"},t.th.map((function(e,t,n){var r=n.length;return l.a.createElement(s.a,{is:"th",color:b(t?t==r-1?"textGreen":"black":"white","white"),bg:b(t?"white":u,u),px:"0.5em",py:"1em",textAlign:b("center",a||(t?"right":"left")),whiteSpace:"pre-wrap",fontWeight:"bold",key:t},e)})))),t.tbody.map((function(e,a){return l.a.createElement(s.a,{is:"tbody",key:a},l.a.createElement(s.a,{is:"tr"},e.map((function(r,c){return l.a.createElement(s.a,{whiteSpace:"pre-wrap",is:"td",px:"0.5em",py:"1em",fontWeight:"bold",bg:b(c?"white":u,"white"),color:b(c?c==e.length-1?"textGreen":"black":"white",t.color[a]),borderBottom:Object(y.c)("none","1px solid black"),textAlign:b("center",n||(c?"right":"left")),key:c},r)}))))})))},ge=["\u7d2f\u7a4d\u5831\u916c, \u7f8e\u5143\u5831\u916c (%)","\u4eca\u5e74\u4ee5\u4f86","\u4e09\u500b\u6708","\u516d\u500b\u6708","\u4e00\u5e74","\u4e8c\u5e74","\u4e09\u5e74","\u4e94\u5e74","\u6a19\u6e96\u5dee"],Ee=function(e){var t=e.isMobile;return l.a.createElement(W,{path:"/performance"},(function(e){if(!e.length)return null;var a=ge.map((function(t){return[t,e[0][t],e[1][t],e[2][t],e[3][t]]})),n=E()(e,[4,ge[0]]),r={th:Object(L.a)(a.map((function(e){return e[0]}))),tbody:Object(ye.range)(a[0].length-1).map((function(e){return Object(L.a)(a.map((function(t){return t[e+1]})))})),color:["darkBlue","darkBlue","black","textGreen"]},c={th:[].concat(Object(L.a)(a[0].slice(0,2)),Object(L.a)(a[0].slice(3))),tbody:a.slice(1).map((function(e){return[].concat(Object(L.a)(e.slice(0,2)),Object(L.a)(e.slice(3)))})),color:["darkBlue","darkBlue","black","textGreen"]};return l.a.createElement(l.a.Fragment,null,l.a.createElement(pe,{nowData:t?c:r,isMobile:t}),l.a.createElement(u.a,null,n))}))},ke=a(809),Oe=_()({},P.a.grayscale,{bar:{style:{data:{strokeWidth:2},labels:{fontWeight:700,fontSize:10,fontFamily:"inherit"}}},line:{style:{data:{strokeWidth:1,strokeDasharray:"10, 5"}}},axis:{style:{axisLabel:{fontFamily:"inherit"},tickLabels:{fontFamily:"inherit"},axis:{stroke:"transparent"}}}}),je=function(e){return e?22:14},xe=$((function(e){var t=e.data,a=e.isMobile,n=e.max,r=e.colors;return l.a.createElement(D.a,{theme:Oe,domain:{y:[0,n+10]},width:a?600:1e3,height:a?600:500,containerComponent:l.a.createElement(R.a,null),padding:{top:a?50:10,left:100,bottom:a?40:70,right:40}},l.a.createElement(ke.a,{horizontal:!0,offset:je(a)+1,style:{data:{width:je(a)}}},t.map((function(e,t){return l.a.createElement(H.a,{data:e,style:{data:{fill:r[t],stroke:y.b.colors.darkGreen},labels:{fill:r[t],fontSize:a?18:12}},key:t})}))),l.a.createElement(I.a,{style:{grid:{fill:"transparent",stroke:y.b.colors.textGreen,strokeWidth:1,strokeDasharray:"2, 5"}},dependentAxis:!0}),l.a.createElement(I.a,{style:{grid:{fill:"transparent",strokeWidth:0,strokeDasharray:"2, 5"},tickLabels:{fontSize:a?18:14,mb:2}}}))})),ve=/[^%]+/,we=function(e){var t=e.isMobile,a=(e.index,e.dataPath);e.fill;return l.a.createElement(W,{path:a},(function(e){if(!e.length)return null;var a=e.reduce((function(e,t){return e=Object(ye.max)([e,+ve.exec(t.\u57fa\u91d1)[0],+ve.exec(t.\u6307\u6a19)[0]])}),0),n=Object(ye.last)(e)[Object.keys(Object(ye.last)(e))[0]],r=Object.keys(e[0]),c=e.slice(0,e.length-1).reverse().reduce((function(e,t){return e[0]?(e[1].push({x:t[r[0]],y:+ve.exec(t[r[1]])[0],label:t[r[1]]}),e[0].push({x:t[r[0]],y:+ve.exec(t[r[2]])[0],label:t[r[2]]}),e):(e[1]=[{x:t[r[0]],y:+ve.exec(t[r[1]])[0],label:t[r[1]]}],e[0]=[{x:t[r[0]],y:+ve.exec(t[r[2]])[0],label:t[r[2]]}],e)}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(xe,{isMobile:t,data:c,max:a,colors:[y.b.colors.textGreen,y.b.colors.darkGreen]}),l.a.createElement(u.a,null,n))}))};function Ce(){var e=Object(n.a)(["\n  border-bottom: none;\n  padding: 0;\n"]);return Ce=function(){return e},e}function Se(){var e=Object(n.a)(["\n  width: ","%;\n  cursor: pointer;\n  font-size: 1.428em;\n  font-weight: bold;\n  padding: 1em 1em;\n  border-radius: 0;\n  display: inline-block;\n  text-align: center;\n  background-color: ",";\n  transition: all ","ms;\n  &:hover,\n  &.react-tabs__tab--selected {\n    background-color: ",";\n    color: white;\n    border-radius: 0;\n  }\n"]);return Se=function(){return e},e}function Ge(){var e=Object(n.a)(["\nposition: relative;\n"]);return Ge=function(){return e},e}var Me=Object(c.d)(i.d)(Ge()),Ae=Object(c.d)(i.a)(Se(),(function(e){return 100*e.width}),Object(o.a)("colors.gray"),Object(o.a)("duration",250),Object(o.a)("colors.darkGreen")),Fe=Object(c.d)(i.b)(Ce()),ze=[{name:"\u6295\u8cc7\u7d44\u5408",data:[{title:"\u7522\u696d\u914d\u7f6e",Comp:function(e){return l.a.createElement(we,Object.assign({dataPath:"/industries"},e))}},{title:"\u5340\u57df\u914d\u7f6e",Comp:function(e){return l.a.createElement(we,Object.assign({dataPath:"/geographical"},e))}}]},{name:"\u57fa\u91d1\u7e3e\u6548",data:[{title:"\u57fa\u91d1\u7d2f\u7a4d\u7e3e\u6548",Comp:Ee}]}];t.a=function(e){var t=e.selectedIndex,a=e.onSelect,n=(e.secPt,e.sticky),c=Object(p.a)().isMobile,o=Object(r.useRef)();return l.a.createElement(Me,{selectedIndex:t,onSelect:function(e){a(e),c&&window.scrollBy({top:o.current.getBoundingClientRect().top-40})}},l.a.createElement(s.a,{is:n||c?h:"div"},l.a.createElement(s.a,{mx:Object(y.c)(-10,0)},l.a.createElement(Fe,null,ze.map((function(e){var t=e.name;return l.a.createElement(Ae,{key:t,width:1/ze.length,"data-name":t,className:"data-tabs"},t)}))))),l.a.createElement("div",{ref:o},ze.map((function(e,t){var a=e.data;return l.a.createElement(i.c,{key:t},a.map((function(e,t){var a=e.title,n=e.Comp,r=e.source;return l.a.createElement(s.a,{key:t},l.a.createElement(m.a,{fontWeight:"bold",fontSize:Object(y.c)("1.285em","1.57em"),pt:Object(y.c)("2rem","3rem"),pb:"2rem"},a),l.a.createElement(n,{isMobile:c}),r&&l.a.createElement(u.a,null,r))})))}))))}},793:function(e,t,a){"use strict";a.r(t);var n=a(90),r=a(0),l=a.n(r),c=(a(653),a(174)),i=(a(124),a(663)),o=a(15),s=a(665);t.default=function(){var e=Object(r.useState)(0),t=Object(n.a)(e,2),a=t[0],u=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{title:"\u57fa\u91d1\u8cc7\u6599"}),l.a.createElement(c.a,{py:Object(o.c)("2.86em","7.143em")},l.a.createElement(s.a,{selectedIndex:a,onSelect:u})))}}}]);
//# sourceMappingURL=6.7e680a04.chunk.js.map