export default function advertiseOfflineAbility(element) {
  if (navigator.serviceWorker) {
    element.innerText = "(BTW: This page works offline!)";
  }
}
