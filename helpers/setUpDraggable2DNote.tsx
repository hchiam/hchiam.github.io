export default function setUpDraggable2DNote(
  _2DNote,
  makeElementDraggable: Function,
  draggableElement: HTMLElement,
  callbackUponDrag?: Function,
  mouseUpCallback?: Function
) {
  const originalPosition = {
    left: draggableElement.offsetLeft + "px",
    top: draggableElement.offsetTop + "px",
  };

  // 2dnote:
  const useExitDetection = false;
  _2DNote.setAs2DArea(draggableElement, callbackUponDrag, useExitDetection);

  // draggable:
  const settings = {
    mouseUpCallback,
  };
  makeElementDraggable(draggableElement, settings);

  // place absolutely-positioned element where it used to be:
  draggableElement.style.left = originalPosition.left;
  draggableElement.style.top = originalPosition.top;

  document.body.addEventListener("mouseup", () => {
    _2DNote.stop();
  });
}
