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

export function getCSSVariable(
  name: string,
  element?: HTMLElement | Element
): string {
  return getComputedStyle(element || document.querySelector(":root"))
    .getPropertyValue(name)
    .trim();
}

export function setCSSVariable(
  name: string,
  value: string,
  element?: HTMLElement | Element
): void {
  (
    element || (document.querySelector(":root") as HTMLElement)
  ).style.setProperty("--" + name.replace(/^--/, ""), value);
}
