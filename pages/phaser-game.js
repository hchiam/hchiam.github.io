import { useState, useRef, useEffect } from "react";
import "react-dom";
import Head from "next/head";

export default function PhaserGame() {
  useEffect(() => {
    window.home = () => {
      window.location.href = "/";
    };

    console.log(
      `%cClick on the game screen first to play.%c

%cIf you have an internet connection,
you can enter this command:%c

%chome()%c

`,
      "color: blue; background: lightgrey;",
      "",
      "color: blue; background: lightgrey;",
      "",
      "color: lime; background: black; padding: 5px 10px;",
      ""
    );
  }, []);
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title className="title">Phaser Game Test</title>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/phaser/2.6.2/phaser.min.js"
        ></script>
      </Head>
      <main>
        <h1>Phaser Game Test - Playing With Blocks</h1>
        <p
          className="codepen"
          data-height="585"
          data-theme-id="light"
          data-default-tab="result"
          data-user="hchiam"
          data-slug-hash="gmvzdo"
          data-pen-title="new phaser game"
        >
          <span>
            See the Pen{" "}
            <a href="https://codepen.io/hchiam/pen/gmvzdo">new phaser game</a>{" "}
            by hchiam (<a href="https://codepen.io/hchiam">@hchiam</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </span>
        </p>
        <script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></script>
      </main>
      <style jsx>{`
        .codepen {
          height: 585px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid;
          margin: 1em 0;
          padding: 1em;
        }
      `}</style>
    </div>
  );
}
