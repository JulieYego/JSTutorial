const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log('Tips', tips);
console.log('Totals', totals);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

const average = calcAverage(totals);
console.log('Average', average);

// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:
// Create an array called bills containing all 10 test bill values.
// Create empty arrays for the tips and the totals (tips and totals)
// Use the calcTip function we wrote before (included in the starter code)
// to calculate tips and total values (bill + tip) for every bill value in the bills array.
// Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

// BONUS:
// Write a function calcAverage which takes an array called arr as an argument.
// This function calculates the average of all numbers in the given array.
// This is a DIFFICULT challenge (we haven't done this before)!
// First, you will need to add up all values in the array.
// To do the addition, start by creating a variable sum that starts at 0.
// Then loop over the array using a for loop. In each iteration, add the current value to the sum variable.
// This way, by the end of the loop, you have all values added together.

// To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

// Call the function with the totals array.
