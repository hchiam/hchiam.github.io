import css from "styled-jsx/css";

export default css`
  #noscript p {
    text-align: center !important;
  }

  h1 {
    font-size: 7vw;
    letter-spacing: 0.2ch;
  }

  button {
    font-family: monospace;
  }

  #hint {
    font-size: xx-large;
    font-weight: bolder;
    color: rgb(50, 50, 50);
    margin-top: 7rem;
  }

  #hint:hover {
    color: lime;
  }

  #secret-button {
    position: absolute;
    left: -100%;
    z-index: 3;
  }

  #secret-button:focus {
    left: 10% !important;
  }

  .view-resize-animation {
    margin: 10px;
  }

  #hint,
  button:hover,
  button:focus,
  a:hover,
  a:focus {
    animation-name: wobble;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
  }

  @keyframes wobble {
    0% {
      transform: rotate(-5deg);
    }

    50% {
      transform: rotate(5deg);
    }

    100% {
      transform: rotate(-5deg);
    }
  }

  #draggable {
    cursor: move;
    border-radius: 1em;
    font-size: 10px;
    transition: none;
    z-index: 9001;
    margin-top: 1rem;
  }

  .commandKey {
    background: navy;
  }

  #cover {
    z-index: -1;
    position: fixed;
    background: var(--secondary-color);
    opacity: 0.1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    clip-path: polygon(0% 0%, 100% 30%, 100% 100%, 0% 80%);
  }

  #cursor-shadow {
    position: absolute;
    box-shadow: 0 0 50px 50px rgba(0, 0, 0, 0.1);
    transition: 0s;
  }

  #extra-info {
    color: #808080;
    width: 100%;
    position: fixed;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
  }

  .tilt {
    width: 15ch;
    margin: auto;
    transform-style: preserve-3d;
    border-radius: 3px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
  }

  .tilt:hover {
    background: lime;
    color: black;
  }

  .tilt > .tilt-element-inner-text {
    transform: translateZ(20px);
    color: white;
    text-align: center;
    border-radius: 3px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
    line-height: 50px;
    font-family: avenir, arial, tahoma, monospace;

    position: absolute;
    width: 50px;
    height: 50px;
  }

  .tilt > .tilt-element-inner-text.middle {
    top: 10px;
    left: 25px;
    background: rgba(0, 0, 255, 0.75);
  }

  .tilt > .tilt-element-inner-text.top-right {
    top: -30px;
    right: -10px;
    background: rgba(255, 255, 0, 0.2);
  }

  #link-to-github-profile {
    padding: 0;
  }

  #button-notification {
    position: absolute;
    left: -9999px;
  }

  .draggable-offline {
    width: 26ch;
    border-radius: 0 !important;
  }

  #ascii-art {
    display: none;
  }

  #ascii-art > p {
    padding: 0;
    margin: -1px;
    color: black !important;
  }

  .sequence {
    font-size: 3.5vw;
    font-weight: 500;
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    width: 33ch;
    border: none;
    transition: 0.25s;
  }

  .sequence span {
    padding-left: 0;
    padding-right: 0;
    border-radius: 0;
    margin: 0;
  }

  .sequence span:first-child {
    padding-left: 10px;
    border-radius: 10px 0 0 10px;
  }

  .sequence span:last-child {
    padding-right: 10px;
    border-radius: 0 10px 10px 0;
  }

  .sequence:hover span {
    background: lime;
    color: black;
  }

  .sequence:hover span:nth-child(1) {
    transition-delay: 0.1s;
  }

  .sequence:hover span:nth-child(2) {
    transition-delay: 0.2s;
  }

  .sequence:hover span:nth-child(3) {
    transition-delay: 0.3s;
  }

  .sequence:hover ~ #button-group button[id] {
    background: lime;
    color: black;
  }

  .sequence:hover ~ #button-group button[id]:nth-of-type(1) {
    transition-delay: 0.4s;
  }

  .sequence:hover ~ #button-group button[id]:nth-of-type(2) {
    transition-delay: 0.5s;
  }

  .sequence:hover ~ #button-group button[id]:nth-of-type(3) {
    transition-delay: 0.6s;
  }

  .sequence:hover ~ #button-group button[id]:nth-of-type(4) {
    transition-delay: 0.7s;
  }

  .sequence:hover ~ #button-group button[id]:nth-of-type(5) {
    transition-delay: 0.8s;
  }

  .sequence:hover ~ #button-group button[id]:nth-of-type(6) {
    transition-delay: 0.9s;
  }

  @media only screen and (max-device-width: 640px) {
    button {
      min-width: 48px;
      min-height: 48px;
      margin: 10px;
    }

    #secret-button {
      left: 0;
      top: 120vh;
    }

    .sequence {
      font-size: medium;
      text-align: justify;
    }
  }
`;
