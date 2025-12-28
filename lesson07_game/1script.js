'use strict';

let score = 20;

let highScore = 0;

// let randomNumber = Math.trunc(Math.random() * 20) + 1;

// console.log(randomNumber);

let randomNumber = secretNumber();

function secretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

let attempt = 1;

function attemptCount() {
  attempt++;
  document.querySelector('.attempt').textContent = attempt;
}

// document.querySelector('.number').textContent = randomNumber; //temporary

//FUNCTIONS TO DISPLAY TEXT

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayhighScore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

const changeBgColorAndSize = function (color, size) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = size;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('😒 No number! ');
  } else if (guess === randomNumber) {
    displayMessage('🎉 You guessed the number!');
    displayNumber(randomNumber);
    // document.querySelector('body').style.backgroundColor = '#60b347';
    // document.querySelector('.number').style.width = '25rem';
    changeBgColorAndSize('#60b347', '25rem');
    if (score > highScore) {
      highScore = score;
      displayhighScore(score);
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? 'Too high 📈' : 'Too low 📉');
      score--;
      displayScore(score);
    } else {
      score = 0;
      displayScore(score);
      displayMessage('🤔 You lost the game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScore(score);

  // randomNumber = Math.trunc(Math.random() * 20) + 1;
  randomNumber = secretNumber();

  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  // document.querySelector('.number').textContent = '?'; // why can't use displayNumber
  displayNumber('?');

  attemptCount();

  //styles
  // document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.number').style.width = '15rem';

  changeBgColorAndSize('#222', '15rem');
});
