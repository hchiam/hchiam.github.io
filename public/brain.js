setListeners();
function setListeners() {
  document.body.addEventListener("mouseup", stopNotes);

  if (document.getElementById("preferred-icon")) {
    document
      .getElementById("preferred-icon")
      .addEventListener("error", imageFallback);
  }

  $(document).ready(function () {
    $("#draggable").draggable({
      start: function (event, ui) {
        showGameButtons();
        playNotes();
      },
      drag: function () {
        adjustNotes();
      },
      stop: function () {
        stopNotes();
      },
    });
  });
}

const mysterySpawnButton = "<button class='mystery-spawn-button'>?</button>";

/**
 * use delegated event handling to dynamically add event listeners
 * to children elements that don't exist yet:
 */
$(document).on("focus mouseover", ".mystery-spawn-button", function () {
  $(this).text("").css({
    width: 0,
    height: 0,
    padding: 0,
  });
  var t = this;
  setTimeout(function () {
    t.parentNode.removeChild(t);
  }, 500);
});

$(document).keydown(function (e) {
  if (gameOn) {
    if (e.keyCode === 65) {
      // a
      $("#game-container").append(mysterySpawnButton);
    } else if (e.keyCode === 83) {
      // s
      $("#game-container *:last-child").remove();
    } else if (e.keyCode === 68) {
      // d
      $("#game-container *").remove();
    } else if (e.keyCode === 70) {
      // f
      $("#game-container *").remove();
      for (let i = 0; i < 30; i++) {
        $("#game-container").append(mysterySpawnButton);
      }
    } else if (e.keyCode === 67) {
      // c
      continueGame = !continueGame;
      if (!continueGame) {
        // game controls off:
        $("#draggable").draggable("destroy");
        resetGameButtons();
        gameOn = false;
      }
    }
  }
  if (turnedGameOnOnce && e.keyCode === 32) {
    // space
    showHint();
    $("#hint").text("Hint: refresh the page.");
    childrenExodus("section");
    childrenExodus("#draggable");
    makeCommandKeysConspicuous();
    scatterSpace();
  }
});

function childrenExodus(parentSelector) {
  let children = $(parentSelector + " *").detach();
  $("body").append(children);
  $(parentSelector).remove();
}

function makeCommandKeysConspicuous() {
  $('button:contains(" A ")').addClass("commandKey");
  $('button:contains(" S ")').addClass("commandKey");
  $('button:contains(" D ")').addClass("commandKey");
  $('button:contains(" F ")').addClass("commandKey");
  $('button:contains(" C ")').addClass("commandKey");
  $('button:contains(" SPACE ")').addClass("commandKey");
}

let scatteredSpace = false;
function scatterSpace() {
  $("button, img, #hint, h1, p, span").each(function () {
    const myWidth = $(this).width();
    const myHeight = $(this).height();
    const randomleft = getRandomNumber(0, window.innerWidth - myWidth);
    const randomtop = getRandomNumber(0, window.innerHeight - myHeight);
    $(this)
      .css({
        position: "absolute",
      })
      .animate(
        {
          left: randomleft + "px",
          top: randomtop + "px",
        },
        "fast",
        "swing"
      );
  });
  scatteredSpace = true;
}

function imageFallback() {
  $("img").remove();
  $("#ascii-art").show();
}

function disableOldStyles() {
  $('link[href="style.css"]').prop("disabled", true);
  $('link[href="/style.css"]').prop("disabled", true);
  $('link[href="minified-style.css"]').prop("disabled", true);
}

const tilt = UniversalTilt.init({
  elements: document.querySelectorAll(".tilt"),
  settings: {
    // options...
  },
  callbacks: {
    // callbacks...
  },
});

(function detectKonamiCode() {
  function onKonamiCode() {
    goToGame();
  }
  // reference: https://www.sitepoint.com/jquery-konami-code-listener
  if (window.addEventListener) {
    var seq = [];
    var konamiAsciiSequence = "38,38,40,40,37,39,37,39,66,65";
    window.addEventListener(
      "keydown",
      function (event) {
        var key = event.which || event.keyCode;
        seq.push(key);
        var hitKonamiSequence =
          seq.toString().indexOf(konamiAsciiSequence) >= 0;
        if (hitKonamiSequence) {
          onKonamiCode();
          seq = [];
        }
      },
      true
    );
  }
})();

const wowYouFoundAHiddenCommand = absolutelyAwesomeYouFoundAHiddenCommand;
function absolutelyAwesomeYouFoundAHiddenCommand() {
  alert("Cool!");
}

function goToGame() {
  window.location.href = "/phaser-game/index.html";
}

function goToSNPromptGenerator() {
  window.location.href = "https://sn-prompt-generator.surge.sh";
  // $(function () {
  //   $("body").load(
  //     "https://cdn.jsdelivr.net/gh/hchiam/sn-prompt-generator@master/index.html",
  //     function () {
  //       disableOldStyles();
  //       $("head").append(
  //         '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hchiam/sn-prompt-generator@master/style.css">'
  //       );
  //       $("head").append(
  //         '<script src="https://cdn.jsdelivr.net/gh/hchiam/sn-prompt-generator@master/script.js"></script>'
  //       );
  //     }
  //   );
  // });
}

function goToCRPrep() {
  window.location.href = "https://cr-prep.glitch.me";
  // $(function () {
  //   $("body").load(
  //     "https://cdn.jsdelivr.net/gh/hchiam/cr-prep@master/index.html #button-bar, #checkbox-box, #hover-info",
  //     function () {
  //       disableOldStyles();
  //       $("head").append(
  //         '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hchiam/cr-prep@master/style.css">'
  //       );
  //       $("head").append(
  //         '<script src="https://cdn.jsdelivr.net/gh/hchiam/cr-prep@master/download-page-as-image.js"></script>'
  //       );
  //       $("head").append(
  //         '<script src="https://cdn.jsdelivr.net/gh/hchiam/cr-prep@master/script.js"></script>'
  //       );
  //       $("head").append(
  //         '<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>'
  //       );
  //     }
  //   );
  // });
}

function skew() {
  $("body").css({
    transform: "skewY(-10deg)",
    "transform-origin": "150% top",
    background: "black",
  });
  setTimeout(function () {
    $("body").css({
      transform: "",
      background: "transparent",
      top: "0",
    });
  }, 1000);
}

function slides() {
  location = "https://simple-slides.surge.sh";
}

function home() {
  location.reload();
}

const game = goToGame;
const snpg = goToSNPromptGenerator;
const cr = goToCRPrep;

console.log(
  `%cIf you have an internet connection,
you can enter these commands:%c

%cskew()%c

%cgame()%c

%cslides()%c

%chome()%c

You can see my auto-generated GitHub résumé here: 
%chttps://resume.github.io/?hchiam%c
`,
  "color: blue; background: lightgrey;",
  "",
  "color: lime; background: black; padding: 5px 10px;",
  "",
  "color: lime; background: black; padding: 5px 10px;",
  "",
  "color: lime; background: black; padding: 5px 10px;",
  "",
  "color: lime; background: black; padding: 5px 10px;",
  "",
  "color: lime;",
  ""
);
