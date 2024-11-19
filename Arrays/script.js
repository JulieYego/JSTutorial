'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__value">${movement}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
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
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (event) {
  event.preventDefault(); // prevent forms from submitting

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and a welcome message
    labelWelcome.textContent = `Welcome back,${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Update UI
    updateUI(currentAccount);
    // Clear input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
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
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);

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
  displayMovements(currentAccount.movements, !sorted);
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
console.log(movements);
console.log(movements.includes(-130));

// SOME
// checks for a condition
const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

// separate callback
const deposit = (mov) => mov > 0;
console.log(movements);
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// FLAT
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());

// const accountMovements = accounts.map((acc) => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

const overallBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// FLATMAP
const overallBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

// SORT
// strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// numbers
console.log(movements);
// console.log(movements.sort());

// return < 0, A, B (keep order)
// return > 0  B, A (switch order)
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movements);

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
const arr = [1, 2, 3, 4, 5];
console.log(new Array(1, 2, 3, 4, 5));
// in these cases we already have the data so we can create the array manually/directly
// but we can create arrays programatically without having to define all items manually

const x = new Array(7);
console.log(x); // empty array with 7 empty slots
// Array() function creates a new empty argument with that length whenever we only pass in one argument
// map method doesn't work on empty arrays
// an array created like this is called a sparse array
// it doesn't have any elements but only empty slots
// methods that iterate over arrays like map, forEach, reduce, etc. ignore empty slots
// methods that modify or access elements in an array will work with empty slots like fill, push, pop, shift, unshift, splice, etc.
// fill method fills all the elements of an array with a static value
x.fill(1);
// x.fill(1, 3, 5);
console.log(x);
// Pass in a value and it will then fill up the entire array with this specific value.
// Mutate the underlying array
// we can also specify where we want it to start to fill.
// can also be used with other arrays

arr.fill(23, 2, 6);
console.log(arr);

// So what if he wanted to create this arr array programmatically?
// So here we are not using the from here as a method on an array.
// Instead we are using it on the Array() constructor.
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

//The callback function is exactly like the one in a map() method.
// Imagine that you're using this as a callback function in calling the map() method on an empty array.
// We get access to the current element and the index so adding one to the index will then give us values from one to seven.
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

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
  console.log(movementsUI);
});

// 1. How much has been deposited in total in the bank
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositSum);

// 2. How many deposits there have been in the bank with at least $1,000
// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov > 1000).length;
const numDeposits1000 = accounts.flatMap((acc) => acc.movements).reduce();
console.log(numDeposits1000);
