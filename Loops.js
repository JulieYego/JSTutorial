// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weights repetition ${i}`);
// }

const viluArray = [
  'Violetta',
  'Castillo',
  2024 - 1995,
  ['Fran', 'Cami', 'Ludmi'],
];

// const types = [];

// for (let i = 0; i < viluArray.length; i++) {
//   //   console.log(viluArray[i], typeof viluArray[i]);

//   // Filling types array
//   //   types[i] = typeof viluArray[i];

//   types.push(typeof viluArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];

// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2024 - years[i]);
// }

// console.log(ages);

// console.log('---Just Strings___');
// for (let i = 0; i < viluArray.length; i++) {
//   if (typeof viluArray[i] !== 'string') continue;
//   console.log(viluArray[i], typeof viluArray[i]);
// }

// console.log('---Break with numbers___');
// for (let i = 0; i < viluArray.length; i++) {
//   if (typeof viluArray[i] === 'number') break;
//   console.log(viluArray[i], typeof viluArray[i]);
// }

// for (let i = viluArray.length - 1; i >= 0; i--) {
//   console.log(viluArray[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`-------Starting ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
//   }
// }

let rep = 1;
while (rep <= 10) {
  //   console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end');
}
