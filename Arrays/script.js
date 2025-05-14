'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2025-03-08T14:11:59.604Z',
    '2025-03-20T17:01:17.194Z',
    '2025-03-25T18:49:59.371Z',
    '2025-03-26T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2025-03-25T18:49:59.371Z',
    '2025-03-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const formatMovement = function (date, locale) {
  const calsDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calsDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  // else {
  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  // }
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const combinedMovsDates = acc.movements.map((mov, i) => ({
    movement: mov,
    movementDate: acc.movementsDates.at(i),
  }));
  // const movs = sort
  //   ? acc.movements.slice().sort((a, b) => a - b)
  //   : acc.movements;

  if (sort) combinedMovsDates.sort((a, b) => a.movement - b.movement);

  combinedMovsDates.forEach(function (obj, index) {
    const { movement, movementDate } = obj;
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(movementDate);
    const displayDate = formatMovement(date, acc.locale);

    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // const formattedMov = new Intl.NumberFormat(acc.locale, {
    //   style: 'currency',
    //   currency: acc.currency,
    // }).format(movement);

    const formattedMov = formatCurrency(movement, acc.locale, acc.currency);
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formattedMov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  );
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurrency(
    incomes,
    account.locale,
    account.currency
  );

  const out = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurrency(
    Math.abs(out),
    account.locale,
    account.currency
  );

  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurrency(
    interest,
    account.locale,
    account.currency
  );
};
// calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

const startLogoutTimer = function () {
  function tick() {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }

    time--;
  }
  // set time to 5 minutes
  let time = 120;
  // call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

// Event handler
let currentAccount, timer;

// Fake always logged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// Experimenting with Intl API

btnLogin.addEventListener('click', function (event) {
  event.preventDefault(); // prevent forms from submitting

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and a welcome message
    labelWelcome.textContent = `Welcome back,${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Current date and time
    const now = new Date();
    console.log('NOW', now);
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      // second: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
      // era: 'long',
      // timeZoneName: 'long',
      // hour12: false,
      // timeZone: 'Africa/Nairobi',
      // timeStyle: 'short',
      // dateStyle: 'short',
    };

    // const locale = navigator.language;
    // console.log('LOCALE', locale);
    // labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(now);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2.0);
    // const min = `${now.getMinutes()}`.padStart(2.0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    setTimeout(function () {
      currentAccount.movements.push(amount);
      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());
      // Update UI
      updateUI(currentAccount);

      // Reset timer
      // Timer
      if (timer) clearInterval(timer);
      timer = startLogoutTimer();
    }, 2500);

    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    //.indexOf()

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// SLICE METHOD
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.console.log('DEL');slice(1, -2));
// console.log(arr.slice()); //shallow copy

// // SPLICE METHOD
// console.log(arr.splice(1, 2, 'f', 'g'));
// console.log(arr);

// // REVERSE METHOD
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());

// // CONCAT METHOD
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN METHOD
// console.log(letters.join(' - '));

// // AT
// const arr3 = [23, 11, 64];
// console.log(arr3[0]);
// console.log(arr3.at(0));
// // getting the last element
// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1)[0]);
// console.log(arr3.at(-1));

// // LOOPING ARRAYS: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // for (const movement of movements) {
// for (const [index, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1} : You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1} : You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log('---------------------------------');
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1} : You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1} : You withdrew ${Math.abs(movement)}`);
//   }
// });

// // forEach with Maps and Sets
// // Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// console.log(currencies);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });
// // Set
// const currenciesUnique = new Set(['USD', 'EUR', 'USD', 'GBP', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, set) {
//   console.log(`${value}: ${value}`);
// });

// const myArray = [1, 2, 3, 4, 5];
// console.log(myArray);
// console.log(`-----LOOPING THROUGH ARRAY-----`);
// console.log(`-----FOR LOOP-----`);
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }
// console.log(`-----FOR OF LOOP-----`);
// for (const num of myArray) {
//   console.log(num);
// }
// console.log(`-----FOR EACH METHOD-----`);
// myArray.forEach(function (num) {
//   console.log(num);
// });

// MAP METHOD
// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (movement) {
//   return movement * eurToUsd;
// });

// const movementsUSD = movements.map((movement) => movement * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

// console.log(movementsUSDfor);

