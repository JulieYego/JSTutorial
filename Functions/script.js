// // // 'use strict';
// // // const bookings = [];

// // // const createBooking = function (
// // //   flightNum,
// // //   numPassengers = 1,
// // //   price = 199 * numPassengers
// // // ) {
// // //   //   numPassengers = numPassengers || 1;
// // //   //   price = price || 199;
// // //   const booking = {
// // //     flightNum,
// // //     numPassengers,
// // //     price,
// // //   };
// // //   console.log(booking);
// // //   bookings.push(booking);
// // // };

// // // createBooking('LH44'); // LH44,1,199
// // // createBooking('LH44', 2, 800); // LH44,2,800
// // // createBooking('LH44', 2); // LH44, 2, 398
// // // createBooking('LH44', 5); // LH44, 5, 995
// // // createBooking('LH44', undefined, 1000); // LH44,1,1000

// // // console.log(bookings);

// // // // function sayHello(fName = 'Malia') {
// // // //   console.log(`Hello ${fName}`);
// // // // }

// // // // sayHello(undefined);
// // // // sayHello(null);
// // // // sayHello();
// // // // sayHello('Lydia');

// // const flight = 'LH44';
// // const lewis = {
// //   name: 'Lewis Hamilton',
// //   passport: 123456789,
// // };

// // const checkIn = function (flightNum, passenger) {
// //   flightNum = 'LH01';
// //   passenger.name = 'Mr. ' + passenger.name;

// //   if (passenger.passport === 123456789) {
// //     alert('Checked In');
// //   } else {
// //     alert('wrong passport');
// //   }
// // };

// // // checkIn(flight, lewis);
// // // console.log(flight); // LH44
// // // console.log(lewis);

// // const newPassport = function (person) {
// //   person.passport = Math.trunc(Math.random() * 10000000000);
// // };

// // newPassport(lewis);
// // checkIn(flight, lewis);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// // transformer('JavaScript is the best!', upperFirstWord);
// // transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('👋🏾');
// };

// document.body.addEventListener('click', high5);

// // ['Kevin', 'Joe', 'Nick', 'Frankie'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);

// const sayHey = greet('Hey');
// const sayBye = greet('Bye');

// sayHey('Jonas');
// sayHey('Stewart');

// sayBye('Aria');

// greet('Hola')('Carlos');
// greetArrow('Hola')('Carlota');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function () {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
  },
};

lufthansa.book(239, 'Jonas');
lufthansa.book(635, 'John');
