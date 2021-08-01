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
  }

  .pie {
    position: relative;
    width: 180px; /* just need some value, like min(50vw, 50vh) */
    height: 180px; /* just need some value, like min(50vw, 50vh) */
    transform: rotate(-90deg);
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
    left: var(--text-left);
    top: var(--text-top);
  }

  .pie,
  .slice {
    transition: transform 0.2s, outline 0.2s;
  }

  .pie:hover,
  .pie:focus,
  .slice:focus {
    transform: scale(1.1);
  }

  .pie:hover,
  .pie:focus {
    outline: 5px solid rgba(0, 0, 0, 0.5);
    transform: scale(1.1) rotate(-90deg);
  }
`;
