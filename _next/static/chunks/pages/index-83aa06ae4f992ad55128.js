_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"2qu3":function(e,t,n){"use strict";var o=n("oI91"),r=n("/GRZ"),a=n("i2R6");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){i=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(i)throw a}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}t.__esModule=!0,t.default=void 0;var u,d=(u=n("q1tI"))&&u.__esModule?u:{default:u},h=n("8L3h"),m=n("jwwS");var f=[],b=[],p=!1;function j(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function x(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(o){var r=j(e[o]);r.loading?t.loading=!0:(t.loaded[o]=r.loaded,t.error=r.error),n.push(r.promise),r.promise.then((function(e){t.loaded[o]=e})).catch((function(e){t.error=e}))}))}catch(o){t.error=o}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function g(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function w(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:g,webpack:null,modules:null},t),o=null;function r(){if(!o){var t=new y(e,n);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!p&&"function"===typeof n.webpack){var a=n.webpack();b.push((function(e){var t,n=c(a);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(-1!==e.indexOf(o))return r()}}catch(s){n.e(s)}finally{n.f()}}))}var s=function(e,t){r();var a=d.default.useContext(m.LoadableContext),s=(0,h.useSubscription)(o);return d.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),d.default.useMemo((function(){return s.loading||s.error?d.default.createElement(n.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:o.retry}):s.loaded?n.render(s.loaded,e):null}),[e,s])};return s.preload=function(){return r()},s.displayName="LoadableComponent",d.default.forwardRef(s)}var y=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i(i({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function _(e){return w(j,e)}function v(e,t){for(var n=[];e.length;){var o=e.pop();n.push(o(t))}return Promise.all(n).then((function(){if(e.length)return v(e,t)}))}_.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return w(x,e)},_.preloadAll=function(){return new Promise((function(e,t){v(f).then(e,t)}))},_.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return p=!0,t()};v(b,e).then(n,n)}))},window.__NEXT_PRELOADREADY=_.preloadReady;var O=_;t.default=O},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var o=n("nKUr"),r=n("MX0m"),a=n.n(r),s=n("q1tI"),i=(n("i8i4"),n("g4pe")),c=n.n(i);function l(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("script",{src:"https://cdn.jsdelivr.net/gh/hchiam/_2DNote@1.12.3/_2DNote.min.js",integrity:"sha384-e0d2dNwg3F9WTJ3jZBF5iUeuVyAtx+zwMnCAvKMiCHtwO2l2dzo3cIMO4+Xqwn5p",crossOrigin:"anonymous"}),Object(o.jsx)("script",{src:"https://cdn.jsdelivr.net/gh/hchiam/draggable@3.4.4/makeElementDraggable.js",integrity:"sha384-qeMZYjNvssfC2HCZuLY1ouJRQOi+NnH8YnBQ1YWWQzv63aWXokJevcK+noP39Uhl",crossOrigin:"anonymous"}),Object(o.jsx)("script",{src:"https://unpkg.com/universal-tilt.js",integrity:"sha384-tZhf4CaqdH3Z6krNwpjhIxCHu1fs91yFeMFR/sR2qSRDr78wNeJT0F1ZrULDLg31",crossOrigin:"anonymous"}),Object(o.jsx)("script",{src:"https://cdn.jsdelivr.net/gh/hchiam/flying-focus@1.3.0/flying-focus.js",integrity:"sha384-R/GTkKePjxM+7NiHK3HnRFNqvOoCND50qZZgnhKN8NsT3cRIIrTRw1EdS61VgW3W",crossOrigin:"anonymous"})]})}var u=n("vRNQ"),d=n.n(u),h=["#noscript.jsx-3501601935 p.jsx-3501601935{text-align:center !important;}","h1.jsx-3501601935{font-size:7vw;-webkit-letter-spacing:0.2ch;-moz-letter-spacing:0.2ch;-ms-letter-spacing:0.2ch;letter-spacing:0.2ch;}","button.jsx-3501601935{font-family:monospace;}","#hint.jsx-3501601935{font-size:xx-large;font-weight:bolder;color:rgb(50,50,50);margin-top:7rem;}","#hint.jsx-3501601935:hover{color:lime;}","#secret-button.jsx-3501601935{position:absolute;left:-100%;z-index:3;}","#secret-button.jsx-3501601935:focus{left:10% !important;}",".view-resize-animation.jsx-3501601935{margin:10px;}","#hint.jsx-3501601935,button.jsx-3501601935:hover,button.jsx-3501601935:focus,a.jsx-3501601935:hover,a.jsx-3501601935:focus{-webkit-animation:wobble-jsx-3501601935 forwards infinite 0.5s,rest-jsx-3501601935 forwards 3s;animation:wobble-jsx-3501601935 forwards infinite 0.5s,rest-jsx-3501601935 forwards 3s;}","@media (prefers-reduced-motion){#hint.jsx-3501601935,button.jsx-3501601935:hover,button.jsx-3501601935:focus,a.jsx-3501601935:hover,a.jsx-3501601935:focus{-webkit-animation-name:none;animation-name:none;}}","@-webkit-keyframes wobble-jsx-3501601935{0%{-webkit-transform:rotate(-5deg);-ms-transform:rotate(-5deg);transform:rotate(-5deg);}50%{-webkit-transform:rotate(5deg);-ms-transform:rotate(5deg);transform:rotate(5deg);}100%{-webkit-transform:rotate(-5deg);-ms-transform:rotate(-5deg);transform:rotate(-5deg);}}","@keyframes wobble-jsx-3501601935{0%{-webkit-transform:rotate(-5deg);-ms-transform:rotate(-5deg);transform:rotate(-5deg);}50%{-webkit-transform:rotate(5deg);-ms-transform:rotate(5deg);transform:rotate(5deg);}100%{-webkit-transform:rotate(-5deg);-ms-transform:rotate(-5deg);transform:rotate(-5deg);}}","@-webkit-keyframes rest-jsx-3501601935{100%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}}","@keyframes rest-jsx-3501601935{100%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}}","#draggable.jsx-3501601935{cursor:move;border-radius:1em;font-size:10px;-webkit-transition:none;transition:none;z-index:9001;margin-top:1rem;position:absolute;top:45%;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}",".commandKey.jsx-3501601935{background:navy;}","#cover.jsx-3501601935{z-index:-1;position:fixed;background:var(--secondary-color);opacity:0.1;width:100%;height:100%;top:0;left:0;-webkit-clip-path:polygon(0% 0%,100% 30%,100% 100%,0% 80%);clip-path:polygon(0% 0%,100% 30%,100% 100%,0% 80%);}","#cursor-shadow.jsx-3501601935{position:absolute;box-shadow:0 0 50px 50px rgba(0,0,0,0.1);-webkit-transition:0s;transition:0s;}","#extra-info.jsx-3501601935{color:#808080;width:100%;position:fixed;top:80%;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}",".tilt.jsx-3501601935{width:15ch;margin:auto;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;border-radius:3px;box-shadow:0 0 10px 5px rgba(0,0,0,0.5);}",".tilt.jsx-3501601935:hover{background:lime;color:black;}",".tilt.jsx-3501601935>.tilt-element-inner-text.jsx-3501601935{-webkit-transform:translateZ(20px);-ms-transform:translateZ(20px);transform:translateZ(20px);color:white;text-align:center;border-radius:3px;box-shadow:0 0 10px 5px rgba(0,0,0,0.5);line-height:50px;font-family:avenir,arial,tahoma,monospace;position:absolute;width:50px;height:50px;}",".tilt.jsx-3501601935>.tilt-element-inner-text.middle.jsx-3501601935{top:10px;left:25px;background:rgba(0,0,255,0.75);}",".tilt.jsx-3501601935>.tilt-element-inner-text.top-right.jsx-3501601935{top:-30px;right:-10px;background:rgba(255,255,0,0.2);}","#link-to-github-profile.jsx-3501601935{padding:0;}","#button-notification.jsx-3501601935{position:absolute;left:-9999px;}",".draggable-offline.jsx-3501601935{width:26ch;border-radius:0 !important;}","#ascii-art.jsx-3501601935{display:none;}","#ascii-art.jsx-3501601935>p.jsx-3501601935{padding:0;margin:-1px;color:black !important;}",".sequence.jsx-3501601935{font-size:3.5vw;font-weight:500;margin:0.25em auto;width:33ch;border:none;-webkit-transition:0.25s;transition:0.25s;}",".sequence.jsx-3501601935 span.jsx-3501601935{padding-left:0;padding-right:0;border-radius:0;margin:0;}",".sequence.jsx-3501601935 span.jsx-3501601935:first-child{padding-left:10px;border-radius:10px 0 0 10px;}",".sequence.jsx-3501601935 span.jsx-3501601935:last-child{padding-right:10px;border-radius:0 10px 10px 0;}",".sequence.jsx-3501601935:hover span.jsx-3501601935{background:lime;color:black;}",".sequence.jsx-3501601935:hover span.jsx-3501601935:nth-child(1){-webkit-transition-delay:0.1s;transition-delay:0.1s;}",".sequence.jsx-3501601935:hover span.jsx-3501601935:nth-child(2){-webkit-transition-delay:0.2s;transition-delay:0.2s;}",".sequence.jsx-3501601935:hover span.jsx-3501601935:nth-child(3){-webkit-transition-delay:0.3s;transition-delay:0.3s;}",".sequence.jsx-3501601935:hover~#button-group.jsx-3501601935 button[id].jsx-3501601935{background:lime;color:black;}",".sequence.jsx-3501601935:hover~#button-group.jsx-3501601935 button[id].jsx-3501601935:nth-of-type(1){-webkit-transition-delay:0.4s;transition-delay:0.4s;}",".sequence.jsx-3501601935:hover~#button-group.jsx-3501601935 button[id].jsx-3501601935:nth-of-type(2){-webkit-transition-delay:0.5s;transition-delay:0.5s;}",".sequence.jsx-3501601935:hover~#button-group.jsx-3501601935 button[id].jsx-3501601935:nth-of-type(3){-webkit-transition-delay:0.6s;transition-delay:0.6s;}",".sequence.jsx-3501601935:hover~#button-group.jsx-3501601935 button[id].jsx-3501601935:nth-of-type(4){-webkit-transition-delay:0.7s;transition-delay:0.7s;}",".sequence.jsx-3501601935:hover~#button-group.jsx-3501601935 button[id].jsx-3501601935:nth-of-type(5){-webkit-transition-delay:0.8s;transition-delay:0.8s;}",".sequence.jsx-3501601935:hover~#button-group.jsx-3501601935 button[id].jsx-3501601935:nth-of-type(6){-webkit-transition-delay:0.9s;transition-delay:0.9s;}","@media only screen and (max-device-width:640px){button.jsx-3501601935{min-width:48px;min-height:48px;margin:10px;}#secret-button.jsx-3501601935{left:0;bottom:-10vh;}.sequence.jsx-3501601935{font-size:medium;text-align:justify;}}"];h.__hash="3501601935";var m=h;function f(){var e=Object(s.useState)(!0),t=e[0],n=e[1],r=Object(s.useRef)();return Object(o.jsx)(o.Fragment,{children:t&&Object(o.jsx)("button",{className:"mystery-spawn-button",ref:r,onMouseOver:function(){r.current.style.color="transparent",r.current.style.width=0,r.current.style.height=0,r.current.style.padding=0,setTimeout((function(){n(!1)}),500)},children:"?"})})}function b(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=Object(s.useState)(!1),r=o[0],a=o[1];function i(t){t.key===e&&a(!0)}function c(n){n.key===e&&(a(!1),t())}return Object(s.useEffect)((function(){return window.addEventListener("keydown",i),window.addEventListener("keyup",c),function(){window.removeEventListener("keydown",i),window.removeEventListener("keyup",c)}}),n),r}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(o=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(c){r=!0,a=c}finally{try{o||null==i.return||i.return()}finally{if(r)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e){var t=j(function(e){var t=document.querySelector(e).getBoundingClientRect(),n=t.left,o=t.top;return[n,o]}(e),2),n=t[0],o=t[1],r=function(e){var t=Math.max(document.documentElement.clientWidth,window.innerWidth||0);return g(e,0,t,150,400)}(n),a=function(e){var t=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return g(e,0,t,0,.1)}(o),s=g(a,0,.5,0,100);s=Math.round(s);var i=g(r,150,400,0,359);i=Math.round(i);var c="hsl("+String(i)+","+String(s)+"%, 50%)";document.querySelector(e).style.background=c}function g(e,t,n,o,r){var a=(e-t)*((r-o)/(n-t))+o;return Math.min(Math.max(a,o),r)}function w(e,t){return Math.floor(Math.random()*t+e)}function y(){window.absolutelyAwesomeYouFoundAHiddenCommand=function(){alert("Cool!")},window.goToGame=function(){window.location.href="/phaser-game"},window.goToSNPromptGenerator=function(){window.location.href="https://sn-prompt-generator.surge.sh"},window.goToCRPrep=function(){window.location.href="https://cr-prep.glitch.me"},window.skew=function(){document.body.style.transform="skewY(-10deg)",document.body.style.transformOrigin="150% top",document.body.style.background="black",setTimeout((function(){document.body.style.transform="",document.body.style.background="transparent",document.body.style.top="0"}),1e3)},window.slides=function(){location="https://simple-slides.surge.sh"},window.home=function(){location.reload()},window.wowYouFoundAHiddenCommand=window.absolutelyAwesomeYouFoundAHiddenCommand,window.game=window.goToGame,window.snpg=window.goToSNPromptGenerator,window.cr=window.goToCRPrep,console.log("%c If you're online, \n all of these commands will work: %c\n  \n  %cskew()%c\n  \n  %cgame()%c\n  \n  %cslides()%c\n  \n  %chome()%c\n  \n  You can see my auto-generated GitHub r\xe9sum\xe9 here: \n  %chttps://resume.github.io/?hchiam%c\n  ","color: blue; background: lightgrey;","","color: lime; background: black; padding: 5px 10px;","","color: lime; background: black; padding: 5px 10px;","","color: lime; background: black; padding: 5px 10px;","","color: lime; background: black; padding: 5px 10px;","","color: lime;",""),function(){if(window.addEventListener){var e=[];window.addEventListener("keydown",(function(t){var n=t.which||t.keyCode;e.push(n),e.toString().indexOf("38,38,40,40,37,39,37,39,66,65")>=0&&(goToGame(),e=[])}),!0)}}()}function _(e){return window.scrollTo(0,e.current.offsetTop)}var v=n("Vvt1"),O=n.n(v),k=O()((function(){return n.e(11).then(n.bind(null,"W9MN"))}),{loading:function(){return Object(o.jsx)("p",{children:"..."})},loadableGenerated:{webpack:function(){return["W9MN"]},modules:["../components/WaymoDemo"]}}),C=O()((function(){return n.e(12).then(n.bind(null,"bUhm"))}),{loading:function(){return Object(o.jsx)("p",{children:"..."})},loadableGenerated:{webpack:function(){return["bUhm"]},modules:["../components/VerilyDemo"]}});function N(){var e=Object(s.useState)(!1),t=e[0],n=e[1],r=Object(s.useState)(!0),i=r[0],u=r[1],h=Object(s.useState)(!1),p=h[0],j=h[1],g=Object(s.useState)(!1),v=g[0],O=g[1],N=Object(s.useState)(!1),S=N[0],T=N[1],E=Object(s.useState)(""),M=(E[0],E[1]),I=Object(s.useState)(""),q=I[0],P=I[1],D=Object(s.useRef)(),H=Object(s.useRef)(null),A=Object(s.useRef)(null),R=Object(s.useState)(!1),L=R[0],B=R[1],W=Object(s.useState)(!1),G=W[0],Z=W[1],K=Object(s.useState)(0),X=K[0],z=K[1],F=Object(s.useState)(!1),V=F[0],Y=F[1],U=Object(s.useState)(!1),J=U[0],Q=U[1],$=Object(s.useState)(!1),ee=$[0],te=$[1],ne=Object(s.useState)(!1),oe=ne[0],re=ne[1],ae=Object(s.useState)(!0),se=ae[0],ie=ae[1],ce=Object(s.useState)(!0),le=ce[0],ue=ce[1];function de(){fe(),T(!0),P("To stop audio, click off or stop dragging."),x("#draggable")}function he(){T(!1),P("")}function me(){fe(),T(!0),x("#draggable")}function fe(){document.documentElement.clientWidth<640||(B(!0),B(!0),document.getElementById("a").innerText=" A ",document.getElementById("s").innerText=" S ",document.getElementById("d").innerText=" D ",document.getElementById("f").innerText=" F ",document.getElementById("c").innerText=" C ",document.getElementById("space").innerText=" SPACE ")}function be(){L&&z(X+1)}function pe(){L&&z(X-1)}function je(){L&&z(0)}function xe(){L&&z(X+30)}function ge(){Z(!G),B(!0)}function we(){L&&(O(!0),P("Hint: refresh the page."),Y(!0),document.querySelectorAll("button, img, #hint, h1, p, span").forEach((function(e){var t=e.clientWidth,n=e.clientHeight,o=w(0,window.innerWidth-t),r=w(0,window.innerHeight-n);e.style.position="absolute",e.style.left=o+"px",e.style.top=r+"px"})),Q(!0))}return b("a",be,[X,L,G]),b("s",pe,[X,L,G]),b("d",je,[X,L,G]),b("f",xe,[X,L,G]),b("c",ge,[L,G]),b(" ",we,[L,G]),Object(s.useEffect)((function(){var e;document.addEventListener("mousemove",(function(e){var t=document.getElementById("cursor-shadow");t.style.left=e.pageX+"px",t.style.top=e.pageY+"px"})),setTimeout((function(){var e;n(!0),e=document.getElementById("extra-info"),navigator.serviceWorker&&(e.innerText="(BTW: This page works offline!)")}),10),setTimeout((function(){!function(){for(var e=Array.prototype.slice.call(document.querySelectorAll("button")),t=0;t<e.length;t++)e[t].classList.add("view-resize-animation")}(),document.getElementById("button-notification").innerText="Within scrolling view, there are six buttons in a group."}),1e3),setTimeout((function(){!function(){window.screen.availWidth>640?(P("Hint: hit Tab, or Shift + Tab a few times."),M("Hit Enter or Spacebar!")):(P("Hint: scroll down"),M("Secret button!"));O(!0)}()}),2e3),y(),function(e,t,n,o,r,a){var s={left:n.offsetLeft+"px",top:n.offsetTop+"px"};e.setAs2DArea(n,o,!1),t(n,{mouseUpCallback:r,keyboardMoveCallback:a}),n.style.left=s.left,n.style.top=s.top,document.body.addEventListener("mouseup",(function(){e.stop()}))}(_2DNote,makeElementDraggable,document.getElementById("draggable"),de,he,me),null===(e=UniversalTilt)||void 0===e||e.init({elements:document.querySelectorAll(".tilt"),settings:{},callbacks:{}}),function(e){if(window.history){var t=window.location.origin+"/?"+e;window.history.pushState({path:t},"",t)}}("can-you-find-all-the-hidden-features?")}),[X]),Object(o.jsxs)("div",{className:"jsx-".concat(m.__hash)+" "+(d.a.container||""),children:[Object(o.jsxs)(c.a,{children:[Object(o.jsx)("title",{className:"jsx-".concat(m.__hash),children:"Howard Chiam"}),Object(o.jsx)("meta",{name:"description",content:"Howard's Portfolio Central",className:"jsx-".concat(m.__hash)}),Object(o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1",className:"jsx-".concat(m.__hash)}),Object(o.jsx)("meta",{name:"theme-color",content:"rgb(32,32,32)",className:"jsx-".concat(m.__hash)}),Object(o.jsx)("link",{rel:"shortcut icon",href:"htc.png",className:"jsx-".concat(m.__hash)}),Object(o.jsx)(l,{})]}),Object(o.jsxs)("main",{className:"jsx-".concat(m.__hash),children:[Object(o.jsx)("noscript",{className:"jsx-".concat(m.__hash),children:Object(o.jsxs)("div",{id:"noscript",className:"jsx-".concat(m.__hash),children:[Object(o.jsx)("p",{className:"jsx-".concat(m.__hash),children:"Please enable JavaScript to learn more about Howard"}),Object(o.jsxs)("p",{className:"jsx-".concat(m.__hash),children:["Or visit",Object(o.jsx)("a",{id:"link-to-github-profile",href:"https://github.com/hchiam",target:"_blank",className:"jsx-".concat(m.__hash),children:"Howard's GitHub profile"})]})]})}),i&&Object(o.jsx)("button",{id:"secret-button",onClick:function(){return j(!0),u(!1),O(!1),void setTimeout((function(){var e;O(!0),null===D||void 0===D||null===(e=D.current)||void 0===e||e.focus(),P("Hint: drag the icon to move things around.")}),100)},className:"jsx-".concat(m.__hash),children:"Hit Enter or Spacebar!"}),Object(o.jsxs)("section",{id:"main",className:"jsx-".concat(m.__hash)+" "+"center ".concat(d.a.mainStart," ").concat(t&&d.a.mainSlideIn),children:[Object(o.jsx)("div",{id:"cover","aria-hidden":"true",className:"jsx-".concat(m.__hash)}),Object(o.jsx)("h1",{"data-tilt":"","data-scale":"1.2","data-shine":"true","data-shine-opacity":"0.5","data-shine-save":"true","tilt-change":"",title:"This is my name",className:"jsx-".concat(m.__hash)+" tilt",children:"Howard Chiam"}),Object(o.jsxs)("p",{className:"jsx-".concat(m.__hash)+" sequence",children:[Object(o.jsx)("span",{role:"presentation",className:"jsx-".concat(m.__hash),children:"Learning. "}),Object(o.jsx)("span",{role:"presentation",className:"jsx-".concat(m.__hash),children:"Languages. "}),Object(o.jsx)("span",{role:"presentation",className:"jsx-".concat(m.__hash),children:"Other stuff."})]}),Object(o.jsxs)("div",{id:"button-group",className:"jsx-".concat(m.__hash),children:[Object(o.jsx)("div",{id:"button-notification",role:"status","aria-live":"polite",className:"jsx-".concat(m.__hash)}),Object(o.jsxs)("button",{id:"a",onClick:function(){return L?be():window.open("https://github.com/hchiam","_blank")},className:"jsx-".concat(m.__hash)+" "+((V?"commandKey":"")||""),children:["GitHub",Object(o.jsx)("svg",{"view-box":"0 0 200 200",className:"jsx-".concat(m.__hash),children:Object(o.jsx)("path",{transform:"translate(100 100)",d:"M17.7,-34C26.3,-25.7,38.9,-27.7,51.1,-23.8C63.2,-19.8,74.8,-9.9,79.8,2.9C84.8,15.7,83.1,31.4,72.9,38.7C62.7,46,44,44.9,30.5,53.1C16.9,61.2,8.4,78.6,-4,85.4C-16.3,92.3,-32.7,88.6,-37.8,75.6C-43,62.6,-36.9,40.2,-43,26C-49.1,11.9,-67.4,5.9,-67.7,-0.2C-68.1,-6.3,-50.5,-12.7,-39.7,-18.7C-28.9,-24.8,-24.9,-30.5,-19.4,-40.6C-14,-50.7,-7,-65.2,-1.2,-63.1C4.6,-61,9.1,-42.3,17.7,-34Z",className:"jsx-".concat(m.__hash)})})]}),Object(o.jsxs)("button",{id:"s",onClick:function(){return L?pe():window.open("https://codepen.io/hchiam","_blank")},className:"jsx-".concat(m.__hash)+" "+((V?"commandKey":"")||""),children:["CodePen",Object(o.jsx)("svg",{"view-box":"0 0 200 200",className:"jsx-".concat(m.__hash),children:Object(o.jsx)("path",{transform:"translate(100 100)",d:"M27.3,-47.1C39.9,-40.1,57.7,-41.8,68.6,-35.4C79.5,-29,83.6,-14.5,82.8,-0.5C82,13.6,76.3,27.2,68.3,38.8C60.4,50.4,50.3,60,38.6,59.3C26.8,58.6,13.4,47.5,1.4,45.2C-10.6,42.8,-21.3,49,-33.1,49.8C-44.9,50.5,-57.9,45.7,-67.3,36.5C-76.7,27.3,-82.5,13.6,-76.1,3.7C-69.7,-6.3,-51.1,-12.5,-42.3,-22.7C-33.4,-32.9,-34.4,-47,-28.9,-58.1C-23.5,-69.2,-11.8,-77.4,-2.2,-73.6C7.4,-69.8,14.8,-54.1,27.3,-47.1Z",className:"jsx-".concat(m.__hash)})})]}),Object(o.jsxs)("button",{id:"d",onClick:function(){return L?je():window.open("https://glitch.com/@hchiam","_blank")},className:"jsx-".concat(m.__hash)+" "+((V?"commandKey":"")||""),children:["Glitch",Object(o.jsx)("svg",{"view-box":"0 0 200 200",className:"jsx-".concat(m.__hash),children:Object(o.jsx)("path",{transform:"translate(100 100)",d:"M31.5,-61.6C38.3,-50.6,39.6,-37.1,41.2,-26.4C42.7,-15.8,44.5,-7.9,49.7,3C54.8,13.8,63.3,27.6,61.3,37.6C59.4,47.7,47.1,53.9,35.1,57.1C23.1,60.4,11.6,60.7,-1.2,62.8C-14,64.9,-28.1,68.9,-34.5,62.5C-41,56.1,-39.9,39.3,-45.7,27.1C-51.6,15,-64.2,7.5,-64.9,-0.4C-65.6,-8.3,-54.3,-16.5,-45.3,-23.2C-36.3,-29.8,-29.7,-34.9,-22.5,-45.6C-15.4,-56.4,-7.7,-72.8,2.3,-76.8C12.3,-80.8,24.7,-72.5,31.5,-61.6Z",className:"jsx-".concat(m.__hash)})})]}),Object(o.jsxs)("button",{id:"f",onClick:function(){return L?xe():window.open("https://ca.linkedin.com/in/howardchiam","_blank")},className:"jsx-".concat(m.__hash)+" "+((V?"commandKey":"")||""),children:["LinkedIn",Object(o.jsx)("svg",{"view-box":"0 0 200 200",className:"jsx-".concat(m.__hash),children:Object(o.jsx)("path",{transform:"translate(100 100)",d:"M21.1,-36.2C26.2,-33.7,28.4,-25.6,31,-18.7C33.5,-11.7,36.6,-5.9,43.6,4.1C50.6,14,61.6,28,59.4,35.5C57.1,43.1,41.6,44.2,29.5,49.2C17.4,54.2,8.7,63.2,-1.5,65.9C-11.8,68.6,-23.6,65,-28.5,55.8C-33.4,46.6,-31.4,31.8,-40.5,21.6C-49.6,11.3,-69.7,5.7,-69,0.4C-68.3,-4.8,-46.7,-9.7,-37.2,-19C-27.6,-28.4,-30,-42.3,-25.8,-45.3C-21.6,-48.4,-10.8,-40.6,-1.4,-38.2C8,-35.8,16,-38.7,21.1,-36.2Z",className:"jsx-".concat(m.__hash)})})]}),Object(o.jsxs)("button",{id:"c",onClick:function(){return L?ge():window.open("https://hchiam.blogspot.com","_blank")},className:"jsx-".concat(m.__hash)+" "+((V?"commandKey":"")||""),children:["Blog",Object(o.jsx)("svg",{"view-box":"0 0 200 200",className:"jsx-".concat(m.__hash),children:Object(o.jsx)("path",{transform:"translate(100 100)",d:"M43.8,-77.3C55,-69.4,61.1,-54.1,67,-40C72.8,-25.9,78.5,-12.9,79.1,0.3C79.7,13.6,75.2,27.2,66.5,36.5C57.8,45.7,44.9,50.6,33.2,50.2C21.4,49.7,10.7,43.9,-2.8,48.8C-16.3,53.6,-32.6,69.2,-40,67.1C-47.3,65,-45.7,45.2,-46.7,31.1C-47.7,17,-51.3,8.5,-53.7,-1.3C-56,-11.2,-57,-22.3,-55.2,-35.2C-53.5,-48,-49,-62.6,-39.4,-71.4C-29.7,-80.2,-14.9,-83.2,0.7,-84.5C16.3,-85.8,32.6,-85.2,43.8,-77.3Z",className:"jsx-".concat(m.__hash)})})]}),Object(o.jsxs)("button",{id:"space",onClick:function(){return L?we():window.open("https://www.memrise.com/user/hchiam/courses/learning","_blank")},className:"jsx-".concat(m.__hash)+" "+((V?"commandKey":"")||""),children:["Memrise",Object(o.jsx)("svg",{"view-box":"0 0 200 200",className:"jsx-".concat(m.__hash),children:Object(o.jsx)("path",{transform:"translate(100 100)",d:"M23.1,-40.7C33.5,-33.9,48.1,-35,55.1,-29.6C62.2,-24.1,61.7,-12.1,58.7,-1.7C55.8,8.6,50.3,17.3,45.2,26C40.1,34.8,35.2,43.6,27.7,51.8C20.2,60,10.1,67.4,1.1,65.6C-8,63.8,-16,52.7,-30,48.3C-44.1,43.9,-64.2,46.3,-72.9,39.4C-81.5,32.4,-78.8,16.2,-72.5,3.7C-66.1,-8.9,-56.2,-17.8,-48.1,-25.8C-40,-33.7,-33.8,-40.8,-26.1,-49.1C-18.4,-57.5,-9.2,-67.1,-1.4,-64.6C6.3,-62.1,12.6,-47.4,23.1,-40.7Z",className:"jsx-".concat(m.__hash)})})]}),Object(o.jsx)("img",{id:"draggable",src:"htc.png",alt:"Howard signature icon",width:"100px",onMouseLeave:function(){G||(B(!1),document.getElementById("a").innerText=" GitHub ",document.getElementById("s").innerText=" CodePen ",document.getElementById("d").innerText=" Glitch ",document.getElementById("f").innerText=" LinkedIn ",document.getElementById("c").innerText=" Blog ",document.getElementById("space").innerText=" Memrise ")},tabIndex:0,className:"jsx-".concat(m.__hash)+" shake"}),Object(o.jsx)("div",{id:"game-container",className:"jsx-".concat(m.__hash),children:function(){for(var e=[],t=0;t<X;t++)e.push(Object(o.jsx)(f,{},t));return e}()})]}),v&&Object(o.jsx)("div",{id:"hint",role:"status","aria-live":"polite",style:{color:S?"lime":""},className:"jsx-".concat(m.__hash),children:q}),Object(o.jsx)("p",{id:"extra-info",className:"jsx-".concat(m.__hash)}),p&&Object(o.jsx)("div",{id:"learning-link",className:"jsx-".concat(m.__hash),children:Object(o.jsxs)("p",{className:"jsx-".concat(m.__hash),children:["Here are things I've been learning and working on:\xa0",Object(o.jsx)("button",{id:"go-to-learning",ref:D,"aria-label":"link to my learning repo",onClick:function(){return window.open("https://github.com/hchiam/learning#--","_blank")},className:"jsx-".concat(m.__hash),children:"https://github.com/hchiam/learning"})]})})]}),Object(o.jsxs)("section",{id:"demos",className:"jsx-".concat(m.__hash)+" "+("transparent-background "+(J?"d-none ":"")||!1),children:[Object(o.jsxs)("section",{className:"jsx-".concat(m.__hash)+" demo transparent-background",children:[Object(o.jsx)("button",{id:"waymo",onClick:function(){return function(e){e?(ie(!1),ue(!0),re(!e),setTimeout((function(){_(H)}),100),setTimeout((function(){te(!0)}),400)):(ue(!0),te(!1),setTimeout((function(){_(H)}),100),setTimeout((function(){ie(!0)}),400))}(!ee)},className:"jsx-".concat(m.__hash)+" white-text waymo-blue-to-green black-text-outline",children:"AV fleet panel (MOCK)"}),Object(o.jsx)("div",{ref:H,className:"jsx-".concat(m.__hash)+" "+("collapsible "+(ee?"showWaymoDemo ":"collapse ")+(se?"deferred ":"")||!1),children:Object(o.jsx)(k,{})})]}),Object(o.jsxs)("section",{className:"jsx-".concat(m.__hash)+" demo transparent-background",children:[Object(o.jsx)("button",{id:"verily",onClick:function(){return function(e){e?(ue(!1),ie(!0),te(!e),setTimeout((function(){_(A)}),100),setTimeout((function(){re(!0)}),400)):(ie(!0),re(!1),setTimeout((function(){_(A)}),100),setTimeout((function(){ue(!0)}),400))}(!oe)},className:"jsx-".concat(m.__hash)+" white-text verily-red-to-blue black-text-outline",children:"EMR dashboard (MOCK)"}),Object(o.jsx)("div",{ref:A,className:"jsx-".concat(m.__hash)+" "+("collapsible "+(oe?"showVerilyDemo ":"collapse ")+(le?"deferred ":"")||!1),children:Object(o.jsx)(C,{showVerilyDemo:oe})})]})]}),Object(o.jsx)("div",{id:"cursor-shadow",className:"jsx-".concat(m.__hash)})]}),Object(o.jsx)(a.a,{id:m.__hash,children:m})]})}},Vvt1:function(e,t,n){e.exports=n("a6RD")},a6RD:function(e,t,n){"use strict";var o=n("oI91");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.__esModule=!0,t.noSSR=c,t.default=function(e,t){var n=s.default,o={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=a(a({},o),e));if(o=a(a({},o),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(o.render=function(t,n){return e.render(n,t)}),e.modules)){n=s.default.Map;var r={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?r[e]=t:r[e]=function(){return t.then((function(e){return e.default||e}))}})),o.loader=r}o.loadableGenerated&&delete(o=a(a({},o),o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr){if(!o.ssr)return delete o.ssr,c(n,o);delete o.ssr}return n(o)};i(n("q1tI"));var s=i(n("2qu3"));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return delete t.webpack,delete t.modules,e(t)}},jwwS:function(e,t,n){"use strict";var o;t.__esModule=!0,t.LoadableContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext(null);t.LoadableContext=r},vRNQ:function(e,t,n){e.exports={mainStart:"Home_mainStart__XJBE0",mainSlideIn:"Home_mainSlideIn__1Xp4m"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2]]]);