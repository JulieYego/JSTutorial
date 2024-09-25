let age = 30;
let oldage = age;
age = 31;
console.log(age);
console.log(oldage);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);

// Primitive types
let lastName = 'Sainz';
let oldLastName = lastName;
lastName = 'Norris';
console.log(lastName, oldLastName);

// Reference Types
const autumn = {
  firstName: 'Autumn',
  lastName: 'McPherson',
  age: 23,
};

const marriedAutumn = autumn;
marriedAutumn.lastName = 'Smith';
console.log('Before marriage', autumn);
console.log('After marriage', marriedAutumn);

// Copying Objects
const autumn2 = {
  firstName: 'Autumn',
  lastName: 'McPherson',
  age: 23,
  family: ['Sasha', 'Alice'],
};

const autumnCopy = Object.assign({}, autumn2);
autumnCopy.lastName = 'Parker';
// console.log('Before marriage', autumn2);
// console.log('After marriage', autumnCopy); // A copy of the original.

autumnCopy.family.push('James');
autumnCopy.family.push('Klaus');
console.log('Before marriage', autumn2);
console.log('After marriage', autumnCopy);
// This means that a new object was created in the heap and autumnCopy is now pointing to that object (it has a reference to that new object)
// This only works on the first level. If we have an object inside the object, then this inner object will still be the same (it will still point to the same place in memory)
// object.assign creates a shallow copy (will only copy the properties in the first level) not a deep clone ( would copy everything)
