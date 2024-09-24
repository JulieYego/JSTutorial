'use strict';
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2024 - birthYear);
//   console.log(this);
// };

// calcAge(2001);

// const calcAgeArrow = (birthYear) => {
//   console.log(2024 - birthYear);
//   console.log('Arrow function this', this);
// };

// calcAgeArrow(2000);

// const artist = {
//   firstName: 'Sabrina',
//   lastName: 'Carpenter',
//   birthYear: 1995,
//   calcAge: function () {
//     console.log(this);
//     console.log(2024 - this.birthYear);
//   },
// };

// const matilda = {
//   birthYear: 1995,
// };

// artist.calcAge();
// matilda.calcAge = artist.calcAge; // method borrowing
// matilda.calcAge(); // this keyword is the object that is calling the method so it is matilda object

// const f = artist.calcAge;
// f(); // this is undefined in strict mode but in non-strict mode it is the global object because it is a regular function call
var firstName = 'Global firstName';

const artist = {
  firstName: 'Sabrina',
  lastName: 'Carpenter',
  birthYear: 1995,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.birthYear);

    // Solution 1
    const self = this; // self or that which is a common convention to store this keyword in a variable
    const isGenZ = function () {
      console.log(this);
      console.log(self);
      console.log(self.birthYear >= 1995 && self.birthYear <= 2012); // self here is the artist object...this is an old way of solving the this keyword problem
    };

    // Solution 2
    const isGenZArrow = () => {
      console.log(this);
      console.log(this.birthYear >= 1995 && this.birthYear <= 2012); // arrow function uses the this keyword of its parent scope that is the calcAge method which has this keyword as the artist object
    };
    isGenZ();
  },
  greet: () => {
    console.log('Greet arrow function', this);
    console.log(`Hey ${this.firstName}`);
  },
};

artist.greet(); // Hey undefined because arrow function does not have its own this keyword so it uses the global object which is window object in the browser and there is no firstName property in the window object...with a var keyword it would have worked because var keyword creates a property on the global object

// Best practice is to avoid using arrow functions as methods
artist.calcAge();

// Arguments keyword
const addExpression = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpression(2, 3, 9, 90);
