// https://codepen.io/hchiam/pen/qBmKbWq

import css from "styled-jsx/css";

export default css`
  .slice {
    /* --start, --end, and --color come from the style prop of the current .slice: */
    background-image: linear-gradient(var(--start), transparent 50%, white 50%),
      linear-gradient(calc(var(--end)), transparent 50%, var(--color) 50%);
  }

  .slice[style*="--over180"] {
    /* --start, --end, and --color come from the style prop of the current slice: */
    background-image: linear-gradient(
        var(--start),
        var(--color) 50%,
        transparent 50%
      ),
      linear-gradient(calc(var(--end)), white 50%, var(--color) 50%);
  }

  .pie,
  .slice {
    display: block;
    border-radius: 50%;
    background-color: white; /* white x color = color */
    cursor: pointer;
  }

  .pie {
    position: relative;
    width: 180px; /* just need some value, like min(50vw, 50vh) */
    height: 180px; /* just need some value, like min(50vw, 50vh) */
    aspect-ratio: 1;
    transform: rotate(-90deg);
    margin: 1rem;
  }

  .slice {
    position: absolute;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply; /* white x color = color */
  }

  .slice:after {
    content: var(--text);
    color: #fff;
    mix-blend-mode: difference;
    position: relative;
    left: var(--text-left, 50%);
    top: var(--text-top, calc(50% - 0.5em));
    --have-left: var(--text-left, 0);
    --have-top: var(--text-top, 0);
    --not-manually-set-left: calc(1 - var(--have-left, 0));
    --not-manually-set-top: calc(1 - var(--have-top, 0));
    --no-manual-pos: calc(
      var(--not-manually-set-left, 0) * var(--not-manually-set-top, 0)
    );
    --mid: calc(var(--no-manual-pos) * (var(--start) + var(--end)) / 2);
    transform: rotate(var(--mid, 0))
      translate(
        calc(1em * var(--no-manual-pos, 1) + var(--text-start-adjust, 0px))
      );
    // transform: rotate(var(--mid, 0))
    //   translate(calc(1em * var(--no-manual-pos, 1) + 45px))
    //   rotate(calc(var(--mid, 0) * -1)) translate(-5%);
    transform-origin: left;
    display: block;
  }

  .pie,
  .slice {
    transition: transform 0.2s, outline 0.2s;
  }

  .pie:hover,
  .pie:focus,
  .slice:focus,
  .highlightedSlice {
    transform: scale(1.1);
  }

  .pie:hover,
  .pie:focus {
    outline: 5px solid rgba(0, 0, 0, 0.5);
    transform: scale(1.1) rotate(-90deg);
  }
`;
