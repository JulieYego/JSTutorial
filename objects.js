// const viluArray = [
//   'Violetta',
//   'Castillo',
//   2024 - 1995,
//   ['Fran', 'Cami', 'Ludmi'],
// ];

// console.log('Vilu array', viluArray);

// const viluObject = {
//   firstName: 'Violetta',
//   lastName: 'Castillo',
//   age: 2024 - 1995,
//   friends: ['Fran', 'Cami', 'Ludmi'],
// };

// console.log('Vilu object', viluObject);

// // const interestedIn = prompt('¿Qué quieres saber sobre Vilú?');
// // console.log(interestedIn);

// // if (viluObject[interestedIn]) {
// //   console.log(viluObject[interestedIn]);
// // } else {
// //   console.log('Nah try again bruh');
// // }

// console.log(
//   `${viluObject.firstName} ${viluObject.lastName} has ${viluObject.friends.length} friends and her best friend is called ${viluObject.friends[0]}`
// );

const viluObject = {
  firstName: 'Violetta',
  lastName: 'Castillo',
  birthYear: 1995,
  friends: ['Fran', 'Cami', 'Ludmi'],
  hasDriversLicense: false,

  //   calcAge: function (birthYear) {
  //     return 2024 - birthYear;
  //   },
  //   calcAge: function () {
  //     console.log(this);
  //     return 2024 - this.birthYear;
  //   },
  calcAge: function (birthYear) {
    this.age = 2024 - this.birthYear; // new property
    return this.age;
  },

  getSummary: function () {
    return `${
      this.firstName
    } is a ${this.calcAge()} year old teacher, and he has ${
      this.hasDriversLicense ? 'a' : 'no'
    } driver's license`;
  },
};

console.log(viluObject.calcAge());
console.log(viluObject.age);

console.log(viluObject.getSummary());
// console.log(viluObject['calcAge'](1995));
