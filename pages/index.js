import { useState, useRef, useEffect } from "react";
import "react-dom";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import MysterySpawnButton from "../components/MysterySpawnButton.tsx";
import useKeyPress from "../helpers/useKeyPress.tsx";
import setUpDraggable2DNote from "../helpers/setUpDraggable2DNote.tsx";

export default function Home() {
  const [slideIn, setSlideIn] = useState(false);
  const [showSecretButton, setShowSecretButton] = useState(true);
  const [showLearningLink, setShowLearningLink] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [secretButtonText, setSecretButtonText] = useState("");
  const [hint, setHint] = useState("");
  const [gameOn, setGameOn] = useState(false);
  const [continueGame, setContinueGame] = useState(false);
  const [spawnCount, setSpawnCount] = useState(0);
  const [showCommandKeys, setShowCommandKeys] = useState(false);
  const inputRef = useRef();

  useKeyPress("a", handleA, [spawnCount, gameOn, continueGame]);
  useKeyPress("s", handleS, [spawnCount, gameOn, continueGame]);
  useKeyPress("d", handleD, [spawnCount, gameOn, continueGame]);
  useKeyPress("f", handleF, [spawnCount, gameOn, continueGame]);
  useKeyPress("c", handleC, [gameOn, continueGame]);
  useKeyPress(" ", handleSpace, [gameOn, continueGame]);

  useEffect(() => {
    setTimeout(() => {
      setSlideIn(true);
      advertiseOfflineAbility();
    }, 10);

    setTimeout(() => {
      expandButtons();
      document.getElementById("button-notification").innerText =
        "Within scrolling view, there are six buttons in a group.";
    }, 1000);

    setTimeout(() => {
      showSecretButtonInstructions();
    }, 2000);

    setUpConsoleFunctions();
    setUpDraggable2DNote(
      _2DNote,
      makeElementDraggable,
      document.getElementById("draggable"),
      callbackUponDrag,
      mouseUpCallback
    );
  }, [spawnCount]);

  function callbackUponDrag() {
    showGameButtons();
    document.getElementById("hint").style.color = "lime";
    setHint("To stop audio, click off or stop dragging.");
  }

  function mouseUpCallback() {
    setHint("");
  }

  function onDesktop() {
    return window.screen.availWidth > 640;
  }

  function advertiseOfflineAbility() {
    if (navigator.serviceWorker) {
      document.getElementById("extra-info").innerText =
        "(BTW: This page works offline!)";
    }
  }

  function getRandomNumber(start, stop) {
    const output = Math.floor(Math.random() * stop + start);
    return output;
  }

  function surprise() {
    setShowLearningLink(true);
    setShowSecretButton(false);
    setShowHint(false);
    setTimeout(() => {
      setShowHint(true);
      // a skip link. https://classroom.udacity.com/courses/ud891/lessons/7962031279/concepts/79590516900923
      inputRef.current.focus();
      setHint("Hint: drag the icon to move things around.");
    }, 100);
  }

  function expandButtons() {
    const buttons = Array.prototype.slice.call(
      document.querySelectorAll("button")
    );
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.add("view-resize-animation");
    }
  }

  function showSecretButtonInstructions() {
    if (!onDesktop()) {
      setHint("Hint: scroll down");
      setSecretButtonText("Secret button!");
    } else {
      setHint("Hint: hit Tab, or Shift + Tab a few times.");
      setSecretButtonText("Hit Enter or Spacebar!");
    }
    setShowHint(true);
  }

  function showGameButtons() {
    var hasSmallScreen = document.documentElement.clientWidth < 640;
    if (hasSmallScreen) return;

    setGameOn(true);
    setUpGameButtons();
  }

  function setUpGameButtons() {
    setGameOn(true);
    const aButton = document.getElementById("a");
    aButton.innerText = " A ";
    const sButton = document.getElementById("s");
    sButton.innerText = " S ";
    const dButton = document.getElementById("d");
    dButton.innerText = " D ";
    const fButton = document.getElementById("f");
    fButton.innerText = " F ";
    const cButton = document.getElementById("c");
    cButton.innerText = " C ";
    const spaceButton = document.getElementById("space");
    spaceButton.innerText = " SPACE ";
  }

  function resetGameButtons() {
    if (continueGame) return;
    setGameOn(false);
    const aButton = document.getElementById("a");
    aButton.innerText = " GitHub ";
    const sButton = document.getElementById("s");
    sButton.innerText = " CodePen ";
    const dButton = document.getElementById("d");
    dButton.innerText = " Glitch ";
    const fButton = document.getElementById("f");
    fButton.innerText = " LinkedIn ";
    const cButton = document.getElementById("c");
    cButton.innerText = " Blog ";
    const spaceButton = document.getElementById("space");
    spaceButton.innerText = " Memrise ";
  }

  function handleA() {
    if (!gameOn) return;
    setSpawnCount(spawnCount + 1);
  }

  function handleS() {
    if (!gameOn) return;
    setSpawnCount(spawnCount - 1);
  }

  function handleD() {
    if (!gameOn) return;
    setSpawnCount(0);
  }

  function handleF() {
    if (!gameOn) return;
    setSpawnCount(spawnCount + 30);
  }

  function handleC() {
    setContinueGame(!continueGame);
    setGameOn(true);
  }

  function handleSpace() {
    if (!gameOn) return;
    setShowHint(true);
    setHint("Hint: refresh the page.");
    childrenExodus("section");
    childrenExodus("#draggable");
    setShowCommandKeys(true);
    scatterSpace();
  }

  function spawnMysteryButtons() {
    let buttons = [];
    for (let i = 0; i < spawnCount; i++) {
      buttons.push(<MysterySpawnButton key={i} />);
    }
    return buttons;
  }

  function childrenExodus(parentSelector) {
    // let children = parentSelector.childNodes;
    // parentSelector.parentElement.removeChild(parentSelector);
    // children.map((child) => document.body.appendChild(child));
    // parentSelector.remove();
  }

  function scatterSpace() {
    document
      .querySelectorAll("button, img, #hint, h1, p, span")
      .forEach(function (e) {
        const myWidth = e.clientWidth;
        const myHeight = e.clientHeight;
        const randomLeft = getRandomNumber(0, window.innerWidth - myWidth);
        const randomTop = getRandomNumber(0, window.innerHeight - myHeight);
        e.style.position = "absolute";
        e.style.left = randomLeft + "px";
        e.style.top = randomTop + "px";
      });
  }

  function setUpConsoleFunctions() {
    window.absolutelyAwesomeYouFoundAHiddenCommand = () => {
      alert("Cool!");
    };

    window.goToGame = () => {
      window.location.href = "/phaser-game/index.html";
    };

    window.goToSNPromptGenerator = () => {
      window.location.href = "https://sn-prompt-generator.surge.sh";
    };

    window.goToCRPrep = () => {
      window.location.href = "https://cr-prep.glitch.me";
    };

    window.skew = () => {
      document.body.style.transform = "skewY(-10deg)";
      document.body.style.transformOrigin = "150% top";
      document.body.style.background = "black";
      setTimeout(function () {
        document.body.style.transform = "";
        document.body.style.background = "transparent";
        document.body.style.top = "0";
      }, 1000);
    };

    window.slides = () => {
      location = "https://simple-slides.surge.sh";
    };

    window.home = () => {
      location.reload();
    };

    window.wowYouFoundAHiddenCommand =
      window.absolutelyAwesomeYouFoundAHiddenCommand;
    window.game = window.goToGame;
    window.snpg = window.goToSNPromptGenerator;
    window.cr = window.goToCRPrep;

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

    detectKonamiCode();
    function detectKonamiCode() {
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
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Howard Chiam</title>
        <meta name="description" content="Howard's Portfolio Central" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="rgb(32,32,32)" />
        <link rel="shortcut icon" href="htc.png" />
        <script
          src="https://cdn.jsdelivr.net/gh/hchiam/_2DNote@1.12.3/_2DNote.min.js"
          integrity="sha384-e0d2dNwg3F9WTJ3jZBF5iUeuVyAtx+zwMnCAvKMiCHtwO2l2dzo3cIMO4+Xqwn5p"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/gh/hchiam/draggable@3.3.2/makeElementDraggable.js"
          integrity="sha384-o4FiE15Upwm21kbkoEoZLNCBjClbxbxsUq0g52Z06+6JLSguSieyFjsAe5tyHy4k"
          crossorigin="anonymous"
        ></script>
      </Head>

      <main>
        <noscript>
          <div id="noscript">
            <p>Please enable JavaScript to learn more about Howard</p>
            <p>
              Or visit
              <a
                id="link-to-github-profile"
                href="https://github.com/hchiam"
                target="_blank"
              >
                Howard's GitHub profile
              </a>
            </p>
          </div>
        </noscript>
        {showSecretButton && (
          <button id="secret-button" onClick={() => surprise()}>
            {`Hit Enter or Spacebar!` || secretButtonText}
          </button>
        )}
        <section
          id="main"
          className={`center ${styles.mainStart} ${
            slideIn && styles.mainSlideIn
          }`}
        >
          <div id="cover" aria-hidden="true"></div>
          <h1
            className="tilt"
            data-tilt=""
            data-scale="1.2"
            data-shine="true"
            data-shine-opacity="0.5"
            data-shine-save="true"
            tilt-change=""
            title="This is my name"
          >
            Howard Chiam
          </h1>
          <p className="sequence">
            <span role="presentation">Learning. </span>
            <span role="presentation">Languages. </span>
            <span role="presentation">Other stuff.</span>
          </p>
          <div id="button-group">
            <div
              id="button-notification"
              role="status"
              aria-live="polite"
            ></div>
            <button
              id="a"
              className={showCommandKeys ? "commandKey" : ""}
              onClick={() =>
                gameOn
                  ? handleA()
                  : window.open("https://github.com/hchiam", "_blank")
              }
            >
              GitHub
              <svg view-box="0 0 200 200">
                <path
                  transform="translate(100 100)"
                  d="M17.7,-34C26.3,-25.7,38.9,-27.7,51.1,-23.8C63.2,-19.8,74.8,-9.9,79.8,2.9C84.8,15.7,83.1,31.4,72.9,38.7C62.7,46,44,44.9,30.5,53.1C16.9,61.2,8.4,78.6,-4,85.4C-16.3,92.3,-32.7,88.6,-37.8,75.6C-43,62.6,-36.9,40.2,-43,26C-49.1,11.9,-67.4,5.9,-67.7,-0.2C-68.1,-6.3,-50.5,-12.7,-39.7,-18.7C-28.9,-24.8,-24.9,-30.5,-19.4,-40.6C-14,-50.7,-7,-65.2,-1.2,-63.1C4.6,-61,9.1,-42.3,17.7,-34Z"
                ></path>
              </svg>
            </button>
            <button
              id="s"
              className={showCommandKeys ? "commandKey" : ""}
              onClick={() =>
                gameOn
                  ? handleS()
                  : window.open("https://codepen.io/hchiam", "_blank")
              }
            >
              CodePen
              <svg view-box="0 0 200 200">
                <path
                  transform="translate(100 100)"
                  d="M27.3,-47.1C39.9,-40.1,57.7,-41.8,68.6,-35.4C79.5,-29,83.6,-14.5,82.8,-0.5C82,13.6,76.3,27.2,68.3,38.8C60.4,50.4,50.3,60,38.6,59.3C26.8,58.6,13.4,47.5,1.4,45.2C-10.6,42.8,-21.3,49,-33.1,49.8C-44.9,50.5,-57.9,45.7,-67.3,36.5C-76.7,27.3,-82.5,13.6,-76.1,3.7C-69.7,-6.3,-51.1,-12.5,-42.3,-22.7C-33.4,-32.9,-34.4,-47,-28.9,-58.1C-23.5,-69.2,-11.8,-77.4,-2.2,-73.6C7.4,-69.8,14.8,-54.1,27.3,-47.1Z"
                ></path>
              </svg>
            </button>
            <button
              id="d"
              className={showCommandKeys ? "commandKey" : ""}
              onClick={() =>
                gameOn
                  ? handleD()
                  : window.open("https://glitch.com/@hchiam", "_blank")
              }
            >
              Glitch
              <svg view-box="0 0 200 200">
                <path
                  transform="translate(100 100)"
                  d="M31.5,-61.6C38.3,-50.6,39.6,-37.1,41.2,-26.4C42.7,-15.8,44.5,-7.9,49.7,3C54.8,13.8,63.3,27.6,61.3,37.6C59.4,47.7,47.1,53.9,35.1,57.1C23.1,60.4,11.6,60.7,-1.2,62.8C-14,64.9,-28.1,68.9,-34.5,62.5C-41,56.1,-39.9,39.3,-45.7,27.1C-51.6,15,-64.2,7.5,-64.9,-0.4C-65.6,-8.3,-54.3,-16.5,-45.3,-23.2C-36.3,-29.8,-29.7,-34.9,-22.5,-45.6C-15.4,-56.4,-7.7,-72.8,2.3,-76.8C12.3,-80.8,24.7,-72.5,31.5,-61.6Z"
                ></path>
              </svg>
            </button>
            <button
              id="f"
              className={showCommandKeys ? "commandKey" : ""}
              onClick={() =>
                gameOn
                  ? handleF()
                  : window.open(
                      "https://ca.linkedin.com/in/howardchiam",
                      "_blank"
                    )
              }
            >
              LinkedIn
              <svg view-box="0 0 200 200">
                <path
                  transform="translate(100 100)"
                  d="M21.1,-36.2C26.2,-33.7,28.4,-25.6,31,-18.7C33.5,-11.7,36.6,-5.9,43.6,4.1C50.6,14,61.6,28,59.4,35.5C57.1,43.1,41.6,44.2,29.5,49.2C17.4,54.2,8.7,63.2,-1.5,65.9C-11.8,68.6,-23.6,65,-28.5,55.8C-33.4,46.6,-31.4,31.8,-40.5,21.6C-49.6,11.3,-69.7,5.7,-69,0.4C-68.3,-4.8,-46.7,-9.7,-37.2,-19C-27.6,-28.4,-30,-42.3,-25.8,-45.3C-21.6,-48.4,-10.8,-40.6,-1.4,-38.2C8,-35.8,16,-38.7,21.1,-36.2Z"
                ></path>
              </svg>
            </button>
            <button
              id="c"
              className={showCommandKeys ? "commandKey" : ""}
              onClick={() =>
                gameOn
                  ? handleC()
                  : window.open("https://hchiam.blogspot.com", "_blank")
              }
            >
              Blog
              <svg view-box="0 0 200 200">
                <path
                  transform="translate(100 100)"
                  d="M43.8,-77.3C55,-69.4,61.1,-54.1,67,-40C72.8,-25.9,78.5,-12.9,79.1,0.3C79.7,13.6,75.2,27.2,66.5,36.5C57.8,45.7,44.9,50.6,33.2,50.2C21.4,49.7,10.7,43.9,-2.8,48.8C-16.3,53.6,-32.6,69.2,-40,67.1C-47.3,65,-45.7,45.2,-46.7,31.1C-47.7,17,-51.3,8.5,-53.7,-1.3C-56,-11.2,-57,-22.3,-55.2,-35.2C-53.5,-48,-49,-62.6,-39.4,-71.4C-29.7,-80.2,-14.9,-83.2,0.7,-84.5C16.3,-85.8,32.6,-85.2,43.8,-77.3Z"
                ></path>
              </svg>
            </button>
            <button
              id="space"
              className={showCommandKeys ? "commandKey" : ""}
              onClick={() =>
                gameOn
                  ? handleSpace()
                  : window.open(
                      "https://www.memrise.com/user/hchiam/courses/learning",
                      "_blank"
                    )
              }
            >
              Memrise
              <svg view-box="0 0 200 200">
                <path
                  transform="translate(100 100)"
                  d="M23.1,-40.7C33.5,-33.9,48.1,-35,55.1,-29.6C62.2,-24.1,61.7,-12.1,58.7,-1.7C55.8,8.6,50.3,17.3,45.2,26C40.1,34.8,35.2,43.6,27.7,51.8C20.2,60,10.1,67.4,1.1,65.6C-8,63.8,-16,52.7,-30,48.3C-44.1,43.9,-64.2,46.3,-72.9,39.4C-81.5,32.4,-78.8,16.2,-72.5,3.7C-66.1,-8.9,-56.2,-17.8,-48.1,-25.8C-40,-33.7,-33.8,-40.8,-26.1,-49.1C-18.4,-57.5,-9.2,-67.1,-1.4,-64.6C6.3,-62.1,12.6,-47.4,23.1,-40.7Z"
                ></path>
              </svg>
            </button>

            <img
              id="draggable"
              className="shake"
              src="htc.png"
              alt="Howard signature icon"
              width="100px"
              onMouseLeave={resetGameButtons}
            />
            <div id="game-container">{spawnMysteryButtons()}</div>
          </div>
          {showHint && (
            <div id="hint" role="status" aria-live="polite">
              {hint}
            </div>
          )}
          <p id="extra-info"></p>
          {showLearningLink && (
            <div id="learning-link">
              {/* <!-- You've found one of the hidden features! :) --> */}
              <p>
                Here are things I've been learning and working on:
                <button
                  id="go-to-learning"
                  ref={inputRef}
                  aria-label="link to my learning repo"
                  onClick={() =>
                    window.open(
                      "https://github.com/hchiam/learning#--",
                      "_blank"
                    )
                  }
                >
                  https://github.com/hchiam/learning
                </button>
              </p>
            </div>
          )}
        </section>
        <div id="cursor-shadow"></div>
      </main>
    </div>
  );
}
