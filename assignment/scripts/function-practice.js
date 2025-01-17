console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return name;
}
// Remember to call the function to test
console.log(helloName('Juan'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}
// Will add 2 & 3, equals 5
console.log(addNumbers(2,3));


// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNum, secondNum, thirdNum ){
  return firstNum * secondNum * thirdNum;
}
// function will multiply all numbers to equal 30
console.log(multiplyThree(2, 3, 5));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );
// Test console log statements
console.log(isPositive(3));
console.log(isPositive(0));
console.log(isPositive(-3));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let arrayOne = [2, 4, 6];
let arrayTwo = [1, 3, 5];
let arrayThree = [];

function getLast( array ) {
  return array[array.length-1];
}
console.log('Function test, should return 6:', getLast(arrayOne));
console.log('Function test, should return 5:', getLast(arrayTwo));
console.log('Function test, should return undefined:', getLast(arrayThree));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let anArray = [1, 2, 3, 4, 5, 6];

function find( value, array ){
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  } 
    return false;
}
console.log('Function test, should return true:', find(5, anArray));
console.log('Function test, should return false:', find(7, anArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string.charAt(0)) {
    return true;
  }
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let addAllNum = [1, 2, 3, 4, 5];
function sumAll( array ) {
  let sum = 0
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log('Function Test, sum should be 15:', sumAll(addAllNum));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function mixedArray( array ) {
  let positive = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positive.push(array[i]);
    }
  }
  return positive;
}
let testArray = [3, 4, -7, -1, 2, 5];
console.log(mixedArray(testArray));
let testArrayTwo = [-3, -4, -7, -1, -2, -5];
console.log(mixedArray(testArrayTwo));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
