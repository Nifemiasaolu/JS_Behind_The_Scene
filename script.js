'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, your age is ${age}, born in ${birthYear}`;
    // return output
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1995) {
      var millenial = true;
      const str = `Oh! You are a millenial, ${firstName}`;
      console.log(str);
    }
    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
