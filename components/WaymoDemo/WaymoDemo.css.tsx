import css from "styled-jsx/css";

export default css`
  .showWaymoDemo .animated-text,
  .showWaymoDemo [class$="-before-chart-label"] {
    animation: animated-text 0.5s forwards;
    animation-play-state: paused;
  }

  @keyframes animated-text {
    from {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    }
    to {
      clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
    }
  }
`;
