export default function advertiseOfflineAbility(element) {
  if (navigator.serviceWorker) {
    element.innerText = "(BTW: This page works offline!)";
    document.addEventListener("scroll", hideMessageWhenScrolled.bind(element));
  }
}

function hideMessageWhenScrolled() {
  const element = this;
  if (window.scrollY > 0) {
    element.innerText = "";
    document.removeEventListener("scroll", hideMessageWhenScrolled);
  }
}
