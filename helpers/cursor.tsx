export default function setUpCursorShadow(): void {
  // create a subtle shadow that follows the cursor:
  document.addEventListener("mousemove", function (e) {
    const cursorShadow: HTMLElement = document.getElementById("cursor-shadow");
    cursorShadow.style.left = e.pageX + "px";
    cursorShadow.style.top = e.pageY + "px";
  });
}
