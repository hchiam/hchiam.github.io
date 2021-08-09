import css from "styled-jsx/css";

export default css`
  #verily-demo-main-content {
    display: flex;
    flex-wrap: wrap;
    align-content: start;
    font-size: 1rem;
    position: relative;
    height: 100vh;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  #verily-demo-main-content ::-webkit-scrollbar {
    display: none;
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
    }
  }

  [class*="tab-"] {
    text-decoration: none;
    height: max-content;
  }
  [class*="tab-"]:hover,
  [class*="tab-"]:focus {
    box-shadow: none;
  }

  .tab-content-container {
    width: 100%;
    height: 100%;
    padding: 1rem 0;
  }

  [class*="tab-"] ~ div [class*="tab-content-"] {
    background: var(--verily-white-background);
    padding: 0;
    animation: collapse 0.3s forwards;
    position: absolute;
    height: 0;
    width: 100%;
    overflow: auto;
    display: flex;
    align-content: start;
    align-items: start;
    justify-content: center;
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
`;
