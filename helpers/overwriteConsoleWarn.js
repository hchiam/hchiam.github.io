import isInDeveloperMode from "./isInDeveloperMode";

export default function overwriteConsoleWarn() {
  const oldConsoleWarn = console.warn;
  console.warn = function () {
    if (isInDeveloperMode()) {
      oldConsoleWarn(...arguments);
    }
  };
}
