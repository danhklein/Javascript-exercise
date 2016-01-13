
//BAD WAY !

//Declare variable called str and assign string to it
var str = "Bob"
//Declare function called palindrome that takes str as parameter
function palindrome (str) {
  //Declares a variable called arr and assigns it the value of 
  //the variable string under the split method
  //which converts string into an an array with each character
  // as an item (because of the empty string ("") attached to .split
  var arr = str.split("");
  //.join turns the array "arr" into a string which it then compares
  // to the array "arr" first reversed and then turned into a string.
  // Returns true or false.
 return arr.join("") === arr.reverse().join("");
};

//This SOLUTION IS WHAT I SHOULD DO. The previous works, but 
//relies on order of operations in line 16, which I will forget.
//instead in this solution I first assign arr.join('') and
//arr.reverse.join('') to new variables arr2 and arr3.

function palindrome (str) {
  
  var arr = str.split("");
  //new code (see above)
  var arr2 = arr.join("");
  var arr3 = arr.reverse().join("");
 return arr2 === arr3;
};


// Others solution

for (var i = array1.length-1 i >=0; i--)
  array2.push(array1[i]) ??


//Instructions: Figure out if string is palindrome without using .reverse()

//reverse engineerring

//         reverse << format string >> figure out string
// compare  <+                            +> compare