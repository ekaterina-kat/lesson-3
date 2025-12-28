'use strict';

// // GETTING THE CONTENT
// console.log(document.querySelector('.message').textContent);

// // CHANGE THE CONTENT
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// //TO GET VALUE FROM AN INPUT FIELD  = .VALUE
// document.querySelector('.guess').value;
// // console.log(document.querySelector('.guess').value);

// //it is possible to set the value manually
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

let highscore = 0;

let attempt = 1;
const attemptCounter = function () {
  attempt++;
  document.querySelector('.attempt').textContent = attempt;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayHightscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

const changeBgColorSize = function (color, size) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = size;
};

//Select the element where the event should happen
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      // score = score - 1;
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game');
      displayScore(0);
    }
  }
  // when player wins
  else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage('🎉 Correct Number!');

    //change BG and input size
    // document.querySelector('body').style.backgroundColor = '#60b347';
    // document.querySelector('.number').style.width = '30rem';
    changeBgColorSize('#60b347', '30rem');

    // setting highscore
    if (score > highscore) {
      highscore = score;
      displayHightscore(highscore);
    }
  }

  //when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     // score = score - 1;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  //change back
  // document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.number').style.width = '15rem';

  changeBgColorSize('#222', '15rem');

  attemptCounter();
});

// - Selected a buttоn with document.querySelector('.check')
// - added an eventListener on click
// - took a value from the input -> document.querySelector('.guess').value
// - from user input we usueally get s STRING. It needs to be converted to a number in this case
// GAME LOGIC

// NO GUESS: check if there's a value. And if not (no value) -> print an text.
// 1. if there's not guess (!guess) as 0 is falsy, we turn it into a true and execute the code. IF works for TRUE conditions

// DEFINE SECRET NUMBER: outside of any functions as we need to set it once
// - to get a random number between 1 and 20, we need to * 20, use trunc to get to a round number
// and + 1, so we get 20. Otherwise we'll stuck between 1 and 19.9999...

// COMPARE USER NUMBER TO A SECRET NUMBER
//  - SHOW the text 🎉 Correct Number!

// WORK WITH SCORE
// - each time the guess is not correct the score should decrease by 1.
// it is better to keep the initial value in the code and declare a variable so we won't be depended on data from DOM
// we will update the variable during each attempt to guess and display it in the score place
// we need to fix the issue with INFINITY game. The user should loose at some point.
// The lost point is when score is 0. We use If (score > 1) {... our code with text and score--}. We do score > as we were able to get another click when score is 0

// AGAIN BUTTON
// reassign score again to 20;
// reassign secretNumber by copying it to again click
// reassign all the messages and styles

// HIGHSCORE
// set a variable for a highscore
// check the highscore when a player wins and compare it to score
// if score > highscore , than it becomes new highscore

/*
let secretNumber = randomNumber();
function randomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

and then reassign the secretNumber variable in the 'again' handler

secretNumber = randomNumber();
*/

/*
So, what happens here !guess? First, we need to look at the possible values stored in the guess variable; it gets its value in this line

const guess = Number(document.querySelector('.guess').value);
We take the value from the <input> field, and convert it to a number. An empty <input> field returns an empty string '', which converted to a number gives us 0.

So, if the user of our game didn't input anything, the value of guess will be 0. Otherwise, it will be a number that he input.

Another thing that you need to know is that 0 is a falsy value. What does that mean? It means that in a Boolean context (like the if condition), it will be treated as false

if (0) {
  // this code will not get executed because 0 is falsy
  // and the if statement is executed only if it's condition is true
  console.log('hi');
}
So, basically, if we convert 0 to a Boolean value, it will be false.

console.log(Boolean(0)); // false
And, this is what happens when we use the logical NOT operator !; it converts 0 to a Boolean value first, and then, negates it, which makes it true because !false is true, and !true is false.

So, if the user doesn't input any value, !guess will be !0, which will be converted to !false, which in the end, results in true. */
