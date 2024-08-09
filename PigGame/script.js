'use strict';

// Selecting elements
const score0_element = document.querySelector('#score--0');
const score1_element = document.getElementById('score--1');
const dice_element = document.querySelector('.dice');
const roll_dice_element = document.querySelector('.btn--roll');

score0_element.textContent = 0;
score1_element.textContent = 0;
dice_element.classList.add('hidden');
