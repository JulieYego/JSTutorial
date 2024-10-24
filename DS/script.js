'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// const arr = [2, 3, 4];
// const badNewArr = [0, 1, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const goodNewArr = [0, 1, ...arr];
// console.log(goodNewArr);
// console.log(...goodNewArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const str = 'Jules';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// const newRestaurant = { foundedIn: 1910, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy);

// spread
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log('a:', a, 'b:', b, 'others:', others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log('Weekdays:\n', weekdays);

// const add = function (...numbers) {
//   // console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];

//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1);

// const x = [23, 5, 7];
// restaurant.orderPizza('bacon', 'pepperoni', 'mushrooms');
// restaurant.orderPizza('bacon', 'pepperoni', 'mushrooms');

// Short circuiting
// console.log('------OR--------');
// console.log(3 || 'Dreamer'); // 3
// console.log('' || 'Dreamer'); // Dreamer
// console.log(true || 0); // true
// console.log(undefined || null); // null
// console.log(undefined || 0 || '' || 'Hola' || 23 || null); // Hola

// restaurant.numGuests = 22;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('------AND--------');
// console.log(0 && 'Sabrina');
// console.log(7 && 'Sabrina');
// console.log('Hola' && 23 && null && 'Sabrina');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('bacon', 'pepperoni');
// }

// restaurant.orderPizza && restaurant.orderPizza('bacon', 'bbq steak');

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);
// const rightGuests = restaurant.numGuests ?? 10;
// console.log(rightGuests);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Ruggero Pasquerelli',
// };

// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;

// rest2.numGuests ||= 10;
// rest1.numGuests ||= 10;

// rest2.numGuests ??= 10;
// rest1.numGuests ??= 10;

// rest2.owner = rest2.owner && '<ANON>';
// rest1.owner = rest1.owner && '<ANON>';

// rest1.owner &&= '<ANON>';
// rest2.owner &&= '<ANON>';

// console.log(rest1);
// console.log(rest2);

// For-of loop
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (let i = 0; i < menu2.length; i++) {
  console.log(menu2[i]);
}

for (const menuItem of menu2) console.log('For-of', menuItem);

for (const [index, menuItem] of menu2.entries())
  console.log(`${index + 1}:${menuItem}`);

// console.log(restaurant.openingHours.mon.open);

if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// Optional chaining
// console.log(restaurant.openingHours?.mon?.open);

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of weekdays) {
//   console.log('Day', day);
//   console.log(openingHours[day]?.open);
// }

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} we open at ${open}`);
// }

// console.log(
//   restaurant.orderPasta?.('bacon', 'ham', 'cheese') ?? 'Method does not exist'
// );

// const users = [{ name: 'Lucia', email: 'lucia67@email.com' }];
// console.log(users[0]?.name) ?? 'User array empty';

// Looping over objects
// Property names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of Object.keys(openingHours)) openStr += `${day}, `;
// console.log(openStr);

// Property values

const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// Sets
// const orderSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pizza', 'Pasta']);
// console.log('OrderSet\n', orderSet);

// const strSet = new Set('Jules');
// console.log(strSet);
// console.log(strSet.size);

// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));

// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// console.log(orderSet);

// orderSet.delete('Risotto');
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const uniqueStaff = new Set(staff);
// const uniqueStaffArray = [...new Set(staff)];
// console.log(uniqueStaff);
// console.log(uniqueStaffArray);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('JulieJemutaiYego').size);

// // Maps
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :)')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// // rest.clear();
// console.log(rest);

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.get(arr));

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(answer === 3 ? question.get(true) : question.get(false));
// question.get(question.get('correct') === answer);

console.log([...question]);
console.log([...question.keys()]);
