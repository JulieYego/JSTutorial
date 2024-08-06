'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    console.log(displayMessage('No number😒'));
    // Player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Answer😘');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#708871';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High🍃' : 'Too Low👎🏾');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost🤣');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#606676';
  document.querySelector('.number').style.width = '15rem';
});

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
// let score = 20;
// let highscore = 0;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   // No input
//   if (!guess) {
//     console.log(
//       (document.querySelector('.message').textContent = 'No number😒')
//     );
//     // Player wins
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Answer😘';
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('body').style.backgroundColor = '#FF4E88';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').style.backgroundColor = '#FFDA76';
//     document.querySelector('.check').style.backgroundColor = '#FFDA76';
//     document.querySelector('.again').style.backgroundColor = '#FFDA76';
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//     // Guess too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too High🍃';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost🤣';
//       document.querySelector('.score').textContent = 0;
//     }
//     // Guess too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low👎🏾';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost🤣';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#B4D6CD';
//   document.querySelector('.number').style.width = '15rem';
// });
