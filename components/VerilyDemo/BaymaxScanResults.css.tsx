import css from "styled-jsx/css";

export default css`
  .baymax-scan-results {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 1rem;
  }

  fieldset {
    height: max-content;
    min-width: 5ch;
    border: 3px solid var(--verily-pink) !important;
    border-image: linear-gradient(var(--verily-blue), var(--verily-red)) 1 !important;
    text-align: center;
  }

  legend {
    margin: auto;
  }

  .section-1,
  .section-2,
  .section-3 {
    display: flex;
    padding: 1rem 0;
  }

  .section-1,
  .section-2 {
    flex-direction: column;
    background: var(--verily-light-pink);
  }

  .section-3 {
    background: var(--verily-light-gray);
  }

  .section-1 {
    width: 25ch;
  }

  .section-2 {
    width: 15ch;
    justify-content: start;
  }

  .section-3 {
    flex-wrap: wrap;
    width: calc(100% - 40ch);
    align-content: start;
    justify-content: start;
    min-width: 15ch;
  }

  .section-1 legend {
    border-radius: 1rem;
    height: 2rem;
    font-size: 1.5rem;
  }
  .section-2 legend,
  .section-3 legend {
    border-radius: 0 0 0 1rem;
    height: 1.5rem;
  }
  .section-2 legend::after,
  .section-3 legend::after {
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
  .section-2 legend::after {
    background: var(--verily-light-pink);
  }
  .section-3 legend::after {
    background: var(--verily-light-gray);
  }

  #ecg ul {
    list-style: none;
    display: inline-block;
    text-align: left;
  }

  @media only screen and (max-width: 480px) {
    .section-1,
    .section-2,
    .section-3 {
      display: block !important;
      width: 90% !important;
      margin: auto !important;
      padding: 0 !important;
      margin: 0 !important;
    }
    fieldset {
      margin-top: 1.25rem !important;
    }
  }
`;
