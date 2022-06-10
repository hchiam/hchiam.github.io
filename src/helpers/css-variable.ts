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

export function getCSSVariable(name: string): string {
  return getComputedStyle(document.querySelector(":root"))
    .getPropertyValue(name)
    .trim();
}

export function setCSSVariable(name: string, value: string): void {
  (document.querySelector(":root") as HTMLElement).style.setProperty(
    name,
    value
  );
}
