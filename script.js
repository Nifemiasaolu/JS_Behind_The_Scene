'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, your age is ${age}, born in ${birthYear}`;
    // return output
    // console.log(output);

    if (birthYear >= 1981 && birthYear <= 1995) {
      var millenial = true;
      //   Creating NEW variable with same name with as outer scopes
      const lastName = 'Steven';

      //   Reassigning outer scope's variable
      // output = 'NEW OUTPUT'

      // const str = `Oh! You are a millenial, ${firstName}`;
      // console.log(str);

      function add(a, b) {
        return a + b;
      }
      // console.log(add(2, 3));
    }
    // console.log(millenial);
    // console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);

////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables Hoisting
//  It is not possible to call the variables declaration before defining/declaring them.
// It is slightly possible on the 'var' declaration, but not possible on the 'let' or 'const' variable declartion.

// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'Teacher';
// const year = 1991;


// Function Hoisting

// console.log(addDecl(2, 3));

// console.log(addExpr(2, 3));
// console.log(addArr(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {  //VAR will result to it being 'undefined' because the function is declared with a VAR
  return a + b;
};

const addArr = (a, b) => a + b; //It will result in an error message because it is declared with a const.

// NOTE: 
// FUNCTION DECLARATION CAN  BE CALLED BEFORE IT IS DEFINED
// WHILE FUNCTION EXPRESSION AND ARROW FUNCTION CANNOT BE CALLED BEFORE DEFINED

// Example 
console.log(numProduct);

if (!numProduct) deleteShoppingCart();
var numProduct = 10;

function deleteShoppingCart () {
  console.log('ALL PRODUCTS DELETED!');
}