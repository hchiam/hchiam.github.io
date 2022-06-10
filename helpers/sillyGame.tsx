import React from "react";
import useKeyPress from "./useKeyPress";
import MysterySpawnButton from "../components/MysterySpawnButton";
import getRandomNumber from "../helpers/getRandomNumber";

interface setUpGameButtonsProps {
  spawnCount: number;
  gameOn: boolean;
  continueGame: boolean;
  handleA: Function;
  handleS: Function;
  handleD: Function;
  handleF: Function;
  handleC: Function;
  handleSpace: Function;
}

export function setUpGameKeyListeners(p: setUpGameButtonsProps): void {
  useKeyPress("a", p.handleA, [p.spawnCount, p.gameOn, p.continueGame]);
  useKeyPress("s", p.handleS, [p.spawnCount, p.gameOn, p.continueGame]);
  useKeyPress("d", p.handleD, [p.spawnCount, p.gameOn, p.continueGame]);
  useKeyPress("f", p.handleF, [p.spawnCount, p.gameOn, p.continueGame]);
  useKeyPress("c", p.handleC, [p.gameOn, p.continueGame]);
  useKeyPress(" ", p.handleSpace, [p.gameOn, p.continueGame]);
}

export function setUpGameButtons(setGameOn: Function) {
  setGameOn(true);
  const aButton = document.getElementById("a");
  aButton.innerText = " A ";
  const sButton = document.getElementById("s");
  sButton.innerText = " S ";
  const dButton = document.getElementById("d");
  dButton.innerText = " D ";
  const fButton = document.getElementById("f");
  fButton.innerText = " F ";
  const cButton = document.getElementById("c");
  cButton.innerText = " C ";
  const spaceButton = document.getElementById("space");
  spaceButton.innerText = " SPACE ";
}

export function resetGameButtons(continueGame: boolean, setGameOn: Function) {
  if (continueGame) return;
  setGameOn(false);
  const aButton = document.getElementById("a");
  aButton.innerText = " GitHub ";
  const sButton = document.getElementById("s");
  sButton.innerText = " CodePen ";
  const dButton = document.getElementById("d");
  dButton.innerText = " Glitch ";
  const fButton = document.getElementById("f");
  fButton.innerText = " LinkedIn ";
  const cButton = document.getElementById("c");
  cButton.innerText = " Blog ";
  const spaceButton = document.getElementById("space");
  spaceButton.innerText = " Memrise ";
}

export function handleA(
  gameOn: boolean,
  setSpawnCount: React.Dispatch<React.SetStateAction<number>>,
  spawnCount: number
) {
  if (!gameOn) return;
  setSpawnCount(spawnCount + 1);
}

export function handleS(
  gameOn: boolean,
  setSpawnCount: React.Dispatch<React.SetStateAction<number>>,
  spawnCount: number
) {
  if (!gameOn) return;
  setSpawnCount(spawnCount - 1);
}

export function handleD(
  gameOn: boolean,
  setSpawnCount: React.Dispatch<React.SetStateAction<number>>,
  spawnCount: number
) {
  if (!gameOn) return;
  setSpawnCount(0);
}

export function handleF(
  gameOn: boolean,
  setSpawnCount: React.Dispatch<React.SetStateAction<number>>,
  spawnCount: number
) {
  if (!gameOn) return;
  setSpawnCount(spawnCount + 30);
}

export function handleC(
  setContinueGame: React.Dispatch<React.SetStateAction<boolean>>,
  continueGame: boolean,
  setGameOn: Function
) {
  setContinueGame(!continueGame);
  setGameOn(true);
}

export function handleSpace(
  gameOn: boolean,
  setShowHint: React.Dispatch<React.SetStateAction<boolean>>,
  setHint: React.Dispatch<React.SetStateAction<string>>,
  setShowCommandKeys: Function
) {
  if (!gameOn) return;
  setShowHint(true);
  setHint("Hint: refresh the page.");
  setShowCommandKeys(true);
  scatterSpace();
}

export function spawnMysteryButtons(spawnCount: number) {
  let buttons = [];
  for (let i = 0; i < spawnCount; i++) {
    buttons.push(<MysterySpawnButton key={i} />);
  }
  return buttons;
}

export function scatterSpace() {
  document.querySelector("main").style.height = "0";
  document
    .querySelectorAll(
      "button, img, #hint, h1, p, span, #threejs-scene-container"
    )
    .forEach(function (e: Element) {
      const myWidth = e.clientWidth;
      const myHeight = e.clientHeight;
      const randomLeft = getRandomNumber(0, window.innerWidth - myWidth);
      const randomTop = getRandomNumber(0, window.innerHeight - myHeight);
      (e as HTMLElement).style.position = "absolute";
      (e as HTMLElement).style.left = randomLeft + "px";
      (e as HTMLElement).style.top = randomTop + "px";
    });
}
