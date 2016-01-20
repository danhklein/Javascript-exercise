//Find the Sum of the parts of a Random number between 1000 and 10000

var randSum = function (randnum) {
//creates random number between 1000 and 100000, but 100000 is to big
var randnum = Math.floor(Math.random() * 1e4 + 1e3);
  if (randnum > 1e4) {randSum()}
    randnum = randnum.toString();
    var arr = [];
    arr=randnum.split('');
    console.log(arr);
    var sum = 0;
  for (var i = 0; i <arr.length; i++) {
    var red = parseInt(arr[i]);
    sum+= red
  }
  console.log(sum);
};
//********
// var randSum = function (randnum) {
//creates random number between 1000 and 100000, but 100000 is to big
// var randnum = Math.floor(Math.random() * 1e4 + 1e3);
//   if (randnum > 1e4) {randSum()}

//     randnum = randnum.toString();
//     var arr = [];
//     arr=randnum.split('');
//     console.log(arr);
//     var sum = 0;
//   for (var i = 0; i <arr.length; i++) {
//     var red = parseInt(arr[i]);
//     sum+= red
//   }
//   return sum
//   for (var i = 0; i<arr.length; i++) {
//     sum -= red;
//     return sum
//   }


// };





// //Create number between 1000 and 10000

// //rannum
// //declares a function called randsu
// var randSum = function (randnum) {
// //creates random number between 1000 and 100000, but 100000 is to big
// var randnum = Math.floor(Math.random() * 1e4 + 1e3);
// var arr = [];
// //this conditional reruns the function if the number is to big
// if (randnum > 1e4) {randSum()};
//   for (var i = 4; i > 0; i--) {
//     if arr.length > 0
//       for (var x = 0; x <3; i++)
//         var prior = arr[x] * 1ei +
//       var x = randSum
//     }
//     //should push the result of the random number divided by the exponent

//     arr.push(Math.floor((randnum/1ei)-arr[i-1])
//       var
//   };
//   return arr
// };



