import { useEffect } from "react";
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
        <title>Phaser Game Test</title>
        <meta name="description" content="Phaser Game Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="rgb(32,32,32)" />
        <link rel="shortcut icon" href="htc.png" />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/phaser/2.6.2/phaser.min.js"
        ></script>
      </Head>
      <main>
        <h1>Phaser Game Test - Playing With Blocks</h1>
        <iframe
          height="265"
          scrolling="no"
          title="new phaser game"
          src="https://codepen.io/hchiam/embed/preview/gmvzdo?height=265&theme-id=dark&default-tab=result"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        >
          See the Pen{" "}
          <a href="https://codepen.io/hchiam/pen/gmvzdo">new phaser game</a> by
          hchiam (<a href="https://codepen.io/hchiam">@hchiam</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </main>
      <style jsx>{`
        main {
          display: grid;
          align-content: center;
          justify-content: center;
        }

        h1 {
          text-align: center;
          margin: 0;
          padding: 0;
        }

        iframe {
          width: 80vw;
          height: 80vh;
        }
      `}</style>
    </div>
  );
}
