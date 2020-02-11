function slideIn(){$("section").css({position:"relative",top:"-100%"}),$("section").animate({top:0})}function advertiseOfflineAbility(){navigator.serviceWorker&&$("#extra-info").text("(BTW: This page works offline!)")}function expandButtons(){for(var t=Array.prototype.slice.call(document.querySelectorAll("button")),e=0;e<t.length;e++)t[e].classList.add("view-resize-animation")}function onDesktop(){return window.screen.availWidth>640}function showHint(){document.getElementById("hint").style.visibility="visible"}function hideHint(){document.getElementById("hint").style.visibility="hidden"}function hideSecretButton(){document.getElementById("secret-button").style.visibility="hidden"}function focusOnLearningLink(){document.querySelector("#learning-link button").focus()}function surprise(){document.getElementById("learning-link").style.visibility="visible",hideSecretButton(),hideHint(),setTimeout(()=>{showHint(),focusOnLearningLink(),$("#hint").text("Hint: drag the icon to move things around.")},100)}function getRandomNumber(t,e){return Math.floor(Math.random()*e+t)}String(window.location).startsWith("http://localhost")||"https:"===window.location.protocol||(window.location.href="https:"+window.location.href.substring(window.location.protocol.length)),setTimeout(()=>{slideIn(),advertiseOfflineAbility()},10),setTimeout(()=>{expandButtons(),document.getElementById("button-notification").innerText="Within scrolling view, there are six buttons in a group."},1e3),setTimeout(()=>{onDesktop()?(document.getElementById("hint").innerText="Hint: hit Tab, or Shift + Tab",document.getElementById("secret-button").innerText="Hit Enter or Spacebar!"):(document.getElementById("hint").innerText="Hint: scroll down",document.getElementById("secret-button").innerText="Secret button!"),showHint()},2e3),setUpGame();let gameOn=!1,turnedGameOnOnce=!1,continueGame=!1;function setUpGame(){$(document).ready((function(){document.getElementById("draggable-handle").onmouseenter=function(){(turnedGameOnOnce||onDesktop())&&($("#draggable").draggable(),hideHint(),turnedGameOnOnce&&showGameButtons())},document.getElementById("draggable-handle").onmouseleave=function(){onDesktop()&&!continueGame&&($("#draggable").draggable("destroy"),resetGameButtons(),gameOn=!1)}}))}function showGameButtons(){document.documentElement.clientWidth<640||(setUpGameButtons(),gameOn=!0,turnedGameOnOnce=!0)}function setUpGameButtons(){$('button:contains("GitHub")').text(" A ").attr("onclick","jQuery.event.trigger({ type : 'keydown', keyCode : 65 });"),$('button:contains("CodePen")').text(" S ").attr("onclick","jQuery.event.trigger({ type : 'keydown', keyCode : 83 });"),$('button:contains("Glitch")').text(" D ").attr("onclick","jQuery.event.trigger({ type : 'keydown', keyCode : 68 });"),$('button:contains("LinkedIn")').text(" F ").attr("onclick","jQuery.event.trigger({ type : 'keydown', keyCode : 70 });"),$('button:contains("Blog")').text(" C ").attr("onclick","jQuery.event.trigger({ type : 'keydown', keyCode : 67 });"),$('button:contains("Memrise")').text(" SPACE ").attr("onclick","jQuery.event.trigger({ type : 'keydown', keyCode : 32 });")}function resetGameButtons(){$('button:contains(" A ")').text("GitHub").attr("onclick","window.open('https://github.com/hchiam', '_blank');"),$('button:contains(" S ")').text("CodePen").attr("onclick","window.open('https://codepen.io/hchiam', '_blank');"),$('button:contains(" D ")').text("Glitch").attr("onclick","window.open('https://glitch.com/@hchiam', '_blank');"),$('button:contains(" F ")').text("LinkedIn").attr("onclick","window.open('https://ca.linkedin.com/in/howardchiam', '_blank');"),$('button:contains(" C ")').text("Blog").attr("onclick","window.open('https://hchiam.blogspot.com', '_blank');"),$('button:contains(" SPACE ")').text("Memrise").attr("onclick","window.open('https://www.memrise.com/user/hchiam/courses/learning', '_blank');")}const mysterySpawnButton="<button onclick=\"$(this).text('').css({background:'blue',color:'white',width:0,height:0,padding:0});var t = this;setTimeout(function(){t.parentNode.removeChild(t)}, 500);\">?</button>";function childrenExodus(t){let e=$(t+" *").detach();$("body").append(e),$(t).remove()}function makeCommandKeysConspicuous(){$('button:contains(" A ")').addClass("commandKey"),$('button:contains(" S ")').addClass("commandKey"),$('button:contains(" D ")').addClass("commandKey"),$('button:contains(" F ")').addClass("commandKey"),$('button:contains(" C ")').addClass("commandKey"),$('button:contains(" SPACE ")').addClass("commandKey")}$(document).keydown((function(t){if(gameOn)if(65===t.keyCode)$("#game-container").append(mysterySpawnButton);else if(83===t.keyCode)$("#game-container *:last-child").remove();else if(68===t.keyCode)$("#game-container *").remove();else if(70===t.keyCode){$("#game-container *").remove();for(let t=0;t<30;t++)$("#game-container").append(mysterySpawnButton)}else 67===t.keyCode&&(continueGame=!continueGame,continueGame||($("#draggable").draggable("destroy"),resetGameButtons(),gameOn=!1));turnedGameOnOnce&&32===t.keyCode&&(showHint(),$("#hint").text("Hint: refresh the page."),childrenExodus("section"),childrenExodus("#draggable"),makeCommandKeysConspicuous(),scatterSpace())}));let scatteredSpace=!1;function scatterSpace(){$("button, img, #hint, h1, p").each((function(){const t=$(this).width(),e=$(this).height(),n=getRandomNumber(0,window.innerWidth-t),o=getRandomNumber(0,window.innerHeight-e);$(this).css({position:"absolute"}).animate({left:n+"px",top:o+"px"},"fast","swing")})),scatteredSpace=!0}function imageFallback(){$("img").remove(),$("#ascii-art").show()}function disableOldStyles(){$('link[href="style.css"]').prop("disabled",!0),$('link[href="/style.css"]').prop("disabled",!0),$('link[href="minified-style.css"]').prop("disabled",!0)}function goToSNPromptGenerator(){$((function(){$("body").load("https://cdn.jsdelivr.net/gh/hchiam/sn-prompt-generator@master/index.html",(function(){disableOldStyles(),$("head").append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hchiam/sn-prompt-generator@master/style.css">'),$("head").append('<script src="https://cdn.jsdelivr.net/gh/hchiam/sn-prompt-generator@master/script.js"><\/script>')}))}))}function goToCRPrep(){$((function(){$("body").load("https://cdn.jsdelivr.net/gh/hchiam/cr-prep@master/index.html #button-bar, #checkbox-box, #hover-info",(function(){disableOldStyles(),$("head").append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hchiam/cr-prep@master/style.css">'),$("head").append('<script src="https://cdn.jsdelivr.net/gh/hchiam/cr-prep@master/download-page-as-image.js"><\/script>'),$("head").append('<script src="https://cdn.jsdelivr.net/gh/hchiam/cr-prep@master/script.js"><\/script>'),$("head").append('<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"><\/script>')}))}))}function home(){location.reload()}const snpg=goToSNPromptGenerator,cr=goToCRPrep;console.log("If you have an internet connection, \nyou can enter these commands: \n\nsnpg()\n\ncr()\n\nhome()\n");
const audioCtx=new AudioContext;let notes=[];function playNotes(){document.documentElement.clientWidth<640||($("#hint").text("To stop audio, click off or stop dragging.").show().css("color","lime"),showHint(),playNoteOfId("draggable-handle"))}function adjustNotes(){if(!(document.documentElement.clientWidth<640))for(let t in notes){const[e,n]=getCoordinates("draggable-handle"),o=getFrequencyFromX(e),i=getVolumeFromY(n);notes[t].volumeSetup.gain.value=i,notes[t].oscillator.frequency.value=o,indicateNoteWithColour("#draggable-handle",i,o)}}function indicateNoteWithColour(t,e,n){let o=normalize(e,0,.5,0,100);o=Math.round(o);let i=normalize(n,150,400,0,359);i=Math.round(i);let l="hsl("+String(i)+","+String(o)+"%, 50%)";document.querySelector(t).style.background=l}function stopNotes(){for(let t in notes){notes[t].oscillator.stop(audioCtx.currentTime)}notes=[],$("#hint").hide()}function playNoteOfId(t,e){const[n,o]=getCoordinates(t);playNote([n,o],e)}function getCoordinates(t){const e=document.getElementById(t).getBoundingClientRect();return[e.left,e.top]}function playNote([t,e],n=4){const o=getFrequencyFromX(t),i=getVolumeFromY(e),l=audioCtx.createGain();l.connect(audioCtx.destination),l.gain.value=i;const u=audioCtx.createOscillator();u.type="sine",u.frequency.value=o,u.connect(l),u.start();notes.push({oscillator:u,volumeSetup:l})}function getFrequencyFromX(t){return normalize(t,0,Math.max(document.documentElement.clientWidth,window.innerWidth||0),150,400)}function getVolumeFromY(t){return normalize(t,0,Math.max(document.documentElement.clientHeight,window.innerHeight||0),0,.1)}function normalize(t,e,n,o,i){return(t-e)*((i-o)/(n-e))+o}
$(document).on("mousemove",(function(o){$("#cursor-shadow").css({left:o.pageX,top:o.pageY})}));
