(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{W9MN:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return y}));var n=a("nKUr"),s=(a("i8i4"),a("q1tI")),r=a("cpVT"),i=a("MX0m"),o=a.n(i),c=[".slice.jsx-1362915787{background-image:linear-gradient(var(--start),transparent 50%,white 50%), linear-gradient(calc(var(--end)),transparent 50%,var(--color) 50%);}",'.slice[style*="--over180"].jsx-1362915787{background-image:linear-gradient( var(--start), var(--color) 50%, transparent 50% ), linear-gradient(calc(var(--end)),white 50%,var(--color) 50%);}',".pie.jsx-1362915787,.slice.jsx-1362915787{display:block;border-radius:50%;background-color:white;cursor:pointer;}",".pie.jsx-1362915787{position:relative;width:180px;height:180px;aspect-ratio:1;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);margin:1rem;}",".slice.jsx-1362915787{position:absolute;width:100%;height:100%;mix-blend-mode:multiply;}",".slice.jsx-1362915787:after{content:var(--text);color:#fff;mix-blend-mode:difference;position:relative;left:var(--text-left,50%);top:var(--text-top,calc(50% - 0.5em));--have-left:var(--text-left,0);--have-top:var(--text-top,0);--not-manually-set-left:calc(1 - var(--have-left,0));--not-manually-set-top:calc(1 - var(--have-top,0));--no-manual-pos:calc( var(--not-manually-set-left,0) * var(--not-manually-set-top,0) );--mid:calc(var(--no-manual-pos) * (var(--start) + var(--end)) / 2);-webkit-transform:rotate(var(--mid,0)) translate( calc(1em * var(--no-manual-pos,1) + var(--text-start-adjust,0px)) );-ms-transform:rotate(var(--mid,0)) translate( calc(1em * var(--no-manual-pos,1) + var(--text-start-adjust,0px)) );transform:rotate(var(--mid,0)) translate( calc(1em * var(--no-manual-pos,1) + var(--text-start-adjust,0px)) );-webkit-transform-origin:left;-ms-transform-origin:left;transform-origin:left;display:block;}",".pie.jsx-1362915787,.slice.jsx-1362915787{-webkit-transition:-webkit-transform 0.2s,outline 0.2s;-webkit-transition:transform 0.2s,outline 0.2s;transition:transform 0.2s,outline 0.2s;}",".pie.jsx-1362915787:hover,.pie.jsx-1362915787:focus,.slice.jsx-1362915787:focus,.highlightedSlice.jsx-1362915787{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}",".pie.jsx-1362915787:hover,.pie.jsx-1362915787:focus{outline:5px solid rgba(0,0,0,0.5);-webkit-transform:scale(1.1) rotate(-90deg);-ms-transform:scale(1.1) rotate(-90deg);transform:scale(1.1) rotate(-90deg);}"];c.__hash="1362915787";var m=c;function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function x(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){Object(r.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p=function(t){for(var e=t.id,a=t.pieChartData,s=t.hideTextLabels,r=0,i=[],c=0;c<a.length;c++){var l=a[c],p=x({start:r,end:r+l.number},l);r+=l.number,i.push(p)}return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{id:e,tabIndex:0,className:"jsx-".concat(m.__hash)+" pie",children:[i.map((function(t){var e=Math.round(t.start/r*360),a=Math.round(t.end/r*360),i={"--start":"".concat(e,"deg"),"--end":"".concat(a,"deg"),"--color":t.color};return a-e>180&&(i["--over180"]=1),t.text&&!s&&(i["--text"]="'".concat(t.text,"'")),t.textLeft&&(i["--text-left"]=t.textLeft),t.textTop&&(i["--text-top"]=t.textTop),t.textStartAdjust&&(i["--text-start-adjust"]=t.textStartAdjust),Object(n.jsx)("div",{id:t.sliceId||"",style:i,tabIndex:0,"aria-label":"".concat(t.text,": ").concat(t.number),className:"jsx-".concat(m.__hash)+" "+("slice "+(t.sliceClass||" ")+" "+(t.highlightedSlice?"highlightedSlice ":" ")||!1)})})),Object(n.jsx)("div",{tabIndex:-1,className:"jsx-".concat(m.__hash)+" slice"})]}),Object(n.jsx)(o.a,{id:m.__hash,children:m})]})};function d(){var t=Object(s.useState)(!1),e=t[0],a=t[1],r=Object(s.useState)(!1),i=r[0],o=r[1],c=Object(s.useState)(!1),m=c[0],l=c[1];return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h3",{className:"waymo-dark-navy-text waymo-white-background my-0 p-0",children:["Online:"," ",Object(n.jsx)("span",{className:"animated-text waymo-dark-navy-text waymo-white-background px-0",children:"20589"}),"/20600"]}),Object(n.jsxs)("div",{className:"d-flex wrap justify-center",children:[Object(n.jsx)(p,{id:"avs-online",title:"Online: 20589",pieChartData:[{sliceId:"Allocated",color:"var(--waymo-blue)",text:"\u29bf",number:14986,textStartAdjust:"1em",highlightedSlice:e},{sliceId:"Charging",color:"var(--verily-red)",text:"\u25fc",number:4323,textStartAdjust:"2em",highlightedSlice:i},{sliceId:"Available",color:"var(--waymo-green)",text:"\u25b2",number:1280,textStartAdjust:"2em",highlightedSlice:m}]}),Object(n.jsxs)("div",{style:{margin:"0 1rem"},children:[Object(n.jsx)("p",{className:"circle-before-chart-label white-text waymo-blue-background",tabIndex:0,onFocus:function(){a(!0)},onBlur:function(){a(!1)},onMouseOver:function(){a(!0)},onMouseLeave:function(){a(!1)},children:"\xa0Allocated: 14986"}),Object(n.jsxs)("p",{className:"square-before-chart-label white-text verily-red-background",tabIndex:0,onFocus:function(){o(!0)},onBlur:function(){o(!1)},onMouseOver:function(){o(!0)},onMouseLeave:function(){o(!1)},children:[" ","\xa0Charging: 4323"]}),Object(n.jsxs)("p",{className:"triangle-before-chart-label white-text waymo-green-background",tabIndex:0,onFocus:function(){l(!0)},onBlur:function(){l(!1)},onMouseOver:function(){l(!0)},onMouseLeave:function(){l(!1)},children:["\xa0",Object(n.jsx)("span",{className:"black-text waymo-green-background",style:{paddingLeft:0},children:"Available: 1280"})]})]})]})]})}function j(){var t=Object(s.useState)(!1),e=t[0],a=t[1],r=Object(s.useState)(!1),i=r[0],o=r[1];return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h3",{className:"waymo-dark-navy-text waymo-white-background my-0 p-0",children:["Offline:"," ",Object(n.jsx)("span",{className:"animated-text waymo-dark-navy-text waymo-white-background px-0",children:"11"}),"/20600"]}),Object(n.jsxs)("div",{className:"d-flex wrap justify-center",children:[Object(n.jsx)(p,{id:"avs-offline",title:"Offline: 11",pieChartData:[{color:"var(--waymo-blue)",text:"\u25fc",number:10,textStartAdjust:"1em",highlightedSlice:e},{color:"var(--verily-red)",text:"\u25b2",number:1,textStartAdjust:"2em",highlightedSlice:i}]}),Object(n.jsxs)("div",{style:{margin:"0 1rem"},children:[Object(n.jsx)("p",{className:"square-before-chart-label white-text waymo-blue-background",tabIndex:0,onFocus:function(){a(!0)},onBlur:function(){a(!1)},onMouseOver:function(){a(!0)},onMouseLeave:function(){a(!1)},children:"\xa0Repairing: 10"}),Object(n.jsx)("p",{className:"triangle-before-chart-label white-text verily-red-background",tabIndex:0,onFocus:function(){o(!0)},onBlur:function(){o(!1)},onMouseOver:function(){o(!0)},onMouseLeave:function(){o(!1)},children:"\xa0Unaccounted: 1"})]})]})]})}function b(){var t=Object(s.useState)(!1),e=t[0],a=t[1],r=Object(s.useState)(!1),i=r[0],o=r[1];return Object(n.jsxs)("div",{className:"d-flex wrap justify-center",children:[Object(n.jsx)(p,{id:"passengers",title:"Passengers: 14986",pieChartData:[{color:"var(--waymo-blue)",text:"\u29bf",number:112,textStartAdjust:"1em",highlightedSlice:e},{color:"var(--verily-red)",text:"\u25b2",number:2,textStartAdjust:"3em",highlightedSlice:i}]}),Object(n.jsxs)("div",{className:"my-0 mx-1",children:[Object(n.jsx)("p",{className:"circle-before-chart-label white-text waymo-blue-background",tabIndex:0,onFocus:function(){a(!0)},onBlur:function(){a(!1)},onMouseOver:function(){a(!0)},onMouseLeave:function(){a(!1)},children:"\xa0Hailing: 112"}),Object(n.jsx)("p",{className:"triangle-before-chart-label white-text verily-red-background",tabIndex:0,onFocus:function(){o(!0)},onBlur:function(){o(!1)},onMouseOver:function(){o(!0)},onMouseLeave:function(){o(!1)},children:"\xa0Requesting assistance: 2"})]})]})}var f=[".jsx-3652217244{--clip-path:polygon( 51px 2px, 20.51% 18.63%, 8.47% 15.46%, 12.36% 31.72%, 10.16% 38.24%, 20.28% 50.53%, 15.42% 56.42%, 15.46% 63.34%, 11.65% 71.36%, 16.42% 76.14%, 9.63% 82.81%, 57.2% 99.55%, 97.9% 100.4%, 99.22% 1.45% );}",".av-map.jsx-3652217244{display:inline-block;position:relative;width:230px;height:230px;background:gold;-webkit-clip-path:var(--clip-path);clip-path:var(--clip-path);-webkit-transition:-webkit-transform 0.2s;-webkit-transition:transform 0.2s;transition:transform 0.2s;}",'.av-map.jsx-3652217244:after{content:"";display:inline-block;width:230px;height:230px;background:var(--waymo-green);-webkit-transform:scale(0.9) translate(3px);-ms-transform:scale(0.9) translate(3px);transform:scale(0.9) translate(3px);-webkit-clip-path:var(--clip-path);clip-path:var(--clip-path);}',".av-map.jsx-3652217244:hover,.av-map.jsx-3652217244:focus{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}",'.av-map.jsx-3652217244 .hailing.jsx-3652217244:after{content:"\ud83d\udd35";}','.av-map.jsx-3652217244 .requesting-assistance.jsx-3652217244:after{content:"\ud83d\uded1";}','.av-map.jsx-3652217244 .av.jsx-3652217244:after{content:"\u2b1c";}','.av-map.jsx-3652217244 .charging-station.jsx-3652217244:after{content:"\ud83d\udd0b";}','.av-map.jsx-3652217244 .roadside-assistance.jsx-3652217244:after{content:"\u26a0\ufe0f";}',".av-map.jsx-3652217244>*.jsx-3652217244{position:absolute;z-index:1;background:transparent;width:0;height:0;-webkit-transform:translate(-0.5rem,-0.5rem);-ms-transform:translate(-0.5rem,-0.5rem);transform:translate(-0.5rem,-0.5rem);top:var(--top);left:var(--left);}",".av-map.jsx-3652217244>*.jsx-3652217244:after{position:absolute;top:0;left:0;}",".av-map.spread-out-map-icons.jsx-3652217244>*.jsx-3652217244{-webkit-animation:spread-out-map-icons-jsx-3652217244 0.2s forwards;animation:spread-out-map-icons-jsx-3652217244 0.2s forwards;}","@-webkit-keyframes spread-out-map-icons-jsx-3652217244{from{left:0;top:100%;}}","@keyframes spread-out-map-icons-jsx-3652217244{from{left:0;top:100%;}}",".av-map-container.jsx-3652217244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",'[class*="moving"].jsx-3652217244{-webkit-animation-duration:5s;animation-duration:5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-play-state:paused;animation-play-state:paused;}',".moving-1.jsx-3652217244{-webkit-animation-name:moving-1-jsx-3652217244;animation-name:moving-1-jsx-3652217244;}",'.moving-1.jsx-3652217244:after{content:"\u2b1cETA: 5m" !important;color:black;width:-webkit-max-content;width:-moz-max-content;width:max-content;font-size:small;}',"@-webkit-keyframes moving-1-jsx-3652217244{to{-webkit-transform:translate(-14px,10px);-ms-transform:translate(-14px,10px);transform:translate(-14px,10px);}}","@keyframes moving-1-jsx-3652217244{to{-webkit-transform:translate(-14px,10px);-ms-transform:translate(-14px,10px);transform:translate(-14px,10px);}}",".moving-2.jsx-3652217244{-webkit-animation-name:moving-2-jsx-3652217244;animation-name:moving-2-jsx-3652217244;}","@-webkit-keyframes moving-2-jsx-3652217244{to{-webkit-transform:translate(-15px,-26px);-ms-transform:translate(-15px,-26px);transform:translate(-15px,-26px);}}","@keyframes moving-2-jsx-3652217244{to{-webkit-transform:translate(-15px,-26px);-ms-transform:translate(-15px,-26px);transform:translate(-15px,-26px);}}",".moving-3.jsx-3652217244{-webkit-animation-name:moving-3-jsx-3652217244;animation-name:moving-3-jsx-3652217244;}","@-webkit-keyframes moving-3-jsx-3652217244{to{-webkit-transform:translate(-1px,-25px);-ms-transform:translate(-1px,-25px);transform:translate(-1px,-25px);}}","@keyframes moving-3-jsx-3652217244{to{-webkit-transform:translate(-1px,-25px);-ms-transform:translate(-1px,-25px);transform:translate(-1px,-25px);}}",".moving-4.jsx-3652217244{-webkit-animation-name:moving-4-jsx-3652217244;animation-name:moving-4-jsx-3652217244;}","@-webkit-keyframes moving-4-jsx-3652217244{to{-webkit-transform:translate(5px,-20px);-ms-transform:translate(5px,-20px);transform:translate(5px,-20px);}}","@keyframes moving-4-jsx-3652217244{to{-webkit-transform:translate(5px,-20px);-ms-transform:translate(5px,-20px);transform:translate(5px,-20px);}}",".moving-5.jsx-3652217244{-webkit-animation-name:moving-5-jsx-3652217244;animation-name:moving-5-jsx-3652217244;}","@-webkit-keyframes moving-5-jsx-3652217244{to{-webkit-transform:translate(-20px,-20px);-ms-transform:translate(-20px,-20px);transform:translate(-20px,-20px);}}","@keyframes moving-5-jsx-3652217244{to{-webkit-transform:translate(-20px,-20px);-ms-transform:translate(-20px,-20px);transform:translate(-20px,-20px);}}",".moving-6.jsx-3652217244{-webkit-animation-name:moving-6-jsx-3652217244;animation-name:moving-6-jsx-3652217244;}","@-webkit-keyframes moving-6-jsx-3652217244{to{-webkit-transform:translate(5px,-15px);-ms-transform:translate(5px,-15px);transform:translate(5px,-15px);}}","@keyframes moving-6-jsx-3652217244{to{-webkit-transform:translate(5px,-15px);-ms-transform:translate(5px,-15px);transform:translate(5px,-15px);}}",".moving-7.jsx-3652217244{-webkit-animation-name:moving-7-jsx-3652217244;animation-name:moving-7-jsx-3652217244;}","@-webkit-keyframes moving-7-jsx-3652217244{to{-webkit-transform:translate(-15px,-30px);-ms-transform:translate(-15px,-30px);transform:translate(-15px,-30px);}}","@keyframes moving-7-jsx-3652217244{to{-webkit-transform:translate(-15px,-30px);-ms-transform:translate(-15px,-30px);transform:translate(-15px,-30px);}}",".moving-8.jsx-3652217244{-webkit-animation-name:moving-8-jsx-3652217244;animation-name:moving-8-jsx-3652217244;}","@-webkit-keyframes moving-8-jsx-3652217244{to{-webkit-transform:translate(5px,-10px);-ms-transform:translate(5px,-10px);transform:translate(5px,-10px);}}","@keyframes moving-8-jsx-3652217244{to{-webkit-transform:translate(5px,-10px);-ms-transform:translate(5px,-10px);transform:translate(5px,-10px);}}",".moving-9.jsx-3652217244{-webkit-animation-name:moving-9-jsx-3652217244;animation-name:moving-9-jsx-3652217244;}","@-webkit-keyframes moving-9-jsx-3652217244{to{-webkit-transform:translate(7px,16px);-ms-transform:translate(7px,16px);transform:translate(7px,16px);}}","@keyframes moving-9-jsx-3652217244{to{-webkit-transform:translate(7px,16px);-ms-transform:translate(7px,16px);transform:translate(7px,16px);}}",'@media (prefers-reduced-motion){[class*="moving-"].jsx-3652217244{-webkit-animation-name:none;animation-name:none;}}'];f.__hash="3652217244";var h,u=f;!function(t){t.h="hailing",t.req="requesting-assistance",t.av="av",t.cs="charging-station",t.rds="roadside-assistance"}(h||(h={}));var v=[[h.h,35,72],[h.h,40,75],[h.h,30,73],[h.h,50,50],[h.h,37,67],[h.h,59,79],[h.h,30,32],[h.h,82,70],[h.cs,44,66],[h.cs,37,39],[h.cs,77,43],[h.req,60,60],[h.req,75,87],[h.rds,54,65,"moving-6"],[h.rds,70,76,"moving-9"],[h.av,29,62],[h.av,47,82],[h.av,64,86,"moving-5"],[h.av,35,49],[h.av,25,43,"moving-3"],[h.av,44,18,"moving-8"],[h.av,74,76,"moving-4"],[h.av,79,35,"moving-7"],[h.av,53,39,"moving-1"],[h.av,40,58],[h.av,33,81,"moving-2"]];function g(){var t=Object(s.useState)(!1),e=t[0],a=t[1];return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h2",{className:"waymo-blue-text waymo-white-background mb-0 px-0",children:["Requests + AVs map: ",Object(n.jsx)("span",{className:"animated-text py-0",children:"20714"})]}),Object(n.jsxs)("div",{className:"jsx-".concat(u.__hash)+" av-map-container",children:[Object(n.jsx)("div",{onClick:function(){return a(!e)},tabIndex:0,role:"button",className:"jsx-".concat(u.__hash)+" "+"av-map ".concat(e&&"spread-out-map-icons"),children:v.map((function(t){return Object(n.jsx)(w,{p:t[0],left:"".concat(t[1],"%"),top:"".concat(t[2],"%"),extraClasses:t[3]})}))}),Object(n.jsxs)("div",{className:"jsx-".concat(u.__hash)+" legend",children:[Object(n.jsxs)("p",{className:"jsx-".concat(u.__hash)+" my-0 py-0 waymo-dark-navy-text",children:["\ud83d\udd35 ",Object(n.jsx)("span",{className:"jsx-".concat(u.__hash)+" waymo-blue-background py-0",children:"Hailing"})]}),Object(n.jsxs)("p",{className:"jsx-".concat(u.__hash)+" my-0 py-0 waymo-dark-navy-text",children:["\ud83d\uded1"," ",Object(n.jsx)("span",{className:"jsx-".concat(u.__hash)+" verily-red-background py-0",children:"Requesting Assistance"})]}),Object(n.jsxs)("p",{className:"jsx-".concat(u.__hash)+" my-0 py-0 waymo-dark-navy-text",children:["\u2b1c"," ",Object(n.jsx)("span",{className:"jsx-".concat(u.__hash)+" black-background waymo-white-text py-0",children:"AV"})]}),Object(n.jsxs)("p",{className:"jsx-".concat(u.__hash)+" my-0 py-0 waymo-dark-navy-text",children:["\ud83d\udd0b"," ",Object(n.jsx)("span",{className:"jsx-".concat(u.__hash)+" waymo-green-background black-text py-0",children:"Charging Station"})]}),Object(n.jsxs)("p",{className:"jsx-".concat(u.__hash)+" my-0 py-0 waymo-dark-navy-text",children:["\u26a0\ufe0f"," ",Object(n.jsx)("span",{className:"jsx-".concat(u.__hash)+" yellow-background black-text py-0",children:"Roadside Assistance"})]})]}),Object(n.jsx)(o.a,{id:u.__hash,children:u})]})]})}function w(t){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{style:{"--left":t.left,"--top":t.top},className:"jsx-".concat(u.__hash)+" "+(t.p+" "+t.extraClasses||"")}),Object(n.jsx)(o.a,{id:u.__hash,children:u})]})}function y(){return Object(n.jsxs)("section",{id:"waymo-demo",className:"p-0 waymo-white-background",children:[Object(n.jsx)("p",{className:"waymo-white-text waymo-blue-background",children:"AV fleet infrastructure panel"}),Object(n.jsxs)("section",{id:"waymo-demo-main-content",className:"waymo-white-background",children:[Object(n.jsxs)("h2",{className:"waymo-blue-text waymo-white-background mb-0 px-0",children:["Autonomous Vehicles: ",Object(n.jsx)("span",{className:"animated-text py-0",children:"20600"})]}),Object(n.jsxs)("div",{className:"mb-1 waymo-demo-group",children:[Object(n.jsx)(d,{}),Object(n.jsx)(j,{})]}),Object(n.jsxs)("div",{className:"mb-1 waymo-demo-group",children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)("h2",{className:"waymo-blue-text waymo-white-background mb-0 px-0",children:["Passengers: ",Object(n.jsx)("span",{className:"animated-text py-0",children:"14986"})]}),Object(n.jsx)("div",{className:"d-flex wrap",children:Object(n.jsx)(b,{})})]}),Object(n.jsx)("div",{className:"mb-1 d-flex wrap",children:Object(n.jsx)(g,{})})]}),Object(n.jsxs)("h2",{className:"waymo-blue-text waymo-white-background mb-0 px-0",children:["Miles of XP: ",Object(n.jsx)("span",{className:"animated-text py-0",children:"20900913"})]}),Object(n.jsxs)("h2",{className:"waymo-blue-text waymo-white-background mb-0 px-0",children:["Incidences resolved: ",Object(n.jsx)("span",{className:"animated-text py-0",children:"47"})]})]}),Object(n.jsx)("small",{style:{textAlign:"right",display:"block"},className:"p-0",children:"(Note: this is a mock demo with simulated data.)"})]})}},cpVT:function(t,e,a){"use strict";function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",(function(){return n}))}}]);