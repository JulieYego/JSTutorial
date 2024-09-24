'use strict';
console.log(this);

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};

calcAge(2001);

const calcAgeArrow = (birthYear) => {
  console.log(2024 - birthYear);
  console.log('Arrow function this', this);
};

calcAgeArrow(2000);

const artist = {
  firstName: 'Sabrina',
  lastName: 'Carpenter',
  birthYear: 1995,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.birthYear);
  },
};

const matilda = {
  birthYear: 1995,
};

artist.calcAge();
matilda.calcAge = artist.calcAge; // method borrowing
matilda.calcAge(); // this keyword is the object that is calling the method so it is matilda object

const f = artist.calcAge;
f(); // this is undefined in strict mode but in non-strict mode it is the global object because it is a regular function call
