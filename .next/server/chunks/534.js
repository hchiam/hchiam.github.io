"use strict";
exports.id = 534;
exports.ids = [534];
exports.modules = {

/***/ 534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ setUpConsoleFunctions)
/* harmony export */ });
function setUpConsoleFunctions() {
    window.absolutelyAwesomeYouFoundAHiddenCommand = ()=>{
        alert("Cool!");
    };
    window.goToGame = ()=>{
        window.location.href = "/phaser-game";
    };
    window.goToSNPromptGenerator = ()=>{
        window.location.href = "https://sn-prompt-generator.surge.sh";
    };
    window.goToCRPrep = ()=>{
        window.location.href = "https://cr-prep.glitch.me";
    };
    window.skew = ()=>{
        document.body.style.transform = "skewY(-10deg)";
        document.body.style.transformOrigin = "150% top";
        document.body.style.background = "black";
        setTimeout(function() {
            document.body.style.transform = "";
            document.body.style.background = "transparent";
            document.body.style.top = "0";
        }, 1000);
    };
    window.slides = ()=>{
        location = "https://simple-slides.surge.sh";
    };
    window.gamepadHardware = ()=>{
        window.location.href = "/gamepad-hardware-test";
    };
    window.home = ()=>{
        window.location.href = "/";
    };
    window.wowYouFoundAHiddenCommand = window.absolutelyAwesomeYouFoundAHiddenCommand;
    window.game = window.goToGame;
    window.snpg = window.goToSNPromptGenerator;
    window.cr = window.goToCRPrep;
    console.log(`%c If you're online, 
 all of these commands will work: %c
  
  %cskew()%c
  
  %cgame()%c
  
  %cslides()%c

  %cgamepadHardware()%c
  
  %chome()%c
  
  You can see my auto-generated GitHub résumé here: 
  %chttps://resume.github.io/?hchiam%c
  `, "color: blue; background: lightgrey;", "", "color: lime; background: black; padding: 5px 10px;", "", "color: lime; background: black; padding: 5px 10px;", "", "color: lime; background: black; padding: 5px 10px;", "", "color: lime; background: black; padding: 5px 10px;", "", "color: lime; background: black; padding: 5px 10px;", "", "color: lime;", "");
    detectKonamiCode();
    function detectKonamiCode() {
        function onKonamiCode() {
            goToGame();
        }
        // reference: https://www.sitepoint.com/jquery-konami-code-listener
        if (window.addEventListener) {
            var seq = [];
            var konamiAsciiSequence = "38,38,40,40,37,39,37,39,66,65";
            window.addEventListener("keydown", function(event) {
                var key = event.which || event.keyCode;
                seq.push(key);
                var hitKonamiSequence = seq.toString().indexOf(konamiAsciiSequence) >= 0;
                if (hitKonamiSequence) {
                    onKonamiCode();
                    seq = [];
                }
            }, true);
        }
    }
};


/***/ })

};
;