// console.log(23 === 23.0);

// // Conversion
// console.log(Number('19'));
// console.log(+'19');

// // Parsing
// // convert strings to numbers
// // console.log(Number.parseInt('30px')); // 30
// // console.log(Number.parseInt('30px')); // string has to start with a number
// // // it tries to get rid of unneceessary symbols which are not numbers
// // // accepts second argument ~ radix -> the base of the numeral system we are using
// // console.log(Number.parseInt('30px', 10)); // 30

// // ignores trailing non-numeric characters

// // console.log(Number.parseFloat('2.5rem'));
// // global functions thus the below also works
// // console.log(parseFloat('2.5rem')); // when you need to read a value from a string

// console.log(Number.isNaN(20)); // false // used to check if any value is a number.
// // dividing by 0 gives us infinity
// console.log(Number.isNaN('20')); // false
// console.log(Number.isNaN(+'20px')); // true
// console.log(Number.isNaN(23 / 0)); // false because isNaN() it does not consider this use case

// // The isNaN() function in JavaScript is used to determine whether a value is NaN (Not-a-Number).
// // It returns true if the value is NaN or cannot be converted into a number; otherwise, it returns false.
// //  The value to be tested is converted to a number before checking
// // If the value cannot be coerced into a valid number, isNaN() returns true.
// // If the value is a valid number, isNaN() returns false.

// // isFinite()
// // used to determine whether a given value is a finite number
// // It returns true if the value is a finite number(neither Infinity, Infinity, or NaN), and false otherwise
// // best way to check if a value is a number
// console.log('isFinite()');
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20px'));
// console.log(Number.isFinite(23 / 0));

// console.log(Number.isInteger(23)); // true
// console.log(Number.isInteger(23.0)); // true
// console.log(Number.isInteger(23 / 0)); // false

// Square Root
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3)); // cubic root

// Max and Min value
console.log(Math.max(4, 22, 6, 19, 24));
console.log(Math.max(4, 22, 6, '19', 24));
console.log(Math.max(4, 22, 6, '19 yrs', 24));

// Constants
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Random number generator
// random number btwn 1 and 6
console.log(Math.trunc(Math.random() * 6) + 1);

// random number function
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomInt(10, 20));
console.log(randomInt(0, 3));

// Rounding integers
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log(+(2.345).toFixed(2));
