export function isUsingTouchScreen() {
  return window.matchMedia("(hover: none) and (pointer: coarse)")?.matches;
}
