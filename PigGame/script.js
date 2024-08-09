'use strict';

// Selecting elements
const player0_element = document.querySelector('.player--0');
const player1_element = document.querySelector('.player--1');

const score0_element = document.querySelector('#score--0');
const score1_element = document.getElementById('score--1');

const dice_element = document.querySelector('.dice');
const current0_element = document.querySelector('#current--0');
const current1_element = document.getElementById('current--1');

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, totalScore, playing;

// Starting conditions
const initializeGame = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  totalScore = 0;
  playing = true;

  dice_element.classList.add('hidden');

  score0_element.textContent = 0;
  score1_element.textContent = 0;

  score0_element.textContent = 0;
  score1_element.textContent = 0;

  current0_element.textContent = 0;
  current1_element.textContent = 0;

  player0_element.classList.remove('player--winner');
  player1_element.classList.remove('player--winner');

  player0_element.classList.add('player--active');
  player1_element.classList.remove('player--active');
};

initializeGame();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0_element.classList.toggle('player--active');
  player1_element.classList.toggle('player--active');
};

const rollDice = function () {
  if (playing) {
    const rolledNumber = Math.trunc(Math.random() * 6 + 1);
    dice_element.classList.remove('hidden');
    dice_element.querySelector.textContent = rolledNumber;
    dice_element.src = `dice-${rolledNumber}.png`;

    if (rolledNumber !== 1) {
      currentScore += rolledNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

const holdScore = function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      dice_element.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
};

btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', initializeGame);
