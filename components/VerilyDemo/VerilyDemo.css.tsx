import css from "styled-jsx/css";

export default css`
  #verily-demo-main-content {
    display: flex;
    flex-wrap: wrap;
    align-content: start;
    font-size: 1rem;
    position: relative;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
  }

  @keyframes collapse {
    from {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
      max-height: 100%;
      height: 100%;
    }
    to {
      clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
      max-height: 0;
      height: 0;
    }
  }

  @keyframes expand {
    from {
      clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
      max-height: 0;
      height: 0;
    }
    to {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
      max-height: 100%;
      height: 100%;
      overflow-y: auto;
    }
  }

  [class*="tab-"]:not([class*="tab-content-"]) {
    text-decoration: none;
    height: max-content;
    padding: 1rem 5px 5px;
    margin: 1px;
    border-radius: 1rem 1rem 0 0;
    border: none;
    transform: scale(1, 0.9);
    transform-origin: bottom;
    transition: transform 0.1s;
    background: var(--verily-blue);
  }
  [class*="tab-"]:not([class*="tab-content-"]):hover,
  [class*="tab-"]:not([class*="tab-content-"]):focus {
    box-shadow: none;
    transform: scale(1);
    background: var(--verily-red);
    color: var(--verily-white);
  }

  .tab-content-container {
    width: 100%;
    height: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
  }

  .tab-content-container::after {
    content: "Click one of the tabs above";
    position: absolute;
    width: 15ch;
    height: max-content;
    padding: 0.5rem;
    margin-top: 20%;
    // left: calc(50% - 15ch / 2);
    text-align: center;
    z-index: 0;
    background: linear-gradient(
      to right,
      var(--verily-red),
      var(--verily-blue)
    );
    background-size: 200% 100%;
    background-position: right;
    transition: background-position 0.5s;
  }

  .tab-content-container:hover::after {
    background-position: left;
  }

  [class*="tab-"]:not([class*="tab-content-"]):focus
    ~ .tab-content-container::after {
    display: none;
  }

  [class*="tab-"] ~ div [class*="tab-content-"] {
    background: var(--verily-white-background);
    padding: 1rem 0 0;
    animation: collapse 0.3s forwards;
    position: absolute;
    height: 0;
    width: 100%;
    display: flex;
    align-content: start;
    align-items: start;
    justify-content: center;
    z-index: 2;
  }

  [class*="tab-"]:not(:focus) ~ div [class*="tab-content-"] > * {
    height: auto;
  }

  .tab-1:focus ~ div .tab-content-1 {
    animation: expand 0.3s forwards !important;
  }

  .tab-2:focus ~ div .tab-content-2 {
    animation: expand 0.3s forwards !important;
  }

  .tab-3:focus ~ div .tab-content-3 {
    animation: expand 0.3s forwards !important;
  }

  .tab-4:focus ~ div .tab-content-4 {
    animation: expand 0.3s forwards !important;
  }

  .tab-5:focus ~ div .tab-content-5 {
    animation: expand 0.3s forwards !important;
  }

  .tab-6:focus ~ div .tab-content-6 {
    animation: expand 0.3s forwards !important;
  }

  .tab-7:focus ~ div .tab-content-7 {
    animation: expand 0.3s forwards !important;
  }

  .tab-8:focus ~ div .tab-content-8 {
    animation: expand 0.3s forwards !important;
  }

  .tab-9:focus ~ div .tab-content-9 {
    animation: expand 0.3s forwards !important;
  }

  .tab-10:focus ~ div .tab-content-10 {
    animation: expand 0.3s forwards !important;
  }

  .tab-11:focus ~ div .tab-content-11 {
    animation: expand 0.3s forwards !important;
  }

  .filler {
    width: 80%;
    text-align: center;
  }
`;