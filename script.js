'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, your age is ${age}, born in ${birthYear}`;
    // return output
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1995) {
      var millenial = true;
    //   Creating NEW variable with same name with as outer scopes 
      const lastName = 'Steven'

    //   Reassigning outer scope's variable 
      output = 'NEW OUTPUT'

      const str = `Oh! You are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));
    }
    // console.log(millenial);
    // console.log(output);
    
}
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
