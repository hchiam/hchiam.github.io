// inspired by: https://github.com/hchiam/learning-js/blob/master/get-gamepad-hardware-events.html

// https://raw.githubusercontent.com/hchiam/phaserGame/master/retrolink_usb_controller.jpg
import { useState, useEffect } from "react";
import setUpConsoleFunctions from "../helpers/setUpConsoleFunctions";

function GamepadHandlerTest() {
  useEffect(() => {
    setUpConsoleFunctions();

    // more info:
    // https://web.dev/gamepad/
    // https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API
    // https://luser.github.io/gamepadtest
    // https://github.com/luser/gamepadtest

    let gamepad, buttons; /*axes*/
    let buttonListener;

    window.addEventListener("gamepaddisconnected", (event) => {
      console.log("🎮❌ A gamepad was disconnected:", event);
      clearInterval(buttonListener);
    });

    window.addEventListener("gamepadconnected", (event) => {
      console.log("🎮✅ A gamepad was connected:", event);

      gamepad = event.gamepad;
      buttons = event.gamepad.buttons;
      listenForButtons();

      const axes = event.gamepad.axes;
      console.log("gamepad", gamepad);
      console.log(`${buttons.length} buttons`);
      console.log(`${axes.length} axes`);

      document.querySelector("#data").innerText = `gamepad ${
        gamepad.id
      }: ${JSON.stringify(gamepad)}
${buttons.length} buttons
${axes.length} axes (for directional buttons)`;
      document
        .querySelectorAll(".hide")
        .forEach((h) => h.classList.remove("hide"));
    });

    let previousAxes = [];
    function listenForButtons() {
      clearInterval(buttonListener);
      buttonListener = setInterval(() => {
        const axes = gamepad.axes.map((a) => Math.round(a * 100) / 100);
        const buttonsOn = buttons
          .map((b, i) => {
            return { i: i, on: b.pressed || b.touched };
          })
          .filter((b) => b.on)
          .map((b) => b.i);
        if (buttonsOn.length) {
          console.log("Buttons on:", buttonsOn);
        }
        document.querySelector("#buttons_on").innerText =
          JSON.stringify(buttonsOn);

        const didAxesChange =
          previousAxes.length === 0 ||
          previousAxes.filter((pa, i) => {
            return pa !== axes[i];
          }).length;
        if (didAxesChange) {
          console.log("Axes:", axes);
          previousAxes = axes;
          document.querySelector("#axes").innerHTML = axes
            .map(
              (a) =>
                `<meter value="${a}" min="-1" max="1" class="py-0"></meter>`
            )
            .join("");
        }
      }, 100);
    }
  }, []);

  return (
    <div>
      <p>Press any key on your physical gamepad to start.</p>
      <img
        src="https://raw.githubusercontent.com/hchiam/phaserGame/master/retrolink_usb_controller.jpg"
        alt="Gamepad controller"
        height="200"
      />
      <p className="hide">
        Buttons on: <span id="buttons_on"></span>
      </p>
      <p className="hide pb-0 mb-0">Axes (directional buttons):</p>
      <p id="axes" className="p-0 mt-0"></p>
      <p id="data"></p>
    </div>
  );
}

export default GamepadHandlerTest;
