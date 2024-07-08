'use strict';

function logger() {
  console.log('My name is julie');
}

logger();

function cutToPieces(fruit) {
  return fruit * 4;
}
// function declaration
function lemonadeMaker(pineapples, lemons) {
  const pineapplePieces = cutToPieces(pineapples);
  const lemonPieces = cutToPieces(lemons);

  console.log(pineapples, lemons);
  const lemonade = `Juice with ${pineapples} pineapples and ${lemons} lemons`;
  const lemonadePieces = `Juice with ${pineapplePieces} pineapple pieces and ${lemonPieces} lemon pieces`;
  return lemonadePieces;
}

const pineappleLemonade = lemonadeMaker(1, 3);
const pineappleJuice = lemonadeMaker(3, 0);
console.log(pineappleLemonade);
console.log(pineappleJuice);

function calculateAge(birthYear) {
  const currentYear = 2024;
  return currentYear - birthYear;
}

const calcAgeExpression = function (birthYear) {
  const currentYear = 2024;
  return currentYear - birthYear;
};

const calcAge = (birthYear) => {
  const currentYear = 2024;
  return currentYear - birthYear;
};

const age = calculateAge(2001);
console.log(age);

const ageExpression = calcAgeExpression(2001);
console.log(ageExpression);

const ageAnon = calcAge(2001);
console.log(ageAnon);

// Function declaration can be called before defining the function
// Function expressions have to be defined before calling them
// A function is a value thus can be stored in a variable

// Key Differences

// Hoisting:
// Function Declarations: Hoisted to the top of their scope. You can call the function before its declaration.
// Function Expressions: Not hoisted. You must define the function before calling it.

// Syntax:
// Function Declarations: Defined with the function keyword, followed by the function name.
// Function Expressions: Defined as part of a variable assignment, using the function keyword.

// Use Cases:
// Function Declarations: Typically used for defining named functions that can be called anywhere in their scope.
// Function Expressions: Often used for defining anonymous functions or when functions need to be passed as arguments to other functions (e.g., callbacks).

// Function Name:
// Function Declarations: Always have a name.
// Function Expressions: Can be named or anonymous.

// Arrow Functions
// Introduced in ES6.
// Arrow functions are a more concise way of writing function expressions.
// Arrow functions allow us to write shorter function syntax:
// special form of function expressions that are shorter and faster to write.

function calculateAgeDeclaration(birthYear) {
  return 2024 - birthYear;
}

const calculateAgeExpression = function (birthYear) {
  return 2024 - birthYear;
};

// For one-liner functions, the return happens implicitly, the value will be returned automatically without us having to explicitly write the return keyword
// do not have their own this keyword
const calculateAgeArrow = (birthYear) => 2024 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(2001, 'Julie'));
console.log(yearsUntilRetirement(1998, 'June'));

// Functions calling other functions

const calcAgePractice = function (birthYear) {
  return 2037 - birthYear;
};
const calcAgeArrowPractice = (birthYear) => 2024 - birthYear;

const yearsUntilRetirementPractice = function (birthYear, firstName) {
  // const age = 2024 - birthYear;
  const age = calcAgePractice(birthYear);

  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} retires in ${retirement} years.`);
    return -1;
  }
};

// return immediately exits the function
console.log(yearsUntilRetirementPractice(2001, 'Julie'));
console.log(yearsUntilRetirementPractice(1970, 'Dead'));
