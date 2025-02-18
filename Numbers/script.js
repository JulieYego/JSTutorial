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
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3)); // cubic root

// // Max and Min value
// console.log(Math.max(4, 22, 6, 19, 24));
// console.log(Math.max(4, 22, 6, '19', 24));
// console.log(Math.max(4, 22, 6, '19 yrs', 24));

// // Constants
// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Random number generator
// random number btwn 1 and 6
// console.log(Math.trunc(Math.random() * 6) + 1);

// random number function
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(randomInt(10, 20));
// console.log(randomInt(0, 3));

// // Rounding integers
// console.log(Math.trunc(23.3));

// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// console.log(Math.floor(23.3));
// console.log(Math.floor('23.9'));

// console.log(Math.trunc(-23.3));
// console.log(Math.floor(-23.3));

// // Rounding decimals
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log(+(2.345).toFixed(2));

// Remainder Operator
// console.log(5 % 2);
// console.log(5 / 2); // 5 = (2 * 2) + 1
// console.log(8 % 3);
// console.log(8 / 3); // 8 = (2 * 3) + 2

// whether a number is even or odd
// const isEven = (n) => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// Numeric Separators
// const diameter = 287_460_000_000;
// console.log(diameter);

// const price = 345_99;
// console.log(price);

// const transferFee = 15_00;
// const transFee = 1_500;
// console.log(transFee, transferFee);

// const PI = 3.14_15; //3.1415
// // const PI = _3.1415 // not alllowed
// // const PI = 3._1415 // not allowed
// // const PI = 3.14__15 // not allowed
// console.log(PI);

// console.log(Number('23000'))
// console.log(Number('23_000')) // not allowed

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);

// console.log(123456876543523253543523414325354636364);
// console.log(123456876543523253543523414325354636364n);
// console.log(BigInt(123456876543523253543523414325354636364n));

// // Operators
// console.log(10000n + 10000n);
// console.log(345883829858539929488684392049586349n * 10000n);

// const hugeNum = 345883829858539929488684392049586349n;
// const num = 2;
// console.log(hugeNum * num);

// Exceptions
// console.log(20n > 15);
// console.log(20n === 20);
// console.log(typeof 20n);
// console.log(20n === '20');
// console.log(hugeNum + ' is huge');

// // Divisions
// console.log(12n / 3n);
// console.log(10n / 3n);
// console.log(10 / 3);

// Create a Date
// const now = new Date();
// console.log('Now', now);
// console.log(new Date('July 19,2001'));

// console.log(new Date(2022, 10, 19, 15, 23, 5));
// console.log(new Date(2022, 7, 19));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142246180000));
console.log(Date.now());

future.setFullYear(2040);
console.log(future);
