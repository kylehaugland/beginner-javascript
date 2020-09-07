console.log('It Works!');

// Regular Function Declaration - Hoisted function
function doctorize1(firstName) {
  return `Dr. ${firstName}`;
}

// Anonymous Function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function Expression - stores function inside variable - does not get hoisted
const doctorize2 = function(firstName) {
  return `Dr. ${firstName}`;
};

const inchToCM = (inches) => inches * 2.54;

// Arrow Functions - short and sweet, don't have their own scope
function add1(a, b = 3) {
  const total = a + b;
  return total;
}

const add2 = (a, b = 3) => a + b;

// IIFE
// Immediately Invoked Function Expression

(function(age) {
  return `you are cool and are ${age} years old`;
})(5);
