setListeners();
function setListeners() {
  if (document.getElementById("preferred-icon")) {
    document
      .getElementById("preferred-icon")
      .addEventListener("error", imageFallback);
  }
}

function imageFallback() {
  $("img").remove();
  $("#ascii-art").show();
}

const tilt = UniversalTilt.init({
  elements: document.querySelectorAll(".tilt"),
  settings: {
    // options...
  },
  callbacks: {
    // callbacks...
  },
});
