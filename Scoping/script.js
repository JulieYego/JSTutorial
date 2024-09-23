'use strict';

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    let output = `${firstName}, you are the ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Frank'; // creating a new variable with the same name as outer scope's variable
      output = 'NEW OUTPUT'; // reassigning outer scope's variable
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // console.log(str);
    console.log(millenial);
    console.log(output);
    // add(9, 9);
  }

  printAge();

  return age;
}

const firstName = 'Bryson';
calcAge(1989);

// printAge(); this won't work as it cannot be accessed (out of scope)
