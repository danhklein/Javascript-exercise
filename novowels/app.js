//***Set global variables
var vowels = ['a','e','i','o','u','y'];
var vowelArray = [];
var string = "";
var clone = [];
//****String Prep****
//Take String, change to upper case, split into array
var stringUpcase = function (string) {
  string = string.toUpperCase();
  return string;
};

var stringSplit = function (string) {
  string = string.split('');
  return string;
};

var arrayCreate = function (string) {
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (string[i] === vowels[j]) {
        vowelArray.push(string[i]);
         }

    }

    // return vowelArray;
    // console.log(vowelArray);
  }
  return vowelArray;
};

// var cloneCreate=function (array) {
//   clone = array.slice(0);
//   return clone;
// };

var vowelCheck = function (vowelArray) {
  for (var i=1; vowelArray.length; i++) {
    if (vowelArray[0]===vowelArray[i]) {
    return true;
  }

  }

return false;

};

function oneVowel (string) {
  console.log(string);
  stringUpcase(string);
  stringSplit(string);
  arrayCreate(string);
  // cloneCreate(vowelArray);
  var solution = vowelCheck(vowelArray);
  console.log(solution);
  console.log(vowelArray);
}
//   else {
//     for (var j = i; j< clone.length; j++)
//   }

//          return false;// for (var i = 1; i < vowelArray.length; i++) {
//     for (var j = 1; j < clone.length; j++) {
//       console.log(vowelArray[0],clone[j]);

//       }
//     }
//       else {
//         // console.log("Only one vowel");
//       return true;}



// };

// var vowelCheck = function (vowelArray, clone) {
//   var i =1;
//   while (vowelArray[0]===vowelArray[i] && i < vowelArray.length) {
//     try {
//       return;
//     }
//     finally {
//       if (true) {return true};
//       else return false;
//     }
//     i++;
//   }
// };





// if (!vowelArray.length) {
//   return false
// } else {
//   for (i = 1; i < vowelArray.length; i++) {
//     for (j = 0; j <= clone.length; j++) {
//       if (vowelArray[i] === clone[j]) {
//         return true
//       } else {
//         return false
//       }
//     }
//   }
// }
// console.log(vowelArray, clone);
// }

// var vowelCheck = function (vowelArray, clone){
//   if (vowelArray[0]!==clone[j]) {
//     return false;
//   }
//   else {
//     for (var j = i; j< clone.length; j++)
//   }
//          console.log("More than one vowel");
//          return false;// for (var i = 1; i < vowelArray.length; i++) {
//     for (var j = 1; j < clone.length; j++) {
//       console.log(vowelArray[0],clone[j]);

//       }
//     }
//       else {
//         // console.log("Only one vowel");
//       return true;}



// };


// var codeCheck = function(string) {
//   if (true) {console.log("There is only one vowel");}
//   else {console.log("There is more than one vowel");}
// };

function oneVowel (string) {
  console.log(string);
  stringUpcase(string);
  stringSplit(string);
  arrayCreate(string);
  // cloneCreate(vowelArray);
  var solution = vowelCheck(vowelArray);
  console.log(solution);
  console.log(vowelArray);
  // codeCheck(string);
}

// oneVowel("purple");
// oneVowel("ass");
// oneVowel("rhadamanthine");
oneVowel("redmeet");
oneVowel("aaae");
oneVowel('eeea;')
//***************

// function oneVowel (string) {
//   //declare string and split it into an array
//   var string = string.split('');


//   //declare array of vowels and empty array
//   var vowels = ['a','e','i','o','u','y'];
//   var arr =[];
// // console.log(string.length, vowels.length)
//   //declare two loops which compares letter of string array
//   for (var i = 0; i < string.length; i++) {
//     for (var j = 0; j < vowels.length; j++) {
//       // console.log(string[i], vowels[j]);
//       if (string[i] === vowels[j]) {
//         arr.push(string[i]);
//          }

// // console.log(arr);
//       }
//       return arr
//     }

//     //compare function
//     var arr2 = arr.splice(0);



//     // console.log("Array 1: " + arr + "Array2: " +arr2)
//     // console.log(typeof arr, typeof arr2)
//   for (var i=0; i < arr.length; i++) {
//     for (var j = 0; j < arr2.length; j++) {
//       if (arr[i]===arr2[j]) {
//         return true;

//       }
//     }
//   }
// }

// oneVowel("boob")


//break a part word into an array of letters

//check if each letter is a vowel push to an array

// check for duplicants