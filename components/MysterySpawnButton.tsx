import { useState, useRef } from "react";

export default function MysterySpawnButton() {
  const [show, setShow] = useState(true);
  const ref = useRef();

  function handleMouseover() {
    ref?.current?.style.color = "transparent";
    ref?.current?.style.width = 0;
    ref?.current?.style.height = 0;
    ref?.current?.style.padding = 0;
    setTimeout(function () {
      setShow(false);
    }, 500);
  }

  return (
    <>
      {show && (
        <button
          className="mystery-spawn-button"
          ref={ref}
          onMouseOver={handleMouseover}
        >
          ?
        </button>
      )}
    </>
  );
}
