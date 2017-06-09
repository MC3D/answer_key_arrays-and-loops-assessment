// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');

// ANSWER
sports = ['soccer', 'baseball', 'football', 'swimming']
total = 4

// COMMENT
// array.push will return the new length property of the object it was called on

// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this','is','a','collection','of','words'];
// ANSWER

function longestString(array) {
  var myString = "";

  for(var i = 0; i < array.length; i++) {
    if(myString.length < array[i].length) {
      myString = array[i]
    }
  }

  return myString;
}


console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});


// Use the `numbers` array for questions 3 - 8.
var numbers = [1,12,4,18,9,7,11,3,101,5,6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// ANSWER

function smallestNumber(array) {
  var myNumber = array[0];

  for(var i = 0; i < array.length; i++) {
    if(myNumber > array[i]) {
      myNumber = array[i]
    }
  }

  return myNumber;
}


console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});


// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.
// ANSWER

function getEvens(array) {
  var evensArray = [];

  for(var i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      evensArray.push(array[i]);
    }
  }

  return evensArray;
}


console.assert(getEvens(numbers).toString() === '12,4,18,6', {'message': 'getEvens should return "12,4,18,6"'});


// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// ANSWER

function arrayReverser(array) {
  var reverseArray = [];

  for(var i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }

  return reverseArray;
}

// THINK ABOUT IT
// How could you refactor the code to use unshift?
// The unshift() method adds one or more elements to the beginning of an array.

// function arrayReverser(array) {
//   var reverseArray = [];
//
//   for(var i = 0; i < array.length; i++) {
//     reverseArray.unshift(array[i]);
//   }
//
//   return reverseArray;
// }


console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});


// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// ANSWER

function sumArrayOfNumbers(array) {
  var sum = 0;

  for(var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}


console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});


// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// ANSWER

function numbersOver10(array) {
  var greaterThanTenArray = [];

  for(var i = 0; i < array.length; i++) {
    if(array[i] > 10) {
      greaterThanTenArray.push(array[i]);
    }
  }

  return greaterThanTenArray;
}


console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});


// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// ANSWER

function numbersOverX(array, num) {
  var greaterThanNumArray = [];

  for(var i = 0; i < array.length; i++) {
    if(array[i] > num) {
      greaterThanNumArray.push(array[i]);
    }
  }

  return greaterThanNumArray;
}


console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 9.
// Write a function `joinArrays()` that takes an array of arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// ANSWER

// BE CAREFUL
// An array of arrays is a single parameter

function joinArrays(array) {
  var joinArray = [];

  for(var i = 0; i < array.length; i++) {
    for( var j = 0; j < array[i].length; j++) {
      joinArray.push(array[i][j]);
    }
  }

  return joinArray
}

console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var instructorNameDiscipline = instructors[5];
// answer = ["Will", "JavaScript"]

var instructorOne = instructors[4][0];
// answer = 'Dan'

var instructorTwo = instructors[0][1];
// answer = 'JavaScript'

var instructorThree = instructors[2][0];
// answer = 'Brit'
