'use strict';

function logger() {
  console.log('My name is julie');
}

logger();

function lemonadeMaker(pineapples, lemons) {
  console.log(pineapples, lemons);
  const lemonade = `Juice with ${pineapples} pineapples and ${lemons} lemons`;
  return lemonade;
}

const pineappleLemonade = lemonadeMaker(1, 3);
const pineappleJuice = lemonadeMaker(3, 0);
console.log(pineappleLemonade);
console.log(pineappleJuice);
