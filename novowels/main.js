// ** Set global variables ** //

var vowels = ['a','e','i','o','u','y'];

// ** Main ** //

function oneVowel (str) {
  var upperCase = stringLowerCase(str);
  var toArray = stringSplit(upperCase);
  var vowelArray = createVowelArray(toArray);
  var solution = vowelCheck(vowelArray);
  return solution;
}

var test1 = oneVowel('MoOn');
console.log(test1);
// var test2 = oneVowel('MoOen');
// console.log(test2);


// ** Helpers ** //

// Take String, change to upper case, split into array
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
    for (var j = 0; j < vowels.length; j++) {
      if (arr[i] === vowels[j]) {
        vowelArray.push(arr[i]);
      }
    }
  }
  return vowelArray;
}

// Add comment
function vowelCheck (vowelArray) {
  for (var i = 0; i < vowelArray.length-1; i++) {
    if (vowelArray[i] !== vowelArray[i+1]) {
      return false;
    }
  }
  return true;
}

oneVowel("Ghost");
oneVowel("Goose");
oneVowel("horse");
oneVowel("ooea");