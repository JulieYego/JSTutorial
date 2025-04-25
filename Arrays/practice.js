// // Basic
// // Given an array of numbers, return a new array with each number squared.
// const nums = [1, 2, 3, 4, 5];
// console.log(nums.map((num) => num ** 2));
// // Output: [1, 4, 9, 16, 25]

// // From an array of numbers, return only the even numbers.
// const numss = [1, 2, 3, 4, 5, 6];
// console.log(numss.filter((num) => num % 2 === 0));
// // Output: [2, 4, 6]

// // Find the first number in the array that is greater than 10.
// const numsss = [3, 7, 12, 18, 5];
// console.log(numsss.find((num) => num > 10));
// // Output: 12

// // Check if the array contains the number
// const numssss = [3, 7, 12, 18, 5];
// console.log(numssss.includes(7));
// // Output: true

// // Add the number 10 to the end of the array, then remove the last element.
// const nums2 = [1, 2, 3];
// console.log(nums2.push(10));
// console.log(nums2.pop());

// // Sort an array of strings alphabetically
// const fruits = ['banana', 'apple', 'grape', 'mango'];
// console.log(fruits.sort());
// // Output: ['apple', 'banana', 'grape', 'mango']

// // Calculate the total sum of an array of numbers
// const nums3 = [10, 20, 30, 40];
// console.log(nums3.reduce((sum, num) => (sum += num), 0));
// // Output: 100

// // Reverse the order of elements in an array
// const nums4 = [1, 2, 3, 4, 5];
// console.log(nums4.reverse());
// // Output: [5, 4, 3, 2, 1]

// // Flatten a nested array into a single-level array
// const arr = [1, [2, 3], [4, 5]];
// console.log(arr.flat());
// // Output: [1, 2, 3, 4, 5]

// // Merge two arrays into one
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// console.log(arr1.concat(arr2));
// // Output: [1, 2, 3, 4, 5, 6]

// // From an array of numbers, return the square of even numbers in ascending order.
// const nums5 = [5, 3, 8, 1, 2];
// console.log(
//   nums5
//     .filter((num) => num % 2 === 0)
//     .map((evenNum) => evenNum * evenNum)
//     .sort()
// );
// // Output: [4, 64]

// // Group an array of objects by a property (e.g., category)
// const items = [
//   { name: 'apple', category: 'fruit' },
//   { name: 'carrot', category: 'vegetable' },
//   { name: 'banana', category: 'fruit' },
// ];
// console.log(
//   items.reduce((groceries, item) => {
//     // console.log('GROCERIES', groceries);
//     // console.log('ITEM CAT', item.category);
//     groceries[item.category] = groceries[item.category] || [];
//     // console.log('groceries 2', groceries);
//     groceries[item.category].push(item.name);
//     // console.log('groceries 3', groceries);
//     return groceries;
//   }, {})
// );
// // Output: { fruit: ['apple', 'banana'], vegetable: ['carrot'] }

// // Remove duplicate values from an array
// const nums56 = [1, 2, 2, 3, 4, 4, 5];
// console.log([...new Set(nums56)]);
// // Output: [1, 2, 3, 4, 5]

// // Count how many times each element appears in an array
// const fruitsz = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// // Output: { apple: 3, banana: 2, orange: 1 }
// console.log(
//   fruitsz.reduce((acc, fruit) => {
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     return acc;
//   }, {})
// );

// Split an array into two groups based on a condition (e.g., odd and even numbers)
const nums78 = [1, 2, 3, 4, 5, 6];
console.log(
  nums78.reduce(
    (acc, num) => {
      num % 2 === 0 ? acc.even.push(num) : acc.odd.push(num);
      return acc;
    },
    { odd: [], even: [] }
  )
);
// Output: { odd: [1, 3, 5], even: [2, 4, 6] }

// // Sort an array of objects by a numeric property in descending order
// const players = [
//   { name: 'Alice', score: 50 },
//   { name: 'Bob', score: 70 },
//   { name: 'Charlie', score: 40 },
// ];
// console.log(players.sort((a, b) => b.score - a.score));
// // Output: [{ name: 'Bob', score: 70 }, { name: 'Alice', score: 50 }, { name: 'Charlie', score: 40 }]

// // Split an array into chunks of a specific size
// const nums12 = [1, 2, 3, 4, 5, 6];
// const chunkSize = 2;
// // Output: [[1, 2], [3, 4], [5, 6]]

// const itemsTest = { name: 'apple', category: 'fruit' };

// Count Occurrences of Items
// Given an array of strings, count how many times each string appears
// const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const result = words.reduce((acc, word) => {
//   // Your code here
//   // if (acc[word]) {
//   //   acc[word] += 1;
//   // } else {
//   //   acc[word] = 1;
//   // }

//   // acc[word] = acc[word] ? acc[word] + 1 : 1;
//   // acc[word] ??= 0;
//   // acc[word]++;

//   return acc;
// }, {});

