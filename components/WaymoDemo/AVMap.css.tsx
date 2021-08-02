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
    width: 30vw;
    height: 30vw;
    background: black;
    clip-path: var(--clip-path);
  }
  .av-map:after {
    content: "";
    display: inline-block;
    width: 30vw;
    height: 30vw;
    background: gold;
    transform: scale(0.9) translate(3px);
    clip-path: var(--clip-path);
  }
`;
