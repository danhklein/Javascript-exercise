// create a chessboard via user input

//loop through the first time to determine the starting character

//build up a row, and print it out

//the final result should be a perfect square, with alternating "#" and " "


//Demonstration of nesting counters
// var length = 4;

// for (var i = 0; i < (length+1); i++) {
//   for (var j = 1; j < (length+1); j++) {
//     console.log("i:", i, "j:", j);
//   };
// };

//Checkerboard

var length=8;

function chessBoard (length) {
for (var i = 0; i < (length+1); i++) {
  var row = '';
  for (var j = 1; j < (length+1); j++) {
    if (!(i%2) && !(j%2) ) { 
      row+= ' '};
    if (!(i%2) && !!(j%2) ) { 
      row+='#'};
    if (!!(i%2) && !(j%2) ) {
      row +='#' };
    if (!!(i%2) && !!(j%2) ) {
      row +=" "};
  };
  console.log(row);
};
};
