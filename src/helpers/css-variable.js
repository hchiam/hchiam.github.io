/*
example:

:root {
  --brand-color: red;
}
.something {
  background: var(--brand-color);
}

var cssVariableName = "--brand-color";

console.log(getCSSVariable(cssVariableName));
setCSSVariable(cssVariableName, "lime");
*/

export function getCSSVariable(name) {
  return getComputedStyle(document.querySelector(":root"))
    .getPropertyValue(name)
    .trim();
}

export function setCSSVariable(name, value) {
  document.querySelector(":root").style.setProperty(name, value);
}
