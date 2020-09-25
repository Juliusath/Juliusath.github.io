/* LOOPS
*Loops iterate over collections and execute code a number of times based on conditions 
set forth by the conditions of the loop*/

//1. For Loops are best used with arrays.
    // A. Syntax  -  for(starting index; "as long as index is greater than/less than" ; incrementer) {execute this code}
    var iterateMe= []; 
    for(let i = 0; i < iterateMe.length; i++){
        console.log(i);
    }
    //B. Loop Backward to loop backward over an array the loop starts at the final array index point and the incrementor is negative "--" 
    for(let i = iterateMe.length-1; i > 0; i--){
        console.log(i);
    }

//2. While Loops will code "while" a specified condition is true
   //A. Synttax - while(condtion){code; condition++}
  var whileLoop = 1;
  while(whileLoop < 5){
      console.log(whileLoop);
     whileLoop++;
  }
   //B. Infinite Loop-occures when no condition is given to terminate a loop
  
//3. For In Loop iterates over objects
   //A. Syntax - for (let key in object){...code to execute...}
     var loopMe = { "loop": "me"};
     for(let key in loopMe){ 
         console.log( key + loopMe.loop);
     }
       