import { useEffect } from "react";
import "react-dom";
import Head from "next/head";

export default function SlidesTitler() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Slides Titler</title>
        <meta name="description" content="Slides Titler" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="rgb(32,32,32)" />
      </Head>
      <main>
        <img src="https://raw.githubusercontent.com/hchiam/slides-titler/master/slides-titler.png"></img>
        <h1>Slides Titler Privacy Policy and Terms of Service:</h1>
        <p>
          "Slides Titler" is a simple Google Slides add-on. It does not send any
          of your information to the creator/developer of the add-on. It simply
          adds a title textbox to each slide, or removes the title textbox from
          each slide by using an ID. To be able to do this for you, it needs
          your permission to edit your Google Slides. The source code for
          "Slides Titler" is available at this link:{" "}
          <a
            href="https://github.com/hchiam/slides-titler"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/hchiam/slides-titler
          </a>
        </p>
        <p>
          <a
            href="https://docs.google.com/document/d/1VA-8WLP3njOA6chajUP9VYqJaFn9AjEMQ5jAT4FH5Vs/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            (Google Doc version.)
          </a>
        </p>
      </main>
      <style jsx>{`
        a:not(:hover) {
          padding: 0;
        }

        img {
          display: inline;
        }
      `}</style>
    </div>
  );
}
