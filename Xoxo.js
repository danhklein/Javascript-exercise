//Xs and 0s: Create a function that takes a string of "x"s and "o"s as inputs. Return True if the number of "x"s and "o"s is even - and False otherwise.

var Xox = function (input) {
  var test = input;
  var xCounter = 0;
  var oCounter = 0;
  for (var i = 0; i <test.length; i++) {
    if (test.charAt(i)==="x") {
      xCounter++;
    }
   else if (test.charAt(i)==="o") {
      oCounter++;
    }
   else { return "String contains non-x's or o's" }
  }
  if (xCounter%2===0 && oCounter%2===0) {
    return true
  }
  else { return false }
}

console.log(Xox("xoxoxooo"));