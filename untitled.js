//Declaring a function, with a name of formatWord
//that accepts a single parameter, the name of which 
// is word
function formatWord (word) {
  //declaring a variable named charactersToRemove
  // and asigning to it an array consisting of 
  // four characters (, . ' ' /)
  //This variable will be used to help us remove
  //characters we don't want from the string.
  var charactersToRemove = [' ', '.', ',','/'];

// We're starting a for loop. We declare a variable
//called i to which we assign the value 0. It will continue 
//to iterate until the condition of i < charactersToRemove.length
//return false. At the end of each loop we increase and set  
// i by 1.
for (var i=0; i < charactersToRemove.length; i++) {

//We are reassigning word to be a new string.
//To do this, we split word into an array on characters
//that come through via charactersToRemove at at index of 
//the current value of i.
//Example: i = 0;
//          charactersToRemove[i] = ' ' (the first item in the array)

//The string splits on the character to remove, 
// returning an array of items that excludes the character.
//Example: "my string".split(" ") -->["my", "string"]

//.join("") transforms this array into a string with no seperation 
//between characters

  word = word.split(charactersToRemove[i].join(''))
};
//Convert the word to all lowercase letters and then return
//the value of word from the function
return word.toLowerCase();
};