
//Write a function that takes a string and 
//returns the longest word in the string

//Refactor the above function (on a new branch) 
// so that it ignores punctuation

function longestWord(string) {
  var sentence = string;
  sentence = sentence.split(" ");
  var longest = "";
  
    for(var i = 0; i <= sentence.length - 1; i++) {
      for (var j = 0; j <= sentence.length - 1; j++) {
        var sentencea = sentence[i];
        var sentenceb = sentence[j];
      
        if (sentence[i].length > sentence[j].length) {
          longest = sentencea
        }
        }
      }
};
return longest;
};


function longestWord(string) {
  var sentence = string;
  sentence = sentence.split(" ");
  var longest = 0;
  var word = ""
  
    for(var i = 0; i <= sentence.length - 1; i++) {
      if (longest < sentence[i].length) {
        longest = sentence[i].length;
        word = sentence[i];
      }
        
       
      }
      return word;
};


