import css from "styled-jsx/css";

export default css`
  --clip-path: polygon(
    51px 2px,
    20.51% 18.63%,
    8.47% 15.46%,
    12.36% 31.72%,
    10.16% 38.24%,
    20.28% 50.53%,
    15.42% 56.42%,
    15.46% 63.34%,
    11.65% 71.36%,
    16.42% 76.14%,
    9.63% 82.81%,
    57.2% 99.55%,
    97.9% 100.4%,
    99.22% 1.45%
  );

  .av-map {
    display: inline-block;
    position: relative;
    width: 230px;
    height: 230px;
    background: gold;
    clip-path: var(--clip-path);
    transition: transform 0.2s;
  }
  .av-map:after {
    content: "";
    display: inline-block;
    width: 230px;
    height: 230px;
    background: var(--waymo-green);
    transform: scale(0.9) translate(3px);
    clip-path: var(--clip-path);
  }
  .av-map:hover,
  .av-map:focus {
    transform: scale(1.1);
  }

  .av-map .hailing:after {
    content: "🔵";
  }
  .av-map .requesting-assistance:after {
    content: "🛑";
  }
  .av-map .av:after {
    content: "⬜";
  }
  .av-map .charging-station:after {
    content: "🔋";
  }
  .av-map .roadside-assistance:after {
    content: "⚠️";
  }

  .av-map > * {
    position: absolute;
    z-index: 1;
    background: transparent;
    width: 0;
    height: 0;
    transform: translate(-0.5rem, -0.5rem);
    top: var(--top);
    left: var(--left);
  }
  .av-map > *:after {
    position: absolute;
    top: 0;
    left: 0;
  }
  .av-map.spread-out-map-icons > * {
    animation: spread-out-map-icons 0.2s forwards;
  }

  @keyframes spread-out-map-icons {
    from {
      left: 0;
      top: 100%;
    }
  }

  .av-map-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  [class*="moving"] {
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-play-state: paused;
  }

  .moving-1 {
    animation-name: moving-1;
  }
  .moving-1:after {
    content: "⬜ETA: 5m" !important;
    color: black;
    width: max-content;
    font-size: small;
  }
  @keyframes moving-1 {
    to {
      left: 51%;
      top: 47%;
    }
  }

  .moving-2 {
    animation-name: moving-2;
  }
  @keyframes moving-2 {
    to {
      left: 30%;
      top: 73%;
    }
  }

  .moving-3 {
    animation-name: moving-3;
  }
  @keyframes moving-3 {
    to {
      left: 25%;
      top: 34%;
    }
  }

  .moving-4 {
    animation-name: moving-4;
  }
  @keyframes moving-4 {
    to {
      left: 80%;
      top: 70%;
    }
  }

  .moving-5 {
    animation-name: moving-5;
  }
  @keyframes moving-5 {
    to {
      left: 58%;
      top: 79%;
    }
  }

  .moving-6 {
    animation-name: moving-6;
  }
  @keyframes moving-6 {
    to {
      left: 59%;
      top: 61%;
    }
  }

  .moving-7 {
    animation-name: moving-7;
  }
  @keyframes moving-7 {
    to {
      left: 75%;
      top: 25%;
    }
  }

  .moving-8 {
    animation-name: moving-8;
  }
  @keyframes moving-8 {
    to {
      left: 48%;
      top: 17%;
    }
  }

  .moving-9 {
    animation-name: moving-9;
  }
  @keyframes moving-9 {
    to {
      left: 76%;
      top: 86%;
    }
  }

  @media (prefers-reduced-motion) {
    [class*="moving-"] {
      animation-name: none;
    }
  }
`;
