'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let myScore = 20;
let body = document.querySelector('body');

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log('klik');

  if (!guess) {
    displayMessage('No number!!!');
  } else if (guess === secretNumber) {
    body.style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = guess;
    document.querySelector('.guess').setAttribute('disabled', '');
    document.querySelector('.check').setAttribute('disabled', '');
    document.querySelector('.check').style.display = 'none';
    displayMessage('Great!!!');

    if (myScore > highScore) {
      highScore = myScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    myScore--;
    if (myScore > 1) {
      displayMessage(guess > secretNumber ? 'To high!' : 'To low!');
    } else {
      myScore = 0;
      displayMessage('You lost the game!!!');
    }
    document.querySelector('.score').textContent = myScore;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  myScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  body.style.backgroundColor = '#222';

  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = myScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.check').style.display = 'block';
  document.querySelector('.guess').removeAttribute('disabled', '');
  document.querySelector('.check').removeAttribute('disabled', '');
  displayMessage('Start guessing...');
});
