// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Sabrina';
// let job = 'singer';
// const year = 1995;

// console.log(addDeclaration(2, 2));
// console.log(addExpression(2, 2));
// console.log(addArrow(2, 2));

function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b; // error : addArrow is not a function (this is because it is undefined)

if (!numProducts) deleteShoppingCart();

var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted');
}

var a = 1;
let b = 2;
const c = 3;
console.log(a === window.a);
