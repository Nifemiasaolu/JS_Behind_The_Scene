'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, your age is ${age}, born in ${birthYear}`;
//     // return output
//     // console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1995) {
//       var millenial = true;
//       //   Creating NEW variable with same name with as outer scopes
//       const lastName = 'Steven';

//       //   Reassigning outer scope's variable
//       // output = 'NEW OUTPUT'

//       // const str = `Oh! You are a millenial, ${firstName}`;
//       // console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       // console.log(add(2, 3));
//     }
//     // console.log(millenial);
//     // console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables Hoisting
//  It is not possible to call the variables declaration before defining/declaring them.
// It is slightly possible on the 'var' declaration, but not possible on the 'let' or 'const' variable declartion.

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'Teacher';
// const year = 1991;

// Function Hoisting

// console.log(addDecl(2, 3));

// console.log(addExpr(2, 3));
// console.log(addArr(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   //VAR will result to it being 'undefined' because the function is declared with a VAR
//   return a + b;
// };

// const addArr = (a, b) => a + b; //It will result in an error message because it is declared with a const.

// NOTE:
// FUNCTION DECLARATION CAN  BE CALLED BEFORE IT IS DEFINED
// WHILE FUNCTION EXPRESSION AND ARROW FUNCTION CANNOT BE CALLED BEFORE DEFINED

// Example
// console.log(numProduct);

// if (!numProduct) deleteShoppingCart();
// var numProduct = 10;

// function deleteShoppingCart() {
// console.log('ALL PRODUCTS DELETED!');
// }

/////////////////////////
// THIS Keyword

// console.log(this);

// const calcAge = function (birthYear) {
// console.log(2037 - birthYear);
// console.log(this); // The THIS Keyword in this regard points to be undefined
// because there's no object that is declared specifically with the method.
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
// console.log(2037 - birthYear);
// console.log(this); //The THIS Keyword in the arrow function points to the GLOBAL SCOPE (Result: WIndow)
// NOTE: The ARROW Function does not get it's own THIS Keyword
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this); //when we have a method call, the THIS Keyword inside the method will be
//     // the OBJECT of the method being called. ==> this === jonas, jonas.calcAge === this.calcAge.
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// NOTE: The THIS keyword will point to the OBJECT that is CALLING the METHOD. It won't
// simply point to the OBJECT in which we wrote the METHOD.

// AN ARROW FUNCTION DOES NOT GET ITS OWN THIS KEYWORD, IT WILL SIMPLY USE THE ONE FROM IT'S SURROUNDINGS.
// Example

// const matilda = {
//   year: 2017,
// }

// matilda.calcAge = jonas.calcAge; //This is called METHOD BORROWING
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

//////////////////////////////////////////////
// REGULAR FUNCTION VS ARROW FUNCTION

// var firstName = 'Matilda'; Never Use var as a variable keyword.

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,

//   calcAge: function () {
// console.log(this);
// console.log(2037 - this.year);

//  SOLUTION 1 (BEFORE ES6)
// const self = this; // You can use 'self' or 'that'.
// const isMillenial = function () {
//   console.log(self); // INSIDE A REGULAR FUNCTION CALL, THE THIS KEYWORD IS ALWAYS SET TO BE UNDEFINED
//   console.log(self.year >= 1981 && self.year <= 1996);
//   // console.log(this.year >= 1981 && this.year <= 1996);
// };

//  SOLUTION 2 (USING ARROW FUNCTION, AFTER ES6) MODERN SOLUTION
// const isMillenial = () => {
// console.log(this); // ARROW FUNCTION DOES NOT HAVE IT'S OWN THIS KEYWORD
// console.log(this.year >= 1981 && this.year <= 1996);
// };

// THIS SIMPLY MEANS THAT IN A REGULAR FUNCTION(INSIDE A FUNCTION) , THIS KEYWORD WILL NOT WORK
// WHILE IN AN ARROW FUNCTION (INSIDE A FUNCTION), THE THIS KEYWORD WILL WORK.
// isMillenial();
// },

// greet: () => console.log(`Hey ${this.firstName}`), // NOTE: NEVER USE AN ARROW FUNCTION AS A METHOD
// };
// jonas.greet();
// jonas.calcAge();

///////////////////////////////
// ARGUMENT KEYWORD

// var addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 3);
// addExpr(2, 3, 5, 4);

// const addArr = (a, b) => {
//  console.log(arguments);
//  return a + b
// };
// addArr(3,5);

// IN SUMMARY, ARGUMENTS EXISTS IN REGULAR FUNCTION (BOTH EXPRESSION AND DECLARATION), BUT NOT IN ARROW FUNCTION.

//////////////////////////////////////////
// PRIMITIVE VS OBJECT VALUES

// PRIMITIVE TYPES
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

// REFERENCE TYPES
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before Marriage:', jessica);
console.log('After Marriage:', marriedJessica);

// COPYING OBJECTS

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before Marriage:', jessica2);
console.log('After Marriage:', jessicaCopy);
