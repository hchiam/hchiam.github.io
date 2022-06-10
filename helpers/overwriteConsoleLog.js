import isInDeveloperMode from "./isInDeveloperMode";

export default function overwriteConsoleLog() {
  const oldConsoleLog = console.log;
  console.log = function () {
    if (isInDeveloperMode() || arguments[0] !== "THREE.WebGLRenderer") {
      oldConsoleLog(...arguments);
    }
  };
}
