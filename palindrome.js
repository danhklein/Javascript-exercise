
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


// Other solutions

//Mills Solution

for (var i = array1.length-1 i >=0; i--)
  array2.push(array1[i]) ??


//Mills solution: Mills created solution that doesn't require
//turning string into array
// * Description: This function performs according to these requirements:
// *    1) Takes a single argument, a string
// *    2) Returns true or false if the word is a palindrome
// *    3) Ignores spaces and capitalization of the words
// ************************************************************************/
console.log(palindromeChecker("A nut for a jar of tuna"));//Returns true
console.log(palindromeChecker("not a palindrone"));//Returns false

//Declare function that takes a string as a parameter
function palindromeChecker (string) {

    //Assigning string a new string that is all uppercase
    string = string.toUpperCase();
    //Replaces whitespace from string with an empty string
    string = string.replace(/\s+/g, '');//Removes whitespace
    //Declaring a new string that is empty
    var newString = "";
    //Declaring a for loop, in loop a vairable called i is declared
    //i is assigned to the (length of string - 1) for indexing purposes
    //At every iteration i is subtracted by one
    for (var i = string.length - 1; i >= 0; i--) {
        //The character at index i of string is added to newString
        newString = newString + string[i];  
    }

    //Returns true if the two string are equal
    return newString === string;//Returns true if palindrome

}


//Instructions: Figure out if string is palindrome without using .reverse()

//reverse engineerring

//         reverse << format string >> figure out string
// compare  <+                            +> compare