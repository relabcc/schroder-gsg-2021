(this["webpackJsonpschroders-gci-2020"]=this["webpackJsonpschroders-gci-2020"]||[]).push([[7],{628:function(e,t,n){"use strict";var a=n(63),r=n(0),i=n.n(r),l=n(22);t.a=function(e){var t=e.children,n=Object(a.a)(e,["children"]);return i.a.createElement(l.a,Object.assign({pt:"0.5em",color:"lightGray",borderTop:"1px solid black",mt:"0.5em",textAlign:"justify"},n),t)}},629:function(e,t,n){"use strict";var a=n(31),r=n(23),i=n(6),l=n(70),o=n.n(l),c=n(65);function s(){var e=Object(a.a)(["\n  ","\n  ","\n  ","\n"]);return s=function(){return e},e}var u=Object(r.d)(o.a.img)(s(),i.k,i.h,i.i);u.defaultProps={blacklist:c.a,width:1},u.displayName="Image",t.a=u},656:function(e,t,n){e.exports=n.p+"static/media/lens.a7dd5d65.svg"},665:function(e,t,n){"use strict";var a=n(31),r=n(0),i=n.n(r),l=n(23),o=n(700),c=(n(653),n(184)),s=n(22),u=n(628),m=n(124),d=n(668),b=n(669),f=n.n(b),h=function(e){var t=e.children,n=e.useStickyClasses,a=e.verticalPosition,l=void 0===a?"top":a,o=e.scrollEl,c=e.stickyBitStickyOffset,u=e.noStyles,m=e.parentClass,b=e.stickyClass,h=e.stuckClass,y=e.useFixed,p=e.useGetBoundingClientRect,g=Object(r.useMemo)((function(){return"sticky-".concat(f()())}),[]);return Object(r.useEffect)((function(){return window[g]=Object(d.a)(".".concat(g),{useStickyClasses:n,verticalPosition:l,scrollEl:o,stickyBitStickyOffset:c,noStyles:u,parentClass:m,stickyClass:b,stuckClass:h,useFixed:y,useGetBoundingClientRect:p}),function(){window[g]&&(window[g].cleanup(),delete window[g])}}),[]),i.a.createElement(s.a,{className:g,zOrder:2,left:0,right:0},t)},y=n(15),p=n(175),g=(n(670),n(655),n(125)),x=n.n(g),E=n(95),k=n.n(E),O=n(123),v=n.n(O),j=n(63),w=n(629),C=n(656),S=n.n(C);function z(){var e=Object(a.a)(["\n  animation: "," 2s infinite;\n"]);return z=function(){return e},e}function A(){var e=Object(a.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return A=function(){return e},e}var G=Object(l.e)(A()),M=l.d.div(z(),G);function F(e){var t=e.text,n=Object(j.a)(e,["text"]);return i.a.createElement(s.a,n,i.a.createElement(M,null,i.a.createElement(w.a,{src:S.a})),i.a.createElement(m.a,{mt:"1em"},t))}F.defaultProps={text:"Loading...",width:"4.5em"};var B=function(e){var t=e.path,n=e.children,a=k()(t,null,[]),r=a.loading,l=a.error,o=a.data,c=void 0===o?[]:o;return l&&console.error(l),i.a.createElement(s.a,{position:"relative"},l&&"Error!",r&&i.a.createElement(s.a.fullAbs,{bg:"rgba(255,255,255,0.5)"},i.a.createElement(s.a.absCenter,null,i.a.createElement(F,{color:"prussianBlue"}))),v()(n)?n(c):n)},W=n(130),L=n(177),R=n(802),P=n(798),D=n(805),X=n(806),H=n(799),I=n(800),N=n(176),_=n.n(N),J=n(91),V=n.n(J);function Y(e,t,n){if(!t)return[e];var a=Array.from(e);n||a.reverse();var r=0,i=a.reduce((function(e,a){return e[r]=e[r]||"",e[r].length==t&&(e[r+=1]=""),n?e[r]+=a:e[r]=a+e[r],e}),[]);if(n||i.reverse(),n){var l=i.length;1===i[l-1].length&&(i[l-1]=i[l-2].substr(i[l-2].length-1)+i[l-1],i[l-2]=i[l-2].substr(0,i[l-2].length-1))}else 1===i[0].length&&(i[0]+=i[1][0],i[1]=i[1].substr(1));return i}var q=function(e){var t=e.x,n=e.y,a=e.dy,l=e.maxLength,o=e.lineHeight,c=e.lineBefore,s=e.fillFront,u=e.verticalCenter,m=e.maxLines,d=e.text,b=e.textAnchor,f=e.style,h=Object(r.useMemo)((function(){for(var e=l,t=Y(d,e,s),n=t.length;n>m;)n=(t=Y(d,e+=1,s)).length;return t}),[l,d,s,m]),y=h.length,p=h.map((function(e,t){return n+(u&&y>1?.5*f.fontSize*(c?1:-1):0)+o*f.fontSize*(c?t-y+1:t)})),g=h.map((function(e,n){return i.a.createElement("text",{key:n,x:t,y:p[n],dy:a,textAnchor:b,style:f},e)}));return i.a.createElement("g",null,g)};q.defaultProps={lineHeight:1.3,maxLines:3};var T=q,K=n(116),Q=n(186),U=n(185),Z=function(e){var t=e.children,n=e.isMobile,a=Object(r.useRef)();return Object(r.useEffect)((function(){var e=a.current.querySelectorAll("svg");Array.prototype.forEach.call(e,(function(e){var t=Object(U.b)(e.getAttribute("viewBox")),n=new K.a((function(n){var a=n[0].contentRect.width;e.style.width="".concat(a,"px"),e.style.height="".concat(a*t,"px")}));n.unobserve(a.current),n.observe(a.current)}))}),[n]),i.a.createElement("div",{ref:a},t)},$=function(e){return Q.a?function(t){return i.a.createElement(Z,{isMobile:t.isMobile},i.a.createElement(e,t))}:e},ee=_()({},R.a.grayscale,{bar:{style:{data:{fill:y.b.colors.lime,stroke:y.b.colors.lime,strokeWidth:2},labels:{fontWeight:700,fontFamily:"inherit"}}},line:{style:{data:{stroke:y.b.colors.lightGray,strokeWidth:1,strokeDasharray:"10, 5"}}},axis:{style:{axisLabel:{fontFamily:"inherit"},tickLabels:{fontFamily:"inherit"}}}}),te=function(e){var t=e.children,n=e.x,a=e.y,r=e.style;return i.a.createElement("text",{x:n,y:a,style:r},t)},ne=($((function(e){var t=e.data,n=e.isMobile,a=e.fill,l=void 0===a?"lime":a,o=Object(r.useMemo)((function(){if(!t)return[];var e=t.reduce((function(e,t,n){return[].concat(Object(L.a)(e),[Object(W.a)(Object(W.a)({},t),{},{y0:n&&e[n-1].y0+e[n-1].p,y:n?e[n-1].y+t.p:t.p})])}),[]);return n?Object(L.a)(e).reverse():e}),[t,n]);return i.a.createElement(P.a,{theme:ee,domain:{y:[0,100]},domainPadding:30,horizontal:n,width:n?400:800,height:n?650:350,containerComponent:i.a.createElement(D.a,null),padding:{top:n?50:10,left:n?70:50,bottom:n?0:70,right:50}},i.a.createElement(X.a,{dependentAxis:!0,tickValues:V()(n?25:0,101,25),style:{grid:{stroke:y.b.colors.lightGray},axis:{stroke:"none"}},orientation:n&&"top",offsetY:50}),o.map((function(e,t){return t?i.a.createElement(H.a,{key:t,labelComponent:i.a.createElement("g",null),data:[n?e:o[t-1],_()({},n?o[t-1]:e,{y:n?e.y:o[t-1].y})]}):null})),i.a.createElement(I.a,{barRatio:.5,data:o,style:{data:{fill:function(e){return e.datum.p<0?y.b.colors.mandy:x()(y.b.colors,l,l)},stroke:function(e){return e.datum.p<0?y.b.colors.mandy:x()(y.b.colors,l,l)}}}}),i.a.createElement(X.a,{style:{tickLabels:{fill:y.b.colors.prussianBlue,fontWeight:900}},tickLabelComponent:i.a.createElement(T,{maxLength:4,dy:n?4:12,verticalCenter:n,fillFront:!0})}),i.a.createElement(te,{x:n?70:20,y:n?36:12},"(%)"))})),n(90)),ae=n(804),re=n(808),ie=n(695),le=n(701),oe=n(694),ce=n(697),se=n(699),ue=n(282),me=function(e){var t=e.x,n=e.y,a=e.style,r=void 0===a?{}:a,l=e.textAnchor,o=e.datum;return i.a.createElement("g",null,i.a.createElement("text",{x:t,y:n,style:Object(W.a)(Object(W.a)({},r),{},{fontSize:10}),textAnchor:l,dy:"-0.5em"},o.x),i.a.createElement("text",{x:t,y:n,style:Object(W.a)(Object(W.a)({},r),{},{fontSize:12,fill:y.b.colors.primary}),textAnchor:l,dy:"0.875em"},o.y))},de=_()({},R.a.grayscale,{line:{style:{data:{stroke:y.b.colors.bgGreen,strokeWidth:2}}},axis:{style:{axisLabel:{fontFamily:"inherit"},tickLabels:{fontFamily:"inherit"}}}}),be=Object(oe.a)(new Date),fe=[{label:"3\u500b\u6708",start:Object(ie.a)(be,3)},{label:"6\u500b\u6708",start:Object(ie.a)(be,6)},{label:"1\u5e74",start:Object(le.a)(be,1)},{label:"2\u5e74",start:Object(le.a)(be,2)},{label:"3\u5e74",start:Object(le.a)(be,3)},{label:"\u6210\u7acb\u81f3\u4eca"}],he=function(e){return Object(se.a)(new Date(e),"yyyy|MM/dd").replace("|","\n")},ye=($((function(e){var t=e.data,n=e.isMobile,a=Object(r.useState)(0),l=Object(ne.a)(a,2),o=l[0],c=l[1],u=Object(r.useMemo)((function(){var e=fe[o].start;return e?t.filter((function(t){return Object(ce.a)(new Date(t.x),e)})):t}),[o,t]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{overflowX:"auto",width:1,whiteSpace:"nowrap"},fe.map((function(e,t){return i.a.createElement(ue.a.darkGreen,{key:e.label,onClick:function(){return c(t)},active:t===o,borderRadius:"none",fontSize:Object(y.c)("1em","1.125em")},e.label)}))),i.a.createElement(P.a,{width:n?400:800,height:n?250:350,scale:{x:"time"},theme:de,domainPadding:12,containerComponent:i.a.createElement(ae.a,null),padding:{top:50,left:50,bottom:50,right:n?20:50}},i.a.createElement(X.a,{tickCount:n?6:8,tickFormat:he,style:{tickLabels:{fill:y.b.colors.primary,fontWeight:900}}}),i.a.createElement(X.a,{dependentAxis:!0,tickCount:5,style:{grid:{stroke:y.b.colors.lightGray},axis:{stroke:"none"}}}),i.a.createElement(H.a,{data:u,labels:"x",labelComponent:i.a.createElement(re.a,{cornerRadius:0,flyoutWidth:70,flyoutHeight:35,flyoutStyle:{fill:"white",stroke:y.b.colors.primary,strokeWidth:1},dy:0,labelComponent:i.a.createElement(me,null)})})))})),n(641)),pe=function(e){var t=e.nowData,n=e.thAlign,a=e.tbodyAlign,l=e.fontSize,o=void 0===l?"1.143em":l,c=e.bg,u=void 0===c?"darkGreen":c,m=e.noMobile,d=(Object(r.useCallback)((function(e){return e%2?"lightGray":"white"}),[]),Object(r.useCallback)((function(e,t){return m?t:Object(y.c)(e,t)}),[m]));return i.a.createElement(s.a,{is:"table",fontSize:o},i.a.createElement(s.a,{is:"thead"},i.a.createElement(s.a,{is:"tr"},t.th.map((function(e,t,a){var r=a.length;return i.a.createElement(s.a,{is:"th",color:d(t?t==r-1?"textGreen":"black":"white","white"),bg:d(t?"white":u,u),px:"0.5em",py:"1em",textAlign:d("center",n||(t?"right":"left")),whiteSpace:"pre-wrap",fontWeight:"bold",key:t},e)})))),t.tbody.map((function(e,n){return i.a.createElement(s.a,{is:"tbody",key:n},i.a.createElement(s.a,{is:"tr"},e.map((function(r,l){return i.a.createElement(s.a,{whiteSpace:"pre-wrap",is:"td",px:"0.5em",py:"1em",fontWeight:"bold",bg:d(l?"white":u,"white"),color:d(l?l==e.length-1?"textGreen":"black":"white",t.color[n]),borderBottom:Object(y.c)("none","1px solid black"),textAlign:d("center",a||(l?"right":"left")),key:l},r)}))))})))},ge=["\u7d2f\u7a4d\u5831\u916c, \u7f8e\u5143\u5831\u916c (%)","\u4eca\u5e74\u4ee5\u4f86","\u4e09\u500b\u6708","\u516d\u500b\u6708","\u4e00\u5e74","\u4e8c\u5e74","\u4e09\u5e74","\u4e94\u5e74","\u6a19\u6e96\u5dee"],xe=function(e){var t=e.isMobile;return i.a.createElement(B,{path:"/performance"},(function(e){if(!e.length)return null;var n=ge.map((function(t){return[t,e[0][t],e[1][t],e[2][t],e[3][t]]})),a=x()(e,[4,ge[0]]),r={th:Object(L.a)(n.map((function(e){return e[0]}))),tbody:Object(ye.range)(n[0].length-1).map((function(e){return Object(L.a)(n.map((function(t){return t[e+1]})))})),color:["darkBlue","darkBlue","black","textGreen"]},l={th:[].concat(Object(L.a)(n[0].slice(0,2)),Object(L.a)(n[0].slice(3))),tbody:n.slice(1).map((function(e){return[].concat(Object(L.a)(e.slice(0,2)),Object(L.a)(e.slice(3)))})),color:["darkBlue","darkBlue","black","textGreen"]};return i.a.createElement(i.a.Fragment,null,i.a.createElement(pe,{nowData:t?l:r,isMobile:t}),i.a.createElement(u.a,null,a))}))},Ee=n(809),ke=_()({},R.a.grayscale,{bar:{style:{data:{strokeWidth:2},labels:{fontWeight:700,fontSize:10,fontFamily:"inherit"}}},line:{style:{data:{strokeWidth:1,strokeDasharray:"10, 5"}}},axis:{style:{axisLabel:{fontFamily:"inherit"},tickLabels:{fontFamily:"inherit"},axis:{stroke:"transparent"}}}}),Oe=function(e){return e?22:14},ve=$((function(e){var t=e.data,n=e.isMobile,a=e.max,r=e.colors;return i.a.createElement(P.a,{theme:ke,domain:{y:[0,a+10]},width:n?600:1e3,height:n?600:500,containerComponent:i.a.createElement(D.a,null),padding:{top:n?50:10,left:100,bottom:n?40:70,right:40}},i.a.createElement(Ee.a,{horizontal:!0,offset:Oe(n)+1,style:{data:{width:Oe(n)}}},t.map((function(e,t){return i.a.createElement(I.a,{data:e,style:{data:{fill:r[t],stroke:y.b.colors.darkGreen},labels:{fill:r[t],fontSize:n?18:12}},key:t})}))),i.a.createElement(X.a,{style:{grid:{fill:"transparent",stroke:y.b.colors.textGreen,strokeWidth:1,strokeDasharray:"2, 5"}},dependentAxis:!0}),i.a.createElement(X.a,{style:{grid:{fill:"transparent",strokeWidth:0,strokeDasharray:"2, 5"},tickLabels:{fontSize:n?18:14,mb:2}}}))})),je=/[^%]+/,we=function(e){var t=e.isMobile,n=(e.index,e.dataPath);e.fill;return i.a.createElement(B,{path:n},(function(e){if(!e.length)return null;var n=e.reduce((function(e,t){return e=Object(ye.max)([e,+je.exec(t.\u57fa\u91d1)[0],+je.exec(t.\u6307\u6a19)[0]])}),0),a=Object(ye.last)(e)[Object.keys(Object(ye.last)(e))[0]],r=Object.keys(e[0]),l=e.slice(0,e.length-1).reverse().reduce((function(e,t){return e[0]?(e[1].push({x:t[r[0]],y:+je.exec(t[r[1]])[0],label:t[r[1]]}),e[0].push({x:t[r[0]],y:+je.exec(t[r[2]])[0],label:t[r[2]]}),e):(e[1]=[{x:t[r[0]],y:+je.exec(t[r[1]])[0],label:t[r[1]]}],e[0]=[{x:t[r[0]],y:+je.exec(t[r[2]])[0],label:t[r[2]]}],e)}),[]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(ve,{isMobile:t,data:l,max:n,colors:[y.b.colors.textGreen,y.b.colors.darkGreen]}),i.a.createElement(u.a,null,a))}))};function Ce(){var e=Object(a.a)(["\n  border-bottom: none;\n  padding: 0;\n"]);return Ce=function(){return e},e}function Se(){var e=Object(a.a)(["\n  width: ","%;\n  cursor: pointer;\n  font-size: 1.428em;\n  font-weight: bold;\n  padding: 1em 1em;\n  border-radius: 0;\n  display: inline-block;\n  text-align: center;\n  background-color: ",";\n  transition: all ","ms;\n  &:hover,\n  &.react-tabs__tab--selected {\n    background-color: ",";\n    color: white;\n    border-radius: 0;\n  }\n"]);return Se=function(){return e},e}function ze(){var e=Object(a.a)(["\nposition: relative;\n"]);return ze=function(){return e},e}var Ae=Object(l.d)(o.d)(ze()),Ge=Object(l.d)(o.a)(Se(),(function(e){return 100*e.width}),Object(c.a)("colors.gray"),Object(c.a)("duration",250),Object(c.a)("colors.darkGreen")),Me=Object(l.d)(o.b)(Ce()),Fe=[{name:"\u6295\u8cc7\u7d44\u5408",data:[{title:"\u7522\u696d\u914d\u7f6e",Comp:function(e){return i.a.createElement(we,Object.assign({dataPath:"/industries"},e))}},{title:"\u5340\u57df\u914d\u7f6e",Comp:function(e){return i.a.createElement(we,Object.assign({dataPath:"/geographical"},e))}}]},{name:"\u57fa\u91d1\u7e3e\u6548",data:[{title:"\u57fa\u91d1\u7d2f\u7a4d\u7e3e\u6548",Comp:xe}]}];t.a=function(e){var t=e.selectedIndex,n=e.onSelect,a=(e.secPt,e.sticky),l=Object(p.a)().isMobile,c=Object(r.useRef)();return i.a.createElement(Ae,{selectedIndex:t,onSelect:function(e){n(e),l&&window.scrollBy({top:c.current.getBoundingClientRect().top-40})}},i.a.createElement(s.a,{is:a||l?h:"div"},i.a.createElement(s.a,{mx:Object(y.c)(-10,0)},i.a.createElement(Me,null,Fe.map((function(e){var t=e.name;return i.a.createElement(Ge,{key:t,width:1/Fe.length,"data-name":t,className:"data-tabs"},t)}))))),i.a.createElement("div",{ref:c},Fe.map((function(e,t){var n=e.data;return i.a.createElement(o.c,{key:t},n.map((function(e,t){var n=e.title,a=e.Comp,r=e.source;return i.a.createElement(s.a,{key:t},i.a.createElement(m.a,{fontWeight:"bold",fontSize:Object(y.c)("1.285em","1.57em"),pt:Object(y.c)("2rem","3rem"),pb:"2rem"},n),i.a.createElement(a,{isMobile:l}),r&&i.a.createElement(u.a,null,r))})))}))))}},788:function(e,t,n){"use strict";n.r(t);var a=n(90),r=n(0),i=n.n(r),l=n(801),o=n(780),c=n(22),s=n(282),u=n(15),m=n(175),d=n(665),b=Object(u.c)("100vw","75vw"),f=function(e){return{entering:{opacity:e},entered:{opacity:e,pointerEvents:"auto"},exiting:{opacity:0},exited:{opacity:0}}},h={entering:{transform:"translateX(-100%)"},entered:{transform:"translateX(-100%)"},exiting:{transform:"translateX(0)"},exited:{transform:"translateX(0)"}},y=[{title:"\u6295\u8cc7\u7d44\u5408"},{title:"\u57fa\u91d1\u7e3e\u6548"},{title:"\u914d\u606f\u7d00\u9304"}];t.default=function(){var e=Object(r.useState)(),t=Object(a.a)(e,2),n=t[0],u=t[1],p=Object(r.useState)(0),g=Object(a.a)(p,2),x=g[0],E=g[1],k=Object(m.a)().getCurrentValue;return i.a.createElement(l.a,{in:n,timeout:500},(function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,Object.assign({position:"fixed",top:"0",left:"0",right:"0",bottom:"0",bg:"black",transition:"opacity ".concat(500,"ms"),zOrder:5,pointerEvents:"none"},f(.7)[e],{onClick:function(){return u(!1)}})),i.a.createElement(c.a,{position:"fixed",top:"60%",transform:"translate(0, -50%)",transition:"transform ".concat(500,"ms"),right:"0",width:"2.5em",zOrder:5,bg:"primary",color:"white"},y.map((function(e,t){return i.a.createElement(s.a,{key:t,className:"side-btn","data-name":"side_".concat(e.title),textAlign:"center",px:"0.5em",py:"1em",onClick:function(){u(t!==x||!n),E(t)},border:"1px solid",borderColor:"white",borderRadius:"0",lineHeight:"1.375"},e.title)}))),i.a.createElement(c.a,Object.assign({position:"fixed",top:"2em",right:"0",transition:"transform ".concat(500,"ms, opacity ").concat(500,"ms"),zOrder:5,pointerEvents:"none",borderRight:"4px solid",borderRightColor:"ceruleanBlue"},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-50%";return{entering:{transform:"translate(-".concat(e,", ").concat(t,")")},entered:{transform:"translate(-".concat(e,", ").concat(t,")")},exiting:{transform:"translate(0, ".concat(t,")")},exited:{transform:"translate(0, ".concat(t,")")}}}(k(b),0)[e],f(1)[e]),i.a.createElement(s.a.white,{px:"0.5em",py:"0.25em",borderRadius:0,onClick:function(){return u(!1)},fontSize:"1.5em"},i.a.createElement(o.a,null))),i.a.createElement(c.a,Object.assign({width:b,position:"fixed",top:"0",bottom:"0",left:"100%",transition:"transform ".concat(500,"ms"),bg:"white",zOrder:5,overflowY:"auto"},h[e]),i.a.createElement(c.a,{mx:"1.5em",my:"2em"},i.a.createElement(d.a,{selectedIndex:x,onSelect:E,secPt:"2rem",sticky:!0}))))}))}}}]);
//# sourceMappingURL=7.f3b038dd.chunk.js.map