// const movementsDescription = movements.map(
//   (mov, i, arr) =>
//     `Movement ${i + 1} : You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescription);

// FILTER METHOD
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawals = movements.filter((mov) => mov < 0);
// console.log(withdrawals);

// REDUCE METHOD
// const balance = movements.reduce(function (acc, mov, i, arr) {
//   console.log(`Iteration number ${i}:${acc}`);
//   return acc + mov;
// }, 0);

// const balance = movements.reduce((acc, mov) => acc + mov, 0);
// console.log(balance);

// let balanceFor = 0;
// for (const mov of movements) balanceFor += mov;
// console.log(balanceFor);

// maximum value of array
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);

// console.log(max);

// CHAINING METHODS
// movements.filter((mov) => mov > 0);
// console.log(max);

// const totalDepositsUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   // .map((mov) => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

// const firstWithdrawal = movements.find((mov) => mov < 0);

// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find((acc) => acc.owner === 'Jessica Davis');
// console.log(account);

// let jessica;
// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     jessica = acc;
//     break;
//   }
// }
// console.log('JESS', jessica);

// INCLUDES
// checks for equality
// console.log(movements);
// console.log(movements.includes(-130));

// SOME
// checks for a condition
// const anyDeposits = movements.some((mov) => mov > 0);
// console.log(anyDeposits);

// EVERY
// console.log(movements.every((mov) => mov > 0));
// console.log(account4.movements.every((mov) => mov > 0));

// separate callback
// const deposit = (mov) => mov > 0;
// console.log(movements);
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// FLAT
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat());

// const accountMovements = accounts.map((acc) => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// const overallBalance = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// // FLATMAP
// const overallBalance2 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

// SORT
// strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// numbers
// console.log(movements);
// console.log(movements.sort());

// return < 0, A, B (keep order)
// return > 0  B, A (switch order)
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);

// Suppose you want to take an array of sentences,
// split each sentence into words, and then flatten the resulting array.
// const sentences = ['Hello world', 'How are you'];
// // console.log(sentences.map((sentence) => sentence.split(' ')).flat());
// console.log(sentences.flatMap((sentence) => sentence.split(' ')));

// SORT
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// // Numbers
// console.log(movements);
// console.log(movements.sort());

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)
// ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

// movements.sort((a, b) => a - b);
// console.log(movements);

// descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
// movements.sort((a, b) => b - a);
// console.log(movements);

// Creating and Filling Arrays
// How to programatically create and fill arrays
// Empty arrays + fill method
// const arr = [1, 2, 3, 4, 5];
// console.log(new Array(1, 2, 3, 4, 5));
// in these cases we already have the data so we can create the array manually/directly
// but we can create arrays programatically without having to define all items manually

// const x = new Array(7);
// console.log(x); // empty array with 7 empty slots
// Array() function creates a new empty array with that length whenever we only pass in one argument
// map method doesn't work on empty arrays
// an array created like this is called a sparse array
// it doesn't have any elements but only empty slots
// methods that iterate over arrays like map, forEach, reduce, etc. ignore empty slots
// methods that modify or access elements in an array will work with empty slots like fill, push, pop, shift, unshift, splice, etc.
// fill method fills all the elements of an array with a static value
// x.fill(1);
// x.fill(1, 3);
// x.fill(1, 3, 6);

// console.log(x);
// Pass in a value and it will then fill up the entire array with this specific value.
// Mutate the underlying array
// we can also specify where we want it to start to fill.
// can also be used with other arrays

// arr.fill(23, 2, 6);
// console.log(arr);

// So what if he wanted to create this arr array programmatically?
// So here we are not using the from here as a method on an array.
// Instead we are using it on the Array() constructor.
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

//The callback function is exactly like the one in a map() method.
// Imagine that you're using this as a callback function in calling the map() method on an empty array.
// We get access to the current element and the index so adding one to the index will then give us values from one to seven.
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// Array.from() function was initially introduced into JavaScript in order to create arrays from array like structures (iterables) - convert them into arrays.
// But it can also be used to create arrays from scratch like we did here.

