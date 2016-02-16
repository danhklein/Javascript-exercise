//Refactoring main.js into higher order functions

var vowels = ['a','e','i','o','u','y'];

function oneVowel (str) {
  var upperCase = stringLowerCase(str);
  var toArray = stringSplit(upperCase);
  var vowelArray = createVowelArray(toArray);
  // var solution = vowelCheck(vowelArray);
  // return solution;
}

function stringLowerCase (str) {
  return str.toLowerCase();
}

function stringSplit (str) {
  return str.split('');
}

// Add comment
function createVowelArray (arr) {
  var vowelArray = [];
  for (var i = 0; i < arr.length; i++) {
    vowelArray.filter(arr===vowels)
    }
  }
  return vowelArray;
// }

// // Add comment
// function vowelCheck (vowelArray) {
//   for (var i = 0; i < vowelArray.length-1; i++) {
//     if (vowelArray[i] !== vowelArray[i+1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log("Ghost")
// return oneVowel("Ghost");
// console.log('Goose')
// return oneVowel("Goose");
// console.log("horse");
// return oneVowel("horse");
// console.log("ooea")
// return oneVowel("ooea");
