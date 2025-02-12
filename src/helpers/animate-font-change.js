import { prefersReducedMotion } from "./prefers-reduced-motion";

if (!prefersReducedMotion()) {
  animateFontChange();
}
async function animateFontChange(
  rangeStartHex = 0x0041, // 'A'
  rangeEndHex = 0x007a, // 'z'
  speedMs = 50,
  delayAfterFirstLoad = 1000
) {
  const overrideFontSrc =
    'url("./fonts/PenFriendlyBraille.ttf") format("truetype")';
  const styleClass = "PenFriendlyBraille";

  const prefix = "U+" + rangeStartHex.toString(16).toUpperCase() + "-";
  for (let i = rangeEndHex; i >= rangeStartHex; i--) {
    const suffix = /*"U+" +*/ i.toString(16).toUpperCase();
    updateFontUnicodeRange(prefix + suffix, overrideFontSrc, styleClass);
    await sleep(speedMs);
    if (i === rangeEndHex) await sleep(delayAfterFirstLoad);
  }
  // updateFontUnicodeRange(""); // now target all characters for completion
  document.querySelector("style." + styleClass).remove();
}

function updateFontUnicodeRange(newUnicodeRange, overrideFontSrc, styleClass) {
  let style = document.querySelector("style." + styleClass);
  const alreadyHadStyleTag = !!style;
  if (alreadyHadStyleTag) {
    style.textContent = style.textContent.replace(
      /unicode-range: [^;]+;/,
      `unicode-range: ${newUnicodeRange};`
    );
  } else {
    style = document.createElement("style");
    style.classList.add(styleClass);
    const newFontFaceRule = `
        @font-face {
          font-family: ${styleClass};
          src: ${overrideFontSrc};
          unicode-range: ${newUnicodeRange};
          font-display: block;
        }
      `;
    style.textContent = newFontFaceRule;
  }
  if (!alreadyHadStyleTag) document.head.appendChild(style);
}

async function sleep(milliseconds) {
  await new Promise((r) => setTimeout(r, milliseconds || 1000));
}