// console.log(result);
// Expected Output: { apple: 3, banana: 2, orange: 1 }

// Group by Property
// Given an array of objects, group them by a specific property
// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 25 },
//   { name: 'David', age: 30 },
//   { name: 'Eve', age: 35 },
// ];

// const result = people.reduce((acc, person) => {
//   //Your code here
//   // if (acc[person.age]) {
//   //   acc[person.age].push(person);
//   // } else {
//   //   acc[person.age] = [person];
//   // }
//   acc[person.age] ??= [].push(person);

//   return acc;
// }, {});

// console.log(result);
// Expected Output:
// {
//   25: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }],
//   30: [{ name: "Bob", age: 30 }, { name: "David", age: 30 }],
//   35: [{ name: "Eve", age: 35 }]
// }

//  Transform to Key-Value Pairs
// Convert an array of objects into a single object where a specific property becomes the key, and another property becomes the value
// const items = [
//   { id: 1, name: 'Laptop' },
//   { id: 2, name: 'Phone' },
//   { id: 3, name: 'Tablet' },
// ];

// const result = items.reduce((acc, item) => {
//   // Your code here'
//   acc[item.id] = item.name;

//   return acc;
// }, {});

// console.log(result);
// Expected Output: { 1: "Laptop", 2: "Phone", 3: "Tablet" }

// Sum Values by Category
// Given an array of transactions, sum the amounts for each category.
// const transactions = [
//   { category: "food", amount: 10 },
//   { category: "transport", amount: 15 },
//   { category: "food", amount: 20 },
//   { category: "shopping", amount: 50 }
// ];

// const result = transactions.reduce((acc, transaction) => {
//   // Your code here
// }, {});

// console.log(result);
// Expected Output: { food: 30, transport: 15, shopping: 50 }

// Flatten Nested Arrays into an Object
// Flatten an array of nested arrays where the first element becomes the key and the second becomes the value
// const pairs = [
//   ["name", "Alice"],
//   ["age", 25],
//   ["city", "New York"]
// ];

// const result = pairs.reduce((acc, pair) => {
//   // Your code here
// }, {});

// console.log(result);
// // Expected Output: { name: "Alice", age: 25, city: "New York" }

// Calculate Average Scores
// Given an array of student objects, calculate the average score for each subject.
// const students = [
//   { name: "Alice", math: 85, science: 90 },
//   { name: "Bob", math: 75, science: 80 },
//   { name: "Charlie", math: 95, science: 70 }
// ];

// const result = students.reduce((acc, student) => {
//   // Your code here
// }, {});

// console.log(result);
// // Expected Output:
// // { math: 85, science: 80 }

// Combine Arrays into an Object
// Given two arrays, one with keys and another with values, combine them into an object.
// const keys = ["name", "age", "city"];
// const values = ["Alice", 25, "New York"];

// const result = keys.reduce((acc, key, index) => {
//     // Your code here
// }, {});

// console.log(result);
// Expected Output: { name: "Alice", age: 25, city: "New York" }

// Create an array of numbers from 1 to 5.
// Access the first and last elements of an array

// const arr = [1, 2, 3, 4, 5];
// console.log(arr[0], arr[arr.length - 1]);

// Array Methods Practice
// Add an element to the end (push) and start (unshift) of an array.
// Remove an element from the end (pop) and start (shift) of an array.
// Concatenate two arrays (concat)

const arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   console.log('For loop', arr[i]);
// }

// for (const num of arr) {
//   console.log('For...of', num);
// }

// arr.forEach((num) => {
//   console.log('ForEach', num);
// });

// const doubled = arr.map((num) => num * 2);
// console.log('Doubled', doubled);

// const odd = arr.map((num) => num % 2 === 1);
// console.log('Odd', odd);

// const sum = arr.reduce((acc, num) => acc + num, 0);
// console.log('Sum', sum);
// let max = 0;
// for (const num of arr) {
//   if (num > max) {
//     max = num;
//   }
// }
// console.log('Max', max);
// console.log(Math.max(...arr));
// console.log(arr.includes(3));

// const arr_set = new Set(arr);
// console.log([...arr_set]);
// console.log(arr.reverse());

// for (let i = 0; i <= 15; i++) {
//   if (i % 3 === 0) {
//     console.log('Fizz');
//   }

//   if (i % 5 === 0) {
//     console.log('Bizz');
//   }

//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBizz');
//   } else {
//     console.log(i);
//   }
// }

const secondLargest = (arr) => {
  let max = 0;
  let secondMax = 0;
  for (const num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax) {
      secondMax = num;
    }
  }
  return secondMax;
};

// console.log(secondLargest([90, 1, 23, 45, 67, 12, 33]));

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

// console.log(hasDuplicate([1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10]));

function duplicate(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    for (let j = i + 1; j < myArray.length; j++) {
      if (myArray[i] === myArray[j]) {
        return true;
      }
    }
    return false;
  }
}

console.log(duplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9]));
