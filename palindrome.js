var str = "George"

var palindrome = function (str) {
  var arr = str.split("")
    console.log(arr.join("")); console.log(arr.reverse().join(""))
  if (arr.join("") === arr.reverse().join("")) {
    return true;
  } else { 
    return false;
     };
};
