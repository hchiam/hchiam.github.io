export default function setUpDraggable2DNote(
  _2DNote,
  makeElementDraggable: Function,
  draggableElement: HTMLElement,
  callbackUponDrag: Function
) {
  const originalPosition = {
    left: draggableElement.offsetLeft + "px",
    top: draggableElement.offsetTop + "px",
  };

  // 2dnote:
  const useExitDetection = false;
  _2DNote.setAs2DArea(draggableElement, callbackUponDrag, useExitDetection);

  // draggable:
  makeElementDraggable(draggableElement);

  draggableElement.style.left = originalPosition.left;
  draggableElement.style.top = originalPosition.top;
}
