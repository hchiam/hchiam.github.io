// note generation JS reference: https://github.com/hchiam/learning-js/blob/master/note-sound-generator.js

const audioCtx = new AudioContext();
// multiple oscillators can use this one context
let notes = [];

function playNotes() {
  if (!gameOn) return; // gameOn is from brain.js
  if (scatteredSpace) return; // scatteredSpace is from brain.js
  playNoteOfId('draggable-handle');
  // playNoteOfId('a');
  // playNoteOfId('s');
  // playNoteOfId('d');
  // playNoteOfId('f');
}

function playNoteOnExit() {
  const exitDelay = 0.5;
  playNoteOfId('draggable-handle', exitDelay);
}

function adjustNotes() {
  for (let i in notes) {
    const [x, y] = getCoordinates('draggable-handle');
    const frequency = getFrequencyFromX(x);
    const volume = getVolumeFromY(y);
    const volumeSetup = notes[i].volumeSetup;
    volumeSetup.gain.value = volume;
    const oscillator = notes[i].oscillator;
    oscillator.frequency.value = frequency;
  }
}

function stopNotes() {
  for (let i in notes) {
    const oscillator = notes[i].oscillator;
    oscillator.stop(audioCtx.currentTime);
  }
  notes = [];
}

function playNoteOfId(id, delay) {
  const [x, y] = getCoordinates(id);
  playNote([x, y], delay);
}

function getCoordinates(id) {
  const rect = document.getElementById(id).getBoundingClientRect();
  console.log(rect.top, rect.right, rect.bottom, rect.left);
  const x = rect.left;
  const y = rect.top;
  return [x, y];
}

function playNote([x, y], delay=4) {
  console.log(x, y);
  // example usage: <body onmousemove="playNote(event)" style="width: 100vw; height: 100vh;"></body>
  // can play another note simultaneously with another playNote(e) call
  const frequency = getFrequencyFromX(x);
  const volume = getVolumeFromY(y);
  const volumeSetup = audioCtx.createGain();
  volumeSetup.connect(audioCtx.destination);
  volumeSetup.gain.value = volume;
  const oscillator = audioCtx.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.value = frequency;
  oscillator.connect(volumeSetup);
  // instead of oscillator.connect(audioCtx.destination);
  oscillator.start();
  const delayToAutoStopSound = delay;
  oscillator.stop(audioCtx.currentTime + delayToAutoStopSound);
  notes.push({oscillator, volumeSetup});
}

function getFrequencyFromX(x) {
  const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const minComfyFreq = 100;
  const maxComfyFreq = 400;
  const frequency = normalize(x, 
                              0,screenWidth, 
                              minComfyFreq,maxComfyFreq);
  return frequency;
}

function getVolumeFromY(y) {
  // technically getting gain (which ranges 0 to 1)
  const screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  const minComfyVolume = 0;
  const maxComfyVolume = 0.1;
  const volume = normalize(y, 
                           0,screenHeight, 
                           minComfyVolume,maxComfyVolume);
  return volume;
}

function normalize(value, inMin,inMax, outMin,outMax) {
  const inputBias = value - inMin;
  const ratioAdjustment = (outMax - outMin) / (inMax - inMin);
  const outputBias = outMin;
  return inputBias * ratioAdjustment + outputBias;
}
