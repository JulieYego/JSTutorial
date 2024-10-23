// 'use strict';
// // // // const bookings = [];

// // // // const createBooking = function (
// // // //   flightNum,
// // // //   numPassengers = 1,
// // // //   price = 199 * numPassengers
// // // // ) {
// // // //   //   numPassengers = numPassengers || 1;
// // // //   //   price = price || 199;
// // // //   const booking = {
// // // //     flightNum,
// // // //     numPassengers,
// // // //     price,
// // // //   };
// // // //   console.log(booking);
// // // //   bookings.push(booking);
// // // // };

// // // // createBooking('LH44'); // LH44,1,199
// // // // createBooking('LH44', 2, 800); // LH44,2,800
// // // // createBooking('LH44', 2); // LH44, 2, 398
// // // // createBooking('LH44', 5); // LH44, 5, 995
// // // // createBooking('LH44', undefined, 1000); // LH44,1,1000

// // // // console.log(bookings);

// // // // // function sayHello(fName = 'Malia') {
// // // // //   console.log(`Hello ${fName}`);
// // // // // }

// // // // // sayHello(undefined);
// // // // // sayHello(null);
// // // // // sayHello();
// // // // // sayHello('Lydia');

// // // const flight = 'LH44';
// // // const lewis = {
// // //   name: 'Lewis Hamilton',
// // //   passport: 123456789,
// // // };

// // // const checkIn = function (flightNum, passenger) {
// // //   flightNum = 'LH01';
// // //   passenger.name = 'Mr. ' + passenger.name;

// // //   if (passenger.passport === 123456789) {
// // //     alert('Checked In');
// // //   } else {
// // //     alert('wrong passport');
// // //   }
// // // };

// // // // checkIn(flight, lewis);
// // // // console.log(flight); // LH44
// // // // console.log(lewis);

// // // const newPassport = function (person) {
// // //   person.passport = Math.trunc(Math.random() * 10000000000);
// // // };

// // // newPassport(lewis);
// // // checkIn(flight, lewis);

// // const oneWord = function (str) {
// //   return str.replace(/ /g, '').toLowerCase();
// // };

// // const upperFirstWord = function (str) {
// //   const [first, ...others] = str.split(' ');
// //   return [first.toUpperCase(), ...others].join(' ');
// // };

// // // Higher order function
// // const transformer = function (str, fn) {
// //   console.log(`Original string: ${str}`);
// //   console.log(`Transformed string: ${fn(str)}`);

// //   console.log(`Transformed by: ${fn.name}`);
// // };

// // // transformer('JavaScript is the best!', upperFirstWord);
// // // transformer('JavaScript is the best!', oneWord);

// // const high5 = function () {
// //   console.log('👋🏾');
// // };

// // document.body.addEventListener('click', high5);

// // // ['Kevin', 'Joe', 'Nick', 'Frankie'].forEach(high5);

// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };

// // const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);

// // const sayHey = greet('Hey');
// // const sayBye = greet('Bye');

// // sayHey('Jonas');
// // sayHey('Stewart');

// // sayBye('Aria');

// // greet('Hola')('Carlos');
// // greetArrow('Hola')('Carlota');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function () {},
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas');
// lufthansa.book(635, 'John');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book; // Method borrowing where we store the method in a variable then can be used as a regular function in elsewhere

// // book(23, 'Sarah Williams'); // Uncaught TypeError: Cannot read property 'airline' of undefined because 'this' keyword is undefined since book is now a regular function call not a method call

// // Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'DB Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Cooper Barnes');
// console.log(swiss);

// // bind method
// const bookEW = book.bind(eurowings); // a new function created with the 'this' keyword set to eurowings
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Martha Cooper');

// // function myFunction() {
// //   console.log(this);
// // }

// // // myFunction();

// // const obj = {
// //   someKey: 1,
// //   myFunction: myFunction,
// // };

// // obj.myFunction();
// // const newFunction = obj.myFunction;
// // newFunction(); // Window {}
// // newFunction.call(obj);

// const mercedes = {
//   team: 'Mercedes',
//   based: 'UK',
//   drivers: [],
//   bookDriver(driverNum, name) {
//     console.log(`${name} ${driverNum} booked a seat on ${this.team}`);
//     this.drivers.push({ name, driverNum });
//   },
// };

// mercedes.bookDriver(44, 'Lewis Hamilton');

// const ferrari = {
//   team: 'Ferrari',
//   based: 'Italy',
//   drivers: [],
// };
// const bookDriver = mercedes.bookDriver;

// // bookDriver(16, 'Charles Leclerc');
// bookDriver.call(ferrari, 16, 'Charles Leclerc');

// // mercedes.book(44, 'Lewis Hamilton');
// // console.log(mercedes);
// // mercedes.book(77, 'Valtteri Bottas');

// // Apply method
// bookDriver.apply(ferrari, [5, 'Sebastian Vettel']);

// // bind
// const bookFerrari = bookDriver.bind(ferrari);
// const bookFerrari99 = bookDriver.bind(ferrari, 99);
// bookFerrari(99, 'Michael Schumacher');
// bookFerrari99('Mick Schumacher');

// mercedes.bookDriver(44, 'Lewis Hamilton');

// // With event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// // lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23;

// console.log(addVAT(100));

// const addTax2 = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTax2(0.23);
// console.log(addVAT2(100));

// IIFE
const runOnce = function () {
  console.log('This will never run again');
  const isPrivate = 23; // this is encapsulated inside the runOnce function scope
};

(function () {
  console.log('This will never run again');
})();

(() => console.log('This will also never run again'))();
// console.log(isPrivate);
