setListeners();
function setListeners() {
  document.body.addEventListener("mouseup", stopNotes);

  if (document.getElementById("preferred-icon")) {
    document
      .getElementById("preferred-icon")
      .addEventListener("error", imageFallback);
  }

  $(document).ready(function () {
    $("#draggable").draggable({
      start: function (event, ui) {
        showGameButtons();
        playNotes();
      },
      drag: function () {
        adjustNotes();
      },
      stop: function () {
        stopNotes();
      },
    });
  });
}

function imageFallback() {
  $("img").remove();
  $("#ascii-art").show();
}

function disableOldStyles() {
  $('link[href="style.css"]').prop("disabled", true);
  $('link[href="/style.css"]').prop("disabled", true);
  $('link[href="minified-style.css"]').prop("disabled", true);
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
