(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{W9MN:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return _}));var n=a("vJKn"),s=a.n(n),r=a("nKUr"),i=a("rg98"),o=(a("i8i4"),a("q1tI")),l=a("cpVT"),c=a("MX0m"),m=a.n(c),x=[".slice.jsx-1362915787{background-image:linear-gradient(var(--start),transparent 50%,white 50%), linear-gradient(calc(var(--end)),transparent 50%,var(--color) 50%);}",'.slice[style*="--over180"].jsx-1362915787{background-image:linear-gradient( var(--start), var(--color) 50%, transparent 50% ), linear-gradient(calc(var(--end)),white 50%,var(--color) 50%);}',".pie.jsx-1362915787,.slice.jsx-1362915787{display:block;border-radius:50%;background-color:white;cursor:pointer;}",".pie.jsx-1362915787{position:relative;width:180px;height:180px;aspect-ratio:1;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);margin:1rem;}",".slice.jsx-1362915787{position:absolute;width:100%;height:100%;mix-blend-mode:multiply;}",".slice.jsx-1362915787:after{content:var(--text);color:#fff;mix-blend-mode:difference;position:relative;left:var(--text-left,50%);top:var(--text-top,calc(50% - 0.5em));--have-left:var(--text-left,0);--have-top:var(--text-top,0);--not-manually-set-left:calc(1 - var(--have-left,0));--not-manually-set-top:calc(1 - var(--have-top,0));--no-manual-pos:calc( var(--not-manually-set-left,0) * var(--not-manually-set-top,0) );--mid:calc(var(--no-manual-pos) * (var(--start) + var(--end)) / 2);-webkit-transform:rotate(var(--mid,0)) translate( calc(1em * var(--no-manual-pos,1) + var(--text-start-adjust,0px)) );-ms-transform:rotate(var(--mid,0)) translate( calc(1em * var(--no-manual-pos,1) + var(--text-start-adjust,0px)) );transform:rotate(var(--mid,0)) translate( calc(1em * var(--no-manual-pos,1) + var(--text-start-adjust,0px)) );-webkit-transform-origin:left;-ms-transform-origin:left;transform-origin:left;display:block;}",".pie.jsx-1362915787,.slice.jsx-1362915787{-webkit-transition:-webkit-transform 0.2s,outline 0.2s;-webkit-transition:transform 0.2s,outline 0.2s;transition:transform 0.2s,outline 0.2s;}",".pie.jsx-1362915787:hover,.pie.jsx-1362915787:focus,.slice.jsx-1362915787:focus,.highlightedSlice.jsx-1362915787{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}",".pie.jsx-1362915787:hover,.pie.jsx-1362915787:focus{outline:5px solid rgba(0,0,0,0.5);-webkit-transform:scale(1.1) rotate(-90deg);-ms-transform:scale(1.1) rotate(-90deg);transform:scale(1.1) rotate(-90deg);}"];x.__hash="1362915787";var d=x;function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=function(e){for(var t=e.id,a=e.pieChartData,n=e.hideTextLabels,s=0,i=[],o=0;o<a.length;o++){var l=a[o],c=u({start:s,end:s+l.number},l);s+=l.number,i.push(c)}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{id:t,tabIndex:0,className:"jsx-".concat(d.__hash)+" pie",children:[i.map((function(e){var t=Math.round(e.start/s*360),a=Math.round(e.end/s*360),i={"--start":"".concat(t,"deg"),"--end":"".concat(a,"deg"),"--color":e.color};return a-t>180&&(i["--over180"]=1),e.text&&!n&&(i["--text"]="'".concat(e.text,"'")),e.textLeft&&(i["--text-left"]=e.textLeft),e.textTop&&(i["--text-top"]=e.textTop),e.textStartAdjust&&(i["--text-start-adjust"]=e.textStartAdjust),Object(r.jsx)("div",{id:e.sliceId||"",style:i,tabIndex:0,"aria-label":"".concat(e.text,": ").concat(e.number),className:"jsx-".concat(d.__hash)+" "+("slice "+(e.sliceClass||" ")+" "+(e.highlightedSlice?"highlightedSlice ":" ")||!1)})})),Object(r.jsx)("div",{tabIndex:-1,className:"jsx-".concat(d.__hash)+" slice always-tabindex-1"})]}),Object(r.jsx)(m.a,{id:d.__hash,children:d})]})};function b(e){var t,a,n,s,i,l,c,m,x,d,p,u,b,v,h,f,g=e.data,w=(null===g||void 0===g||null===(t=g.AutonomousVehicles)||void 0===t||null===(a=t.Online)||void 0===a?void 0:a.AllocatedAVs)+(null===g||void 0===g||null===(n=g.AutonomousVehicles)||void 0===n||null===(s=n.Online)||void 0===s?void 0:s.ChargingAVs)+(null===g||void 0===g||null===(i=g.AutonomousVehicles)||void 0===i||null===(l=i.Online)||void 0===l?void 0:l.AvailableAVs)-(null===g||void 0===g||null===(c=g.AutonomousVehicles)||void 0===c||null===(m=c.Offline)||void 0===m?void 0:m.Repairing)-(null===g||void 0===g||null===(x=g.AutonomousVehicles)||void 0===x||null===(d=x.Offline)||void 0===d?void 0:d.Unaccounted),y=null===g||void 0===g||null===(p=g.AutonomousVehicles)||void 0===p||null===(u=p.Online)||void 0===u?void 0:u.AllocatedAVs,k=null===g||void 0===g||null===(b=g.AutonomousVehicles)||void 0===b||null===(v=b.Online)||void 0===v?void 0:v.ChargingAVs,O=null===g||void 0===g||null===(h=g.AutonomousVehicles)||void 0===h||null===(f=h.Online)||void 0===f?void 0:f.AvailableAVs,N=Object(o.useState)(!1),_=N[0],A=N[1],S=Object(o.useState)(!1),V=S[0],I=S[1],P=Object(o.useState)(!1),M=P[0],q=P[1];return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h3",{className:"waymo-dark-navy-text waymo-white-background my-0 p-0",children:["Online:"," ",Object(r.jsx)("span",{className:"animated-text waymo-dark-navy-text waymo-white-background px-0",children:w||20589}),"/20600"]}),Object(r.jsxs)("div",{className:"d-flex wrap justify-center",children:[Object(r.jsx)(j,{id:"avs-online",title:"Online: ".concat(w||20589),pieChartData:[{sliceId:"Allocated",color:"var(--waymo-blue)",text:"\u29bf",number:y||14986,textStartAdjust:"1em",highlightedSlice:_},{sliceId:"Charging",color:"var(--verily-red)",text:"\u25fc",number:k||4323,textStartAdjust:"2em",highlightedSlice:V},{sliceId:"Available",color:"var(--waymo-green)",text:"\u25b2",number:O||1280,textStartAdjust:"2em",highlightedSlice:M}]}),Object(r.jsxs)("div",{style:{margin:"0 1rem"},children:[Object(r.jsxs)("p",{className:"circle-before-chart-label white-text waymo-blue-background",tabIndex:0,onFocus:function(){A(!0)},onBlur:function(){A(!1)},onMouseOver:function(){A(!0)},onMouseLeave:function(){A(!1)},children:["\xa0Allocated: ",y||14986]}),Object(r.jsxs)("p",{className:"square-before-chart-label white-text verily-red-background",tabIndex:0,onFocus:function(){I(!0)},onBlur:function(){I(!1)},onMouseOver:function(){I(!0)},onMouseLeave:function(){I(!1)},children:[" ","\xa0Charging: ",k||4323]}),Object(r.jsxs)("p",{className:"triangle-before-chart-label white-text waymo-green-background",tabIndex:0,onFocus:function(){q(!0)},onBlur:function(){q(!1)},onMouseOver:function(){q(!0)},onMouseLeave:function(){q(!1)},children:["\xa0",Object(r.jsxs)("span",{className:"black-text waymo-green-background",style:{paddingLeft:0},children:["Available: ",O||1280]})]})]})]})]})}function v(e){var t,a,n,s,i,l,c,m,x=e.data,d=(null===x||void 0===x||null===(t=x.AutonomousVehicles)||void 0===t||null===(a=t.Offline)||void 0===a?void 0:a.Repairing)+(null===x||void 0===x||null===(n=x.AutonomousVehicles)||void 0===n||null===(s=n.Offline)||void 0===s?void 0:s.Unaccounted),p=null===x||void 0===x||null===(i=x.AutonomousVehicles)||void 0===i||null===(l=i.Offline)||void 0===l?void 0:l.Repairing,u=null===x||void 0===x||null===(c=x.AutonomousVehicles)||void 0===c||null===(m=c.Offline)||void 0===m?void 0:m.Unaccounted,b=Object(o.useState)(!1),v=b[0],h=b[1],f=Object(o.useState)(!1),g=f[0],w=f[1];return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h3",{className:"waymo-dark-navy-text waymo-white-background my-0 p-0",children:["Offline:"," ",Object(r.jsx)("span",{className:"animated-text waymo-dark-navy-text waymo-white-background px-0",children:d||11}),"/20600"]}),Object(r.jsxs)("div",{className:"d-flex wrap justify-center",children:[Object(r.jsx)(j,{id:"avs-offline",title:"Offline: ".concat(d||11),pieChartData:[{color:"var(--waymo-blue)",text:"\u25fc",number:p||10,textStartAdjust:"1em",highlightedSlice:v},{color:"var(--verily-red)",text:"\u25b2",number:u||1,textStartAdjust:"2em",highlightedSlice:g}]}),Object(r.jsxs)("div",{style:{margin:"0 1rem"},children:[Object(r.jsxs)("p",{className:"square-before-chart-label white-text waymo-blue-background",tabIndex:0,onFocus:function(){h(!0)},onBlur:function(){h(!1)},onMouseOver:function(){h(!0)},onMouseLeave:function(){h(!1)},children:["\xa0Repairing: ",p||10]}),Object(r.jsxs)("p",{className:"triangle-before-chart-label white-text verily-red-background",tabIndex:0,onFocus:function(){w(!0)},onBlur:function(){w(!1)},onMouseOver:function(){w(!0)},onMouseLeave:function(){w(!1)},children:["\xa0Unaccounted: ",u||1]})]})]})]})}function h(e){var t,a,n,s,i,l,c=e.data,m=(null===c||void 0===c||null===(t=c.Passengers)||void 0===t?void 0:t.Hailing)+(null===c||void 0===c||null===(a=c.Passengers)||void 0===a?void 0:a.Serving)+(null===c||void 0===c||null===(n=c.Passengers)||void 0===n?void 0:n.RequestingAssistance),x=null===c||void 0===c||null===(s=c.Passengers)||void 0===s?void 0:s.Hailing,d=null===c||void 0===c||null===(i=c.Passengers)||void 0===i?void 0:i.Serving,p=null===c||void 0===c||null===(l=c.Passengers)||void 0===l?void 0:l.RequestingAssistance,u=Object(o.useState)(!1),b=u[0],v=u[1],h=Object(o.useState)(!1),f=h[0],g=h[1];return Object(r.jsxs)("div",{className:"d-flex wrap justify-center",children:[Object(r.jsx)(j,{id:"passengers",title:"Passengers: ".concat(m||14986),pieChartData:[{color:"var(--waymo-blue)",text:"\u29bf",number:x||112,textStartAdjust:"1em",highlightedSlice:b},{color:"var(--verily-red)",text:"\u25b2",number:p||2,textStartAdjust:"3em",highlightedSlice:f}]}),Object(r.jsxs)("div",{className:"my-0 mx-1",children:[Object(r.jsxs)("p",{className:"circle-before-chart-label white-text waymo-blue-background",tabIndex:0,onFocus:function(){v(!0)},onBlur:function(){v(!1)},onMouseOver:function(){v(!0)},onMouseLeave:function(){v(!1)},children:["\xa0Hailing: ",x||112]}),Object(r.jsxs)("p",{className:"triangle-before-chart-label white-text verily-red-background",tabIndex:0,onFocus:function(){g(!0)},onBlur:function(){g(!1)},onMouseOver:function(){g(!0)},onMouseLeave:function(){g(!1)},children:["\xa0Requesting assistance: ",p||2]}),Object(r.jsxs)("p",{className:"square-before-chart-label black-text waymo-white-background",tabIndex:0,children:["\xa0(Serving: ",d||14872,")"]})]})]})}var f=[".jsx-3652217244{--clip-path:polygon( 51px 2px, 20.51% 18.63%, 8.47% 15.46%, 12.36% 31.72%, 10.16% 38.24%, 20.28% 50.53%, 15.42% 56.42%, 15.46% 63.34%, 11.65% 71.36%, 16.42% 76.14%, 9.63% 82.81%, 57.2% 99.55%, 97.9% 100.4%, 99.22% 1.45% );}",".av-map.jsx-3652217244{display:inline-block;position:relative;width:230px;height:230px;background:gold;-webkit-clip-path:var(--clip-path);clip-path:var(--clip-path);-webkit-transition:-webkit-transform 0.2s;-webkit-transition:transform 0.2s;transition:transform 0.2s;}",'.av-map.jsx-3652217244:after{content:"";display:inline-block;width:230px;height:230px;background:var(--waymo-green);-webkit-transform:scale(0.9) translate(3px);-ms-transform:scale(0.9) translate(3px);transform:scale(0.9) translate(3px);-webkit-clip-path:var(--clip-path);clip-path:var(--clip-path);}',".av-map.jsx-3652217244:hover,.av-map.jsx-3652217244:focus{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}",'.av-map.jsx-3652217244 .hailing.jsx-3652217244:after{content:"\ud83d\udd35";}','.av-map.jsx-3652217244 .requesting-assistance.jsx-3652217244:after{content:"\ud83d\uded1";}','.av-map.jsx-3652217244 .av.jsx-3652217244:after{content:"\u2b1c";}','.av-map.jsx-3652217244 .charging-station.jsx-3652217244:after{content:"\ud83d\udd0b";}','.av-map.jsx-3652217244 .roadside-assistance.jsx-3652217244:after{content:"\u26a0\ufe0f";}',".av-map.jsx-3652217244>*.jsx-3652217244{position:absolute;z-index:1;background:transparent;width:0;height:0;-webkit-transform:translate(-0.5rem,-0.5rem);-ms-transform:translate(-0.5rem,-0.5rem);transform:translate(-0.5rem,-0.5rem);top:var(--top);left:var(--left);}",".av-map.jsx-3652217244>*.jsx-3652217244:after{position:absolute;top:0;left:0;}",".av-map.spread-out-map-icons.jsx-3652217244>*.jsx-3652217244{-webkit-animation:spread-out-map-icons-jsx-3652217244 0.2s forwards;animation:spread-out-map-icons-jsx-3652217244 0.2s forwards;}","@-webkit-keyframes spread-out-map-icons-jsx-3652217244{from{left:0;top:100%;}}","@keyframes spread-out-map-icons-jsx-3652217244{from{left:0;top:100%;}}",".av-map-container.jsx-3652217244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",'[class*="moving"].jsx-3652217244{-webkit-animation-duration:5s;animation-duration:5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-play-state:paused;animation-play-state:paused;}',".moving-1.jsx-3652217244{-webkit-animation-name:moving-1-jsx-3652217244;animation-name:moving-1-jsx-3652217244;}",'.moving-1.jsx-3652217244:after{content:"\u2b1cETA: 5m" !important;color:black;width:-webkit-max-content;width:-moz-max-content;width:max-content;font-size:small;}',"@-webkit-keyframes moving-1-jsx-3652217244{to{-webkit-transform:translate(-14px,10px);-ms-transform:translate(-14px,10px);transform:translate(-14px,10px);}}","@keyframes moving-1-jsx-3652217244{to{-webkit-transform:translate(-14px,10px);-ms-transform:translate(-14px,10px);transform:translate(-14px,10px);}}",".moving-2.jsx-3652217244{-webkit-animation-name:moving-2-jsx-3652217244;animation-name:moving-2-jsx-3652217244;}","@-webkit-keyframes moving-2-jsx-3652217244{to{-webkit-transform:translate(-15px,-26px);-ms-transform:translate(-15px,-26px);transform:translate(-15px,-26px);}}","@keyframes moving-2-jsx-3652217244{to{-webkit-transform:translate(-15px,-26px);-ms-transform:translate(-15px,-26px);transform:translate(-15px,-26px);}}",".moving-3.jsx-3652217244{-webkit-animation-name:moving-3-jsx-3652217244;animation-name:moving-3-jsx-3652217244;}","@-webkit-keyframes moving-3-jsx-3652217244{to{-webkit-transform:translate(-1px,-25px);-ms-transform:translate(-1px,-25px);transform:translate(-1px,-25px);}}","@keyframes moving-3-jsx-3652217244{to{-webkit-transform:translate(-1px,-25px);-ms-transform:translate(-1px,-25px);transform:translate(-1px,-25px);}}",".moving-4.jsx-3652217244{-webkit-animation-name:moving-4-jsx-3652217244;animation-name:moving-4-jsx-3652217244;}","@-webkit-keyframes moving-4-jsx-3652217244{to{-webkit-transform:translate(5px,-20px);-ms-transform:translate(5px,-20px);transform:translate(5px,-20px);}}","@keyframes moving-4-jsx-3652217244{to{-webkit-transform:translate(5px,-20px);-ms-transform:translate(5px,-20px);transform:translate(5px,-20px);}}",".moving-5.jsx-3652217244{-webkit-animation-name:moving-5-jsx-3652217244;animation-name:moving-5-jsx-3652217244;}","@-webkit-keyframes moving-5-jsx-3652217244{to{-webkit-transform:translate(-20px,-20px);-ms-transform:translate(-20px,-20px);transform:translate(-20px,-20px);}}","@keyframes moving-5-jsx-3652217244{to{-webkit-transform:translate(-20px,-20px);-ms-transform:translate(-20px,-20px);transform:translate(-20px,-20px);}}",".moving-6.jsx-3652217244{-webkit-animation-name:moving-6-jsx-3652217244;animation-name:moving-6-jsx-3652217244;}","@-webkit-keyframes moving-6-jsx-3652217244{to{-webkit-transform:translate(5px,-15px);-ms-transform:translate(5px,-15px);transform:translate(5px,-15px);}}","@keyframes moving-6-jsx-3652217244{to{-webkit-transform:translate(5px,-15px);-ms-transform:translate(5px,-15px);transform:translate(5px,-15px);}}",".moving-7.jsx-3652217244{-webkit-animation-name:moving-7-jsx-3652217244;animation-name:moving-7-jsx-3652217244;}","@-webkit-keyframes moving-7-jsx-3652217244{to{-webkit-transform:translate(-15px,-30px);-ms-transform:translate(-15px,-30px);transform:translate(-15px,-30px);}}","@keyframes moving-7-jsx-3652217244{to{-webkit-transform:translate(-15px,-30px);-ms-transform:translate(-15px,-30px);transform:translate(-15px,-30px);}}",".moving-8.jsx-3652217244{-webkit-animation-name:moving-8-jsx-3652217244;animation-name:moving-8-jsx-3652217244;}","@-webkit-keyframes moving-8-jsx-3652217244{to{-webkit-transform:translate(5px,-10px);-ms-transform:translate(5px,-10px);transform:translate(5px,-10px);}}","@keyframes moving-8-jsx-3652217244{to{-webkit-transform:translate(5px,-10px);-ms-transform:translate(5px,-10px);transform:translate(5px,-10px);}}",".moving-9.jsx-3652217244{-webkit-animation-name:moving-9-jsx-3652217244;animation-name:moving-9-jsx-3652217244;}","@-webkit-keyframes moving-9-jsx-3652217244{to{-webkit-transform:translate(7px,16px);-ms-transform:translate(7px,16px);transform:translate(7px,16px);}}","@keyframes moving-9-jsx-3652217244{to{-webkit-transform:translate(7px,16px);-ms-transform:translate(7px,16px);transform:translate(7px,16px);}}",'@media (prefers-reduced-motion){[class*="moving-"].jsx-3652217244{-webkit-animation-name:none;animation-name:none;}}'];f.__hash="3652217244";var g,w=f;!function(e){e.h="hailing",e.req="requesting-assistance",e.av="av",e.cs="charging-station",e.rds="roadside-assistance"}(g||(g={}));var y=[[g.h,35,72],[g.h,40,75],[g.h,30,73],[g.h,50,50],[g.h,37,67],[g.h,59,79],[g.h,30,32],[g.h,82,70],[g.cs,44,66],[g.cs,37,39],[g.cs,77,43],[g.req,60,60],[g.req,75,87],[g.rds,54,65,"moving-6"],[g.rds,70,76,"moving-9"],[g.av,29,62],[g.av,47,82],[g.av,64,86,"moving-5"],[g.av,35,49],[g.av,25,43,"moving-3"],[g.av,44,18,"moving-8"],[g.av,74,76,"moving-4"],[g.av,79,35,"moving-7"],[g.av,53,39,"moving-1"],[g.av,40,58],[g.av,33,81,"moving-2"]];function k(e){var t=e.requestsPlusAVs,a=Object(o.useState)(!1),n=a[0],s=a[1];return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h2",{className:"waymo-blue-text waymo-white-background mb-0 px-0",children:["Requests + AVs map:"," ",Object(r.jsx)("span",{className:"animated-text py-0",children:t||20714})]}),Object(r.jsxs)("div",{className:"jsx-".concat(w.__hash)+" av-map-container",children:[Object(r.jsx)("div",{onClick:function(){return s(!n)},onKeyUp:function(){return s(!n)},tabIndex:0,role:"button",className:"jsx-".concat(w.__hash)+" "+"av-map ".concat(n&&"spread-out-map-icons"),children:y.map((function(e){return Object(r.jsx)(O,{p:e[0],left:"".concat(e[1],"%"),top:"".concat(e[2],"%"),extraClasses:e[3]})}))}),Object(r.jsxs)("div",{className:"jsx-".concat(w.__hash)+" legend",children:[Object(r.jsxs)("p",{className:"jsx-".concat(w.__hash)+" my-0 py-0 waymo-dark-navy-text",children:[Object(r.jsx)("span",{style:{width:"1.5rem",display:"inline-block"},className:"jsx-".concat(w.__hash)+" white-background p-0 text-center",children:"\ud83d\udd35"}),Object(r.jsx)("span",{className:"jsx-".concat(w.__hash)+" waymo-blue-background py-0",children:"Hailing"})]}),Object(r.jsxs)("p",{className:"jsx-".concat(w.__hash)+" my-0 py-0 waymo-dark-navy-text",children:[Object(r.jsx)("span",{style:{width:"1.5rem",display:"inline-block"},className:"jsx-".concat(w.__hash)+" white-background p-0 text-center",children:"\ud83d\uded1"}),Object(r.jsx)("span",{className:"jsx-".concat(w.__hash)+" verily-red-background py-0",children:"Requesting Assistance"})]}),Object(r.jsxs)("p",{className:"jsx-".concat(w.__hash)+" my-0 py-0 waymo-dark-navy-text",children:[Object(r.jsx)("span",{style:{width:"1.5rem",display:"inline-block"},className:"jsx-".concat(w.__hash)+" white-background p-0 text-center",children:"\u2b1c"}),Object(r.jsx)("span",{className:"jsx-".concat(w.__hash)+" black-background waymo-white-text py-0",children:"AV"})]}),Object(r.jsxs)("p",{className:"jsx-".concat(w.__hash)+" my-0 py-0 waymo-dark-navy-text",children:[Object(r.jsx)("span",{style:{width:"1.5rem",display:"inline-block"},className:"jsx-".concat(w.__hash)+" white-background p-0 text-center",children:"\ud83d\udd0b"}),Object(r.jsx)("span",{className:"jsx-".concat(w.__hash)+" waymo-green-background black-text py-0",children:"Charging Station"})]}),Object(r.jsxs)("p",{className:"jsx-".concat(w.__hash)+" my-0 py-0 waymo-dark-navy-text",children:[Object(r.jsx)("span",{style:{width:"1.5rem",display:"inline-block"},className:"jsx-".concat(w.__hash)+" white-background p-0 text-center",children:"\u26a0\ufe0f"}),Object(r.jsx)("span",{className:"jsx-".concat(w.__hash)+" yellow-background black-text py-0",children:"Roadside Assistance"})]})]}),Object(r.jsx)(m.a,{id:w.__hash,children:w})]})]})}function O(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{style:{"--left":e.left,"--top":e.top},className:"jsx-".concat(w.__hash)+" "+(e.p+" "+e.extraClasses||"")}),Object(r.jsx)(m.a,{id:w.__hash,children:w})]})}var N=a("zjKH");function _(e){var t,a=e.showWaymoDemo,n=Object(o.useState)(null),l=n[0],c=n[1],m=Object(o.useState)(14986),x=m[0],d=m[1],p=Object(o.useState)(20900913),u=p[0],j=p[1],f=Object(o.useState)(47),g=f[0],w=f[1];function y(){return(y=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.a)("waymo");case 2:n=e.sent,c(n),d(null===n||void 0===n||null===(t=n.AutonomousVehicles)||void 0===t||null===(a=t.Online)||void 0===a?void 0:a.AllocatedAVs),j(null===n||void 0===n?void 0:n.MilesOfXP),w(null===n||void 0===n?void 0:n.IncidencesResolved);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.useEffect)((function(){return clearInterval(t),t=setInterval((function(){a&&function(){y.apply(this,arguments)}()}),3e3),function(){return clearInterval(t)}}),[a]),Object(r.jsxs)("section",{id:"waymo-demo",className:"p-0 waymo-white-background",children:[Object(r.jsx)("h2",{className:"waymo-white-text waymo-blue-to-green my-0 text-center text-center",children:"AV fleet infrastructure panel"}),Object(r.jsxs)("section",{id:"waymo-demo-main-content",className:"waymo-white-background",children:[Object(r.jsxs)("h2",{className:"waymo-blue-text waymo-white-background mb-0 px-0",children:["Autonomous Vehicles: ",Object(r.jsx)("span",{className:"animated-text py-0",children:"20600"})]}),Object(r.jsxs)("div",{className:"mb-1 waymo-demo-group",children:[Object(r.jsx)(b,{data:l}),Object(r.jsx)(v,{data:l})]}),Object(r.jsxs)("div",{className:"mb-1 waymo-demo-group",children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("h2",{className:"waymo-blue-text waymo-white-background mb-0 px-0",children:["Passengers:"," ",Object(r.jsx)("span",{className:"animated-text py-0",children:x})]}),Object(r.jsx)("div",{className:"d-flex wrap",children:Object(r.jsx)(h,{data:l})})]}),Object(r.jsx)("div",{className:"mb-1 d-flex wrap",children:Object(r.jsx)(k,{requestsPlusAVs:null===l||void 0===l?void 0:l.RequestsPlusAVs})})]}),Object(r.jsxs)("h2",{className:"waymo-blue-text waymo-white-background mb-0 px-0",children:["Miles of XP: ",Object(r.jsx)("span",{className:"animated-text py-0",children:u})]}),Object(r.jsxs)("h2",{className:"waymo-blue-text waymo-white-background mb-0 px-0",children:["Incidences resolved:"," ",Object(r.jsx)("span",{className:"animated-text py-0",children:g})]})]}),Object(r.jsx)("small",{style:{textAlign:"right",display:"block"},className:"p-0",children:"(Note: this is a mock demo with simulated data.)"})]})}},cpVT:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))}}]);