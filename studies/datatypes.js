/*DATA TYPES Javascript uses simple/primitive and complex types. */
/*1. Numbers, string, and booleans are SIMPLE DATATYPES which are immuatable, of a definite size and cannot aggregate other data types */
  //A. "Strings" - a set of characters between qutation marks
  let string =  "String";
  let stringAlso = "100000";
  //B. Numbers 
  let number = 10;
  let number1 = -10;
  let number2 = .10;
  //C. Boolean - true/false values 
  let bool = true;
  let bool1= false;
//2. Arrays & Objects are collections of data that are COMPLEX DATA TYPES. They can be any size and con hold other values
 
  //A. Arrays are lists that are 0 indexed meaning it's elements are ordered and numbered begining with 0.
  let arr = [0, "1", ["two"], {index: 3}];
// inedx #   0   1       2           3
  //i. An array;s elements can be accessed using bracket notation 
  arr[0]; // Objects, like arrays, are collections but they contain associative key/value pairs. 
    let object = { key : "value",
                keyTwo : "valueTwo"
    };
  //i. Object values can be accessed using bracket or dot notation.  
   object["key"]; // accesses "value" stored at key
   object.keyTwo; // accesses "valueTwo" stored at keyTwo
 
 //3. FUNCTIONS, NaN, null, undefined, Infinity, -Infinity, 
   /*A. A function is a reusable block of code that is first declared and then incoked.
    To declare a function first use the function keyword followed by function name 
    followed by the parameters in parentheses and lastly by the code to be executed in curly brackets */
   function thisIsAFunction(parameter){    //declaration
       console.log("function"); // execute code
   }
   thisIsAFunction(arr);  // invocation
   
   //B. NaN = Not A Number. A global keyword for a non number value
   let nan = "not a number" / 1;
   console.log(nan); // prints NaN
   //C. null is a global value that indicates the absence of a value
   let nada = null; // "nada" represents the intentional absence of a value
   //undefined - undefined is  returned if a variable has been declared but not assigned
   let notDef;
   console.log(notDef); // "undefined" because the variable hasn't been intialized
   //D. Infinity/-Infinity - literal infinity as a value
   console.log(Infinity); 
   console.log(-Infinity); 

//COPY BY REFERENCE VS COPY BY VALUE 
  /*A. Copy by value - When intialized a primitive value creates a space in the program and stores a value there. 
        * A copy by value creates a second place, and stores a copy of the original value in the new space*/
    let OgValue = "original value"; // OgVallue points to "original vlue"
    let copyByyValue = OgValue; //copyByValue copies OgValue's value and creates and new space for it to be stored
  /*B. Copy by reference  stores copies of complex data values by pointing the new variable to the original value*/
     let complexValue = {}; // stores the object
     let complexCopy = complexValue ;// points complexCopy at the value stored in complexValue.

