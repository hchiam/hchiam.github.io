setTimeout(() => {
    coolAnimation();
}, 100);

setTimeout(() => {
  var onDesktop = (window.screen.availWidth > 640);
  if (onDesktop) {
    showHint();
  }
}, 2000);

function coolAnimation() {
  var btns = Array.prototype.slice.call(document.querySelectorAll('button'));
  for (var i=0; i<btns.length; i++) {
    btns[i].classList.add('view-resize-animation');
  }
}

function showHint() {
  document.getElementById('hint').style.visibility = 'visible';
}

function hideHint() {
  document.getElementById('hint').style.visibility = 'hidden';
}

function hideSecretButton() {
  document.getElementById('secret-button').style.visibility = 'hidden';
}

function focusOnLearningLink() {
  // a skip link. https://classroom.udacity.com/courses/ud891/lessons/7962031279/concepts/79590516900923
  document.querySelector('#learning-link button').focus();
}

function surprise() {
  document.getElementById('learning-link').style.visibility = 'visible';
  hideSecretButton();
  hideHint();
  alert('Hi!');
  setTimeout(() => {
    focusOnLearningLink();
  }, 100);
}
