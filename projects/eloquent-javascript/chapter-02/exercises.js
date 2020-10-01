
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//function with num parameter holding place of trianglesize
function triangles(num) {
  //empty variable
   let x ="";
  //loop starting a zero ending at triangle size
  for(let i = 0; i < num; i++){
  //assgin character to variable and print character for each loop 
    console.log(x += '#');
  }

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // write a for loop starting at 1 and ending at 100, use mod operator to print Fizz/Buzz/FizzBuzz for multiples 
for (var i=1; i <= 15; i++){
    if (i % 15 == 0) console.log("fizzbuzz");
    else if (i % 5 == 0) console.log("buzz");
    else if (i % 3 == 0) console.log("fizz");
    else console.log(i);
}


}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Declare function with "num" parameter for chessboard size
function drawChessboard(num) {
//variable for board size
let boardSize = num;
//variable for output
let string = "";
//loop boardSize starting at 0 ending with boardSize integer
for (let i = 0; i < boardSize; i++) {
// conditional loop of boardSize value
  for (var j = 0; j < boardSize; j++) {
//if the sum is even print a space
    if ((j + i) % 2 == 0){
      string += " ";
// if odd print #
    }else{
      string += "#";
  }
  //add newline char
  string += "\n";
}
//output
console.log(string);

}
  
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
