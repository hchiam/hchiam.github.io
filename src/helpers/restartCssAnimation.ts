export function restartCssAnimation(
  element: HTMLElement,
  animationClass: string
) {
  element.classList.remove(animationClass);
  void element.offsetWidth; // trigger reflow - https://css-tricks.com/restart-css-animation/
  element.classList.add(animationClass);
}
