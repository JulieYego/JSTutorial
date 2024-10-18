// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log('Janette'[4]);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log('Port Louis'.slice(5, 8));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log('Port Louis'.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat');
//   } else {
//     console.log('Luckyyy');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

//Fix capitilization in a name
// const passanger = 'jUlIE';
// const passangerLower = passanger.toLowerCase();
// const passangerCorrect =
//   passangerLower[0].toLocaleUpperCase() + passangerLower.slice(1);
// console.log(passangerCorrect);

// const fixPassangerName = function (passangerName) {
//   const passangerLower = passangerName.toLowerCase();
//   const passangerCorrect =
//     passangerLower[0].toLocaleUpperCase() + passangerLower.slice(1);
//   return passangerCorrect;
// };

// console.log(fixPassangerName('jANette'));

// Comparing email
// const email = 'hello@julie.io';
// const loginEmail = ' Hello@Julie.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// const compareEmail = function (email, loginEmail) {
//   const normalizedEmail = loginEmail.toLowerCase().trim();
//   return normalizedEmail === email ? true : false;
// };

// console.log(compareEmail('julie@gmail.com', '  JULIE@GMAIL.com    '));

// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = `All passangers come to boarding door 23. Boarding door 23!`;
// console.log(announcement.replaceAll('door', 'gate'));

// const plane2 = 'Airbus A320neo';
// console.log(plane2.includes('A320'));
// console.log(plane2.includes('Boeing'));

// console.log(plane2.startsWith('Air'));

// if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
//   console.log('Part of the new airbus family');
// }

// // Practice
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// };

// checkBaggage('I have a laptop some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Julie Jemutai Yego'.split(' '));

const [fName, lName] = 'Julie Jemutai'.split(' ');

const newName = ['Mr', fName, lName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeString = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeString('carlos sainz vázquez de castro');
capitalizeString('julie yego');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Julie'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (cardNumber) {
  const str = cardNumber + '';
  //   const str = String(cardNumber)
  const lastFourChar = str.slice(-4);
  return lastFourChar.padStart(str.length, '*');
};

console.log(maskCreditCard(4335675432345321));
console.log(maskCreditCard(23456789));
console.log(maskCreditCard('2334532567885222'));

// Repeat
const messageWeather = 'Bad weather...All departures delayed ';
console.log(messageWeather.repeat(5));

const planesInLane = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLane(5);
planesInLane(3);
planesInLane(12);
