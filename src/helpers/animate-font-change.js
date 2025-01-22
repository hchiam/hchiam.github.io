import { prefersReducedMotion } from "./prefers-reduced-motion";

if (!prefersReducedMotion()) {
  animateFontChange();
}
async function animateFontChange(
  rangeStartHex = 0x0041, // 'A'
  rangeEndHex = 0x007a, // 'z'
  speedMs = 50
) {
  const prefix = "U+" + rangeStartHex.toString(16).toUpperCase() + "-";
  for (let i = rangeEndHex; i >= rangeStartHex; i--) {
    const suffix = /*'U+' +*/ i.toString(16).toUpperCase();
    updateFontUnicodeRange(prefix + suffix);
    await sleep(speedMs);
  }
  // updateFontUnicodeRange(""); // now target all characters for completion
}

function updateFontUnicodeRange(
  newUnicodeRange,
  overrideFontSrc = 'url("./fonts/PenFriendlyBraille.ttf") format("truetype")',
  styleClass = "PenFriendlyBraille"
) {
  let style = document.querySelector("style." + styleClass);
  const alreadyHadStyleTag = !!style;
  if (!alreadyHadStyleTag) {
    style = document.createElement("style");
    style.classList.add(styleClass);
  }
  const newFontFaceRule = `
      @font-face {
        font-family: ${styleClass};
        src: ${overrideFontSrc};
        unicode-range: ${newUnicodeRange};
      }
    `;
  style.textContent = newFontFaceRule;
  if (!alreadyHadStyleTag) document.head.appendChild(style);
}

async function sleep(milliseconds) {
  await new Promise((r) => setTimeout(r, milliseconds || 1000));
}
