(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[556],{2066:function(n,o,e){"use strict";function t(){window.absolutelyAwesomeYouFoundAHiddenCommand=function(){alert("Cool!")},window.goToGame=function(){window.location.href="/phaser-game"},window.goToSNPromptGenerator=function(){window.location.href="https://sn-prompt-generator.surge.sh"},window.goToCRPrep=function(){window.location.href="https://cr-prep.glitch.me"},window.skew=function(){document.body.style.transform="skewY(-10deg)",document.body.style.transformOrigin="150% top",document.body.style.background="black",setTimeout((function(){document.body.style.transform="",document.body.style.background="transparent",document.body.style.top="0"}),1e3)},window.slides=function(){location="https://simple-slides.surge.sh"},window.gamepadHardware=function(){window.location.href="/gamepad-hardware-test"},window.home=function(){window.location.href="/"},window.wowYouFoundAHiddenCommand=window.absolutelyAwesomeYouFoundAHiddenCommand,window.game=window.goToGame,window.snpg=window.goToSNPromptGenerator,window.cr=window.goToCRPrep,console.log("%c If you're online, \n all of these commands will work: %c\n  \n  %cskew()%c\n  \n  %cgame()%c\n  \n  %cslides()%c\n\n  %cgamepadHardware()%c\n  \n  %chome()%c\n  \n  You can see my auto-generated GitHub r\xe9sum\xe9 here: \n  %chttps://resume.github.io/?hchiam%c\n  ","color: blue; background: lightgrey;","","color: lime; background: black; padding: 5px 10px;","","color: lime; background: black; padding: 5px 10px;","","color: lime; background: black; padding: 5px 10px;","","color: lime; background: black; padding: 5px 10px;","","color: lime; background: black; padding: 5px 10px;","","color: lime;",""),function(){if(window.addEventListener){var n=[];window.addEventListener("keydown",(function(o){var e=o.which||o.keyCode;n.push(e),n.toString().indexOf("38,38,40,40,37,39,37,39,66,65")>=0&&(goToGame(),n=[])}),!0)}}()}e.d(o,{Z:function(){return t}})},7570:function(n,o,e){"use strict";e.r(o);var t=e(5893),a=e(7294),c=e(2066);o.default=function(){return(0,a.useEffect)((function(){var n,o,e;(0,c.Z)(),window.addEventListener("gamepaddisconnected",(function(n){console.log("\ud83c\udfae\u274c A gamepad was disconnected:",n),clearInterval(e)})),window.addEventListener("gamepadconnected",(function(a){console.log("\ud83c\udfae\u2705 A gamepad was connected:",a),n=a.gamepad,o=a.gamepad.buttons,clearInterval(e),e=setInterval((function(){var e=n.axes.map((function(n){return Math.round(100*n)/100})),a=o.map((function(n,o){return{i:o,on:n.pressed||n.touched}})).filter((function(n){return n.on})).map((function(n){return n.i}));a.length&&console.log("Buttons on:",a),document.querySelector("#buttons_on").innerText=JSON.stringify(a),(0===t.length||t.filter((function(n,o){return n!==e[o]})).length)&&(console.log("Axes:",e),t=e,document.querySelector("#axes").innerHTML=e.map((function(n){return'<meter value="'.concat(n,'" min="-1" max="1" class="py-0"></meter>')})).join(""))}),100);var c=a.gamepad.axes;console.log("gamepad",n),console.log("".concat(o.length," buttons")),console.log("".concat(c.length," axes")),document.querySelector("#data").innerText="gamepad ".concat(n.id,": ").concat(JSON.stringify(n),"\n").concat(o.length," buttons\n").concat(c.length," axes (for directional buttons)"),document.querySelectorAll(".hide").forEach((function(n){return n.classList.remove("hide")}))}));var t=[]}),[]),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Press any key on your physical gamepad to start."}),(0,t.jsx)("img",{src:"https://raw.githubusercontent.com/hchiam/phaserGame/master/retrolink_usb_controller.jpg",alt:"Gamepad controller",height:"200"}),(0,t.jsxs)("p",{className:"hide",children:["Buttons on: ",(0,t.jsx)("span",{id:"buttons_on"})]}),(0,t.jsx)("p",{className:"hide pb-0 mb-0",children:"Axes (directional buttons):"}),(0,t.jsx)("p",{id:"axes",className:"p-0 mt-0"}),(0,t.jsx)("p",{id:"data"})]})}},8487:function(n,o,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gamepad-hardware-test",function(){return e(7570)}])}},function(n){n.O(0,[774,888,179],(function(){return o=8487,n(n.s=o);var o}));var o=n.O();_N_E=o}]);