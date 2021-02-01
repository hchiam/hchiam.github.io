import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [slideIn, setSlideIn] = useState(false);
  const [showSecretButton, setShowSecretButton] = useState(true);
  const [showLearningLink, setShowLearningLink] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [secretButtonText, setSecretButtonText] = useState("");
  const [hint, setHint] = useState("");
  const [turnedGameOnOnce, setTurnedGameOnOnce] = useState(false);
  const [continueGame, setContinueGame] = useState(false);
  const [gameOn, setGameOn] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setSlideIn(true);
    }, 10);

    setTimeout(() => {
      expandButtons();
      document.getElementById("button-notification").innerText =
        "Within scrolling view, there are six buttons in a group.";
    }, 1000);

    setTimeout(() => {
      showSecretButtonInstructions();
    }, 2000);

    setUpGame();
  }, []);

  function onDesktop() {
    return window.screen.availWidth > 640;
  }

  function getRandomNumber(start, stop) {
    return Math.floor(Math.random() * stop + start);
  }

  function surprise() {
    setShowLearningLink(true);
    setShowSecretButton(false);
    setShowHint(false);
    setTimeout(() => {
      setShowHint(true);
      inputRef.current.focus();
      setHint("Hint: drag the icon to move things around.");
    }, 100);
  }

  function expandButtons() {
    var btns = Array.prototype.slice.call(document.querySelectorAll("button"));
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.add("view-resize-animation");
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

  function setUpGame() {
    // game controls on:
    document.getElementById("draggable").onmouseenter = function () {
      if (turnedGameOnOnce || onDesktop()) {
        setShowHint(false);
        if (turnedGameOnOnce) {
          showGameButtons();
        }
      }
    };
    // game controls off:
    document.getElementById("draggable").onmouseleave = function () {
      if (onDesktop() && !continueGame) {
        resetGameButtons();
        setGameOn(false);
      }
    };
  }

  function showGameButtons() {
    alert("showGameButtons");
    var hasSmallScreen = document.documentElement.clientWidth < 640;
    if (hasSmallScreen) return;

    setUpGameButtons();
    setGameOn(true);
    setTurnedGameOnOnce(true);
  }

  function setUpGameButtons() {
    // $('button:contains("GitHub")')
    //   .text(" A ")
    //   .off("click")
    //   .on("click", function () {
    //     "jQuery.event.trigger({ type : 'keydown', keyCode : 65 });";
    //   });
    // $('button:contains("CodePen")')
    //   .text(" S ")
    //   .off("click")
    //   .on("click", function () {
    //     "jQuery.event.trigger({ type : 'keydown', keyCode : 83 });";
    //   });
    // $('button:contains("Glitch")')
    //   .text(" D ")
    //   .off("click")
    //   .on("click", function () {
    //     "jQuery.event.trigger({ type : 'keydown', keyCode : 68 });";
    //   });
    // $('button:contains("LinkedIn")')
    //   .text(" F ")
    //   .off("click")
    //   .on("click", function () {
    //     "jQuery.event.trigger({ type : 'keydown', keyCode : 70 });";
    //   });
    // $('button:contains("Blog")')
    //   .text(" C ")
    //   .off("click")
    //   .on("click", function () {
    //     "jQuery.event.trigger({ type : 'keydown', keyCode : 67 });";
    //   });
    // $('button:contains("Memrise")')
    //   .text(" SPACE ")
    //   .off("click")
    //   .on("click", function () {
    //     "jQuery.event.trigger({ type : 'keydown', keyCode : 32 });";
    //   });
  }

  function resetGameButtons() {
    // $('button:contains(" A ")')
    //   .text("GitHub")
    //   .off("click")
    //   .on("click", function () {
    //     "window.open('https://github.com/hchiam', '_blank');";
    //   });
    // $('button:contains(" S ")')
    //   .text("CodePen")
    //   .off("click")
    //   .on("click", function () {
    //     "window.open('https://codepen.io/hchiam', '_blank');";
    //   });
    // $('button:contains(" D ")')
    //   .text("Glitch")
    //   .off("click")
    //   .on("click", function () {
    //     "window.open('https://glitch.com/@hchiam', '_blank');";
    //   });
    // $('button:contains(" F ")')
    //   .text("LinkedIn")
    //   .off("click")
    //   .on("click", function () {
    //     "window.open('https://ca.linkedin.com/in/howardchiam', '_blank');";
    //   });
    // $('button:contains(" C ")')
    //   .text("Blog")
    //   .off("click")
    //   .on("click", function () {
    //     "window.open('https://hchiam.blogspot.com', '_blank');";
    //   });
    // $('button:contains(" SPACE ")')
    //   .text("Memrise")
    //   .off("click")
    //   .on("click", function () {
    //     "window.open('https://www.memrise.com/user/hchiam/courses/learning', '_blank');";
    //   });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Howard Chiam</title>
        <meta name="description" content="Howard's Portfolio Central" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="rgb(32,32,32)" />
        <link rel="shortcut icon" href="htc.png" />
      </Head>

      <main className={`${styles.mainStart} ${slideIn && styles.mainSlideIn}`}>
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
        <section id="main" className="center">
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
              onClick={() => window.open("https://github.com/hchiam", "_blank")}
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
              onClick={() => window.open("https://codepen.io/hchiam", "_blank")}
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
              onClick={() =>
                window.open("https://glitch.com/@hchiam", "_blank")
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
              onClick={() =>
                window.open("https://ca.linkedin.com/in/howardchiam", "_blank")
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
              onClick={() =>
                window.open("https://hchiam.blogspot.com", "_blank")
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
              onClick={() =>
                window.open(
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
              draggable="true"
            />
            <div id="game-container"></div>
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
