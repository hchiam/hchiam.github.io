export function setUpDraggable2DNote(
  _2DNote,
  makeElementDraggable: Function,
  draggableElement: HTMLElement,
  callbackUponDrag?: Function,
  mouseUpCallback?: Function,
  keyboardMoveCallback?: Function
): void {
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
    keyboardMoveCallback,
  };
  makeElementDraggable(draggableElement, settings);

  // place absolutely-positioned element where it used to be:
  draggableElement.style.left = originalPosition.left;
  draggableElement.style.top = originalPosition.top;

  document.body.addEventListener("mouseup", () => {
    _2DNote.stop();
  });
}

export function indicateNoteWithColour(selector: string): void {
  const [x, y] = getCoordinates(selector);
  const frequency = getFrequencyFromX(x);
  const volume = getVolumeFromY(y);
  const minComfyVolume = 0;
  const maxComfyVolume = 0.5;
  let volumeNum = normalize(volume, minComfyVolume, maxComfyVolume, 0, 100);
  volumeNum = Math.round(volumeNum);
  const minComfyFreq = 150;
  const maxComfyFreq = 400;
  let frequencyNum = normalize(frequency, minComfyFreq, maxComfyFreq, 0, 359);
  frequencyNum = Math.round(frequencyNum);
  let output =
    "hsl(" + String(frequencyNum) + "," + String(volumeNum) + "%, 50%)";
  (document.querySelector(selector) as HTMLElement).style.background = output;
}

function getCoordinates(selector: string): number[] {
  const rect = document.querySelector(selector).getBoundingClientRect();
  const x = rect.left;
  const y = rect.top;
  return [x, y];
}

function getFrequencyFromX(x: number): number {
  const screenWidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  const minComfyFreq = 150;
  const maxComfyFreq = 400;
  const frequency = normalize(x, 0, screenWidth, minComfyFreq, maxComfyFreq);
  return frequency;
}

function getVolumeFromY(y: number): number {
  // technically getting gain (which ranges 0 to 1)
  const screenHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  const minComfyVolume = 0;
  const maxComfyVolume = 0.1;
  const volume = normalize(y, 0, screenHeight, minComfyVolume, maxComfyVolume);
  return volume;
}

function normalize(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  const inputBias = value - inMin;
  const ratioAdjustment = (outMax - outMin) / (inMax - inMin);
  const outputBias = outMin;
  var output = inputBias * ratioAdjustment + outputBias;
  var clampedOutput = Math.min(Math.max(output, outMin), outMax);
  return clampedOutput;
}
