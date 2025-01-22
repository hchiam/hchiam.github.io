import { prefersReducedMotion } from "./prefers-reduced-motion";

if (!prefersReducedMotion()) {
  setTimeout(() => {
    animateFontChange();
  }, 1000);
}
async function animateFontChange(
  rangeStartHex = 0x0041, // 'A'
  rangeEndHex = 0x007a, // 'z'
  speedMs = 50
) {
  const overrideFontSrc =
    'url("./fonts/PenFriendlyBraille.ttf") format("truetype")';
  const styleClass = "PenFriendlyBraille";

  const suffix = /*"U+" +*/ rangeEndHex.toString(16).toUpperCase();
  for (let i = rangeStartHex; i <= rangeEndHex; i++) {
    const prefix = "U+" + i.toString(16).toUpperCase() + "-";
    updateFontUnicodeRange(prefix + suffix, overrideFontSrc, styleClass);
    await sleep(speedMs);
  }
  // updateFontUnicodeRange(""); // now target all characters for completion
  document.querySelector("style." + styleClass).remove();
}

function updateFontUnicodeRange(newUnicodeRange, overrideFontSrc, styleClass) {
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
