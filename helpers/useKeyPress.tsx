import { useState, useEffect } from "react";

export default function useKeyPress(
  targetKey: string,
  callback: Function,
  dependencies: Array<any> = []
): boolean {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  function upHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(false);
      callback();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, dependencies);

  return keyPressed;
}