// We used a Array.from() to create an array from the result of the querySelectorAll() which is a NodeList, which is not really an array,but an array like structure
// And then as a second step,we even included a mapping function,which then forms that initial array to an array exactly as we want it.
// Basically converting the raw element to its text content and replacing the Euro sign with nothing.
// In the end, we end up exactly with the array of numbers that we intended.
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    (element) => Number(element.textContent.replace('€', '')) // callback function
  );
  // you can also use destructuring to convert it to an array though you'd have to do the mapping separately
  // const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  // console.log(movementsUI);
});

// 1. How much has been deposited in total in the bank
// const bankDepositSum = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(bankDepositSum);

// // 2. How many deposits there have been in the bank with at least $1,000
// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov >= 1000).length;

// const numDeposits1000_ = accounts
//   .flatMap((acc) => acc.movements)
//   // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000);
// console.log(numDeposits1000_);

// let a = 20;
// console.log(a++); // 20
// console.log(a); // 21

// let b = 20;
// console.log(++b); // 21
// console.log(b); // 21

// 3. Create an object which contains the sum of the deposits and of the withdrawals
// const { deposits, withdrawals } = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits, withdrawals);

// 4. Convert any string to title case
// const convertTitleCase = function (title) {
//   const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');

//   return capitalize(titleCase);
// };
// const convertTitleCase = function (title) {
//   const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map((word) => {
//       if (exceptions.includes(word)) {
//         return word;
//       } else {
//         return word.replace(word[0], word[0].toUpperCase());
//       }
//     })
//     .join(' ');

//   return titleCase;
// };
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// console.log(23 === 23.0);

// // Conversion
// console.log(Number('19'));
// console.log(+'19');

// Parsing
// convert strings to numbers
// console.log(Number.parseInt('30px')); // 30
// console.log(Number.parseInt('30px')); // string has to start with a number
// // it tries to get rid of unneceessary symbols which are not numbers
// // accepts second argument ~ radix -> the base of the numeral system we are using
// console.log(Number.parseInt('30px', 10)); // 30

// ignores trailing non-numeric characters

// console.log(Number.parseFloat('2.5rem'));
// global functions thus the below also works
// console.log(parseFloat('2.5rem')); // when you need to read a value from a string

// console.log(Number.isNaN(20)); // false // used to check if any value is a number.
// // dividing by 0 gives us infinity
// console.log(Number.isNaN('20')); // false
// console.log(Number.isNaN(+'20px')); // true
// console.log(Number.isNaN(23 / 0)); // false because isNaN() it does not consider this use case

// The isNaN() function in JavaScript is used to determine whether a value is NaN (Not-a-Number).
// It returns true if the value is NaN or cannot be converted into a number; otherwise, it returns false.
//  The value to be tested is converted to a number before checking
// If the value cannot be coerced into a valid number, isNaN() returns true.
// If the value is a valid number, isNaN() returns false.

// isFinite()
// used to determine whether a given value is a finite number
// It returns true if the value is a finite number(neither Infinity, Infinity, or NaN), and false otherwise
// best way to check if a value is a number
// console.log('isFinite()');
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20px'));
// console.log(Number.isFinite(23 / 0));

// console.log(Number.isInteger(23)); // true
// console.log(Number.isInteger(23.0)); // true
// console.log(Number.isInteger(23 / 0)); // false

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

// operations with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(Number(future));
console.log(+future);

const calsDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days = calsDaysPassed(new Date(2037, 10, 29), new Date(2037, 10, 19));
console.log(days);

// Internatializing numbers
const num = 3884764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  useGrouping: false,
};
console.log('US  : ', new Intl.NumberFormat('en-US', options).format(num));
console.log('GER : ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('SYR : ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);

// const ingredients = ['chicken', 'bacon'];
// const sandwichTimer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your sandwich with ${ing1} and ${ing2}`),
//   3000,
//   ...ingredients
// );
// console.log('Waiting...');

// if (ingredients.includes('cheese')) clearTimeout(sandwichTimer);

// setInterval
// setInterval(function () {
//   const now = new Date();
//   const hour = new Date().getHours();
//   const min = new Date().getMinutes();
//   const sec = new Date().getSeconds();
//   console.log(`${hour}:${min}:${sec}`);
// }, 1000);

// const intervalId = setInterval(
//   (name) => console.log(`Hello ${name}`),
//   1000,
//   ' Hi Lane'
// );

// setTimeout(() => clearInterval(intervalId), 5000);
// clearInterval(intervalId);
