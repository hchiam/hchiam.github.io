import css from "styled-jsx/css";

export default css`
  #verily-demo-main-content {
    display: flex;
    flex-wrap: wrap;
    font-size: 1rem;
  }

  #verily-demo-main-content fieldset {
    height: max-content;
    min-width: 5ch;
    border: 3px solid var(--verily-pink) !important;
    border-image: linear-gradient(var(--verily-blue), var(--verily-red)) 1 !important;
    text-align: center;
  }

  #verily-demo-main-content legend {
    margin: auto;
  }

  #verily-demo-main-content .section-1,
  #verily-demo-main-content .section-2,
  #verily-demo-main-content .section-3 {
    display: flex;
    padding: 1rem 0;
  }

  #verily-demo-main-content .section-1,
  #verily-demo-main-content .section-2 {
    flex-direction: column;
    background: var(--verily-light-pink);
  }

  #verily-demo-main-content .section-3 {
    background: var(--verily-light-gray);
  }

  #verily-demo-main-content .section-1 {
    width: 25ch;
  }

  #verily-demo-main-content .section-2 {
    width: 15ch;
    justify-content: start;
  }

  #verily-demo-main-content .section-3 {
    flex-wrap: wrap;
    width: calc(100% - 40ch);
    align-content: start;
    justify-content: start;
    min-width: 15ch;
  }

  #verily-demo-main-content .section-1 legend {
    border-radius: 1rem;
    height: 2rem;
    font-size: 1.5rem;
  }
  #verily-demo-main-content .section-2 legend,
  #verily-demo-main-content .section-3 legend {
    border-radius: 0 0 0 1rem;
    height: 1.5rem;
  }
  #verily-demo-main-content .section-2 legend::after,
  #verily-demo-main-content .section-3 legend::after {
    content: "";
    width: 20px;
    height: 20px;
    top: -3rem;
    left: 100%;
    position: relative;
    display: block;
    transform: rotate(45deg);
    transform-origin: center;
  }
  #verily-demo-main-content .section-2 legend::after {
    background: var(--verily-light-pink);
  }
  #verily-demo-main-content .section-3 legend::after {
    background: var(--verily-light-gray);
  }

  #verily-demo-main-content #ecg ul {
    list-style: none;
    display: inline-block;
    text-align: left;
  }
`;
