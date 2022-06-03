import _Head from "../components/Head";
import NoScript from "../components/NoScript";
// import styled from "styled-components/macro";

export default function Home() {
  return (
    <>
      <_Head />
      <NoScript />

      <img src="htc.png" alt="Howard signature icon" width="100px" />
      <div id="cover" aria-hidden="true"></div>
      <h1 title="This is my name.">Howard Chiam</h1>
      <p>Learning. Languages. Other stuff.</p>
      <div id="button-group">
        <a href="https://github.com/hchiam" target="_blank">
          GitHub
        </a>
        <a href="https://codepen.io/hchiam" target="_blank">
          CodePen
        </a>
        <a href="https://ca.linkedin.com/in/howardchiam" target="_blank">
          LinkedIn
        </a>
      </div>
    </>
  );
}

// const SignatureIcon = styled.img``;
