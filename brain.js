setTimeout(() => {
    coolAnimation();
}, 100);

setTimeout(() => {
  if (onDesktop()) {
    showHint();
  }
}, 2000);

setUpGame();

function coolAnimation() {
  var btns = Array.prototype.slice.call(document.querySelectorAll('button'));
  for (var i=0; i<btns.length; i++) {
    btns[i].classList.add('view-resize-animation');
  }
}

function onDesktop() {
  return (window.screen.availWidth > 640);
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
  setTimeout(() => {
    showHint();
    $('#hint').text('Hint: drag the icon to move things around.');
    focusOnLearningLink();
  }, 100);
}

function getRandomNumber(start, stop) {
  return Math.floor((Math.random() * stop) + start);
}

// silly game
let gameOn = false;
let turnedGameOnOnce = false;
let continueGame = false;
function setUpGame() {
  $(document).ready(function() {
    // game controls on:
    document.getElementById('draggable-handle').onmouseenter = function() {
      if (turnedGameOnOnce || onDesktop()) {
        $('#draggable').draggable();
        hideHint();
        if (turnedGameOnOnce) {
          showGameButtons();
        }
      }
    }
    // game controls off:
    document.getElementById('draggable-handle').onmouseleave = function() {
      if (onDesktop() && !continueGame) {
        $('#draggable').draggable('destroy');
        resetGameButtons();
        gameOn = false;
      }
    }
  });
}

function showGameButtons() {
  setUpGameButtons();
  gameOn = true;
  turnedGameOnOnce = true;
}

function setUpGameButtons() {
  $('button:contains("GitHub")').text(' A ');
  $('button:contains("CodePen")').text(' S ');
  $('button:contains("Glitch")').text(' D ');
  $('button:contains("LinkedIn")').text(' F ');
  $('button:contains("Blog")').text(' C ');
  $('button:contains("Memrise")').text(' SPACE ');
}

function resetGameButtons() {
  $('#game-container *').remove();
  $('button:contains(" A ")').text('GitHub');
  $('button:contains(" S ")').text('CodePen');
  $('button:contains(" D ")').text('Glitch');
  $('button:contains(" F ")').text('LinkedIn');
  $('button:contains(" C ")').text('Blog');
  $('button:contains(" SPACE ")').text('Memrise');
}

$(document).keydown(function(e) {
  if (gameOn) {
    if (e.keyCode === 65) { // a
      $('#game-container').append('<button>?</button>');
    } else if (e.keyCode === 83) { // s
      $('#game-container *:last-child').remove();
    } else if (e.keyCode === 68) { // d
      $('#game-container *').remove();
    } else if (e.keyCode === 70) { // f
      $('#game-container *').remove();
      for (let i=0; i<30; i++) {
        $('#game-container').append('<button>?</button>');
      }
    } else if (e.keyCode === 67) { // c
      continueGame = !continueGame;
      if (!continueGame) {
        $('#draggable').draggable('destroy');
        resetGameButtons();
        gameOn = false;
      }
    }
  }
  if (turnedGameOnOnce && e.keyCode === 32) { // space
    showHint();
    $('#hint').text('Hint: refresh the page.');
    childrenExodus('section');
    childrenExodus('#draggable');
    makeCommandKeysConspicuous();
    scatterSpace();
  }
});

function childrenExodus(parentSelector) {
  let children = $(parentSelector + ' *').detach();
  $('body').append(children);
  $(parentSelector).remove();
}

function makeCommandKeysConspicuous() {
  const colour = 'navy';
  $('button:contains(" A ")').css('background', colour);
  $('button:contains(" S ")').css('background', colour);
  $('button:contains(" D ")').css('background', colour);
  $('button:contains(" F ")').css('background', colour);
  $('button:contains(" C ")').css('background', colour);
  $('button:contains(" SPACE ")').css('background', colour);
}

function scatterSpace() {
  $('button, img, #hint, h1, p').each(function() {
    const myWidth = $(this).width();
    const myHeight = $(this).height();
    const randomleft = getRandomNumber(0, window.innerWidth-myWidth);
    const randomtop = getRandomNumber(0, window.innerHeight-myHeight);
    $(this)
      .css({
        position: 'absolute',
      })
      .animate({
        left: randomleft + "px",
        top: randomtop + "px",
      }, 'fast', 'swing');
  });
}