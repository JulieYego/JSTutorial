'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecting the entire document
console.log('document', document.documentElement);
// Selecting the head and body elements
console.log('head', document.head);
console.log('body', document.body);

// Selecting elements
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log('All sections', allSections);

// Selecting elements by ID
console.log('ID', document.getElementById('section--1'));

// Selecting elements by tag name
const allButtons = document.getElementsByTagName('button');
console.log('All buttons', allButtons);

// Selecting by class name
const allButtonsClass = document.getElementsByClassName('btn');
console.log('All buttons class btn', allButtonsClass);

// Creating and inserting elements
// insertAdjacentHTML()
// const title = document.getElementsByTagName('h4')[0];
// console.log(title);
// title.insertAdjacentHTML(
//   'afterend',
//   '<p>We added this text using insertAdjacentHTML</p>'
// );

// creteElement()
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// Cloning a node
// header.append(message.cloneNode(true));

// Before and after
// header.before(message);
// header.after(message);

// Deleting elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// Styling elements
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.color); // Returns an empty string because it's not set inline
console.log(message.style.backgroundColor); // Returns the inline style value

console.log('Computed style', getComputedStyle(message).color);
